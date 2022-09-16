import styled from "styled-components";

export const MainContainer = styled.section`
  display: flex;
  flex-direction: column;

  justify-content: flex-end;
  margin: 20px 0 0 100px;
`;

export const Thing = styled.div`
  max-width: 1400px;
  padding: 20px 50px 10px 50px;
  min-height: calc(100vh - 300px);
`;

export const Button = styled.button`
  justify-items: flex-end;
  margin: 20px 0 0 0;
  height: 20px;
  width: 300px;
  border: none;
  text-align: center;
  background-color: white;
  color: black;
  font-weight: 500;
`;
