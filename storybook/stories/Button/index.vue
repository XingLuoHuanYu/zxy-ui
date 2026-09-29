<script setup lang="ts">
import { ZButton } from '@zxy-ui/vue'
</script>

<template>
  <div class="space-y-8 p-4">
    <section>
      <h2 class="text-xl font-bold mb-4">基础用法</h2>
      <div class="flex flex-wrap gap-4">
        <ZButton>默认按钮</ZButton>
        <ZButton color="primary">主要按钮</ZButton>
        <ZButton color="success">成功按钮</ZButton>
        <ZButton color="warning">警告按钮</ZButton>
        <ZButton color="danger">危险按钮</ZButton>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">按钮变体</h2>
      <div class="flex flex-wrap gap-4">
        <ZButton color="primary" variant="solid">实心按钮</ZButton>
        <ZButton color="primary" variant="outline">轮廓按钮</ZButton>
        <ZButton color="primary" variant="ghost">幽灵按钮</ZButton>
        <ZButton color="primary" variant="link">链接按钮</ZButton>
        <ZButton color="primary" variant="light">浅色按钮</ZButton>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">按钮尺寸</h2>
      <div class="flex flex-wrap gap-4 items-center">
        <ZButton size="xs">超小按钮</ZButton>
        <ZButton size="sm">小按钮</ZButton>
        <ZButton size="md">中等按钮</ZButton>
        <ZButton size="lg">大按钮</ZButton>
        <ZButton size="xl">超大按钮</ZButton>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">圆角样式</h2>
      <div class="flex flex-wrap gap-4">
        <ZButton rounded="none">无圆角</ZButton>
        <ZButton rounded="sm">小圆角</ZButton>
        <ZButton rounded="md">中圆角</ZButton>
        <ZButton rounded="lg">大圆角</ZButton>
        <ZButton rounded="full">全圆角</ZButton>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">禁用状态</h2>
      <div class="flex flex-wrap gap-4">
        <ZButton disabled>禁用按钮</ZButton>
        <ZButton color="primary" disabled>禁用主要按钮</ZButton>
        <ZButton color="primary" variant="outline" disabled>禁用轮廓按钮</ZButton>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">加载状态</h2>
      <div class="flex flex-wrap gap-4">
        <ZButton loading>加载中</ZButton>
        <ZButton color="primary" loading>加载中</ZButton>
        <ZButton color="success" loading>加载中</ZButton>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">块级按钮</h2>
      <div class="space-y-4">
        <ZButton block>块级按钮</ZButton>
        <ZButton color="primary" block>主要块级按钮</ZButton>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">自定义样式 (PT)</h2>
      <div class="flex flex-wrap gap-4">
        <ZButton
          :pt="{
            root: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold',
          }"
        >
          渐变背景
        </ZButton>
        <ZButton
          :pt="{
            root: 'border-dashed border-2 border-purple-500 text-purple-500 hover:bg-purple-50',
          }"
        >
          虚线边框
        </ZButton>
        <ZButton
          color="primary"
          loading
          :pt="{
            loading: 'text-yellow-300',
          }"
        >
          自定义加载图标
        </ZButton>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">无样式模式</h2>
      <div class="flex flex-wrap gap-4">
        <ZButton
          unstyled
          :pt="{
            root: 'bg-gradient-to-r from-pink-500 to-purple-500 p-3 rounded-full text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300',
          }"
        >
          完全自定义按钮
        </ZButton>
        <ZButton
          unstyled
          :pt="{
            root: 'bg-transparent border-2 border-green-500 text-green-500 p-2 rounded-lg hover:bg-green-500 hover:text-white transition-colors',
          }"
        >
          自定义悬停效果
        </ZButton>
        <ZButton
          unstyled
          loading
          :pt="{
            root: 'bg-amber-500 text-white p-2 rounded-md',
            loading: 'animate-ping text-white',
          }"
        >
          自定义加载动画
        </ZButton>
      </div>
    </section>
  </div>
</template>
