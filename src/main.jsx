import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ContextShares from "./Context/ContextShares.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextShares>
      {/* <GoogleOAuthProvider clientId="24513754491-c3cs4kelc0btpfu0ukm3d5h8hst7rea0.apps.googleusercontent.com"> */}
      <App />
      {/* </GoogleOAuthProvider> */}
    </ContextShares>
  </StrictMode>
);
