import { Outlet } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 480px;
  padding: 20px;
`;
const MainContainer = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default MainContainer;
