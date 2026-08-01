// astro.config.mjs
// -----------------------------------------------------------------------------
// This is the main configuration file for Astro (the framework that turns our
// components into fast, static HTML). Astro reads this file automatically.
// We keep it small on purpose — most of the "look" lives in Tailwind + our CSS.
// -----------------------------------------------------------------------------

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // official Tailwind CSS integration for Astro
import sitemap from '@astrojs/sitemap'; // auto-generates sitemap.xml for search engines

export default defineConfig({
  // The real, live address of the site. Astro uses this to build correct
  // absolute links for SEO: the sitemap, canonical URLs and social card URLs.
  site: 'https://k1pentertainment.co.za',

  // "integrations" are optional add-ons:
  //  - tailwind(): utility-class styling (e.g. class="bg-ink text-white").
  //  - sitemap(): builds /sitemap-index.xml listing every page so Google can
  //    find them all. robots.txt (in public/) points crawlers to it.
  integrations: [tailwind(), sitemap()],

  // Let public TUNNEL hosts (Cloudflare Tunnel / localtunnel) reach the dev
  // server when we share a temporary preview link. Astro's dev server otherwise
  // blocks unknown hostnames. This only affects local dev, never the live site.
  vite: {
    server: {
      allowedHosts: ['.trycloudflare.com', '.loca.lt'],
    },
  },
});
