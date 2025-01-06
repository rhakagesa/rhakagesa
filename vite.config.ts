import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  build: {
    outDir: "dist",
  },
  plugins: [react()],
  define: {
    "proccess.env": {
      VITE_EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
      VITE_EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
      VITE_EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
    },
  },
});
