import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/bt": {
        target: "http://www.bt4uclassic.org",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/bt/, ""),
      },
    },
  },
});
