import * as React from "react";
import { Link, graphql } from "gatsby";
import PageLayout from "../components/PageLayout";
import CenterPage from "../components/CenterPage";

const Blog = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <PageLayout>
      <CenterPage>
        {posts
          .filter((post) => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div key={post.id}>
                <h3>
                  <Link to={post.frontmatter.slug}>
                    {post.frontmatter.title}
                  </Link>
                </h3>
                <h4>{post.frontmatter.date}</h4>

                <p>{post.excerpt}</p>
              </div>
            );
          })}
      </CenterPage>
    </PageLayout>
  );
};

export default Blog;

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(truncate: true)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            slug
            tags
            excerpt
          }
        }
      }
    }
  }
`;
