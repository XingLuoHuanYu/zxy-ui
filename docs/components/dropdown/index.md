# Dropdown 下拉菜单

Dropdown 是一个可以显示临时弹出菜单的组件，用户可以从中选择一个选项。适用于菜单、操作集合等场景。

<StorybookLink link="https://XingLuoHuanYu.github.io/zxy-ui/storybook/?path=/story/%E7%BB%84%E4%BB%B6-dropdown-%E4%B8%8B%E6%8B%89%E8%8F%9C%E5%8D%95--basic"/>

## 引入

```typescript
import { ZDropdown, ZDropdownItem } from '@zxy-ui/vue'
```

## 使用

<demo vue="./example/index.vue" />

## Dropdown API

### 属性

| 属性名    | 说明                           | 类型                                        | 默认值           |
| --------- | ------------------------------ | ------------------------------------------- | ---------------- |
| options   | 选项数据                       | `DropdownOption[]`                          | `[]`             |
| trigger   | 触发方式                       | `'click' \| 'hover' \| 'focus' \| 'manual'` | `'click'`        |
| placement | 下拉菜单位置                   | `DropdownPlacement`                         | `'bottom-start'` |
| disabled  | 是否禁用                       | `boolean`                                   | `false`          |
| visible   | 是否显示(仅在manual模式下生效) | `boolean`                                   | -                |
| maxWidth  | 最大宽度                       | `string \| number`                          | -                |
| minWidth  | 最小宽度                       | `string \| number`                          | 触发元素宽度     |
| arrow     | 显示箭头                       | `boolean`                                   | `false`          |
| unstyled  | 是否使用无样式模式             | `boolean`                                   | `false`          |
| pt        | 传递模板样式                   | `DropdownPT`                                | -                |

### 选项类型

```typescript
interface DropdownOption {
	value: string | number | boolean | object
	label: string
	disabled?: boolean
	icon?: string
	divider?: boolean
	children?: DropdownOption[]
}
```

### 位置类型

```typescript
type DropdownPlacement =
	| 'top'
	| 'top-start'
	| 'top-end'
	| 'bottom'
	| 'bottom-start'
	| 'bottom-end'
	| 'left'
	| 'left-start'
	| 'left-end'
	| 'right'
	| 'right-start'
	| 'right-end'
```

### 事件

| 事件名         | 说明               | 参数                 |
| -------------- | ------------------ | -------------------- |
| update:visible | 可见状态更新时触发 | `(visible: boolean)` |
| select         | 选择选项时触发     | `(value: any)`       |

### 插槽

| 名称    | 说明         | 参数 |
| ------- | ------------ | ---- |
| trigger | 触发元素内容 | -    |
| default | 下拉菜单内容 | -    |

### 样式接口

```typescript
type DropdownPT = {
	root?: string
	trigger?: string
	content?: string
	arrow?: string
	menu?: string
	menuItem?: string
	menuItemIcon?: string
	menuItemLabel?: string
	menuDivider?: string
}
```

## DropdownItem API

### 属性

| 属性名   | 说明       | 类型      | 默认值  |
| -------- | ---------- | --------- | ------- |
| value    | 选项值     | `any`     | -       |
| label    | 选项标签   | `string`  | -       |
| disabled | 是否禁用   | `boolean` | `false` |
| icon     | 自定义图标 | `string`  | -       |
| divider  | 是否分割线 | `boolean` | `false` |

### 事件

| 事件名 | 说明         | 参数           |
| ------ | ------------ | -------------- |
| click  | 点击选项触发 | `(value: any)` |

### 插槽

| 名称    | 说明     | 参数 |
| ------- | -------- | ---- |
| default | 选项内容 | -    |

## 组合使用示例

除了通过options属性配置选项外，也可以直接使用DropdownItem组件来构建下拉菜单：

```vue
<template>
	<ZDropdown>
		<template #trigger>
			<button>下拉菜单</button>
		</template>
		<ZDropdownItem value="item1" label="选项一" />
		<ZDropdownItem value="item2" label="选项二" icon="📝" />
		<ZDropdownItem divider />
		<ZDropdownItem value="item3" disabled label="禁用选项" />
	</ZDropdown>
</template>
```
