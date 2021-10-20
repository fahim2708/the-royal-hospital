import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer footer-top">
            <div className="d-flex justify-content-between align-items-center mx-auto w-50 pt-3">
                <div>
                    <p className="footer-top-text fst-italic fw-bold"><img src="https://img.icons8.com/office/30/000000/worldwide-location.png" alt="" />  House-105, Road-11, Banani, Dhaka</p>
                    <p className="footer-top-text fst-italic fw-bold"><img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/36/000000/external-call-medical-kiranshastry-lineal-color-kiranshastry.png" alt="" /> 10680</p>
                    <p className="footer-top-text fst-italic fw-bold"><img src="https://img.icons8.com/external-itim2101-flat-itim2101/30/000000/external-email-digital-marketing-itim2101-flat-itim2101.png" alt="" />  info@royalhospital.bd.com</p>
                </div>
                <div>
                    <img src="https://img.icons8.com/doodle/48/000000/facebook-new.png" alt="" />
                    <img src="https://img.icons8.com/doodle/48/000000/twitter--v1.png" alt="" />
                    <img src="https://img.icons8.com/doodle/48/000000/youtube-play--v2.png" alt="" />
                    <img src="https://img.icons8.com/doodle/48/000000/linkedin--v2.png" alt="" />
                </div>
            </div>
            <div className="footer-bg py-2">
                <h5 className="text-center text-light">Copyright © 2021 The Royal Hospital Limited, All rights Reserved</h5>
            </div>
        </div>
    );
};

export default Footer;