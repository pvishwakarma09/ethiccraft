import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"; // Import your Navbar component
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Events from "./components/Events/Events";
import GetInvolved from "./components/GetInvolved/GetInvolved";
import Education from "./components/Education/Education";
import Registration from "./components/Resistration/Resistration";
import Donate from "./components/Donate/Donate";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div>
        {" "}
        {/* Adjust margin to avoid overlapping with the fixed Navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/getinvolved" element={<GetInvolved />} />
          <Route path="/resisternow" element={<Registration />} />
          <Route path="/donatenow" element={<Donate />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
