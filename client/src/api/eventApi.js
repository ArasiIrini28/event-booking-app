import axios from "axios";

const API = "http://localhost:8083/api";

export const fetchEvents = async () => {
  try {
    const response = await axios.get(`${API}/events`);
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};

export const bookEvent = async (data) => {
  try {
    const response = await axios.post(`${API}/book`, data);
    return response.data;
  } catch (error) {
    console.error("Error booking event:", error);
    throw error;
  }
};