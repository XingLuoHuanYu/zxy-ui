import { defineComponent, ref, shallowRef, onMounted, resolveComponent, unref, withCtx, createSlots, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
/* empty css               */
import { VitepressDemoPlaceholder, VitepressDemoBox } from "vitepress-demo-plugin/client";
const TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc2xpZGVyLWV4YW1wbGUtaW5kZXgEqual = `<script setup lang="ts">\r
import { ref } from 'vue'\r
import { ZSlider } from '@zxy-ui/vue'\r
import '@zxy-ui/vue/style'\r
\r
// 基础用法示例\r
const basicValue = ref(50)\r
\r
// 设置最小值最大值示例\r
const rangeValue = ref(30)\r
\r
// 设置步长示例\r
const stepValue = ref(25)\r
\r
// 垂直方向示例\r
const verticalValue = ref(60)\r
\r
// 禁用状态示例\r
const disabledValue = ref(70)\r
\r
// 显示提示示例\r
const tooltipValue = ref(40)\r
\r
// 自定义提示示例\r
const customTooltipValue = ref(85)\r
const formatTooltip = (value: number) => \`\${value}%\`\r
\r
// 显示刻度示例\r
const marksValue = ref(20)\r
\r
// 自定义刻度示例\r
const customMarksValue = ref(25)\r
const marks = {\r
  0: '0°C',\r
  25: '25°C',\r
  50: '50°C',\r
  75: '75°C',\r
  100: '100°C',\r
}\r
<\/script>\r
\r
<template>\r
  <div class="space-y-12">\r
    <!-- 基础用法 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">基础用法</h2>\r
      <div class="w-full max-w-md">\r
        <ZSlider v-model="basicValue" />\r
        <div class="mt-2 text-sm text-gray-500">当前值: {{ basicValue }}</div>\r
      </div>\r
    </section>\r
\r
    <!-- 设置最小值最大值 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">设置最小值最大值</h2>\r
      <div class="w-full max-w-md">\r
        <ZSlider v-model="rangeValue" :min="20" :max="80" />\r
        <div class="mt-2 text-sm text-gray-500">\r
          当前值: {{ rangeValue }} (范围: 20-80)\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- 设置步长 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">设置步长</h2>\r
      <div class="w-full max-w-md">\r
        <ZSlider v-model="stepValue" :step="25" />\r
        <div class="mt-2 text-sm text-gray-500">\r
          当前值: {{ stepValue }} (步长: 25)\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- 垂直方向 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">垂直方向</h2>\r
      <div class="h-64">\r
        <ZSlider v-model="verticalValue" orientation="vertical" />\r
        <div class="mt-2 text-sm text-gray-500">\r
          当前值: {{ verticalValue }}\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- 禁用状态 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">禁用状态</h2>\r
      <div class="w-full max-w-md">\r
        <ZSlider v-model="disabledValue" disabled />\r
        <div class="mt-2 text-sm text-gray-500">\r
          当前值: {{ disabledValue }}\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- 显示提示 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">显示提示</h2>\r
      <div class="w-full max-w-md">\r
        <ZSlider v-model="tooltipValue" show-tooltip />\r
        <div class="mt-2 text-sm text-gray-500">当前值: {{ tooltipValue }}</div>\r
      </div>\r
    </section>\r
\r
    <!-- 自定义提示 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">自定义提示</h2>\r
      <div class="w-full max-w-md">\r
        <ZSlider\r
          v-model="customTooltipValue"\r
          show-tooltip\r
          :format-tooltip="formatTooltip"\r
        />\r
        <div class="mt-2 text-sm text-gray-500">\r
          当前值: {{ formatTooltip(customTooltipValue) }}\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- 显示刻度 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">显示刻度</h2>\r
      <div class="w-full max-w-md">\r
        <ZSlider v-model="marksValue" show-marks />\r
        <div class="mt-2 text-sm text-gray-500">当前值: {{ marksValue }}</div>\r
      </div>\r
    </section>\r
\r
    <!-- 自定义刻度 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">自定义刻度</h2>\r
      <div class="w-full max-w-md">\r
        <ZSlider v-model="customMarksValue" show-marks :marks="marks" />\r
        <div class="mt-2 text-sm text-gray-500">\r
          当前值: {{ customMarksValue }}\r
        </div>\r
      </div>\r
    </section>\r
  </div>\r
</template>\r
`;
const __pageData = JSON.parse('{"title":"Slider","description":"","frontmatter":{},"headers":[],"relativePath":"components/slider/index.md","filePath":"components/slider/index.md"}');
const __default__ = { name: "components/slider/index.md" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __ssrInlineRender: true,
  setup(__props) {
    const __placeholder_visible_key__ = ref(true);
    const TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc2xpZGVyLWV4YW1wbGUtaW5kZXgEqual = shallowRef();
    onMounted(async () => {
      TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc2xpZGVyLWV4YW1wbGUtaW5kZXgEqual.value = (await import("./index.9v_KXaEr.js")).default;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StorybookLink = resolveComponent("StorybookLink");
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="slider" tabindex="-1">Slider <a class="header-anchor" href="#slider" aria-label="Permalink to &quot;Slider&quot;">​</a></h1><p>Slider 是一种允许用户通过拖动滑块在指定范围内选择连续或离散值的交互控件。它以可视化方式呈现数值范围，提供直观的调节体验，广泛应用于音量控制、进度调整、参数设置等场景。</p>`);
      _push(ssrRenderComponent(_component_StorybookLink, { link: "https://zxy-ui.github.io/zxy-ui/storybook/?path=/story/%E7%BB%84%E4%BB%B6-slider-%E6%BB%91%E5%9D%97--basic" }, null, _parent));
      _push(`<h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-typeScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typeScript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> { ZSlider } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;@zxy-ui/vue&#39;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2>`);
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
              vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc2xpZGVyLWV4YW1wbGUtaW5kZXgEqual)
            }, createSlots({ _: 2 }, [
              TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc2xpZGVyLWV4YW1wbGUtaW5kZXgEqual.value ? {
                name: "vue",
                fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc2xpZGVyLWV4YW1wbGUtaW5kZXgEqual), null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc2xpZGVyLWV4YW1wbGUtaW5kZXgEqual))
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
                vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc2xpZGVyLWV4YW1wbGUtaW5kZXgEqual)
              }, createSlots({ _: 2 }, [
                TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc2xpZGVyLWV4YW1wbGUtaW5kZXgEqual.value ? {
                  name: "vue",
                  fn: withCtx(() => [
                    createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc2xpZGVyLWV4YW1wbGUtaW5kZXgEqual))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/slider/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
