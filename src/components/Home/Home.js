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
                        <h1 className="text-warning"><img src="https://img.icons8.com/external-icongeek26-flat-icongeek26/50/000000/external-call-advertising-icongeek26-flat-icongeek26.png" alt="" height="50px" /> <span className="book-num"> Hotline 16247 </span></h1>
                        <Button variant="" className="appointment-button">Book an Appoinment</Button>{' '}
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
        </div>
    );
};

export default Home;