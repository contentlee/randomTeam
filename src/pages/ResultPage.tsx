import { WrapperComponent } from "@components/common";
import { MainContainer } from "@containers/common";
import { BackContainer, ListContainer, ResetContainer, SaveContainer } from "@containers/result";

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
