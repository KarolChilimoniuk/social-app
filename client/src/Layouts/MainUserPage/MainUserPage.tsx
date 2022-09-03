import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { tokenChecking, logoutUser } from "../../services/api/auth";
import { IRootState } from "../../services/interfaces/interfaces";

const MainUserPage = () => {
  const dispatch = useDispatch();
  const stateData = useSelector((state: IRootState) => state.userData);
  const navigate = useNavigate();

  return (
    <section>
      <button
        onClick={() => {
          logoutUser(dispatch, navigate);
          console.log(stateData);
        }}
      >
        logout
      </button>
      <p>User logged</p>
    </section>
  );
};

export default MainUserPage;
