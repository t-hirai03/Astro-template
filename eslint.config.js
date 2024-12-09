import js from "@eslint/js";
import globals from "globals";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  eslintConfigPrettier,
  ...eslintPluginAstro.configs["flat/recommended"],
  ...eslintPluginAstro.configs["flat/jsx-a11y-recommended"],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        dataLayer: false,
      },
    },
  },
];
