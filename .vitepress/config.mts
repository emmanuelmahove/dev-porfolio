import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  title: "Emmanuel Mahove",
  description: "Portfolio site",
  markdown: {
    theme: {
      light: "catppuccin-latte",
      dark: "catppuccin-mocha",
    },
  },
  srcDir: "src/pages",
  themeConfig: {
    socialLinks: [
      { icon: "github", link: "https://github.com/emmanuelmahove" },
      { icon: "linkedin", link: "https://www.linkedin.com/in/emmanuel-mahove" },
      {
        icon: "stackoverflow",
        link: "https://stackoverflow.com/users/11770891/emmanuel-mahove",
      },
    ],
  },
});
