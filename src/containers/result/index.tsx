import styled from "styled-components";
import { WrapperComponent } from "../../components";
import BackContainer from "./BackContainer";
import ListContainer from "./ListContainer";
import ResetContainer from "./ResetContainer";
import SaveContainer from "./SaveContainer";

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
  return (
    <WrapperComponent>
      <header>
        <h2>결과</h2>
        <BackContainer />
      </header>
      <div>
        <ResetContainer />
        <SaveContainer />
        <ListContainer />
      </div>
    </WrapperComponent>
  );
};

export default ResultContainer;
