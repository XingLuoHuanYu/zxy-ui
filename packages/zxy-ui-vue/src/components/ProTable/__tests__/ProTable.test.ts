import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import ZProTable from '../src/ProTable.vue'
import type { ProTableSearchField } from '../src/type'

const columns = [
  { key: 'name', title: '名称' },
  { key: 'status', title: '状态' },
]

const data = [
  { name: 'VIP会员', status: '启用' },
  { name: '普通会员', status: '停用' },
  { name: '钻石会员', status: '启用' },
]

const searchFields: ProTableSearchField[] = [
  { key: 'name', label: '会员名称', type: 'input' },
]

describe('ZProTable', () => {
  it('渲染搜索表单和表格数据', () => {
    const wrapper = mount(ZProTable, {
      props: { columns, data, searchFields, pagination: false },
    })
    expect(wrapper.text()).toContain('会员名称')
    expect(wrapper.text()).toContain('VIP会员')
    expect(wrapper.text()).toContain('普通会员')
  })

  it('点击搜索后按关键字过滤数据（本地模式）', async () => {
    const wrapper = mount(ZProTable, {
      props: { columns, data, searchFields, pagination: false },
    })
    const input = wrapper.find('input[type="text"]')
    await input.setValue('VIP')
    await wrapper.findAll('button').filter((b) => b.text() === '搜索')[0].trigger('click')
    expect(wrapper.text()).toContain('VIP会员')
    expect(wrapper.text()).not.toContain('普通会员')
  })

  it('点击重置后恢复全部数据并触发 reset 事件', async () => {
    const wrapper = mount(ZProTable, {
      props: { columns, data, searchFields, pagination: false },
    })
    const input = wrapper.find('input[type="text"]')
    await input.setValue('VIP')
    await wrapper.findAll('button').filter((b) => b.text() === '搜索')[0].trigger('click')
    expect(wrapper.text()).not.toContain('普通会员')

    await wrapper.findAll('button').filter((b) => b.text() === '重置')[0].trigger('click')
    expect(wrapper.text()).toContain('普通会员')
    expect(wrapper.emitted('reset')).toBeTruthy()
  })

  it('远程模式下搜索触发 search 事件并返回表单值', async () => {
    const wrapper = mount(ZProTable, {
      props: { columns, data, searchFields, remote: true, pagination: false },
    })
    const input = wrapper.find('input[type="text"]')
    await input.setValue('钻石')
    await wrapper.findAll('button').filter((b) => b.text() === '搜索')[0].trigger('click')

    const emitted = wrapper.emitted('search')
    expect(emitted).toBeTruthy()
    expect(emitted![0][0]).toEqual({ name: '钻石' })
    // 远程模式不做本地过滤
    expect(wrapper.text()).toContain('VIP会员')
  })

  it('支持多选并触发 selection-change', async () => {
    const wrapper = mount(ZProTable, {
      props: { columns, data, selectable: true, pagination: false },
    })
    const checkboxes = wrapper.findAll('input[type="checkbox"]')
    // 第一个是全选
    await checkboxes[0].setValue(true)
    expect(wrapper.emitted('selection-change')![0][0]).toHaveLength(3)
  })

  it('分页：默认每页 10 条，显示总条数', () => {
    const rows = Array.from({ length: 25 }, (_, i) => ({
      name: `row-${i}`,
      status: '启用',
    }))
    const wrapper = mount(ZProTable, {
      props: { columns, data: rows, pagination: true, pageSize: 10 },
    })
    expect(wrapper.text()).toContain('共 25 条')
    expect(wrapper.text()).toContain('row-0')
    expect(wrapper.text()).not.toContain('row-15')
  })
})
