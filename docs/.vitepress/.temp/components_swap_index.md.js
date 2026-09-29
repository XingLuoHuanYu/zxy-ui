import { defineComponent, ref, shallowRef, onMounted, resolveComponent, unref, withCtx, createSlots, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
/* empty css               */
import { VitepressDemoPlaceholder, VitepressDemoBox } from "vitepress-demo-plugin/client";
const TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc3dhcC1leGFtcGxlLWluZGV4 = `<script setup>\r
import { ZSwap } from '@zxy-ui/vue'\r
import '@zxy-ui/vue/style'\r
import { ref } from 'vue'\r
\r
const isActive = ref(false)\r
<\/script>\r
\r
<template>\r
  <div class="space-y-4 text-sm">\r
    <!-- 基本用法和变体效果 -->\r
    <section>\r
      <h4 class="text-sm font-medium mb-2">变体效果</h4>\r
      <div class="flex flex-wrap items-start gap-4">\r
        <div class="flex flex-col items-center gap-1">\r
          <span class="text-xs text-gray-500 dark:text-gray-400">基础用法</span>\r
          <ZSwap v-model:active="isActive">\r
            <template #on>\r
              <div class="bg-primary-500 text-white rounded px-2 py-1 text-xs">\r
                开启\r
              </div>\r
            </template>\r
            <template #off>\r
              <div\r
                class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded px-2 py-1 text-xs"\r
              >\r
                关闭\r
              </div>\r
            </template>\r
          </ZSwap>\r
        </div>\r
\r
        <div class="flex flex-col items-center gap-1">\r
          <span class="text-xs text-gray-500 dark:text-gray-400">淡入淡出</span>\r
          <ZSwap variant="fade" v-model:active="isActive">\r
            <template #on>\r
              <div\r
                class="bg-primary-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"\r
              >\r
                ✓\r
              </div>\r
            </template>\r
            <template #off>\r
              <div\r
                class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-xs"\r
              >\r
                ✗\r
              </div>\r
            </template>\r
          </ZSwap>\r
        </div>\r
\r
        <div class="flex flex-col items-center gap-1">\r
          <span class="text-xs text-gray-500 dark:text-gray-400">翻转</span>\r
          <ZSwap variant="flip" v-model:active="isActive">\r
            <template #on>\r
              <div\r
                class="bg-primary-500 text-white rounded w-6 h-6 flex items-center justify-center text-xs"\r
              >\r
                A\r
              </div>\r
            </template>\r
            <template #off>\r
              <div\r
                class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded w-6 h-6 flex items-center justify-center text-xs"\r
              >\r
                B\r
              </div>\r
            </template>\r
          </ZSwap>\r
        </div>\r
\r
        <div class="flex flex-col items-center gap-1">\r
          <span class="text-xs text-gray-500 dark:text-gray-400">旋转</span>\r
          <ZSwap variant="rotate" v-model:active="isActive">\r
            <template #on>\r
              <div\r
                class="bg-primary-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"\r
              >\r
                +\r
              </div>\r
            </template>\r
            <template #off>\r
              <div\r
                class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-xs"\r
              >\r
                -\r
              </div>\r
            </template>\r
          </ZSwap>\r
        </div>\r
\r
        <div class="flex flex-col items-center gap-1">\r
          <span class="text-xs text-gray-500 dark:text-gray-400">滑动</span>\r
          <ZSwap variant="slide" v-model:active="isActive">\r
            <template #on>\r
              <div class="bg-primary-500 text-white rounded px-2 py-1 text-xs">\r
                上\r
              </div>\r
            </template>\r
            <template #off>\r
              <div\r
                class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded px-2 py-1 text-xs"\r
              >\r
                下\r
              </div>\r
            </template>\r
          </ZSwap>\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- 尺寸展示 -->\r
    <section class="border-t pt-2">\r
      <h4 class="text-sm font-medium mb-2">尺寸</h4>\r
      <div class="flex flex-wrap items-end gap-4">\r
        <div class="flex flex-col items-center gap-1">\r
          <span class="text-xs text-gray-500 dark:text-gray-400">小</span>\r
          <ZSwap size="sm" v-model:active="isActive">\r
            <template #on>\r
              <div\r
                class="bg-primary-500 text-white rounded flex items-center justify-center w-4 h-4 text-xs"\r
              >\r
                S\r
              </div>\r
            </template>\r
            <template #off>\r
              <div\r
                class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded flex items-center justify-center w-4 h-4 text-xs"\r
              >\r
                S\r
              </div>\r
            </template>\r
          </ZSwap>\r
        </div>\r
\r
        <div class="flex flex-col items-center gap-1">\r
          <span class="text-xs text-gray-500 dark:text-gray-400">中</span>\r
          <ZSwap size="md" v-model:active="isActive">\r
            <template #on>\r
              <div\r
                class="bg-primary-500 text-white rounded flex items-center justify-center w-6 h-6 text-xs"\r
              >\r
                M\r
              </div>\r
            </template>\r
            <template #off>\r
              <div\r
                class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded flex items-center justify-center w-6 h-6 text-xs"\r
              >\r
                M\r
              </div>\r
            </template>\r
          </ZSwap>\r
        </div>\r
\r
        <div class="flex flex-col items-center gap-1">\r
          <span class="text-xs text-gray-500 dark:text-gray-400">大</span>\r
          <ZSwap size="lg" v-model:active="isActive">\r
            <template #on>\r
              <div\r
                class="bg-primary-500 text-white rounded flex items-center justify-center w-8 h-8 text-xs"\r
              >\r
                L\r
              </div>\r
            </template>\r
            <template #off>\r
              <div\r
                class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded flex items-center justify-center w-8 h-8 text-xs"\r
              >\r
                L\r
              </div>\r
            </template>\r
          </ZSwap>\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- 触发方式 -->\r
    <section class="border-t pt-2">\r
      <h4 class="text-sm font-medium mb-2">触发方式</h4>\r
      <div class="flex flex-wrap items-center gap-4">\r
        <div class="flex flex-col items-center gap-1">\r
          <span class="text-xs text-gray-500 dark:text-gray-400">点击</span>\r
          <ZSwap trigger="click" v-model:active="isActive">\r
            <template #on>\r
              <div class="bg-primary-500 text-white rounded px-2 py-1 text-xs">\r
                点击状态\r
              </div>\r
            </template>\r
            <template #off>\r
              <div\r
                class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded px-2 py-1 text-xs"\r
              >\r
                点击切换\r
              </div>\r
            </template>\r
          </ZSwap>\r
        </div>\r
\r
        <div class="flex flex-col items-center gap-1">\r
          <span class="text-xs text-gray-500 dark:text-gray-400">悬停</span>\r
          <ZSwap trigger="hover" v-model:active="isActive">\r
            <template #on>\r
              <div class="bg-primary-500 text-white rounded px-2 py-1 text-xs">\r
                悬停状态\r
              </div>\r
            </template>\r
            <template #off>\r
              <div\r
                class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded px-2 py-1 text-xs"\r
              >\r
                悬停切换\r
              </div>\r
            </template>\r
          </ZSwap>\r
        </div>\r
\r
        <div class="flex flex-col items-center gap-1">\r
          <span class="text-xs text-gray-500 dark:text-gray-400">聚焦</span>\r
          <ZSwap trigger="focus" v-model:active="isActive">\r
            <template #on>\r
              <div class="bg-primary-500 text-white rounded px-2 py-1 text-xs">\r
                聚焦状态\r
              </div>\r
            </template>\r
            <template #off>\r
              <div\r
                class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded px-2 py-1 text-xs"\r
              >\r
                点击聚焦\r
              </div>\r
            </template>\r
          </ZSwap>\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- 外部控制 -->\r
    <section class="border-t pt-2">\r
      <h4 class="text-sm font-medium mb-2">外部控制</h4>\r
      <div class="flex flex-wrap items-center gap-2">\r
        <ZSwap v-model:active="isActive">\r
          <template #on>\r
            <div class="bg-primary-500 text-white rounded px-2 py-1 text-xs">\r
              开启状态\r
            </div>\r
          </template>\r
          <template #off>\r
            <div\r
              class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded px-2 py-1 text-xs"\r
            >\r
              关闭状态\r
            </div>\r
          </template>\r
        </ZSwap>\r
        <button\r
          @click="isActive = !isActive"\r
          class="px-2 py-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded text-xs"\r
        >\r
          {{ isActive ? '切换为关闭' : '切换为开启' }}\r
        </button>\r
      </div>\r
    </section>\r
  </div>\r
</template>\r
\r
<style>\r
:root {\r
  --primary-500: #3b82f6;\r
}\r
\r
.bg-primary-500 {\r
  background-color: var(--primary-500);\r
}\r
</style>\r
`;
const __pageData = JSON.parse('{"title":"Swap","description":"","frontmatter":{},"headers":[],"relativePath":"components/swap/index.md","filePath":"components/swap/index.md"}');
const __default__ = { name: "components/swap/index.md" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __ssrInlineRender: true,
  setup(__props) {
    const __placeholder_visible_key__ = ref(true);
    const TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc3dhcC1leGFtcGxlLWluZGV4 = shallowRef();
    onMounted(async () => {
      TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc3dhcC1leGFtcGxlLWluZGV4.value = (await import("./index.DZVGOsux.js")).default;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StorybookLink = resolveComponent("StorybookLink");
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="swap" tabindex="-1">Swap <a class="header-anchor" href="#swap" aria-label="Permalink to &quot;Swap&quot;">​</a></h1><p>Swap 是一种用于在两种状态间切换内容显示的交互式组件。它允许用户通过点击、悬停或聚焦等方式在两种视觉状态之间进行切换，支持多种过渡动画效果，适用于主题切换、开关状态展示、展开/折叠内容等场景。</p>`);
      _push(ssrRenderComponent(_component_StorybookLink, { link: "https://zxy-ui.github.io/zxy-ui/storybook/?path=/story/%E7%BB%84%E4%BB%B6-swap-%E8%B0%83%E6%8D%A2--basic" }, null, _parent));
      _push(`<h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-typeScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typeScript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> { ZSwap } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;@zxy-ui/vue&#39;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2>`);
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
              vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc3dhcC1leGFtcGxlLWluZGV4)
            }, createSlots({ _: 2 }, [
              TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc3dhcC1leGFtcGxlLWluZGV4.value ? {
                name: "vue",
                fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc3dhcC1leGFtcGxlLWluZGV4), null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc3dhcC1leGFtcGxlLWluZGV4))
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
                vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc3dhcC1leGFtcGxlLWluZGV4)
              }, createSlots({ _: 2 }, [
                TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc3dhcC1leGFtcGxlLWluZGV4.value ? {
                  name: "vue",
                  fn: withCtx(() => [
                    createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc3dhcC1leGFtcGxlLWluZGV4))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/swap/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
