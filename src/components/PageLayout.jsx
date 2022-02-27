import React from "react";
import styled from "@emotion/styled";
import GlobalStyles from "../styles/GlobalStyles";
import { Global } from "@emotion/react";

const Navigation = () => {
  return (
    <NavigationWrapper>
      <h5>Daniel Kim</h5>

      <NavItemList>
        <li>Heading1</li>
        <li>Heading2</li>
        <li>Heading3</li>
      </NavItemList>
    </NavigationWrapper>
  );
};

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

const PageWrapper = styled.div``;

const NavigationWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 80px;
  padding: 0 5%;

  position: fixed;
  top: 0;
  left: 0;

  background: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  z-index: 1;
`;

const NavItemList = styled.ul`
  list-style: none;
  display: flex;

  > * + * {
    margin-left: 48px;
  }
`;

const Footer = styled.footer`
  height: 20vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.4);
  color: white;
`;
