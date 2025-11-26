import { StrictMode } from "react";
import { Provider as ReduxProvider } from "react-redux";

import { ThemeProvider } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { createRoot } from "react-dom/client";

import store from "./redux/constants/store.ts";
import theme from "./theme/index.ts";
import "./common/i18n.ts";

import App from "./App.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </LocalizationProvider>
    </ReduxProvider>
  </StrictMode>,
);
