import { defineConfig } from 'vitepress'
import { vitepressDemoPlugin } from 'vitepress-demo-plugin'
import tailwindcss from '@tailwindcss/vite'
import { getNav } from './config/nav.ts'
import { getGuideSidebar, getComponentsSidebar } from './config/Sidebar.ts'

import { groupIconMdPlugin, groupIconVitePlugin,  } from 'vitepress-plugin-group-icons'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // GitHub Pages 部署在子路径 /zxy-ui/ 下；Cloudflare Pages 从根路径提供服务。
  // Cloudflare 构建时会注入 CF_PAGES=1，据此自动切换，无需手改。
  base: process.env.CF_PAGES ? '/' : '/zxy-ui/',
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
