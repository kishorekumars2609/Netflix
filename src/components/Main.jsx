import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from '../Requests'
import Modal from './Modal';
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";




function Main() { 
  const [like, setLike] = useState(false);

  const [saved, setSaved] = useState(false);

  const [openModal, setOpenModal] = useState(false);

   const [movies,setMovies] = useState([])
   const [yt, setYT] = useState(null);
   const { user } = UserAuth();
   const movieID = doc(db, "users", `${user?.email}`);

   


  var no=[Math.floor(Math.random()*10)]
    
  const SEARCH_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=`;

   useEffect(()=>{
    axios.get(requests.requestPopular).then((response)=>{
        setMovies(response.data.results);
         
         console.log(no)
         movie = movies[no]
    });
   },[]);

   let movie = movies[no]
   console.log(movie)

   const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: movie.id,
          title: movie.title,
          img: movie.backdrop_path,
        }),
      });
    } else {
      alert("please log in to save a movie");
    }
  };

  //   async function fetchYoutubeLink(title) {
  //   const response = await fetch(
  //     SEARCH_URL +
  //       encodeURIComponent(title) +
  //       "&key=" +
  //       "AIzaSyBTMO9WtW6YrgMukCrTDKLx2awGthbRc1c"
  //   );
  //   const json = await response.json();
  //   const video = json.items.find((item) => item.id.kind === "youtube#video");
  //   if (!video) {
  //     throw new Error("No video found with the given title.");
  //   }
  //   setYT(`https://www.youtube.com/embed/${video.id.videoId}`);
  // }

  // if (movie) {
  //      fetchYoutubeLink(movie.title);
  //      console.log(yt)
  //      }
  
       
   const truncateString = (str, num) => {
    if(str?.length >num){
        return str.slice(0,num) + '...'
    }else{
        return str
    }
   }
   if(movie){
  return ( 
    <div className='w-full h-[600px] text-white'>
        <div className='w-full h-full'>
            <div className='absolute w-full h-[600px] bg-gradient-to-r from-black'></div>
            <img className='w-full h-full object-cover'  src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title}/>
             <div className='absolute w-full top-[20%] p-4 md:p-8'>
                <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
              <div className='my-4 flex'>
                <Modal className='py-2 px-5'/>
             
             
                <button onClick={saveShow} className='border text-white border-gray-300 py-2 px-5 ml-4 '>Watch Later</button>
              </div>
              <p className='text-gray-400 text-sm'>Released: {movie?.release_date}</p>
              <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{truncateString (movie?.overview,170)}</p>
             </div>
             
             
        
        
        </div>
    </div>
  )
}}

export default Main

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import requests from "../Requests";
// import Modal from "./Modal";

// function Main() {
//   const [openModal, setOpenModal] = useState(false);

//   const [movies, setMovies] = useState([]);
//   const [yt, setYT] = useState(null);
//   const [movie,setMovie] = useState(null)
  
//   const SEARCH_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=`;
  
//   async function fetchYoutubeLink(title) {
//     const response = await fetch(
//       SEARCH_URL +
//         encodeURIComponent(title) +
//         "&key=" +
//         "AIzaSyBTMO9WtW6YrgMukCrTDKLx2awGthbRc1c"
//     );
//     const json = await response.json();
//     const video = json.items.find((item) => item.id.kind === "youtube#video");
//     if (!video) {
//       throw new Error("No video found with the given title.");
//     }
//     setYT(`https://www.youtube.com/embed/${video.id.videoId}`);
//   }

//   useEffect(() => {
    
//     axios.get(requests.requestPopular).then((response) => {
//       setMovies(response.data.results);
      
//     });
    
//   }, []);

//   if(movies.length>=1){
//     setMovie(movies[Math.floor(Math.random() * 10)]);
//   }

//   if (movie) {
//     fetchYoutubeLink(movie.title);
//   }

  
  


//   console.log(yt)
  

//   const truncateString = (str, num) => {
//     if (str?.length > num) {
//       return str.slice(0, num) + "...";
//     } else {
//       return str;
//     }
//   };

//   return (
//     <div className="w-full h-[550px] text-white">
//       <div className="w-full h-full">
//         <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
//         <img
//           className="w-full h-full object-cover"
//           src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
//           alt={movie?.title}
//         />
//         <div className="absolute w-full top-[20%] p-4 md:p-8">
//           <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
//           <div className="my-4">
//             <button onClick={() => setOpenModal(true)} 
//       className="border modalButton bg-gray-300 text-black border-gray-300  hover:scale-95 transition  py-2 px-5">
//               play
//             </button>
//             <Modal 
//       open={openModal} 
//       onClose={() => setOpenModal(false)} />
            
//             <button className="border text-white border-gray-300 py-2 px-5 ml-4 ">
//               Watch Later
//             </button>
//           </div>
//           <p className="text-gray-400 text-sm">
//             Released: {movie?.release_date}
//           </p>
//           <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
//             {truncateString(movie?.overview, 170)}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Main;
