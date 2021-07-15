import { createGlobalStyle } from "styled-components";
import styled  from "styled-components";

export const lightTheme = {
  body: "#fff",
  nav : "#23CE6B",
  fontColor: "#000",
};

export const darkTheme = {
  body: "#50514F",
  nav : "#272d2d",
  fontColor: "#fff",
};



export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
        color: ${(props) => props.theme.fontColor};
	}
  .navbar{
    background-color: ${(props) => props.theme.nav  };
    color: ${(props) => props.theme.fontColor};
  }
`;

export const StyledApp = styled.div`
color: ${(props) => props.theme.fontColor};
`;