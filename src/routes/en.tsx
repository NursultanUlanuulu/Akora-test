import { createFileRoute } from "@tanstack/react-router";

import { LandingRoot } from "./index";
import { localeHead } from "@/lib/seo";

export const Route = createFileRoute("/en")({
  component: () => <LandingRoot initialLang="en" />,
  head: () => localeHead("en"),
});
