import { withInstall } from '@zxy-ui/shared'
import _Timeline from './src/timeline.vue'
import _TimelineItem from './src/timeline-item.vue'

export const ZTimeline = withInstall(_Timeline)
export const ZTimelineItem = withInstall(_TimelineItem)
export default ZTimeline

export * from './src/type'
