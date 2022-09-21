import styled from "styled-components";
import { palette } from "../../utils/common";

export const MenuButton = styled.div`
  cursor: pointer;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  background-color: ${palette.white};
  border: 1px solid black;
  color: ${palette.black};
  width: 300px;
  height: 100px;
  font-size: 20px;
  justify-content: center;
  align-items: center;
`;
