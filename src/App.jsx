import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HeroSection from "./components/Sections/HeroSection";
import ProgramCard from "./components/Sections/ProgramCard";
import HomePage from "./components/HomePage/Homepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
