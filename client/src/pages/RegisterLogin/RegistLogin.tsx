import { useState } from "react";
import UserForm from "../../components/UserForm/UserForm";
import LoadingIcon from "../../components/LoadingIcon/LoadingIcon";
import { FormsContainer } from "./RegistLogin.style";

const RegistLogin = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <FormsContainer>
      {loading ? <LoadingIcon /> : null}
      <UserForm loadingHandler={setLoading} />
    </FormsContainer>
  );
};

export default RegistLogin;
