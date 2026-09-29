import { defineConfig } from 'vitepress'
import { vitepressDemoPlugin } from 'vitepress-demo-plugin'
import tailwindcss from '@tailwindcss/vite'
import { getNav } from './config/nav.ts'
import { getGuideSidebar, getComponentsSidebar } from './config/Sidebar.ts'

import { groupIconMdPlugin, groupIconVitePlugin,  } from 'vitepress-plugin-group-icons'

// 部署基路径：
//   - GitHub Pages 部署在子路径 https://<user>.github.io/zxy-ui/ 下 → base 需为 /zxy-ui/
//   - Cloudflare Pages 从根路径 https://<project>.pages.dev/ 提供服务 → base 需为 /
// Cloudflare 会在构建时注入 CF_PAGES=1，据此自动切换；
// 也可用 VITEPRESS_BASE 显式指定（优先级最高）。
const isCloudflare = !!process.env.CF_PAGES
const base = process.env.VITEPRESS_BASE ?? (isCloudflare ? '/' : '/zxy-ui/')

// 构建期日志：便于在部署日志中确认 base 取值
console.log(
  `[zxyui] VITEPRESS_BASE=${process.env.VITEPRESS_BASE ?? '(unset)'} ` +
    `CF_PAGES=${process.env.CF_PAGES ?? '(unset)'} → base="${base}"`
)

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
