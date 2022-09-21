import React from "react";

import { ImgLogo, Thing, Wrapper } from "./style";
import NavBar from "../NavBar";

const Header = () => {
  return (
    <Thing>
      <ImgLogo src="http://photos.prnewswire.com/prnfull/20140425/79146" />
      <Wrapper>
        <NavBar />
      </Wrapper>
    </Thing>
  );
};

export default Header;
