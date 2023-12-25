import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FiBriefcase } from "react-icons/fi";
import Swal from "sweetalert2";

function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/job/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Network response was not ok: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        setJob(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, [id]); // Ensure useEffect runs whenever `id` changes
  const name = job.jobTitle;

  const handleApply = async () => {
    const { value: url } = await Swal.fire({
      input: "url",
      inputLabel: "Resume",
      inputPlaceholder: "Enter the Resume URL",
    });
    if (url) {
      Swal.fire(`Successfully Applied for the ${name} role`);
    }
  };

  return (
    <div>
      <div className="head m-10">
        <p className="font-bold text-2xl text-blue-700 ">Job details</p>
        <p className="mt-4 font-light opacity-70">
          Here's how the job details align with your job preference.
        </p>
      </div>
      <div className="main ml-10 flex">
        <FiBriefcase className="text-2xl" />
        <p className="font-semibold ml-3 text-xl">Job Type</p>
      </div>
      <div className="button ml-10 flex">
        <button className="border mt-3 pl-3 pr-3 pt-1.5 pb-1.5 font-medium bg-blue-700 text-white">
          Full-time
        </button>
        <button
          className="border mt-3 ml-2 pl-3 pr-3 pt-1.5 pb-1.5 font-medium bg-blue-900 text-white"
          onClick={handleApply}
        >
          Apply Now
        </button>
      </div>
    </div>
  );
}

export default JobDetails;
