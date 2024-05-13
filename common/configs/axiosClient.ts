import axios, { AxiosInstance } from 'axios';

const axiosClient: AxiosInstance = axios.create({
  baseURL: process.env.BACKEND_HOST, // Replace with your API base URL
  timeout: 5000, // Adjust as needed
  headers: {
    'Content-Type': 'application/json',
    // You can add common headers or authentication tokens here
  },
});

export default axiosClient;