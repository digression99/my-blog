import React from "react";
import PageLayout from "../components/PageLayout";
import { graphql, PageProps } from "gatsby";
import Markdown from "../components/Markdown";
import Image from "gatsby-image";

interface DataProps {
  markdownRemark: {
    html: string;
    frontmatter: {
      date: string;
      slug: string;
      title: string;
      featuredImage: any;
    };
  };
}

const Template = ({ data }: PageProps<DataProps>) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  const featuredImageFluid = frontmatter.featuredImage.childImageSharp.fluid;

  return (
    <PageLayout>
      <Image fluid={featuredImageFluid} />

      <h3>{frontmatter.title}</h3>
      <span>{frontmatter.date}</span>
      <Markdown html={html} />
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
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 768) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
