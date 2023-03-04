import { UserHeaderProps } from "../../types/types";
import { useDispatch } from "react-redux";
import { setIdToFilterUser } from "../../actions/appDataAction";
import { Header, Link } from "./UserHeader.style";
import styles from "./UserHeader.module.scss";

const UserHeader = ({
  name,
  lastName,
  userId,
}: UserHeaderProps): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <Link
      to={`/logged/userInfo`}
      className={styles.UserHeaderLink}
      onClick={() => dispatch(setIdToFilterUser(userId))}
    >
      <Header>
        {name} {lastName}
      </Header>
    </Link>
  );
};

export default UserHeader;
