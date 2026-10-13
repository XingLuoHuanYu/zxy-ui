<template>
  <div :class="classes.root">
    <!-- 搜索区：上面是输入框 -->
    <div v-if="searchFields.length" :class="classes.search">
      <div
        v-for="field in searchFields"
        :key="field.key"
        class="flex items-center gap-2"
      >
        <label :class="classes.searchLabel">
          {{ field.label }}
        </label>
        <ZSelect
          v-if="field.type === 'select'"
          v-model="searchValues[field.key]"
          :options="(field.options ?? []) as any"
          :placeholder="field.placeholder ?? `请选择${field.label}`"
          clearable
          :style="{ width: `${field.width ?? 180}px` }"
          @keydown.enter="handleSearch"
        />
        <ZInput
          v-else
          v-model="searchValues[field.key]"
          :placeholder="field.placeholder ?? `请输入${field.label}`"
          clearable
          :style="{ width: `${field.width ?? 180}px` }"
          @keydown.enter="handleSearch"
        />
      </div>

      <div class="ml-auto flex items-center gap-2">
        <ZButton size="sm" variant="primary" :loading="loading" @click="handleSearch">
          搜索
        </ZButton>
        <ZButton size="sm" variant="outline" @click="handleReset">重置</ZButton>
      </div>

      <!-- 工具栏：新增 / 导出 / 批量删除等 -->
      <div
        v-if="$slots.toolbar || exportable"
        :class="classes.toolbar"
      >
        <slot
          name="toolbar"
          :selected-rows="selectedRows"
          :search-values="searchValues"
        />
        <ZButton v-if="exportable" size="sm" variant="success" @click="handleExport">
          导出
        </ZButton>
      </div>
    </div>

    <!-- 表格 -->
    <div class="overflow-x-auto">
      <table :class="classes.table">
        <thead :class="classes.thead">
          <tr>
            <th v-if="selectable" :class="classes.th" style="width: 44px">
              <input
                type="checkbox"
                :class="classes.checkbox"
                :checked="isAllSelected"
                :indeterminate="isIndeterminate"
                aria-label="全选"
                @change="toggleAll"
              />
            </th>
            <th
              v-for="col in columns"
              :key="col.key"
              :class="[classes.th, getAlignClass(col.align)]"
              :style="{
                width:
                  typeof col.width === 'number' ? `${col.width}px` : col.width,
              }"
            >
              {{ col.title }}
            </th>
          </tr>
        </thead>
        <tbody :class="classes.tbody">
          <tr
            v-for="(row, rowIndex) in pageData"
            :key="rowIndex"
            :class="classes.tr"
          >
            <td v-if="selectable" :class="classes.td">
              <input
                type="checkbox"
                :class="classes.checkbox"
                :checked="isSelected(row)"
                @change="toggleRow(row)"
              />
            </td>
            <td
              v-for="col in columns"
              :key="col.key"
              :class="[classes.td, getAlignClass(col.align)]"
            >
              <slot :name="col.key" :row="row" :index="rowIndex">
                {{ row[col.key] }}
              </slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="loading" :class="classes.empty">
      <span class="text-sm">加载中...</span>
    </div>
    <div v-else-if="!pageData.length" :class="classes.empty">
      <slot name="empty">
        <span class="text-sm">{{ emptyText }}</span>
      </slot>
    </div>

    <!-- 分页：下面是表格分页条 -->
    <div v-if="pagination && total" :class="classes.footer">
      <div>
        共 {{ total }} 条
        <template v-if="!remote">
          · 第 {{ currentPage }} / {{ totalPages }} 页
        </template>
      </div>
      <div class="flex items-center gap-2">
        <ZSelect
          v-model="pageSizeModel"
          :options="pageSizeOptions"
          :show-label="false"
          size="small"
          style="width: 110px"
          aria-label="每页条数"
        />
        <ZButton
          size="sm"
          variant="outline"
          :disabled="currentPage <= 1"
          @click="goToPage(currentPage - 1)"
        >
          上一页
        </ZButton>
        <button
          v-for="p in visiblePages"
          :key="p"
          type="button"
          :class="p === currentPage ? classes.pageButtonActive : classes.pageButton"
          @click="goToPage(p)"
        >
          {{ p }}
        </button>
        <ZButton
          size="sm"
          variant="outline"
          :disabled="currentPage >= totalPages"
          @click="goToPage(currentPage + 1)"
        >
          下一页
        </ZButton>
        <span class="ml-2 flex items-center gap-1">
          前往
          <input
            v-model="jumpPage"
            type="number"
            min="1"
            :max="totalPages"
            class="w-14 rounded-lg border border-gray-200 bg-white px-2 py-1 text-center text-sm outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            @keydown.enter="handleJump"
            @blur="handleJump"
          />
          页
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'ZProTable' })
import { computed, reactive, ref, watch } from 'vue'
import { ZButton } from '../../Button'
import { ZInput } from '../../Input'
import { ZSelect } from '../../Select'
import { proTableVariants } from './index.variants'
import type {
  ProTableEmits,
  ProTableProps,
  ProTableSearchField,
} from './type'

