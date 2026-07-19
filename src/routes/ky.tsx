import { createFileRoute } from "@tanstack/react-router";

import { LandingRoot } from "./index";
import { localeHead } from "@/lib/seo";

export const Route = createFileRoute("/ky")({
  component: () => <LandingRoot initialLang="ky" />,
  head: () => localeHead("ky"),
});
