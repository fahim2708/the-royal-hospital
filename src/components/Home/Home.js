import React, { useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import Services from '../Services/Services';
import banner from '../../banner.svg';
import './Home.css';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            {/* Banner */}
            <div>
                <div className="d-flex justify-content-around align-items-center mx-auto w-75">
                    <div>
                        <h1 className="text-warning"><img src="https://img.icons8.com/external-bearicons-blue-bearicons/64/000000/external-Call-miscellany-texts-and-badges-bearicons-blue-bearicons.png" alt="" height="50px" /> <span className="book-num"> Hotline 16247 </span></h1>
                        <div className="text-center">
                            <Button variant="" className="appointment-button">Book an Appoinment</Button>{' '}
                        </div>
                    </div>
                    <div>
                        <img src={banner} alt="" height="600px" width="600px" />
                    </div>
                </div>
            </div>
            {/* Services */}
            <div>
                <h2 className="text-center text-info mt-3 fst-italic">Our Services</h2>
                <Row md={4} className="g-4 mx-auto w-75">
                    {
                        services.map(service => <Services
                            key={service.name}
                            service={service}></Services>)
                    }
                </Row>
            </div>
            {/* info */}
            <div className="info">
                <div className="d-flex justify-content-around align-items-center py-3">
                    <div>
                        <img src="https://img.icons8.com/ultraviolet/80/000000/hospital-room.png" alt="" />
                        <h3 className="fw-bolder fst-italic">110</h3>
                        <h6>Single Cabins</h6>
                    </div>
                    <div>
                        <img src="https://img.icons8.com/ultraviolet/80/000000/hospital-3.png" alt="" />
                        <h3 className="fw-bolder fst-italic">700</h3>
                        <h6>In Patients Bed</h6>
                    </div>
                    <div>
                        <img src="https://img.icons8.com/ultraviolet/40/000000/date-man-man.png" alt="" />
                        <h3 className="fw-bolder fst-italic">1900</h3>
                        <h6>Staffs</h6>
                    </div>
                    <div>
                        <img src="https://img.icons8.com/ultraviolet/80/000000/doctors-bag.png " alt="" />
                        <h3 className="fw-bolder fst-italic">210</h3>
                        <h6>Consultants</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;