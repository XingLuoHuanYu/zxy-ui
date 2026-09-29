<template>
  <div class="space-y-8">
    <!-- 变体样式示例 -->
    <section>
      <h3 class="text-lg font-medium mb-4">变体样式</h3>
      <div class="flex flex-wrap gap-4">
        <ZButton>默认按钮</ZButton>
        <ZButton variant="secondary">次要按钮</ZButton>
        <ZButton variant="success">成功按钮</ZButton>
        <ZButton variant="warning">警告按钮</ZButton>
        <ZButton variant="info">信息按钮</ZButton>
        <ZButton variant="danger">危险按钮</ZButton>
        <ZButton variant="outline">描边按钮</ZButton>
        <ZButton variant="ghost">幽灵按钮</ZButton>
        <ZButton variant="link">链接按钮</ZButton>
      </div>
    </section>

    <!-- 尺寸示例 -->
    <section>
      <h3 class="text-lg font-medium mb-4">尺寸</h3>
      <div class="flex items-center flex-wrap gap-4">
        <ZButton size="xs">超小按钮</ZButton>
        <ZButton size="sm">小按钮</ZButton>
        <ZButton size="md">中按钮</ZButton>
        <ZButton size="lg">大按钮</ZButton>
      </div>
    </section>

    <!-- 状态示例 -->
    <section>
      <h3 class="text-lg font-medium mb-4">状态</h3>
      <div class="flex flex-wrap gap-4">
        <ZButton disabled>禁用按钮</ZButton>
        <ZButton loading>加载中</ZButton>
        <ZButton variant="outline" disabled>禁用描边</ZButton>
        <ZButton variant="outline" loading>加载中</ZButton>
      </div>
    </section>

    <!-- 圆角示例 -->
    <section>
      <h3 class="text-lg font-medium mb-4">圆角</h3>
      <div class="flex flex-wrap gap-4">
        <ZButton rounded>圆角按钮</ZButton>
        <ZButton size="xs" rounded>超小圆角</ZButton>
        <ZButton size="lg" rounded>大圆角</ZButton>
      </div>
    </section>

    <!-- 全宽示例 -->
    <section>
      <h3 class="text-lg font-medium mb-4">全宽</h3>
      <div class="space-y-2">
        <ZButton fullWidth>全宽按钮</ZButton>
        <ZButton variant="outline" fullWidth>全宽描边按钮</ZButton>
      </div>
    </section>

    <!-- 组合示例 -->
    <section>
      <h3 class="text-lg font-medium mb-4">组合使用</h3>
      <div class="space-y-2">
        <div class="flex flex-wrap gap-4">
          <ZButton variant="primary" size="sm" rounded>圆角小按钮</ZButton>
          <ZButton variant="danger" loading>危险加载</ZButton>
          <ZButton variant="outline" disabled rounded>禁用圆角描边</ZButton>
        </div>
        <ZButton variant="secondary" fullWidth size="lg">
          大号全宽次要按钮
        </ZButton>
      </div>
    </section>

    <!-- 全局注册用法（ZxyUI 前缀） -->
    <section>
      <h3 class="text-lg font-medium mb-4">
        全局注册用法 <span class="text-sm text-gray-500">（z- 前缀）</span>
      </h3>
      <p class="text-sm text-gray-500 mb-4">
        执行 <code>app.use(ZxyUI)</code> 后，组件已全局注册，
        无需 import 即可直接使用 <code>&lt;z-button&gt;</code> 标签：
      </p>
      <div class="flex flex-wrap gap-4">
        <z-button>默认按钮</z-button>
        <z-button variant="success">成功按钮</z-button>
        <z-button variant="danger">危险按钮</z-button>
        <z-button variant="outline">描边按钮</z-button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ZButton } from '@zxy-ui/vue'
</script>
