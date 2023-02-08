import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { WrapperComponent } from "../../components";
import { Members, Results } from "../../contexts/MainContext";
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
  const { resetResults } = useContext(Results);

  const handleBackOnClick = (e: React.MouseEvent) => {
    e.preventDefault();
    resetResults();
    navigate("/");
  };

  useEffect(() => {
    if (members.length === 0) navigate("/");
  }, [members]);

  return (
    <WrapperComponent>
      <header>
        <h2>결과</h2>
        <span onClick={handleBackOnClick}>다시 설정하기</span>
      </header>
      <ListContainer />
    </WrapperComponent>
  );
};

export default ResultContainer;
