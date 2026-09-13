import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    // Produce separate chunks so browsers can cache JS/CSS independently
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk: React + React DOM
          "vendor-react": ["react", "react-dom"],
          // Router chunk
          "vendor-router": ["react-router-dom"],
          // Animation chunk (largest dep)
          "vendor-motion": ["framer-motion"],
          // Icons chunk
          "vendor-icons": ["lucide-react"],
        },
      },
    },
    // Raise warning threshold slightly; chunks are intentional
    chunkSizeWarningLimit: 600,
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Use terser for smaller output
    minify: "esbuild",
    target: "esnext",
  },
});