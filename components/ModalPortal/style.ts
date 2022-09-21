import styled from "styled-components";
import { palette } from "../../utils/common";

export const MainContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  color: ${palette.black};
  background-color: ${palette.white};
  z-index: 10;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const Container = styled.div`
  position: relative;
  height: 100%;
  border-radius: 2px;
  padding: 20px;
  color: ${palette.black};
`;

export const ButtonClose = styled.div`
  cursor: pointer;
  font-size: 25px;
  position: absolute;
  top: 0;
  right: 0;
  margin: 5px 0 20px 0;
  color: ${palette.black};
  background-color: ${palette.white};
`;
