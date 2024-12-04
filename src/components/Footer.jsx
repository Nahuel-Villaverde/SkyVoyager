import React from "react";
import { Link } from 'react-scroll';
import '../styles/Footer.css'

const Footer = () => {
    return (
        <footer className="footer-container">
            <Link to="home" smooth={true} duration={500} className="back-home">
                SkyVoyager
            </Link>
            <span className="info-footer">For information about our launch services, contact clients@skyvoyager.com</span>
            <span className="signature">SkyVoyager © 2024</span>
        </footer>
    );
};

export default Footer;