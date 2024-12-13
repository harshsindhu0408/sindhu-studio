import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import OpenHoursDropdown from "../components/OpenHoursDropdown";

const GetQuote = () => {
  const iconStyle = { color: "#25d366" };
  return (
    <div className="flex scroll-smooth sm:gap-y-6 md:flex-row sm:flex-col items-start justify-center w-full">
      {/* Left div with contact info */}
      <div className="flex gap-y-8 md:gap-y-10 w-full md:mt-14 sm:mt-8 md:w-5/12 flex-col items-start justify-center scroll-smooth sm:px-10 md:px-20">
        <h2 className="text-4xl font-FjallaOne">
          CONTACT US AND GET QUOTE FOR YOUR WEDDING DAY
        </h2>

        <h2 className="text-2xl md:w-10/12 font-FjallaOne">
          Visit us! We love our customers; feel free to drop by during business
          hours.
        </h2>

        <button
          className="flex flex-row items-center justify-center py-2 px-6 bg-white border-2 shadow-xl 
        font-semibold border-green-500 text-black transition-all duration-200"
        >
          <FaWhatsapp className="w-6 h-6 mr-2" style={iconStyle} />
          <a
            href="https://api.whatsapp.com/send?phone=9416370132"
            target="_blank"
            rel="noreferrer"
          >
            Contact Us on WhatsApp
          </a>
        </button>

        <h2 className="text-xl md:w-10/12 font-FjallaOne">
          Sindhu Photo Studio, Delhi Road, opp. Balmev plaza, Dev Colony,
          Rohtak, Haryana, India
        </h2>

        <OpenHoursDropdown />
      </div>

      {/* Google maps div */}
      <div className="w-full md:mt-14 sm:mt-8 md:w-6/12">
        <div style={{ width: "100%" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3493.414924006284!2d76.61079377633027!3d28.886015775527298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d851e6cd4ddf1%3A0xee20346ea78105df!2sSindhu%20Photo%20Studio!5e0!3m2!1sen!2sin!4v1734059050374!5m2!1sen!2sin"
            width="100%"
            height="500"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default GetQuote;
