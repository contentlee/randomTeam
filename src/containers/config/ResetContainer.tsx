import { ResetBackComponent } from "@components/common";

import { useAppDispatch } from "@store/hooks";
import { resetTeamAll } from "@reducers/teamSlice";

const ResetContainer = () => {
  const dispatch = useAppDispatch();

  const handleResetOnClick = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(resetTeamAll());
  };
  return <ResetBackComponent props={{ name: "초기화", fn: handleResetOnClick }} />;
};

export default ResetContainer;
