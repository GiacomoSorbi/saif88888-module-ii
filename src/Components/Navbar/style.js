import styled from "styled-components";

export const NavbarSection = styled.div`
  padding: 10px 0px;
  overflow: hidden;
  background: #fff;
  position: relative;
  border-bottom: 1px solid #000;
`;

export const Logo = styled.div`
  width: 50%;
  float: left;
`;

export const LogoText = styled.h2`
  font-size: 30px;
  font-weight: bold;
`;
export const UlList = styled.ul`
  width: 50%;
  float: left;
  list-style: none;
  padding: 0px;
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
  display: inline-block;
`;

export const Anchor = styled.a`
  display: block;
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
    width: 130px;
    height: 45px;
  }
`;
