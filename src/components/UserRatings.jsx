// UserRatings.js
import { Button } from "@material-tailwind/react";
import React from "react";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";
import ReviewCard from "./ReviewCard";

const UserRatings = () => {
  const reviews = [
    {
      name: "Aditya Dalla",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      rating: 4.8,
      jobTitle: "Client",
      review:
        "Best photography skills..Mastery in Candid And drone Shoot... Outstanding Response..",
    },
    {
      name: "Amit Sharma",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      rating: 4.7,
      jobTitle: "Client",
      review:
        "Amazing experience and premium quality work. Totally satisfied and Highly Recommend",
    },
    {
      name: "Pooja Patel",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      rating: 4.9,
      jobTitle: "Client",
      review:
        "Best photography skills..Mastery in Candid And drone Shoot... Outstanding Response..",
    },
    // Add more reviews here
  ];

  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:flex md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Read trusted reviews from our customers
            </h2>

            <p className="mt-6 max-w-lg leading-relaxed text-gray-700">
              "Experience the magic through our clients' heartfelt words of
              love. Their testimonials, filled with warmth and gratitude,
              reflect the exceptional service and unforgettable moments captured
              by Sindhu Studio."
            </p>
          </div>

          <Link to={"/testimonials"}>
            <div
              className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full border
             border-rose-600 px-5 py-3 text-rose-600 transition hover:bg-rose-600 font-medium hover:text-white md:mt-0"
            >
              Read all reviews
            </div>
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Map over reviews and render ReviewCard for each review */}
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              rating={review.rating}
              title={review.name}
              content={review.review}
              author={review.jobTitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserRatings;
