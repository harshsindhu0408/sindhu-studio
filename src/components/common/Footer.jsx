import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const navlinks = [
    { id: 1, name: "HOME", link: "/" },
    { id: 2, name: "PACKAGES", link: "/packages" },
    { id: 3, name: "PORTFOLIO", link: "/portfolio" },
    { id: 4, name: "WEDDING FILMS", link: "/wedding-films" },
    { id: 5, name: "GET QUOTE", link: "/get-quote" },
    { id: 6, name: "BOOKINGS", link: "/bookings" },
    { id: 7, name: "ABOUT US", link: "/about-us" },
  ];
  return (
    <div className="flex flex-col bg-primary w-full text-white items-center justify-center mx-auto gap-y-6 py-6">
      <p className="w-11/12 text-center">
        Copyright © {new Date().getFullYear()} Sindhu Studio - All Rights
        Reserved.
      </p>

      <div>
        <ul className="font-medium gap-x-4 flex flex-col p-4 mt-4 rounded-lg md:flex-row">
          {navlinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.link}
                className="block font-Roborto font-semibold py-2 px-3 rounded text-white md:p-0 "
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
