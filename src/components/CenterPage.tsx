import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import breakpoints from "../styles/breakpoints";

interface Props {
  children: ReactNode;
}

function CenterPage({ children }: Props) {
  return (
    <Container>
      <Main>{children}</Main>
    </Container>
  );
}

export default CenterPage;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Main = styled.main`
  min-width: ${breakpoints.mobile}px;
  max-width: ${breakpoints.tablet}px;
`;
