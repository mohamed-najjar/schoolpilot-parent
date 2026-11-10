import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTS from "eslint-config-next/typescript";
export default defineConfig([
  ...nextVitals,
  ...nextTS,
  { rules: { "no-console": "error" } },
  globalIgnores([
    ".next/**",
    "src/lib/api/generated/**",
    "playwright-report/**",
    "test-results/**",
    "next-env.d.ts",
  ]),
]);
