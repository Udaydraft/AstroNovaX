import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    define: {
      "import.meta.env.EMAIL": JSON.stringify(env.EMAIL || "astranovax@gmail.com"),
      "import.meta.env.WHATSAPP": JSON.stringify(env.WHATSAPP || "918148811007"),
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["react", "react-dom"],
            motion: ["framer-motion"],
            icons: ["lucide-react"],
          },
        },
      },
    },
  };
});
