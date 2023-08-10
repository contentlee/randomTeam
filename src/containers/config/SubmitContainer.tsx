import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { ButtonComponent } from "@components/common";
import { divideMember } from "@utils/divideMember";
import { Members, Results, Teams } from "@contexts/MainContext";

const SubmitContainer = () => {
  const navigate = useNavigate();
  const { teamCount } = useContext(Teams);
  const { members } = useContext(Members);
  const { results, setResults } = useContext(Results);

  const handleSubmitOnClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (teamCount) {
      const temp = divideMember(members, teamCount, results);

      setResults(temp);
      navigate("/result");
    } else {
      alert("팀수를 입력하세요!");
    }
  };
  return (
    <ButtonComponent
      props={{ name: "다음", fn: handleSubmitOnClick }}
      style={{ width: "-webkit-fill-available", backgroundColor: "red" }}
    />
  );
};

export default SubmitContainer;
