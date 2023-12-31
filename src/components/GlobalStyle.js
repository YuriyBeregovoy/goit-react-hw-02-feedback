import { createGlobalStyle } from "styled-components";
import "modern-normalize";



export const GlobalStyle = createGlobalStyle`


body {
  min-width: 320px;
    color: #434455;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.02em;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  color: currentColor;
  text-decoration: none;
}

button {
  cursor: pointer;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}


address{
  font-style: normal;
}



`;