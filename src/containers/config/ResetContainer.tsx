import { useResetRecoilState } from "recoil";

import { teamCountState, teamsState } from "@atoms/mainAtom";
import { ResetBackComponent } from "@components/common";

const ResetContainer = () => {
  const resetTeams = useResetRecoilState(teamsState);
  const resetTeamCount = useResetRecoilState(teamCountState);

  const handleResetOnClick = (e: React.MouseEvent) => {
    e.preventDefault();
    resetTeams();
    resetTeamCount();
  };
  return <ResetBackComponent props={{ name: "초기화", fn: handleResetOnClick }} />;
};

export default ResetContainer;
