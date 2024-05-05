import axios from "axios";
export const apiUrl = axios.create({
    baseURL: 'https://murmuring-oasis-42339-f531ab239064.herokuapp.com',
  });