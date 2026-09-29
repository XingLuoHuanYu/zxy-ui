import { defineComponent, ref, shallowRef, onMounted, resolveComponent, unref, withCtx, createSlots, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
/* empty css               */
import { VitepressDemoPlaceholder, VitepressDemoBox } from "vitepress-demo-plugin/client";
const TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc3dpdGNoLWV4YW1wbGUtaW5kZXgEqual = `<template>\r
  <div class="space-y-8">\r
    <!-- 基础用法 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">基础用法</h2>\r
      <div class="flex items-center space-x-4">\r
        <ZSwitch v-model="enabled" />\r
        <span class="text-sm">{{ enabled ? '开启' : '关闭' }}</span>\r
      </div>\r
    </section>\r
\r
    <!-- 不同尺寸 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">不同尺寸</h2>\r
      <div class="flex items-center space-x-8">\r
        <div class="flex flex-col items-center space-y-2">\r
          <ZSwitch v-model="sizeEnabled.small" size="small" />\r
          <span class="text-sm">小型</span>\r
        </div>\r
        <div class="flex flex-col items-center space-y-2">\r
          <ZSwitch v-model="sizeEnabled.default" />\r
          <span class="text-sm">默认</span>\r
        </div>\r
        <div class="flex flex-col items-center space-y-2">\r
          <ZSwitch v-model="sizeEnabled.large" size="large" />\r
          <span class="text-sm">大型</span>\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- 不同颜色 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">不同颜色</h2>\r
      <div class="grid grid-cols-5 gap-6">\r
        <div class="flex flex-col items-center space-y-2">\r
          <ZSwitch v-model="colorEnabled.blue" color="blue" />\r
          <span class="text-sm">蓝色</span>\r
        </div>\r
        <div class="flex flex-col items-center space-y-2">\r
          <ZSwitch v-model="colorEnabled.green" color="green" />\r
          <span class="text-sm">绿色</span>\r
        </div>\r
        <div class="flex flex-col items-center space-y-2">\r
          <ZSwitch v-model="colorEnabled.red" color="red" />\r
          <span class="text-sm">红色</span>\r
        </div>\r
        <div class="flex flex-col items-center space-y-2">\r
          <ZSwitch v-model="colorEnabled.yellow" color="yellow" />\r
          <span class="text-sm">黄色</span>\r
        </div>\r
        <div class="flex flex-col items-center space-y-2">\r
          <ZSwitch v-model="colorEnabled.purple" color="purple" />\r
          <span class="text-sm">紫色</span>\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- 禁用状态 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">禁用状态</h2>\r
      <div class="flex items-center space-x-8">\r
        <div class="flex flex-col items-center space-y-2">\r
          <ZSwitch disabled />\r
          <span class="text-sm">禁用关闭</span>\r
        </div>\r
        <div class="flex flex-col items-center space-y-2">\r
          <ZSwitch :model-value="true" disabled />\r
          <span class="text-sm">禁用开启</span>\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- 动画演示 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">动画演示</h2>\r
      <div class="flex flex-col space-y-4">\r
        <div class="flex items-center space-x-4">\r
          <button\r
            @click="toggleAllSwitches"\r
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"\r
          >\r
            {{ allEnabled ? '全部关闭' : '全部开启' }}\r
          </button>\r
        </div>\r
        <div class="flex items-center space-x-4 mt-4">\r
          <ZSwitch v-for="(_, i) in 5" :key="i" v-model="animationSwitches[i]" />\r
        </div>\r
      </div>\r
    </section>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ZSwitch } from '@zxy-ui/vue'\r
import '@zxy-ui/vue/style'\r
import { ref, computed } from 'vue'\r
\r
// 基础用法\r
const enabled = ref(false)\r
\r
// 不同尺寸\r
const sizeEnabled = ref({\r
  small: true,\r
  default: true,\r
  large: true,\r
})\r
\r
// 不同颜色\r
const colorEnabled = ref({\r
  blue: true,\r
  green: true,\r
  red: true,\r
  yellow: true,\r
  purple: true,\r
})\r
\r
// 动画演示\r
const animationSwitches = ref([false, false, false, false, false])\r
\r
// 全部开关状态\r
const allEnabled = computed(() =>\r
  animationSwitches.value.every((state) => state === true),\r
)\r
\r
// 切换所有开关\r
const toggleAllSwitches = () => {\r
  const newState = !allEnabled.value\r
  animationSwitches.value = animationSwitches.value.map(() => newState)\r
}\r
<\/script>\r
`;
const __pageData = JSON.parse('{"title":"Switch","description":"","frontmatter":{},"headers":[],"relativePath":"components/switch/index.md","filePath":"components/switch/index.md"}');
const __default__ = { name: "components/switch/index.md" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __ssrInlineRender: true,
  setup(__props) {
    const __placeholder_visible_key__ = ref(true);
    const TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc3dpdGNoLWV4YW1wbGUtaW5kZXgEqual = shallowRef();
    onMounted(async () => {
      TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc3dpdGNoLWV4YW1wbGUtaW5kZXgEqual.value = (await import("./index.B3Gz-PX6.js")).default;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StorybookLink = resolveComponent("StorybookLink");
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="switch" tabindex="-1">Switch <a class="header-anchor" href="#switch" aria-label="Permalink to &quot;Switch&quot;">​</a></h1><p>Switch（开关）组件是一种二元状态选择器，用于在两种状态间快速切换（如 &quot;开 / 关&quot;、&quot;启用 / 禁用&quot;），通过直观的视觉反馈降低用户操作认知成本，提升交互效率。</p>`);
      _push(ssrRenderComponent(_component_StorybookLink, { link: "https://zxy-ui.github.io/zxy-ui/storybook/?path=/story/%E7%BB%84%E4%BB%B6-switch-%E5%BC%80%E5%85%B3--basic" }, null, _parent));
      _push(`<h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-typeScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typeScript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> { ZSwitch } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;@zxy-ui/vue&#39;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2>`);
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
              vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc3dpdGNoLWV4YW1wbGUtaW5kZXgEqual)
            }, createSlots({ _: 2 }, [
              TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc3dpdGNoLWV4YW1wbGUtaW5kZXgEqual.value ? {
                name: "vue",
                fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc3dpdGNoLWV4YW1wbGUtaW5kZXgEqual), null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc3dpdGNoLWV4YW1wbGUtaW5kZXgEqual))
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
                vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc3dpdGNoLWV4YW1wbGUtaW5kZXgEqual)
              }, createSlots({ _: 2 }, [
                TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc3dpdGNoLWV4YW1wbGUtaW5kZXgEqual.value ? {
                  name: "vue",
                  fn: withCtx(() => [
                    createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc3dpdGNoLWV4YW1wbGUtaW5kZXgEqual))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/switch/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
