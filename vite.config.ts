import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
  },
  // Removed dyadComponentTagger because it injects data attributes into
  // react-three-fiber JSX (mesh, group, etc.) which causes runtime errors
  // when r3f tries to apply those props to Three.js objects. If you need
  // dyad tagging for DOM components only, we can re-enable it with a
  // safer transform or an opt-in flag.
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
