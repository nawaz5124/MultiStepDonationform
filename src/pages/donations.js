import axiosInstance from "./config";

// Fetch donations
export const fetchDonations = async () => {
  try {
    const response = await axiosInstance.get("/donations");
    return response.data;
  } catch (error) {
    console.error("Error fetching donations:", error);
    throw error;
  }
};

// Add more donation-related functions if needed, e.g., createDonation, updateDonation, deleteDonation.