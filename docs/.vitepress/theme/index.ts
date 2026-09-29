import Theme from 'vitepress/theme'
import MyLayout from '../components/Layout.vue'
import './custom.css'
import 'virtual:group-icons.css'
import { ZxyUI } from '@zxy-ui/vue'
import '@zxy-ui/vue/style'
import type { App } from 'vue'

import StorybookLink from '../components/StorybookLink.vue'

export default {
  ...Theme,
  Layout: MyLayout,
  enhanceApp({ app }: { app: App }) {
    // 全局注册组件库。注意：文档站自带的 StorybookLink 原以 'Link' 注册，
    // 与组件库的 ZLink 语义冲突，故改名为 StorybookLink 以避免歧义。
    app.use(ZxyUI)
    app.component('StorybookLink', StorybookLink)
  },
}
