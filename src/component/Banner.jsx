import React, { useState } from "react";
import {
  FiCalendar,
  FiDollarSign,
  FiClock,
  FiMapPin,
  FiSearch,
} from "react-icons/fi";

function Banner({ handleInputChange, handleLocationChange }) {
  return (
    <div className="container mx-auto px-4 py-14">
      <h1 className="text-5xl font-bold text-primary mb-3">
        Find Your New <span className="text-blue-800">Job</span> Today
      </h1>
      <p className="text-lg text-black/70 mb-8">
        Thousands of jobs in the computer, engineering and technology sectors
        are waiting for you.
      </p>
      <form action="">
        <div className="conatiner flex">
          {" "}
          <div className="flex rounded shadow-sm ring-1 ring-inset w-full ring-gray-300 focus-within:ring-2 m-2 focus-within:ring-inset">
            <input
              type="text"
              placeholder="Search"
              onChange={handleInputChange}
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0"
            />
            <FiSearch className="absolute mt-3 ml-2.5 opacity-80 " />
          </div>{" "}
          <div className="flex rounded m-2 shadow-sm ring-1 w-full ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset">
            <input
              type="text"
              placeholder="Location"
              onChange={handleLocationChange}
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0"
            />
            <FiMapPin className="absolute mt-3 ml-2.5 opacity-80 " />
            {/* <FiSearch className="absolute mt-2.5" /> */}
          </div>
          <button className="bg-blue-800 text-white p-2 m-2 rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Banner;
