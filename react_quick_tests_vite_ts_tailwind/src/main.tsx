import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import { SimpleFetchData } from "./pages/SimpleFetchData";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SimpleFetchData />
  </React.StrictMode>
);
