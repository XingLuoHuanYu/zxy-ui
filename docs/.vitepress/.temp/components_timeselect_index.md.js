import { defineComponent, ref, shallowRef, onMounted, resolveComponent, unref, withCtx, createSlots, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
/* empty css               */
import { VitepressDemoPlaceholder, VitepressDemoBox } from "vitepress-demo-plugin/client";
const TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdGltZXNlbGVjdC1leGFtcGxlLWluZGV4 = `<template>\r
  <div class="space-y-8">\r
    <!-- 基础用法 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">基础用法</h3>\r
      <div class="max-w-sm">\r
        <ZTimeSelect v-model="selectedTime" />\r
      </div>\r
      <div class="mt-2">当前选择的时间: {{ selectedTime || '未选择' }}</div>\r
    </section>\r
\r
    <!-- 自定义时间范围和步长 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">自定义时间范围和步长</h3>\r
      <div class="max-w-sm">\r
        <ZTimeSelect\r
          v-model="customRangeTime"\r
          start="09:00"\r
          end="18:00"\r
          :step="15"\r
        />\r
      </div>\r
      <div class="mt-2">\r
        <div>当前选择的时间: {{ customRangeTime || '未选择' }}</div>\r
        <div>时间范围: 09:00 至 18:00，步长: 15分钟</div>\r
      </div>\r
    </section>\r
\r
    <!-- 12小时制 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">12小时制</h3>\r
      <div class="max-w-sm">\r
        <ZTimeSelect v-model="time12h" format="12h" />\r
      </div>\r
      <div class="mt-2">当前选择的时间: {{ time12h || '未选择' }}</div>\r
    </section>\r
\r
    <!-- 自定义选项 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">自定义选项</h3>\r
      <div class="max-w-sm">\r
        <ZTimeSelect v-model="customOptionsTime" :options="customOptions" />\r
      </div>\r
      <div class="mt-2">\r
        <div>当前选择的时间: {{ customOptionsTime || '未选择' }}</div>\r
        <div>自定义选项: {{ customOptions.join(', ') }}</div>\r
      </div>\r
    </section>\r
\r
    <!-- 禁用状态 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">禁用状态</h3>\r
      <div class="flex flex-wrap gap-8">\r
        <div>\r
          <div class="max-w-sm">\r
            <ZTimeSelect v-model="disabledTime" disabled />\r
          </div>\r
          <div class="mt-2">禁用状态</div>\r
        </div>\r
        <div>\r
          <div class="max-w-sm">\r
            <ZTimeSelect v-model="readonlyTime" readonly />\r
          </div>\r
          <div class="mt-2">只读状态</div>\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- 不可清空 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">不可清空</h3>\r
      <div class="max-w-sm">\r
        <ZTimeSelect v-model="nonClearableTime" :clearable="false" />\r
      </div>\r
      <div class="mt-2">\r
        <div>当前选择的时间: {{ nonClearableTime || '未选择' }}</div>\r
      </div>\r
    </section>\r
\r
    <!-- 自定义占位文本 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">自定义占位文本</h3>\r
      <div class="max-w-sm">\r
        <ZTimeSelect v-model="placeholderTime" placeholder="请选择预约时间" />\r
      </div>\r
      <div class="mt-2">\r
        <div>当前选择的时间: {{ placeholderTime || '未选择' }}</div>\r
      </div>\r
    </section>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { ZTimeSelect } from '@zxy-ui/vue'\r
\r
// 基础用法\r
const selectedTime = ref('12:30')\r
\r
// 自定义时间范围和步长\r
const customRangeTime = ref('09:00')\r
\r
// 12小时制\r
const time12h = ref('02:30 PM')\r
\r
// 自定义选项\r
const customOptionsTime = ref('09:00')\r
const customOptions = ['09:00', '12:00', '15:00', '18:00']\r
\r
// 禁用状态\r
const disabledTime = ref('12:30')\r
const readonlyTime = ref('12:30')\r
\r
// 不可清空\r
const nonClearableTime = ref('12:30')\r
\r
// 自定义占位文本\r
const placeholderTime = ref('')\r
<\/script>\r
`;
const __pageData = JSON.parse('{"title":"TimeSelect 时间选择","description":"","frontmatter":{},"headers":[],"relativePath":"components/timeselect/index.md","filePath":"components/timeselect/index.md"}');
const __default__ = { name: "components/timeselect/index.md" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __ssrInlineRender: true,
  setup(__props) {
    const __placeholder_visible_key__ = ref(true);
    const TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdGltZXNlbGVjdC1leGFtcGxlLWluZGV4 = shallowRef();
    onMounted(async () => {
      TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdGltZXNlbGVjdC1leGFtcGxlLWluZGV4.value = (await import("./index.C3BPiSX-.js")).default;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StorybookLink = resolveComponent("StorybookLink");
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="timeselect-时间选择" tabindex="-1">TimeSelect 时间选择 <a class="header-anchor" href="#timeselect-时间选择" aria-label="Permalink to &quot;TimeSelect 时间选择&quot;">​</a></h1><p>TimeSelect 时间选择器用于从预定义的时间列表中选择时间，适用于需要限制用户只能选择特定时间点的场景。</p>`);
      _push(ssrRenderComponent(_component_StorybookLink, { link: "https://zxy-ui.github.io/zxy-ui/storybook/?path=/story/%E7%BB%84%E4%BB%B6-timeselect-%E6%97%B6%E9%97%B4%E9%80%89%E6%8B%A9--basic" }, null, _parent));
      _push(`<h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> { ZTimeSelect } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;@zxy-ui/vue&#39;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2>`);
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
              vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdGltZXNlbGVjdC1leGFtcGxlLWluZGV4)
            }, createSlots({ _: 2 }, [
              TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdGltZXNlbGVjdC1leGFtcGxlLWluZGV4.value ? {
                name: "vue",
                fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdGltZXNlbGVjdC1leGFtcGxlLWluZGV4), null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdGltZXNlbGVjdC1leGFtcGxlLWluZGV4))
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
                vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdGltZXNlbGVjdC1leGFtcGxlLWluZGV4)
              }, createSlots({ _: 2 }, [
                TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdGltZXNlbGVjdC1leGFtcGxlLWluZGV4.value ? {
                  name: "vue",
                  fn: withCtx(() => [
                    createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdGltZXNlbGVjdC1leGFtcGxlLWluZGV4))
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["onMount", "vueCode"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>modelValue</td><td>绑定值，选中的时间</td><td><code>string</code></td><td>-</td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>readonly</td><td>是否只读</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>placeholder</td><td>占位文本</td><td><code>string</code></td><td><code>&#39;选择时间&#39;</code></td></tr><tr><td>options</td><td>可选时间选项列表</td><td><code>string[]</code></td><td>-</td></tr><tr><td>start</td><td>开始时间，格式为 HH:mm</td><td><code>string</code></td><td><code>&#39;00:00&#39;</code></td></tr><tr><td>end</td><td>结束时间，格式为 HH:mm</td><td><code>string</code></td><td><code>&#39;23:59&#39;</code></td></tr><tr><td>step</td><td>时间间隔，单位为分钟</td><td><code>number</code></td><td><code>30</code></td></tr><tr><td>format</td><td>时间格式</td><td><code>&#39;12h&#39; | &#39;24h&#39;</code></td><td><code>&#39;24h&#39;</code></td></tr><tr><td>clearable</td><td>是否可清空</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>unstyled</td><td>是否禁用默认样式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>pt</td><td>自定义样式配置</td><td><code>TimeSelectPT</code></td><td>-</td></tr></tbody></table><h3 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:modelValue</td><td>选中时间变化时触发</td><td><code>(value: string | null) =&gt; void</code></td></tr><tr><td>change</td><td>选中时间变化时触发</td><td><code>(value: string | null) =&gt; void</code></td></tr><tr><td>focus</td><td>输入框获得焦点时触发</td><td><code>(e: FocusEvent) =&gt; void</code></td></tr><tr><td>blur</td><td>输入框失去焦点时触发</td><td><code>(e: FocusEvent) =&gt; void</code></td></tr><tr><td>clear</td><td>点击清空按钮时触发</td><td><code>() =&gt; void</code></td></tr></tbody></table><h3 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h3><p>TimeSelect 组件暂不提供插槽。</p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/timeselect/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
