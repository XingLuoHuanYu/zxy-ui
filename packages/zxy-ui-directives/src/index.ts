import { lazyLoadDirective } from './lazy'
import { virtualListDirective } from './virtual'

export { lazyLoadDirective, virtualListDirective }
export type { LazyLoadOptions } from './lazy'
export type { VirtualListOptions } from './virtual'

export const ZxyUIDirectives = {
  install(app: { directive: (name: string, directive: unknown) => void }) {
    app.directive('lazy-load', lazyLoadDirective)
    app.directive('virtual-list', virtualListDirective)
  },
}
