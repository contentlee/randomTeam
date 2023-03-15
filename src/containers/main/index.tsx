import { Outlet } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 20px;
  box-sizing: border-box;

  max-width: 480px;
`;
const MainContainer = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default MainContainer;
