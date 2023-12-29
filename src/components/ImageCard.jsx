import React from "react";
import { Link } from "react-router-dom";

const ImageCard = ({ cardData }) => {
  return (
    <>
      <Link to={'/portfolio'}>
        <div className="relative md:w-[380px] md:h-[470px] sm:w-[350px] sm:h-[180px] overflow-hidden group transition-transform duration-200 ease-in-out transform-gpu">
          <img
            src={cardData.image}
            alt={cardData.text}
            className="w-full h-full object-cover backdrop-brightness-90 rounded-md transition-transform duration-500 ease-in-out transform-gpu group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white md:text-6xl sm:text-3xl font-FjallaOne text-center transition-transform duration-500 ease-in-out transform-gpu group-hover:scale-95">
              {cardData.text}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ImageCard;
