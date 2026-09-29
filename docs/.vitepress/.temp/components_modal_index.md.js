import { defineComponent, ref, shallowRef, onMounted, resolveComponent, unref, withCtx, createSlots, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
/* empty css               */
import { VitepressDemoPlaceholder, VitepressDemoBox } from "vitepress-demo-plugin/client";
const TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtbW9kYWwtZXhhbXBsZS1pbmRleAEqualEqual = `<script setup lang="ts">\r
import { ZModal } from '@zxy-ui/vue'\r
import { ref } from 'vue'\r
\r
// 基础用法\r
const showBasicModal = ref(false)\r
\r
// 带标题\r
const showTitleModal = ref(false)\r
\r
// 不同尺寸\r
const showSmallModal = ref(false)\r
const showLargeModal = ref(false)\r
\r
// 自定义头部和底部\r
const showCustomModal = ref(false)\r
\r
// 禁用点击遮罩层关闭\r
const showNoOverlayCloseModal = ref(false)\r
<\/script>\r
\r
<template>\r
  <div class="space-y-4">\r
    <!-- 基础用法 -->\r
    <div class="mb-4">\r
      <h3 class="text-lg font-medium mb-2">基础用法</h3>\r
      <button\r
        @click="showBasicModal = true"\r
        class="px-4 py-2 bg-black text-white rounded cursor-pointer"\r
      >\r
        打开基础模态框\r
      </button>\r
\r
      <ZModal v-model="showBasicModal" @close="console.log('基础模态框关闭了')">\r
        <p class="text-gray-600">这是一个基础模态框，没有标题和底部。</p>\r
      </ZModal>\r
    </div>\r
\r
    <!-- 带标题 -->\r
    <div class="mb-4">\r
      <h3 class="text-lg font-medium mb-2">带标题</h3>\r
      <button\r
        @click="showTitleModal = true"\r
        class="px-4 py-2 bg-black text-white rounded cursor-pointer"\r
      >\r
        打开带标题模态框\r
      </button>\r
\r
      <ZModal\r
        v-model="showTitleModal"\r
        title="这是标题"\r
        @close="console.log('带标题模态框关闭了')"\r
      >\r
        <p class="text-gray-600">这是一个带标题的模态框。</p>\r
      </ZModal>\r
    </div>\r
\r
    <!-- 不同尺寸 -->\r
    <div class="mb-4">\r
      <h3 class="text-lg font-medium mb-2">不同尺寸</h3>\r
      <div class="flex gap-2">\r
        <button\r
          @click="showSmallModal = true"\r
          class="px-4 py-2 bg-black text-white rounded cursor-pointer"\r
        >\r
          小尺寸\r
        </button>\r
        <button\r
          @click="showLargeModal = true"\r
          class="px-4 py-2 bg-black text-white rounded cursor-pointer"\r
        >\r
          大尺寸\r
        </button>\r
      </div>\r
\r
      <ZModal v-model="showSmallModal" title="小尺寸模态框" size="sm">\r
        <p class="text-gray-600">这是一个小尺寸的模态框。</p>\r
      </ZModal>\r
\r
      <ZModal v-model="showLargeModal" title="大尺寸模态框" size="2xl">\r
        <p class="text-gray-600">这是一个大尺寸的模态框。</p>\r
      </ZModal>\r
    </div>\r
\r
    <!-- 自定义头部和底部 -->\r
    <div class="mb-4">\r
      <h3 class="text-lg font-medium mb-2">自定义头部和底部</h3>\r
      <button\r
        @click="showCustomModal = true"\r
        class="px-4 py-2 bg-black text-white rounded cursor-pointer"\r
      >\r
        打开自定义模态框\r
      </button>\r
\r
      <ZModal v-model="showCustomModal">\r
        <template #header>\r
          <div class="flex items-center">\r
            <div class="w-3 h-3 rounded-full bg-green-500 mr-2"></div>\r
            <h3 class="text-lg font-medium">自定义头部</h3>\r
          </div>\r
        </template>\r
\r
        <p class="text-gray-600">这是一个带自定义头部和底部的模态框。</p>\r
\r
        <template #footer>\r
          <div class="flex justify-end gap-2">\r
            <button\r
              @click="showCustomModal = false"\r
              class="px-3 py-1 border border-gray-300 rounded"\r
            >\r
              取消\r
            </button>\r
            <button\r
              @click="showCustomModal = false"\r
              class="px-3 py-1 bg-blue-500 text-white rounded"\r
            >\r
              确认\r
            </button>\r
          </div>\r
        </template>\r
      </ZModal>\r
    </div>\r
\r
    <!-- 禁用点击遮罩层关闭 -->\r
    <div class="mb-4">\r
      <h3 class="text-lg font-medium mb-2">禁用点击遮罩层关闭</h3>\r
      <button\r
        @click="showNoOverlayCloseModal = true"\r
        class="px-4 py-2 bg-black text-white rounded cursor-pointer"\r
      >\r
        打开模态框\r
      </button>\r
\r
      <ZModal\r
        v-model="showNoOverlayCloseModal"\r
        title="禁用点击遮罩层关闭"\r
        :closeOnOverlayClick="false"\r
      >\r
        <p class="text-gray-600">\r
          点击遮罩层不会关闭此模态框，只能点击右上角的关闭按钮或按 ESC 键关闭。\r
        </p>\r
        <div class="mt-4 flex justify-end">\r
          <button\r
            @click="showNoOverlayCloseModal = false"\r
            class="px-3 py-1 bg-blue-500 text-white rounded"\r
          >\r
            关闭\r
          </button>\r
        </div>\r
      </ZModal>\r
    </div>\r
  </div>\r
</template>\r
`;
const __pageData = JSON.parse('{"title":"Model","description":"","frontmatter":{},"headers":[],"relativePath":"components/modal/index.md","filePath":"components/modal/index.md"}');
const __default__ = { name: "components/modal/index.md" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __ssrInlineRender: true,
  setup(__props) {
    const __placeholder_visible_key__ = ref(true);
    const TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtbW9kYWwtZXhhbXBsZS1pbmRleAEqualEqual = shallowRef();
    onMounted(async () => {
      TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtbW9kYWwtZXhhbXBsZS1pbmRleAEqualEqual.value = (await import("./index.Dd_hmdDy.js")).default;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StorybookLink = resolveComponent("StorybookLink");
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="model" tabindex="-1">Model <a class="header-anchor" href="#model" aria-label="Permalink to &quot;Model&quot;">​</a></h1><p>Modal 是一种覆盖在主界面上方的浮动容器，用于展示需要用户专注处理的内容（如表单、确认框、详情页等）。它通过半透明背景（遮罩层）阻断主界面交互，强制用户完成当前操作后才能返回，是现代 UI 设计中实现层级交互的重要组件。</p>`);
      _push(ssrRenderComponent(_component_StorybookLink, { link: "https://zxy-ui.github.io/zxy-ui/storybook/?path=/story/%E7%BB%84%E4%BB%B6-modal-%E5%AF%B9%E8%AF%9D%E6%A1%86--basic" }, null, _parent));
      _push(`<h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> { Model } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;@zxy-ui/vue&#39;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2>`);
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
              vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtbW9kYWwtZXhhbXBsZS1pbmRleAEqualEqual)
            }, createSlots({ _: 2 }, [
              TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtbW9kYWwtZXhhbXBsZS1pbmRleAEqualEqual.value ? {
                name: "vue",
                fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtbW9kYWwtZXhhbXBsZS1pbmRleAEqualEqual), null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtbW9kYWwtZXhhbXBsZS1pbmRleAEqualEqual))
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
                vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtbW9kYWwtZXhhbXBsZS1pbmRleAEqualEqual)
              }, createSlots({ _: 2 }, [
                TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtbW9kYWwtZXhhbXBsZS1pbmRleAEqualEqual.value ? {
                  name: "vue",
                  fn: withCtx(() => [
                    createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtbW9kYWwtZXhhbXBsZS1pbmRleAEqualEqual))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modal/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
