// pages/DonorsTestPage.js
import React, { useEffect, useState } from "react";
import { fetchDonorsTest } from "../services/api";
import styles from "../styles/DonorsPage.module.css";

export default function DonorsTestPage() {
  const [donorsTest, setDonorsTest] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDonorsTest = async () => {
      try {
        const data = await fetchDonorsTest();
        setDonorsTest(data);
      } catch (err) {
        setError("Failed to load donors-test data");
      } finally {
        setLoading(false);
      }
    };

    getDonorsTest();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Donors Test List</h1>
      {loading && <p>Loading donors...</p>}
      {error && <p className={styles.error}>{error}</p>}
      {!loading && donorsTest.length > 0 ? (
        <ul className={styles.donorList}>
          {donorsTest.map((donor) => (
            <li key={donor.id} className={styles.donorItem}>
              {donor.name} - {donor.email} - {donor.mobile_number} (${donor.amount_donated})
            </li>
          ))}
        </ul>
      ) : (
        <p>No donors found</p>
      )}
    </div>
  );
}