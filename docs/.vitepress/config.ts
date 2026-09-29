import { defineConfig } from 'vitepress'
import { vitepressDemoPlugin } from 'vitepress-demo-plugin'
import tailwindcss from '@tailwindcss/vite'
import { getNav } from './config/nav.ts'
import { getGuideSidebar, getComponentsSidebar } from './config/Sidebar.ts'

import { groupIconMdPlugin, groupIconVitePlugin,  } from 'vitepress-plugin-group-icons'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/zxy-ui/',
  title: 'ZxyUI',
  description: 'ZxyUI is a UI component library for Vue 3',
  ignoreDeadLinks: true,
  themeConfig: {
    logo: '/logo.svg',
    nav: getNav(),
    sidebar: {
      '/guide/': getGuideSidebar(),
      '/components/': getComponentsSidebar(),
    } as any,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/XingLuoHuanYu/zxy-ui' },
      {
        icon: 'npm',
        link: 'https://www.npmjs.com/package/@zxy-ui/vue',
      },
    ],
  },
  markdown: {
    config(md) {
      md.use(vitepressDemoPlugin)
      md.use(groupIconMdPlugin)
    },
  },
  vite: {
    plugins: [tailwindcss() as any, groupIconVitePlugin()],
  },
})
