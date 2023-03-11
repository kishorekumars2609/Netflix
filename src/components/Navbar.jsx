// import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// import { Link, useNavigate } from 'react-router-dom';
// import { UserAuth } from '../context/AuthContext';


// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const { user, logOut } = UserAuth();
//   const navigate = useNavigate();

//   const toggleNav = () => {
//     setIsOpen(!isOpen);
//   };

//     const handleLogout = async () => {
//     try {
//       await logOut();
//       navigate('/');
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <nav className="flex items-center justify-between  flex-wrap  p-6 z-[10000]">
//       <Link to='/' className='text-decoration-none'>
//          <h1  className='text-red-600 text-4xl font-bold cursor-pointer no-underline	 ' >
//            WATCHOO
//          </h1>
//        </Link>
//       {user?.email ? (
// <div className=" lg:w-[30%] ">
// <div className="block lg:hidden">
//         <button
//           className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
//           onClick={toggleNav}
//         >
//           <svg
//             className="fill-current h-3 w-3"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <title>Menu</title>
//             {isOpen ? (
//               <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M3 4h14a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm14 5H3a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2zm0 5H3a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2z"
//               />
//             ) : (
//               <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M3 4h14a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 5h14a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 5h14a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2z"
//               />
//             )}
//           </svg>
//         </button>
//       </div>
//       <div
//         className={`${
//           isOpen ? "block" : "hidden"
//         } w-[50%] block flex-grow lg:flex lg:items-center lg:w-auto`}
//       >
//         <div className="text-m w-full lg:flex lg:justify-between">
//           <Link
//             to="/account"
//             className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4"
//           >
//             Account
//           </Link>
//           <Link
//             to="/reviews"
//             className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4"
//           >
//             Reviews
//           </Link>
//           <button
//             onClick={handleLogout}
//            className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'  
//           >
//             Logout
//           </button>
//         </div>
//       </div>
// </div>
// ):(
//   <div className=" lg:w-[30%] ">
// <div className="block lg:hidden">
//         <button
//           className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
//           onClick={toggleNav}
//         >
//           <svg
//             className="fill-current h-3 w-3"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <title>Menu</title>
//             {isOpen ? (
//               <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M3 4h14a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm14 5H3a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2zm0 5H3a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2z"
//               />
//             ) : (
//               <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M3 4h14a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 5h14a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 5h14a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2z"
//               />
//             )}
//           </svg>
//         </button>
//       </div>
//       <div
//         className={`${
//           isOpen ? "block" : "hidden"
//         } w-[50%] block flex-grow lg:flex lg:items-center lg:w-auto`}
//       >
//         <div className="text-m w-full lg:flex lg:justify-between">
//           <Link
//             to="/"
//             className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4"
//           >
//             Home
//           </Link>
//           <Link
//             to="/subscribe"
//             className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4"
//           >
//             subscribe
//           </Link>
//           <Link
//             to="/login"
//             className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200"
//           >
//             Logout
//           </Link>
//         </div>
//       </div>
// </div>
// )}
//     </nav>
//   );
// }

// export default Navbar;
///aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';


export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { user, logOut } = UserAuth();
     const navigate = useNavigate();

  const handleLogout = async () => {
        try {
          await logOut();
          navigate('/');
        } catch (error) {
          console.log(error);
        }
      };
//  console.log(user.email)
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-zinc-800">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link to='/' className='text-decoration-none'>
        <h5 className='text-red-600 text-4xl font-bold cursor-pointer no-underline	 ' >
           WATCHOO
         </h5>
       </Link>
       
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          {user?.email ? (
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
              <Link to='/account'>
                  <button className=" text-lg leading-lg pr-3  text-white opacity-75"><span className="ml-2 text-white">Accounts</span></button>
                </Link>
              </li>
              <li className="nav-item">
              <Link to='/reviews'>
                  <button className=" text-lg leading-lg pr-3 text-white opacity-75"><span className="ml-2 text-white">Reviews</span></button>
                </Link>
              </li>
              <li className="nav-item">
                
              <button onClick={handleLogout} className=" text-lg leading-lg bg-red-600  rounded pr-3 ml-2 text-white "><span className="ml-2 text-white">Logout</span></button>
                
              </li>
              
            </ul>
          </div>
          ):(
            <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
              <Link to='/subscribe'>
                  <button className=" text-lg leading-lg pr-3  text-white opacity-75"><span className="ml-2 text-white">Subscribe</span></button>
                </Link>
              </li>
              <li className="nav-item">
              <Link to='/login'>
                  <button className=" text-lg leading-lg pr-3 text-white opacity-75"><span className="ml-2 text-white">SignIn</span></button>
                </Link>
              </li>
              <li className="nav-item">
              <Link to='/signup'>
                  <button className=" text-lg leading-lg pr-3 text-white opacity-75"><span className="ml-2 text-white">SignUp</span></button>
                </Link>
              </li>
            </ul>
          </div>

          )}
        </div>
      </nav>
    </>
  );
}



// import React,{useState} from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { UserAuth } from '../context/AuthContext';

// const Navbar = () => {
//   const { user, logOut } = UserAuth();
//   const navigate = useNavigate();
//   // console.log(user.email)
  
//   const [isOpen, setIsOpen] = useState(false);

//     const toggleNav = () => {
//       setIsOpen(!isOpen);
//     };

//   const handleLogout = async () => {
//     try {
//       await logOut();
//       navigate('/');
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className='flex items-center justify-between p-4 z-[100] w-full absolute no-underline	'>
//       <Link to='/' className='text-decoration-none'>
//         <h1  className='text-red-600 text-4xl font-bold cursor-pointer no-underline	 ' >
//           WATCHOO
//         </h1>
//       </Link>
//       {user?.email ? (
//         <>
//         <div className=" lg:w-[30%] ">
//         <div className="block lg:hidden">
//                 <button
//           className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
//           onClick={toggleNav}
//         >
//           <svg
//             className="fill-current h-3 w-3"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <title>Menu</title>
//             {isOpen ? (
//               <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M3 4h14a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm14 5H3a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2zm0 5H3a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2z"
//               />
//             ) : (
//               <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M3 4h14a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 5h14a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 5h14a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2z"
//               />
//             )}
//           </svg>
//         </button>
//         </div>
//         <div
//         className={`${
//           isOpen ? "block" : "hidden"
//         } w-[50%] block flex-grow lg:flex lg:items-center lg:w-auto`}
//       >
//         <div className="text-m w-full lg:flex lg:justify-between">
//           <Link to='/account'>
//             <button className='text-white mr-2 pr-4'>Account</button>
//           </Link>
//           {/* <Link to='/movies'>
//           <button
//             className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'
//           >
//             Reviews
//           </button>
//           </Link> */}
//           <Link to='/reviews'>
//             <button className='pr-4 mr-2 border-none rounded cursor-pointer text-white'>
//               Reviews
//             </button>
//           </Link>
//           <button
//             onClick={handleLogout}
//             className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'
//           >
//             Logout
//           </button>
//         </div>
//         </div>
//         </div>
//         </>
//       ) : (
//         <div>
//           <Link to='/subscribe'>
//             <button className='px-4  mr-2 rounded cursor-pointer text-white'>
//               Subscribe
//             </button>
//           </Link>
//           <Link to='/login'>
//             <button className='text-white text-center mr-2 ml-1 pr-4'>Sign In</button>
//           </Link>
//           <Link to='/signup'>
//             <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>
//               Sign Up
//             </button>
//           </Link>
          
          
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;







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
