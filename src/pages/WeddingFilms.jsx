import React from "react";
import MultimediaComponent from "../components/MultimediaComponent";
import { weddingFilmsData } from "../helpers";

const WeddingFilms = () => {
  return (
    <div className="w-full flex flex-col gap-y-6 items-center justify-center">
      <h1 className="text-4xl text-center sm:w-11/12 mt-8 font-FjallaOne">
        Emotion is the true substance of wedding videography
      </h1>
      {weddingFilmsData.map((film, index) => (
        <MultimediaComponent
          key={index}
          title={film.title}
          videoUrl={film.videoId} // Change videoId to videoUrl
          description={film.description}
          isReversed={film.isReversed}
        />
      ))}
    </div>
  );
};

export default WeddingFilms;
