import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./styles.css"; // Importing global styles

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("❌ Root container (#root) not found in index.html!");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <Router>
    <App />
  </Router>
);
