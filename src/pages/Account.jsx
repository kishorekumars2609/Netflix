import React from 'react'
import { UserAuth } from '../context/AuthContext';
import SavedShows from '../components/SavedShows'




const Account = () => {


  const { user } = UserAuth();
  console.log(user.email)



  return (
    <>
    <div className='w-full text-white'>
      <img
        className='w-full h-[400px] object-cover'
        src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
        alt='/'
      />
      <div className='bg-black/60 fixed top-15 left-0 w-full h-[550px]'></div>
      <div className='absolute top-[40%] p-4 md:p-8'>
        <p className='text-xl md:text-2xl font-bold'>Welcome, {user?.email}</p>
      </div>
    </div>
    <SavedShows />
    
  </>
  )
}

export default Account


// import React from 'react';
// import SavedShows from '../components/SavedShows';

// const Account = () => {
//   return (
//     <>
//       <div className='w-full text-white'>
//         <img
//           className='w-full h-[400px] object-cover'
//           src="https://assets.nflxext.com/ffe/siteui/vlv3/1ecf18b2-adad-4684-bd9a-acab7f2a875f/6abbb576-106a-4175-a16e-af91cf881736/IN-en-20230116-popsignuptwoweeks-perspective_alpha_website_small.jpg"
//           alt='/'
//         />
//         <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
//         <div className='absolute top-[20%] p-4 md:p-8'>
//           <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
//         </div>
//       </div>
//       <SavedShows />
//     </>
//   );
// };

// export default Account;
