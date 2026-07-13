---
name: Chakra UI v3 gotchas
description: API changes in Chakra UI v3 that differ from v2 knowledge and common LLM assumptions; check before building/debugging a Chakra v3 app.
---

Chakra UI v3 changed several APIs that are easy to assume are still v2-style:

- No `extendTheme`. Theming uses `createSystem(defaultConfig, customConfig)` from `@chakra-ui/react`, and `<ChakraProvider value={system}>` (not `theme={...}`).
- No `useToast` hook. Toasts use a singleton created with `createToaster({...})`, plus a `<Toaster />` render component (typically in `src/components/ui/toaster.tsx`) mounted once near the app root. Trigger toasts with `toaster.create({ title, description, type: "success" | "error" | "loading" | ... , duration })` — note the field is `type`, not `status`, and there's no `isClosable`/`position` per-call (position is set on the toaster instance).

**Why:** Assuming v2 APIs (`extendTheme`, `useToast`) causes Vite "does not provide an export named ..." runtime errors that only surface in the browser, not at typecheck time in a fast scaffold pass.

**How to apply:** When building or debugging a Chakra UI v3 app, grep the installed package's `dist/types` for the actual export names before writing theme/toast code, rather than relying on remembered v2 patterns.

Separately (not Chakra-specific): before importing any `react-icons/*` icon name, verify it exists in the installed version (`node -e "console.log(Object.keys(require('.../react-icons/si/index.js')))"` or grep the package) — icon names like `SiAmazon`, `SiCss3`, `SiJava`, `SiOpenai`, `SiVisualstudiocode` do not exist in react-icons and cause the same class of runtime import error.
