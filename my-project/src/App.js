import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import NavbarHook from "./NavbarHook";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Analysis from "./pages/Analysis";

const App = () => {
  return (
    <Router>
      <NavbarHook />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Analysis" element={<Analysis />} />
          <Route path="/Upload" element={<Upload />} />
        </Routes>
          <paragraph>This is an example of a paragraph
          containter box. It is used to contain the introduction
          to the idea of the project.
          </paragraph>
          <aside>
            This is where another explanation will go
          </aside>
          <paragraph>
            This is where explanation of the project
            processes will go in the future.
          </paragraph>
          <aside>
            This is where the animation and stuff like that will go.
          </aside>
      </main>
    </Router>
  );
};

export default App;