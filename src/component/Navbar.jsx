import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const userEmail = localStorage.getItem("email");

  return (
    <div>
      {userEmail ? (
        <div className="flex justify-between m-4">
          <div className="logo font-bold text-xl text-blue-800">JOBPORTAL</div>
          <div className="main-content flex justify-between">
            <p
              className="mr-9 cursor-pointer hover:text-blue-900 font-semibold hover:underline "
              onClick={() => navigate("/")}
            >
              SEARCH
            </p>
            <p
              className="mr-9 cursor-pointer hover:text-blue-900 font-semibold hover:underline "
              onClick={() => navigate("/my-jobs")}
            >
              MY JOBS
            </p>
            <p
              className="mr-9 cursor-pointer hover:text-blue-900 font-semibold hover:underline "
              onClick={() => navigate("/post-job")}
            >
              POST A JOB
            </p>
          </div>
          <div className="login">
            <button
              className="mr-4 border pl-2 pr-2 pt-1 pb-1 bg-blue-800 text-white hover:text-black font-semibold rounded"
              onClick={() => {
                localStorage.removeItem("email");
                navigate("/login");
              }}
            >
              LOGOUT
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-between m-4">
          <div className="logo font-bold text-xl text-blue-800">JOBPORTAL</div>
          <div className="main-content flex justify-between">
            <p
              className="mr-9 cursor-pointer hover:text-blue-900 font-semibold hover:underline "
              onClick={() => navigate("/")}
            >
              SEARCH
            </p>
            <p
              className="mr-9 cursor-pointer hover:text-blue-900 font-semibold hover:underline "
              onClick={() => navigate("/my-jobs")}
            >
              MY JOBS
            </p>
            <p
              className="mr-9 cursor-pointer hover:text-blue-900 font-semibold hover:underline "
              onClick={() => navigate("/post-job")}
            >
              POST A JOB
            </p>
          </div>
          <div className="login">
            <button
              className="mr-4 border pl-2 pr-2 pt-1 pb-1 bg-blue-800 text-white hover:text-black font-semibold rounded"
              onClick={() => navigate("/login")}
            >
              LOGIN
            </button>
            <button
              className="mr-4 border pl-2 pr-2 pt-1 pb-1 bg-blue-800 text-white hover:text-black font-semibold rounded"
              onClick={() => navigate("/register")}
            >
              REGISTER
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
