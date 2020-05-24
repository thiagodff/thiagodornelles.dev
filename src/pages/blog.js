import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  
  return (
    <Layout title="blog">
      <SEO title="Blog" />

      <input type="text" placeholder="Pesquise por um post"/>

      <Posts>
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
      </Posts>
    </Layout>
  )
}

const Posts = styled.div`
  margin-top: 30px;

  p {
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 30px;
  }
`;


export const pageQuery = graphql`
  {
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
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

export default BlogPage
