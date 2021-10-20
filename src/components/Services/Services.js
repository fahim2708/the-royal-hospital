import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = (props) => {
    const { name, sDescription, img } = props.service;
    return (
        <div id="service">
            <Col>
                <Card border="secondary">
                    <Card.Img variant="top" src={img} className="services-img" />
                    <Card.Body className="text-center">
                        <Card.Title className="card-title">{name}</Card.Title>
                        <Card.Text className="small text-muted lh-1">{sDescription}</Card.Text>
                        <Link to={`/service/${name}`}>
                            <Button variant="" className="fw-bold enroll-btn">Details</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );

};

export default Services;