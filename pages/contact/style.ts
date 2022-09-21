import styled from "styled-components";
import { palette } from "../../utils/common";

export const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 2rem 0 0 10rem;

  @media screen and (max-width: 775px) {
    margin: 2rem 0 0 0;
  }
`;

export const Thing = styled.div`
  max-width: 1400px;
  padding: 2rem 10rem 1rem 10rem;
  min-height: calc(100vh - 300px);
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 47rem;
  height: 10rem;

  @media screen and (max-width: 775px) {
    justify-content: flex-start;
    width: 28rem;
  }
`;

export const Button = styled.button`
  margin: 2rem 0 0 0;
  height: 20px;
  width: 300px;
  border: none;
  text-align: center;
  background-color: ${palette.white};
  color: ${palette.black};
  font-weight: 500;
  border: 2px solid black;
  box-shadow: 4px 3px 3px black;

  :focus {
    box-shadow: 2px 1px 1px black;
  }

  @media screen and (max-width: 775px) {
    width: 28rem;
  }
`;
