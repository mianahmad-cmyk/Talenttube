import React, { useState } from 'react';
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

  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

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

    if (!file) {
      setMessage('❌ Please upload a video.');
      return;
    }

    setIsUploading(true);
    setMessage('Uploading your video...');

    const formDataToCloudinary = new FormData();
    formDataToCloudinary.append('file', file);
    formDataToCloudinary.append('upload_preset', 'talenttube');
    formDataToCloudinary.append('cloud_name', 'dio7r7xft');

    try {
      // 1. Upload video to Cloudinary
      const cloudinaryResponse = await axios.post(
        'https://api.cloudinary.com/v1_1/dio7r7xft/video/upload',
        formDataToCloudinary
      );
      const videoUrl = cloudinaryResponse.data.secure_url;

      // 2. Instantly show success to user ✅
      setMessage('✅ Thank you! Your video has been received.');
      setIsUploading(false);

      // 3. Reset the form
      setFormData({
        name: '',
        email: '',
        title: '',
        description: '',
        link: '',
      });
      setFile(null);

      // 4. Background Airtable upload (no wait!)
      setTimeout(() => {
        const recordData = {
          fields: {
            name: formData.name,
            email: formData.email,
            title: formData.title,
            description: formData.description,
            link: formData.link,
            videoUrl: [{ url: videoUrl }],
          }
        };

        axios.post(
          'https://api.airtable.com/v0/appHx98rlpjwcjVcp/tbl1O2ANs22JDHQS4',
          recordData,
          {
            headers: {
              Authorization: 'Bearer pat6bHOdaRwnOSNAl.efeef3b2b7ef579790ab1b7d419248e0b7f2f67684101b069e0d5f8dda4fef50',
              'Content-Type': 'application/json'
            }
          }
        ).then((res) => {
          console.log('🟢 Airtable saved successfully in background', res.data);
        }).catch((err) => {
          console.error('🔴 Airtable upload failed (background):', err.message);
        });
      }, 100); // Just delay to make it async

    } catch (error) {
      console.error('Cloudinary error:', error);
      setMessage('❌ Upload failed. Please try again.');
      setIsUploading(false);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.formCard}>
        <h2>Submit Your Talent</h2>
        <p>Share your skills with the world — we’ll showcase you on our YouTube channel.</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
          <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
          <input type="text" name="title" placeholder="Talent Title" required value={formData.title} onChange={handleChange} />
          <textarea name="description" placeholder="Describe your talent..." rows="4" required value={formData.description} onChange={handleChange}></textarea>
          <input type="url" name="link" placeholder="YouTube Link (optional)" value={formData.link} onChange={handleChange} />
          <input type="file" name="file" accept="video/*" onChange={handleChange} />
          <button type="submit" disabled={isUploading}>{isUploading ? 'Uploading...' : 'Submit'}</button>
          {message && <p>{message}</p>}
        </form>
      </div>
    </section>
  );
};

export default TalentForm;
