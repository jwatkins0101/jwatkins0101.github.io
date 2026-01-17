import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jwatkins0101.github.io',
  base: '/corefour',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
