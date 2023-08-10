import { useContext } from "react";

import { ResetBackComponent } from "@components/common";
import { Teams } from "@contexts/MainContext";

const ResetContainer = () => {
  const { resetTeams } = useContext(Teams);

  const handleResetOnClick = (e: React.MouseEvent) => {
    e.preventDefault();
    resetTeams();
  };
  return <ResetBackComponent props={{ name: "초기화", fn: handleResetOnClick }} />;
};

export default ResetContainer;
