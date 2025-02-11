import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./router/router.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./components/providers/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import ThemeProvider from "./components/providers/ThemeProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
        <Toaster></Toaster>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
