import React from "react";
import styled from "styled-components";

interface Props {
  props: {
    name: string;
    type?: "submit" | "button";
    fn?: (e: React.MouseEvent) => void;
    disabled?: boolean;
  };
  style?: {
    width?: string;
    backgroundColor?: string;
  };
}

const Button = styled.button`
  margin: 0 5px;
  width: ${(props) => (props.style?.width ? props.style.width : "100px")};
  height: 40px;

  border: none;
  border-radius: 10px;

  background-color: ${(props) => (props.style?.backgroundColor ? props.style?.backgroundColor : "blue")};

  color: #fff;
  font-size: 14px;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 12px gray;
    filter: grayscale(40%);
  }
`;

const ButtonComponent = ({ props: { name, type = "button", fn = () => {} }, style }: Props) => {
  return (
    <Button type={type} onClick={fn} style={style}>
      {name}
    </Button>
  );
};

export default ButtonComponent;
