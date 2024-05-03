import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import NavbarHook from "./NavbarHook";
import Home from "./pages/Home";
import Analysis from "./pages/Analysis";

const App = () => {
  return (
    <Router>
      <NavbarHook />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Analysis" element={<Analysis />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;