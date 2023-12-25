import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const response = await axios.post(
      "https://job-portal-app-api.onrender.com/login",
      {
        username: email,
        password: password,
      }
    );
    const { username } = response.data.user;
    localStorage.setItem("email", username);
    navigate("/");
  };

  return (
    <div>
      <div className="">
        <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
          <div className="md:w-1/3 max-w-sm">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              alt="Sample image"
            />
          </div>
          <div className="md:w-1/3 max-w-sm">
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
              type="text"
              onChange={(e) => {
                let elemt = e.target;
                setEmail(elemt.value);
              }}
              placeholder="Email Address"
            />
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              type="password"
              onChange={(e) => {
                let elemt = e.target;
                setPassword(elemt.value);
              }}
              placeholder="Password"
            />

            <div className="text-center md:text-left">
              <button
                className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                type="submit"
                onClick={handleSubmit}
              >
                Login
              </button>
            </div>
            <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
              Don't have an account?{" "}
              <a
                className="text-red-600 hover:underline hover:underline-offset-4"
                href="/register"
              >
                Register
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Login;
