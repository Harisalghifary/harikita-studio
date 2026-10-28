import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://harikita.store',

  vite: {
    plugins: [tailwindcss()],

    build: {
      // Never inline fonts as data: URIs. The CSP in public/_headers sets
      // font-src 'self', which blocks data: fonts — the build inlined Manrope
      // (2.7 kB, under Vite's 4 kB limit) and every page silently fell back to
      // a system sans. Emitting a real file also lets the browser cache it.
      assetsInlineLimit: (filePath) => (filePath.endsWith('.woff2') ? false : undefined),
    },
  },

  build: {
    inlineStylesheets: 'auto',
  },
});