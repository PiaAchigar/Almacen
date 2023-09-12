import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
const outDir = resolve(__dirname, "dist");

// https://vitejs.dev/config/
export default defineConfig({
  base:'/Almacen/',
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
  },
  build: {
    outDir,
    emptyOutDir: true,
  },
  assetsDir: "img",
});
