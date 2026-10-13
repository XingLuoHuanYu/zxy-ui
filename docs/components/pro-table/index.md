# ProTable 高级表格

ProTable 是 Table 的增强版，内置「搜索表单 + 表格 + 分页」三段式布局，适用于后台管理系统的列表页。支持本地过滤和远程请求两种模式，并提供多选、导出、工具栏插槽等能力。

## 引入

```typescript
import { ZProTable } from '@zxy-ui/vue'
```

## 使用

<demo vue="./example/index.vue" />

## API

### 属性

| 属性名        | 说明                                                       | 类型                    | 默认值           |
| ------------- | ---------------------------------------------------------- | ----------------------- | ---------------- |
| data          | 表格数据源                                                 | `any[]`                 | `[]`             |
| columns       | 列配置，同 Table 的 `TableColumn`                          | `TableColumn[]`         | `[]`             |
| searchFields  | 搜索区配置，传入后顶部显示查询表单                         | `ProTableSearchField[]` | `[]`             |
| remote        | 是否远程模式（不做本地过滤/分页，由外部请求数据）          | `boolean`               | `false`          |
| loading       | 加载状态                                                   | `boolean`               | `false`          |
| selectable    | 是否显示多选列                                             | `boolean`               | `false`          |
| exportable    | 是否显示导出按钮                                           | `boolean`               | `false`          |
| pagination    | 是否分页                                                   | `boolean`               | `true`           |
| pageSize      | 每页条数                                                   | `number`                | `10`             |
| pageSizes     | 可选的每页条数                                             | `number[]`              | `[10,20,50,100]` |
| initialPage   | 初始页码                                                   | `number`                | `1`              |
| emptyText     | 空数据文案                                                 | `string`                | `'暂无数据'`     |
| stripe/border/dense | 同 Table                                            | `boolean`               | `false`          |

### ProTableSearchField

| 字段名      | 说明                        | 类型                          | 默认值   |
| ----------- | --------------------------- | ----------------------------- | -------- |
| key         | 查询字段名，对应数据行的 key | `string`                      | -        |
| label       | 查询项标签                  | `string`                      | -        |
| type        | 控件类型                    | `'input' \| 'select'`         | `'input'`|
| placeholder | 占位符                      | `string`                      | 自动生成 |
| options     | type 为 select 时的选项     | `{ label, value }[]`          | -        |
| width       | 控件宽度（px）              | `number`                      | `180`    |

### 事件

| 事件名            | 说明                                       | 回调参数                          |
| ----------------- | ------------------------------------------ | --------------------------------- |
| search            | 点击搜索（远程模式触发）                   | `(values: Record<string, any>)`   |
| reset             | 点击重置                                   | -                                 |
| selection-change  | 选中项变化                                 | `(rows: any[])`                   |
| page-change       | 页码/每页条数变化（远程模式触发）          | `({ page, pageSize })`            |
| export            | 点击导出                                   | `(rows: any[])`                   |

### 插槽

| 插槽名          | 说明                         | 作用域参数                        |
| --------------- | ---------------------------- | --------------------------------- |
| toolbar         | 工具栏（新增/批量删除等按钮）| `{ selectedRows, searchValues }`  |
| empty           | 自定义空状态                 | -                                 |
| `#<column.key>` | 按列渲染单元格               | `{ row, index }`                  |

### 暴露方法

| 方法名           | 说明               | 返回值                     |
| ---------------- | ------------------ | -------------------------- |
| getSearchValues  | 获取当前搜索值     | `Record<string, any>`      |
| getSelectedRows  | 获取选中行         | `any[]`                    |
| clearSelection   | 清空选中           | -                          |
| export           | 手动触发导出       | -                          |
