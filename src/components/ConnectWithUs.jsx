import React from "react";
import { GrInstagram } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa";

const ConnectWithUs = () => {
  return (
    <div className="flex flex-col mb-16 gap-y-10 items-center justify-center">
      <p className="text-center font-FjallaOne lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">
        Connect With Us
      </p>
      <div className="flex flex-row items-start gap-x-16 justify-center">
        <a href="https://www.instagram.com/sindhustudiorohtak/" target="_blank">
          <GrInstagram className="icon" size="35px" color="#FF00BF" />
        </a>
        <a href="https://www.youtube.com/@sindhustudiorohtak" target="_blank">
          <FaYoutube className="icon" size="40px" color="#E32636" />
        </a>
      </div>
    </div>
  );
};

export default ConnectWithUs;
