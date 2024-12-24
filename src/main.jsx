import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./router/router.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./components/providers/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import ThemeProvider from "./components/providers/ThemeProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      <Toaster></Toaster>
    </ThemeProvider>
  </StrictMode>
);
