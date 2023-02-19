import { UserHeaderProps } from "../../types/types";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { setIdToFilterUser } from "../../actions/appDataAction";
import { UserMainInfoHeader } from "./UserHeader.style";
import styles from "./UserHeader.module.scss";

const UserHeader = ({
  name,
  lastName,
  userId,
}: UserHeaderProps): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <NavLink
      to={`/logged/userInfo`}
      className={styles.UserHeaderLink}
      onClick={() => dispatch(setIdToFilterUser(userId))}
    >
      <UserMainInfoHeader>
        {name} {lastName}
      </UserMainInfoHeader>
    </NavLink>
  );
};

export default UserHeader;
