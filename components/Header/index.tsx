import React from "react";

import { ImgLogo } from "../Footer/style";
import NavBar from "../NavBar";

import { BreadCrumbsContainer, Thing } from "./style";
import { BreadCrumbs } from "../Breadcrumbs";

const Header = () => {
  return (
    <Thing>
      <ImgLogo src="http://photos.prnewswire.com/prnfull/20140425/79146" />
      <NavBar />
      <BreadCrumbsContainer>
        <BreadCrumbs />
      </BreadCrumbsContainer>
    </Thing>
  );
};

export default Header;
