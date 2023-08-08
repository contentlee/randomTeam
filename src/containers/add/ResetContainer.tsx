import { useResetRecoilState } from "recoil";

import { ResetBackComponent } from "@components/common";
import { membersState } from "@atoms/mainAtom";

const ResetContainer = () => {
  const resetMembers = useResetRecoilState(membersState);

  const handleResetOnClick = (e: React.MouseEvent) => {
    e.preventDefault();
    resetMembers();
  };
  return <ResetBackComponent props={{ name: "초기화", fn: handleResetOnClick }} />;
};

export default ResetContainer;
