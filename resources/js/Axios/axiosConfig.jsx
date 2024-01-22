
import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: 'https://admin.premier-petroleum.com/api/v1', 
  baseURL: 'http://localhost:8000/api/v1', 

  timeout: 5000, 
});

export default axiosInstance;