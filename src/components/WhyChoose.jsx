import React from 'react';
import styles from '../styles/WhyChoose.module.css';
import { FaYoutube, FaUserCheck, FaClock, FaHeart, FaChartLine, FaBullseye } from 'react-icons/fa';

const WhyChoose = () => {
  return (
    <section className={styles.whyChoose} id="why">
      <h2 className={styles.title}>Why Choose TalentTube?</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <FaYoutube className={styles.icon} />
          <h3>Free YouTube Promotion</h3>
          <p>Your talent gets real exposure on our YouTube channel — for free.</p>
        </div>
        <div className={styles.card}>
          <FaUserCheck className={styles.icon} />
          <h3>No Account Needed</h3>
          <p>Just submit your video — no sign-up, no hassle.</p>
        </div>
        <div className={styles.card}>
          <FaClock className={styles.icon} />
          <h3>Fast Review</h3>
          <p>We review and upload worthy content quickly — no long wait times.</p>
        </div>
        <div className={styles.card}>
          <FaHeart className={styles.icon} />
          <h3>Support for All</h3>
          <p>We're passionate about uplifting artists of all backgrounds.</p>
        </div>
        <div className={styles.card}>
          <FaChartLine className={styles.icon} />
          <h3>Real Growth</h3>
          <p>Get noticed by the audience, build fan following, and grow your career.</p>
        </div>
        <div className={styles.card}>
          <FaBullseye className={styles.icon} />
          <h3>Targeted Reach</h3>
          <p>Your videos reach people who love music, dance, acting, and fresh talent.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
