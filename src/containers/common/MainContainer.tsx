import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Members, Results } from "@contexts/MainContext";

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
  const navigate = useNavigate();
  const location = useLocation();

  const { members } = useContext(Members);
  const { results } = useContext(Results);

  useEffect(() => {
    const pathname = location.pathname;
    if (pathname !== "/add" && members.length === 0) {
      navigate("/add");
    }
    if (pathname === "/result" && results.length === 0) {
      navigate("/add");
    }
  }, []);

  return <Container>{children}</Container>;
};

export default MainContainer;
