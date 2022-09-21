import styled from "styled-components";
import { palette } from "../utils/common";

export const Thing = styled.div`
  max-width: 100%;
  padding: 1rem 10rem 1rem 10rem;
  min-height: calc(100vh - 300px);
`;

export const TextContainer = styled.div`
  max-width: 400px;
  padding-left: 2rem;
  border-left: 10px solid ${palette.footerGrey};
`;

export const TextBold = styled.span`
  font-weight: 600;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
