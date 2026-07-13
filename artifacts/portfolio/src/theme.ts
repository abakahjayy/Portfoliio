import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#e0f2fe" },
          100: { value: "#bae6fd" },
          200: { value: "#7dd3fc" },
          300: { value: "#38bdf8" },
          400: { value: "#0ea5e9" },
          500: { value: "#0284c7" },
          600: { value: "#0369a1" },
          700: { value: "#075985" },
          800: { value: "#0c4a6e" },
          900: { value: "#082f49" },
        },
        background: {
          light: { value: "#f8fafc" },
          dark: { value: "#0B0C10" },
        },
        surface: {
          light: { value: "rgba(255, 255, 255, 0.8)" },
          dark: { value: "rgba(18, 20, 24, 0.7)" },
        },
        glass: {
          light: { value: "rgba(255,255,255,0.25)" },
          dark: { value: "rgba(255,255,255,0.05)" },
        },
      },
      fonts: {
        heading: { value: "'Syne', sans-serif" },
        body: { value: "'Outfit', sans-serif" },
        mono: { value: "'Space Mono', monospace" },
      },
    },
    semanticTokens: {
      colors: {
        bg: {
          value: { _light: "{colors.background.light}", _dark: "{colors.background.dark}" },
        },
        panel: {
          value: { _light: "{colors.surface.light}", _dark: "{colors.surface.dark}" },
        },
        borderBase: {
          value: { _light: "rgba(0,0,0,0.05)", _dark: "rgba(255,255,255,0.08)" },
        },
        textBase: {
          value: { _light: "{colors.gray.800}", _dark: "{colors.gray.100}" },
        },
        textMuted: {
          value: { _light: "{colors.gray.600}", _dark: "{colors.gray.400}" },
        },
      },
    },
  },
  globalCss: {
    "html, body": {
      backgroundColor: "bg",
      color: "textBase",
      fontFamily: "body",
      scrollBehavior: "smooth",
      overflowX: "hidden",
    },
    "body::-webkit-scrollbar": {
      width: "8px",
    },
    "body::-webkit-scrollbar-track": {
      background: "bg",
    },
    "body::-webkit-scrollbar-thumb": {
      background: "borderBase",
      borderRadius: "4px",
    },
    "::selection": {
      backgroundColor: "brand.500",
      color: "white",
    }
  },
});

export const system = createSystem(defaultConfig, customConfig);
