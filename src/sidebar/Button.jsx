import React from "react";

function Button({ onClickHandler, value, title }) {
  return (
    <div>
      <button
        onClick={onClickHandler}
        value={value}
        className={`px-4 py-1 border text-base hover:bg-blue-800 hover:text-white`}
      >
        {title}
      </button>
    </div>
  );
}

export default Button;
