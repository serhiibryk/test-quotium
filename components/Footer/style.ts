import styled from "styled-components";

export const Thing = styled.footer`
  display: flex;
  justify-content: space-between;
  text-align: center;
  min-height: 200px;
  background-color: #31404b;
  padding: 10px 50px 10px 50px;
  border-top: 5px solid;
  border-image: linear-gradient(
    to right,
    #67b775 20%,
    #46b0d5 20%,
    #46b0d5 40%,
    #e3d05e 40%,
    #e3d05e 60%,
    #df8862 60%,
    #df8862 80%,
    #d75e62 80%
  );
  border-image-slice: 1;
`;

export const ImgLogo = styled.img`
  height: 50px;
  width: 200px;
`;
