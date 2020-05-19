import styled from 'styled-components';

export const Container = styled.header`
  background: #fff;
  margin-bottom: 30px;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 980px;
  padding-left: 20px;
  padding-right: 20px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const Logo = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  
  a {
    text-decoration: none;
    color: #000;

  }
  
  padding-right: 30px;
  margin-right: 30px;

  border-right: solid 1px #dddddd;
`;

export const Menu = styled.nav`
  a {
    font-size: 16px;
    font-weight: bold;
    color: #999999;

    margin-right: 20px;
    text-decoration: none;

    &#home {
      color: ${({ currentSection }) => currentSection === 'home' ? '#444444' : '#999999'};

      &:hover {
        color: #444444;
      }
    }
    
    &#blog {
      color: ${({ currentSection }) => currentSection === 'blog' ? '#444444' : '#999999'};

      &:hover {
        color: #444444;
      }
    }
  
    &#about {
      color: ${({ currentSection }) => currentSection === 'about' ? '#444444' : '#999999'};

      &:hover {
        color: #444444;
      }
    }
  
    &#portfolio {
      color: ${({ currentSection }) => currentSection === 'portfolio' ? '#444444' : '#999999'};

      &:hover {
        color: #444444;
      }
    }
  }


`;

export const Icons = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #999999;

  a {
    height: 19px;
    text-decoration: none;
    margin-right: 15px;

    color: #999999;

    &:hover {
      color: #444444;
    }
  }

  button {
    background: none;
    border: none;
    height: 19px;
    margin-left: 10px;

    color: #999999;

    &:hover {
      color: #444444;
    }
  }
`;
