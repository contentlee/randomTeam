import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonComponent } from "src/components/common";
import { Members } from "src/contexts/MainContext";

const SubmitContainer = () => {
  const navigate = useNavigate();
  const { members } = useContext(Members);

  const handleSubmitOnClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (members.length) {
      navigate("/config");
    } else {
      alert("멤버를 추가하세요!");
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
