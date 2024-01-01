import React from "react";
import ImageSlider from "../components/ImageSlider";
import WhatWeOffer from "../components/WhatWeOffer";
import UserRatings from "../components/UserRatings";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";
import ConnectWithUs from "../components/ConnectWithUs";

const Home = () => {
  return (
    <div className="scrool-smooth flex flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full mainSection flex items-center justify-center"></div>
        <p className="md:text-4xl xl:text-5xl 2xl:text-6xl w-11/12 text-center sm:text-2xl mt-10 font-FjallaOne">
          Love in Focus: Our Wedding Photography Collection
        </p>

        <ImageSlider />

        <p className="text-black w-11/12 xl:text-5xl 2xl:text-6xl text-center sm:text-3xl md:text-4xl font-FjallaOne">
          What We Offer: Capturing Moments, Creating Memories, and More!
        </p>
        <WhatWeOffer />

        <h2 className="text-black w-11/12 xl:text-5xl 2xl:text-6xl text-center sm:text-3xl md:text-4xl font-FjallaOne mt-10">
          Words of Love from Our Clients
        </h2>

        <div className="w-11/12">
          <UserRatings />
        </div>

        {/* We understand you section */}

        <div className="w-full mx-auto mt-14 flex flex-col items-center justify-center">
          <div className="w-10/12 text-center">
            <h2 className="text-center font-FjallaOne xl:text-4xl 2xl:text-5xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">
              We Understand You
            </h2>

            <p className="text-gray-700 text-sm xl:text-base 2xl:text-lg leading-relaxed mt-4">
              We understand that your wedding day is one of the most significant
              milestones in your life. It's a day filled with love, laughter,
              and heartfelt moments that deserve to be captured with utmost care
              and attention to detail. Our team of dedicated photographers is
              committed to going above and beyond to create stunning images that
              not only reflect the beauty of your wedding but also evoke the
              emotions and memories that make it truly unforgettable. With our
              passion for storytelling and our dedication to providing a
              personalized experience, we are here to ensure that every precious
              moment is preserved for you to relive and cherish for generations
              to come.
            </p>
          </div>
        </div>

        <FrequentlyAskedQuestions />

        <ConnectWithUs />
      </div>
    </div>
  );
};

export default Home;
