import React, { useState, useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";

const AddRestaurant = () => {
  const { addRestaurants } = useContext(RestaurantsContext);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await RestaurantFinder.post("/", {
        name,
        location,
        price_range: priceRange,
      });
      console.log(response.data.data);
      addRestaurants(response.data.data.restaurant);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    // style={{position : "relative" , top :100}}
    
    <div className=" py-16" >
      <h1 className='text-white text-center font-semibold'>Please enter the movie name and reviews</h1>
      <form action="">
        <div className="grid grid-cols-3 gap-4">
          <div className="col">
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
              type="text"
              className="border rounded-md py-2 px-3 w-full"
              placeholder="Movie Name"
            />
          </div>
          <div className="col">
            <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              className="border rounded-md py-2 px-3 w-full"
              type="text"
              placeholder="Movie No"
            />
          </div>

          
          <div className="col">
            <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              className="border rounded-md py-2 px-3 w-full"
            >
              <option disabled>How is it?</option>
              <option value="1">Good</option>
              <option value="2">Super</option>
              <option value="3">Excellent</option>
            </select>
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md col-span-3"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  
)


  // return (
  //   <div className="mb-4">
  //     <form action="">
  //       <div className="form-row">
  //         <div className="col">
  //           <input
  //             value={name}
  //             onChange={(e) => setName(e.target.value)}
  //             type="text"
  //             className="form-control"
  //             placeholder="Name"
  //           />
  //         </div>
  //         <div className="col">
  //           <input
  //             value={location}
  //             onChange={(e) => setLocation(e.target.value)}
  //             className="form-control"
  //             type="text"
  //             placeholder="Problem No"
  //           />
  //         </div>
  //         <div className="col">
  //           <select
  //             value={priceRange}
  //             onChange={(e) => setPriceRange(e.target.value)}
  //             className="custom-select my-1 mr-sm-2"
  //           >
  //             <option disabled>Difficulty</option>
  //             <option value="1">Easy</option>
  //             <option value="2">Medium</option>
  //             <option value="3">Hard</option>
              
  //           </select>
  //         </div>
  //         <button
  //           onClick={handleSubmit}
  //           type="submit"
  //           className="btn btn-primary"
  //         >
  //           Add
  //         </button>
  //       </div>
  //     </form>
  //   </div>
  // );
};

export default AddRestaurant;
