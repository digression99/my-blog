import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Link, navigate } from "gatsby";
import styled from "@emotion/styled";
import useWindowSize from "../hooks/useWindowSize";
import breakpoints from "../styles/breakpoints";

function NavOverlay({ opened, onNavigate }) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) return;
    containerRef.current = document.getElementById(
      "modal-root"
    ) as HTMLDivElement;

    return () => {
      containerRef.current = null;
    };
  }, []);

  if (!containerRef.current) return null;

  return ReactDOM.createPortal(
    <NavOverlayWrapper opened={opened}>
      <ul>
        <li>
          <button onClick={() => onNavigate("/about")}>About</button>
        </li>

        <li>
          <button onClick={() => onNavigate("/blog")}>Blog</button>
        </li>

        <li>
          <button onClick={() => onNavigate("/portfolio")}>Portfolio</button>
        </li>
      </ul>
    </NavOverlayWrapper>,
    containerRef.current
  );
}

function Navigation() {
  const windowSize = useWindowSize();
  const [opened, setOpened] = useState(false);

  const handleToggle = () => setOpened((b) => !b);
  const isMobile = windowSize.width < breakpoints.tablet;

  const handleNavigation = (path: string) => {
    // use animation instead of setTimeout
    // to trigger smooth transition
    setTimeout(() => {
      navigate(path);
      handleToggle();
    }, 100);
  };

  return (
    <>
      <NavigationWrapper>
        <Link to="/">
          <strong>Daniel Kim</strong>
        </Link>

        {isMobile && (
          <HamburgerButton opened={opened} onClick={handleToggle}>
            Hamburger
          </HamburgerButton>
        )}

        {!isMobile && (
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
        )}
      </NavigationWrapper>

      <NavOverlay opened={opened} onNavigate={handleNavigation} />
    </>
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

const NavOverlayWrapper = styled.div<{ opened: boolean }>`
  position: fixed;
  width: 100vw;
  height: 100vh;

  top: 0;
  left: 0;

  background: white;
  display: ${({ opened }) => (opened ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;

const HamburgerButton = styled.button<{ opened: boolean }>`
  background: ${({ opened }) => (opened ? "red" : "default")};
`;
