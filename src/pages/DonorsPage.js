import React, { useEffect, useState } from "react";
import { fetchDonors } from "../services/donors"; // Import only donor-related logic
import styles from "../styles/DonorsPage.module.css";

export default function DonorsPage() {
  const [donors, setDonors] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDonors = async () => {
      try {
        const data = await fetchDonors();
        setDonors(data);
      } catch (err) {
        setError("Failed to load donors");
      } finally {
        setLoading(false);
      }
    };

    getDonors();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Donors List</h1>
      {loading && <p>Loading donors...</p>}
      {error && <p className={styles.error}>{error}</p>}
      {!loading && donors.length > 0 ? (
        <ul className={styles.donorList}>
          {donors.map((donor) => (
            <li key={donor.id} className={styles.donorItem}>
              {donor.name} - {donor.email}
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p>No donors found</p>
      )}
    </div>
  );
}