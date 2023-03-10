import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3001/reviews",
  // baseURL:"https://watchoo-movies.vercel.app/reviews"
});
