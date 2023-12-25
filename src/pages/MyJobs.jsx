import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function MyJobs() {
  const [jobs, setJobs] = useState([]);
  const [searchText, setSeacrchText] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 4;

  const userEmail = localStorage.getItem("email");

  useEffect(() => {
    const userEmail = localStorage.getItem("email");
    if (!userEmail) {
      navigate("/login");
    }
    if (userEmail) {
      console.log(userEmail);
      setLoading(true);
      fetch(`https://job-portal-app-api.onrender.com/admin/myjobs/${userEmail}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setJobs(data);
          setLoading(false);
        });
    }
  }, [searchText]);

  const handleClick = () => {
    const filter = jobs.filter(
      (job) =>
        job.jobTitle.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
    setJobs(filter);
    setLoading(false);
  };

  const handleDelete = async (id) => {
    axios
      .delete(`http://localhost:3000/admin/job/${id}`)
      .then((res) => console.log(res))
      .then((err) => console.log(err));
    alert("sucessfully Deleted");
    window.location.reload();
  };

  //pagination
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentJobs = jobs.slice(indexOfFirstItem, indexOfLastItem);

  //next btn and pre btn
  const nextPage = () => {
    if (indexOfLastItem < jobs.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return userEmail ? (
    <div className="max-w-screen-2xl container mx-auto px-4">
      <div className="my-jobs-container">
        <h1 className="text-center p-4">ALL MY JOBS</h1>
        <div className="p-2 text-center mb-2">
          <input
            onChange={(e) => setSeacrchText(e.target.value)}
            type="text"
            name="search"
            id="search"
            className="py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full"
          />
          <button
            onClick={handleClick}
            className="bg-blue-800 text-white font-semibold px-8 py-2 rounded-sm mb-4"
          >
            Search
          </button>
        </div>
      </div>

      {/* Table */}
      <section className="py-1 bg-blueGray-50">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-blueGray-700">
                    All Jobs
                  </h3>
                </div>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <button
                    className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => navigate("/post-job")}
                  >
                    POST A NEW JOB
                  </button>
                </div>
              </div>
            </div>

            <div className="block w-full overflow-x-auto">
              <table className="items-center bg-transparent w-full border-collapse ">
                <thead>
                  <tr>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      NO
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      TITLE
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      COMPANY NAME
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      SALARY
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      EDIT
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      DElETE
                    </th>
                  </tr>
                </thead>
                {loading ? (
                  <div>
                    <p className="items-center justify-self-center h-20">
                      Loading...
                    </p>
                  </div>
                ) : (
                  <tbody>
                    {currentJobs.map((job, index) => (
                      <tr key={index}>
                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                          {index + 1}
                        </th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                          {job.jobTitle}
                        </td>
                        <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {job.companyName}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                          ${job.minPrice}-{job.maxPrice}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                          <button
                            onClick={() => navigate(`/edit-job/${job?._id}`)}
                          >
                            Edit
                          </button>
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                          <button
                            onClick={() => handleDelete(job._id)}
                            className="bg-red-700 py-2 px-6 text-white rounded-sm"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </div>
        <footer className="relative pt-8 pb-6 mt-16">
          <div className="container mx-auto px-4 flex justify-center text-center">
            {currentPage > 1 && (
              <button className="hover:underline" onClick={prevPage}>
                Previous
              </button>
            )}
            {indexOfLastItem < jobs.length && (
              <button className="hover:underline" onClick={nextPage}>
                Next
              </button>
            )}
          </div>
        </footer>
      </section>
    </div>
  ) : null;
}

export default MyJobs;
