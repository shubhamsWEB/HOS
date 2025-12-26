import axios from "axios";
export const apiUrl = axios.create({
    baseURL: 'https://sansa-app-backend-b4dba8d66c20.herokuapp.com',
  });