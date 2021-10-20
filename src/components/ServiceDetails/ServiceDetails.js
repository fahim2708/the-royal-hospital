import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetails.css'

const ServiceDetails = () => {
    let { serviceId } = useParams();
    const [singleService, setSingleService] = useState({});
    const [oneService, setOneService] = useState({});
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setSingleService(data))
    }, []);

    useEffect(() => {
        const foundService = singleService.find?.(service => service.id === +serviceId)
        setOneService(foundService);
    }, [singleService]);
    return (
        <div className="serviceDetails">
            <h2 className="text-center text-info mb-3">Services of {oneService?.name}</h2>
            <div className="mx-auto w-75">
                <div className="text-center">
                    <img src={oneService?.img} alt="" width="50%" />
                </div>
                <p className="mt-5 text-success">{oneService?.details}</p>
            </div>
        </div>

    );
};

export default ServiceDetails;