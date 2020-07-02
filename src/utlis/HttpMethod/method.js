import axios from "axios";

export default axios.create({
  baseURL: `https://us-central1-fir-tests-bb382.cloudfunctions.net/`,
});

// const headers = {
//   "Content-Type": "application/json",
//   pragma: "no-cache",
//   "Cache-Control": "no-cache",
// };

// export const Get = (url) => {
//   let options = {
//     method: "GET",
//     headers: headers,
//   };

//   return axios.get(url, options).then((res) => res.json());
// };

// export const Post = (url, params) => {
//   let options = {
//     // method: "POST",
//     // headers: headers,
//     body: JSON.stringify(params),
//   };

//   return axios.post(url, options).then((res) => res.json());
// };
