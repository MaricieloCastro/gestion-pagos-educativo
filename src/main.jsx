import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { ListasProvider } from "./contexts/ListasContext.jsx";
import { ApoderadoProvider } from "./contexts/FomularioContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ListasProvider>
          <ApoderadoProvider>
            <App />
          </ApoderadoProvider>
        </ListasProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
