<script setup lang="ts">
import { ref, h } from 'vue'
import { ZChip } from '@zxy-ui/vue'

const selected = ref(false)
</script>

<template>
  <div class="space-y-8 p-4">
    <section>
      <h2 class="text-xl font-bold mb-4">基础用法</h2>
      <div class="flex flex-wrap gap-2">
        <ZChip>基础标签</ZChip>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同变体</h2>
      <div class="flex flex-wrap gap-2">
        <ZChip variant="solid">实心</ZChip>
        <ZChip variant="bordered">边框</ZChip>
        <ZChip variant="light">轻量</ZChip>
        <ZChip variant="flat">扁平</ZChip>
        <ZChip variant="faded">淡化</ZChip>
        <ZChip variant="shadow">阴影</ZChip>
        <ZChip variant="dot">圆点</ZChip>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同颜色</h2>
      <div class="flex flex-wrap gap-2">
        <ZChip color="default">默认</ZChip>
        <ZChip color="primary">主色</ZChip>
        <ZChip color="secondary">次要</ZChip>
        <ZChip color="success">成功</ZChip>
        <ZChip color="warning">警告</ZChip>
        <ZChip color="danger">危险</ZChip>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同尺寸</h2>
      <div class="flex flex-wrap gap-2 items-center">
        <ZChip size="sm">小尺寸</ZChip>
        <ZChip size="md">中等尺寸</ZChip>
        <ZChip size="lg">大尺寸</ZChip>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同圆角</h2>
      <div class="flex flex-wrap gap-2">
        <ZChip radius="none">无圆角</ZChip>
        <ZChip radius="sm">小圆角</ZChip>
        <ZChip radius="md">中等圆角</ZChip>
        <ZChip radius="lg">大圆角</ZChip>
        <ZChip radius="full">全圆角</ZChip>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">可选择的标签</h2>
      <div class="flex flex-wrap gap-2">
        <ZChip selectable v-model="selected">
          {{ selected ? '已选中' : '点击选择' }}
        </ZChip>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">可关闭的标签</h2>
      <div class="flex flex-wrap gap-2">
        <ZChip closable>可关闭标签</ZChip>
        <ZChip closable variant="bordered" color="primary">可关闭主色标签</ZChip>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">禁用状态</h2>
      <div class="flex flex-wrap gap-2">
        <ZChip disabled>禁用标签</ZChip>
        <ZChip disabled selectable>禁用可选择</ZChip>
        <ZChip disabled closable>禁用可关闭</ZChip>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">带内容的标签</h2>
      <div class="flex flex-wrap gap-2">
        <ZChip
          :avatar="
            h(
              'div',
              {
                class:
                  'w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white',
              },
              'A',
            )
          "
        >
          带头像
        </ZChip>
        <ZChip :startContent="h('div', { class: 'text-blue-500' }, '🔍')">
          带起始内容
        </ZChip>
        <ZChip :endContent="h('div', { class: 'text-blue-500' }, '✓')">
          带结束内容
        </ZChip>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">自定义样式 (PT)</h2>
      <div class="flex flex-wrap gap-2">
        <ZChip
          :pt="{
            root: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white',
          }"
        >
          渐变背景
        </ZChip>
        <ZChip
          closable
          :pt="{
            root: 'bg-green-100 text-green-800 border border-green-300',
            closeButton: 'text-green-700 hover:bg-green-200',
          }"
        >
          自定义关闭按钮
        </ZChip>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">无样式模式</h2>
      <div class="flex flex-wrap gap-2">
        <ZChip
          unstyled
          :pt="{
            root: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full inline-flex items-center',
            content: 'mx-1',
          }"
        >
          无样式模式
        </ZChip>
        <ZChip
          unstyled
          closable
          :pt="{
            root: 'bg-yellow-100 text-yellow-800 border border-yellow-300 px-3 py-1 rounded-md inline-flex items-center',
            content: 'mx-1',
            closeButton:
              'ml-1 text-yellow-700 hover:bg-yellow-200 rounded-full p-1',
          }"
        >
          自定义关闭
        </ZChip>
        <ZChip
          unstyled
          :startContent="h('div', { class: 'mr-1 text-purple-700' }, '🔔')"
          :pt="{
            root: 'bg-purple-100 text-purple-800 px-3 py-1 rounded-md inline-flex items-center',
            content: 'mx-1',
          }"
        >
          带图标
        </ZChip>
      </div>
    </section>
  </div>
</template>
