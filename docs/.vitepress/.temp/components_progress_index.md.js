import { defineComponent, ref, shallowRef, onMounted, resolveComponent, unref, withCtx, createSlots, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
/* empty css               */
import { VitepressDemoPlaceholder, VitepressDemoBox } from "vitepress-demo-plugin/client";
const TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcHJvZ3Jlc3MtZXhhbXBsZS1pbmRleAEqualEqual = `<template>\r
  <div class="space-y-8">\r
    <!-- 基础进度条 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">基础进度条</h3>\r
      <ZProgress :value="40" />\r
    </section>\r
\r
    <!-- 带文本的进度条 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">带文本的进度条</h3>\r
      <ZProgress :value="60" showText />\r
    </section>\r
\r
    <!-- 不同大小的进度条 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">不同大小的进度条</h3>\r
      <div class="space-y-4">\r
        <div>\r
          <p class="mb-2 text-sm text-gray-500">小号进度条</p>\r
          <ZProgress :value="30" size="sm" />\r
        </div>\r
        <div>\r
          <p class="mb-2 text-sm text-gray-500">中号进度条</p>\r
          <ZProgress :value="50" size="md" />\r
        </div>\r
        <div>\r
          <p class="mb-2 text-sm text-gray-500">大号进度条</p>\r
          <ZProgress :value="70" size="lg" />\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- 不同形状的进度条 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">不同形状的进度条</h3>\r
      <div class="space-y-4">\r
        <div>\r
          <p class="mb-2 text-sm text-gray-500">方形进度条</p>\r
          <ZProgress :value="40" shape="flat" />\r
        </div>\r
        <div>\r
          <p class="mb-2 text-sm text-gray-500">圆角进度条</p>\r
          <ZProgress :value="60" shape="rounded" />\r
        </div>\r
        <div>\r
          <p class="mb-2 text-sm text-gray-500">胶囊形进度条</p>\r
          <ZProgress :value="80" shape="pill" />\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- 不同状态的进度条 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">不同状态的进度条</h3>\r
      <div class="space-y-4">\r
        <div>\r
          <p class="mb-2 text-sm text-gray-500">默认状态</p>\r
          <ZProgress :value="40" variant="default" showText />\r
        </div>\r
        <div>\r
          <p class="mb-2 text-sm text-gray-500">成功状态</p>\r
          <ZProgress :value="100" variant="success" showText />\r
        </div>\r
        <div>\r
          <p class="mb-2 text-sm text-gray-500">警告状态</p>\r
          <ZProgress :value="70" variant="warning" showText />\r
        </div>\r
        <div>\r
          <p class="mb-2 text-sm text-gray-500">危险状态</p>\r
          <ZProgress :value="20" variant="danger" showText />\r
        </div>\r
        <div>\r
          <p class="mb-2 text-sm text-gray-500">信息状态</p>\r
          <ZProgress :value="50" variant="info" showText />\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- 条纹进度条 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">条纹进度条</h3>\r
      <ZProgress :value="60" striped />\r
    </section>\r
\r
    <!-- 动画进度条 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">动画进度条</h3>\r
      <ZProgress :value="60" striped animated />\r
    </section>\r
\r
    <!-- 不确定状态进度条 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">不确定状态进度条</h3>\r
      <ZProgress indeterminate />\r
    </section>\r
\r
    <!-- 自定义文本 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">自定义文本</h3>\r
      <ZProgress :value="75" showText>\r
        <template #text>\r
          <span class="font-bold">{{ Math.round(75) }}分 / 100分</span>\r
        </template>\r
      </ZProgress>\r
    </section>\r
\r
    <!-- 动态进度条 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">动态进度条</h3>\r
      <div class="space-y-4">\r
        <ZProgress :value="dynamicValue" showText />\r
        <div class="flex items-center gap-4">\r
          <button\r
            @click="startProgress"\r
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"\r
            :disabled="isProgressing"\r
          >\r
            开始进度\r
          </button>\r
          <button\r
            @click="resetProgress"\r
            class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"\r
          >\r
            重置\r
          </button>\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- 无样式模式 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">无样式模式</h3>\r
      <ZProgress\r
        :value="50"\r
        unstyled\r
        :pt="{\r
          root: 'w-full',\r
          container: 'w-full h-4 bg-gray-100 rounded-full overflow-hidden',\r
          bar: 'h-full bg-gradient-to-r from-purple-500 to-pink-500',\r
          text: 'text-right text-sm font-medium text-purple-700 mt-1',\r
        }"\r
        showText\r
      />\r
    </section>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { ZProgress } from '@zxy-ui/vue'\r
\r
const dynamicValue = ref(0)\r
const isProgressing = ref(false)\r
\r
const startProgress = () => {\r
  if (isProgressing.value) return\r
\r
  isProgressing.value = true\r
  dynamicValue.value = 0\r
\r
  const interval = setInterval(() => {\r
    dynamicValue.value += 1\r
\r
    if (dynamicValue.value >= 100) {\r
      clearInterval(interval)\r
      isProgressing.value = false\r
    }\r
  }, 50)\r
}\r
\r
const resetProgress = () => {\r
  dynamicValue.value = 0\r
}\r
<\/script>\r
`;
const __pageData = JSON.parse('{"title":"Progress","description":"","frontmatter":{},"headers":[],"relativePath":"components/progress/index.md","filePath":"components/progress/index.md"}');
const __default__ = { name: "components/progress/index.md" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __ssrInlineRender: true,
  setup(__props) {
    const __placeholder_visible_key__ = ref(true);
    const TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcHJvZ3Jlc3MtZXhhbXBsZS1pbmRleAEqualEqual = shallowRef();
    onMounted(async () => {
      TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcHJvZ3Jlc3MtZXhhbXBsZS1pbmRleAEqualEqual.value = (await import("./index.CNjUe3Se.js")).default;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StorybookLink = resolveComponent("StorybookLink");
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="progress" tabindex="-1">Progress <a class="header-anchor" href="#progress" aria-label="Permalink to &quot;Progress&quot;">​</a></h1><p>Progress 是一个进度条组件，用于展示操作的当前进度、状态和完成程度，帮助用户了解长时间任务的执行情况，常用于文件上传、数据加载、操作处理等场景。</p>`);
      _push(ssrRenderComponent(_component_StorybookLink, { link: "https://zxy-ui.github.io/zxy-ui/storybook/?path=/story/%E7%BB%84%E4%BB%B6-progress-%E8%BF%9B%E5%BA%A6%E6%9D%A1--basic" }, null, _parent));
      _push(`<h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> { ZProgress } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;@zxy-ui/vue&#39;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2>`);
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
              vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcHJvZ3Jlc3MtZXhhbXBsZS1pbmRleAEqualEqual)
            }, createSlots({ _: 2 }, [
              TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcHJvZ3Jlc3MtZXhhbXBsZS1pbmRleAEqualEqual.value ? {
                name: "vue",
                fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcHJvZ3Jlc3MtZXhhbXBsZS1pbmRleAEqualEqual), null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcHJvZ3Jlc3MtZXhhbXBsZS1pbmRleAEqualEqual))
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
                vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcHJvZ3Jlc3MtZXhhbXBsZS1pbmRleAEqualEqual)
              }, createSlots({ _: 2 }, [
                TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcHJvZ3Jlc3MtZXhhbXBsZS1pbmRleAEqualEqual.value ? {
                  name: "vue",
                  fn: withCtx(() => [
                    createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcHJvZ3Jlc3MtZXhhbXBsZS1pbmRleAEqualEqual))
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["onMount", "vueCode"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value</td><td>进度值，范围0-100</td><td>number</td><td>0</td></tr><tr><td>max</td><td>最大值</td><td>number</td><td>100</td></tr><tr><td>showText</td><td>是否显示进度文本</td><td>boolean</td><td>false</td></tr><tr><td>variant</td><td>进度条样式变体</td><td>&#39;default&#39; | &#39;success&#39; | &#39;warning&#39; | &#39;danger&#39; | &#39;info&#39;</td><td>&#39;default&#39;</td></tr><tr><td>size</td><td>进度条大小</td><td>&#39;sm&#39; | &#39;md&#39; | &#39;lg&#39;</td><td>&#39;md&#39;</td></tr><tr><td>shape</td><td>进度条形状</td><td>&#39;flat&#39; | &#39;rounded&#39; | &#39;pill&#39;</td><td>&#39;rounded&#39;</td></tr><tr><td>striped</td><td>是否显示条纹效果</td><td>boolean</td><td>false</td></tr><tr><td>animated</td><td>是否显示动画效果</td><td>boolean</td><td>false</td></tr><tr><td>indeterminate</td><td>是否为不确定状态</td><td>boolean</td><td>false</td></tr><tr><td>unstyled</td><td>是否使用无样式模式</td><td>boolean</td><td>false</td></tr><tr><td>pt</td><td>传递模板样式</td><td>ProgressPT</td><td>-</td></tr></tbody></table><h3 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>进度变化时触发</td><td>(value: number) =&gt; void</td></tr></tbody></table><h3 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h3><table tabindex="0"><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>text</td><td>自定义进度文本</td></tr></tbody></table><h3 id="样式定制" tabindex="-1">样式定制 <a class="header-anchor" href="#样式定制" aria-label="Permalink to &quot;样式定制&quot;">​</a></h3><p>当使用 <code>unstyled</code> 模式时，可以通过 <code>pt</code> 属性传递自定义样式：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">interface</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> ProgressPT</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">	root</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">	container</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">	bar</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">	text</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">}</span></span></code></pre></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/progress/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
