import { useState, useEffect } from "react";
import { Dispatch } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, useNavigate, NavigateFunction } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { IRootState } from "./interfaces/interfaces";
import { tokenChecking } from "./services/api/auth";
import UserBar from "./components/UserBar/UserBar";
import MobileNav from "./components/MobileNav/MobileNav";
import Home from "./pages/Home/Home";
import RegistLogin from "./pages/RegisterLogin/RegistLogin";
import MainUserPage from "./pages/MainUserPage/MainUserPage";
import UserInfoPage from "./pages/UserInfoPage/UserInfoPage";
import UserPanel from "./pages/EditUserDataPage/EditUserDataPage";
import Modal from "./components/Modal/Modal";
import Footer from "./components/Footer/Footer";
import { AppContainer, MainDiv, MainDiv2 } from "./App.style";

const App = (): JSX.Element => {
  const dispatch: Dispatch = useDispatch();
  const loginStatus: boolean = useSelector(
    (state: IRootState) => state.userData.logged
  );

  const navigate: NavigateFunction = useNavigate();

  const [activeMobileNav, setActiveMobileNav] = useState<boolean>(false);

  useEffect(() => {
    tokenChecking(dispatch);
    loginStatus && navigate("/logged");
    !loginStatus && navigate("/");
  }, [loginStatus]);

  return (
    <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_ID}`}>
      <AppContainer>
        {loginStatus && (
          <>
            <UserBar NavHandler={() => setActiveMobileNav(!activeMobileNav)} />
            <MobileNav active={activeMobileNav} />
          </>
        )}
        <Routes>
          <Route
            path="/auth"
            element={
              <MainDiv>
                <RegistLogin />
              </MainDiv>
            }
          />
          <Route
            path="/logged/editUser"
            element={
              <MainDiv2>
                <Modal />
                <UserPanel />
              </MainDiv2>
            }
          />
          <Route
            path={`/logged/userInfo`}
            element={
              <MainDiv2>
                <Modal />
                <UserInfoPage />
              </MainDiv2>
            }
          />
          <Route
            path="/logged"
            element={
              <MainDiv2>
                <Modal />
                <MainUserPage />
              </MainDiv2>
            }
          />
          <Route
            path="/"
            element={
              <MainDiv>
                <Home />
              </MainDiv>
            }
          />
        </Routes>
        <Footer />
      </AppContainer>
    </GoogleOAuthProvider>
  );
};

export default App;
