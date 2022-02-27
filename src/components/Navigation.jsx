import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

function Navigation() {
  return (
    <NavigationWrapper>
      <Link to="/">
        <strong>Daniel Kim</strong>
      </Link>

      <NavItemList>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
      </NavItemList>
    </NavigationWrapper>
  );
}

export default Navigation;

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
