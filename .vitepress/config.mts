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
      { text: 'Trains', link: '/s-trains' },
      { text: 'Metro', link: '/s-metro' }
    ],

    search: {
      provider: 'local'
    },

    logo: { src: '/favicon.ico' },
    
    sidebar: {
      "/s-trains/": [
        {
          text: "Trains",
          items: [
           { text: 'Overview', link: '/trains' },
           { text: 'Train Routes', link: '/trains/train-routes' },
           { text: 'Train Stations', link: '/trains/train-stations' },
           { text: 'Train Models', link: '/trains/train-models' },
           { text: 'Train Trackplan', link: '/trains/train-trackplan' },
          ],
        },
      ],
      "/s-metro/": [
        {
          text: "Metro",
          items: [
           { text: 'Overview', link: '/metro' },
           { text: 'Metro Routes', link: '/metro/metro-routes' },
           { text: 'Future Metro Routes', link: '/metro/future-metro-routes' },
           { text: 'Proposed Metro Routes', link: '/metro/proposed-metro-routes' },
           { text: 'Metro Models', link: '/metro/metro-models' },
          ],
        },
      ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/proximity24' },
      { icon: 'youtube', link: 'https://youtube.com/@proximity-24' }
    ],
  },
}
})
