import { useNavigate } from "react-router-dom";

import { ButtonComponent } from "@components/common";

import { divideMember } from "@utils/divideMember";

import { useAppDispatch, useAppSelector } from "@store/hooks";
import { setResults } from "@reducers/resultSlice";

const SubmitContainer = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { members, teamCount, results } = useAppSelector(({ members, teams, results }) => ({
    members,
    teamCount: teams.count,
    results,
  }));

  const handleSubmitOnClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (teamCount) {
      const temp = divideMember(members, teamCount, results);
      dispatch(setResults(temp));
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
