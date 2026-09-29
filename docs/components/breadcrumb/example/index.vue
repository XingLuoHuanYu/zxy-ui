<script setup lang="ts">
import { ZBreadcrumb, ZBreadcrumbItem } from '@zxy-ui/vue'
import '@zxy-ui/vue/style'
import { h } from 'vue'

// 自定义图标组件代替第三方包
const ChevronRightIcon = {
  name: 'ChevronRightIcon',
  render() {
    return h(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        width: '16',
        height: '16',
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: '2',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
      [
        h('polyline', {
          points: '9 18 15 12 9 6',
        }),
      ],
    )
  },
}
</script>

<template>
  <div class="space-y-8">
    <!-- 基础用法 -->
    <section>
      <h2 class="text-lg font-medium mb-4">基础用法</h2>
      <div class="flex gap-6">
        <ZBreadcrumb>
          <ZBreadcrumbItem href="/">首页</ZBreadcrumbItem>
          <ZBreadcrumbItem href="/components">组件</ZBreadcrumbItem>
          <ZBreadcrumbItem>面包屑</ZBreadcrumbItem>
        </ZBreadcrumb>
      </div>
    </section>

    <!-- 自定义分隔符 -->
    <section>
      <h2 class="text-lg font-medium mb-4">自定义分隔符</h2>
      <div class="flex gap-6">
        <ZBreadcrumb separator=">">
          <ZBreadcrumbItem href="/">首页</ZBreadcrumbItem>
          <ZBreadcrumbItem href="/components">组件</ZBreadcrumbItem>
          <ZBreadcrumbItem>面包屑</ZBreadcrumbItem>
        </ZBreadcrumb>
      </div>
    </section>

    <!-- 图标分隔符 -->
    <section>
      <h2 class="text-lg font-medium mb-4">图标分隔符</h2>
      <div class="flex gap-6">
        <ZBreadcrumb :separator-icon="ChevronRightIcon">
          <ZBreadcrumbItem href="/">首页</ZBreadcrumbItem>
          <ZBreadcrumbItem href="/components">组件</ZBreadcrumbItem>
          <ZBreadcrumbItem>面包屑</ZBreadcrumbItem>
        </ZBreadcrumb>
      </div>
    </section>

    <!-- 禁用状态 -->
    <section>
      <h2 class="text-lg font-medium mb-4">禁用状态</h2>
      <div class="flex gap-6">
        <ZBreadcrumb>
          <ZBreadcrumbItem href="/">首页</ZBreadcrumbItem>
          <ZBreadcrumbItem disabled href="/components">组件</ZBreadcrumbItem>
          <ZBreadcrumbItem>面包屑</ZBreadcrumbItem>
        </ZBreadcrumb>
      </div>
    </section>

    <!-- 激活状态 -->
    <section>
      <h2 class="text-lg font-medium mb-4">激活状态</h2>
      <div class="flex gap-6">
        <ZBreadcrumb>
          <ZBreadcrumbItem href="/">首页</ZBreadcrumbItem>
          <ZBreadcrumbItem href="/components">组件</ZBreadcrumbItem>
          <ZBreadcrumbItem active>面包屑</ZBreadcrumbItem>
        </ZBreadcrumb>
      </div>
    </section>

    <!-- 自定义样式 -->
    <section>
      <h2 class="text-lg font-medium mb-4">自定义样式</h2>
      <div class="flex gap-6">
        <ZBreadcrumb :pt="{ root: 'bg-gray-100 p-3 rounded' }">
          <ZBreadcrumbItem href="/" :pt="{ root: 'text-blue-500' }">
            首页
          </ZBreadcrumbItem>
          <ZBreadcrumbItem href="/components">组件</ZBreadcrumbItem>
          <ZBreadcrumbItem>面包屑</ZBreadcrumbItem>
        </ZBreadcrumb>
      </div>
    </section>

    <!-- 无样式模式 -->
    <section>
      <h2 class="text-lg font-medium mb-4">无样式模式</h2>
      <div class="flex gap-6">
        <ZBreadcrumb
          unstyled
          :pt="{
            root: 'flex p-2 bg-gray-50 rounded',
            list: 'flex items-center',
          }"
        >
          <ZBreadcrumbItem
            href="/"
            unstyled
            :pt="{
              root: 'text-blue-600 hover:underline',
              separator: 'mx-2 text-gray-400',
            }"
          >
            首页
          </ZBreadcrumbItem>
          <ZBreadcrumbItem
            href="/components"
            unstyled
            :pt="{
              root: 'text-blue-600 hover:underline',
              separator: 'mx-2 text-gray-400',
            }"
          >
            组件
          </ZBreadcrumbItem>
          <ZBreadcrumbItem
            unstyled
            :pt="{ root: 'text-gray-800 font-medium', content: 'font-medium' }"
          >
            面包屑
          </ZBreadcrumbItem>
        </ZBreadcrumb>
      </div>
    </section>

    <!-- 自定义分隔符插槽 -->
    <section>
      <h2 class="text-lg font-medium mb-4">自定义分隔符插槽</h2>
      <div class="flex gap-6">
        <ZBreadcrumb>
          <ZBreadcrumbItem href="/">
            首页
            <template #separator>
              <span class="text-red-500 mx-2">•</span>
            </template>
          </ZBreadcrumbItem>
          <ZBreadcrumbItem href="/components">
            组件
            <template #separator>
              <span class="text-red-500 mx-2">•</span>
            </template>
          </ZBreadcrumbItem>
          <ZBreadcrumbItem>面包屑</ZBreadcrumbItem>
        </ZBreadcrumb>
      </div>
    </section>
  </div>
</template>
