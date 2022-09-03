import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { IRootState } from "./services/interfaces/interfaces";
import { tokenChecking } from "./services/api/auth";
import Home from "./Layouts/Home/Home";
import RegistLogin from "./Layouts/Regiser/Login/Register/Register/RegistLogin";
import MainUserPage from "./Layouts/MainUserPage/MainUserPage";
import Footer from "./components/Footer/Footer";
import { AppContainer, MainDiv } from "./App.style";

const App = (): JSX.Element => {
  const dispatch = useDispatch();
  const loginStatus = useSelector((state: IRootState) => state.userData.logged);
  const navigate = useNavigate();

  useEffect(() => {
    tokenChecking(dispatch);
    loginStatus === true && navigate("/logged");
  }, [loginStatus]);

  return (
    <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_ID}`}>
      <AppContainer>
        <MainDiv>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<RegistLogin />} />
            <Route path="/logged" element={<MainUserPage />} />
          </Routes>
        </MainDiv>
        <Footer />
      </AppContainer>
    </GoogleOAuthProvider>
  );
};

export default App;
