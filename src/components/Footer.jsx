
import React from "react";
import { AiOutlineGithub, AiFillInstagram } from 'react-icons/ai';
// sm:w-[200px] md:w-[240px] lg:w-[280px]

function Footer() {
  return (
   
    <div className="main-footer  ">
      <div className="container   ">
        <div className="grid grid-cols-3 gap-4 py-2 bg-gray-800 ">
          {/* Column1 */}
          <div className="col text-center ">
            <h4 className="text-white">Reach Us</h4>
            <h1 className="list-unstyled text-white">
              <li>Mail</li>
              <li>Reddit</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="centre text-white text-center">
            <h4>Other links</h4>
            <ui className="list-unstyled">
              <li>Linkedin</li>
              <li>Youtube</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col text-white flex flex-col justify-center items-center text-center">
            <h4>WELL ANOTHER</h4>
            <ui className="list-unstyled ">
             <AiOutlineGithub />
             <AiFillInstagram/>
            </ui>
          </div>

        </div>
        <hr />

        <div className="py-2 row bg-gray-800">
          <p className="col-sm text-white text-center">
           @ Kishore kumar | Terms Of Service | Privacy {/* &copy;{new Date().getFullYear()} */}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

