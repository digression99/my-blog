import * as React from "react";
import styled from "@emotion/styled";
import { StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import MyPic from "../images/my-pic-test.jpeg";
import { PostListQuery } from "../queries";
import PostList from "../components/PostList";
import { Global } from "@emotion/react";
import GlobalStyles from "../styles/GlobalStyles";

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <>
      <PageLayout>
        <Navigation>
          <h5>Daniel Kim</h5>

          <NavItemList>
            <li>Heading1</li>
            <li>Heading2</li>
            <li>Heading3</li>
          </NavItemList>
        </Navigation>

        <Main>
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

          <MainRight>
            <StaticImage
              src="../images/my-pic-test.jpeg"
              alt="my pic test"
              placeholder="placeholder test"
              layout="constrained"
              width={500}
              height={600}
            />
          </MainRight>
        </Main>

        <RecentPosts>
          <h2>Recent posts</h2>
          <PostList posts={posts} />
        </RecentPosts>

        <Footer>This is footer</Footer>
      </PageLayout>

      <Global styles={GlobalStyles} />
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

const PageLayout = styled.div``;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 80px;
  padding: 0 5%;

  position: fixed;
  top: 0;
  left: 0;

  background: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  z-index: 1;
`;

const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 80px;
  padding: 5%;

  height: calc(100vh - 80px);

  background: gainsboro;
`;

const MainLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-width: 600px;

  small {
    margin-top: 48px;
  }
`;

const MainRight = styled.div`
  display: flex;
  align-items: center;
`;

const NavItemList = styled.ul`
  list-style: none;
  display: flex;

  > * + * {
    margin-left: 48px;
  }
`;

const RecentPosts = styled.div`
  padding: 0 5%;
`;

const Footer = styled.footer`
  height: 20vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.4);
  color: white;
`;
