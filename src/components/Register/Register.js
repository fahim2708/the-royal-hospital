import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Register.css';
const Register = () => {
    return (
        <div className="register">
            <div className="mx-auto w-25">
                <h1 className="text-center text-center fst-italic mb-4">
                    Create an account
                </h1>
                <Form onSubmit="">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
                <hr />
                <div className="text-center">
                    <Link to="/login" className="old-user">Already Registered</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;