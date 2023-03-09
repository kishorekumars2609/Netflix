import React, { useState } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { useLocation, useParams, useNavigate } from "react-router-dom";

const AddReview = () => {
  const { id } = useParams();
  const location = useLocation();
  console.log(location);
  const history = useNavigate();
  console.log(id);

  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("Rating");

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    try {
      const response = await RestaurantFinder.post(`/${id}/addReview`, {
        name,
        review: reviewText,
        rating,
      });
      history.push("/");
      history.push(location.pathname);
    } catch (err) { }
  };
  return (
    <div className="mb-2 overflow-x-hidden	">
      <form action="" className="content-center	">
        <div className="form-col flex flex-col items-center">
          <div className="form-group col-6">
            <label htmlFor="name" className="text-white">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              placeholder="name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group  col-6  flex flex-col">
            <label htmlFor="rating" className="text-white w-45%">Rating</label>
            <select 
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              id="rating"
              className="custom-select h-9 rounded"
            >
              <option disabled>Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="form-group col-12 items-center text-center">
          <label htmlFor="Review" className="text-white">Review</label>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            id="Review"
            className="form-control items-center"
          ></textarea>


           <button
          type="submit"
          onClick={handleSubmitReview}
          className="btn bg-red-600 text-white content-center my-2"
        >
          Submit
        </button>
        </div>
        {/* <button
          type="submit"
          onClick={handleSubmitReview}
          className="btn bg-red-600 text-white content-center"
        >
          Submit
        </button> */}
      </form>
    </div>
  );
};

export default AddReview;
