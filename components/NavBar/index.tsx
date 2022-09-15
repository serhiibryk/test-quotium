import React from "react";
import { useRouter } from "next/router";

import { menuItems } from "../../utils/common";

const NavBar = () => {
  const router = useRouter();
  return (
    <nav>
      {menuItems.map(({ title, href }, index: number) => (
        <button key={index} onClick={() => router.push(href)}>
          {title}
        </button>
      ))}
    </nav>
  );
};

export default NavBar;
