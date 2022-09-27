import styled from 'styled-components';

import { palette } from '../../utils/common';

export const InputBar = styled.input`
  margin: 1rem 0 0 0;
  height: 20px;
  width: 350px;
  background-color: ${palette.white};
  color: black;
  border: 2px solid black;

  &:focus {
    outline: none;
    box-shadow: 0 0 3px black;
  }

  @media screen and (max-width: 775px) {
    width: 20rem;
  }
`;

export const Title = styled.label`
  position: relative;
  margin-top: 1em;
  font-size: 15px;
  font-weight: lighter;
  white-space: nowrap;
  overflow-x: hidden;
`;

export const TitleContainer = styled.div`
  margin: 1rem 0 0 0;
  justify-content: flex-start;
`;

export const InputContainer = styled.div`
  width: 47rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 775px) {
    width: 28rem;
  }
`;
