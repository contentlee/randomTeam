import React, { useContext } from "react";
import styled from "styled-components";
import { ButtonComponent, InputComponent } from "../../components";
import { Members } from "../../contexts/MainContext";

const InputForm = styled.form`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 320px) {
    flex-direction: column;

    button {
      width: -webkit-fill-available;
    }
  }
`;

const InputContainer = () => {
  const { members, setMembers } = useContext(Members);

  const handleInputOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = (e.currentTarget[0] as HTMLInputElement).value;

    if (value) {
      setMembers([...members, value]);
      (e.currentTarget[0] as HTMLInputElement).value = "";
    }
  };

  return (
    <InputForm onSubmit={handleInputOnSubmit}>
      <InputComponent props={{ placeholder: "팀원명을 입력해주세요." }} />
      <ButtonComponent props={{ name: "추가", type: "submit" }} />
    </InputForm>
  );
};

export default InputContainer;
