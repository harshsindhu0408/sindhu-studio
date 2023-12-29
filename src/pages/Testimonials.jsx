import React from "react";

const Testimonials = () => {
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
    {
      name: "Rahul Kumar",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      rating: 4.5,
      jobTitle: "Client",
      review:
        "Exceptional service! Rahul is a true professional, capturing every moment beautifully.",
    },
    {
      name: "Neha Singh",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      rating: 4.6,
      jobTitle: "Client",
      review:
        "Neha's photography skills are unmatched. Highly recommended for any occasion.",
    },
    {
      name: "Ankur Verma",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
      rating: 4.4,
      jobTitle: "Client",
      review:
        "Ankur provides top-notch photography services. A pleasure to work with!",
    },
    {
      name: "Ritu Yadav",
      image: "https://randomuser.me/api/portraits/women/8.jpg",
      rating: 4.7,
      jobTitle: "Client",
      review:
        "Ritu's attention to detail and creativity are truly impressive. Delighted with the results!",
    },
    {
      name: "Vikas Sharma",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
      rating: 4.9,
      jobTitle: "Client",
      review:
        "Vikas exceeded our expectations with his photography skills. Highly recommended!",
    },
    {
      name: "Deepika Kapoor",
      image: "https://randomuser.me/api/portraits/women/10.jpg",
      rating: 4.8,
      jobTitle: "Client",
      review:
        "Deepika's talent and professionalism shine through in every photograph. Fantastic work!",
    },
    {
      name: "Aryan Singh",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
      rating: 4.6,
      jobTitle: "Client",
      review:
        "Aryan has a keen eye for capturing special moments. Extremely satisfied with his work!",
    },
    {
      name: "Shreya Gupta",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      rating: 4.7,
      jobTitle: "Client",
      review:
        "Shreya's photography style is unique and stunning. Delivers beyond expectations!",
    },
    {
      name: "Rajat Kapoor",
      image: "https://randomuser.me/api/portraits/men/13.jpg",
      rating: 4.5,
      jobTitle: "Client",
      review:
        "Rajat is a true professional with a creative touch. Couldn't be happier with the photos!",
    },
    {
      name: "Simran Kaur",
      image: "https://randomuser.me/api/portraits/women/14.jpg",
      rating: 4.8,
      jobTitle: "Client",
      review:
        "Simran's photography is simply outstanding. Captures the essence of every moment beautifully!",
    },
    {
      name: "Karan Verma",
      image: "https://randomuser.me/api/portraits/men/15.jpg",
      rating: 4.6,
      jobTitle: "Client",
      review:
        "Karan's professionalism and talent make him a top choice for any photography project!",
    },
    {
      name: "Ananya Singh",
      image: "https://randomuser.me/api/portraits/women/16.jpg",
      rating: 4.9,
      jobTitle: "Client",
      review:
        "Ananya provides exceptional photography services. Her work speaks volumes!",
    },
    {
      name: "Arjun Yadav",
      image: "https://randomuser.me/api/portraits/men/17.jpg",
      rating: 4.7,
      jobTitle: "Client",
      review:
        "Arjun's photographs are a work of art. His attention to detail and creativity are commendable!",
    },
    {
      name: "Kritika Sharma",
      image: "https://randomuser.me/api/portraits/women/18.jpg",
      rating: 4.8,
      jobTitle: "Client",
      review:
        "Kritika's photography is both elegant and timeless. Highly recommend her services!",
    },
    {
      name: "Rohan Kapoor",
      image: "https://randomuser.me/api/portraits/men/19.jpg",
      rating: 4.5,
      jobTitle: "Client",
      review:
        "Rohan captures moments with finesse. Professional and dedicated to delivering excellence!",
    },
    {
      name: "Naina Verma",
      image: "https://randomuser.me/api/portraits/women/20.jpg",
      rating: 4.6,
      jobTitle: "Client",
      review:
        "Naina's photography is a true reflection of skill and passion. Thrilled with the results!",
    },
    // Add more reviews here
  ];

  return (
    <div>
      <section className=" dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Words of Love from Our Clients
            </h2>
            <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
              Words of Love from Our Clients: Experience the joy and
              satisfaction expressed by our cherished clients—testimonials that
              reflect not just service, but a journey of excellence and
              commitment.
            </p>
          </div>
          <div className="grid mb-8 lg:mb-12 gap-4 lg:grid-cols-2">
            {reviews.map((review, index) => (
              <figure
                key={index}
                className="flex flex-col shadow-lg cursor-pointer hover:scale-95 transition-all duration-200 justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700"
              >
                <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {review.review}
                  </h3>
                  <p className="my-4">"{review.review}"</p>
                </blockquote>
                <figcaption className="flex justify-center items-center space-x-3">
                  <img
                    className="w-9 h-9 rounded-full"
                    src={review.image}
                    alt={`Profile of ${review.name}`}
                  />
                  <div className="space-y-0.5 font-medium dark:text-white text-left">
                    <div>{review.name}</div>
                    <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                      {review.jobTitle}
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="text-center">
            <a
              href="#"
              className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Show more...
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
