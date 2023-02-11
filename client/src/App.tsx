import { useState, useEffect } from "react";
import { Dispatch } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, useNavigate, NavigateFunction } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { IRootState } from "./interfaces/interfaces";
import { tokenChecking } from "./services/api/auth";
import UserBar from "./components/UserBar/UserBar";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import RegistLogin from "./pages/Register/RegistLogin";
import MainUserPage from "./pages/MainUserPage/MainUserPage";
import UserInfoPage from "./pages/UserInfoPage/UserInfoPage";
import UserPanel from "./pages/UserPanel/UserPanel";
import Footer from "./components/Footer/Footer";
import { AppContainer, MainDiv, MainDiv2 } from "./App.style";

const App = (): JSX.Element => {
  const [activeNav, setActiveNav] = useState<boolean>(false);
  const dispatch: Dispatch = useDispatch();
  const loginStatus: boolean = useSelector(
    (state: IRootState) => state.userData.logged
  );
  const idToFilterUser: string = useSelector(
    (state: IRootState) => state.appData.idToFilterUser
  );
  const navigate: NavigateFunction = useNavigate();

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
            <UserBar NavHandler={() => setActiveNav(!activeNav)} />
            <Navigation active={activeNav} />
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
                <UserPanel />
              </MainDiv2>
            }
          />
          <Route
            path={`/logged/userInfoPage/${idToFilterUser}`}
            element={
              <MainDiv2>
                <UserInfoPage />
              </MainDiv2>
            }
          />
          <Route
            path="/logged"
            element={
              <MainDiv2>
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
