import { defineComponent, ref, shallowRef, onMounted, resolveComponent, unref, withCtx, createSlots, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
/* empty css               */
import { VitepressDemoPlaceholder, VitepressDemoBox } from "vitepress-demo-plugin/client";
const TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdGFibGUtZXhhbXBsZS1pbmRleAEqualEqual = `<script setup lang="ts">\r
import { ZTable } from '@zxy-ui/vue'\r
import { computed, ref } from 'vue'\r
\r
interface TableColumn {\r
  key: string\r
  title: string\r
  width?: string | number\r
  align?: 'left' | 'center' | 'right'\r
}\r
\r
const columns: TableColumn[] = [\r
  { key: 'name', title: '姓名' },\r
  { key: 'role', title: '角色' },\r
  { key: 'status', title: '状态', align: 'center' },\r
  { key: 'joinedAt', title: '加入时间', align: 'right' },\r
]\r
\r
const rows = ref([\r
  {\r
    name: '张三',\r
    role: '前端工程师',\r
    status: 'active',\r
    joinedAt: '2026-01-12',\r
  },\r
  {\r
    name: '李四',\r
    role: '产品经理',\r
    status: 'inactive',\r
    joinedAt: '2025-10-08',\r
  },\r
  { name: '王五', role: '设计师', status: 'active', joinedAt: '2024-06-21' },\r
])\r
\r
const emptyRows = ref<any[]>([])\r
\r
const statusLabel = (status: string) =>\r
  status === 'active' ? '启用中' : '已停用'\r
\r
const statusClass = (status: string) =>\r
  status === 'active'\r
    ? 'inline-flex rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-700 dark:bg-green-900/40 dark:text-green-300'\r
    : 'inline-flex rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-300'\r
\r
const count = computed(() => rows.value.length)\r
<\/script>\r
\r
<template>\r
  <div class="space-y-8">\r
    <section class="space-y-3">\r
      <h3 class="text-lg font-medium">基础用法</h3>\r
      <ZTable :columns="columns" :data="rows" />\r
    </section>\r
\r
    <section class="space-y-3">\r
      <h3 class="text-lg font-medium">斑马纹 + 边框 + 紧凑模式</h3>\r
      <ZTable :columns="columns" :data="rows" stripe border dense />\r
    </section>\r
\r
    <section class="space-y-3">\r
      <h3 class="text-lg font-medium">自定义单元格</h3>\r
      <ZTable :columns="columns" :data="rows" border>\r
        <template #status="{ row }">\r
          <span :class="statusClass(row.status)">\r
            {{ statusLabel(row.status) }}\r
          </span>\r
        </template>\r
      </ZTable>\r
      <p class="text-sm text-gray-500 dark:text-gray-400">\r
        当前共 {{ count }} 条数据\r
      </p>\r
    </section>\r
\r
    <section class="space-y-3">\r
      <h3 class="text-lg font-medium">空状态插槽</h3>\r
      <ZTable :columns="columns" :data="emptyRows" empty-text="暂无数据">\r
        <template #empty>\r
          <div class="py-4 text-sm text-gray-500 dark:text-gray-400">\r
            当前筛选条件下没有结果\r
          </div>\r
        </template>\r
      </ZTable>\r
    </section>\r
  </div>\r
</template>\r
`;
const __pageData = JSON.parse('{"title":"Table 表格","description":"","frontmatter":{},"headers":[],"relativePath":"components/table/index.md","filePath":"components/table/index.md"}');
const __default__ = { name: "components/table/index.md" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __ssrInlineRender: true,
  setup(__props) {
    const __placeholder_visible_key__ = ref(true);
    const TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdGFibGUtZXhhbXBsZS1pbmRleAEqualEqual = shallowRef();
    onMounted(async () => {
      TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdGFibGUtZXhhbXBsZS1pbmRleAEqualEqual.value = (await import("./index.Cu5ZPbjY.js")).default;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="table-表格" tabindex="-1">Table 表格 <a class="header-anchor" href="#table-表格" aria-label="Permalink to &quot;Table 表格&quot;">​</a></h1><p>Table 用于结构化展示多行数据，支持列配置、单元格插槽渲染、空状态、斑马纹、边框和紧凑模式。</p><h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> { ZTable } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;@zxy-ui/vue&#39;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2>`);
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
              vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdGFibGUtZXhhbXBsZS1pbmRleAEqualEqual)
            }, createSlots({ _: 2 }, [
              TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdGFibGUtZXhhbXBsZS1pbmRleAEqualEqual.value ? {
                name: "vue",
                fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdGFibGUtZXhhbXBsZS1pbmRleAEqualEqual), null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdGFibGUtZXhhbXBsZS1pbmRleAEqualEqual))
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
                vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdGFibGUtZXhhbXBsZS1pbmRleAEqualEqual)
              }, createSlots({ _: 2 }, [
                TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdGFibGUtZXhhbXBsZS1pbmRleAEqualEqual.value ? {
                  name: "vue",
                  fn: withCtx(() => [
                    createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdGFibGUtZXhhbXBsZS1pbmRleAEqualEqual))
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["onMount", "vueCode"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>data</td><td>表格数据源</td><td><code>any[]</code></td><td><code>[]</code></td></tr><tr><td>columns</td><td>列配置</td><td><code>TableColumn[]</code></td><td><code>[]</code></td></tr><tr><td>stripe</td><td>是否启用斑马纹</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>border</td><td>是否显示边框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>dense</td><td>是否使用紧凑模式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>emptyText</td><td>空数据文案</td><td><code>string</code></td><td><code>&#39;No Data&#39;</code></td></tr></tbody></table><h3 id="tablecolumn" tabindex="-1">TableColumn <a class="header-anchor" href="#tablecolumn" aria-label="Permalink to &quot;TableColumn&quot;">​</a></h3><table tabindex="0"><thead><tr><th>字段名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>列字段名，对应数据键值和动态插槽名</td><td><code>string</code></td><td>-</td></tr><tr><td>title</td><td>表头标题</td><td><code>string</code></td><td>-</td></tr><tr><td>width</td><td>列宽，支持字符串或数字</td><td><code>string | number</code></td><td>-</td></tr><tr><td>align</td><td>对齐方式</td><td><code>&#39;left&#39; | &#39;center&#39; | &#39;right&#39;</code></td><td><code>&#39;left&#39;</code></td></tr></tbody></table><h3 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h3><table tabindex="0"><thead><tr><th>插槽名</th><th>说明</th><th>作用域参数</th></tr></thead><tbody><tr><td>empty</td><td>自定义空状态内容</td><td>-</td></tr><tr><td><code>#&lt;column.key&gt;</code></td><td>按列渲染单元格</td><td><code>{ row, index }</code></td></tr></tbody></table></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/table/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
