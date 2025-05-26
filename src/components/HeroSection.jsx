import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Hero.module.css";

const HeroSection = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.content}>
        <h1>
          Show Your <span>Talent</span><br />We’ll Show the World.
        </h1>
        <p>
          Submit your performance and get featured on our YouTube platform.
        </p>
        <Link to="/submit" className={styles.ctaBtn}>
          Submit Your Talent
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
