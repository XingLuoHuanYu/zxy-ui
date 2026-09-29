import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { ZxyUI } from '@zxy-ui/vue'
import { lazyLoadDirective, virtualListDirective } from '@zxy-ui/directives'
import '@zxy-ui/vue/style'

const app = createApp(App)
app.use(ZxyUI)
app.directive('lazy-load', lazyLoadDirective)
app.directive('virtual-list', virtualListDirective)
app.mount('#app')
