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
      { text: 'Trains', link: '/trains' }
    ],

    search: {
      provider: 'local'
    },
    
    sidebar: [
      {
        text: 'Trains',
        items: [
         { text: 'Train Models', link: '/trains/train-models' },
         { text: 'B Set', link: '/trains/train-routes' },
         { text: 'H Set', link: '/trains/train-stations' },
         { text: 'K Set', link: '/trains/train-trackplan' },
        ]
      }
    ],    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/brenoepics/vitepress-carbon' }
    ]
  }
})
