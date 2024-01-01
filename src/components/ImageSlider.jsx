import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { Carousel } from "@material-tailwind/react";
import img1 from '../assets/homepageImages/1.jpg'
import img2 from '../assets/homepageImages/2.jpg'
import img3 from '../assets/homepageImages/3.jpg'
import img4 from '../assets/homepageImages/4.jpg'
import img5 from '../assets/homepageImages/5.jpg'
import img6 from '../assets/homepageImages/6.jpg'
import img7 from '../assets/homepageImages/7.jpg'
import img8 from '../assets/homepageImages/8.jpg'
import img9 from '../assets/homepageImages/9.jpg'
import img10 from '../assets/homepageImages/10.jpg'
import img11 from '../assets/homepageImages/11.jpg'

const ImageSlider = () => {
  const slides = [
    { url: img1 },
    { url: img2 },
    { url: img3 },
    { url: img4 },
    { url: img5 },
    { url: img6 },
    { url: img7 },
    { url: img8 },
    { url: img9 },
    { url: img10 },
    { url: img11 },
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