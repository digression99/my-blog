import React from "react";
import styled from "@emotion/styled";

const Page = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Page;

const Container = styled.div`
  padding: 0 24px;
`;
