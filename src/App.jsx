import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import About from "./pages/About";
import CreateJob from "./pages/CreateJob";
import MyJobs from "./pages/MyJobs";
import UpdateJob from "./pages/UpdateJob";
import Register from "./pages/Register";
import Login from "./pages/Login";
import JobDetails from "./pages/JobDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/post-job" element={<CreateJob />} />
          <Route exact path="/my-jobs" element={<MyJobs />} />
          <Route exact path="/edit-job/:id" element={<UpdateJob />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/job-des/:id" element={<JobDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
