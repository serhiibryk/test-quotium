import styled from "styled-components";
import { palette } from "../../utils/common";

export const InputBar = styled.input`
  margin: 10px 0 0 0;
  height: 20px;
  width: 350px;
  background-color: ${palette.white};
  color: black;
  border: 2px solid black;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px black;
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
  margin: 10px 0 0 0;
  justify-content: flex-start;
`;

export const InputContainer = styled.div`
  width: 470px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
// root: {
//   marginBottom: 25,
// },
// title: {
//   position: "relative",
//   marginTop: "1em",
//   fontStyle: "italic",
//   fontSize: "15px",
//   fontWeight: "lighter",
//   whiteSpace: "nowrap",
//   overflowX: "hidden",
// },
// inputGroup: {
//   position: "relative",

//   "& .inputLabel:focus + .label": {
//     display: "block",
//     top: "-21px",
//   },
//   "& .show": {
//     top: "-21px",
//   },
// },
// inputLabelMain: {
//   color: "#A9A9A9",
//   position: "absolute",
//   // display: 'none',
//   top: 12,
//   marginLeft: 5,
//   display: "block",
// },

// inputHelper: {},
// input: {
//   backgroundColor: (isDarkMode: boolean) => pallet(isDarkMode).dark,
//   color: (isDarkMode: boolean) => pallet(isDarkMode).color,
//   fontSize: "16px",
//   padding: "10px",
//   display: "block",
//   width: "300px",
//   border: "none",
//   borderBottom: "2px solid #ccc",

//   "&:focus": {
//     backgroundColor: (isDarkMode: boolean) => pallet(isDarkMode).dark,
//     color: (isDarkMode: boolean) => pallet(isDarkMode).color,
//     outline: "none",
//   },
// },
// "& input + label": {
//   top: "10px",
// },
