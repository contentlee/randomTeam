import { WrapperComponent } from "../../components";
import BackContainer from "./BackContainer";
import InputContainer from "./InputContainer";
import ListContainer from "./ListContainer";
import ResetContainer from "./ResetContainer";
import SubmitContainer from "./SubmitContainer";

const ConfigContainer = () => {
  return (
    <>
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
    </>
  );
};

export default ConfigContainer;
