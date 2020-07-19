import React from "react";
import { Link } from "react-router-dom";
import Logoo from "./logo.gif";

import {
  NavbarSection,
  Logo,
  LogoText,
  UlList,
  ListItem,
  Img,
} from "./style.js";

const Navbar = () => {
  return (
    <NavbarSection>
      <div className="container">
        <Logo>
          <LogoText>
            <Img src={Logoo} />
          </LogoText>
        </Logo>

        <UlList>
          <ListItem>
            <Link to="/">Home</Link>
          </ListItem>

          <ListItem>
            <Link to="/Profile">Profile</Link>
          </ListItem>
          <ListItem>
            <Link to="/Work">Work</Link>
          </ListItem>
          <ListItem>
            <Link to="/contact">Contact</Link>
          </ListItem>
        </UlList>
      </div>
    </NavbarSection>
  );
};

export default Navbar;
