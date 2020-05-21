import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import { ImageCoderMan } from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const [avatarURL, setAvatarURL] = useState('');
  
  const { edges } = data.allMarkdownRemark;

  useEffect(() => {
    async function loadImg() {
      // const response = await 
      fetch('https://api.github.com/users/thiagodff').then(
        response => response.json()
      ).then(
        data => setAvatarURL(data.avatar_url)
      );

    }

    loadImg();
  }, []);
  
  return (
    <Layout title="home">
      <SEO title="Home" />

      <LandingPageInfo>
        <BlogInfos>
          <h1>Blog com conteúdos<br/>sobre programação e carreira</h1>

          <DevInfos>
            <img src={avatarURL} alt="avatar Thiago"/>

            <div>
              <strong>Thiago Fernandes Dornelles</strong>
              <p>Desenvolvedor Fullstack</p>
            </div>
          </DevInfos>
        </BlogInfos>

        <ImageWrapper>
          <ImageCoderMan />
        </ImageWrapper>
      </LandingPageInfo>
      
      <LastPosts>
        <p>Últimos posts...</p>

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
      </LastPosts>
    </Layout>
  )
}

const LandingPageInfo = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const BlogInfos = styled.div`
  flex: 1;

  h1 {
    font-size: 42px;
    margin-bottom: 30px;
  }
`;

const DevInfos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: -25px;

  img {
    height: 80px;
    width: 80px;
    border-radius: 50%;
    margin-right: 15px;
  }

  div {
    
    strong {
      font-size: 18px;
      font-weight: 400;
    }

    p {
      font-size: 18px;
      font-weight: 300;
      margin-top: 5px;
    }
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  max-width: 344px;
`;

const LastPosts = styled.div`
  margin-top: 60px;

  p {
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 30px;
  }
`;


export const pageQuery = graphql`
  {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
