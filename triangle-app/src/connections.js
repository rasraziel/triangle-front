import axios from "axios";

// Localhost
const baseURL ='http://localhost:8080/'


export default axios.create({
  baseURL: baseURL,
  headers:{"Content-type": "application/json"} 
});