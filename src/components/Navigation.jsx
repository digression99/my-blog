import React from "react";
import { Link } from "gatsby";

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/blog">Blog</Link>
    </nav>
  );
};

export default Navigation;
