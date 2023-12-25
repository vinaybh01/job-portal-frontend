import React from "react";

export default function Jobs({ result }) {
  return (
    <div className="d">
      <div>
        <h3 className="text-lg font-bold ml-5 mt-5 ">{result.length} Jobs</h3>
      </div>
      <div>{result}</div>
    </div>
  );
}
