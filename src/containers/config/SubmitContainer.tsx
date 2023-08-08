import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";

import { ButtonComponent } from "@components/common";
import { divideMember } from "@utils/divideMember";
import { membersState, teamCountState, resultsState } from "@atoms/mainAtom";

const SubmitContainer = () => {
  const navigate = useNavigate();

  const teamCount = useRecoilValue(teamCountState);
  const members = useRecoilValue(membersState);

  const [results, setResults] = useRecoilState(resultsState);

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
