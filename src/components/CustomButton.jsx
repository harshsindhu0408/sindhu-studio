import React from "react";

const CustomButton = () => {
  return (
    <button class="group relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 text-sm font-medium duration-100 text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
      <span class="relative px-5 py-2.5 transition-all ease-in duration-200 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        Show more ..
      </span>
      
    </button>
  );
};

export default CustomButton;