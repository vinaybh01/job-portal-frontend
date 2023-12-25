import React from "react";
import InputField from "../component/InputField";

function WorkType({ handleChange }) {
  return (
    <div>
      {" "}
      <h4 className="text-lg font-medium mb-2">Work Type</h4>
      <div>
        <InputField
          handleChange={handleChange}
          value="Internship"
          title="Internship"
          name="test2" // Same name for London radio button
        />
        <InputField
          handleChange={handleChange}
          value="Full-time"
          title="Full-time"
          name="test2" // Same name for London radio button
        />
        <InputField
          handleChange={handleChange}
          value="Work remotely"
          title="Work remotely"
          name="test2" // Different name for Seattle radio button
        />
        <InputField
          handleChange={handleChange}
          value="Hybrid"
          title="Hybrid"
          name="test2" // Same name for London radio button
        />
      </div>
    </div>
  );
}

export default WorkType;
