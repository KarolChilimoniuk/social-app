import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Layouts/Home/Home";
import RegistLogin from "./Layouts/Regiser/Login/Register/Register/RegistLogin";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<RegistLogin />} />
      </Routes>
    </div>
  );
};

export default App;
