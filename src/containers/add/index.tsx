import { useContext } from "react";
import { WrapperComponent } from "../../components";
import { Members } from "../../contexts/MainContext";
import InputContainer from "./InputContainer";
import ListContainer from "./ListContainer";
import SubmitContainer from "./SubmitContainer";
import UploadFileContainer from "./UploadFileContainer";

const AddMembersContainer = () => {
  const { members, resetMembers } = useContext(Members);

  const handleResetOnClick = (e: React.MouseEvent) => {
    e.preventDefault();
    resetMembers();
  };

  const handleSaveOnClick = () => {};
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
          <span onClick={handleResetOnClick}>초기화</span>
          <span>멤버 저장</span>
        </header>
        <ListContainer />
      </WrapperComponent>
      <hr />
      <SubmitContainer />
    </>
  );
};

export default AddMembersContainer;
