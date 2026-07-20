import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { LandingRoot } from "./routes/index";
import { PrivacyPage } from "./routes/privacy";
import "./styles.css";

const path = window.location.pathname.replace(/\/+$/, "") || "/";
const page =
  path === "/privacy" ? (
    <PrivacyPage />
  ) : (
    <LandingRoot initialLang={path === "/en" ? "en" : path === "/ky" ? "ky" : "ru"} />
  );

createRoot(document.getElementById("root")!).render(<StrictMode>{page}</StrictMode>);
