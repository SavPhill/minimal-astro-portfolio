import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  site: 'https://psavage.net',
  prefetch: true,
  compressHTML: true,
  devToolbar: {
    enabled: false // Prevents 504 dev-toolbar pre-bundling errors in Vite 6
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        format: 'webp',
        quality: 80,
        sizes: [640, 960, 1280, 1600, 2000],
        resizeOptions: {
          fit: 'cover',
          position: 'center',
        },
      },
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx(), sitemap()],
  redirects: {
    '/why-website-projects-go-off-the-rails-scope-creep-explained/': '/posts/why-website-projects-go-off-the-rails-scope-creep-explained/'
  }
});