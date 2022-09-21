import styled from "styled-components";

export const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  justify-items: center;
  width: 32%;
  min-height: 70px;
  min-width: 140px;
  margin: 10px 5px 5px 5px;

  @media screen and (max-width: 1050px) {
    width: 48%;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const ImgCard = styled.img`
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
