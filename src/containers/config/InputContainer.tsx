import React, { useContext } from "react";
import styled from "styled-components";
import { ButtonComponent, InputComponent } from "../../components";
import { Members, Teams } from "../../contexts/MainContext";

const InputForm = styled.form`
  padding: 5px;

  box-sizing: border-box;
  div {
    display: flex;
    align-items: center;
  }
`;

const InputContainer = () => {
  const { members } = useContext(Members);
  const { teams, setTeams, setTeamCount } = useContext(Teams);

  const handleCountOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;

    if (value) {
      if (members.length >= Number(value)) {
        setTeamCount(Number(value));
      } else {
        alert("팀의 수가 멤버의 수를 초과하였습니다!");
        e.target.value = "";
      }
    } else {
      setTeamCount(0);
    }
  };

  const handleSubmitOnClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = (e.currentTarget[1] as HTMLInputElement).value;
    if (value) {
      if (teams.includes(value)) {
        alert("중복된 팀명이 존재합니다.");
      } else {
        setTeams([...teams, value]);
        (e.currentTarget[1] as HTMLInputElement).value = "";
      }
    }
  };

  return (
    <InputForm onSubmit={handleSubmitOnClick}>
      <InputComponent
        props={{
          type: "number",
          placeholder: "몇 개의 팀으로 나눠지나요?",
          max: String(members.length),
          fn: handleCountOnChange,
        }}
      />
      <div>
        <InputComponent props={{ placeholder: "팀명을 입력하세요." }} />
        <ButtonComponent props={{ name: "추가", type: "submit" }} />
      </div>
    </InputForm>
  );
};

export default InputContainer;
