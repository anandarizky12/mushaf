import { createGlobalStyle } from "styled-components";
import styled  from "styled-components";

export const lightTheme = {
  body: "#fff",
  nav : "#CDF3A2",
  fontColor: "#595260",
  jumbotron : "#CDF3A2"
};

export const darkTheme = {
  body: "#50514F",
  nav : "#272d2d",
  fontColor: "#fff",
  jumbotron : "#272d2d"
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
  .jumbotron{
    background-color: ${(props) => props.theme.jumbotron };

  }
  .randomCard{
    background-color: ${(props) => props.theme.jumbotron };

  }
`;

export const StyledApp = styled.div`
color: ${(props) => props.theme.fontColor};
`;