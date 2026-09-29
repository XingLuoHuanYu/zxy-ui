import { defineComponent, ref, shallowRef, onMounted, resolveComponent, unref, withCtx, createSlots, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
/* empty css               */
import { VitepressDemoPlaceholder, VitepressDemoBox } from "vitepress-demo-plugin/client";
const TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtZGF0ZXRpbWVwaWNrZXItZXhhbXBsZS1pbmRleAEqualEqual = `<template>\r
  <div class="space-y-8">\r
    <!-- 基础用法 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">基础用法</h3>\r
      <div class="max-w-sm">\r
        <ZDateTimePicker v-model="selectedDateTime" />\r
      </div>\r
      <div class="mt-2">\r
        当前选择的日期时间:\r
        {{ selectedDateTime ? selectedDateTime.toLocaleString() : '未选择' }}\r
      </div>\r
    </section>\r
\r
    <!-- 日期范围限制 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">日期范围限制</h3>\r
      <div class="max-w-sm">\r
        <ZDateTimePicker\r
          v-model="rangeDateTime"\r
          :min="minDateTime"\r
          :max="maxDateTime"\r
        />\r
      </div>\r
      <div class="mt-2">\r
        <div>\r
          当前选择的日期时间:\r
          {{ rangeDateTime ? rangeDateTime.toLocaleString() : '未选择' }}\r
        </div>\r
        <div>\r
          可选范围: {{ minDateTime.toLocaleString() }} 至\r
          {{ maxDateTime.toLocaleString() }}\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- 12小时制 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">12小时制</h3>\r
      <div class="max-w-sm">\r
        <ZDateTimePicker v-model="time12hDateTime" timeFormat="12h" />\r
      </div>\r
      <div class="mt-2">\r
        <div>\r
          当前选择的日期时间:\r
          {{ time12hDateTime ? time12hDateTime.toLocaleString() : '未选择' }}\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- 显示秒选择器 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">显示秒选择器</h3>\r
      <div class="max-w-sm">\r
        <ZDateTimePicker v-model="secondsDateTime" :showSeconds="true" />\r
      </div>\r
      <div class="mt-2">\r
        <div>\r
          当前选择的日期时间:\r
          {{ secondsDateTime ? secondsDateTime.toLocaleString() : '未选择' }}\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- 自定义步长 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">自定义步长</h3>\r
      <div class="max-w-sm">\r
        <ZDateTimePicker\r
          v-model="stepsDateTime"\r
          :hourStep="2"\r
          :minuteStep="15"\r
          :secondStep="30"\r
          :showSeconds="true"\r
        />\r
      </div>\r
      <div class="mt-2">\r
        <div>\r
          当前选择的日期时间:\r
          {{ stepsDateTime ? stepsDateTime.toLocaleString() : '未选择' }}\r
        </div>\r
        <div>小时步长: 2, 分钟步长: 15, 秒步长: 30</div>\r
      </div>\r
    </section>\r
\r
    <!-- 禁用状态 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">禁用状态</h3>\r
      <div class="flex flex-wrap gap-8">\r
        <div>\r
          <div class="max-w-sm">\r
            <ZDateTimePicker v-model="disabledDateTime" disabled />\r
          </div>\r
          <div class="mt-2">禁用状态</div>\r
        </div>\r
        <div>\r
          <div class="max-w-sm">\r
            <ZDateTimePicker v-model="readonlyDateTime" readonly />\r
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
        <ZDateTimePicker v-model="nonClearableDateTime" :clearable="false" />\r
      </div>\r
      <div class="mt-2">\r
        <div>\r
          当前选择的日期时间:\r
          {{\r
            nonClearableDateTime\r
              ? nonClearableDateTime.toLocaleString()\r
              : '未选择'\r
          }}\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- 本地化 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">本地化</h3>\r
      <div class="max-w-sm">\r
        <ZDateTimePicker v-model="localeDateTime" locale="zh-CN" />\r
      </div>\r
      <div class="mt-2">\r
        <div>\r
          当前选择的日期时间:\r
          {{ localeDateTime ? localeDateTime.toLocaleString() : '未选择' }}\r
        </div>\r
        <div>本地化: 中文</div>\r
      </div>\r
    </section>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { ZDateTimePicker } from '@zxy-ui/vue'\r
\r
// 基础用法\r
const selectedDateTime = ref(new Date())\r
\r
// 日期范围限制\r
const rangeDateTime = ref(new Date())\r
const today = new Date()\r
const minDateTime = new Date(\r
  today.getFullYear(),\r
  today.getMonth(),\r
  today.getDate() - 7,\r
)\r
const maxDateTime = new Date(\r
  today.getFullYear(),\r
  today.getMonth(),\r
  today.getDate() + 7,\r
)\r
\r
// 12小时制\r
const time12hDateTime = ref(new Date())\r
\r
// 显示秒选择器\r
const secondsDateTime = ref(new Date())\r
\r
// 自定义步长\r
const stepsDateTime = ref(new Date())\r
\r
// 禁用状态\r
const disabledDateTime = ref(new Date())\r
const readonlyDateTime = ref(new Date())\r
\r
// 不可清空\r
const nonClearableDateTime = ref(new Date())\r
\r
// 本地化\r
const localeDateTime = ref(new Date())\r
<\/script>\r
`;
const __pageData = JSON.parse('{"title":"DateTimePicker 日期时间选择器","description":"","frontmatter":{},"headers":[],"relativePath":"components/datetimepicker/index.md","filePath":"components/datetimepicker/index.md"}');
const __default__ = { name: "components/datetimepicker/index.md" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __ssrInlineRender: true,
  setup(__props) {
    const __placeholder_visible_key__ = ref(true);
    const TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtZGF0ZXRpbWVwaWNrZXItZXhhbXBsZS1pbmRleAEqualEqual = shallowRef();
    onMounted(async () => {
      TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtZGF0ZXRpbWVwaWNrZXItZXhhbXBsZS1pbmRleAEqualEqual.value = (await import("./index.N_nL6W6G.js")).default;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StorybookLink = resolveComponent("StorybookLink");
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="datetimepicker-日期时间选择器" tabindex="-1">DateTimePicker 日期时间选择器 <a class="header-anchor" href="#datetimepicker-日期时间选择器" aria-label="Permalink to &quot;DateTimePicker 日期时间选择器&quot;">​</a></h1><p>DateTimePicker 日期时间选择器用于让用户同时选择日期和时间，结合了日期选择和时间选择的功能，通过选项卡界面提供直观的操作体验。</p>`);
      _push(ssrRenderComponent(_component_StorybookLink, { link: "https://zxy-ui.github.io/zxy-ui/storybook/?path=/story/%E7%BB%84%E4%BB%B6-datetimepicker-%E6%97%A5%E6%9C%9F%E6%97%B6%E9%97%B4%E9%80%89%E6%8B%A9%E5%99%A8--basic" }, null, _parent));
      _push(`<h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> { ZDateTimePicker } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;@zxy-ui/vue&#39;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2>`);
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
              vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtZGF0ZXRpbWVwaWNrZXItZXhhbXBsZS1pbmRleAEqualEqual)
            }, createSlots({ _: 2 }, [
              TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtZGF0ZXRpbWVwaWNrZXItZXhhbXBsZS1pbmRleAEqualEqual.value ? {
                name: "vue",
                fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtZGF0ZXRpbWVwaWNrZXItZXhhbXBsZS1pbmRleAEqualEqual), null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtZGF0ZXRpbWVwaWNrZXItZXhhbXBsZS1pbmRleAEqualEqual))
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
                vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtZGF0ZXRpbWVwaWNrZXItZXhhbXBsZS1pbmRleAEqualEqual)
              }, createSlots({ _: 2 }, [
                TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtZGF0ZXRpbWVwaWNrZXItZXhhbXBsZS1pbmRleAEqualEqual.value ? {
                  name: "vue",
                  fn: withCtx(() => [
                    createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtZGF0ZXRpbWVwaWNrZXItZXhhbXBsZS1pbmRleAEqualEqual))
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["onMount", "vueCode"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>modelValue</td><td>绑定值，选中的日期时间</td><td><code>Date</code></td><td>-</td></tr><tr><td>min</td><td>可选择的最小日期时间</td><td><code>Date</code></td><td>-</td></tr><tr><td>max</td><td>可选择的最大日期时间</td><td><code>Date</code></td><td>-</td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>readonly</td><td>是否只读</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>placeholder</td><td>占位文本</td><td><code>string</code></td><td><code>&#39;选择日期时间&#39;</code></td></tr><tr><td>dateFormat</td><td>日期格式</td><td><code>string</code></td><td>-</td></tr><tr><td>timeFormat</td><td>时间格式</td><td><code>&#39;12h&#39; | &#39;24h&#39;</code></td><td><code>&#39;24h&#39;</code></td></tr><tr><td>firstDayOfWeek</td><td>一周的第一天，0表示周日，1表示周一</td><td><code>0 | 1 | 2 | 3 | 4 | 5 | 6</code></td><td><code>0</code></td></tr><tr><td>locale</td><td>本地化配置，影响月份和星期的显示</td><td><code>string</code></td><td>系统默认</td></tr><tr><td>hourStep</td><td>小时选择步长</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td>minuteStep</td><td>分钟选择步长</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td>secondStep</td><td>秒选择步长</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td>showSeconds</td><td>是否显示秒选择器</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>clearable</td><td>是否可清空</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>unstyled</td><td>是否禁用默认样式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>pt</td><td>自定义样式配置</td><td><code>DateTimePickerPT</code></td><td>-</td></tr></tbody></table><h3 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:modelValue</td><td>选中日期时间变化时触发</td><td><code>(date: Date | null) =&gt; void</code></td></tr><tr><td>change</td><td>选中日期时间变化时触发</td><td><code>(date: Date | null) =&gt; void</code></td></tr><tr><td>focus</td><td>输入框获得焦点时触发</td><td><code>(e: FocusEvent) =&gt; void</code></td></tr><tr><td>blur</td><td>输入框失去焦点时触发</td><td><code>(e: FocusEvent) =&gt; void</code></td></tr><tr><td>clear</td><td>点击清空按钮时触发</td><td><code>() =&gt; void</code></td></tr></tbody></table><h3 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h3><p>DateTimePicker 组件暂不提供插槽。</p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/datetimepicker/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
