import styled from "styled-components";

interface Props {
  props: { id: number; name: string; member?: string[] };
}

const Result = styled.div`
  margin: 5px;
  padding: 15px;
  width: 100%

  box-sizing: border-box;

  border: 1.2px solid #c4c4c4;
  border-radius: 10px;

  color: gray;

  cursor: default;

  word-break: normal;

  &:hover {
    box-shadow: 0 0 5px #c4c4c4;
    border: 1.2px solid gray;

    color: gray;
  }

  h3 {
    margin: 0 5px;
    color: #000;
  }

  span {
    display: inline-block;

    margin: 5px 7px;
  }
`;

const ResultComponent = ({ props: { id, name, member } }: Props) => {
  return (
    <Result>
      <h3>{name ? name : id}</h3>
      <div>
        {member?.map((memberName, i) => {
          return <span key={i}>{memberName}</span>;
        })}
      </div>
    </Result>
  );
};

export default ResultComponent;
