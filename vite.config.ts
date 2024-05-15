import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { UserConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()] as UserConfig["plugins"],
  base: "",
});
