<script setup lang="ts">
import { ref } from 'vue'
import { ZDropdown, ZButton, ZDropdownItem } from '@zxy-ui/vue'

const selectedValue = ref(null)

// 示例选项
const defaultOptions = [
  { value: 'option1', label: '选项一' },
  { value: 'option2', label: '选项二' },
  { value: 'option3', label: '选项三' },
  { value: 'option4', label: '选项四' },
]

// 带图标的选项
const iconOptions = [
  { value: 'copy', label: '复制', icon: '📋' },
  { value: 'edit', label: '编辑', icon: '✏️' },
  { value: 'delete', label: '删除', icon: '🗑️' },
  { divider: true },
  { value: 'download', label: '下载', icon: '📥' },
]

// 带分组的选项
const actionOptions = [
  { value: 'view', label: '查看详情', icon: '👁️' },
  { value: 'edit', label: '编辑', icon: '✏️' },
  { divider: true },
  { value: 'share', label: '分享', icon: '🔗' },
  { value: 'export', label: '导出', icon: '📤' },
  { divider: true },
  { value: 'delete', label: '删除', icon: '🗑️' },
]

const visibleDropdown = ref(false)
const handleSelect = (value) => {
  selectedValue.value = value
  alert(`选择了: ${value}`)
}
</script>

