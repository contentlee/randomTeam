import { useNavigate } from "react-router-dom";
import { ResetBackComponent } from "src/components/common";

const BackContainer = () => {
  const navigate = useNavigate();
  const handleBackOnClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/");
  };

  return <ResetBackComponent props={{ name: "이전으로 돌아가기", fn: handleBackOnClick }} />;
};

export default BackContainer;
