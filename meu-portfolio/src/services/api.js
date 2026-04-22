import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cv-aos-w8e1.vercel.app/',
});

export default api;