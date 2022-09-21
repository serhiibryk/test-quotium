import styled from "styled-components";
import { palette } from "../utils/common";

export const Thing = styled.div`
  max-width: 1400px;
  padding: 10px 50px 10px 50px;
  min-height: calc(100vh - 300px);
`;

export const TextContainer = styled.div`
  max-width: 400px;
  padding-left: 20px;
  border-left: 10px solid ${palette.white};
`;

export const TextBold = styled.span`
  font-weight: 600;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
