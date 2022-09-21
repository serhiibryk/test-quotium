import React, { FC } from "react";

import Portal from "../Portal";
import { ButtonClose, Container, MainContainer } from "./style";

interface IModaleComponent {
  onClose: () => void;
  children: any;
}

const ModalComponent: FC<IModaleComponent> = ({ onClose, children }) => {
  return (
    <Portal id={"portal"}>
      <MainContainer onClick={onClose}>
        <Container
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {children}
          <ButtonClose onClick={onClose}>&#128281;</ButtonClose>
        </Container>
      </MainContainer>
    </Portal>
  );
};

export default ModalComponent;