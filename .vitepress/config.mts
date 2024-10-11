import { defineConfigWithTheme } from 'vitepress'
import type { ThemeConfig } from 'vitepress-carbon'
import baseConfig from 'vitepress-carbon/config'

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  title: "Sydney Trains Wiki",
  description: "For all the ones down under",
  srcDir: 'src',
  cleanUrls: true,
  ignoreDeadLinks: true,
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

    logo: { src: '/favicon.ico' },
    
    sidebar: [
      {
        text: 'Trains',
        items: [
         { text: 'Overview', link: '/trains' },
         { text: 'Train Models', link: '/trains/train-models' },
         { text: 'Train Routes', link: '/trains/train-routes' },
         { text: 'Train Stations', link: '/trains/train-stations' },
         { text: 'Train Trackplan', link: '/trains/train-trackplan' },
        ]
      }
    ],    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/proximity24/Trains-Wiki' }
    ]
  }
})
