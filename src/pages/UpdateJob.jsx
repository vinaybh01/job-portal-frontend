import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "../App.css";
import Creatable from "react-select/creatable";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function UpdateJob() {
  const [selecetedOptions, setSelecetedOptions] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const [jobData, setJobData] = useState(null);
  // console.log("jobData", jobData);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    axios
      .get(`https://job-portal-app-api.onrender.com/job/${id}`)
      .then((res) => {
        const response = res.data;
        setJobData(response);

        // Set default values for form fields using setValue
        // setValue("jobTitle", jobData.jobTitle);
        // setValue("companyName", jobData.companyName);
        // setValue("companyLogo", jobData.companyLogo);
        // setValue("minPrice", jobData.minPrice);
        // setValue("maxPrice", jobData.maxPrice);
        // setValue("salaryType", jobData.salaryType);
        // setValue("jobLocation", jobData.jobLocation);
        // setValue("postingDate", jobData.postingDate);
        // setValue("experienceLevel", jobData.experienceLevel);
        // setValue("employmentType", jobData.employmentType);
        // setValue("description", jobData.description);
        // setValue("skills", jobData.skills);
        // setValue("postedBy", jobData.postedBy);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, setValue]);

  const onSubmit = (data) => {
    data.skills = selecetedOptions;
    console.log(data);
    axios
      .put(`http://localhost:3000/admin/job/${id}`, data)
      .then((res) => console.log("Job Updated:", res.data))
      .then((err) => console.log(err));

    alert("Sucessfully Updated a Job");
    navigate("/my-jobs");
  };

  const options = [
    { value: "javascript", label: "JavaScript" },
    { value: "html", label: "HTML" },
    { value: "css", label: "CSS" },
    { value: "reactjs", label: "ReactJs" },
    { value: "nodejs", label: "NodeJs" },
    { value: "expressjs", label: "ExpressJs" },
  ];

  // const { jobTitle } = jobData;
  // console.log(jobTitle);

  return (
    <div>
      <div className="main">
        <div className="bg-[#FAFAFA] py-10 px-4 ">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* first-row */}
            <div className="create-job-flex ">
              <div className=" w-1/2">
                <label htmlFor="" className="block mb-2 text-lg">
                  Job Title
                </label>
                <input
                  type="text"
                  placeholder="Ex: Web Dev"
                  {...register("jobTitle")}
                  className="create-job-input"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="" className="block mb-2 text-lg">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Ex: Micrsoft"
                  {...register("companyName")}
                  className="create-job-input"
                />
              </div>
            </div>
            {/* second-row */}
            <div className="create-job-flex">
              <div className=" w-1/2">
                <label htmlFor="" className="block mb-2 text-lg">
                  Minimum Salary
                </label>
                <input
                  type="text"
                  placeholder="$20k"
                  {...register("minPrice")}
                  className="create-job-input"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="" className="block mb-2 text-lg">
                  Maximum Salary
                </label>
                <input
                  type="text"
                  placeholder="$100k"
                  {...register("maxPrice")}
                  className="create-job-input"
                />
              </div>
            </div>
            {/* third row */}
            <div className="create-job-flex">
              <div className=" w-1/2">
                <label htmlFor="" className="block mb-2 text-lg">
                  Salary Type
                </label>
                <select
                  {...register("salaryType")}
                  className="create-job-input"
                >
                  <option value="Mr">Choose your salary</option>
                  <option value="Hourly">Hourly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Yearly">Yearly</option>
                </select>
              </div>
              <div className="w-1/2">
                <label htmlFor="" className="block mb-2 text-lg">
                  Job Location
                </label>
                <input
                  type="text"
                  placeholder="Ex: London"
                  {...register("jobLocation")}
                  className="create-job-input"
                />
              </div>
            </div>
            {/* Fourth row */}
            <div className="create-job-flex">
              {/* <div className="w-1/2">
                <label htmlFor="" className="block mb-2 text-lg">
                  Job Posting Date
                </label>
                <input
                  type="date"
                  placeholder="Ex: 2023-11-3"
                  {...register("postingDate")}
                  className="create-job-input"
                />
              </div> */}
              <div className=" w-1/2">
                <label htmlFor="" className="block mb-2 text-lg">
                  Experience Level
                </label>
                <select
                  {...register("experienceLevel")}
                  className="create-job-input"
                >
                  <option value="Mr">Choose your exprience</option>
                  <option value="Any experience">Any experience</option>
                  <option value="Fresher">Fresher</option>
                  <option value="0-1 Years">0-1 Years</option>
                  <option value="2-5 Years">2-5 Years</option>
                </select>
              </div>
            </div>
            {/* 5th row */}
            <div>
              <label htmlFor="" className="block mb-2 text-lg">
                Required Skill Set:
              </label>
              <Creatable
                className="create-job-input py-4"
                defaultValue={selecetedOptions}
                onChange={setSelecetedOptions}
                options={options}
                isMulti
              />
            </div>
            {/* 6th row */}
            <div className="create-job-flex">
              <div className="w-1/2">
                <label htmlFor="" className="block mb-2 text-lg">
                  Company Logo
                </label>
                <input
                  type="url"
                  placeholder="Paste your company logo URL"
                  {...register("companyLogo")}
                  className="create-job-input"
                />
              </div>
              <div className=" w-1/2">
                <label htmlFor="" className="block mb-2 text-lg">
                  Job Type
                </label>
                <select
                  {...register("employmentType")}
                  className="create-job-input"
                >
                  <option value="Mr">Choose your Job type</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Internship">Internship</option>
                  <option value="Work remotely">Work remotely</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>
            </div>
            {/* 7throw */}
            <div className="w-full ">
              <label htmlFor="" className="block mb-2 text-lg">
                Job Description
              </label>
              <textarea
                placeholder="Description"
                {...register("description")}
                className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700"
                rows={6}
              />
            </div>
            <div>
              <label htmlFor="" className="block mb-2 text-lg">
                Job Posted By
              </label>
              <input
                type="email"
                placeholder="Your Email"
                {...register("postedBy")}
                className="create-job-input"
              />
            </div>
            <input
              type="submit"
              className="my-5 block mt-12 bg-blue-800 text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateJob;
