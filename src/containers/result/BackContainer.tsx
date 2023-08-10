import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ResetBackComponent } from "@components/common";
import { Results } from "@contexts/MainContext";

const BackContainer = () => {
  const navigate = useNavigate();
  const { resetResults } = useContext(Results);

  const handleBackOnClick = (e: React.MouseEvent) => {
    e.preventDefault();
    resetResults();
    navigate("/");
  };

  return <ResetBackComponent props={{ name: "다시 설정하기(결과값 초기화)", fn: handleBackOnClick }} />;
};

export default BackContainer;
