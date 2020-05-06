const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)

    return graphql(`
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
    `, { limit: 1000 }).then(result => {
      if (result.errors) {
        throw result.errors;
      }

      //create blog page
      const posts = result.data.allMarkdownRemark.edges;

      posts.forEach(({ node }) => {
        const { html, frontmatter } = node;
        
        createPage({
          path: frontmatter.path,
          component: blogPostTemplate,
          context: {
          // Add optional context data to be inserted
          // as props into the page component..
          //
          // The context data can also be used as
          // arguments to the page GraphQL query.
          //
          // The page "path" is always available as a GraphQL
          // argument.
            path: frontmatter.path,
          }
        })
      });
    })

}