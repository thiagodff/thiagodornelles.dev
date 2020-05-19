import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { Container, Wrapper, Logo, Menu, Icons } from './styles';

const Header = ({ siteTitle }) => (
  <Container>
    <Wrapper>

      <div>
        <Logo>
          <Link>Thiago</Link>
        </Logo>
        
        <Menu>
          <Link>HOME</Link>
          <Link>BLOG</Link>
          <Link>SOBRE</Link>
          <Link>PORTFÓLIO</Link>
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
