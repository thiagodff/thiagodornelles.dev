import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { Container, Wrapper, Logo, Menu, Icons } from './styles';

const Header = ({ siteTitle, title }) => (
  <Container>
    <Wrapper>

      <div>
        <Logo>
          <Link>{ siteTitle }</Link>
        </Logo>
        
        <Menu currentSection={title}>
          <Link id="home">HOME</Link>
          <Link id="blog">BLOG</Link>
          <Link id="about">SOBRE</Link>
          <Link id="portfolio">PORTFÓLIO</Link>
        </Menu>
      </div>

      <Icons>
        icons
      </Icons>

    </Wrapper>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
