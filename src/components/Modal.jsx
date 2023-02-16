import React, { useState } from "react";
import { CiYoutube } from "react-icons/ci";
import { BsPlayCircle } from "react-icons/bs";
import { UserAuth } from "../context/AuthContext";


export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  const { user } = UserAuth();
  // const[userin,setUserin]=useState(false)

 
    function userin(){
      if(user?.email){
        setShowModal(true)
      }
      else{
        alert("login to watch")
      }
    }
  
  
  return (
    <> 
      
      <CiYoutube
        className=" text-white "
        size={40}
        onClick={() =>  userin() }
      />
      
     
    
      {showModal ?  (
        <>
          <div className=" backdrop-invert-0 bg-white/60    justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <iframe
                    width={465}
                    className=" overflow:hidden right-10 h-auto w-full max-w-xd p-2 rounded-md"
                    src="https://www.youtube.com/embed/M25zXBIUVr0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null
      }
   
    
    </>
  );
}

// import React, { useState, useEffect } from "react";

// function Modal({ movie, open, onClose }) {

//   // const [yt, setYT] = useState(null);
//   const [run,setRun]=useState(null)
//   // setRun("value")
//   if (!open) return null;

//   // const SEARCH_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=`;

//   // console.log("modal",movie);

//   // async function fetchYoutubeLink(title) {
//   //   const response = await fetch(
//   //     SEARCH_URL +
//   //       encodeURIComponent(title) +
//   //       "&key=" +
//   //       "AIzaSyBTMO9WtW6YrgMukCrTDKLx2awGthbRc1c"
//   //   );
//   //   const json = await response.json();
//   //   const video = json.items.find((item) => item.id.kind === "youtube#video");
//   //   if (!video) {
//   //     throw new Error("No video found with the given title.");
//   //   }
//   //   setYT(`https://www.youtube.com/embed/${video.id.videoId}`);
//   // }

//   //  if (movie) {
//   //        fetchYoutubeLink(movie.title);
//   //       console.log(yt)
//   //       }

//   return (
//     <div onClick={onClose} className="  absolute w-full h-full  ">
//       <div
//         onClick={(e) => {
//           e.stopPropagation();
//         }}
//         className=" h-full w-full  z-10000 absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  max-w-md flex bg-white shadow-lg rounded-md"
//       >
//         <iframe  width={465} className=" overflow:hidden right-10 h-auto w-full max-w-xd p-2 rounded-md" src="https://www.youtube.com/embed/M25zXBIUVr0" title="YouTube video player"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

//         <button className="absolute opacity-0" onClick={()=>{setRun("value")}}>refresh</button>

//       </div>
//     </div>
//   );
// }

// export default Modal;
