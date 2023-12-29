import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isNavbarOpen, setNavbarOpen] = useState(false);
  const navlinks = [
    { id: 1, name: "HOME", link: "/" },
    { id: 2, name: "PORTFOLIO", link: "/portfolio" },
    { id: 3, name: "WEDDING FILMS", link: "/wedding-films" },
    { id: 4, name: "GET QUOTE", link: "/get-quote" },
    { id: 5, name: "BOOKINGS", link: "/bookings" },
    { id: 6, name: "ABOUT US", link: "/about-us" },
  ];

  const toggleNavbar = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  return (
    <div className='w-full mx-auto flex shadow-lg h-20 items-center justify-center'>
      <nav className="w-full bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to = {'/'}>
          <span className="self-center font-FjallaOne tracking-widest text-4xl leading-10 font-semibold whitespace-nowrap text-primary">SINDHU STUDIO</span>
          </Link>
          <button
            onClick={toggleNavbar}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isNavbarOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className={`w-full md:block md:w-auto ${isNavbarOpen ? 'block' : 'hidden'}`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              
              {navlinks.map((link) => (
                <li key={link.id}>
                  <Link to={link.link} className='block font-Lato font-semibold py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent transition-all duration-200 text-sm md:hover:text-primary md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>{link.name}</Link>
                </li>
              ))}

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
