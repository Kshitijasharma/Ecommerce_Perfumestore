import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Resolve the current file location
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Compatibility layer for traditional ESLint configs (extends, rules, etc.)
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // Load Next.js + TypeScript recommended config
  ...compat.extends("next/core-web-vitals", "next"),
  
  // Custom overrides
  {
    rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "react/no-unescaped-entities": "off",
    "@next/next/no-img-element": "off"
    },
  },
];
