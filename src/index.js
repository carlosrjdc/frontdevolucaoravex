import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { InfoProvider } from "./context";
import { ProSidebarProvider } from "react-pro-sidebar";
import { ReactNotifications } from "react-notifications-component";
import "./index.css";
import "react-notifications-component/dist/theme.css";
import "@fontsource/roboto"; // Defaults to weight 400.
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./routes";
import BackDropFeedBack from "./components/BackDrop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <InfoProvider>
      <ReactNotifications />
      <div style={{ background: "#eef0f4" }}>
        <ProSidebarProvider>
          <BackDropFeedBack />
          <RouterProvider router={router} />
        </ProSidebarProvider>
      </div>
    </InfoProvider>
  </React.StrictMode>
);
