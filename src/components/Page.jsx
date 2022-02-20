import React from "react";
import styled from "@emotion/styled";
import colors from "../styles/colors";

const Page = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Page;

const Container = styled.div`
  min-height: 100vh;
  background-color: ${colors.grape0};
  padding: 12px 24px;
  margin: -1px auto 0 auto;
`;
