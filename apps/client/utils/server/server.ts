// create an instance of axios
import axios from 'axios';

const server = axios.create({
  baseURL: process.env.SERVER_URL,
});

export default server;
