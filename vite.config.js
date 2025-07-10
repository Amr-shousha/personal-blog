import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  base: "/personal-blog/", // 👈 This is the correct line for GitHub Pages

  plugins: [vue()],
});
