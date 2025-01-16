// services/api.js
import axiosInstance from "./config";

// Fetch donors
export const fetchDonors = async () => {
  try {
    const response = await axiosInstance.get("/donors/"); // No need to prepend BASE_URL
    return response.data;
  } catch (error) {
    console.error("Error fetching donors:", error);
    throw error;
  }
};

// Fetch donations
export const fetchDonations = async () => {
  try {
    const response = await axiosInstance.get("/donations"); // No need to prepend BASE_URL
    return response.data;
  } catch (error) {
    console.error("Error fetching donations:", error);
    throw error;
  }
};


// Fetch donors from DonorsTest table
export const fetchDonorsTest = async () => {
  try {
    const response = await axiosInstance.get("/donors-test/"); // Don't forget the trailing slash
    return response.data;
  } catch (error) {
    console.error("Error fetching donors from DonorsTest:", error);
    throw error;
  }
};