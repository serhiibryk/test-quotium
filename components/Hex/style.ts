import styled from "styled-components";

export const MainComponent = styled.div`
  height: 110px;
  width: 100px;

  & .inner-block {
    border-top: 0.9px solid #e3e3e8;
    border-bottom: 0.9px solid #e3e3e8;
  }

  &.level1 {
    z-index: 10;

    & .inner-block {
      border-top: 1px solid black;
      border-bottom: 1px solid black;
    }

    &.isActive {
      transform: scale(1.5);
      z-index: 11 !important;

      & .inner-block {
        border-top: 1px solid #4991ff;
        border-bottom: 1px solid #4991ff;
      }
    }
  }

  &.level2 {
    &.isActive {
      border-top: 1px solid blue;
      border-bottom: 1px solid blue;

      & .inner-block {
        border-top: 2px solid #2278fa;
        border-bottom: 2px solid #2278fa;
      }
    }
  }
`;
