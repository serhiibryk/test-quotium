import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { useRouter } from "next/router";

import { menuItems } from "../../utils/common";
import Button from "../Button";
import MyModal from "../MyReactModal";
import useToggle from "../../hooks/useToggle";

import { ButtonOpenModal, MenuContainer, ModalContainer } from "./style";

const NavBar = () => {
  const [isModalOpen, onModalOpen, onModalClose] = useToggle();

  const { i18n, t } = useTranslation();

  const router = useRouter();

  const activeList = useMemo(() => {
    return menuItems(t).map(({ title, href }, index: number) => (
      <Button key={index} onClick={() => router.push(href)} title={title} />
    ));
  }, [i18n]);

  console.log(activeList);

  return (
    <nav>
      <MenuContainer>
        {/* {menuItems(t).map(({ title, href }, index: number) => (
          <Button key={index} onClick={() => router.push(href)} title={title} />
        ))} */}
        {activeList}
      </MenuContainer>
      <ModalContainer>
        <ButtonOpenModal onClick={onModalOpen}> &#9776; </ButtonOpenModal>
        {isModalOpen && <MyModal onClose={onModalClose} />}
      </ModalContainer>
    </nav>
  );
};

export default NavBar;
