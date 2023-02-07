import { useContext } from "react";
import { WrapperComponent } from "../../components";
import { Members } from "../../contexts/MainContext";
import InputContainer from "./InputContainer";
import ListContainer from "./ListContainer";
import SubmitContainer from "./SubmitContainer";

const AddMembersContainer = () => {
  const { resetMembers } = useContext(Members);

  const handleResetOnClick = (e: React.MouseEvent) => {
    e.preventDefault();
    resetMembers();
  };
  return (
    <>
      <WrapperComponent>
        <h2>팀원추가</h2>
        <InputContainer />
      </WrapperComponent>
      <hr />
      <WrapperComponent>
        <header>
          <h2>추가된 팀원</h2>
          <span onClick={handleResetOnClick}>초기화</span>
        </header>
        <ListContainer />
      </WrapperComponent>
      <hr />
      <SubmitContainer />
    </>
  );
};

export default AddMembersContainer;
