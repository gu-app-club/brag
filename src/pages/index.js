import React from "react";
import Link from "gatsby-link";
import Feed from "../components/Feed";

const IndexPage = props => {
  return <Feed data={props.data} />;
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "YYYY")
            path
            author
            author_link
          }
        }
      }
    }
  }
`;
