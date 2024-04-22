import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './/pages/Home';
import Analysis from './/pages/Analysis';
import Upload from './/pages/Upload';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <main className='main-content'>
        <Routes>
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/" element={<Home />} />
        </Routes>
        </main>
    </Router>
  );
}

export default App;