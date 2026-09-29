import type { App, Component, Plugin } from 'vue'

export type SFCWithInstall<T> = T & Plugin

/**
 * 为组件附加 install 方法，使其支持 app.use() 全局注册。
 *
 * @param main   主组件
 * @param second 可选。传字符串时作为主组件的注册名（如 'ZButton'）；
 *               传对象时作为额外子组件（向后兼容旧用法）。
 * @param extra  可选的额外子组件，注册名取自各子组件自身的 name 字段
 *
 * 说明：注册名优先使用显式传入的字符串，其次回退到组件自身的 name 字段。
 * 二者都拿不到名字时跳过该组件，避免注册出 "undefined" 这样的无效名字。
 */
export const withInstall = <T extends Component, E extends Record<string, any>>(
  main: T,
  second?: string | E,
  extra?: E,
): SFCWithInstall<T> & E => {
  const name = typeof second === 'string' ? second : undefined
  const extras = typeof second === 'string' ? extra : second

  ;(main as SFCWithInstall<T>).install = (app: App): void => {
    const mainName = name ?? (main as { name?: string }).name
    if (mainName) app.component(mainName, main)

    for (const comp of Object.values(extras ?? {})) {
      const subName = (comp as { name?: string }).name
      if (subName) app.component(subName, comp as Component)
    }
  }

  if (extras) {
    for (const [key, comp] of Object.entries(extras)) {
      ;(main as Record<string, unknown>)[key] = comp
    }
  }
  return main as SFCWithInstall<T> & E
}
