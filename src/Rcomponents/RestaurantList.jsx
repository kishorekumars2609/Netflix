import React, { useEffect, useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import StarRating from "./StarRating";
import { Link,useNavigate } from "react-router-dom";

const RestaurantList = (props) => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);
  
  let history = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get("/");
        console.log(response.data.data);
        setRestaurants(response.data.data.restaurants);
      } catch (err) {}
    };

    fetchData();
  }, []);

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      const response = await RestaurantFinder.delete(`/${id}`);
      setRestaurants(
        restaurants.filter((restaurant) => {
          return restaurant.id !== id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  // const handleUpdate = (e, id) => {
  //   e.stopPropagation();
  //   history.push(`/restaurants/${id}/update`);
  // };

  const handleRestaurantSelect = (id) => {
    // history.push(`/reviews/${id}`);
    history(`/reviews/${id}`);
  };

  const renderRating = (restaurant) => {
    if (!restaurant.count) {
      return <span className="text-warning">0 reviews</span>;
    }
    return (
      <>
        <StarRating rating={restaurant.id} />
        <span className="text-warning ml-1">({restaurant.count})</span>
      </>
    );
  };

  return (
    <div className=" relative  " >
      <table className="table-auto w-full">
        <thead >
          <tr className="bg-gray-800 text-gray-300  text-center">
            <th scope="px-4 py-2">Movie Name</th>
            <th scope="px-4 py-2">Movie No</th>
            <th scope="px-4 py-2">Difficulty</th>
            <th scope="px-4 py-2">Ratings</th>
            <th scope="px-4 py-2">Edit</th>
            <th scope="px-4 py-2">Delete</th>
          </tr>
        </thead>
        <tbody className=" text-center">
          {restaurants &&
            restaurants.map((restaurant) => {
              return (
                <tr  className="bg-gray-700 cursor-pointer"
                  onClick={() => handleRestaurantSelect(restaurant.id)}
                  key={restaurant.id}
                >
                  <td className="px-4 py-2 text-gray-300">{restaurant.name}</td>
                  <td className="px-4 py-2 text-gray-300">{restaurant.location}</td>
                  <td className="px-4 py-2 text-gray-300">{"✮".repeat(restaurant.price_range)}</td>
                  <td className="px-4 py-2 text-gray-300">{renderRating(restaurant)}</td>
                  <td className="px-4 py-2">
                    <button
                      // onClick={(e) => handleUpdate(e, restaurant.id)}
                      className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded"                    >
                      Update
                    </button>
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={(e) => handleDelete(e, restaurant.id)}
                      className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded"                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;


// return (
//   <div className="list-group relative  " >
//     <table className="table table-hover table-dark text-white w-full">
//       <thead>
//         <tr className=" ">
//           <th scope="col">Movie Name</th>
//           <th scope="col">Movie No</th>
//           <th scope="col">Difficulty</th>
//           <th scope="col">Ratings</th>
//           <th scope="col">Edit</th>
//           <th scope="col">Delete</th>
//         </tr>
//       </thead>
//       <tbody>
//         {restaurants &&
//           restaurants.map((restaurant) => {
//             return (
//               <tr
//                 onClick={() => handleRestaurantSelect(restaurant.id)}
//                 key={restaurant.id}
//               >
//                 <td>{restaurant.name}</td>
//                 <td>{restaurant.location}</td>
//                 <td>{"✮".repeat(restaurant.price_range)}</td>
//                 <td>{renderRating(restaurant)}</td>
//                 <td>
//                   <button
//                     // onClick={(e) => handleUpdate(e, restaurant.id)}
//                     className="btn btn-warning"
//                   >
//                     Update
//                   </button>
//                 </td>
//                 <td>
//                   <button
//                     onClick={(e) => handleDelete(e, restaurant.id)}
//                     className="btn btn-danger"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             );
//           })}
//       </tbody>
//     </table>
//   </div>
// );