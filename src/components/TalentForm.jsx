import React, { useState } from 'react';
import styles from '../styles/TalentForm.module.css';

const TalentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    description: '',
    link: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Talent submitted successfully!');
  };

  return (
    <section className={styles.section}>
      <div className={styles.formCard}>
        <h2>Submit Your Talent</h2>
        <p>Share your skills with the world — we’ll showcase you on our YouTube channel.</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="title"
            placeholder="Talent Title"
            required
            onChange={handleChange}
          />
          <textarea
            name="description"
            placeholder="Describe your talent..."
            rows="4"
            required
            onChange={handleChange}
          ></textarea>
          <input
            type="url"
            name="link"
            placeholder="YouTube Link (optional)"
            onChange={handleChange}
          />
          <input
            type="file"
            name="file"
            accept="video/*,image/*"
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default TalentForm;
