import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://ramp-roll-digest.pages.dev',
  build: {
    format: 'directory'
  }
});