const props = withDefaults(defineProps<ProTableProps>(), {
  data: () => [],
  columns: () => [],
  searchFields: () => [],
  remote: false,
  loading: false,
  selectable: false,
  exportable: false,
  pagination: true,
  pageSize: 10,
  pageSizes: () => [10, 20, 50, 100],
  initialPage: 1,
  emptyText: '暂无数据',
  stripe: false,
  border: false,
  dense: false,
})

const emit = defineEmits<ProTableEmits>()

const classes = computed(() => {
  const {
    root,
    search,
    searchLabel,
    toolbar,
    table,
    thead,
    th,
    tbody,
    tr,
    td,
    empty,
    footer,
    pageButton,
    pageButtonActive,
    checkbox,
  } = proTableVariants({
    stripe: props.stripe,
    border: props.border,
    dense: props.dense,
  })
  return {
    root: root(),
    search: search(),
    searchLabel: searchLabel(),
    toolbar: toolbar(),
    table: table(),
    thead: thead(),
    th: th(),
    tbody: tbody(),
    tr: tr(),
    td: td(),
    empty: empty(),
    footer: footer(),
    pageButton: pageButton(),
    pageButtonActive: pageButtonActive(),
    checkbox: checkbox(),
  }
})

/* ---------------- 搜索 ---------------- */
const buildInitialValues = () => {
  const values: Record<string, any> = {}
  for (const field of props.searchFields) {
    values[field.key] = field.type === 'select' ? '' : ''
  }
  return values
}

const searchValues = reactive<Record<string, any>>(buildInitialValues())
const appliedValues = ref<Record<string, any>>({})

const handleSearch = () => {
  appliedValues.value = { ...searchValues }
  if (props.remote) {
    emit('search', { ...appliedValues.value })
    currentPage.value = 1
    emit('page-change', { page: 1, pageSize: props.pageSize })
  }
}

const handleReset = () => {
  for (const key of Object.keys(searchValues)) {
    searchValues[key] = ''
  }
  appliedValues.value = {}
  emit('reset')
  if (props.remote) {
    emit('search', {})
    currentPage.value = 1
    emit('page-change', { page: 1, pageSize: props.pageSize })
  }
}

/* ---------------- 数据（过滤 / 分页） ---------------- */
const currentPage = ref(props.initialPage)
const pageSizeModel = ref(props.pageSize)

const pageSizeOptions = computed(() =>
  props.pageSizes.map((size) => ({
    value: size,
    label: `${size}条/页`,
  })),
)

const total = computed(() => {
  if (props.remote) {
    return (props.data ?? []).length
  }
  return filteredData.value.length
})

