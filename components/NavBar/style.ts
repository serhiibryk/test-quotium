import styled from "styled-components";
import { palette } from "../../utils/common";

export const ModalContainer = styled.div`
  display: none;
  @media screen and (max-width: 900px) {
    display: block;
  }
`;

export const MenuContainer = styled.div`
  @media screen and (max-width: 900px) {
    display: none !important;
  }
`;

export const ButtonOpenModal = styled.button`
  background-color: ${palette.white};
  color: ${palette.black};
  font-size: 20px;
  border: none;
`;
