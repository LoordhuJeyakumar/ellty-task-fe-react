import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./App.css";
import { CheckboxProvider } from "./CheckboxContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // Wrap the entire app with CheckboxProvider to provide context
  <React.StrictMode>
    <CheckboxProvider>
      <App />
    </CheckboxProvider>
  </React.StrictMode>
);
