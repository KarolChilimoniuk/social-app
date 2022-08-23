import React from "react";
import { Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Home from "./Layouts/Home/Home";
import RegistLogin from "./Layouts/Regiser/Login/Register/Register/RegistLogin";
import Footer from "./components/Footer/Footer";
import { AppContainer, MainDiv } from "./App.style";

const App = (): JSX.Element => {
  return (
    <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_ID}`}>
      <AppContainer>
        <MainDiv>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<RegistLogin />} />
          </Routes>
        </MainDiv>
        <Footer />
      </AppContainer>
    </GoogleOAuthProvider>
  );
};

export default App;
