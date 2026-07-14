import React from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";

import App from "./App";
import "./index.css";

import { AuthProvider } from "./context/AuthContext";
import { SearchProvider } from "./context/SearchContext";
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SearchProvider>
      <AuthProvider>
        <App />
        <Toaster position="top-right" />
      </AuthProvider>
    </SearchProvider>
  </React.StrictMode>
);