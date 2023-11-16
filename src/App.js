import React from "react";
import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./Pages/Home/Homescreen/Home";
import Navbar from "./Pages/Home/Navbar";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
