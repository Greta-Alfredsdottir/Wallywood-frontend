import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { AuthContextProvider } from "./context/authcontextprovider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/*Her wrapper vi app i jAuthContext */}
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </StrictMode>,
);
