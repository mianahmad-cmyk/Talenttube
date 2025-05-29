import React, { useState, useRef } from 'react';
import axios from 'axios';
import styles from '../styles/TalentForm.module.css';

const TalentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    description: '',
    link: '',
  });

  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const fileInputRef = useRef(null); // for resetting file input

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFile(files[0]);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("✅ Your talent is being submitted...");

    try {
      // Step 1: Create Airtable record without video
      const initialRecord = {
        fields: {
          name: formData.name,
          email: formData.email,
          title: formData.title,
          description: formData.description,
          link: formData.link,
        }
      };

      const airtableRes = await axios.post(
        'https://api.airtable.com/v0/appHx98rlpjwcjVcp/tbl1O2ANs22JDHQS4',
        initialRecord,
        {
          headers: {
            Authorization: 'Bearer pat6bHOdaRwnOSNAl.efeef3b2b7ef579790ab1b7d419248e0b7f2f67684101b069e0d5f8dda4fef50',
            'Content-Type': 'application/json'
          }
        }
      );

      const recordId = airtableRes.data.id;

      // Show final message to user
      setMessage("✅ Submitted! Thank you.");
      setFormData({
        name: '',
        email: '',
        title: '',
        description: '',
        link: '',
      });
      setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = null; // clear file input

      // Step 2: Upload video in background
      if (file) {
        const videoData = new FormData();
        videoData.append('file', file);
        videoData.append('upload_preset', 'talenttube');
        videoData.append('cloud_name', 'dio7r7xft');

        const cloudinaryRes = await axios.post(
          'https://api.cloudinary.com/v1_1/dio7r7xft/video/upload',
          videoData
        );

        const videoUrl = cloudinaryRes.data.secure_url;

        // Step 3: Update Airtable record with video URL
        await axios.patch(
          `https://api.airtable.com/v0/appHx98rlpjwcjVcp/tbl1O2ANs22JDHQS4/${recordId}`,
          {
            fields: {
              videoUrl: [{ url: videoUrl }]
            }
          },
          {
            headers: {
              Authorization: 'Bearer pat6bHOdaRwnOSNAl.efeef3b2b7ef579790ab1b7d419248e0b7f2f67684101b069e0d5f8dda4fef50',
              'Content-Type': 'application/json'
            }
          }
        );

        console.log("✅ Video uploaded and Airtable updated");
      }
    } catch (error) {
      console.error("❌ Error:", error);
      setMessage("❌ Something went wrong. Try again.");
    }
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
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="title"
            placeholder="Talent Title"
            required
            value={formData.title}
            onChange={handleChange}
          />
          <textarea
            name="description"
            placeholder="Describe your talent..."
            rows="4"
            required
            value={formData.description}
            onChange={handleChange}
          ></textarea>
          <input
            type="url"
            name="link"
            placeholder="YouTube Link (optional)"
            value={formData.link}
            onChange={handleChange}
          />
          <input
            type="file"
            name="file"
            accept="video/*"
            onChange={handleChange}
            ref={fileInputRef}
          />
          <button type="submit">Submit</button>
          {message && <p>{message}</p>}
        </form>
      </div>
    </section>
  );
};

export default TalentForm;
