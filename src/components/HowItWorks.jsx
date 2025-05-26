import React from 'react';
import styles from '../styles/HowItWorks.module.css';
import { FaVideo, FaUpload, FaYoutube } from 'react-icons/fa';

const HowItWorks = () => {
  return (
    <section className={styles.howItWorks} id="how-it-works">
      <h2 className={styles.title}>How It Works</h2>
      <div className={styles.steps}>
        <div className={styles.step}>
          <FaVideo className={styles.icon} />
          <h3>1. Record Your Talent</h3>
          <p>Capture your best performance — singing, dancing, acting, or any unique skill.</p>
        </div>
        <div className={styles.step}>
          <FaUpload className={styles.icon} />
          <h3>2. Submit to TalentTube</h3>
          <p>Send us your video using the form below. No sign-up required!</p>
        </div>
        <div className={styles.step}>
          <FaYoutube className={styles.icon} />
          <h3>3. Get Featured on YouTube</h3>
          <p>Our team reviews and features top talents on our growing YouTube channel.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
