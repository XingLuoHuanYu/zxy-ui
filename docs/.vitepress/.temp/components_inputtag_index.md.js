import { defineComponent, ref, shallowRef, onMounted, resolveComponent, unref, withCtx, createSlots, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
/* empty css               */
import { VitepressDemoPlaceholder, VitepressDemoBox } from "vitepress-demo-plugin/client";
const TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtaW5wdXR0YWctZXhhbXBsZS1pbmRleAEqualEqual = `<template>\r
  <div class="space-y-8">\r
    <!-- 基础用法 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">基础用法</h2>\r
      <div class="max-w-md">\r
        <ZInputTag v-model="tagValue" placeholder="请输入标签后按回车" />\r
        <div class="text-sm text-gray-500 mt-2">\r
          当前标签值: {{ tagValue.join(', ') || '空' }}\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- 预设标签 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">预设标签</h2>\r
      <div class="max-w-md">\r
        <ZInputTag v-model="presetTags" placeholder="请输入更多标签" />\r
      </div>\r
    </section>\r
\r
    <!-- 不同尺寸 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">不同尺寸</h2>\r
      <div class="grid grid-cols-1 gap-4 max-w-md">\r
        <ZInputTag\r
          v-model="sizeTags"\r
          size="small"\r
          placeholder="小型标签输入框"\r
        />\r
        <ZInputTag\r
          v-model="sizeTags"\r
          size="default"\r
          placeholder="默认尺寸标签输入框"\r
        />\r
        <ZInputTag\r
          v-model="sizeTags"\r
          size="large"\r
          placeholder="大型标签输入框"\r
        />\r
      </div>\r
    </section>\r
\r
    <!-- 前缀和后缀 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">前缀和后缀</h2>\r
      <div class="grid grid-cols-1 gap-4 max-w-md">\r
        <ZInputTag v-model="prefixTags" placeholder="带前缀">\r
          <template #prefix>标签:</template>\r
        </ZInputTag>\r
        <ZInputTag v-model="suffixTags" placeholder="带后缀">\r
          <template #suffix>+</template>\r
        </ZInputTag>\r
      </div>\r
    </section>\r
\r
    <!-- 最大数量和计数 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">最大数量和计数</h2>\r
      <div class="max-w-md">\r
        <ZInputTag\r
          v-model="maxCountTags"\r
          :maxCount="5"\r
          showCount\r
          placeholder="最多添加5个标签"\r
        />\r
      </div>\r
    </section>\r
\r
    <!-- 不可关闭 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">不可关闭标签</h2>\r
      <div class="max-w-md">\r
        <ZInputTag\r
          v-model="fixedTags"\r
          :closable="false"\r
          placeholder="标签不可删除"\r
        />\r
      </div>\r
    </section>\r
\r
    <!-- 不同状态 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">不同状态</h2>\r
      <div class="grid grid-cols-1 gap-4 max-w-md">\r
        <ZInputTag v-model="statusTags" status="error" placeholder="错误状态" />\r
        <ZInputTag\r
          v-model="statusTags"\r
          status="warning"\r
          placeholder="警告状态"\r
        />\r
        <ZInputTag\r
          v-model="statusTags"\r
          status="success"\r
          placeholder="成功状态"\r
        />\r
      </div>\r
    </section>\r
\r
    <!-- 禁用和只读 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">禁用和只读</h2>\r
      <div class="grid grid-cols-1 gap-4 max-w-md">\r
        <ZInputTag v-model="disabledTags" disabled placeholder="禁用状态" />\r
        <ZInputTag v-model="readonlyTags" readonly placeholder="只读状态" />\r
      </div>\r
    </section>\r
\r
    <!-- 自定义样式 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">自定义样式 (PT)</h2>\r
      <div class="max-w-md">\r
        <ZInputTag\r
          v-model="customTags"\r
          placeholder="自定义样式"\r
          :pt="{\r
            wrapper:\r
              'border-purple-500 focus-within:border-purple-700 focus-within:ring-purple-200',\r
            tag: 'bg-purple-100 text-purple-800 border border-purple-300',\r
            tagClose: 'text-purple-800 hover:text-purple-950',\r
          }"\r
        />\r
      </div>\r
    </section>\r
\r
    <!-- 无样式模式 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">无样式模式</h2>\r
      <div class="max-w-md">\r
        <ZInputTag\r
          v-model="unstyledTags"\r
          placeholder="自定义所有样式"\r
          unstyled\r
          :pt="{\r
            root: 'w-full',\r
            wrapper:\r
              'bg-gradient-to-r from-blue-500 to-purple-500 p-0.5 rounded-md flex flex-wrap items-center',\r
            input: 'px-3 py-1 bg-white flex-grow outline-none rounded-sm',\r
            tag: 'bg-blue-100 text-blue-800 rounded-full px-3 py-1 m-1 flex items-center',\r
            tagClose: 'ml-1 text-blue-500 hover:text-blue-700 font-bold',\r
          }"\r
        />\r
      </div>\r
    </section>\r
\r
    <!-- 实际应用案例 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">实际应用案例: 文章标签</h2>\r
      <div class="max-w-lg border p-4 rounded-md shadow-sm bg-white">\r
        <div class="mb-4">\r
          <label class="block text-sm font-medium text-gray-700 mb-1">\r
            文章标题\r
          </label>\r
          <input\r
            type="text"\r
            v-model="article.title"\r
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"\r
            placeholder="请输入文章标题"\r
          />\r
        </div>\r
\r
        <div class="mb-4">\r
          <label class="block text-sm font-medium text-gray-700 mb-1">\r
            文章标签\r
            <span class="text-xs text-gray-500">(最多5个)</span>\r
          </label>\r
          <ZInputTag\r
            v-model="article.tags"\r
            :maxCount="5"\r
            showCount\r
            placeholder="输入标签后按回车"\r
          />\r
        </div>\r
\r
        <div>\r
          <button\r
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"\r
            :disabled="!article.title || article.tags.length === 0"\r
          >\r
            发布文章\r
          </button>\r
        </div>\r
      </div>\r
    </section>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { ZInputTag } from '@zxy-ui/vue'\r
\r
// 基础用法\r
const tagValue = ref<string[]>([])\r
\r
// 预设标签\r
const presetTags = ref<string[]>(['JavaScript', 'Vue', 'React'])\r
\r
// 不同尺寸\r
const sizeTags = ref<string[]>(['小', '中', '大'])\r
\r
// 前缀和后缀\r
const prefixTags = ref<string[]>(['前缀示例'])\r
const suffixTags = ref<string[]>(['后缀示例'])\r
\r
// 最大数量和计数\r
const maxCountTags = ref<string[]>(['限制数量'])\r
\r
// 不可关闭\r
const fixedTags = ref<string[]>(['固定标签1', '固定标签2'])\r
\r
// 不同状态\r
const statusTags = ref<string[]>(['状态示例'])\r
\r
// 禁用和只读\r
const disabledTags = ref<string[]>(['禁用标签'])\r
const readonlyTags = ref<string[]>(['只读标签'])\r
\r
// 自定义样式\r
const customTags = ref<string[]>(['自定义', '样式'])\r
\r
// 无样式模式\r
const unstyledTags = ref<string[]>(['完全', '自定义'])\r
\r
// 实际应用案例\r
const article = ref({\r
  title: '',\r
  tags: ['Vue3', 'TypeScript'],\r
})\r
<\/script>\r
`;
const __pageData = JSON.parse('{"title":"InputTag 标签输入框","description":"","frontmatter":{},"headers":[],"relativePath":"components/inputtag/index.md","filePath":"components/inputtag/index.md"}');
const __default__ = { name: "components/inputtag/index.md" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __ssrInlineRender: true,
  setup(__props) {
    const __placeholder_visible_key__ = ref(true);
    const TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtaW5wdXR0YWctZXhhbXBsZS1pbmRleAEqualEqual = shallowRef();
    onMounted(async () => {
      TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtaW5wdXR0YWctZXhhbXBsZS1pbmRleAEqualEqual.value = (await import("./index.DizpcW9I.js")).default;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StorybookLink = resolveComponent("StorybookLink");
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="inputtag-标签输入框" tabindex="-1">InputTag 标签输入框 <a class="header-anchor" href="#inputtag-标签输入框" aria-label="Permalink to &quot;InputTag 标签输入框&quot;">​</a></h1><p>InputTag 是一个用于输入和展示多个标签的组件，常用于关键词、标签、邮箱等需要多值输入的场景。</p>`);
      _push(ssrRenderComponent(_component_StorybookLink, { link: "https://zxy-ui.github.io/zxy-ui/storybook/?path=/story/%E7%BB%84%E4%BB%B6-inputtag-%E6%A0%87%E7%AD%BE%E8%BE%93%E5%85%A5%E6%A1%86--basic" }, null, _parent));
      _push(`<h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> { ZInputTag } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;@zxy-ui/vue&#39;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2>`);
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
              vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtaW5wdXR0YWctZXhhbXBsZS1pbmRleAEqualEqual)
            }, createSlots({ _: 2 }, [
              TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtaW5wdXR0YWctZXhhbXBsZS1pbmRleAEqualEqual.value ? {
                name: "vue",
                fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtaW5wdXR0YWctZXhhbXBsZS1pbmRleAEqualEqual), null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtaW5wdXR0YWctZXhhbXBsZS1pbmRleAEqualEqual))
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
                vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtaW5wdXR0YWctZXhhbXBsZS1pbmRleAEqualEqual)
              }, createSlots({ _: 2 }, [
                TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtaW5wdXR0YWctZXhhbXBsZS1pbmRleAEqualEqual.value ? {
                  name: "vue",
                  fn: withCtx(() => [
                    createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtaW5wdXR0YWctZXhhbXBsZS1pbmRleAEqualEqual))
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["onMount", "vueCode"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>modelValue</td><td>标签值数组</td><td><code>string[]</code></td><td><code>[]</code></td></tr><tr><td>placeholder</td><td>占位符文本</td><td><code>string</code></td><td><code>&#39;&#39;</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>readonly</td><td>是否只读</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>输入框尺寸</td><td><code>&#39;small&#39; | &#39;default&#39; | &#39;large&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>prefixIcon</td><td>前缀图标</td><td><code>string</code></td><td>-</td></tr><tr><td>suffixIcon</td><td>后缀图标</td><td><code>string</code></td><td>-</td></tr><tr><td>closable</td><td>是否可关闭标签</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>maxCount</td><td>最大标签数量</td><td><code>number</code></td><td>-</td></tr><tr><td>showCount</td><td>是否显示数量统计</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>autofocus</td><td>自动获取焦点</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>status</td><td>输入框状态</td><td><code>&#39;error&#39; | &#39;warning&#39; | &#39;success&#39;</code></td><td>-</td></tr><tr><td>unstyled</td><td>是否使用无样式模式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>pt</td><td>传递模板样式</td><td><code>InputTagPT</code></td><td>-</td></tr></tbody></table><h3 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>update:modelValue</td><td>更新标签值时触发</td><td><code>(value: string[])</code></td></tr><tr><td>change</td><td>标签值变化时触发</td><td><code>(value: string[])</code></td></tr><tr><td>add</td><td>添加标签时触发</td><td><code>(value: string)</code></td></tr><tr><td>remove</td><td>移除标签时触发</td><td><code>(value: string, index: number)</code></td></tr><tr><td>focus</td><td>获得焦点时触发</td><td><code>(event: FocusEvent)</code></td></tr><tr><td>blur</td><td>失去焦点时触发</td><td><code>(event: FocusEvent)</code></td></tr></tbody></table><h3 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>prefix</td><td>前缀内容</td></tr><tr><td>suffix</td><td>后缀内容</td></tr></tbody></table><h3 id="样式接口" tabindex="-1">样式接口 <a class="header-anchor" href="#样式接口" aria-label="Permalink to &quot;样式接口&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">type</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> InputTagPT</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">	root</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">	wrapper</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">	input</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">	prefix</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">	suffix</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">	tag</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">	tagClose</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">	count</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">}</span></span></code></pre></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/inputtag/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
