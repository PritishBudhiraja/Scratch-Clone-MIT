import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "tailwindcss/tailwind.css";
import { Provider } from "react-redux";
import store from "./utils/store";
import { ThemeProvider } from "@material-ui/core";
import theme from "./utils/theme";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
