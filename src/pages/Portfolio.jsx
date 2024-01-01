// Portfolio.jsx
import React, { lazy, Suspense } from "react";
import { imageUrls } from "../imageLinks";

const Portfolio = () => {
  return (
    <div className="flex flex-col items-center gap-y-10 justify-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-center sm:mt-8 md:mt-12 lg:mt-16 font-FjallaOne">
        Forever Yours: Our Stunning Wedding Photography Gallery
      </h2>
      {/* Portfolio page */}
      <div className="grid grid-cols-2 mb-10 md:grid-cols-4 gap-4">
        {imageUrls.map((imageUrl, index) => (
          <div key={index} className="grid gap-4">
            <Suspense fallback={<div>Loading...</div>}>
              <img
                className="h-auto max-w-full rounded-lg"
                src={imageUrl}
                alt={`gallery-${index}`}
              />
            </Suspense>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
