import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["react", "react-dom"]
  },
  server: {
    port: 5173, // 사용할 포트 번호
    proxy: {
      "/api": "https://localhost:8000"
    },
    allow: ["./", "/home/ubuntu/irumi-forntend"]
  }
});
