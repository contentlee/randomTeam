import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonComponent } from "src/components";
import { Results } from "src/contexts/MainContext";

const ResetContainer = () => {
  const navigate = useNavigate();

  const { resetAll } = useContext(Results);

  const handleResetOnClick = (e: React.MouseEvent) => {
    e.preventDefault();
    resetAll();
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
