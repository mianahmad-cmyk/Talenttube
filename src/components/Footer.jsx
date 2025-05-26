import React from 'react';
import styles from '../styles/Footer.module.css';
import { FaYoutube, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left - Brand */}
        <div className={styles.brand}>
          <h3>TalentTube</h3>
          <p>Empowering voices, promoting dreams.</p>
        </div>

        {/* Center - Links */}
        <div className={styles.links}>
          <a href="#hero">Home</a>
          <a href="#featured">Talents</a>
          <a href="#why">Why Us</a>
          <a href="#subscribe">Subscribe</a>
        </div>

        {/* Right - Social / Contact */}
        <div className={styles.contact}>
          <a 
            href="https://www.youtube.com/@yourchannel" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaYoutube className={styles.icon} />
          </a>
          <a href="mailto:contact@talenttube.com">
            <FaEnvelope className={styles.icon} />
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} TalentTube. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
