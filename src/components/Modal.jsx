import React, { useState } from "react";
import { CiYoutube } from "react-icons/ci";
import { UserAuth } from "../context/AuthContext";
import MovieList from "./MovieList";


export default function Modal( movie_id, movie_link) {
  const [showModal, setShowModal] = React.useState(false);
  const { user } = UserAuth();
   //const similar=movie_id;

   const[showSuggest,setShowSuggest]=React.useState(false)
   
    function userin(){
      if(user?.email){
        setShowModal(true)
        console.log(movie_id.movie_id)
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
          <div className=" backdrop-invert-0 bg-white/70    justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            
            <div className=" modal-start name0 relative h-[400px] w-full my-6 mx-auto max-w-3xl justify-center items-center ">
              <div className=" name1 h-full w-[500px] border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-zinc-400 outline-none focus:outline-none">
               
                <div className="relative h-[250px] p-2 flex-auto">
                  <iframe
                    width={465}
                    className=" overflow:hidden right-10 h-full w-full max-w-xd p-2  rounded-md"
                    src="https://www.youtube.com/embed/M25zXBIUVr0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                {/*footer*/}
                <div className="flex items-center bg-zinc-400 justify-end p-2 border-t border-solid border-slate-200 rounded-b">
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
                    onClick={() => setShowSuggest(true)}
                  >
                    Suggest More
                  </button>
                </div>
              </div>
             
              <div>

              {showSuggest ?(<MovieList  movie_no={movie_id.movie_id} />):null}
              </div>
              

              
              {/* <Row rowId='6' title='Recommended'fetchURL={requests.similarurl}/> */}
            </div>
            {/* <Row rowId='1' title='Recommended'fetchURL={requests.similarurl}/> */}

          </div>
        
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
