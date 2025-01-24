import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      external: ["firebase/app", "firebase/database"], // Excluye estos módulos de la compilación
    },
  },
  optimizeDeps: {
    exclude: ["firebase/app", "firebase/database"], // Evita que Vite intente procesarlos
  },
  resolve: {
    extensions: [".mjs", ".js", ".ts", ".json"], // Asegura que .mjs sea reconocido
  },
});
