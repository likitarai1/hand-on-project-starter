import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import Marketplace from "./pages/Marketplace";
import Login from "./pages/Login";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route exact path="/" element={<Marketplace />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
