import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  
  return (
    <Layout>
      <SEO title="Home" />
      
      
        { edges.map(({ node }) => {
          const { frontmatter } = node;
          
          return (
            <div key={frontmatter.path}>
              <h2>{frontmatter.title}</h2>
              <Link to={frontmatter.path}>See the post here!</Link>
              <p>{frontmatter.date}</p>
            </div>
          );
        })}
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            title
            date(formatString: "DD/MM")
            path
          }
        }
      }
    }
  }
`;

export default IndexPage
