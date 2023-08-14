import { ResetBackComponent } from "@components/common";

import { useAppDispatch } from "@store/hooks";
import { resetMember } from "@reducers/memberSlice";

const ResetContainer = () => {
  const dispatch = useAppDispatch();

  const handleResetOnClick = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(resetMember());
  };
  return <ResetBackComponent props={{ name: "초기화", fn: handleResetOnClick }} />;
};

export default ResetContainer;
