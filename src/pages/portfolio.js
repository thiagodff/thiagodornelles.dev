import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PortfolioPage = () => {
  
  return (
    <Layout title="portfolio">
      <SEO title="Portifólio" />

      <Infos>
        <h1>Essa página ainda está em construção ;)</h1>

        <p>Você pode encontrar todos os meus projetos aberto no GitHub: </p>
        <a href="https://github.com/thiagodff" target="__blank">https://github.com/thiagodff</a>
      </Infos>
    </Layout>
  )
}

const Infos = styled.div`
  margin-top: 30px;

  h1 {
    margin-bottom: 15px;
  }

  p {
    font-size: 19px;
  }

  a {
    font-size: 19px;

    &:hover {
      color: #4564ad;
    }
  }
`;

export default PortfolioPage
