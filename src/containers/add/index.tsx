import { WrapperComponent } from "../../components";
import InputContainer from "./InputContainer";
import ListContainer from "./ListContainer";
import ResetContainer from "./ResetContainer";
import SubmitContainer from "./SubmitContainer";
import UploadFileContainer from "./UploadFileContainer";

const AddMembersContainer = () => {
  return (
    <>
      <WrapperComponent>
        <header>
          <h2>파일 업로드</h2>
        </header>
        <UploadFileContainer />
      </WrapperComponent>
      <WrapperComponent>
        <h2>팀원추가</h2>
        <InputContainer />
      </WrapperComponent>
      <hr />
      <WrapperComponent>
        <header>
          <h2>추가된 팀원</h2>
          <ResetContainer />
        </header>
        <ListContainer />
      </WrapperComponent>
      <hr />
      <SubmitContainer />
    </>
  );
};

export default AddMembersContainer;
