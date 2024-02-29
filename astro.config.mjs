import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  redirects: {
    '/': {
      status: 302,
      destination: 'www.google.ca'
    }
  }
});