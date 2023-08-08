import { WrapperComponent } from "@components/common";
import { MainContainer } from "@containers/common";
import { BackContainer, InputContainer, ListContainer, ResetContainer, SubmitContainer } from "@containers/config";

const ConfigPage = () => {
  return (
    <MainContainer>
      <WrapperComponent>
        <header>
          <h2>팀 옵션 설정</h2>
          <BackContainer />
        </header>
        <InputContainer />
      </WrapperComponent>
      <hr />
      <WrapperComponent>
        <header>
          <h2>추가된 팀</h2>
          <ResetContainer />
        </header>
        <ListContainer />
      </WrapperComponent>
      <hr />
      <SubmitContainer />
    </MainContainer>
  );
};

export default ConfigPage;
