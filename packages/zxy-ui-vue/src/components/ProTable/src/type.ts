import type { TableColumn } from '../../Table'

export type ProTableSearchType = 'input' | 'select'

export interface ProTableSearchOption {
  label: string
  value: string | number
}

export interface ProTableSearchField {
  /** 查询字段名，对应数据行的 key */
  key: string
  /** 查询项标签 */
  label: string
  /** 查询控件类型 */
  type?: ProTableSearchType
  /** 占位符 */
  placeholder?: string
  /** type 为 select 时的选项 */
  options?: ProTableSearchOption[]
  /** 控件宽度（px） */
  width?: number
}

export interface ProTableProps {
  /**
   * 表格数据
   */
  data?: any[]

  /**
   * 表格列配置
   */
  columns?: TableColumn[]

  /**
   * 搜索区配置，传入后表格顶部显示查询表单
   */
  searchFields?: ProTableSearchField[]

  /**
   * 是否远程模式：为 true 时不做本地过滤/分页，
   * 通过 search / page-change 事件由外部获取数据
   * @default false
   */
  remote?: boolean

  /**
   * 加载状态
   * @default false
   */
  loading?: boolean

  /**
   * 是否显示多选列
   * @default false
   */
  selectable?: boolean

  /**
   * 是否显示导出按钮
   * @default false
   */
  exportable?: boolean

  /**
   * 是否分页
   * @default true
   */
  pagination?: boolean

  /**
   * 每页条数
   * @default 10
   */
  pageSize?: number

  /**
   * 可选的每页条数
   */
  pageSizes?: number[]

  /**
   * 当前页码
   * @default 1
   */
  initialPage?: number

  /**
   * 空数据文案
   * @default '暂无数据'
   */
  emptyText?: string

  stripe?: boolean
  border?: boolean
  dense?: boolean
}

export interface ProTablePageChangePayload {
  page: number
  pageSize: number
}

export interface ProTableEmits {
  /** 点击搜索按钮或回车时触发 */
  search: [values: Record<string, any>]
  /** 点击重置按钮时触发 */
  reset: []
  /** 选中项变化时触发 */
  'selection-change': [rows: any[]]
  /** 页码或每页条数变化时触发 */
  'page-change': [payload: ProTablePageChangePayload]
  /** 点击导出按钮时触发 */
  export: [rows: any[]]
}
