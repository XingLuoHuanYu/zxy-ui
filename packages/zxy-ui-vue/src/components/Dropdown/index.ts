import { withInstall } from '@zxy-ui/shared'
import _Dropdown from './src/index.vue'
import _DropdownItem from './src/DropdownItem.vue'
import _DropdownDivider from './src/DropdownDivider.vue'

export const ZDropdown = withInstall(_Dropdown)
export const ZDropdownItem = withInstall(_DropdownItem)
export const ZDropdownDivider = withInstall(_DropdownDivider)

export * from './src/type'

export default ZDropdown
