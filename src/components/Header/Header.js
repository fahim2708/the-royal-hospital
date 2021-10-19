import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css';

const Header = () => {
    const { user, logOut } = useFirebase();
    return (
        <div>
            <Navbar bg="info" variant="dark">
                <Container>
                    <Navbar.Brand href="/home" className="">
                        <h3><img src="https://img.icons8.com/office/40/000000/hospital.png" alt="" height="40px" />  The Royal Hospital</h3>
                    </Navbar.Brand>
                    <Nav>
                        <NavLink className="menu text-light" to="/home" activeClassName="selected" activeStyle={{
                            fontWeight: "bold",
                            color: "white"
                        }}> Home
                        </NavLink>
                        <NavLink className="menu text-light" to="/courses" activeClassName="selected" activeStyle={{
                            fontWeight: "bold",
                            color: "white"
                        }}> Services
                        </NavLink>
                        <NavLink className="menu text-light" to="/register" activeClassName="selected" activeStyle={{
                            fontWeight: "bold",
                            color: "white"
                        }}> Register
                        </NavLink>
                        {
                            user.email ? <NavLink className="menu text-light" to="/login" activeClassName="selected" onClick={logOut} activeStyle={{
                                fontWeight: "bold",
                                color: "white"
                            }}><span className="small">Hello, {user.displayName}</span> Logout
                            </NavLink>
                                :
                                <NavLink className="menu text-light" to="/login" activeClassName="selected" activeStyle={{
                                    fontWeight: "bold",
                                    color: "white"
                                }}> Login
                                </NavLink>
                        }

                    </Nav >
                </Container >
            </Navbar >
        </div>
    );
};

export default Header;