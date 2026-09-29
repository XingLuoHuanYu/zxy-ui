<script setup lang="ts">
import { ZKbd } from '@zxy-ui/vue'
</script>

<template>
  <div class="space-y-8 p-4">
    <section>
      <h2 class="text-xl font-bold mb-4">基础用法</h2>
      <div class="flex flex-wrap gap-4">
        <ZKbd>Ctrl</ZKbd>
        <ZKbd>Alt</ZKbd>
        <ZKbd>Shift</ZKbd>
        <ZKbd>Enter</ZKbd>
        <ZKbd>Tab</ZKbd>
        <ZKbd>Esc</ZKbd>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同尺寸</h2>
      <div class="flex flex-wrap items-center gap-4">
        <div>
          <p class="mb-2">超小尺寸</p>
          <ZKbd size="xs">Ctrl</ZKbd>
        </div>
        <div>
          <p class="mb-2">小尺寸</p>
          <ZKbd size="sm">Ctrl</ZKbd>
        </div>
        <div>
          <p class="mb-2">中等尺寸</p>
          <ZKbd size="md">Ctrl</ZKbd>
        </div>
        <div>
          <p class="mb-2">大尺寸</p>
          <ZKbd size="lg">Ctrl</ZKbd>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">组合键</h2>
      <div class="flex flex-wrap gap-8">
        <div class="flex items-center gap-2">
          <ZKbd>Ctrl</ZKbd>
          <span>+</span>
          <ZKbd>C</ZKbd>
        </div>
        <div class="flex items-center gap-2">
          <ZKbd>Ctrl</ZKbd>
          <span>+</span>
          <ZKbd>Shift</ZKbd>
          <span>+</span>
          <ZKbd>R</ZKbd>
        </div>
        <div class="flex items-center gap-2">
          <ZKbd>Alt</ZKbd>
          <span>+</span>
          <ZKbd>Tab</ZKbd>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">自定义样式 (PT)</h2>
      <div class="flex flex-wrap gap-4">
        <ZKbd
          :pt="{
            root: 'bg-purple-100 text-purple-700 border-purple-300 shadow-purple-200',
          }"
        >
          Alt
        </ZKbd>
        <ZKbd
          :pt="{
            root: 'bg-green-100 text-green-700 border-green-300 shadow-green-200',
          }"
        >
          Shift
        </ZKbd>
        <ZKbd
          :pt="{
            root: 'bg-blue-100 text-blue-700 border-blue-300 shadow-blue-200',
          }"
        >
          Enter
        </ZKbd>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">无样式模式</h2>
      <div class="flex flex-wrap gap-4">
        <ZKbd
          unstyled
          :pt="{
            root: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded-md text-sm font-mono shadow-md',
          }"
        >
          Tab
        </ZKbd>
        <ZKbd
          unstyled
          :pt="{
            root: 'bg-gray-800 text-white px-3 py-1 rounded-lg text-sm font-mono shadow-lg border border-gray-700',
          }"
        >
          Esc
        </ZKbd>
        <ZKbd
          unstyled
          :pt="{
            root: 'bg-white text-gray-800 px-2 py-1 rounded-md text-sm font-mono shadow-md border-2 border-gray-300',
          }"
        >
          Space
        </ZKbd>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">实际应用示例</h2>
      <div class="space-y-4">
        <p>
          按下
          <ZKbd>Ctrl</ZKbd>
          <span>+</span>
          <ZKbd>S</ZKbd>
          保存文件
        </p>
        <p>
          按下
          <ZKbd>Ctrl</ZKbd>
          <span>+</span>
          <ZKbd>Shift</ZKbd>
          <span>+</span>
          <ZKbd>P</ZKbd>
          打开命令面板
        </p>
        <p>
          按下
          <ZKbd
            unstyled
            :pt="{
              root: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded-md text-sm font-mono shadow-md',
            }"
          >
            Alt
          </ZKbd>
          <span>+</span>
          <ZKbd
            unstyled
            :pt="{
              root: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded-md text-sm font-mono shadow-md',
            }"
          >
            F4
          </ZKbd>
          关闭窗口
        </p>
      </div>
    </section>
  </div>
</template>
