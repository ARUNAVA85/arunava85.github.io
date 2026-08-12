import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// TODO: Replace with your actual GitHub username and repo name
// For GitHub Pages, your site URL will be: https://YOUR_USERNAME.github.io/portfolio-website/
// Or if using a custom domain: https://yourdomain.com/
const SITE_URL = 'https://YOUR_USERNAME.github.io/portfolio-website';

export default defineConfig({
  // Use the SITE_URL for sitemap generation and canonical URLs
  site: SITE_URL,

  // If your repo is NOT at the root of your domain (i.e., it's at /portfolio-website/),
  // uncomment the base line below. For custom domains or root deployments, leave it as '/'.
  // base: '/portfolio-website/',

  integrations: [
    tailwind(),
    sitemap(),
  ],

  // Vite-level optimizations
  vite: {
    ssr: {
      // Ensure critical packages are pre-bundled for faster builds
      noExternal: ['web3forms'],
    },
  },
});
