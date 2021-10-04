import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer py-2 mt-5">
            <div className="d-flex justify-content-center m-5">

                <div className="mx-5">
                    <h3>Contact Us</h3>
                    <p>Email: Lyrico@gmail.com</p>
                    <p>Phone: 124546</p>
                    <p>Mobile: +8801245554866</p>
                </div>
                <div className="mx-5">
                    <h4>Address</h4>
                    <p>Block C, Road-122</p>
                    <p>Chealses Street, London</p>
                    <p>England</p>
                </div>
                <div className="mx-5">
                    <h4>Social Media</h4>
                </div>

            </div>
            <p className="text-center">copyright protected</p>
        </div>
    );
};

export default Footer;