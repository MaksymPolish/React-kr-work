import axios from "axios";

const baseUrl = "https://reqres.in/api";

// Fetch the list of users
export const getUsers = async () => {
  try {
    const response = await axios.get(`${baseUrl}/users`);
    return response.data.data; // Return user data
  } catch (error) {
    console.error("Error fetching users:", error);
    return []; // Return an empty array on error
  }
};

// Delete a user
export const deleteUser = async (userId) => {
  try {
    await axios.delete(`${baseUrl}/users/${userId}`);
  } catch (error) {
    console.error(`Error deleting user with ID ${userId}:`, error);
  }
};
