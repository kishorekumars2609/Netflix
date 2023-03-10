import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  // console.log(user.email)

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute no-underline	'>
      <Link to='/' className='text-decoration-none'>
        <h1  className='text-red-600 text-4xl font-bold cursor-pointer no-underline	 ' >
          WATCHOO
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to='/account'>
            <button className='text-white mr-2 pr-4'>Account</button>
          </Link>
          {/* <Link to='/movies'>
          <button
            className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'
          >
            Reviews
          </button>
          </Link> */}
          <Link to='/reviews'>
            <button className='pr-4 mr-2 border-none rounded cursor-pointer text-white'>
              Reviews
            </button>
          </Link>
          <button
            onClick={handleLogout}
            className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to='/subscribe'>
            <button className='px-4  mr-2 rounded cursor-pointer text-white'>
              Subscribe
            </button>
          </Link>
          <Link to='/login'>
            <button className='text-white text-center mr-2 ml-1 pr-4'>Sign In</button>
          </Link>
          <Link to='/signup'>
            <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>
              Sign Up
            </button>
          </Link>
          
          
        </div>
      )}
    </div>
  );
};

export default Navbar;







// import React from "react";
// import { Link } from "react-router-dom";
// import { UserAuth } from "../context/AuthContext";

// function Navbar() {
// const {user,logOut}=UserAuth()
// //console.log(user.email)

// const handleLogout = async () => {
//   try {
//     await logOut();
//     navigate('/');
//   } catch (error) {
//     console.log(error);
//   }
// };

//   return (
//     <div className="flex items-centre justify-between p-4 z-[100]  w-full absolute">
//       <Link to="/">
//         <h1 className="text-red-600 text-4xl font-bold curser-pointer">
//           NETFLIX
//         </h1>
//       </Link>
 
//       <div>
//         <Link to="/login">
//           <button className="text-white pr-4"> Sign In</button>
//         </Link>
//         <Link to='/signup'>
//         <button className="bg-red-600 px-6 py-2 rounded cousor-pointer text-white">
      
//           Sign Up
//         </button>
//         </Link>
//      </div>
//     </div>
//   );
// }

// export default Navbar;
