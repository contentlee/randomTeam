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
`;

const WrapperComponent = ({ children }: React.PropsWithChildren) => {
  return <Wrapper>{children}</Wrapper>;
};
export default WrapperComponent;
