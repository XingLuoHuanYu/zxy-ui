import { defineComponent, ref, shallowRef, onMounted, resolveComponent, unref, withCtx, createSlots, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
/* empty css               */
import { VitepressDemoPlaceholder, VitepressDemoBox } from "vitepress-demo-plugin/client";
const TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc2VnbWVudGVkLWV4YW1wbGUtaW5kZXgEqual = `<script setup lang="ts">\r
import { ref } from 'vue'\r
import { ZSegmented } from '@zxy-ui/vue'\r
import '@zxy-ui/vue/style'\r
\r
// 基础用法示例\r
const basicValue = ref('选项1')\r
const basicOptions = ['选项1', '选项2', '选项3']\r
\r
// 对象选项示例\r
const objectValue = ref('apple')\r
const objectOptions = [\r
  { value: 'apple', label: '苹果' },\r
  { value: 'banana', label: '香蕉' },\r
  { value: 'orange', label: '橙子' },\r
]\r
\r
// 禁用选项示例\r
const disabledOptionValue = ref('a')\r
const disabledOptionOptions = [\r
  { value: 'a', label: '选项A' },\r
  { value: 'b', label: '选项B', disabled: true },\r
  { value: 'c', label: '选项C' },\r
]\r
\r
// 不同大小示例\r
const sizeValue = ref('md')\r
const sizeOptions = [\r
  { value: 'sm', label: '小号' },\r
  { value: 'md', label: '中号' },\r
  { value: 'lg', label: '大号' },\r
]\r
\r
// 禁用状态示例\r
const disabledValue = ref('1')\r
const isDisabled = ref(false)\r
\r
// 块级显示示例\r
const blockValue = ref('left')\r
const blockOptions = [\r
  { value: 'left', label: '左对齐' },\r
  { value: 'center', label: '居中对齐' },\r
  { value: 'right', label: '右对齐' },\r
]\r
\r
// 数字选项示例\r
const numberValue = ref(1)\r
const numberOptions = [1, 2, 3, 4, 5]\r
\r
const toggleDisabled = () => {\r
  isDisabled.value = !isDisabled.value\r
}\r
<\/script>\r
\r
<template>\r
  <div class="space-y-8">\r
    <!-- 基础用法 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">基础用法</h2>\r
      <ZSegmented v-model="basicValue" :options="basicOptions" />\r
      <div class="mt-2 text-sm text-gray-500">当前选中: {{ basicValue }}</div>\r
    </section>\r
\r
    <!-- 对象选项 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">对象选项</h2>\r
      <ZSegmented v-model="objectValue" :options="objectOptions" />\r
      <div class="mt-2 text-sm text-gray-500">当前选中: {{ objectValue }}</div>\r
    </section>\r
\r
    <!-- 禁用选项 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">禁用选项</h2>\r
      <ZSegmented\r
        v-model="disabledOptionValue"\r
        :options="disabledOptionOptions"\r
      />\r
      <div class="mt-2 text-sm text-gray-500">\r
        当前选中: {{ disabledOptionValue }}\r
      </div>\r
    </section>\r
\r
    <!-- 不同大小 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">不同大小</h2>\r
      <div class="space-y-4">\r
        <div>\r
          <ZSegmented v-model="sizeValue" :options="sizeOptions" size="sm" />\r
          <span class="ml-2 text-sm text-gray-500">小号 (sm)</span>\r
        </div>\r
        <div>\r
          <ZSegmented v-model="sizeValue" :options="sizeOptions" size="md" />\r
          <span class="ml-2 text-sm text-gray-500">中号 (md)</span>\r
        </div>\r
        <div>\r
          <ZSegmented v-model="sizeValue" :options="sizeOptions" size="lg" />\r
          <span class="ml-2 text-sm text-gray-500">大号 (lg)</span>\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- 禁用状态 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">禁用状态</h2>\r
      <div class="space-y-4">\r
        <ZSegmented\r
          v-model="disabledValue"\r
          :options="['1', '2', '3']"\r
          :disabled="isDisabled"\r
        />\r
        <div>\r
          <button\r
            @click="toggleDisabled"\r
            class="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"\r
          >\r
            {{ isDisabled ? '启用' : '禁用' }}\r
          </button>\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- 块级显示 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">块级显示</h2>\r
      <ZSegmented v-model="blockValue" :options="blockOptions" block />\r
    </section>\r
\r
    <!-- 数字选项 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">数字选项</h2>\r
      <ZSegmented v-model="numberValue" :options="numberOptions" />\r
      <div class="mt-2 text-sm text-gray-500">\r
        当前选中: {{ numberValue }} (类型: {{ typeof numberValue }})\r
      </div>\r
    </section>\r
  </div>\r
</template>\r
`;
const __pageData = JSON.parse('{"title":"Segmented","description":"","frontmatter":{},"headers":[],"relativePath":"components/segmented/index.md","filePath":"components/segmented/index.md"}');
const __default__ = { name: "components/segmented/index.md" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __ssrInlineRender: true,
  setup(__props) {
    const __placeholder_visible_key__ = ref(true);
    const TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc2VnbWVudGVkLWV4YW1wbGUtaW5kZXgEqual = shallowRef();
    onMounted(async () => {
      TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc2VnbWVudGVkLWV4YW1wbGUtaW5kZXgEqual.value = (await import("./index.C6vTqRyV.js")).default;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StorybookLink = resolveComponent("StorybookLink");
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="segmented" tabindex="-1">Segmented <a class="header-anchor" href="#segmented" aria-label="Permalink to &quot;Segmented&quot;">​</a></h1><p>Segmented 是一种水平排列的选项卡控件，用于在多个互斥选项之间进行快速切换。它将相关操作或视图分类展示，用户通过点击选项即可触发对应功能，界面简洁且交互效率高。</p>`);
      _push(ssrRenderComponent(_component_StorybookLink, { link: "https://zxy-ui.github.io/zxy-ui/storybook/?path=/story/%E7%BB%84%E4%BB%B6-segmented-%E5%88%86%E6%AE%B5%E6%8E%A7%E5%88%B6%E5%99%A8--basic" }, null, _parent));
      _push(`<h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> { ZSegmented } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;@zxy-ui/vue&#39;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2>`);
      _push(ssrRenderComponent(unref(VitepressDemoPlaceholder), {
        style: __placeholder_visible_key__.value ? null : { display: "none" }
      }, null, _parent));
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VitepressDemoBox), {
              title: "",
              description: "",
              locale: "",
              select: "vue",
              order: "vue,react,svelte,solid,preact,html",
              github: "",
              gitlab: "",
              theme: "",
              lightTheme: "",
              darkTheme: "",
              stackblitz: "%7B%22show%22%3Afalse%7D",
              codesandbox: "%7B%22show%22%3Afalse%7D",
              playground: "%7B%22show%22%3Afalse%7D",
              files: "%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22svelte%22%3A%7B%7D%2C%22solid%22%3A%7B%7D%2C%22preact%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",
              scope: "",
              htmlWriteWay: "write",
              background: "undefined",
              htmlPlayground: "",
              vuePlayground: "",
              reactPlayground: "",
              sveltePlayground: "",
              solidPlayground: "",
              preactPlayground: "",
              visible: true,
              onMount: () => {
                __placeholder_visible_key__.value = false;
              },
              vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc2VnbWVudGVkLWV4YW1wbGUtaW5kZXgEqual)
            }, createSlots({ _: 2 }, [
              TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc2VnbWVudGVkLWV4YW1wbGUtaW5kZXgEqual.value ? {
                name: "vue",
                fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc2VnbWVudGVkLWV4YW1wbGUtaW5kZXgEqual), null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc2VnbWVudGVkLWV4YW1wbGUtaW5kZXgEqual))
                    ];
                  }
                }),
                key: "0"
              } : void 0
            ]), _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VitepressDemoBox), {
                title: "",
                description: "",
                locale: "",
                select: "vue",
                order: "vue,react,svelte,solid,preact,html",
                github: "",
                gitlab: "",
                theme: "",
                lightTheme: "",
                darkTheme: "",
                stackblitz: "%7B%22show%22%3Afalse%7D",
                codesandbox: "%7B%22show%22%3Afalse%7D",
                playground: "%7B%22show%22%3Afalse%7D",
                files: "%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22svelte%22%3A%7B%7D%2C%22solid%22%3A%7B%7D%2C%22preact%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",
                scope: "",
                htmlWriteWay: "write",
                background: "undefined",
                htmlPlayground: "",
                vuePlayground: "",
                reactPlayground: "",
                sveltePlayground: "",
                solidPlayground: "",
                preactPlayground: "",
                visible: true,
                onMount: () => {
                  __placeholder_visible_key__.value = false;
                },
                vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc2VnbWVudGVkLWV4YW1wbGUtaW5kZXgEqual)
              }, createSlots({ _: 2 }, [
                TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc2VnbWVudGVkLWV4YW1wbGUtaW5kZXgEqual.value ? {
                  name: "vue",
                  fn: withCtx(() => [
                    createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc2VnbWVudGVkLWV4YW1wbGUtaW5kZXgEqual))
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["onMount", "vueCode"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/segmented/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
