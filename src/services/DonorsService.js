import axiosInstance from "./config";

// Fetch donors
export const fetchDonors = async () => {
  try {
    const response = await axiosInstance.get("/donors");
    return response.data;
  } catch (error) {
    console.error("Error fetching donors:", error);
    throw error;
  }
};

// Add more donor-related functions if needed, e.g., createDonor, updateDonor, deleteDonor.