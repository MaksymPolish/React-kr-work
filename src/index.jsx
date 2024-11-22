import React from "react";
import ReactDOM from "react-dom/client"; // Використовуємо новий API
import App from "./App";
import "./styles.css";

// Створення root і рендеринг
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
