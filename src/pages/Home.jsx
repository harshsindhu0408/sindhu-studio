import React from "react";
import ImageSlider from "../components/ImageSlider";
import WhatWeOffer from "../components/WhatWeOffer";
import UserRatings from "../components/UserRatings";

const Home = () => {
  return (
    <div className="scrool-smooth  flex flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full mainSection flex items-center justify-center"></div>
      <p className="md:text-4xl w-11/12 text-center sm:text-2xl mt-10 font-FjallaOne">
        Love in Focus: Our Wedding Photography Collection
      </p>

      <ImageSlider/>

      <p className='text-black w-11/12 text-center sm:text-3xl md:text-5xl font-FjallaOne'>What We Offer: Capturing Moments, Creating Memories, and More!</p>
      <WhatWeOffer />

      <UserRatings />
      </div>
    </div>
  );
};

export default Home;
