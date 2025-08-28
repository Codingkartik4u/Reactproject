import { BrowserRouter } from "react-router-dom";
import AuthcontextProvider from "./context/AuthContext.jsx";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthcontextProvider>
      <App />
    </AuthcontextProvider>
  </BrowserRouter>
);
