import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/AdminPanel.module.css";

const AIRTABLE_TOKEN = "pat6bHOdaRwnOSNAl.efeef3b2b7ef579790ab1b7d419248e0b7f2f67684101b069e0d5f8dda4fef50";
const BASE_ID = "appHx98rlpjwcjVcp";
const TABLE_ID = "tbl1O2ANs22JDHQS4";

const AdminPanel = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSubmissions = async () => {
    try {
      const res = await axios.get(
        `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID}`,
        {
          headers: {
            Authorization: `Bearer ${AIRTABLE_TOKEN}`,
          },
        }
      );

      const data = res.data.records.map((record) => ({
        id: record.id,
        ...record.fields,
        fileUrl: record.fields?.videoUrl?.[0]?.url || "",
        fileName: record.fields?.videoUrl?.[0]?.filename || "Untitled.mp4",
      }));

      setSubmissions(data);
      setLoading(false);
    } catch (error) {
      console.error("❌ Failed to fetch data:", error);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this submission?")) return;

    try {
      await axios.delete(
        `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID}/${id}`,
        {
          headers: {
            Authorization: `Bearer ${AIRTABLE_TOKEN}`,
          },
        }
      );
      setSubmissions((prev) => prev.filter((item) => item.id !== id));
      alert("✅ Submission deleted.");
    } catch (error) {
      console.error("❌ Error deleting record:", error);
      alert("❌ Failed to delete submission.");
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  return (
    <section className={styles.panel}>
      <h2>Admin Panel – Submissions</h2>
      {loading ? (
        <p>Loading submissions...</p>
      ) : (
        <div className={styles.grid}>
          {submissions.map((item) => (
            <div className={styles.card} key={item.id}>
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
              <button
                className={styles.deleteBtn}
                onClick={() => handleDelete(item.id)}
              >
                🗑️ Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default AdminPanel;
