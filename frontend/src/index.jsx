import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/tailwind.css";
import "./styles/index.css";
// import "./styles/font.css";

// Get the root element from the HTML
const container = document.getElementById("root");

// Create a root for rendering React components
const root = createRoot(container);

// Render the App component into the root
root.render(<App />);
