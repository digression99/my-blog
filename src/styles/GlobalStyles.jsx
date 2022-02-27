import React from "react";
import "normalize.css";
import { css } from "@emotion/react";
import breakpoints from "./breakpoints";

const GlobalStyles = css`
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
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    line-height: 1.3;
  }

  h1 {
    margin-top: 0;
    font-size: 5.653rem;
  }

  h2 {
    font-size: 3.998rem;
  }

  h3 {
    font-size: 2.827rem;
  }

  h4 {
    font-size: 1.999rem;
  }

  h5 {
    font-size: 1.414rem;
  }

  small,
  .text_small {
    font-size: 0.707rem;
  }

  @media only screen and (max-width: ${breakpoints.tablet}px) {
    html {
      font-size: 80%;
    }
  }
`;

export default GlobalStyles;
