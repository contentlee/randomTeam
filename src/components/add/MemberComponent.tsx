import React from "react";
import styled from "styled-components";

interface Props {
  props: { id: number; name: string; delete_fn?: (e: React.MouseEvent, id: number) => void };
}

const Member = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;

  margin: 5px;
  padding: 5px 15px;
  min-height: 24px;

  border-radius: 50px;

  background-color: #c4c4c4;

  cursor: default;

  &:hover {
    box-shadow: 0 0 5px #c4c4c4;
  }

  img {
    position: relative;
    top: 1.4px;
    height: 20px;
    margin-left: 5px;

    &:hover {
      cursor: pointer;
      filter: contrast(40%);
    }
  }
`;

const MemberComponent = ({ props: { id, name, delete_fn } }: Props) => {
  return (
    <Member>
      <span>{name}</span>
      {delete_fn ? <img src={"assets/delete.png"} alt="delete" onClick={(e) => delete_fn(e, id)} /> : <></>}
    </Member>
  );
};

export default MemberComponent;
