import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Content, LogoImg } from "./Navbar.styles";

import CRMLogo from "../../image/CRMLogo.png";

const Navbar = () => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={CRMLogo} alt="rmdb-logo" />
        </Link>
      </Content>
    </Wrapper>
  );
};

export default Navbar;
