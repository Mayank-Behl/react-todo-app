import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://Mayank-Behl.github.io/react-todo-app/",
  plugins: [react()],
});
