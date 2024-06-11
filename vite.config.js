/// <reference types="vitest" />
/// <reference types="vite/client" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    exclude: ["**/node_modules/**", "**/dist/**"],
    testMatch: ["**/*.spec.tsx", "**/*.spec.ts"],
    setupFiles: ["./setupTests.ts"],
  },
});
