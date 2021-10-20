import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import initAuth from "../Firebase/firebase.init";

initAuth();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    const handleName = e => {
        setDisplayName(e.target.value);
    }
    const handleReg = e => {
        e.preventDefault();
        if (password.length < 5) {
            setError("Password must be at least 6 charecters")
            return;
        }
        createUserWithEmailAndPassword(auth, email, password, displayName)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            });

    }

    const processLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            });
    }
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                setError(error.message);
            })


    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((error) => {

            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, [])

    return {
        user,
        error,
        signInWithGoogle,
        handleReg,
        handleEmail,
        handleName,
        handlePassword,
        processLogin,
        logOut
    }
}

export default useFirebase;