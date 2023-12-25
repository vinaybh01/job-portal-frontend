import React from "react";
import InputField from "../component/InputField";

function WorkExperience({ handleChange }) {
  return (
    <div>
      {" "}
      <h4 className="text-lg font-medium mb-2">Work Experience</h4>
      <div>
        <InputField
          handleChange={handleChange}
          value="Any experience"
          title="Any experience"
          name="test2" // Same name for London radio button
        />
        <InputField
          handleChange={handleChange}
          value="Fresher"
          title="Fresher"
          name="test2" // Same name for London radio button
        />
        <InputField
          handleChange={handleChange}
          value="0-1 Years"
          title="0-1 Years"
          name="test2" // Same name for London radio button
        />
        <InputField
          handleChange={handleChange}
          value="2-5 Years"
          title="2-5 Years" 
          name="test2" // Different name for Seattle radio button
        />
      </div>
    </div>
  );
}

export default WorkExperience;
