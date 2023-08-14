import React from "react";
import styled from "styled-components";

import { ButtonComponent, InputComponent } from "@components/common";

import { useAppDispatch, useAppSelector } from "@store/hooks";
import { addTeam, changeTeamCount, resetTeamCount } from "@reducers/teamSlice";

const InputForm = styled.form`
  width: 100%;
  padding: 5px;
  box-sizing: border-box;

  div {
    display: flex;
    align-items: center;
    @media only screen and (max-width: 320px) {
      flex-direction: column;

      button {
        width: -webkit-fill-available;
      }
    }
  }
`;

const InputContainer = () => {
  const dispatch = useAppDispatch();

  const { members, teams, teamCount, results } = useAppSelector(({ members, teams, results }) => ({
    members,
    teams: teams.list,
    teamCount: teams.count,
    results,
  }));

  const handleCountOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;

    if (value) {
      if (results.length && results.length > Number(value)) {
        alert("결과값으로 설정된 팀의 수보다 적습니다!");
        e.target.value = String(results.length);
      } else if (members.length >= Number(value)) {
        dispatch(changeTeamCount(Number(value)));
      } else {
        alert("팀의 수가 멤버의 수를 초과하였습니다!");
        e.target.value = "";
      }
    } else {
      dispatch(resetTeamCount());
    }
  };

  const handleSubmitOnClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = (e.currentTarget[1] as HTMLInputElement).value;
    if (value) {
      if (teams.includes(value)) {
        alert("중복된 팀명이 존재합니다.");
      } else if (teams.length >= teamCount) {
        alert("팀명의 개수가 입력된 팀 개수를 초과했습니다.");
      } else if (members.length <= teams.length) {
        alert("멤버의 수가 팀 수보다 많습니다.");
      } else {
        dispatch(addTeam(value));
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
          value: teamCount,
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
