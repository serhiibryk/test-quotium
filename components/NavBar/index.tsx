import React from "react";
import { useTranslation } from "react-i18next";

import { useRouter } from "next/router";

import { menuItems } from "../../utils/common";
import Button from "../Button";
import MyModal from "../MyReactModal";
import useToggle from "../../hooks/useToggle";

import { ButtonOpenModal, MenuContainer, ModalContainer } from "./style";

const NavBar = () => {
  const [isModalOpen, onModalOpen, onModalClose] = useToggle();

  const { t } = useTranslation();

  const router = useRouter();

  return (
    <nav>
      <MenuContainer>
        {menuItems(t).map(({ title, href }, index: number) => (
          <Button key={index} onClick={() => router.push(href)} title={title} />
        ))}
      </MenuContainer>
      <ModalContainer>
        <ButtonOpenModal onClick={onModalOpen}> &#9776; </ButtonOpenModal>
        {isModalOpen && <MyModal onClose={onModalClose} />}
      </ModalContainer>
    </nav>
  );
};

export default NavBar;
