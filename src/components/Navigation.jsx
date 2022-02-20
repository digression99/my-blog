import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Navigation = () => {
  return (
    <Container>
      <div>
        <Link to="/">Daniel Kim</Link>
      </div>

      <div
        css={css`
          * + * {
            margin-left: 14px;
          }
        `}
      >
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </Container>
  );
};

export default Navigation;

const Container = styled.nav`
  height: 80px;
  background: gray;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 24px;
`;
