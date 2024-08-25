import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import remarkToc from "remark-toc";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.log101.dev",
  markdown: {
    remarkPlugins: [[remarkToc, { heading: "İçindekiler" }]],
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
