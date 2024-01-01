import React from "react";

const Bookings = () => {
  return (
    <div className="flex flex-col gap-y-6 items-center justify-center">
      <h1 className="text-4xl text-center sm:w-11/12 mt-8 font-FjallaOne">
        BOOKED EVENTS
      </h1>
      <p className="text-xl sm:w-10/12 text-center font-Roborto">
        No Bookings for now. contact us for more info
      </p>
      <div className="md:w-8/12 bg-gray-500 sm:w-11/12 h-0.5"></div>
    </div>
  );
};

export default Bookings;
