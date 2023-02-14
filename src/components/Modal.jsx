import axios from "axios";
import requests from "../Requests";
import React, { useState, useEffect } from "react";

const Modal = ({ open, onClose }) => {
  if (!open) return null;

  // const [movies,setMovies] =  useState([])
  // const [yt, setYT] =  useState(null);

  //   const SEARCH_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=`;

  // useEffect(()=>{
  //  axios.get(requests.requestPopular).then((response)=>{
  //      setMovies(response.data.results);
  //  });
  // },[]);

  // const movie = movies[Math.floor(Math.random()* movies.length)]

  // console.log(movie)

  //    async function fetchYoutubeLink(title) {
  //    const response = await fetch(
  //      SEARCH_URL +
  //        encodeURIComponent(title) +
  //        "&key=" +
  //        "AIzaSyBTMO9WtW6YrgMukCrTDKLx2awGthbRc1c"
  //    );
  //    const json = await response.json();
  //    const video = json.items.find((item) => item.id.kind === "youtube#video");
  //    if (!video) {
  //      throw new Error("No video found with the given title.");
  //    }
  //    setYT(`https://www.youtube.com/embed/${video.id.videoId}`);
  //  }

  //  if (movie) {
  //       fetchYoutubeLink(movie.title);
  //       console.log(yt)
  //       }

  return (
    <div onClick={onClose} className="   absolute w-full h-full">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className=" h-full w-full z-10000 absolute top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md flex bg-white shadow-lg rounded-md"
      >
        <video autoPlay bg-white h-full w-full>
          <source
            src={
              '<iframe width="560" height="315" src="https://www.youtube.com/embed/EGK5qtXuc1Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
            }
            type="video/webm"
          />
        </video>
        <p className='closeBtn fixed top-2 right-3 text-black' onClick={onClose}>
            X
          </p>
      </div>
    </div>
  );
};

export default Modal;
