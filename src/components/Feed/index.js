import React from "react";
import Link from "gatsby-link";

export default ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div>
      {posts.map(({ node: post }) => {
        const key = post.frontmatter.title + post.frontmatter.date;
        return <div key={key}>{post.frontmatter.title}</div>;
      })}
    </div>
  );
};