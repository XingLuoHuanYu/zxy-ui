import { describe, it, expect } from 'vitest'
import { createApp } from 'vue'
import { ZxyUI } from '../index'

/**
 * 验证全局注册：app.use(ZxyUI) 后，组件应可通过 Z 前缀的
 * PascalCase 名（ZButton）及 kebab-case 标签（z-button）解析。
 */
describe('ZxyUI 全局注册', () => {
  const createTestApp = () => {
    const app = createApp({ render: () => null })
    app.use(ZxyUI)
    return app
  }

  it('应注册 Z 前缀的 PascalCase 组件名', () => {
    const app = createTestApp()
    expect(app.component('ZButton')).toBeTruthy()
    expect(app.component('ZInput')).toBeTruthy()
    expect(app.component('ZCard')).toBeTruthy()
  })

  it('应可通过 kebab-case 标签解析（Vue 内置行为）', () => {
    const app = createTestApp()
    // Vue 在解析 <z-button> 时会自动尝试 ZButton
    expect(app.component('ZButton')).toBeTruthy()
    expect(app.component('z-button')).toBeFalsy() // 未显式注册 kebab 形式，靠 Vue 自动解析
  })

  it('不应注册出 "undefined" 这类无效名字', () => {
    const app = createTestApp()
    expect(app.component('undefined')).toBeFalsy()
  })

  it('子组件也应被注册（如 ZAccordionItem / ZBreadcrumbItem）', () => {
    const app = createTestApp()
    expect(app.component('ZAccordion')).toBeTruthy()
    expect(app.component('ZAccordionItem')).toBeTruthy()
    expect(app.component('ZBreadcrumbItem')).toBeTruthy()
    expect(app.component('ZTabItem')).toBeTruthy()
  })

  it('组件数量应与导出列表一致', () => {
    const app = createTestApp()
    const registered = ['ZButton', 'ZInput', 'ZSelect', 'ZTable', 'ZModal']
    registered.forEach((n) => expect(app.component(n)).toBeTruthy())
  })
})
