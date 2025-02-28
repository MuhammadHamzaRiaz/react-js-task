import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const http = async (endpoint: string, method: "GET") => {
  try {
    const response = await axios({
      url: `${API_BASE_URL}${endpoint}`,
      method,
    });

    return response.data;
  } catch (error) {
    console.error("Error occurred while fetching data", error);
    throw "Something went wrong";
  }
};

export default http;
