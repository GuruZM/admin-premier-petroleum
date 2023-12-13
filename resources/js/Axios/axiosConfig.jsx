
import axios from 'axios';

const axiosInstance = axios.create({
//   baseURL: 'http://costing.meitcloudapps.com/api', 
  baseURL: 'http://localhost:8000/api', 
  timeout: 5000, // Set a timeout if needed
});

export default axiosInstance;