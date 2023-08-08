import { WrapperComponent } from "src/components/common";
import { MainContainer } from "src/containers/common";
import { BackContainer, ListContainer, ResetContainer, SaveContainer } from "src/containers/result";

const ResultPage = () => {
  return (
    <MainContainer>
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
    </MainContainer>
  );
};

export default ResultPage;
