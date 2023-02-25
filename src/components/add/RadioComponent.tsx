import styled from "styled-components";

interface Props {
  props: {
    mode: string;
    name: string;
    value: string;
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

const RadioComponent = ({ props: { mode, name, value, label, fn } }: Props) => {
  return (
    <RadioLabel>
      <input defaultChecked={mode === value} type="radio" name={name} id={value} onChange={fn} />
      <label htmlFor={value}>{label}</label>
    </RadioLabel>
  );
};

export default RadioComponent;
