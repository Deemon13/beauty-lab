import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  base: "/beauty-lab/",
  // plugins: [react()],
  build: {
    sourcemap: true,
  },
  server: {
    open: true,
  },
});
