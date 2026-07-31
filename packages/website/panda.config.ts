import { defineConfig } from "@pandacss/dev";
import { basePreset } from "@swmansion/ui-components/preset";

export default defineConfig({
  preflight: true,
  // Panda emits atomics in include order; equal-specificity ties break by
  // source order (last wins). Library first, app last - so app styles override
  // the library without !important/&&&.
  include: [
    "./node_modules/@swmansion/ui-components/src/**/*.{ts,tsx}",
    "./src/**/*.{astro,js,jsx,ts,tsx}",
  ],
  presets: ["@pandacss/preset-panda", basePreset],
  outdir: "styled-system",
  // The library's source imports css()/cva() from its internal "@/styles/system"
  // alias — Panda only extracts styles from recognized import sources, so both
  // roots must be listed here or the component styles silently vanish.
  importMap: ["styled-system", "@/styles/system"],
  // Grid builds gridTemplateColumns class names at runtime (template strings),
  // which static extraction can't see — pre-generate every column count it can
  // produce, in the same bracketed arbitrary-value form the runtime emits.
  staticCss: {
    css: [
      {
        properties: {
          gridTemplateColumns: [
            "[repeat(1, minmax(0, 1fr))]",
            "[repeat(2, minmax(0, 1fr))]",
            "[repeat(3, minmax(0, 1fr))]",
            "[repeat(4, minmax(0, 1fr))]",
            "[repeat(5, minmax(0, 1fr))]",
            "[repeat(6, minmax(0, 1fr))]",
          ],
        },
        responsive: true,
      },
    ],
  },
  // Tailwind v3's PostCSS plugin treats `@layer base/components/utilities`
  // in any processed file as its own directives and errors out — rename
  // Panda's layers so the two systems never collide.
  layers: {
    reset: "panda_reset",
    base: "panda_base",
    tokens: "panda_tokens",
    recipes: "panda_recipes",
    utilities: "panda_utilities",
  },
  globalCss: {
    body: {
      backgroundColor: "bg.canvas",
      color: "text.body",
      fontFamily: "body",
    },
  },
  theme: {
    extend: {
      // The preset's semantic tokens (bg.*, border.*, navbar.*, card.*, text.*)
      // all reference {colors.gray.*}, which defaults to Panda's blue-tinted
      // Tailwind greys. RNRepo uses pure neutrals (the old rnrGrey palette),
      // so swap the whole gray scale — dark mode then resolves to
      // #0a0a0a / #171717 / #262626 exactly like the previous site.
      tokens: {
        colors: {
          gray: {
            50: { value: "#fafafa" },
            100: { value: "#f5f5f5" },
            200: { value: "#e5e5e5" },
            300: { value: "#d4d4d4" },
            400: { value: "#a3a3a3" },
            500: { value: "#737373" },
            600: { value: "#525252" },
            700: { value: "#404040" },
            800: { value: "#262626" },
            900: { value: "#171717" },
            950: { value: "#0a0a0a" },
          },
        },
      },
      semanticTokens: {
        radii: {
          button: { value: "0px" },
        },
        colors: {
          "brand.primary": {
            value: { base: "#38ACDD", _dark: "#38ACDD" },
          },
          "text.brand": {
            value: { base: "#38ACDD", _dark: "#38ACDD" },
          },
          "interactive.primary": {
            value: { base: "#38ACDD", _dark: "#38ACDD" },
          },
          "interactive.primaryHover": {
            value: { base: "#5BB9E0", _dark: "#5BB9E0" },
          },
          "interactive.primaryActive": {
            value: { base: "#87CCE8", _dark: "#87CCE8" },
          },
          'interactive.secondaryHover': {
            value: { base: '{colors.gray.200}', _dark: '{colors.gray.600}' },
          },
          'interactive.focusRing': {
            value: { base: '#38ACDD', _dark: '#38ACDD' },
          },
        },
      },
    },
  },
});
