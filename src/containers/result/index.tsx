import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { WrapperComponent } from "../../components";
import { Members } from "../../contexts/MainContext";
import ListContainer from "./ListContainer";

const Back = styled.a`
  display: block;
  margin: 12px;

  color: #c4c4c4;
  cursor: pointer;

  font-weigth: 300;
  font-size: 14px;

  &:hover {
    color: #000;
  }
`;

const ResultContainer = () => {
  const navigate = useNavigate();
  const { members } = useContext(Members);

  const handleBackOnClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/");
  };

  useEffect(() => {
    if (members.length === 0) navigate("/");
  }, [members]);

  return (
    <WrapperComponent>
      <h2>결과</h2>
      <Back onClick={handleBackOnClick}>처음으로 돌아가기</Back>
      <ListContainer />
    </WrapperComponent>
  );
};

export default ResultContainer;
