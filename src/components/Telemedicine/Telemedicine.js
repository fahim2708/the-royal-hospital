import React from 'react';
import './Telemedicine.css';

const Telemedicine = () => {
    return (
        <div className="telemedicine">
            <div className="d-flex justify-content-around align-items-center">
                <div>
                    <img src="https://img.icons8.com/ultraviolet/80/000000/video-call.png" alt="" />
                    <h6>Telemedicine Video Calls</h6>
                </div>
                <div>
                    <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/80/4a90e2/external-money-finance-kiranshastry-lineal-kiranshastry-3.png" alt="" />
                    <h6>Online payments for telemedicine visits</h6>
                </div>
                <div>
                    <img src="https://img.icons8.com/ultraviolet/80/000000/online-money-transfer.png" alt="" />
                    <h6>Remote Patient Monitoring</h6>
                </div>
                <div>
                    <img src="https://img.icons8.com/ultraviolet/80/000000/heart-monitor.png" alt="" />
                    <h6>Health Coaching and Intervention</h6>
                </div>
            </div>
        </div>
    );
};

export default Telemedicine;