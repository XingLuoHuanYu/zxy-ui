import { defineComponent, ref, shallowRef, onMounted, resolveComponent, unref, withCtx, createSlots, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
/* empty css               */
import { VitepressDemoPlaceholder, VitepressDemoBox } from "vitepress-demo-plugin/client";
const TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtZHJhd2VyLWV4YW1wbGUtaW5kZXgEqual = `<script setup lang="ts">\r
import { ZDrawer } from '@zxy-ui/vue'\r
import { ref } from 'vue'\r
\r
// 基础用法\r
const showBasicDrawer = ref(false)\r
\r
// 不同位置\r
const showLeftDrawer = ref(false)\r
const showRightDrawer = ref(false)\r
const showTopDrawer = ref(false)\r
const showBottomDrawer = ref(false)\r
\r
// 带标题\r
const showTitleDrawer = ref(false)\r
\r
// 自定义尺寸\r
const showCustomSizeDrawer = ref(false)\r
\r
// 自定义头部和底部\r
const showCustomDrawer = ref(false)\r
<\/script>\r
\r
<template>\r
  <div class="space-y-6">\r
    <!-- 基础用法 -->\r
    <div class="mb-4">\r
      <h3 class="text-lg font-medium mb-2">基础用法</h3>\r
      <button\r
        @click="showBasicDrawer = true"\r
        class="px-4 py-2 bg-black text-white rounded cursor-pointer"\r
      >\r
        打开基础抽屉\r
      </button>\r
\r
      <ZDrawer v-model="showBasicDrawer" @close="console.log('基础抽屉关闭了')">\r
        <p class="text-gray-600">这是一个基础抽屉，默认从右侧滑出。</p>\r
      </ZDrawer>\r
    </div>\r
\r
    <!-- 不同位置 -->\r
    <div class="mb-4">\r
      <h3 class="text-lg font-medium mb-2">不同位置</h3>\r
      <div class="flex gap-2 flex-wrap">\r
        <button\r
          @click="showLeftDrawer = true"\r
          class="px-4 py-2 bg-black text-white rounded cursor-pointer"\r
        >\r
          左侧抽屉\r
        </button>\r
        <button\r
          @click="showRightDrawer = true"\r
          class="px-4 py-2 bg-black text-white rounded cursor-pointer"\r
        >\r
          右侧抽屉\r
        </button>\r
        <button\r
          @click="showTopDrawer = true"\r
          class="px-4 py-2 bg-black text-white rounded cursor-pointer"\r
        >\r
          顶部抽屉\r
        </button>\r
        <button\r
          @click="showBottomDrawer = true"\r
          class="px-4 py-2 bg-black text-white rounded cursor-pointer"\r
        >\r
          底部抽屉\r
        </button>\r
      </div>\r
\r
      <ZDrawer v-model="showLeftDrawer" placement="left" title="左侧抽屉">\r
        <p class="text-gray-600">这是一个从左侧滑出的抽屉。</p>\r
      </ZDrawer>\r
\r
      <ZDrawer v-model="showRightDrawer" placement="right" title="右侧抽屉">\r
        <p class="text-gray-600">这是一个从右侧滑出的抽屉。</p>\r
      </ZDrawer>\r
\r
      <ZDrawer v-model="showTopDrawer" placement="top" title="顶部抽屉">\r
        <p class="text-gray-600">这是一个从顶部滑出的抽屉。</p>\r
      </ZDrawer>\r
\r
      <ZDrawer v-model="showBottomDrawer" placement="bottom" title="底部抽屉">\r
        <p class="text-gray-600">这是一个从底部滑出的抽屉。</p>\r
      </ZDrawer>\r
    </div>\r
\r
    <!-- 带标题 -->\r
    <div class="mb-4">\r
      <h3 class="text-lg font-medium mb-2">带标题</h3>\r
      <button\r
        @click="showTitleDrawer = true"\r
        class="px-4 py-2 bg-black text-white rounded cursor-pointer"\r
      >\r
        打开带标题抽屉\r
      </button>\r
\r
      <ZDrawer v-model="showTitleDrawer" title="这是标题">\r
        <p class="text-gray-600">这是一个带标题的抽屉。</p>\r
      </ZDrawer>\r
    </div>\r
\r
    <!-- 自定义尺寸 -->\r
    <div class="mb-4">\r
      <h3 class="text-lg font-medium mb-2">自定义尺寸</h3>\r
      <button\r
        @click="showCustomSizeDrawer = true"\r
        class="px-4 py-2 bg-black text-white rounded cursor-pointer"\r
      >\r
        打开宽抽屉\r
      </button>\r
\r
      <ZDrawer v-model="showCustomSizeDrawer" title="宽抽屉" size="500px">\r
        <p class="text-gray-600">这是一个宽度为 500px 的抽屉。</p>\r
      </ZDrawer>\r
    </div>\r
\r
    <!-- 自定义头部和底部 -->\r
    <div class="mb-4">\r
      <h3 class="text-lg font-medium mb-2">自定义头部和底部</h3>\r
      <button\r
        @click="showCustomDrawer = true"\r
        class="px-4 py-2 bg-black text-white rounded cursor-pointer"\r
      >\r
        打开自定义抽屉\r
      </button>\r
\r
      <ZDrawer v-model="showCustomDrawer">\r
        <template #header>\r
          <div class="flex items-center">\r
            <div class="w-3 h-3 rounded-full bg-green-500 mr-2"></div>\r
            <h3 class="text-lg font-medium">自定义头部</h3>\r
          </div>\r
        </template>\r
\r
        <p class="text-gray-600">这是一个带自定义头部和底部的抽屉。</p>\r
\r
        <template #footer>\r
          <div class="flex justify-end gap-2">\r
            <button\r
              @click="showCustomDrawer = false"\r
              class="px-3 py-1 border border-gray-300 rounded"\r
            >\r
              取消\r
            </button>\r
            <button\r
              @click="showCustomDrawer = false"\r
              class="px-3 py-1 bg-blue-500 text-white rounded"\r
            >\r
              确认\r
            </button>\r
          </div>\r
        </template>\r
      </ZDrawer>\r
    </div>\r
  </div>\r
</template>\r
`;
const __pageData = JSON.parse('{"title":"Drawer","description":"","frontmatter":{},"headers":[],"relativePath":"components/drawer/index.md","filePath":"components/drawer/index.md"}');
const __default__ = { name: "components/drawer/index.md" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __ssrInlineRender: true,
  setup(__props) {
    const __placeholder_visible_key__ = ref(true);
    const TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtZHJhd2VyLWV4YW1wbGUtaW5kZXgEqual = shallowRef();
    onMounted(async () => {
      TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtZHJhd2VyLWV4YW1wbGUtaW5kZXgEqual.value = (await import("./index.BkVp6fvB.js")).default;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StorybookLink = resolveComponent("StorybookLink");
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="drawer" tabindex="-1">Drawer <a class="header-anchor" href="#drawer" aria-label="Permalink to &quot;Drawer&quot;">​</a></h1><p>Drawer（抽屉）组件是一种常见的移动端和桌面端交互组件，通常以侧边滑出或底部弹出的形式呈现，用于在不离开当前页面的情况下展示额外内容或功能选项，具有轻量化、非阻塞的特点。</p>`);
      _push(ssrRenderComponent(_component_StorybookLink, { link: "https://zxy-ui.github.io/zxy-ui/storybook/?path=/story/%E7%BB%84%E4%BB%B6-drawer-%E6%8A%BD%E5%B1%89--basic" }, null, _parent));
      _push(`<h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> { ZDrawer } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;@zxy-ui/vue&#39;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2>`);
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
              vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtZHJhd2VyLWV4YW1wbGUtaW5kZXgEqual)
            }, createSlots({ _: 2 }, [
              TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtZHJhd2VyLWV4YW1wbGUtaW5kZXgEqual.value ? {
                name: "vue",
                fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtZHJhd2VyLWV4YW1wbGUtaW5kZXgEqual), null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtZHJhd2VyLWV4YW1wbGUtaW5kZXgEqual))
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
                vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtZHJhd2VyLWV4YW1wbGUtaW5kZXgEqual)
              }, createSlots({ _: 2 }, [
                TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtZHJhd2VyLWV4YW1wbGUtaW5kZXgEqual.value ? {
                  name: "vue",
                  fn: withCtx(() => [
                    createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtZHJhd2VyLWV4YW1wbGUtaW5kZXgEqual))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/drawer/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
