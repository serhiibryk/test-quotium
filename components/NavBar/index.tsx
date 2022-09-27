import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import useToggle from '../../hooks/useToggle';
import { menuItems } from '../../utils/common';
import Button from '../Button';
import MyModal from '../MyReactModal';

import { ButtonOpenModal, MenuContainer, ModalContainer } from './style';

const NavBar = () => {
  const [isModalOpen, onModalOpen, onModalClose] = useToggle();

  const { t } = useTranslation('common');

  const router = useRouter();

  const activeList = useMemo(() => {
    return menuItems(t).map(({ title, href }, index: number) => (
      <Button key={index} onClick={() => router.push(href)} title={title} />
    ));
  }, [router, t]);

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
