import "./App.css";
import React from "react";
import MainLayout from "./Layout/index";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

export class App extends React.Component {

  render() {
    return (
      <ThemeProvider theme={theme}>
        <MainLayout />
      </ThemeProvider>
    );
  }
}
export default App;
