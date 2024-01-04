import React from "react";
import InputField from "../component/InputField";

function Location({ handleChange }) {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Location</h4>
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
          value="Banglore"
          title="Banglore"
          name="test2" // Same name for London radio button
        />
        <InputField
          handleChange={handleChange}
          value="Chennai"
          title="Chennai"
          name="test2" // Different name for Seattle radio button
        />
        <InputField
          handleChange={handleChange}
          value="Pune"
          title="Pune"
          name="test2" // Different name for Madrid radio button
        />
        <InputField
          handleChange={handleChange}
          value="Mumbai"
          title="Mumbai"
          name="test2" // Different name for Boston radio button
        />
      </div>
    </div>
  );
}

export default Location;
