import axios from "axios";

// Localhost
// const baseURL ='http://localhost:8080/'
const baseURL ='https://triangle-back.onrender.com'


export default axios.create({
  baseURL: baseURL,
  headers:{"Content-type": "application/json"} 
});