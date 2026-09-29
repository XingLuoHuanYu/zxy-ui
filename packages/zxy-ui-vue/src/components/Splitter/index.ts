import { withInstall } from '@zxy-ui/shared'
import _Splitter from './src/index.vue'
import _SplitterPanel from './src/SplitterPanel.vue'

export const ZSplitter = withInstall(_Splitter)
export const ZSplitterPanel = withInstall(_SplitterPanel)

export * from './src/type'

export default ZSplitter
