import React from "react";
import MultimediaComponent from "../components/MultimediaComponent";

const weddingFilmsData = [
  {
    title: "ABHISHEK WEDS RISHIKA",
    videoId: "https://www.youtube.com/embed/T_gFHaNrVQo",
    description:
      "The contentment we see on our client’s face is what satisfies our souls. Capturing those joyous moments and transforming them into cherished memories is not just our profession but our passion. With every click, we strive to immortalize the love and happiness that define your special day. Our team works tirelessly to ensure that every detail, emotion, and celebration is beautifully captured, creating a visual narrative that you'll treasure forever.",
  },
  {
    title: "AKASH AND SRISHTI",
    videoId: "https://www.youtube.com/embed/QwOmZqzrnU8",
    description:
      "Wedding photography to us is to witness your beautiful story. Through our lens, we capture the essence of your love, the purity of emotions, and the beauty of your journey together. Every shot reflects the unique bond you share, creating a timeless collection that narrates the tale of your union.",
    isReversed: true,
  },
  {
    title: "PUNEET AND HARSHITA",
    videoId: "https://www.youtube.com/embed/N7aQF84dxXo",
    description:
      "Witness the best moments of Punit and Harshita. Our commitment to excellence and passion for storytelling guide us in crafting visual masterpieces that not only showcase the events but also encapsulate the emotions and sentiments of your wedding day. Allow us to turn your love story into a work of art.",
    isReversed: false,
  },
  {
    title: "ABHISHEK AND RISHIKA PRE WEDDING",
    videoId: "https://www.youtube.com/embed/Aza1a8tQfHE",
    description:
      "Get the best Prewedding shoot done with us. What are you waiting for? Our pre-wedding shoots are a blend of creativity, romance, and personalized storytelling. We capture the essence of your unique love story, creating a cinematic journey that beautifully sets the tone for your upcoming wedding.",
    isReversed: true,
  },
  {
    title: "RITESH AND VINEETA",
    videoId: "https://www.youtube.com/embed/E9fzUA4TLpg",
    description:
      "Witness the heritage of Rao Sahab wedding. Each frame of our photography and videography reflects the rich heritage, cultural nuances, and timeless traditions of your wedding. We take pride in preserving these moments, ensuring that your wedding story becomes a cherished legacy for generations to come.",
    isReversed: false,
  },
  {
    title: "SOURABH AND CHANDNI",
    videoId: "https://www.youtube.com/embed/NYuR7NnOMMI",
    description:
      "We listen to what you want and then create beautiful memories of your dream wedding. Presenting you Haldi ceremony of Saurabh and Chandni. Our personalized approach and attention to detail allow us to capture the uniqueness of your Haldi ceremony, preserving the vibrant colors, joyous moments, and the beauty of this traditional celebration.",
    isReversed: true,
  },
];

const WeddingFilms = () => {
  return (
    <div className="w-full flex flex-col gap-y-6 items-center justify-center">
      <h1 className="text-4xl text-center sm:w-11/12 mt-8 font-FjallaOne">Emotion is the true substance of wedding videography</h1>
      {weddingFilmsData.map((film, index) => (
        <MultimediaComponent
        key={index}
        title={film.title}
        videoUrl={film.videoId}  // Change videoId to videoUrl
        description={film.description}
        isReversed={film.isReversed}
      />
      ))}
    </div>
  );
};

export default WeddingFilms;
