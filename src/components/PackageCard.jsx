import React from "react";

const PackageCard = ({ packageData }) => {
  return (
    <div className="w-full px-4 mb-8 lg:mb-0 mx-auto max-w-[400px]">
      <div className="max-w-sm lg:max-w-none mx-auto pt-10 px-10 pb-8 bg-gray-100 rounded-3xl">
        <div className="text-center mb-6">
          <h5 className="text-2xl font-semibold text-gray-800 mb-3">
            {packageData.name}
          </h5>
          <span className="block text-5xl font-bold text-gray-800 mb-3">
            ₹{packageData.price.toLocaleString()}
          </span>
          <a
            href="https://api.whatsapp.com/send?phone=9416370132"
            target="_blank"
            rel="noreferrer"
            className="relative group inline-block w-full py-4 px-6 text-center text-gray-800 hover:text-gray-50 bg-yellow-300 font-semibold rounded-full overflow-hidden transition duration-200"
          >
            <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
            <span className="relative">Get more info</span>
          </a>
        </div>
        <ul className="space-y-4">
          <p className="mt-4 mb-4 text-xl font-semibold text-gray-700">
            Inclusions
          </p>
          {packageData.included.map((item, index) => (
            <li key={index} className="flex items-center space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="w-6 h-6 font-bold fill-current text-green-400 flex-shrink-0"
              >
                <path d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L8 12.586l8.293-8.293a1 1 0 111.414 1.414l-9 9a1 1 0 01-1.414 0z"></path>
              </svg>
              <span className="text-gray-800 text-lg">{item}</span>
            </li>
          ))}

          <p className="mt-10 mb-4 text-xl font-semibold text-gray-700">
            Exclusions
          </p>
          {packageData.excluded.map((item, index) => (
            <li key={index} className="flex items-center space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="w-6 h-6 fill-current text-red-600"
              >
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 11-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
              </svg>
              <span className="ml-2 text-gray-500 line-through text-lg">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PackageCard;
