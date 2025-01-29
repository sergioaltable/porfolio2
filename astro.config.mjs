import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  base: "/porfolio2/",
  viewTransitions: true // Enable view transitions
});