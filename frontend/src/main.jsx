import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { LanguageProvider } from "./contexts/LanguageContext";
import { NotificationProvider } from "./contexts/NotificationContext";
import { AuthentContext } from "./contexts/AuthentContext";
import { ThemeProvider } from "./contexts/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <NotificationProvider>
          <AuthentContext>
            <RouterProvider router={router} />
          </AuthentContext>
        </NotificationProvider>
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>
);
