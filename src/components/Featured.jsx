import React from 'react';
import styles from '../styles/Featured.module.css';

const Featured = () => {
  return (
    <section className={styles.featured} id="featured">
      <h2 className={styles.title}>Featured Talents</h2>
      <div className={styles.videoGrid}>
        <div className={styles.videoCard}>
          <iframe 
            src="https://www.youtube.com/embed/VIDEO_ID_1" 
            title="Talent 1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen />
        </div>
        <div className={styles.videoCard}>
          <iframe 
            src="https://www.youtube.com/embed/VIDEO_ID_2" 
            title="Talent 2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen />
        </div>
        <div className={styles.videoCard}>
          <iframe 
            src="https://www.youtube.com/embed/VIDEO_ID_3" 
            title="Talent 3"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen />
        </div>
      </div>
    </section>
  );
};

export default Featured;
