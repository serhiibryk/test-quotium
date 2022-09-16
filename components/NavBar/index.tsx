import React from "react";
import { useRouter } from "next/router";

import { menuItems } from "../../utils/common";
import Button from "../Button";

const NavBar = () => {
  const router = useRouter();
  return (
    <nav>
      {menuItems.map(({ title, href }, index: number) => (
        <Button key={index} onClick={() => router.push(href)} title={title} />
      ))}
    </nav>
  );
};

export default NavBar;
