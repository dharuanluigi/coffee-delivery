/** @format */

import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./styles/default";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>Hello World</div> <h1>Hello</h1>
      <GlobalStyle />
    </ThemeProvider>
  );
}
