import { createGlobalStyle } from "styled-components";

// import{createGlobalStyle} from 'styled-com'
export const lightTheme = {
    body : '#fff',
    fontColor : '#000',
};

export const darkTheme = {
    body : '#000',
    fontColor : '#fff'
}

export const GlobalStyle = createGlobalStyle`
body {
    background-color : ${(props) => props.theme.body}
}
`;