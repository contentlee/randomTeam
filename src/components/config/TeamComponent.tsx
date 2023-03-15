import styled from "styled-components";

interface Props {
  props: { id: number; name: string; member?: string[]; delete_fn?: (id: number) => void };
}

const Team = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 5px;
  padding: 5px 15px;
  min-height: 32px;

  border: 1.2px solid #c4c4c4;
  border-radius: 10px;

  color: #c4c4c4;

  cursor: default;

  &:hover {
    box-shadow: 0 0 12px #c4c4c4;
    border: 1.2px solid gray;

    color: gray;
  }

  img {
    position: relative;
    top: 1.4px;
    height: 20px;
    margin-left: 5px;

    filter: contrast(5%);

    &:hover {
      cursor: pointer;

      filter: contrast(80%);
    }
  }
`;

const TeamComponent = ({ props: { id, name, member, delete_fn } }: Props) => {
  return (
    <Team>
      <span>{name}</span>

      {delete_fn && (
        <img
          src={"assets/delete.png"}
          alt="delete"
          onClick={(e) => {
            e.preventDefault();
            delete_fn(id);
          }}
        />
      )}

      {}
    </Team>
  );
};

export default TeamComponent;
