import { withInstall } from '@zxy-ui/shared'
import BreadcrumbComponent from './src/breadcrumb.vue'
import BreadcrumbItemComponent from './src/breadcrumb-item.vue'

export const ZBreadcrumb = withInstall(BreadcrumbComponent, {
  ZBreadcrumbItem: BreadcrumbItemComponent,
})

export const ZBreadcrumbItem = ZBreadcrumb.ZBreadcrumbItem

export * from './src/type'
