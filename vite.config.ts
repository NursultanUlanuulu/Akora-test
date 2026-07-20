import { fileURLToPath, URL } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    tsconfigPaths: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL("./index.html", import.meta.url)),
        en: fileURLToPath(new URL("./en/index.html", import.meta.url)),
        ky: fileURLToPath(new URL("./ky/index.html", import.meta.url)),
        privacy: fileURLToPath(new URL("./privacy/index.html", import.meta.url)),
      },
    },
  },
});
