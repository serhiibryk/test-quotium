import styled from "styled-components";
import { palette } from "../../utils/common";

export const MainContainer = styled.section`
  display: flex;
  flex-direction: column;

  justify-content: flex-end;
  margin: 2rem 0 0 10rem;
`;

export const Thing = styled.div`
  max-width: 1400px;
  padding: 2rem 5rem 1rem 5rem;
  min-height: calc(100vh - 300px);
`;

export const Button = styled.button`
  justify-items: flex-end;
  margin: 2rem 0 0 0;
  height: 20px;
  width: 300px;
  border: none;
  text-align: center;
  background-color: ${palette.white};
  color: black;
  font-weight: 500;
  border: 2px solid black;
`;
