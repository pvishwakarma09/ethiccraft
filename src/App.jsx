import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HeroSection from "./components/Sections/HeroSection";
import ProgramCard from "./components/Sections/ProgramCard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/hero" element={<HeroSection />} />
          <Route path="/more" element={<ProgramCard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
