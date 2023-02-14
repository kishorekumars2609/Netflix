

// import React from 'react'
// import axios from 'axios'
// import { useEffect, useState } from 'react'
// import requests from '../Requests'
// import { AiOutlineCaretRight } from 'react-icons/ai';

// // AiOutlineCaretRight

// const API_KEY = 'AIzaSyD8_8TwnY0YMBEPVZ-8OiOdSTRW7ANnaSsY';
// const SEARCH_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=`;

// async function fetchYoutubeLink(title) {
//   const response = await fetch(SEARCH_URL + encodeURIComponent(title) + '&key=' + 'AIzaSyD8_8TwnY0YMBEPVZ-8OiOdSTRW7ANnaSs');
//   const json = await response.json();
//   const video = json.items.find(item => item.id.kind === 'youtube#video');
//   if (!video) {
//     throw new Error('No video found with the given title.');
//   }
//   return `https://www.youtube.com/watch?v=${video.id.videoId}`;
// }

// function Player() {
//     const [movies,setMovies] = useState([])
//        const movie = movies[Math.floor(Math.random()* movies.length)]

//     useEffect(()=>{
//         axios.get(requests.requestPopular).then((response)=>{
//             setMovies(response.data.results);
//         });
//        },[]);


//   return (
//     <video className='w-[400px] h-[160px] '
//     controls
//     />
//   )
// }

// export default Player