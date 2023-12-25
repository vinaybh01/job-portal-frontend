import React from "react";

function InputField({ handleChange, value, title, name }) {
  return (
    <div>
      <label htmlFor={value} className="sidebar-label-container">
        <input
          type="radio"
          name={name}
          id={value}
          value={value}
          onChange={handleChange}
        />
        <span className="checkmark"></span>
        {title}
      </label>{" "}
    </div>
  );
}

export default InputField;
