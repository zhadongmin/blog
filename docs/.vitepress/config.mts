import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "时光机",
  description: "时光机",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        // text: 'Examples',
        items: [
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: '',
      copyright: 'Copyright © 2023-present <a href="https://beian.miit.gov.cn/" target="_blank">皖ICP备20012744号</a>'
    }
  }
})
