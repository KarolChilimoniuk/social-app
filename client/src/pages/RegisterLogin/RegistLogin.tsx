import UserForm from "../../components/UserForm/UserForm";
import { FormsContainer } from "./RegistLogin.style";

const RegistLogin = (): JSX.Element => {
  return (
    <FormsContainer>
      <UserForm />
    </FormsContainer>
  );
};

export default RegistLogin;
