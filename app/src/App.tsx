import React from "react";
import ThemeProvider from "./style/theme";
import Container from "./components/container";
import "./App.css";
import Main from "./components/main";
import Menu from "./components/menu";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter basename="/">
      <ThemeProvider>
        <Container>
          <Menu />
          <Main />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}
