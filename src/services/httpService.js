import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/";
const token = localStorage.getItem('token');

if(token){
  axios.defaults.headers.common = {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
    "Authorization": "Bearer " + token
  };

axios.interceptors.response.use(null, err => {
  switch(err.response.status) {
    case 403:
      window.location.replace("http://localhost:3000");
    break;
  }
});

  // axios.defaults.headers.common['Authorization'] = `Bearer + ${token}`;
  // axios.defaults.headers.common['Content-Type'] = 'application/json';
  // axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
  // axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
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
