import axios from "axios";
// import logger from "./logService";
// import { toast } from "react-toastify";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/";
const token = localStorage.getItem('token');

if(token){
  axios.defaults.headers.common['Authorization'] = (`Bearer + ${token}`);
}

// axios.interceptors.response.use(null, error => {
//   const expectedError =
//     error.response &&
//     error.response.status >= 400 &&
//     error.response.status < 500;

//   if (!expectedError) {
//     logger.log(error);
//     toast.error("An unexpected error occurrred.");
//   }

//   return Promise.reject(error);
// });

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete
};
