import React from "react";
import PackageCard from "../components/PackageCard";
import { packages } from "../helpers";

const Packages = () => {
  return (
    <div className="flex mb-10 flex-col items-center justify-center mt-10">
      <h2 className="text-2xl mb-4 sm:text-3xl md:text-4xl text-center sm:mt-8 font-FjallaOne">
        CHOOSE THE BEST WHICH SUITS YOU
      </h2>
      <div className="flex mt-6 gap-y-10 flex-wrap justify-center">
        {packages.map((packageData, index) => (
          <PackageCard key={index} packageData={packageData} />
        ))}
      </div>
    </div>
  );
};

export default Packages;
