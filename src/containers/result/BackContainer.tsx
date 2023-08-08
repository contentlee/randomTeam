import { useNavigate } from "react-router-dom";
import { useResetRecoilState } from "recoil";

import ResetBackComponent from "@components/common/ResetBackComponent";
import { resultsState } from "@atoms/mainAtom";

const BackContainer = () => {
  const navigate = useNavigate();
  const resetResults = useResetRecoilState(resultsState);

  const handleBackOnClick = (e: React.MouseEvent) => {
    e.preventDefault();
    resetResults();
    navigate("/");
  };

  return <ResetBackComponent props={{ name: "다시 설정하기(결과값 초기화)", fn: handleBackOnClick }} />;
};

export default BackContainer;
