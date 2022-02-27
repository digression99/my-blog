import * as React from "react";
import styled from "@emotion/styled";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, PageProps } from "gatsby";
import PostList from "../components/PostList";
import PageLayout from "../components/PageLayout";
import breakpoints from "../styles/breakpoints";

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

const IndexPage = ({ data }: PageProps<DataProps>) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <>
      <PageLayout>
        <Main>
          <MainRight>
            <StaticImage
              src="../images/my-pic-test.jpeg"
              alt="my pic test"
              placeholder="blurred"
              layout="fixed"
              width={500}
              height={600}
            />
          </MainRight>

          <MainLeft>
            <h1>Daniel Kim's Personal Blog</h1>

            <p>
              Elit quaerat ut tempore eos iste voluptate sit. Culpa ipsam enim
              temporibus velit placeat autem. Quod officiis cupiditate rem
              dolorum ullam, non? Incidunt numquam id iusto esse non Vitae
              temporibus? Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet. blabla changed.
              blablabl
            </p>
          </MainLeft>
        </Main>

        <RecentPosts>
          <h2>Recent posts</h2>
          <PostList posts={posts} />
        </RecentPosts>
      </PageLayout>
    </>
  );
};

export default IndexPage;

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

const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 5%;
  min-height: calc(100vh - 80px);
  background: gainsboro;

  @media only screen and (max-width: ${breakpoints.desktop}px) {
    & {
      flex-direction: column;
      padding-top: 0;
    }
  }
`;

const MainLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-left: 24px;
  max-width: 600px;

  small {
    margin-top: 48px;
  }

  @media only screen and (max-width: ${breakpoints.desktop}px) {
    & {
      margin-left: 0;
    }
  }
`;

const MainRight = styled.div`
  display: flex;
  align-items: center;
`;

const RecentPosts = styled.div`
  padding: 0 5%;
`;
