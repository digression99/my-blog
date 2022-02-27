import React from "react";
import { css } from "@emotion/react";

const GlobalStyles = css`
  html {
    font-size: 100%;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  p {
    margin-bottom: 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 3rem 0 1.38rem;
    font-weight: 400;
    line-height: 1.3;
  }

  h1 {
    margin-top: 0;
    font-size: 7.594rem;
  }

  h2 {
    font-size: 5.063rem;
  }

  h3 {
    font-size: 3.375rem;
  }

  h4 {
    font-size: 2.25rem;
  }

  h5 {
    font-size: 1.5rem;
  }

  small,
  .text_small {
    font-size: 0.667rem;
  }
`;

export default GlobalStyles;