import React, { useEffect, useState } from "react";
import styles from "../styles/AdminPanel.module.css";

const AdminPanel = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const dummyData = [
      {
        name: "Ali Khan",
        email: "ali@example.com",
        title: "Guitar Solo",
        description: "Live acoustic performance",
        link: "https://youtu.be/abc123",
        fileUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        fileName: "ali_guitar.mp4"
      },
      {
        name: "Sara Malik",
        email: "sara@example.com",
        title: "Dance Freestyle",
        description: "Urban dance to desi beats",
        link: "",
        fileUrl: "https://www.w3schools.com/html/movie.mp4",
        fileName: "sara_dance.mp4"
      },
    ];

    setSubmissions(dummyData);
  }, []);

  return (
    <section className={styles.panel}>
      <h2>Admin Panel – Submissions</h2>
      <div className={styles.grid}>
        {submissions.map((item, idx) => (
          <div className={styles.card} key={idx}>
            <h3>{item.title}</h3>
            <p><strong>Name:</strong> {item.name}</p>
            <p><strong>Email:</strong> {item.email}</p>
            <p><strong>Description:</strong> {item.description}</p>
            {item.link && (
              <p>
                <strong>Link:</strong>{" "}
                <a href={item.link} target="_blank" rel="noreferrer">{item.link}</a>
              </p>
            )}
            <p><strong>File:</strong> {item.fileName}</p>
            {item.fileUrl && (
              <>
                <video controls src={item.fileUrl} className={styles.video} />
                <a href={item.fileUrl} download className={styles.downloadBtn}>
                  Download Video
                </a>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdminPanel;
