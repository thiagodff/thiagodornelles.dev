import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark;
  const { title, date } = frontmatter;

  return (
    <Layout title="blog">
      <SEO title={title} />
      <h1>{ title }</h1>
      <p>{ date }</p>
      
      <div dangerouslySetInnerHTML={{ __html: html }} />
      
      <Link to="/">Go to home</Link>
    </Layout>
  )
}

export const pageQuery = graphql`
  query Postpage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path }}) {
      html
      frontmatter {
        date(formatString: "DD/MM/YYYY, HH:MM")
        path
        title
      }
    }
  }
  
`;

export default IndexPage
