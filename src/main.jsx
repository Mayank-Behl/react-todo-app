import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="app-container bg-gray-100 p-4">
        <App />
      </div>
    </div>
  </React.StrictMode>
);
