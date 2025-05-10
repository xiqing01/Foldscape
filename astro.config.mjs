import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from '@astrojs/react';
import tailwindcss from "@tailwindcss/vite";
import i18n from "@astrolicious/i18n";

export default defineConfig({
  site: "https://example.com",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    mdx(),
    i18n({
      defaultLocale: "en",
      locales: ["zh", "en"],
      fallback: {
        zh: "en"
      },
      routes: {
        "about": {
          zh: "关于",
          en: "about"
        },
        "blog": {
          zh: "博客",
          en: "blog"
        }
      }
    }),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
          zh: "zh-CN",
        },
      },
    }),
  ],
});