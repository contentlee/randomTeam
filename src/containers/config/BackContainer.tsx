import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import ResetBackComponent from "src/components/common/ResetBackComponent";
import { Members } from "src/contexts/MainContext";

const BackContainer = () => {
  const { members } = useContext(Members);
  const navigate = useNavigate();
  const handleBackOnClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/");
  };

  if (!members.length) return <Navigate to={"/"} />;

  return <ResetBackComponent props={{ name: "이전으로 돌아가기", fn: handleBackOnClick }} />;
};

export default BackContainer;
