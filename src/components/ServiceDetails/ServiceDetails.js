import React from 'react';
import { useParams } from 'react-router';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const { serviceName } = useParams();
    return (
        <div className="serviceDetails">
            <h2 className="text-center text-info">Services of {serviceName}</h2>
        </div>
    );
};

export default ServiceDetails;