import axios from "axios";

const makeRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
  },
});
// Add an interceptor to handle errors globally
makeRequest.interceptors.response.use(
  (response) => {
    // Return the successful response data
    return response.data;
  },
  (error) => {
    // Handle and log the error
    console.error("Request error:", error.message); // Log the error message
    console.error("Response status:", error.response?.status); // Log the response status

    // Throw the error to propagate it to the caller
    throw error;
  }
);
export default makeRequest;
