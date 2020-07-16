import React from "react";
import { Link } from "react-router-dom";

import {
  NavbarSection,
  Logo,
  LogoText,
  UlList,
  ListItem,
  Anchor,
  Img,
} from "./style.js";

const Navbar = () => {
  return (
    <NavbarSection>
      <div className="container">
        <Logo>
          <LogoText>
            <Anchor>
              <Img
                src="https://images.cooltext.com/5443096.gif"
                alt="My profile"
              />
            </Anchor>
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