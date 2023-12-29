// ReviewCard.js
import React from 'react';

const ReviewCard = ({ rating, title, content, author }) => {
  return (
    <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8">
      <div>
        <div className="flex gap-0.5 text-green-500">
          {/* Render rating stars */}
          {Array.from({ length: rating }, (_, index) => (
            <svg
              key={index}
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* ... (star path data) */}
            </svg>
          ))}
        </div>

        <div className="mt-4">
          <p className="text-2xl font-bold text-rose-600 sm:text-3xl">{title}</p>

          <p className="mt-4 leading-relaxed text-gray-700">{content}</p>
        </div>
      </div>

      <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
        &mdash; {author}
      </footer>
    </blockquote>
  );
};

export default ReviewCard;
