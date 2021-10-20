import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Consultant from '../Consultant/Consultant';
import './Doctors.css'

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div className="doctors">
            <h1 className="text-center text-info mt-3 fst-italic">Doctors </h1>
            <p className="text-center text-primary mt-3 fst-italic">Our doctors are specialized in their field and have more than 10 years of experiences.</p>
            <Row lg={4} xs={1} className="g-4 mx-auto w-75">
                {
                    doctors.map(doctor => <Consultant
                        key={doctor.name}
                        doctor={doctor}></Consultant>)
                }
            </Row>
        </div>
    );
};

export default Doctors;