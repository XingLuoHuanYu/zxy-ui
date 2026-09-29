import { withInstall } from '@zxy-ui/shared'
import SkeletonComponent from './src/index.vue'
import SkeletonTextComponent from './src/SkeletonText.vue'
import SkeletonAvatarComponent from './src/SkeletonAvatar.vue'

export const ZSkeleton = withInstall(SkeletonComponent)
export const ZSkeletonText = withInstall(SkeletonTextComponent)
export const ZSkeletonAvatar = withInstall(SkeletonAvatarComponent)
