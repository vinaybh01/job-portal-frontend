import React from "react";
import Location from "./Location";
import Salary from "./Salary";
import JobPosting from "./JobPosting";
import WorkExperience from "./WorkExperience";
import WorkType from "./WorkType";

function Sidebar({ handleChange, handleClick }) {
  return (
    <div>
      <h3>Filters</h3>
      <Location handleChange={handleChange} />
      <Salary handleChange={handleChange} handleClick={handleClick} />
      <JobPosting handleChange={handleChange} />
      <WorkExperience handleChange={handleChange} />
      <WorkType handleChange={handleChange} />
    </div>
  );
}

export default Sidebar;
