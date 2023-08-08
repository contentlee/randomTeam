import { useNavigate } from "react-router-dom";
import { useResetRecoilState } from "recoil";

import { ButtonComponent } from "@components/common";
import { membersState, teamsState, resultsState, teamCountState } from "@atoms/mainAtom";

const ResetContainer = () => {
  const navigate = useNavigate();

  const resetMembers = useResetRecoilState(membersState);
  const resetTeams = useResetRecoilState(teamsState);
  const resetTeamCount = useResetRecoilState(teamCountState);
  const resetResults = useResetRecoilState(resultsState);

  const handleResetOnClick = (e: React.MouseEvent) => {
    e.preventDefault();
    resetMembers();
    resetTeams();
    resetTeamCount();
    resetResults();

    navigate("/");
  };
  return (
    <ButtonComponent
      props={{ name: "전체 초기화", fn: handleResetOnClick }}
      style={{ width: "-webkit-fill-available", backgroundColor: "red" }}
    />
  );
};

export default ResetContainer;
