import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "闪电机器人",
  description: "闪电机器人官方文档。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '网站主页', link: '/' },
      { text: '使用教程', link: '/guide' }
    ],

    sidebar: [
      {
        text: '介绍', link: 'https://github.com/LightningRobot'
      },
      {
        text: '起步',
        items: [
          { text: '快速上手', link: '/guide/quick-start' },
          { text: '插件开发', link: '#' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LightningRobot/main' }
    ],

    editLink: {
      pattern: 'https://github.com/LightningRobot/docs/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    footer: {
      copyright: `版权所有 © 2023-${new Date().getFullYear()}`
    }
  }
})