import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ResetBackComponent from "src/components/common/ResetBackComponent";
import { Results } from "src/contexts/MainContext";

const BackContainer = () => {
  const navigate = useNavigate();
  const { results, resetResults } = useContext(Results);

  const handleBackOnClick = (e: React.MouseEvent) => {
    e.preventDefault();
    resetResults();
    navigate("/");
  };

  useEffect(() => {
    if (!results.length) {
      navigate("/");
    }
  }, [results, navigate]);
  return <ResetBackComponent props={{ name: "다시 설정하기(결과값 초기화)", fn: handleBackOnClick }} />;
};

export default BackContainer;
