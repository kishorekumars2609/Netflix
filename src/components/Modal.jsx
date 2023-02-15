import React, { useState, useEffect } from "react";

function Modal({ movie, open, onClose }) {
  
  // const [yt, setYT] = useState(null);
  const [run,setRun]=useState(null)
  // setRun("value")
  if (!open) return null;


  // const SEARCH_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=`;

  // console.log("modal",movie);

  // async function fetchYoutubeLink(title) {
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

  //  if (movie) {
  //        fetchYoutubeLink(movie.title);
  //       console.log(yt)
  //       }

  return (
    <div onClick={onClose} className="  absolute w-full h-full top-[35%]">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className=" h-full w-full  z-10000 absolute top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  max-w-md flex bg-white shadow-lg rounded-md"
      >
        <iframe  width={465} className=" right-10 h-auto w-full max-w-xd p-2 rounded-md" src="https://www.youtube.com/embed/M25zXBIUVr0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        {/* <video autoPlay bg-white h-full w-full>
          <source
            src={
              "https://www.youtube.com/embed/EGK5qtXuc1Q" 
            }
            type="video/webm"
          />
        </video> */}
        <button className="absolute opacity-0" onClick={()=>{setRun("value")}}>refresh</button>
        {/* <p
          className=" closeBtn fixed top-2 right-3 text-black"
          onClick={onClose}
        >
          X
        </p> */}
      </div>
    </div>
  );
}

export default Modal;
