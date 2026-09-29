<script setup lang="ts">
import { ZTooltip, ZButton } from '@zxy-ui/vue'
</script>

<template>
  <div class="space-y-8 p-4">
    <section>
      <h2 class="text-xl font-bold mb-4">基础用法</h2>
      <div class="flex gap-4">
        <ZTooltip content="这是一个基础的文字提示">
          <ZButton>悬停查看提示</ZButton>
        </ZTooltip>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同位置</h2>
      <div class="flex gap-4">
        <ZTooltip content="这是一个顶部提示" placement="top">
          <ZButton>顶部提示</ZButton>
        </ZTooltip>
        <ZTooltip content="这是一个右侧提示" placement="right">
          <ZButton>右侧提示</ZButton>
        </ZTooltip>
        <ZTooltip content="这是一个底部提示" placement="bottom">
          <ZButton>底部提示</ZButton>
        </ZTooltip>
        <ZTooltip content="这是一个左侧提示" placement="left">
          <ZButton>左侧提示</ZButton>
        </ZTooltip>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同颜色</h2>
      <div class="flex gap-4">
        <ZTooltip content="这是一个默认颜色的提示" color="default">
          <ZButton>默认颜色</ZButton>
        </ZTooltip>
        <ZTooltip content="这是一个主色调的提示" color="primary">
          <ZButton>主色调</ZButton>
        </ZTooltip>
        <ZTooltip content="这是一个成功色调的提示" color="success">
          <ZButton>成功色调</ZButton>
        </ZTooltip>
        <ZTooltip content="这是一个警告色调的提示" color="warning">
          <ZButton>警告色调</ZButton>
        </ZTooltip>
        <ZTooltip content="这是一个危险色调的提示" color="danger">
          <ZButton>危险色调</ZButton>
        </ZTooltip>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同触发方式</h2>
      <div class="flex gap-4">
        <ZTooltip content="这是一个悬停触发的提示" trigger="hover">
          <ZButton>悬停触发</ZButton>
        </ZTooltip>
        <ZTooltip content="这是一个焦点触发的提示" trigger="focus">
          <ZButton>点击触发</ZButton>
        </ZTooltip>
        <ZTooltip content="这是一个同时支持悬停和焦点的提示" trigger="both">
          <ZButton>双重触发</ZButton>
        </ZTooltip>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">延迟显示和隐藏</h2>
      <div class="flex gap-4">
        <ZTooltip content="延迟500毫秒显示" :openDelay="500">
          <ZButton>延迟显示</ZButton>
        </ZTooltip>
        <ZTooltip content="延迟500毫秒隐藏" :closeDelay="500">
          <ZButton>延迟隐藏</ZButton>
        </ZTooltip>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">禁用箭头</h2>
      <div class="flex gap-4">
        <ZTooltip content="这是一个没有箭头的提示" :arrow="false">
          <ZButton>无箭头</ZButton>
        </ZTooltip>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">跟随鼠标</h2>
      <div class="flex gap-4">
        <ZTooltip content="这个提示会跟随鼠标移动" :followCursor="true">
          <ZButton>跟随鼠标</ZButton>
        </ZTooltip>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">最大宽度</h2>
      <div class="flex gap-4">
        <ZTooltip
          content="这是一个设置了最大宽度的提示，当内容较长时会自动换行显示，避免提示框过宽影响用户体验"
          maxWidth="200px"
        >
          <ZButton>最大宽度</ZButton>
        </ZTooltip>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">自定义样式 (PT)</h2>
      <div class="flex gap-4">
        <ZTooltip
          content="使用pt属性自定义样式"
          :pt="{
            content: 'bg-purple-700 text-white',
            arrow: 'border-purple-700',
          }"
        >
          <ZButton>自定义样式</ZButton>
        </ZTooltip>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">无样式模式</h2>
      <div class="flex gap-4">
        <ZTooltip
          content="使用unstyled属性移除所有默认样式"
          unstyled
          :pt="{
            content:
              'bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded-lg text-white font-bold shadow-lg',
            arrow: 'border-pink-500',
          }"
        >
          <ZButton>渐变样式</ZButton>
        </ZTooltip>
        <ZTooltip
          content="自定义暗色主题样式"
          unstyled
          :pt="{
            content: 'bg-gray-800 text-gray-100 p-2 rounded-md shadow-md',
            arrow: 'border-gray-800',
          }"
        >
          <ZButton>暗黑主题</ZButton>
        </ZTooltip>
        <ZTooltip
          content="带有动画效果的提示"
          unstyled
          :pt="{
            content:
              'bg-blue-500 text-white p-2 rounded-md shadow-md animate-pulse',
            arrow: 'border-blue-500',
          }"
        >
          <ZButton>动画效果</ZButton>
        </ZTooltip>
      </div>
    </section>
  </div>
</template>
