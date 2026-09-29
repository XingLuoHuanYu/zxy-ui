<template>
  <ZDropdown>
    <template #trigger>
      <ZButton>点击打开菜单</ZButton>
    </template>
    <ZDropdownItem value="option1">选项1</ZDropdownItem>
    <ZDropdownItem value="option2">选项2</ZDropdownItem>
    <ZDropdownDivider />
    <ZDropdownItem value="option3" disabled>禁用选项</ZDropdownItem>
  </ZDropdown>
</template>

<script setup lang="ts">
import { ZDropdown, ZDropdownItem } from '@zxy-ui/vue'
import { ZButton } from '@zxy-ui/vue'
</script>
