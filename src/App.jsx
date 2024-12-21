import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import EducationProgramCard from "./components/Navbar/Pages/EducationProgramCard";
import Home from "./components/Navbar/Pages/Home";
import About from "./components/Navbar/Pages/About";
import Contact from "./components/Navbar/Pages/Contact";
import GetInvolved from "./components/Navbar/Pages/GetInvolved";
import Events from "./components/Navbar/Pages/Events";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route index element={<EducationProgramCard />} />
          <Route index element={<About />} />
          <Route index element={<Contact />} />
          <Route index element={<GetInvolved />} />
          <Route index element={<Events />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
