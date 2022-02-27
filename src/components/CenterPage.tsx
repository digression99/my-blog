import React from "react";
import styled from "@emotion/styled";
import breakpoints from "../styles/breakpoints";

function CenterPage({ children }) {
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
  min-width: ${breakpoints.mobile};
  max-width: ${breakpoints.tablet};
`;
