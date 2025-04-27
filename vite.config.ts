import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5173,
  },
  plugins: [
    react(),
    federation({
      name: "core",
      remotes: {
        comments: {
          type: "module",
          name: "comments",
          entry: "http://localhost:5174/remoteEntry.js",
          entryGlobalName: "comments",
          shareScope: "default",
        },
      },
      filename: "remoteEntry.js",
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "chrome89",
  },
});
