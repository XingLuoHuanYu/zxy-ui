import { defineComponent, ref, shallowRef, onMounted, resolveComponent, unref, withCtx, createSlots, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
/* empty css               */
import { VitepressDemoPlaceholder, VitepressDemoBox } from "vitepress-demo-plugin/client";
const TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcG9wb3Zlci1leGFtcGxlLWluZGV4 = `<script setup lang="ts">\r
import { ref } from 'vue'\r
// 暂时不管导入错误，后面再解决\r
import { ZPopover } from '@zxy-ui/vue'\r
import '@zxy-ui/vue/style'\r
\r
// 基础用法示例\r
const isBasicOpen = ref(false)\r
\r
// 不同触发方式示例\r
const isManualOpen = ref(false)\r
\r
const toggleManual = () => {\r
  isManualOpen.value = !isManualOpen.value\r
}\r
\r
// 带标题示例\r
const isWithTitleOpen = ref(false)\r
\r
// 自定义宽度示例\r
const isCustomWidthOpen = ref(false)\r
\r
// 禁用状态示例\r
const isDisabledOpen = ref(false)\r
<\/script>\r
\r
<template>\r
  <div class="space-y-12">\r
    <!-- 基础用法 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">基础用法</h2>\r
      <div class="flex items-center space-x-4">\r
        <ZPopover v-model="isBasicOpen">\r
          <template #trigger>\r
            <div\r
              class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"\r
            >\r
              点击显示弹出框\r
            </div>\r
          </template>\r
          这是一个基础的弹出框内容\r
        </ZPopover>\r
      </div>\r
    </section>\r
\r
    <!-- 不同位置 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">不同位置</h2>\r
      <div class="flex justify-center items-center space-x-8 mb-6">\r
        <!-- 顶部 -->\r
        <ZPopover placement="top">\r
          <template #trigger>\r
            <div\r
              class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"\r
            >\r
              顶部\r
            </div>\r
          </template>\r
          弹出位置: 顶部 (top)\r
        </ZPopover>\r
\r
        <!-- 右侧 -->\r
        <ZPopover placement="right">\r
          <template #trigger>\r
            <div\r
              class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"\r
            >\r
              右侧\r
            </div>\r
          </template>\r
          弹出位置: 右侧 (right)\r
        </ZPopover>\r
\r
        <!-- 底部 -->\r
        <ZPopover placement="bottom">\r
          <template #trigger>\r
            <div\r
              class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"\r
            >\r
              底部\r
            </div>\r
          </template>\r
          弹出位置: 底部 (bottom)\r
        </ZPopover>\r
\r
        <!-- 左侧 -->\r
        <ZPopover placement="left">\r
          <template #trigger>\r
            <div\r
              class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"\r
            >\r
              左侧\r
            </div>\r
          </template>\r
          弹出位置: 左侧 (left)\r
        </ZPopover>\r
      </div>\r
    </section>\r
\r
    <!-- 不同触发方式 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">不同触发方式</h2>\r
      <div class="flex items-center space-x-4">\r
        <ZPopover trigger="click">\r
          <template #trigger>\r
            <div\r
              class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"\r
            >\r
              点击触发\r
            </div>\r
          </template>\r
          点击触发的弹出框\r
        </ZPopover>\r
\r
        <ZPopover trigger="hover">\r
          <template #trigger>\r
            <div\r
              class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"\r
            >\r
              悬停触发\r
            </div>\r
          </template>\r
          悬停触发的弹出框\r
        </ZPopover>\r
\r
        <ZPopover v-model="isManualOpen" trigger="manual">\r
          <template #trigger>\r
            <div\r
              class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"\r
              @click="toggleManual"\r
            >\r
              手动触发\r
            </div>\r
          </template>\r
          手动控制的弹出框\r
        </ZPopover>\r
      </div>\r
    </section>\r
\r
    <!-- 带标题 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">带标题</h2>\r
      <div class="flex items-center space-x-4">\r
        <ZPopover v-model="isWithTitleOpen" title="弹出框标题">\r
          <template #trigger>\r
            <div\r
              class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"\r
            >\r
              带标题的弹出框\r
            </div>\r
          </template>\r
          这是带有标题的弹出框内容\r
        </ZPopover>\r
      </div>\r
    </section>\r
\r
    <!-- 自定义宽度 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">自定义宽度</h2>\r
      <div class="flex items-center space-x-4">\r
        <ZPopover v-model="isCustomWidthOpen" :width="300">\r
          <template #trigger>\r
            <div\r
              class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"\r
            >\r
              自定义宽度\r
            </div>\r
          </template>\r
          这是一个宽度为300px的弹出框，可以显示更多的内容。你可以根据需要自定义弹出框的宽度，以适应不同的内容展示需求。\r
        </ZPopover>\r
      </div>\r
    </section>\r
\r
    <!-- 禁用状态 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">禁用状态</h2>\r
      <div class="flex items-center space-x-4">\r
        <ZPopover v-model="isDisabledOpen" disabled>\r
          <template #trigger>\r
            <div\r
              class="px-4 py-2 bg-gray-400 text-white rounded cursor-not-allowed"\r
            >\r
              禁用状态\r
            </div>\r
          </template>\r
          这个弹出框被禁用了，无法显示\r
        </ZPopover>\r
      </div>\r
    </section>\r
  </div>\r
</template>\r
`;
const __pageData = JSON.parse('{"title":"Popover","description":"","frontmatter":{},"headers":[],"relativePath":"components/popover/index.md","filePath":"components/popover/index.md"}');
const __default__ = { name: "components/popover/index.md" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __ssrInlineRender: true,
  setup(__props) {
    const __placeholder_visible_key__ = ref(true);
    const TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcG9wb3Zlci1leGFtcGxlLWluZGV4 = shallowRef();
    onMounted(async () => {
      TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcG9wb3Zlci1leGFtcGxlLWluZGV4.value = (await import("./index.3Va74nJT.js")).default;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StorybookLink = resolveComponent("StorybookLink");
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="popover" tabindex="-1">Popover <a class="header-anchor" href="#popover" aria-label="Permalink to &quot;Popover&quot;">​</a></h1><p>Popover 是一种轻量级的浮动层组件，用于在触发元素（如按钮、图标）附近显示额外信息或操作选项。它通常以箭头指向触发元素，支持多种触发方式（点击、悬停、聚焦），在不占用主视图空间的前提下提供上下文相关内容。</p>`);
      _push(ssrRenderComponent(_component_StorybookLink, { link: "https://zxy-ui.github.io/zxy-ui/storybook/?path=/story/%E7%BB%84%E4%BB%B6-popover-%E5%BC%B9%E5%87%BA%E6%A1%86--basic" }, null, _parent));
      _push(`<h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> { ZPopover } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;@zxy-ui/vue&#39;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2>`);
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
              vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcG9wb3Zlci1leGFtcGxlLWluZGV4)
            }, createSlots({ _: 2 }, [
              TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcG9wb3Zlci1leGFtcGxlLWluZGV4.value ? {
                name: "vue",
                fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcG9wb3Zlci1leGFtcGxlLWluZGV4), null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcG9wb3Zlci1leGFtcGxlLWluZGV4))
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
                vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcG9wb3Zlci1leGFtcGxlLWluZGV4)
              }, createSlots({ _: 2 }, [
                TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcG9wb3Zlci1leGFtcGxlLWluZGV4.value ? {
                  name: "vue",
                  fn: withCtx(() => [
                    createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcG9wb3Zlci1leGFtcGxlLWluZGV4))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/popover/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
