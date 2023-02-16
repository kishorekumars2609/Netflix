import React from "react";
import {
  AiOutlineGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillRedditCircle,
  AiOutlineYoutube
} from "react-icons/ai";
import { IoMdMailUnread } from "react-icons/io";
// sm:w-[200px] md:w-[240px] lg:w-[280px]

function Footer() {
  return (
    <div className="main-footer  ">
      <div className="container   ">
        <div className="grid grid-cols-3 gap-4 py-2 bg-zinc-800 ">
          {/* Column1 */}
          <div className="col text-white flex flex-col justify-center items-center text-center ">
            <h4 className="text-white">Reach Us</h4>
            <h1 className="list-unstyled text-white">
              <IoMdMailUnread size={25} />
              <AiFillRedditCircle size={25}  />
            </h1>
          </div>
          {/* Column2 */}
          <div className="col text-white flex flex-col justify-center items-center text-center">
            <h4>Other links</h4>
            <ui className="list-unstyled">
              <AiFillLinkedin size={25} />
              <AiOutlineYoutube size={25}/>
             
            </ui>
          </div>
          {/* Column3 */}
          <div className="col text-white flex flex-col justify-center items-center text-center">
            <h4>WELL ANOTHER</h4>
            <ui className="list-unstyled ">
              <AiOutlineGithub size={25} />
              <AiFillInstagram size={25}/>
            </ui>
          </div>
        </div>
        <hr />

        <div className="py-2 row bg-zinc-800">
          <p className="col-sm text-white text-center">
            &#169; Kishore kumar | Terms Of Service | Privacy{" "}
            {/* &copy;{new Date().getFullYear()} */}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
