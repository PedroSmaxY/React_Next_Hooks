import React from "react";
import { createRoot } from "react-dom/client";

// App
import App from './App.tsx'

const root: Element | null = document.querySelector("#root");
if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
