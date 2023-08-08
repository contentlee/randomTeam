import { useEffect, useState } from "react";
import styled from "styled-components";

interface Props {
  mode: number;
  props: {
    name: string;
    value: number;
    label: string;
    fn: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
}

const RadioLabel = styled.div`
  display: flex;
  align-items: center;

  color: #c4c4c4;
  font-size: 14px;
  font-weight: 300;

  input {
    display: none;
  }

  label {
    margin: 10px;
    &:hover {
      cursor: pointer;
      color: gray;
    }
  }

  input[type="radio"]:checked + label {
    color: gray;
    font-weight: 400;
  }
`;

const RadioComponent = ({ mode, props: { name, value, label, fn } }: Props) => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(mode === value);
  }, [mode, value]);

  return (
    <RadioLabel>
      <input checked={checked} type="radio" name={name} id={String(value)} onChange={fn} />
      <label htmlFor={String(value)}>{label}</label>
    </RadioLabel>
  );
};

export default RadioComponent;