const totalPages = computed(() => Math.max(1, Math.ceil(total.value / pageSizeModel.value)))

const filteredData = computed<any[]>(() => {
  const rows = (props.data ?? []) as any[]
  if (props.remote) return rows

  const entries = Object.entries(appliedValues.value).filter(
    ([, value]) => value !== '' && value !== null && value !== undefined,
  )
  if (!entries.length) return rows

  return rows.filter((row) =>
    entries.every(([key, value]) => {
      const cell = row[key]
      if (cell === undefined || cell === null) return false
      return String(cell)
        .toLowerCase()
        .includes(String(value).toLowerCase())
    }),
  )
})

const pageData = computed<any[]>(() => {
  if (!props.pagination || props.remote) {
    return filteredData.value
  }
  const start = (currentPage.value - 1) * pageSizeModel.value
  return filteredData.value.slice(start, start + pageSizeModel.value)
})

watch([totalPages, pageSizeModel], () => {
  if (currentPage.value > totalPages.value) {
    currentPage.value = totalPages.value
  }
})

watch(pageSizeModel, (size) => {
  currentPage.value = 1
  if (props.remote) {
    emit('page-change', { page: 1, pageSize: size })
  }
})

const visiblePages = computed<number[]>(() => {
  const pages: number[] = []
  const start = Math.max(1, currentPage.value - 2)
  const end = Math.min(totalPages.value, start + 4)
  for (let i = start; i <= end; i++) pages.push(i)
  return pages
})

const goToPage = (page: number) => {
  const target = Math.min(Math.max(1, page), totalPages.value)
  if (target === currentPage.value) return
  currentPage.value = target
  if (props.remote) {
    emit('page-change', { page: target, pageSize: pageSizeModel.value })
  }
}

const jumpPage = ref('')
const handleJump = () => {
  const page = Number(jumpPage.value)
  if (!Number.isFinite(page) || page < 1) {
    jumpPage.value = ''
    return
  }
  goToPage(Math.floor(page))
  jumpPage.value = ''
}

/* ---------------- 多选 ---------------- */
const selectedRows = ref<any[]>([])

const isSelected = (row: any) =>
  selectedRows.value.some((item) => item === row)

const isAllSelected = computed(
  () =>
    pageData.value.length > 0 &&
    pageData.value.every((row) => isSelected(row)),
)

const isIndeterminate = computed(
  () =>
    !isAllSelected.value &&
    pageData.value.some((row) => isSelected(row)),
)

const emitSelection = () => emit('selection-change', [...selectedRows.value])

const toggleRow = (row: any) => {
  if (isSelected(row)) {
    selectedRows.value = selectedRows.value.filter((item) => item !== row)
  } else {
    selectedRows.value = [...selectedRows.value, row]
  }
  emitSelection()
}

const toggleAll = () => {
  if (isAllSelected.value) {
    selectedRows.value = selectedRows.value.filter(
      (row) => !pageData.value.includes(row),
    )
  } else {
    selectedRows.value = [
      ...selectedRows.value,
      ...pageData.value.filter((row) => !isSelected(row)),
    ]
  }
  emitSelection()
}

/* ---------------- 导出 ---------------- */
const handleExport = () => {
  emit('export', props.remote ? selectedRows.value : filteredData.value)
}

defineExpose({
  /** 获取当前搜索值 */
  getSearchValues: () => ({ ...appliedValues.value }),
  /** 获取选中行 */
  getSelectedRows: () => [...selectedRows.value],
  /** 清空选中 */
  clearSelection: () => {
    selectedRows.value = []
    emitSelection()
  },
  /** 触发导出 */
  export: handleExport,
})

const getAlignClass = (align?: 'left' | 'center' | 'right') => {
  switch (align) {
    case 'center':
      return 'text-center'
    case 'right':
      return 'text-right'
    default:
      return 'text-left'
  }
}
</script>
