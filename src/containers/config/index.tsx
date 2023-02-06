import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { WrapperComponent } from "../../components";
import { Members } from "../../contexts/MainContext";
import InputContainer from "./InputContainer";
import ListContainer from "./ListContainer";
import SubmitContainer from "./SubmitContainer";

const ConfigContainer = () => {
  const navigate = useNavigate();
  const { members } = useContext(Members);

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
        <h2>추가된 팀</h2>
        <ListContainer />
      </WrapperComponent>
      <hr />
      <SubmitContainer />
    </>
  );
};

export default ConfigContainer;
