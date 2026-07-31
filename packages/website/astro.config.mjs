import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // applyBaseStyles: false keeps Tailwind's unlayered preflight from
  // overriding the layered Panda CSS reset that @swmansion/ui-components
  // relies on; Panda's own reset layer covers base element styles.
  integrations: [tailwind({ applyBaseStyles: false }), react()],
  output: 'static',
  site: 'https://rnrepo.org',
});
