import { WrapperComponent } from "../../components";
import InputContainer from "./InputContainer";
import ListContainer from "./ListContainer";
import SubmitContainer from "./SubmitContainer";

const AddMembersContainer = () => {
  return (
    <>
      <WrapperComponent>
        <h2>팀원추가</h2>
        <InputContainer />
      </WrapperComponent>
      <hr />
      <WrapperComponent>
        <h2>추가된 팀원</h2>
        <ListContainer />
      </WrapperComponent>
      <hr />
      <SubmitContainer />
    </>
  );
};

export default AddMembersContainer;
