<script setup lang="ts">
import { ZButton, ZProTable } from '@zxy-ui/vue'
import { computed, reactive, ref } from 'vue'

interface MemberRow {
  name: string
  level: string
  status: string
  remark: string
  createdAt: string
}

const columns = [
  { key: 'name', title: '套餐名称' },
  { key: 'level', title: '会员图标' },
  { key: 'status', title: '是否启用', align: 'center' as const },
  { key: 'remark', title: '备注' },
  { key: 'createdAt', title: '创建时间', align: 'right' as const },
]

const allRows = ref<MemberRow[]>([
  { name: 'VIP会员', level: 'VIP', status: '启用', remark: '天天', createdAt: '2026-08-24 20:30:39' },
  { name: '月卡会员', level: '月卡', status: '启用', remark: '-', createdAt: '2026-06-12 09:12:00' },
  { name: '年卡会员', level: '年卡', status: '停用', remark: '限时折扣', createdAt: '2026-03-01 14:05:22' },
  { name: '钻石会员', level: '钻石', status: '启用', remark: '含专属客服', createdAt: '2025-12-18 11:40:10' },
  { name: '体验会员', level: '体验', status: '停用', remark: '-', createdAt: '2025-11-02 16:28:45' },
  { name: '白银会员', level: '白银', status: '启用', remark: '-', createdAt: '2025-10-20 10:00:00' },
  { name: '黄金会员', level: '黄金', status: '启用', remark: '热销', createdAt: '2025-09-15 08:30:30' },
  { name: '铂金会员', level: '铂金', status: '停用', remark: '-', createdAt: '2025-08-08 18:22:18' },
  { name: '青铜会员', level: '青铜', status: '启用', remark: '-', createdAt: '2025-07-07 12:12:12' },
  { name: '至尊会员', level: '至尊', status: '启用', remark: '限量', createdAt: '2025-06-06 06:06:06' },
  { name: '普通会员', level: '普通', status: '启用', remark: '-', createdAt: '2025-05-05 05:05:05' },
  { name: '学生会员', level: '学生', status: '停用', remark: '半价', createdAt: '2025-04-04 04:04:04' },
])

const searchFields = [
  { key: 'name', label: '套餐名称', type: 'input' as const, placeholder: '请输入套餐名称' },
  { key: 'level', label: '会员图标', type: 'select' as const, placeholder: '请选择会员图标',
    options: ['VIP', '月卡', '年卡', '钻石', '黄金'].map((v) => ({ label: v, value: v })) },
]

const state = reactive({ keyword: '', selected: [] as MemberRow[] })
const message = ref('')

const onSelectionChange = (rows: MemberRow[]) => {
  state.selected = rows
}

const addRow = () => {
  allRows.value.unshift({
    name: `新套餐 ${allRows.value.length + 1}`,
    level: '普通',
    status: '停用',
    remark: '通过工具栏新增',
    createdAt: new Date().toLocaleString('zh-CN', { hour12: false }),
  })
  message.value = '已新增一条数据'
}

const batchDelete = () => {
  if (!state.selected.length) {
    message.value = '请先勾选要删除的数据'
    return
  }
  allRows.value = allRows.value.filter((row) => !state.selected.includes(row))
  state.selected = []
  message.value = '批量删除成功'
}

const onExport = (rows: any[]) => {
  message.value = `导出 ${rows.length} 条数据（触发 export 事件）`
}

const selectedCount = computed(() => state.selected.length)
</script>

<template>
  <div class="space-y-8">
    <section class="space-y-3">
      <h3 class="text-lg font-medium">搜索 + 表格 + 分页（本地模式）</h3>
      <ZProTable
        :columns="columns"
        :data="allRows"
        :search-fields="searchFields"
        selectable
        exportable
        stripe
        @selection-change="onSelectionChange"
        @export="onExport"
      >
        <template #toolbar>
          <ZButton size="sm" @click="addRow">+ 新增</ZButton>
          <ZButton size="sm" variant="danger" @click="batchDelete">
            批量删除
          </ZButton>
        </template>
        <template #level="{ row }">
          <span class="inline-flex rounded bg-blue-50 px-2 py-0.5 text-xs text-blue-600 dark:bg-blue-900/40 dark:text-blue-300">
            {{ row.level }}
          </span>
        </template>
        <template #status="{ row }">
          <span
            :class="row.status === '启用'
              ? 'text-green-600 dark:text-green-400'
              : 'text-gray-400 dark:text-gray-500'"
          >
            {{ row.status }}
          </span>
        </template>
      </ZProTable>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <template v-if="message">{{ message }} · </template>
        当前选中 {{ selectedCount }} 行
      </p>
    </section>
  </div>
</template>
