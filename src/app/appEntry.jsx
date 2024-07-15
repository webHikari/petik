import React from "react";
import ReactDOM from "react-dom/client";
import Provider from "./Providers/Provider.jsx";
import "./Layouts/Layout.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider />
    </React.StrictMode>
);