<template>
  <div class="space-y-8 p-4">
    <section>
      <h2 class="text-xl font-bold mb-4">基础用法</h2>
      <ZDropdown :options="defaultOptions" @select="handleSelect">
        <template #trigger>
          <ZButton>点击显示下拉菜单</ZButton>
        </template>
      </ZDropdown>
      <div class="mt-2" v-if="selectedValue">当前选择: {{ selectedValue }}</div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同触发方式</h2>
      <div class="space-y-4">
        <div>
          <p class="mb-2">点击触发 (默认)</p>
          <ZDropdown :options="defaultOptions" trigger="click">
            <template #trigger>
              <ZButton>点击触发</ZButton>
            </template>
          </ZDropdown>
        </div>
        <div>
          <p class="mb-2">悬停触发</p>
          <ZDropdown :options="defaultOptions" trigger="hover">
            <template #trigger>
              <ZButton>悬停触发</ZButton>
            </template>
          </ZDropdown>
        </div>
        <div>
          <p class="mb-2">聚焦触发</p>
          <ZDropdown :options="defaultOptions" trigger="focus">
            <template #trigger>
              <ZButton>聚焦触发</ZButton>
            </template>
          </ZDropdown>
        </div>
        <div>
          <p class="mb-2">手动控制</p>
          <div class="flex items-center gap-4">
            <ZDropdown
              :options="defaultOptions"
              trigger="manual"
              v-model:visible="visibleDropdown"
            >
              <template #trigger>
                <ZButton>下拉菜单</ZButton>
              </template>
            </ZDropdown>
            <ZButton @click="visibleDropdown = !visibleDropdown">
              {{ visibleDropdown ? '关闭' : '打开' }}菜单
            </ZButton>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同位置</h2>
      <div class="grid grid-cols-3 gap-4">
        <div>
          <ZDropdown :options="defaultOptions" placement="top">
            <template #trigger>
              <ZButton>顶部</ZButton>
            </template>
          </ZDropdown>
        </div>
        <div>
          <ZDropdown :options="defaultOptions" placement="top-start">
            <template #trigger>
              <ZButton>顶部左对齐</ZButton>
            </template>
          </ZDropdown>
        </div>
        <div>
          <ZDropdown :options="defaultOptions" placement="top-end">
            <template #trigger>
              <ZButton>顶部右对齐</ZButton>
            </template>
          </ZDropdown>
        </div>
        <div>
          <ZDropdown :options="defaultOptions" placement="bottom">
            <template #trigger>
              <ZButton>底部</ZButton>
            </template>
          </ZDropdown>
        </div>
        <div>
          <ZDropdown :options="defaultOptions" placement="bottom-start">
            <template #trigger>
              <ZButton>底部左对齐</ZButton>
            </template>
          </ZDropdown>
        </div>
        <div>
          <ZDropdown :options="defaultOptions" placement="bottom-end">
            <template #trigger>
              <ZButton>底部右对齐</ZButton>
            </template>
          </ZDropdown>
        </div>
        <div>
          <ZDropdown :options="defaultOptions" placement="left">
            <template #trigger>
              <ZButton>左侧</ZButton>
            </template>
          </ZDropdown>
        </div>
        <div>
          <ZDropdown :options="defaultOptions" placement="right">
            <template #trigger>
              <ZButton>右侧</ZButton>
            </template>
          </ZDropdown>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">禁用状态</h2>
      <ZDropdown :options="defaultOptions" disabled>
        <template #trigger>
          <ZButton>禁用的下拉菜单</ZButton>
        </template>
      </ZDropdown>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">带图标的选项</h2>
      <ZDropdown :options="iconOptions">
        <template #trigger>
          <ZButton>操作</ZButton>
        </template>
      </ZDropdown>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">带分割线的选项</h2>
      <ZDropdown :options="actionOptions">
        <template #trigger>
          <ZButton>更多操作</ZButton>
        </template>
      </ZDropdown>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">显示箭头</h2>
      <ZDropdown :options="defaultOptions" arrow>
        <template #trigger>
          <ZButton>带箭头的下拉菜单</ZButton>
        </template>
      </ZDropdown>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">自定义内容</h2>
      <ZDropdown>
        <template #trigger>
          <ZButton>自定义内容</ZButton>
        </template>
        <div class="p-4 w-64">
          <h3 class="text-lg font-medium mb-2">自定义下拉内容</h3>
          <p class="text-sm text-gray-500 mb-4">
            可以插入任意内容，如表单、图片等
          </p>
          <div class="flex justify-end">
            <ZButton size="small">确认</ZButton>
          </div>
        </div>
      </ZDropdown>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">自定义样式 (PT)</h2>
      <ZDropdown
        :options="defaultOptions"
        :pt="{
          content: 'bg-purple-50 border border-purple-200 shadow-lg',
          menu: 'py-2',
          menuItem: 'px-4 py-2 hover:bg-purple-100 hover:text-purple-900',
          menuItemSelected: 'bg-purple-200 text-purple-800',
        }"
      >
        <template #trigger>
          <ZButton>自定义样式</ZButton>
        </template>
      </ZDropdown>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">无样式模式</h2>
      <ZDropdown
        :options="iconOptions"
        unstyled
        :pt="{
          root: 'relative',
          trigger: 'inline-flex items-center cursor-pointer',
          content:
            'absolute z-10 mt-2 min-w-[160px] rounded-xl bg-white shadow-xl border border-gray-100',
          menu: 'py-2',
          menuItem:
            'flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700',
          menuItemIcon: 'mr-2 text-lg',
          menuDivider: 'my-1 h-px bg-gray-100',
        }"
      >
        <template #trigger>
          <div
            class="px-4 py-2 rounded-lg border border-gray-300 flex items-center gap-2"
          >
            <span>自定义触发器</span>
            <span>▼</span>
          </div>
        </template>
      </ZDropdown>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">使用DropdownItem子组件</h2>
      <ZDropdown>
        <template #trigger>
          <ZButton>使用DropdownItem</ZButton>
        </template>
        <ZDropdownItem value="item1" label="使用DropdownItem" />
        <ZDropdownItem value="item2" label="自定义图标" icon="🌟" />
        <ZDropdownItem divider />
        <ZDropdownItem value="item3" icon="📝">
          <span class="text-green-600">自定义内容</span>
        </ZDropdownItem>
        <ZDropdownItem value="item4" disabled label="禁用选项" />
      </ZDropdown>
    </section>
  </div>
</template>
