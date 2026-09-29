<script setup lang="ts">
import { ZTabs, ZTabItem } from '@zxy-ui/vue'
import '@zxy-ui/vue/style'
import { ref } from 'vue'

// 控制当前激活的标签页
const activeTab = ref('tab1')

// 处理标签页变化
const handleTabChange = (value: string | number) => {
  console.log('当前选中的标签:', value)
  activeTab.value = value as string
}
</script>

<template>
  <div class="tabs-examples space-y-8">
    <!-- 基础用法 -->
    <section>
      <h2 class="text-lg font-medium mb-3">基础用法</h2>
      <ZTabs v-model="activeTab" @change="handleTabChange">
        <ZTabItem name="tab1" title="标签1">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>这是标签1的内容</p>
            <p class="mt-2">当前选中的标签: {{ activeTab }}</p>
          </div>
        </ZTabItem>
        <ZTabItem name="tab2" title="标签2">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>这是标签2的内容</p>
            <p class="mt-2">当前选中的标签: {{ activeTab }}</p>
          </div>
        </ZTabItem>
        <ZTabItem name="tab3" title="标签3">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>这是标签3的内容</p>
            <p class="mt-2">当前选中的标签: {{ activeTab }}</p>
          </div>
        </ZTabItem>
      </ZTabs>
    </section>

    <!-- 不同变体 -->
    <section>
      <h2 class="text-lg font-medium mb-3">不同变体</h2>

      <h3 class="text-sm font-medium mb-2">默认样式 (default)</h3>
      <ZTabs variant="default">
        <ZTabItem name="var1" title="标签1">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>默认样式标签内容</p>
          </div>
        </ZTabItem>
        <ZTabItem name="var2" title="标签2">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>默认样式标签内容</p>
          </div>
        </ZTabItem>
      </ZTabs>

      <h3 class="text-sm font-medium mb-2 mt-4">胶囊样式 (pills)</h3>
      <ZTabs variant="pills">
        <ZTabItem name="pill1" title="标签1">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>胶囊样式标签内容</p>
          </div>
        </ZTabItem>
        <ZTabItem name="pill2" title="标签2">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>胶囊样式标签内容</p>
          </div>
        </ZTabItem>
      </ZTabs>

      <h3 class="text-sm font-medium mb-2 mt-4">下划线样式 (underline)</h3>
      <ZTabs variant="underline">
        <ZTabItem name="under1" title="标签1">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>下划线样式标签内容</p>
          </div>
        </ZTabItem>
        <ZTabItem name="under2" title="标签2">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>下划线样式标签内容</p>
          </div>
        </ZTabItem>
      </ZTabs>
    </section>

    <!-- 不同尺寸 -->
    <section>
      <h2 class="text-lg font-medium mb-3">不同尺寸</h2>

      <h3 class="text-sm font-medium mb-2">小尺寸 (sm)</h3>
      <ZTabs size="sm">
        <ZTabItem name="sm1" title="标签1">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>小尺寸标签内容</p>
          </div>
        </ZTabItem>
        <ZTabItem name="sm2" title="标签2">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>小尺寸标签内容</p>
          </div>
        </ZTabItem>
      </ZTabs>

      <h3 class="text-sm font-medium mb-2 mt-4">中尺寸 (md) - 默认</h3>
      <ZTabs size="md">
        <ZTabItem name="md1" title="标签1">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>中尺寸标签内容</p>
          </div>
        </ZTabItem>
        <ZTabItem name="md2" title="标签2">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>中尺寸标签内容</p>
          </div>
        </ZTabItem>
      </ZTabs>

      <h3 class="text-sm font-medium mb-2 mt-4">大尺寸 (lg)</h3>
      <ZTabs size="lg">
        <ZTabItem name="lg1" title="标签1">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>大尺寸标签内容</p>
          </div>
        </ZTabItem>
        <ZTabItem name="lg2" title="标签2">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>大尺寸标签内容</p>
          </div>
        </ZTabItem>
      </ZTabs>
    </section>

    <!-- 不同位置 -->
    <section>
      <h2 class="text-lg font-medium mb-3">不同位置</h2>

      <h3 class="text-sm font-medium mb-2">顶部位置 (top) - 默认</h3>
      <ZTabs placement="top">
        <ZTabItem name="top1" title="标签1">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>顶部位置标签内容</p>
          </div>
        </ZTabItem>
        <ZTabItem name="top2" title="标签2">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>顶部位置标签内容</p>
          </div>
        </ZTabItem>
      </ZTabs>

      <h3 class="text-sm font-medium mb-2 mt-4">底部位置 (bottom)</h3>
      <ZTabs placement="bottom">
        <ZTabItem name="bottom1" title="标签1">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>底部位置标签内容</p>
          </div>
        </ZTabItem>
        <ZTabItem name="bottom2" title="标签2">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>底部位置标签内容</p>
          </div>
        </ZTabItem>
      </ZTabs>

      <h3 class="text-sm font-medium mb-2 mt-4">左侧位置 (left)</h3>
      <ZTabs placement="left">
        <ZTabItem name="left1" title="标签1">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>左侧位置标签内容</p>
          </div>
        </ZTabItem>
        <ZTabItem name="left2" title="标签2">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>左侧位置标签内容</p>
          </div>
        </ZTabItem>
      </ZTabs>

      <h3 class="text-sm font-medium mb-2 mt-4">右侧位置 (right)</h3>
      <ZTabs placement="right">
        <ZTabItem name="right1" title="标签1">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>右侧位置标签内容</p>
          </div>
        </ZTabItem>
        <ZTabItem name="right2" title="标签2">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>右侧位置标签内容</p>
          </div>
        </ZTabItem>
      </ZTabs>
    </section>

    <!-- 禁用状态 -->
    <section>
      <h2 class="text-lg font-medium mb-3">禁用状态</h2>

      <h3 class="text-sm font-medium mb-2">禁用单个标签</h3>
      <ZTabs>
        <ZTabItem name="dis1" title="标签1">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>这是标签1的内容</p>
          </div>
        </ZTabItem>
        <ZTabItem name="dis2" title="标签2" :disabled="true">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>这是标签2的内容（已禁用）</p>
          </div>
        </ZTabItem>
        <ZTabItem name="dis3" title="标签3">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>这是标签3的内容</p>
          </div>
        </ZTabItem>
      </ZTabs>

      <h3 class="text-sm font-medium mb-2 mt-4">禁用整个标签组件</h3>
      <ZTabs :disabled="true">
        <ZTabItem name="all-dis1" title="标签1">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>这是标签1的内容（整个标签组已禁用）</p>
          </div>
        </ZTabItem>
        <ZTabItem name="all-dis2" title="标签2">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>这是标签2的内容（整个标签组已禁用）</p>
          </div>
        </ZTabItem>
      </ZTabs>
    </section>

    <!-- 全宽模式 -->
    <section>
      <h2 class="text-lg font-medium mb-3">全宽模式</h2>
      <ZTabs :fullWidth="true">
        <ZTabItem name="full1" title="标签1">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>全宽模式标签内容</p>
          </div>
        </ZTabItem>
        <ZTabItem name="full2" title="标签2">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>全宽模式标签内容</p>
          </div>
        </ZTabItem>
        <ZTabItem name="full3" title="标签3">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>全宽模式标签内容</p>
          </div>
        </ZTabItem>
      </ZTabs>
    </section>
  </div>
</template>

<style scoped>
.tabs-examples {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}
</style>
