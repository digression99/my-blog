import React from "react";
import Page from "../components/Page";
import PageLayout from "../components/PageLayout";
import { graphql } from "gatsby";

const Template = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <PageLayout>
      <Page>
        <h1> {frontmatter.title} </h1>
        <h2> {frontmatter.date} </h2>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </Page>
    </PageLayout>
  );
};

export default Template;

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
