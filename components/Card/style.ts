import styled from 'styled-components';

export const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  justify-items: center;

  width: 32%;
  min-height: 70px;
  min-width: 140px;
  margin: 10px 5px 5px 5px;
  border: 2px solid black;

  @media screen and (max-width: 1050px) {
    margin: 0 2rem 2rem 0;
    width: 48%;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    margin: 0 0 2rem 0;
  }
`;

export const ImgCard = styled.img`
  border-bottom: 2px solid black;
  object-fit: cover;
  display: flex;
  width: 100%;
  height: 250px;
`;

export const Сaption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
