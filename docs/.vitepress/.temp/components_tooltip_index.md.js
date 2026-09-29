import { defineComponent, ref, shallowRef, onMounted, resolveComponent, unref, withCtx, createSlots, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
/* empty css               */
import { VitepressDemoPlaceholder, VitepressDemoBox } from "vitepress-demo-plugin/client";
const TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdG9vbHRpcC1leGFtcGxlLWluZGV4 = `<script setup lang="ts">\r
// 直接从包根目录导入\r
import { ZTooltip } from '@zxy-ui/vue'\r
import '@zxy-ui/vue/style'\r
\r
// 示例数据\r
const longText =\r
  '这是一段较长的提示文本，用于演示文本换行和最大宽度的效果。当文本内容较多时，提示框会自动换行显示。'\r
<\/script>\r
\r
<template>\r
  <div class="space-y-12">\r
    <!-- 基础用法 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">基础用法</h2>\r
      <div class="flex items-center space-x-4">\r
        <ZTooltip content="这是一个基础提示">\r
          <div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">\r
            悬停查看提示\r
          </div>\r
        </ZTooltip>\r
      </div>\r
    </section>\r
\r
    <!-- 不同位置 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">提示位置</h2>\r
      <div class="grid grid-cols-2 gap-6 max-w-md">\r
        <ZTooltip content="顶部提示" placement="top">\r
          <div\r
            class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer text-center"\r
          >\r
            顶部\r
          </div>\r
        </ZTooltip>\r
\r
        <ZTooltip content="右侧提示" placement="right">\r
          <div\r
            class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer text-center"\r
          >\r
            右侧\r
          </div>\r
        </ZTooltip>\r
\r
        <ZTooltip content="底部提示" placement="bottom">\r
          <div\r
            class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer text-center"\r
          >\r
            底部\r
          </div>\r
        </ZTooltip>\r
\r
        <ZTooltip content="左侧提示" placement="left">\r
          <div\r
            class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer text-center"\r
          >\r
            左侧\r
          </div>\r
        </ZTooltip>\r
      </div>\r
    </section>\r
\r
    <!-- 不同颜色 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">提示颜色</h2>\r
      <div class="flex flex-wrap gap-4">\r
        <ZTooltip content="默认提示" color="default">\r
          <div class="px-4 py-2 bg-gray-500 text-white rounded cursor-pointer">\r
            默认\r
          </div>\r
        </ZTooltip>\r
\r
        <ZTooltip content="主要提示" color="primary">\r
          <div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">\r
            主要\r
          </div>\r
        </ZTooltip>\r
\r
        <ZTooltip content="成功提示" color="success">\r
          <div class="px-4 py-2 bg-green-500 text-white rounded cursor-pointer">\r
            成功\r
          </div>\r
        </ZTooltip>\r
\r
        <ZTooltip content="警告提示" color="warning">\r
          <div\r
            class="px-4 py-2 bg-yellow-500 text-white rounded cursor-pointer"\r
          >\r
            警告\r
          </div>\r
        </ZTooltip>\r
\r
        <ZTooltip content="危险提示" color="danger">\r
          <div class="px-4 py-2 bg-red-500 text-white rounded cursor-pointer">\r
            危险\r
          </div>\r
        </ZTooltip>\r
      </div>\r
    </section>\r
\r
    <!-- 不同触发方式 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">触发方式</h2>\r
      <div class="flex items-center space-x-4">\r
        <ZTooltip content="鼠标悬停触发" trigger="hover">\r
          <div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">\r
            悬停触发\r
          </div>\r
        </ZTooltip>\r
\r
        <ZTooltip content="获取焦点触发" trigger="focus">\r
          <button\r
            class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-300"\r
          >\r
            焦点触发(点击)\r
          </button>\r
        </ZTooltip>\r
\r
        <ZTooltip content="悬停或焦点都可触发" trigger="both">\r
          <button\r
            class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-300"\r
          >\r
            双重触发\r
          </button>\r
        </ZTooltip>\r
      </div>\r
    </section>\r
\r
    <!-- 延迟显示和隐藏 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">显示延迟</h2>\r
      <div class="flex items-center space-x-4">\r
        <ZTooltip content="延迟500毫秒显示" :openDelay="500">\r
          <div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">\r
            延迟显示\r
          </div>\r
        </ZTooltip>\r
\r
        <ZTooltip content="延迟500毫秒隐藏" :closeDelay="500">\r
          <div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">\r
            延迟隐藏\r
          </div>\r
        </ZTooltip>\r
      </div>\r
    </section>\r
\r
    <!-- 跟随鼠标 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">跟随鼠标</h2>\r
      <div class="flex items-center space-x-4">\r
        <ZTooltip content="跟随鼠标移动" :followCursor="true">\r
          <div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">\r
            移动鼠标试试\r
          </div>\r
        </ZTooltip>\r
      </div>\r
    </section>\r
\r
    <!-- 自定义偏移量 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">自定义偏移量</h2>\r
      <div class="flex items-center space-x-4">\r
        <ZTooltip content="距离元素20px" :offset="20">\r
          <div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">\r
            大偏移\r
          </div>\r
        </ZTooltip>\r
\r
        <ZTooltip content="距离元素4px" :offset="4">\r
          <div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">\r
            小偏移\r
          </div>\r
        </ZTooltip>\r
      </div>\r
    </section>\r
\r
    <!-- 最大宽度和长文本 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">长文本与最大宽度</h2>\r
      <div class="flex items-center space-x-4">\r
        <ZTooltip :content="longText" :maxWidth="200">\r
          <div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">\r
            长文本提示\r
          </div>\r
        </ZTooltip>\r
      </div>\r
    </section>\r
\r
    <!-- 自定义内容 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">自定义内容</h2>\r
      <div class="flex items-center space-x-4">\r
        <ZTooltip>\r
          <div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">\r
            富文本提示\r
          </div>\r
          <template #content>\r
            <div class="p-1">\r
              <div class="font-bold text-yellow-300">自定义标题</div>\r
              <p class="mt-1">\r
                这里可以放\r
                <span class="text-red-300">任意HTML内容</span>\r
              </p>\r
            </div>\r
          </template>\r
        </ZTooltip>\r
      </div>\r
    </section>\r
\r
    <!-- 禁用状态 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">禁用状态</h2>\r
      <div class="flex items-center space-x-4">\r
        <ZTooltip content="这个提示不会显示" disabled>\r
          <div\r
            class="px-4 py-2 bg-gray-400 text-white rounded cursor-not-allowed"\r
          >\r
            禁用提示\r
          </div>\r
        </ZTooltip>\r
      </div>\r
    </section>\r
\r
    <!-- 无箭头 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">无箭头样式</h2>\r
      <div class="flex items-center space-x-4">\r
        <ZTooltip content="这个提示没有箭头" :arrow="false">\r
          <div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">\r
            无箭头提示\r
          </div>\r
        </ZTooltip>\r
      </div>\r
    </section>\r
  </div>\r
</template>\r
`;
const __pageData = JSON.parse('{"title":"Tooltip","description":"","frontmatter":{},"headers":[],"relativePath":"components/tooltip/index.md","filePath":"components/tooltip/index.md"}');
const __default__ = { name: "components/tooltip/index.md" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __ssrInlineRender: true,
  setup(__props) {
    const __placeholder_visible_key__ = ref(true);
    const TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdG9vbHRpcC1leGFtcGxlLWluZGV4 = shallowRef();
    onMounted(async () => {
      TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdG9vbHRpcC1leGFtcGxlLWluZGV4.value = (await import("./index.Dl9Fx9m9.js")).default;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StorybookLink = resolveComponent("StorybookLink");
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="tooltip" tabindex="-1">Tooltip <a class="header-anchor" href="#tooltip" aria-label="Permalink to &quot;Tooltip&quot;">​</a></h1><p>Tooltip 是一种轻量级信息提示组件，当用户悬停、聚焦或点击元素时，会在其附近显示简短说明文本。它以半透明气泡形式呈现，不干扰主界面，用于提供即时的上下文帮助或补充信息，常见于图标解释、功能说明等场景。</p>`);
      _push(ssrRenderComponent(_component_StorybookLink, { link: "https://zxy-ui.github.io/zxy-ui/storybook/?path=/story/%E7%BB%84%E4%BB%B6-tooltip-%E6%8F%90%E7%A4%BA%E6%B0%94%E6%B3%A1--basic" }, null, _parent));
      _push(`<h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> { ZTooltip } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;@zxy-ui/vue&#39;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2>`);
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
              vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdG9vbHRpcC1leGFtcGxlLWluZGV4)
            }, createSlots({ _: 2 }, [
              TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdG9vbHRpcC1leGFtcGxlLWluZGV4.value ? {
                name: "vue",
                fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdG9vbHRpcC1leGFtcGxlLWluZGV4), null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdG9vbHRpcC1leGFtcGxlLWluZGV4))
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
                vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdG9vbHRpcC1leGFtcGxlLWluZGV4)
              }, createSlots({ _: 2 }, [
                TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdG9vbHRpcC1leGFtcGxlLWluZGV4.value ? {
                  name: "vue",
                  fn: withCtx(() => [
                    createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdG9vbHRpcC1leGFtcGxlLWluZGV4))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tooltip/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
