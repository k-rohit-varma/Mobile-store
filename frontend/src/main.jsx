import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import User_Provider from "./context/User_Provider.jsx";

createRoot(document.getElementById("root")).render(<User_Provider />);
