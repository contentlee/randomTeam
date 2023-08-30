import React from "react";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "@store/hooks";
import { ButtonComponent } from "@components/common";

const SubmitContainer = () => {
  const navigate = useNavigate();
  const members = useAppSelector((state) => state.members);

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
