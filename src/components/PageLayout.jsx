import React from "react";
import styled from "@emotion/styled";
import GlobalStyles from "../styles/GlobalStyles";
import { Global } from "@emotion/react";
import Navigation from "./Navigation";

function PageLayout({ children }) {
  return (
    <PageWrapper>
      <Navigation />
      {children}

      <Global styles={GlobalStyles} />
      <Footer>This is footer</Footer>
    </PageWrapper>
  );
}

export default PageLayout;

const PageWrapper = styled.div`
  margin-top: 80px;
`;

const Footer = styled.footer`
  height: 20vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.4);
  color: white;
`;
