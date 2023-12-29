import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { Carousel } from "@material-tailwind/react";

const ImageSlider = () => {
  const slides = [
    {
      url: "https://res.cloudinary.com/dnvjct2if/image/upload/v1686405263/landscape/0Y1A1069_ker0zb.jpg",
    },
    {
      url: "https://res.cloudinary.com/dnvjct2if/image/upload/v1686405258/landscape/0Y1A1094_ix324v.jpg",
    },
    {
      url: "https://res.cloudinary.com/dnvjct2if/image/upload/v1686405255/landscape/0Y1A0751_fslltp.jpg",
    },
    {
      url: "https://res.cloudinary.com/dnvjct2if/image/upload/v1686405253/landscape/DSC_5340_fnq6un.jpg",
    },
    {
      url: "https://res.cloudinary.com/dnvjct2if/image/upload/v1686405253/landscape/DSC_5320_qcdvmo.jpg",
    },
    {
      url: "https://res.cloudinary.com/dnvjct2if/image/upload/v1686405254/landscape/AC2A1013_zlrcex.jpg",
    },
    {
      url: "https://res.cloudinary.com/dnvjct2if/image/upload/v1686405255/landscape/VSPL9247_a1ycbn.jpg",
    },
    {
      url: "https://res.cloudinary.com/dnvjct2if/image/upload/v1686405251/landscape/AC2A0851_yfsorb.jpg",
    },
    {
      url: "https://res.cloudinary.com/dnvjct2if/image/upload/v1686405252/landscape/0Y1A9929_njwuve.jpg",
    },
    {
      url: "https://res.cloudinary.com/dnvjct2if/image/upload/v1686405252/landscape/0Y1A0731_lzkqyg.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(autoplayInterval);
    };
  }, [currentIndex]);

  

  return (
    <div className="max-w-full h-auto w-full m-auto py-14 px-4 relative group flex  flex-col items-center justify-center">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-11/12 h-96 md:h-[480px] lg:h-[640px] xl:h-[800px] rounded-2xl bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="hidden md:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden md:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${
              currentIndex === slideIndex ? 'text-black' : 'text-white'
            }`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;