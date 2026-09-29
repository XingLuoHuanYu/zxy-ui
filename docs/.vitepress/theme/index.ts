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
    app.use(ZxyUI)
    app.component('Link', StorybookLink)
  },
}
