import styled from "styled-components";
import { palette } from "../../utils/common";

export const Thing = styled.header`
  min-height: 10rem;
  background-color: ${palette.white};
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1rem 10rem 1rem 10rem;

  @media screen and (max-width: 760px) {
  }
`;

export const ImgLogo = styled.img`
  height: 70px;
  width: 200px;
  margin-right: 4rem;
`;

export const Wrapper = styled.div`
  border: 2px solid black;
`;
