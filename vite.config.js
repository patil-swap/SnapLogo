import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
const __dirname = path.dirname("./src");

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },

  server: {
    port: "3333",
    strictPort: true,
    proxy: {
      "/png": "https://logoexpress.tubeguruji.com"
    }
  }
});
