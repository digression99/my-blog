import React from "react";
import "normalize.css";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";
import Navigation from "./Navigation";

const PageLayout = ({ children }) => {
  return (
    <Wrapper>
      <Container>
        <Navigation />
        {children}
      </Container>

      <Global
        styles={css`
          html,
          body {
            height: 100%;
            box-sizing: border-box;
          }
        `}
      />
    </Wrapper>
  );
};

export default PageLayout;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.main`
  min-width: 320px;
  max-width: 768px;
  width: 100%;
`;
