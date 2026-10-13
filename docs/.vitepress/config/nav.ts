import type { DefaultTheme } from 'vitepress'

export const getNav = (): DefaultTheme.NavItem[] => {
  return [
    {
      text: '指南',
      link: '/guide/getting-started/introduction',
      activeMatch: '/guide/',
    },
    {
      text: '组件',
      link: '/components/button/',
      activeMatch: '/components/',
    },
    { text: '博客', link: 'https://zhangxingyu.pages.dev/portfolio' },
    {
      text: '生态',
      items: [
        {
          text: 'Playground',
          link: 'https://XingLuoHuanYu.github.io/zxy-ui/playground/',
        },
      ],
    },
  ]
}
