import styled from "styled-components";
import { palette } from "../../utils/common";

export const Thing = styled.header`
  min-height: 10rem;
  background-color: ${palette.white};
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1rem 5rem 1rem 5rem;
`;

export const ImgLogo = styled.img`
  height: 70px;
  width: 200px;
`;

export const Wrapper = styled.div`
  border: 2px solid black;
`;
