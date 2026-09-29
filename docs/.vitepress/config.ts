import { defineConfig } from 'vitepress'
import { vitepressDemoPlugin } from 'vitepress-demo-plugin'
import tailwindcss from '@tailwindcss/vite'
import { getNav } from './config/nav.ts'
import { getGuideSidebar, getComponentsSidebar } from './config/Sidebar.ts'

import { groupIconMdPlugin, groupIconVitePlugin,  } from 'vitepress-plugin-group-icons'

// 部署基路径：
//   - GitHub Pages 部署在子路径 https://<user>.github.io/zxy-ui/ 下 → base 需为 /zxy-ui/
//   - Cloudflare Pages 从根路径 https://<project>.pages.dev/ 提供服务 → base 需为 /
// Cloudflare 构建时会注入 CF_PAGES=1，可据此自动切换。
// 若需强制指定，可设置环境变量 VITEPRESS_BASE（优先级最高）。
const base =
  process.env.VITEPRESS_BASE ??
  (process.env.CF_PAGES ? '/' : '/zxy-ui/')

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base,
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
