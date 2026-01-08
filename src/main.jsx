import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "simplebar-react/dist/simplebar.min.css";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
