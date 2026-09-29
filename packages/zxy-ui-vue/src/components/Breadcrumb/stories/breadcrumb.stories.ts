import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ZBreadcrumb, ZBreadcrumbItem } from '../index'

const meta = {
  title: 'Navigation/Breadcrumb',
  component: ZBreadcrumb,
  tags: ['autodocs'],
  argTypes: {
    separator: {
      control: 'text',
      description: '分隔符',
      defaultValue: '/',
    },
    separatorIcon: {
      control: 'text',
      description: '图标分隔符',
    },
    unstyled: {
      control: 'boolean',
      description: '是否移除默认样式',
      defaultValue: false,
    },
  },
} satisfies Meta<typeof ZBreadcrumb>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: {ZBreadcrumb, ZBreadcrumbItem},
    setup() {
      return { args }
    },
    template: `
      <ZBreadcrumb v-bind="args">
        <ZBreadcrumbItem href="/">首页</ZBreadcrumbItem>
        <ZBreadcrumbItem href="/components">组件</ZBreadcrumbItem>
        <ZBreadcrumbItem>面包屑</ZBreadcrumbItem>
      </ZBreadcrumb>
    `,
  }),
  args: {},
}

export const CustomSeparator: Story = {
  render: (args) => ({
    components: {ZBreadcrumb, ZBreadcrumbItem},
    setup() {
      return { args }
    },
    template: `
      <ZBreadcrumb v-bind="args">
        <ZBreadcrumbItem href="/">首页</ZBreadcrumbItem>
        <ZBreadcrumbItem href="/components">组件</ZBreadcrumbItem>
        <ZBreadcrumbItem>面包屑</ZBreadcrumbItem>
      </ZBreadcrumb>
    `,
  }),
  args: {
    separator: '>',
  },
}

export const Disabled: Story = {
  render: (args) => ({
    components: {ZBreadcrumb, ZBreadcrumbItem},
    setup() {
      return { args }
    },
    template: `
      <ZBreadcrumb v-bind="args">
        <ZBreadcrumbItem href="/">首页</ZBreadcrumbItem>
        <ZBreadcrumbItem disabled href="/components">组件</ZBreadcrumbItem>
        <ZBreadcrumbItem>面包屑</ZBreadcrumbItem>
      </ZBreadcrumb>
    `,
  }),
  args: {},
}

export const Active: Story = {
  render: (args) => ({
    components: {ZBreadcrumb, ZBreadcrumbItem},
    setup() {
      return { args }
    },
    template: `
      <ZBreadcrumb v-bind="args">
        <ZBreadcrumbItem href="/">首页</ZBreadcrumbItem>
        <ZBreadcrumbItem href="/components">组件</ZBreadcrumbItem>
        <ZBreadcrumbItem active>面包屑</ZBreadcrumbItem>
      </ZBreadcrumb>
    `,
  }),
  args: {},
}
