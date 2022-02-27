import React from "react";
import { Link } from "gatsby";
import { Post } from "../types";

interface Props {
  posts: {
    node: Post;
  }[];
}

function PostList({ posts }: Props) {
  return posts
    .filter((post) => post.node.frontmatter.title.length > 0)
    .map(({ node: post }) => {
      return (
        <div key={post.id}>
          <h3>
            <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
          </h3>
          <h4>{post.frontmatter.date}</h4>

          <p>{post.excerpt}</p>
        </div>
      );
    });
}

export default PostList;
