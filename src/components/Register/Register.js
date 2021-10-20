import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css';

const Register = () => {
    const { handleReg, handleEmail, handlePassword, handleName, error } = useAuth();
    return (
        <div className="register">
            <div className="mx-auto w-25">
                <h1 className="text-center text-center fst-italic mb-4">
                    Create an account
                </h1>
                <Form onSubmit={handleReg}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="text" placeholder="Enter Usename" onBlur={handleName} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" onBlur={handleEmail} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" onBlur={handlePassword} required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
                <div>
                    <p className="text-danger mt-3 fst-italic"> {error}</p>
                </div>
                <hr />
                <div className="text-center">
                    <Link to="/login" className="old-user">Already Registered</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;