import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.log101.dev",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
