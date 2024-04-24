import React from 'react';
import './foot.css';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import {SiGmail, SiMicrosoftoutlook} from 'react-icons/si';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
      <a href="https://github.com/pardhusnc2004" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:pardhasaradhi.polisetty@outlook.com" target="_blank" rel="noopener noreferrer">
          <SiMicrosoftoutlook />
        </a>
        <a href="https://www.instagram.com/pardhu2004_/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="www.linkedin.com/in/pardhasaradhi-polisetty" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
      </div>
      <div className="footer-center">
        <p>&copy; 2024 AuctionSphereX. All rights reserved.</p>
      </div>
      <div className="footer-right">
        <Link to="/contact">
          <p>Get in touch</p>
        </Link>
        
      </div>
    </footer>
  );
}

export default Footer;
