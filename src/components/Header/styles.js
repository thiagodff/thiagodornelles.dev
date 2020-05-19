import styled from 'styled-components';

export const Container = styled.header`
  background: #fff;
  margin-bottom: 30px;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 940px;
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

    &:hover {
      color: #444444;
    }
  }
`;

export const Icons = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #999999;
`;
