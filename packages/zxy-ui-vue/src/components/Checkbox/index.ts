import { withInstall } from '@zxy-ui/shared'
import CheckboxComponent from './src/index.vue'
import CheckboxGroupComponent from './src/CheckboxGroup.vue'

export const ZCheckbox = withInstall(CheckboxComponent)
export const ZCheckboxGroup = withInstall(CheckboxGroupComponent)

export * from './src/type'
