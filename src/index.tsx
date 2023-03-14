import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./app";
import { FontProvider } from "@/features/FontChanger";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <FontProvider>
    <App />
  </FontProvider>
);
