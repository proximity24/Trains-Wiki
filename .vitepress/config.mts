import { defineConfigWithTheme } from 'vitepress'
import type { ThemeConfig } from 'vitepress-carbon'
import baseConfig from 'vitepress-carbon/config'

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  title: "Sydney Trains Wiki",
  description: "For all the ones down under",
  srcDir: 'src',
  //base: '/vitepress-carbon-template/', if running on github-pages, set repository name here

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    search: {
      provider: 'local'
    },
    
    sidebar: [
      {
        text: 'Train Sets',
        items: [
          { text: 'A Set', link: '/trainsets/aset' },
          { text: 'B Set', link: '/trainsets/bset' }
          { text: 'H Set', link: '/trainsets/hset' }
          { text: 'K Set', link: '/trainsets/kset' }
          { text: 'M Set', link: '/trainsets/mset' }
          { text: 'T Set', link: '/trainsets/tset' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/brenoepics/vitepress-carbon' }
    ]
  }
})
