import React from "react";
import styled from "styled-components";

interface Props {
  props: {
    type?: "number" | "text" | "file";
    placeholder?: string;
    fn?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    max?: string;

    defaultValue?: string | number;
  };
}

const Input = styled.input`
  margin: 5px;
  padding: 12px;
  width: -webkit-fill-available;

  border: 1px solid #c4c4c4;
  border-radius: 10px;

  color: #000;
  font-weight: 300;

  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;

  &:focus {
    outline: none;

    box-shadow: 0 0 5px gray;
  }
`;

const InputComponent = ({
  props: { type = "text", placeholder = "입력해주세요", max = "100", fn = () => {}, defaultValue },
}: Props) => {
  return <Input type={type} placeholder={placeholder} onChange={fn} min="0" max={max} defaultValue={defaultValue} />;
};

export default InputComponent;
