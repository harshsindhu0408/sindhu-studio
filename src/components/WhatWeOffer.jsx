import React from "react";
import ImageCard from "./ImageCard";
import { Link } from "react-router-dom";

const WhatWeOffer = () => {
  const cardData = [
    {
      image:
        "https://res.cloudinary.com/dnvjct2if/image/upload/v1686405223/portrait/DSC_9616_wwyyvy.jpg",
      text: "WEDDING PHOTOGRAPHY",
    },
    {
      image:
        "https://res.cloudinary.com/dnvjct2if/image/upload/v1686405216/portrait/AC2A9082_dczqyx.jpg",
      text: "PRE WEDDING PHOTOGRAPHY",
    },
    {
      image:
        "https://res.cloudinary.com/dnvjct2if/image/upload/v1686405233/portrait/AC2A1543_kyr4w2.jpg",
      text: "CANDID PHOTOGRAPHY",
    },
    {
      image:
        "https://res.cloudinary.com/dnvjct2if/image/upload/v1686405232/portrait/0Y1A0698_ypzjep.jpg",
      text: "CANDID PHOTOGRAPHY",
    },
    {
      image:
        "https://res.cloudinary.com/dnvjct2if/image/upload/v1686405223/portrait/AC2A0887_xxbwba.jpg",
      text: "CINEMATIC VIDEOS",
    },
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