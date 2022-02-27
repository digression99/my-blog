import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import GlobalStyles from "../styles/GlobalStyles";
import Helmet from "react-helmet";
import { Global } from "@emotion/react";
import Navigation from "./Navigation";
import { withPrefix } from "gatsby";

interface Props {
  children: ReactNode;
}

function PageLayout({ children }: Props) {
  return (
    <PageWrapper>
      <Helmet>
        <script
          src={withPrefix("twitter-widgets.js")}
          async
          type="text/javascript"
        />
      </Helmet>
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
