import React from "react";

import NavBar from "../NavBar";
import LanguageMenu from "../LanguageMenu";

import { ImgLogo, Thing, Wrapper } from "./style";

const Header = () => {
  return (
    <Thing>
      <ImgLogo src="http://photos.prnewswire.com/prnfull/20140425/79146" />
      <div>
        <LanguageMenu />
      </div>
      <Wrapper>
        <NavBar />
      </Wrapper>
    </Thing>
  );
};

export default Header;
