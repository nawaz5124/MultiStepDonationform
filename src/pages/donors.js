import React, { useEffect, useState } from "react";
import { fetchDonors } from "../services/api"; // Import the API service
import styles from "../styles/DonorsPage.module.css"; // Import the CSS Module

export default function DonorsPage() {
  // State for donors, error, and loading
  const [donors, setDonors] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch donors data when the component mounts
  useEffect(() => {
    const getDonors = async () => {
      try {
        const data = await fetchDonors();
        setDonors(data); // Save the fetched data in the state
      } catch (err) {
        setError("Failed to load donors"); // Set error message
      } finally {
        setLoading(false); // Stop the loading spinner
      }
    };

    getDonors();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Donors List Sample</h1>
      {/* Display loading message */}
      {loading && <p>Loading donors...</p>}

      {/* Display error message */}
      {error && <p className={styles.error}>{error}</p>}

      {/* Display donors list or fallback message */}
      {!loading && donors.length > 0 ? (
        <ul className={styles.donorList}>
          {donors.map((donor) => (
            <li key={donor.id} className={styles.donorItem}>
              {donor.name} - {donor.email}
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p>No donors found</p> // Fallback message
      )}
    </div>
  );
}