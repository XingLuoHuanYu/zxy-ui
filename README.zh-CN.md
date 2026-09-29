<div align="center">
  <a href="https://XingLuoHuanYu.github.io/zxy-ui/">
    <img src="./logo.svg" width="160" />
  </a>
  <h1>ZxyUI</h1>
  <p>一个现代化、高度可定制的Vue3组件库</p>
  <p>
    <a href="https://XingLuoHuanYu.github.io/zxy-ui/">文档</a> | 
    <a href="https://XingLuoHuanYu.github.io/zxy-ui/storybook/">Storybook</a> | 
    <a href="./README.md">English</a>
  </p>
  <p>
    <img src="https://img.shields.io/badge/vue-v3.2.0%2B-%2342b883" alt="vue">
    <img src="https://img.shields.io/badge/typescript-%5E5.0.0-%233178c6" alt="typescript">
    <img src="https://img.shields.io/badge/tailwindcss-v3.3.0-%2338bdf8" alt="tailwindcss">
    <img src="https://img.shields.io/npm/l/@zxy-ui/vue.svg" alt="license">
    <img src="https://github.com/XingLuoHuanYu/zxy-ui/actions/workflows/test.yml/badge.svg" alt="tests">
  </p>
</div>

---

## 📖 介绍

ZxyUI是一个精心设计的Vue3组件库，旨在提供高度可定制、无头化的组件解决方案。它允许开发者构建用户界面时不受特定视觉风格的限制，同时提供了完全控制组件外观和行为的能力。

## ✨ 特性

- 🚀 &nbsp; 提供30+个高质量通用组件，覆盖表单、导航、反馈、数据展示等多种场景
- 💪 &nbsp; 完全基于Tailwind CSS构建，提供优雅的默认样式和极高的可定制性
- 🎨 &nbsp; 支持组件无头化(unstyled)模式和PT样式传递机制，灵活控制组件样式
- 🛠️ &nbsp; 支持按需引入，优化应用体积
- 🌈 &nbsp; 支持主题定制，轻松打造品牌专属UI
- 🌍 &nbsp; 支持国际化，内置中英文语言包
- 💡 &nbsp; 完全使用TypeScript开发，提供完善的类型定义
- 📚 &nbsp; 详尽的文档和示例，快速上手无压力
- 🌙 &nbsp; 原生支持暗黑模式，一键切换
- ♿ &nbsp; 注重可访问性设计，符合WCAG标准

## 📦 安装

```bash
# 使用npm
npm install @zxy-ui/vue

# 使用yarn
yarn add @zxy-ui/vue

# 使用pnpm
pnpm add @zxy-ui/vue
```

## 🚀 快速开始

### 完整引入

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import ZxyUI from '@zxy-ui/vue'
import '@zxy-ui/vue/style'

createApp(App).use(ZxyUI).mount('#app')
```

### 按需引入

```vue
<script setup lang="ts">
import { ZButton, ZInput } from '@zxy-ui/vue'
import '@zxy-ui/vue/style'
</script>

<template>
	<v-input placeholder="请输入内容" />
	<v-button>点击按钮</v-button>
</template>
```

## 🔍 在线文档

查看我们的[在线文档](https://XingLuoHuanYu.github.io/zxy-ui/)，了解更多关于组件使用的详细信息、示例和API参考。

## 💻 本地开发

```bash
# 克隆仓库
git clone https://github.com/XingLuoHuanYu/zxy-ui.git

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建组件库
pnpm build

# 运行测试
pnpm test
```

## 📄 许可证

ZxyUI 使用 [MIT 许可证](./LICENSE)。

## 🔗 相关链接

- [GitHub仓库](https://github.com/XingLuoHuanYu/zxy-ui)
- [问题反馈](https://github.com/XingLuoHuanYu/zxy-ui/issues)
- [更新日志](./CHANGELOG.md)

