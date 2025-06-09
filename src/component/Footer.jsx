import React from 'react';
import '../assets/css/Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faWikipediaW, faPinterestP } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_inner">
        <div className="footer-icons">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/profile.php?id=61576673130333"
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebookF} className="footer-icon" />
        </a>

        {/* Pinterest */}
        <a
          href="https://jp.pinterest.com/tetsuhiro_muneyuki/"
          aria-label="Pinterest"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faPinterestP} className="footer-icon" />
        </a>

        {/* Wantedly */}
        <a
          href="https://www.wantedly.com/id/tetsuhiro_muneyuki"
          aria-label="Wantedly"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWikipediaW} className="footer-icon" />
        </a>
      </div>
    
      <p className="footer_inner_copy">&copy; TETSUHIRO MUNEYUKI</p>
      </div>
    </footer>
  );
};

export default Footer;
