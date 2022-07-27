import React from "react";
import { Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Home from "./Layouts/Home/Home";
import RegistLogin from "./Layouts/Regiser/Login/Register/Register/RegistLogin";
import "./App.css";

const App = (): JSX.Element => {
  return (
    <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_ID}`}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<RegistLogin />} />
        </Routes>
      </div>
    </GoogleOAuthProvider>
  );
};

export default App;
