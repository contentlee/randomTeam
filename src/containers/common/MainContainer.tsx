import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

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
const MainContainer = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default MainContainer;
