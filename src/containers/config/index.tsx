import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { WrapperComponent } from "../../components";
import { Members, Teams } from "../../contexts/MainContext";
import InputContainer from "./InputContainer";
import ListContainer from "./ListContainer";
import SubmitContainer from "./SubmitContainer";

const ConfigContainer = () => {
  const navigate = useNavigate();
  const { members } = useContext(Members);
  const { resetTeams } = useContext(Teams);

  const handleResetOnClick = (e: React.MouseEvent) => {
    e.preventDefault();
    resetTeams();
  };

  useEffect(() => {
    if (members.length === 0) navigate("/");
  }, [members]);

  return (
    <>
      <WrapperComponent>
        <h2>팀 옵션 설정</h2>
        <InputContainer />
      </WrapperComponent>
      <hr />
      <WrapperComponent>
        <header>
          <h2>추가된 팀</h2>
          <span onClick={handleResetOnClick}>초기화</span>
        </header>
        <ListContainer />
      </WrapperComponent>
      <hr />
      <SubmitContainer />
    </>
  );
};

export default ConfigContainer;
