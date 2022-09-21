import React, { FC } from "react";

import { useRouter } from "next/router";

import { menuItems } from "../../utils/common";

import ModalComponent from "../ModalPortal";
import { MenuButton } from "./style";

interface IMyModal {
  onClose: () => void;
}

const MyModal: FC<IMyModal> = ({ onClose }) => {
  const router = useRouter();

  const handleClick = (href: string) => {
    router.push(href);
    onClose();
  };

  return (
    <ModalComponent onClose={onClose}>
      {menuItems.map(({ title, href }, index: number) => (
        <MenuButton key={index} onClick={() => handleClick(href)}>
          {title}
        </MenuButton>
      ))}
    </ModalComponent>
  );
};

export default MyModal;
