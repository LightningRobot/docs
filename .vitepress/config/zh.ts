import { defineConfig } from 'vitepress'

export const zh = defineConfig({
  title: "闪电机器人",
  lang: 'zh-Hans',
  description: "闪电机器人官方文档。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: "入门", link: "/manual/introduction.md", activeMatch: "/manual/"}, {
        "text": "开发",
        "items": [{
          "text": "开发指南",
          "link": "/dev/guide/"
        }]
      }
    ],

    sidebar: {
      "/guide/": [{
        "text": "",
        "items": [{
          "text": "介绍",
          "link": "https://github.com/LightningRobot"
        }]
      }, {
        "text": "使用",
        "items": [{
          "text": "安装机器人",
          "link": "/guide/quick-start"
        }, {
          "text": "一次对话",
          "link": "/guide/adapter.md"
        },
        {
          "text": "定制机器人",
          "link": "/guide/plugin.md"
        }]
      }, {
        "text": "其它",
        "items": [{
          "text": "搜索插件市场",
          "link": "/manual/recipe/search.md"
        }]
      }],
    },

    editLink: {
      pattern: 'https://github.com/LightningRobot/docs/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    footer: {
      copyright: `版权所有 © 2023-${new Date().getFullYear()} 闪电机器人`
    }
  }
})
