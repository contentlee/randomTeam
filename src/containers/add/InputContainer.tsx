import React from "react";
import styled from "styled-components";

import { ButtonComponent, InputComponent } from "@components/common";

import { addMember } from "@reducers/memberSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";

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
  const dispatch = useAppDispatch();
  const members = useAppSelector((state) => state.members);

  const handleInputOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = (e.currentTarget[0] as HTMLInputElement).value;
    if (members.includes(value)) {
      alert("해당 이름은 중복된 이름입니다!");
    } else {
      dispatch(addMember(value));
    }

    (e.currentTarget[0] as HTMLInputElement).value = "";
  };

  return (
    <InputForm onSubmit={handleInputOnSubmit}>
      <InputComponent props={{ placeholder: "팀원명을 입력해주세요." }} />
      <ButtonComponent props={{ name: "추가", type: "submit" }} />
    </InputForm>
  );
};

export default InputContainer;
