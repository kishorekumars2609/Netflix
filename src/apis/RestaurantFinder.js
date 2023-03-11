import axios from "axios";

export default axios.create({
  baseURL: "https://watchoo-backend.onrender.com/reviews",
  // baseURL:"https://watchoo-movies.vercel.app/reviews"
});
