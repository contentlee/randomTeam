import React from "react";
import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  max-height: 80vh;

  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  header {
    display: flex;
    align-items: baseline;

    margin: 20px 0;

    h2 {
      margin: 0;
    }

    span {
      margin-left: 10px;

      color: #c4c4c4;
      font-weight: 100;
      font-size: 14px;

      &:hover {
        cursor: pointer;
        color: #000;
        font-weight: 300;
      }
    }
  }

  h2 {
    margin: 20px 0;
  }
`;

const WrapperComponent = ({ children }: React.PropsWithChildren) => {
  return <Wrapper>{children}</Wrapper>;
};
export default WrapperComponent;
