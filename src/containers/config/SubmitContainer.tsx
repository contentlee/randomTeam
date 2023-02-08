import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonComponent } from "../../components";
import { Members, Results, Teams } from "../../contexts/MainContext";
import { divideMember } from "../../lib";

const SubmitContainer = () => {
  const navigate = useNavigate();
  const { teamCount } = useContext(Teams);
  const { members } = useContext(Members);
  const { results, setResults } = useContext(Results);

  const handleSubmitOnClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (teamCount) {
      const temp = await divideMember(members, teamCount, results);

      setResults(temp);
      navigate("/result");
    } else {
      alert("팀수를 입력하세요!");
    }
  };
  return (
    <ButtonComponent
      props={{ name: "다음", fn: handleSubmitOnClick }}
      style={{ width: "100%", backgroundColor: "red" }}
    />
  );
};

export default SubmitContainer;
