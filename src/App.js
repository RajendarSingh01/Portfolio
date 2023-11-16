import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Homescreen/Home";
import Navbar from "./Pages/Home/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* i will add more routes here */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
