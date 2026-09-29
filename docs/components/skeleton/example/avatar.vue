<script setup lang="ts">
import { ZSkeletonAvatar } from '@zxy-ui/vue'
import '@zxy-ui/vue/style'
</script>

<template>
  <div class="space-y-6">
    <!-- 基础头像骨架屏 -->
    <div>
      <h3 class="text-sm font-medium mb-2">基础头像骨架屏</h3>
      <ZSkeletonAvatar />
    </div>

    <!-- 不同尺寸 -->
    <div>
      <h3 class="text-sm font-medium mb-2">不同尺寸</h3>
      <div class="flex items-center gap-4">
        <div>
          <p class="text-xs text-gray-500 mb-1">xs</p>
          <ZSkeletonAvatar size="xs" />
        </div>
        <div>
          <p class="text-xs text-gray-500 mb-1">sm</p>
          <ZSkeletonAvatar size="sm" />
        </div>
        <div>
          <p class="text-xs text-gray-500 mb-1">md</p>
          <ZSkeletonAvatar size="md" />
        </div>
        <div>
          <p class="text-xs text-gray-500 mb-1">lg</p>
          <ZSkeletonAvatar size="lg" />
        </div>
        <div>
          <p class="text-xs text-gray-500 mb-1">xl</p>
          <ZSkeletonAvatar size="xl" />
        </div>
      </div>
    </div>

    <!-- 方形头像 -->
    <div>
      <h3 class="text-sm font-medium mb-2">方形头像</h3>
      <ZSkeletonAvatar :circle="false" />
    </div>

    <!-- 不同动画 -->
    <div>
      <h3 class="text-sm font-medium mb-2">不同动画效果</h3>
      <div class="flex items-center gap-4">
        <div>
          <p class="text-xs text-gray-500 mb-1">pulse</p>
          <ZSkeletonAvatar animation="pulse" />
        </div>
        <div>
          <p class="text-xs text-gray-500 mb-1">wave</p>
          <ZSkeletonAvatar animation="wave" />
        </div>
        <div>
          <p class="text-xs text-gray-500 mb-1">none</p>
          <ZSkeletonAvatar animation="none" />
        </div>
      </div>
    </div>
  </div>
</template>
