import React from "react";
import Navigation from "./Navigation";

const PageLayout = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};

export default PageLayout;
