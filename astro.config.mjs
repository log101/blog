import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://log101.dev",
  base: "/blog",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
