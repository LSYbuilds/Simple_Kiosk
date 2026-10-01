import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

const basename = import.meta.env.DEV ? "" : "/bandbookiosk";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/bandbookiosk">
      <App />
    </BrowserRouter>
  </StrictMode>,
);
