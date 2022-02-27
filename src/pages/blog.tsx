import * as React from "react";
import { graphql, PageProps } from "gatsby";
import PageLayout from "../components/PageLayout";
import PostList from "../components/PostList";
import CenterPage from "../components/CenterPage";

interface DataProps {
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string;
        id: string;
        frontmatter: {
          title: string;
          date: string;
          slug: string;
          tags: string[];
          excerpt: string;
        };
      };
    };
  };
}

const Blog = ({ data }: PageProps<DataProps>) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <PageLayout>
      <CenterPage>
        <PostList posts={posts} />
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
