import axios from "axios";

// Localhost
// const baseURL ='https://triangle-back.herokuapp.com/'
const baseURL ='http://localhost:8080/'


export default axios.create({
  baseURL: baseURL,
  headers:{"Content-type": "application/json"} 
});