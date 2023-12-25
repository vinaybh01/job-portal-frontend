import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiCalendar, FiDollarSign, FiClock, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Cart({ data }) {
  const navigate = useNavigate();

  const {
    _id,
    jobTitle,
    companyName,
    companyLogo,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    postingDate,
    experienceLevel,
    employmentType,
    description,
  } = data;

  return (
    <div className="main w-[600px] m-8">
      <div
        className="logo flex cursor-pointer"
        onClick={() => navigate(`/job-des/${_id}`)}
      >
        <div className="logo-details m-5">
          {" "}
          <img src={companyLogo} width={"100px"} height={"100px"} alt="" />
        </div>
        <div className="details">
          <h2 className="font-bold">{companyName}</h2>
          <h2 className="font-semibold">{jobTitle}</h2>
          <div className="loc flex justify-between">
            <p className="flex justify-center items-center">
              <FiMapPin className="mr-0.5" />
              {jobLocation}
            </p>
            <p className="flex justify-center items-center">
              <FiClock className="mr-0.5" />
              {employmentType}
            </p>
            <p className="flex justify-center items-center">
              {experienceLevel}
            </p>
            <p>
              ${minPrice}-{maxPrice}k
            </p>
            <p className="flex justify-center items-center">
              <FiCalendar className="mr-0.5" />
              {salaryType}
            </p>
          </div>
          <p className="font-light">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
