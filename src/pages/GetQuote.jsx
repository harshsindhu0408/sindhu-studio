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

        <button className="flex flex-row items-center justify-center py-2 px-6 bg-white border-2 shadow-xl 
        font-semibold border-green-500 text-black transition-all duration-200">
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
      <div className="w-full md:w-6/12">
        <div style={{ width: "100%" }}>
          <iframe
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Sindhu%20Photo%20Studio,%20Shop%20no.%2017,%20Power%20house,%20Delhi%20Rd,%20opp.%20Balmev%20plaza,%20Dev%20Colony,%20Rohtak,%20Haryana%20124001+(Sindhu%20Digital%20Studio)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            title="Google Map"
          >
            <a href="https://www.maps.ie/population/">Find Population on Map</a>
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default GetQuote;
