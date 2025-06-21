import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  site: 'https://sakkenix.cloud',
  integrations: [],
  output: 'static',
  adapter: vercel(),
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: undefined
        }
      }
    }
  }
}); 