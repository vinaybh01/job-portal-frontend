import React from "react";
import InputField from "../component/InputField";

function JobPosting({ handleChange }) {
  const now = new Date();
  // console.log(now);
  const twentyFourHoursAgo = new Date(now - 24 * 60 * 60 * 1000);
  // console.log(twentyFourHoursAgo);
  const SevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
  // console.log(SevenDaysAgo);
  const ThirtyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);
  // console.log(ThirtyDaysAgo);
  //   Date to string
  const twentyFourHoursAgoDate = twentyFourHoursAgo.toISOString().slice(0, 10);
  // console.log(twentyFourHoursAgoDate);
  const SevenDaysAgoDate = SevenDaysAgo.toISOString().slice(0, 10);
  // console.log(SevenDaysAgoDate);
  const ThirtyDaysAgoDate = ThirtyDaysAgo.toISOString().slice(0, 10);
  // console.log(ThirtyDaysAgoDate);

  return (
    <div>
      <div>
        <h4 className="text-lg font-medium mb-2">Date of posting</h4>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test2"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>
          All
        </label>
        <div>
          <InputField
            handleChange={handleChange}
            value={twentyFourHoursAgoDate}
            title="Last 24 hours"
            name="test2" // Same name for London radio button
          />
          <InputField
            handleChange={handleChange}
            value={SevenDaysAgoDate}
            title="Last 7 days"
            name="test2" // Different name for Seattle radio button
          />
          <InputField
            handleChange={handleChange}
            value={ThirtyDaysAgoDate}
            title="Last Month"
            name="test2" // Different name for Madrid radio button
          />
        </div>
      </div>
    </div>
  );
}

export default JobPosting;
