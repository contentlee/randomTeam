import { useContext } from "react";

import { ResetBackComponent } from "src/components/common";
import { Members } from "src/contexts/MainContext";

const ResetContainer = () => {
  const { resetMembers } = useContext(Members);

  const handleResetOnClick = (e: React.MouseEvent) => {
    e.preventDefault();
    resetMembers();
  };
  return <ResetBackComponent props={{ name: "초기화", fn: handleResetOnClick }} />;
};

export default ResetContainer;
