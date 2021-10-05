import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    const facebook = <FontAwesomeIcon icon={faFacebook} />
    const instagram = <FontAwesomeIcon icon={faInstagram} />
    const twitter = <FontAwesomeIcon icon={faTwitter} />
    const whatsapp = <FontAwesomeIcon icon={faWhatsapp} />
    const copyright = <FontAwesomeIcon icon={faCopyright} />

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
                <div>
                    <h4>Social Media</h4>
                    <a className="m-2" href="www.facebook.com">{facebook}</a>
                    <a className="m-2" href="www.instagram.com">{instagram}</a>
                    <a className="m-2" href="www.twitter.com">{twitter}</a>
                    <a className="m-2" href="www.whatsapp.com">{whatsapp}</a>
                </div>


            </div>
            <p className="text-center">copyright {copyright} protected</p>
        </div>
    );
};

export default Footer;