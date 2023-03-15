import styled from "styled-components";

interface Props {
  props: {
    name: string;
    fn: (e: React.MouseEvent) => void;
  };
}

const Span = styled.span`
  margin-left: 10px;

  color: #c4c4c4;
  font-weight: 100;
  font-size: 14px;

  &:hover {
    cursor: pointer;
    color: #000;
    font-weight: 300;
  }
`;

const ResetBackComponent = ({ props: { name, fn } }: Props) => {
  return <Span onClick={fn}>{name}</Span>;
};

export default ResetBackComponent;
