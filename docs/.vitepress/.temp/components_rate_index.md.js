import { defineComponent, ref, shallowRef, onMounted, resolveComponent, unref, withCtx, createSlots, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
/* empty css               */
import { VitepressDemoPlaceholder, VitepressDemoBox } from "vitepress-demo-plugin/client";
const TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcmF0ZS1leGFtcGxlLWluZGV4 = '<script setup>\r\nimport { ref } from \'vue\'\r\n\r\nconst basicValue = ref(3)\r\nconst halfValue = ref(3.5)\r\nconst readonlyValue = ref(4)\r\nconst disabledValue = ref(2)\r\nconst colorValue = ref(3)\r\nconst customValue = ref(4)\r\nconst maxValue = ref(6)\r\nconst scoreValue = ref(3.5)\r\n\r\nconst formatTooltip = (value) => {\r\n  return `${value} 分`\r\n}\r\n<\/script>\r\n\r\n<template>\r\n  <div class="space-y-8">\r\n    <!-- 基础用法 -->\r\n    <div>\r\n      <h2 class="text-lg font-medium mb-2">基础用法</h2>\r\n      <ZRate v-model="basicValue" />\r\n      <div class="mt-2 text-sm text-gray-500">当前评分：{{ basicValue }}</div>\r\n    </div>\r\n\r\n    <!-- 半星 -->\r\n    <div>\r\n      <h2 class="text-lg font-medium mb-2">半星评分</h2>\r\n      <ZRate v-model="halfValue" :allow-half="true" />\r\n      <div class="mt-2 text-sm text-gray-500">当前评分：{{ halfValue }}</div>\r\n    </div>\r\n\r\n    <!-- 只读状态 -->\r\n    <div>\r\n      <h2 class="text-lg font-medium mb-2">只读状态</h2>\r\n      <ZRate v-model="readonlyValue" :readonly="true" />\r\n    </div>\r\n\r\n    <!-- 禁用状态 -->\r\n    <div>\r\n      <h2 class="text-lg font-medium mb-2">禁用状态</h2>\r\n      <ZRate v-model="disabledValue" :disabled="true" />\r\n    </div>\r\n\r\n    <!-- 自定义颜色 -->\r\n    <div>\r\n      <h2 class="text-lg font-medium mb-2">自定义颜色</h2>\r\n      <div class="space-y-2">\r\n        <div>\r\n          <span class="inline-block w-20">黄色（默认）:</span>\r\n          <ZRate v-model="colorValue" color="yellow" />\r\n        </div>\r\n        <div>\r\n          <span class="inline-block w-20">蓝色:</span>\r\n          <ZRate v-model="colorValue" color="blue" />\r\n        </div>\r\n        <div>\r\n          <span class="inline-block w-20">绿色:</span>\r\n          <ZRate v-model="colorValue" color="green" />\r\n        </div>\r\n        <div>\r\n          <span class="inline-block w-20">红色:</span>\r\n          <ZRate v-model="colorValue" color="red" />\r\n        </div>\r\n        <div>\r\n          <span class="inline-block w-20">紫色:</span>\r\n          <ZRate v-model="colorValue" color="purple" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- 自定义字符 -->\r\n    <div>\r\n      <h2 class="text-lg font-medium mb-2">自定义字符</h2>\r\n      <div class="space-y-2">\r\n        <ZRate v-model="customValue" character="好" />\r\n      </div>\r\n    </div>\r\n\r\n    <!-- 自定义尺寸 -->\r\n    <div>\r\n      <h2 class="text-lg font-medium mb-2">自定义尺寸</h2>\r\n      <div class="space-y-2">\r\n        <div>\r\n          <span class="inline-block w-20">小:</span>\r\n          <ZRate v-model="colorValue" size="small" />\r\n        </div>\r\n        <div>\r\n          <span class="inline-block w-20">默认:</span>\r\n          <ZRate v-model="colorValue" size="default" />\r\n        </div>\r\n        <div>\r\n          <span class="inline-block w-20">大:</span>\r\n          <ZRate v-model="colorValue" size="large" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- 自定义最大值 -->\r\n    <div>\r\n      <h2 class="text-lg font-medium mb-2">自定义最大值</h2>\r\n      <ZRate v-model="maxValue" :max="10" />\r\n      <div class="mt-2 text-sm text-gray-500">当前评分：{{ maxValue }}/10</div>\r\n    </div>\r\n\r\n    <!-- 显示分数 -->\r\n    <div>\r\n      <h2 class="text-lg font-medium mb-2">显示分数</h2>\r\n      <div class="space-y-2">\r\n        <div>\r\n          <span class="inline-block w-32">默认格式:</span>\r\n          <ZRate v-model="scoreValue" :allow-half="true" :show-score="true" />\r\n        </div>\r\n        <div>\r\n          <span class="inline-block w-32">自定义格式:</span>\r\n          <ZRate\r\n            v-model="scoreValue"\r\n            :allow-half="true"\r\n            :show-score="true"\r\n            :format-tooltip="formatTooltip"\r\n          />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>\r\n';
const __pageData = JSON.parse('{"title":"Rate","description":"","frontmatter":{},"headers":[],"relativePath":"components/rate/index.md","filePath":"components/rate/index.md"}');
const __default__ = { name: "components/rate/index.md" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __ssrInlineRender: true,
  setup(__props) {
    const __placeholder_visible_key__ = ref(true);
    const TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcmF0ZS1leGFtcGxlLWluZGV4 = shallowRef();
    onMounted(async () => {
      TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcmF0ZS1leGFtcGxlLWluZGV4.value = (await import("./index.BPYCr8od.js")).default;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StorybookLink = resolveComponent("StorybookLink");
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="rate" tabindex="-1">Rate <a class="header-anchor" href="#rate" aria-label="Permalink to &quot;Rate&quot;">​</a></h1><p>Rate 是一种允许用户通过选择星号、数字或其他符号来表达评价等级的交互组件，常用于商品评价、服务评分、内容反馈等场景。它将抽象的评价转化为可视化的量化指标，帮助用户快速传递主观感受，同时为系统提供数据收集入口。</p>`);
      _push(ssrRenderComponent(_component_StorybookLink, { link: "https://zxy-ui.github.io/zxy-ui/storybook/?path=/story/%E7%BB%84%E4%BB%B6-rate-%E8%AF%84%E5%88%86--basic" }, null, _parent));
      _push(`<h2 id="引用" tabindex="-1">引用 <a class="header-anchor" href="#引用" aria-label="Permalink to &quot;引用&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> { ZRate } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;@zxy-ui/vue&#39;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2>`);
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
              vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcmF0ZS1leGFtcGxlLWluZGV4)
            }, createSlots({ _: 2 }, [
              TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcmF0ZS1leGFtcGxlLWluZGV4.value ? {
                name: "vue",
                fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcmF0ZS1leGFtcGxlLWluZGV4), null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcmF0ZS1leGFtcGxlLWluZGV4))
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
                vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcmF0ZS1leGFtcGxlLWluZGV4)
              }, createSlots({ _: 2 }, [
                TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcmF0ZS1leGFtcGxlLWluZGV4.value ? {
                  name: "vue",
                  fn: withCtx(() => [
                    createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcmF0ZS1leGFtcGxlLWluZGV4))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/rate/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
