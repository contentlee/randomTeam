import { useNavigate } from "react-router-dom";

import { ButtonComponent } from "@components/common";

import { useAppDispatch } from "@store/hooks";
import { resetMember } from "@reducers/memberSlice";
import { resetTeamAll } from "@reducers/teamSlice";
import { resetResults } from "@reducers/resultSlice";

const ResetContainer = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleResetOnClick = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(resetMember());
    dispatch(resetTeamAll());
    dispatch(resetResults());

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
