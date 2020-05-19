import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FaMoon, FaGithub, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import { IoMdSunny, IoLogoYoutube } from "react-icons/io";
import { AiOutlineInstagram } from "react-icons/ai";


import { Container, Wrapper, Logo, Menu, Icons } from './styles';

const Header = ({ siteTitle, title, theme = 'dark' }) => (
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
        <a
        href="https://www.linkedin.com/in/thiago-fernandes-dornelles/"
        target="__blank"
        title="Linkedin"
        >
          <FaLinkedin size={19} />
        </a>
        <a
        href="https://github.com/thiagodff"
        target="__blank"
        title="GitHub"
        >
          <FaGithub size={19} />
        </a>
        <a
        href="https://www.instagram.com/thiagodff/"
        target="__blank"
        title="Instagram"
        >
          <FaInstagram size={19} />
        </a>
        <a
        href="https://www.youtube.com/channel/UCChUsvyU3CnXj0gaY95DDOA"
        target="__blank"
        title="Youtube"
        >
          <IoLogoYoutube size={19} />
        </a>

        <button>
          { theme === 'dark' ?
          (
            <IoMdSunny size={19} />
          ) : (
            <FaMoon size={19} />
          )
          }
        </button>
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
