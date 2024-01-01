import React, { useState, useEffect, useRef } from "react";

const OpenHoursDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDay, setCurrentDay] = useState("");
  const [currentOpenHours, setCurrentOpenHours] = useState("");
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = (event) => {
    // Close dropdown if the clicked element is not within the dropdown
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const getCurrentOpenHours = () => {
    const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
    setCurrentDay(today);
    // Replace this with your logic to fetch or calculate the open hours for the current day
    // For demonstration purposes, let's assume the same open hours for all days
    setCurrentOpenHours("9:15 AM - 8:00 PM");
  };

  useEffect(() => {
    getCurrentOpenHours();
    document.addEventListener("click", closeDropdown);

    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []); // Run once on component mount

  return (
    <div className="relative flex flex-row sm:flex-col sm:gap-y-4 items-start" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="bg-gray-700 text-white py-2 px-4 shadow-lg focus:outline-none focus:ring focus:border-blue-300"
      >
        Open Hours
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
          <ul className="py-1">
            {days.map((day) => (
              <li key={day} className="px-4 py-2 hover:bg-gray-100">
                {day}: 9:15 AM - 8:00 PM
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="sm:w-full">
        <p className="text-gray-700">
          Today's Open Hours ({currentDay}): {currentOpenHours}
        </p>
      </div>
    </div>
  );
};

export default OpenHoursDropdown;
