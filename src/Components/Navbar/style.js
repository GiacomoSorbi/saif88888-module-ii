import styled from "styled-components";

export const NavbarSection = styled.div`
  padding: 20px 0px;
  overflow: hidden;
  background: #fafafa;
  position: relative;
  border-bottom: 1px solid #000;
`;

export const Logo = styled.div`
  width: 70%;
  float: left;
`;

export const LogoText = styled.h2`
  font-size: 30px;
  font-weight: bold;
  @media (max-width: 667px) {
    font-size: 20px;
    font-weight: bold;
  }
`;
export const UlList = styled.ul`
  list-style-type: inline;
  margin: 10;
  padding: 10;
  @media (max-width: 667px) {
    float: none;
    position: absolute;
    top: 15%;
    left: 75%;
    transform: translate(-50%, -50%);
    font-size: 10px;
  }
`;

export const ListItem = styled.li`
  display: inline;
  padding: 10px;
  text-decoration: none;
  background-color: salmon;
`;

export const Anchor = styled.a`
  display: inline;
  color: #222;
  padding: 10px 15px;
  font-weight: bold;

  &:hover {
    color: #eb5424;
    text-decoration: none;
  }
`;

export const Img = styled.img`
  width: 200px;
  height: 75px;

  @media (max-width: 667px) {
    width: 120px;
    height: 45px;
  }
`;
