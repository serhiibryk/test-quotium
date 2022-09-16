import React from "react";

import { ImgLogo, Wrapper } from "./style";
import NavBar from "../NavBar";

import { BreadCrumbsContainer, Thing } from "./style";
import { BreadCrumbs } from "../Breadcrumbs";

const Header = () => {
  return (
    <Thing>
      <ImgLogo src="http://photos.prnewswire.com/prnfull/20140425/79146" />
      <Wrapper>
        <NavBar />
      </Wrapper>
      <BreadCrumbsContainer>
        <BreadCrumbs />
      </BreadCrumbsContainer>
    </Thing>
  );
};

export default Header;
