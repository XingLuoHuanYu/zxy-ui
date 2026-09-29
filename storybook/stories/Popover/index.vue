<script setup lang="ts">
import { ZPopover, ZButton } from '@zxy-ui/vue'
</script>

<template>
  <div class="space-y-8 p-4">
    <section>
      <h2 class="text-xl font-bold mb-4">基础用法</h2>
      <div class="flex gap-4">
        <ZPopover content="这是一个基础的弹出框">
          <ZButton>点击查看</ZButton>
        </ZPopover>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同位置</h2>
      <div class="flex gap-4">
        <ZPopover content="这是一个顶部弹出框" placement="top">
          <ZButton>顶部弹出</ZButton>
        </ZPopover>
        <ZPopover content="这是一个右侧弹出框" placement="right">
          <ZButton>右侧弹出</ZButton>
        </ZPopover>
        <ZPopover content="这是一个底部弹出框" placement="bottom">
          <ZButton>底部弹出</ZButton>
        </ZPopover>
        <ZPopover content="这是一个左侧弹出框" placement="left">
          <ZButton>左侧弹出</ZButton>
        </ZPopover>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">带标题</h2>
      <div class="flex gap-4">
        <ZPopover title="弹出框标题" content="这是一个带标题的弹出框">
          <ZButton>点击查看</ZButton>
        </ZPopover>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同触发方式</h2>
      <div class="flex gap-4">
        <ZPopover content="这是一个点击触发的弹出框" trigger="click">
          <ZButton>点击查看</ZButton>
        </ZPopover>
        <ZPopover content="这是一个悬停触发的弹出框" trigger="hover">
          <ZButton>悬停查看</ZButton>
        </ZPopover>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同颜色</h2>
      <div class="flex gap-4">
        <ZPopover content="这是一个默认颜色的弹出框" color="default">
          <ZButton>默认颜色</ZButton>
        </ZPopover>
        <ZPopover content="这是一个主色调的弹出框" color="primary">
          <ZButton>主色调</ZButton>
        </ZPopover>
        <ZPopover content="这是一个成功色调的弹出框" color="success">
          <ZButton>成功色调</ZButton>
        </ZPopover>
        <ZPopover content="这是一个警告色调的弹出框" color="warning">
          <ZButton>警告色调</ZButton>
        </ZPopover>
        <ZPopover content="这是一个危险色调的弹出框" color="danger">
          <ZButton>危险色调</ZButton>
        </ZPopover>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">禁用箭头</h2>
      <div class="flex gap-4">
        <ZPopover content="这是一个没有箭头的弹出框" :showArrow="false">
          <ZButton>无箭头</ZButton>
        </ZPopover>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">自定义宽度</h2>
      <div class="flex gap-4">
        <ZPopover
          content="这是一个自定义宽度的弹出框，宽度设置为300px"
          width="300px"
        >
          <ZButton>自定义宽度</ZButton>
        </ZPopover>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">自定义样式 (PT)</h2>
      <div class="flex gap-4">
        <ZPopover
          title="自定义样式"
          content="使用pt属性自定义各部分样式"
          :pt="{
            content: 'bg-purple-50 border-purple-200',
            title: 'text-purple-700 font-bold',
            body: 'text-purple-600',
            arrow: 'border-purple-200',
          }"
        >
          <ZButton>自定义样式</ZButton>
        </ZPopover>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">无样式模式</h2>
      <div class="flex gap-4">
        <ZPopover
          title="完全自定义"
          content="使用unstyled属性移除所有默认样式"
          unstyled
          :pt="{
            content:
              'bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg shadow-xl',
            title: 'text-white font-bold text-lg mb-2',
            body: 'text-white opacity-90',
            arrow: 'border-blue-500',
          }"
        >
          <ZButton>无样式模式</ZButton>
        </ZPopover>
        <ZPopover
          title="暗黑主题"
          content="自定义暗色主题样式"
          unstyled
          :pt="{
            content:
              'bg-gray-800 p-3 rounded-md shadow-lg border border-gray-700',
            title: 'text-gray-100 font-bold border-b border-gray-700 pb-2 mb-2',
            body: 'text-gray-300',
            arrow: 'border-gray-800',
          }"
        >
          <ZButton>暗黑主题</ZButton>
        </ZPopover>
      </div>
    </section>
  </div>
</template>
