import { WrapperComponent } from "../../components";
import BackContainer from "./BackContainer";
import ListContainer from "./ListContainer";
import ResetContainer from "./ResetContainer";
import SaveContainer from "./SaveContainer";

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
