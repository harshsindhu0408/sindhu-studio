import React from "react";
import ImageCard from "./ImageCard";
import { Link } from "react-router-dom";
import img1 from '../assets/whatWeOffer/01.jpg'
import img2 from '../assets/whatWeOffer/02.jpg'
import img3 from '../assets/whatWeOffer/03.jpg'
import img4 from '../assets/whatWeOffer/04.jpg'
import img5 from '../assets/whatWeOffer/05.jpg'

const WhatWeOffer = () => {
  const cardData = [
    { image: img1, text: "WEDDING PHOTOGRAPHY" },
    { image: img2, text: "PRE WEDDING PHOTOGRAPHY" },
    { image: img3, text: "CANDID PHOTOGRAPHY" },
    { image: img4, text: "CANDID PHOTOGRAPHY" },
    { image: img5, text: "CINEMATIC VIDEOS" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-10 mt-8 md:mt-16 lg:w-10/12 xl:w-9/12 mx-auto">
      {cardData.map((data, index) => (
        <ImageCard key={index} cardData={data} />
      ))}
    </div>
  );
};

export default WhatWeOffer;