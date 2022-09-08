import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, useNavigate, NavigateFunction } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { IRootState } from "./services/interfaces/interfaces";
import { tokenChecking } from "./services/api/auth";
import UserBar from "./components/UserBar/UserBar";
import Navigation from "./components/Navigation/Navigation";
import Home from "./Layouts/Home/Home";
import RegistLogin from "./Layouts/Regiser/Login/Register/Register/RegistLogin";
import MainUserPage from "./Layouts/MainUserPage/MainUserPage";
import UserPanel from "./components/UserPanel/UserPanel";
import Footer from "./components/Footer/Footer";
import { AppContainer, MainDiv } from "./App.style";

const App = (): JSX.Element => {
  const [activeNav, setActiveNav] = useState<boolean>(false);
  const dispatch = useDispatch();
  const loginStatus: boolean = useSelector(
    (state: IRootState) => state.userData.logged
  );
  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    tokenChecking(dispatch);
    loginStatus === true && navigate("/logged");
  }, [loginStatus]);

  return (
    <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_ID}`}>
      <AppContainer>
        <MainDiv>
          {loginStatus && (
            <>
              <UserBar NavHandler={() => setActiveNav(!activeNav)} />
              <Navigation active={activeNav} />
            </>
          )}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<RegistLogin />} />
            <Route path="/logged" element={<MainUserPage />} />
            <Route path="/user" element={<UserPanel />} />
          </Routes>
        </MainDiv>
        <Footer />
      </AppContainer>
    </GoogleOAuthProvider>
  );
};

export default App;
