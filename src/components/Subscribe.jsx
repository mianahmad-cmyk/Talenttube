import React from 'react';
import styles from '../styles/Subscribe.module.css';
import { FaYoutube } from 'react-icons/fa';

const Subscribe = () => {
  return (
    <section className={styles.subscribe}>
      <h2 className={styles.heading}>Support Raw Talent, One Click at a Time!</h2>
      <p className={styles.text}>
        Subscribe to our YouTube channel and help rising stars shine. Be part of the TalentTube journey.
      </p>
      <a 
        href="https://youtube.com/@TalentTube-viral" 
        className={styles.button}
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaYoutube className={styles.icon} />
        Subscribe Now
      </a>
    </section>
  );
};

export default Subscribe;
