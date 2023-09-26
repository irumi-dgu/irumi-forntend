import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["react", "react-dom"]
  },
  server: {
    port: 5173,
    hmr: {
      host: "iirumi.com",
      port: 80
    },
    proxy: {
      "/api": "http://localhost:8000"
    }
  }
});
