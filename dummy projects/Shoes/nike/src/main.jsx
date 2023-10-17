import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import AppContext from "./utils/context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContext>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AppContext>
  </React.StrictMode>
);
