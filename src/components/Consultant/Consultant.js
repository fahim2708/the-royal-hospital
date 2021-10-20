import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Consultant.css'

const Consultant = (props) => {
    const { name, sDescription, img } = props.doctor;
    return (
        <div>
            <Col >
                <Card border="secondary" className="single-cards">
                    <Card.Img variant="top" src={img} className="doctors-img" />
                    <Card.Body className="text-center">
                        <Card.Title className="card-title">{name}</Card.Title>
                        <Card.Text className="small text-muted lh-1">{sDescription}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );

};

export default Consultant;