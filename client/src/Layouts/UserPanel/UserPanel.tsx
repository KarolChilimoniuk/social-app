import { useState } from "react";
import { IFormData } from "../../services/interfaces/interfaces";
import TextFormInput from "../../components/TextFormInput/TextFormInput";
import BirthDateInput from "../../components/BirthDateInput/BirthDate";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import FileInput from "../../components/FileInput/FileInput";
import SubInput from "../../components/SubmitInput/SubmitInput";
import { FormContainer, Form, FormHeader } from "./UserPanel.style";

const UserPanel = (): JSX.Element => {
  const [formData, newFormData] = useState<IFormData>({
    userName: "",
    firstName: "",
    lastName: "",
    password: "",
    repeatedPassword: "",
    birthDate: "",
    email: "",
    userPic: "",
  });
  return (
    <FormContainer>
      <Form>
        <FormHeader>Edit profile</FormHeader>
        <TextFormInput
          type={"text"}
          placeholder={"New first name"}
          name={"firstName"}
          value={formData.firstName}
        />
        <TextFormInput
          type={"text"}
          placeholder={"New last name"}
          name={"lastName"}
          value={formData.lastName}
        />
        <TextFormInput
          type={"text"}
          placeholder={"New user name"}
          name={"userName"}
          value={formData.userName}
        />
        <TextFormInput
          type={"email"}
          placeholder={"New e-mail"}
          name={"email"}
          value={formData.email}
        />
        <PasswordInput
          placeholder={"New password"}
          name={"password"}
          value={formData.password}
        />
        <PasswordInput
          placeholder={"Repeat new password"}
          name={"repeatedPassword"}
          value={formData.repeatedPassword}
        />
        <BirthDateInput />
        <FileInput
          name={"userPic"}
          accept={".jpg, .jpeg, .png"}
          value={formData.userPic}
        />
        {/* <input type="file" name="userPic" accept=".jpg, .jpeg, .png"></input> */}
        <SubInput value={"Edit user data"} />
      </Form>
    </FormContainer>
  );
};

export default UserPanel;
