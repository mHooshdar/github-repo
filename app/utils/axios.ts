import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

// instance.interceptors.response.use(
//   // exposing only the data of request
//   // you can expose the status or anything else or show some tooltip in the error status
//   response => response.data,
//   error => Promise.reject(error.message)
// );

export default instance;
