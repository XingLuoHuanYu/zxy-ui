<script setup lang="ts">
import { ZKbd } from '@zxy-ui/vue'
</script>

<template>
  <div class="flex flex-col gap-8">
    <!-- 基本用法 -->
    <section>
      <h2 class="text-lg font-medium mb-4">基本用法</h2>
      <div class="flex items-center gap-2">
        <ZKbd>Ctrl</ZKbd>
        <span>+</span>
        <ZKbd>C</ZKbd>
      </div>
    </section>

    <!-- 不同尺寸 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不同尺寸</h2>
      <div class="flex items-center gap-4">
        <ZKbd size="xs">A</ZKbd>
        <ZKbd size="sm">B</ZKbd>
        <ZKbd size="md">C</ZKbd>
        <ZKbd size="lg">D</ZKbd>
      </div>
    </section>

    <!-- 常用组合 -->
    <section>
      <h2 class="text-lg font-medium mb-4">常用组合</h2>
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-2">
          <ZKbd>Ctrl</ZKbd>
          <span>+</span>
          <ZKbd>Shift</ZKbd>
          <span>+</span>
          <ZKbd>F</ZKbd>
        </div>
        <div class="flex items-center gap-2">
          <ZKbd size="sm">Alt</ZKbd>
          <span>+</span>
          <ZKbd size="sm">Tab</ZKbd>
        </div>
        <div class="flex items-center gap-2">
          <ZKbd>Esc</ZKbd>
          <span class="text-sm text-gray-500">退出</span>
        </div>
      </div>
    </section>
  </div>
</template>
