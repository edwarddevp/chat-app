import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import configureStore from "./configureStore";

const store = configureStore();

const colors = {
  brand: {
    sidebar: "#111A35",
    messageList: "#1c2541",
    addMessage: "#3a506b",
    navbar: "#151E39",
    "Maximum Blue Green": "#5bc0be",
    "Turquoise Blue": "#6fffe9",
  },
};
const theme = extendTheme({ colors });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
