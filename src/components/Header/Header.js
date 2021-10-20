import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar className="header" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">
                        <h3 className="title fw-bold"><img src="https://img.icons8.com/office/40/000000/hospital.png" alt="" height="40px" />  The Royal Hospital</h3>
                    </Navbar.Brand>
                    <Nav>
                        <NavLink className="menu" to="/home" activeClassName="selected" activeStyle={{
                            fontWeight: "bold",
                            color: "#2980b9"
                        }}> Home
                        </NavLink>
                        <NavLink className="menu" to="/doctors" activeClassName="selected" activeStyle={{
                            fontWeight: "bold",
                            color: "#2980b9"
                        }}> Doctors
                        </NavLink>
                        <NavLink className="menu" to="/telemedicine" activeClassName="selected" activeStyle={{
                            fontWeight: "bold",
                            color: "#2980b9"
                        }}> Telemedicine
                        </NavLink>
                        {
                            user.email ? <NavLink className="menu" to="/login" activeClassName="selected" onClick={logOut} activeStyle={{
                                fontWeight: "bold",
                                color: "#2980b9;"
                            }}>
                                <img src={user.photoURL} alt="" height="25px" className="pro-img" /><span className="pro-name">   {user.displayName}</span> Logout
                            </NavLink>
                                :

                                <NavLink className="menu" to="/login" activeClassName="selected" activeStyle={{
                                    fontWeight: "bold",
                                    color: "#2980b9"
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