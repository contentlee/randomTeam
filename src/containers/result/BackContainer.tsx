import { useNavigate } from "react-router-dom";

import ResetBackComponent from "@components/common/ResetBackComponent";

import { useAppDispatch } from "@store/hooks";
import { resetResults } from "@reducers/resultSlice";

const BackContainer = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleBackOnClick = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(resetResults());
    navigate("/");
  };

  return <ResetBackComponent props={{ name: "다시 설정하기(결과값 초기화)", fn: handleBackOnClick }} />;
};

export default BackContainer;
