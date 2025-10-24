import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path"; // <--- Thêm dòng này

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/greenchop-react/",
  resolve: {
    // <--- Thêm toàn bộ khối "resolve" này
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
