import React, { useEffect, useState } from "react";
import Banner from "../component/Banner";
import Jobs from "./Jobs";
import Cart from "../component/Cart";
import Sidebar from "../sidebar/Sidebar";
import NewsLetter from "../component/NewsLetter";
import axios from "axios";

function Home() {
  const [selectedCat, setSelectedCat] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 6;

  useEffect(() => {
    setIsLoading(true);
    axios.get(`http://localhost:3000/admin/jobs`).then((res) => {
      setJobs(res.data);
      setIsLoading(false);
    });
  }, []);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    // console.log(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    // console.log(e.target.value);
  };

  const filteredJob = jobs.filter((j) => {
    return j.jobTitle.toLowerCase().indexOf(query) !== -1;
  });
  // console.log(filteredJob);

  const handleChange = (e) => {
    console.log("it occured handle change");
    setSelectedCat(e.target.value);
    console.log("it completed", selectedCat);
  };

  const handleClick = (e) => {
    setSelectedCat(e.target.value);
  };

  const claclulatePageRange = () => {
    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    return { startIndex, endIndex };
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredJob.length / itemPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const filteredData = (jobs, selected, query, location) => {
    let filteredJobs = [...jobs]; // Copying the original jobs array

    if (query) {
      filteredJobs = filteredJobs.filter((j) =>
        j.jobTitle.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (location) {
      filteredJobs = filteredJobs.filter((j) =>
        j.jobLocation.toLowerCase().includes(location.toLowerCase())
      );
    }

    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          maxPrice,
          postingDate,
          salaryType,
          employmentType,
          experienceLevel,
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          postingDate >= selected ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          experienceLevel.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase()
      );
    }

    // slice based on current page
    const { startIndex, endIndex } = claclulatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);
    return filteredJobs.map((data, i) => <Cart key={i} data={data} />);
  };

  const result = filteredData(jobs, selectedCat, query, location);

  return (
    <div>
      <Banner
        handleInputChange={handleInputChange}
        handleLocationChange={handleLocationChange}
      />

      <div className="bg-[#FAFAFA] flex justify-between md:gird grid-cols-4 gap-8 px-4 py-12">
        <div className="bg-white p-4 rounded">
          {/* left side */}
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>

        {/* main  */}
        <div className="col-span-2 bg-white p4 rounded-sm">
          {isLoading ? (
            <p className="font-semibold text-xl">Loading</p>
          ) : result.length > 0 ? (
            <Jobs result={result} />
          ) : (
            <p className="font-semibold text-xl">No Job Found</p>
          )}

          {/* pagination */}

          {result.length > 0 ? (
            <div className="flex justify-center mt-4 space-x-8">
              <button onClick={prevPage} disabled={currentPage === 1}>
                Previous
              </button>
              <span>
                Page {currentPage} of{" "}
                {Math.ceil(filteredJob.length / itemPerPage)}
              </span>
              <button
                onClick={nextPage}
                disabled={
                  currentPage === Math.ceil(filteredJob.length / itemPerPage)
                }
              >
                Next
              </button>
            </div>
          ) : (
            ""
          )}
        </div>

        {/* right */}
        <div className="bg-white p-4 rounded">
          <NewsLetter />
        </div>
      </div>
    </div>
  );
}

export default Home;
