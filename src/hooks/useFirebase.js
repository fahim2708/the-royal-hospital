import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initAuth from "../Firebase/firebase.init";

initAuth();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
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
        logOut
    }
}

export default useFirebase;