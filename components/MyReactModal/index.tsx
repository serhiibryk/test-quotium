import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { useRouter } from "next/router";

import { menuItems } from "../../utils/common";
import ModalComponent from "../ModalPortal";

import { MenuButton } from "./style";

const MyModal: FC<IMyModal> = ({ onClose }) => {
  const { t } = useTranslation();

  const router = useRouter();

  const handleClick = (href: string) => {
    router.push(href);
    onClose();
  };

  return (
    <ModalComponent onClose={onClose}>
      {menuItems(t).map(({ title, href }, index: number) => (
        <MenuButton key={index} onClick={() => handleClick(href)}>
          {title}
        </MenuButton>
      ))}
    </ModalComponent>
  );
};

export default MyModal;
