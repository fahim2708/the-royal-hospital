import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInWithGoogle } = useAuth();
    return (
        <div className="login">
            <div className="mx-auto w-25">
                <h1 className="text-center fst-italic">
                    Login
                </h1>
                <Form onSubmit="">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
                <hr />
            </div>

            <div className="text-center">
                <Button variant="bg-transparent m-3" onClick={signInWithGoogle}><img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="" /></Button>
                <br />
                <Link to="/register" className="new-user">New User?</Link>
            </div>
        </div>
    );
};

export default Login;