import { defineConfig } from 'vitepress'

export const en = defineConfig({
  title: "Lightning Robot",
  lang: 'en-us',
  description: "Lightning Robot Official Documentation." ,
  themeConfig: {
    nav: [
      { text: 'home', link: '/en' },
      { text: 'tutorial', link: '/en/guide' }
    ],

sidebar: [
      {
        text: 'Introduction', link: 'https://github.com/LightningRobot'
      },
      {
        text: 'Start',
        items: [
          { text: 'Quick start', link: '/en/guide/quick-start' },
          { text: 'plugin development', link: '#' }
        ]
      }
    ],

editLink: {
      pattern: 'https://github.com/LightningRobot/docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

footer: {
      copyright: `Copyright © 2023-${new Date().getFullYear()} Lightning Robot`
    }
  }
})
