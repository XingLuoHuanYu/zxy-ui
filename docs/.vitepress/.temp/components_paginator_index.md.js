import { defineComponent, ref, shallowRef, onMounted, resolveComponent, unref, withCtx, createSlots, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
/* empty css               */
import { VitepressDemoPlaceholder, VitepressDemoBox } from "vitepress-demo-plugin/client";
const TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcGFnaW5hdG9yLWV4YW1wbGUtaW5kZXgEqual = `<template>\r
  <div class="space-y-8">\r
    <!-- 基础分页器 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">基础分页器</h3>\r
      <ZPaginator :totalPages="10" />\r
    </section>\r
\r
    <!-- 分页器大小 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">分页器大小</h3>\r
      <div class="space-y-4">\r
        <div>\r
          <p class="mb-2 text-sm text-gray-500">小尺寸</p>\r
          <ZPaginator :totalPages="10" size="sm" />\r
        </div>\r
        <div>\r
          <p class="mb-2 text-sm text-gray-500">中尺寸</p>\r
          <ZPaginator :totalPages="10" size="md" />\r
        </div>\r
        <div>\r
          <p class="mb-2 text-sm text-gray-500">大尺寸</p>\r
          <ZPaginator :totalPages="10" size="lg" />\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- 分页器变体 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">分页器变体</h3>\r
      <div class="space-y-4">\r
        <div>\r
          <p class="mb-2 text-sm text-gray-500">默认样式</p>\r
          <ZPaginator :totalPages="10" variant="default" />\r
        </div>\r
        <div>\r
          <p class="mb-2 text-sm text-gray-500">轮廓样式</p>\r
          <ZPaginator :totalPages="10" variant="outline" />\r
        </div>\r
        <div>\r
          <p class="mb-2 text-sm text-gray-500">文本样式</p>\r
          <ZPaginator :totalPages="10" variant="text" />\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- 分页器形状 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">分页器形状</h3>\r
      <div class="space-y-4">\r
        <div>\r
          <p class="mb-2 text-sm text-gray-500">方形</p>\r
          <ZPaginator :totalPages="10" shape="square" />\r
        </div>\r
        <div>\r
          <p class="mb-2 text-sm text-gray-500">圆角</p>\r
          <ZPaginator :totalPages="10" shape="rounded" />\r
        </div>\r
        <div>\r
          <p class="mb-2 text-sm text-gray-500">圆形</p>\r
          <ZPaginator :totalPages="10" shape="circle" />\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- 可见页码数量 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">可见页码数量</h3>\r
      <div class="space-y-4">\r
        <div>\r
          <p class="mb-2 text-sm text-gray-500">显示3个页码</p>\r
          <ZPaginator :totalPages="20" :visiblePageCount="3" :modelValue="10" />\r
        </div>\r
        <div>\r
          <p class="mb-2 text-sm text-gray-500">显示5个页码</p>\r
          <ZPaginator :totalPages="20" :visiblePageCount="5" :modelValue="10" />\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- 带页码跳转 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">带页码跳转</h3>\r
      <ZPaginator :totalPages="100" showJumper />\r
    </section>\r
\r
    <!-- 受控分页器 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">受控分页器</h3>\r
      <div class="space-y-4">\r
        <p>当前页码: {{ currentPage }}</p>\r
        <ZPaginator :totalPages="10" v-model="currentPage" />\r
        <div class="flex gap-2">\r
          <button\r
            @click="currentPage = Math.max(1, currentPage - 1)"\r
            class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"\r
          >\r
            上一页\r
          </button>\r
          <button\r
            @click="currentPage = Math.min(10, currentPage + 1)"\r
            class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"\r
          >\r
            下一页\r
          </button>\r
        </div>\r
      </div>\r
    </section>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { ZPaginator } from '@zxy-ui/vue'\r
\r
const currentPage = ref(1)\r
<\/script>\r
`;
const __pageData = JSON.parse('{"title":"Paginator","description":"","frontmatter":{},"headers":[],"relativePath":"components/paginator/index.md","filePath":"components/paginator/index.md"}');
const __default__ = { name: "components/paginator/index.md" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __ssrInlineRender: true,
  setup(__props) {
    const __placeholder_visible_key__ = ref(true);
    const TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcGFnaW5hdG9yLWV4YW1wbGUtaW5kZXgEqual = shallowRef();
    onMounted(async () => {
      TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcGFnaW5hdG9yLWV4YW1wbGUtaW5kZXgEqual.value = (await import("./index.DGgKkbiY.js")).default;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StorybookLink = resolveComponent("StorybookLink");
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="paginator" tabindex="-1">Paginator <a class="header-anchor" href="#paginator" aria-label="Permalink to &quot;Paginator&quot;">​</a></h1><p>Paginator 是一个分页导航组件，用于在大量数据中进行页面切换和导航。它提供了多种样式变体和自定义配置，支持不同的分页场景，如表格数据分页、内容列表分页等。</p>`);
      _push(ssrRenderComponent(_component_StorybookLink, { link: "https://zxy-ui.github.io/zxy-ui/storybook/?path=/story/%E7%BB%84%E4%BB%B6-paginator-%E5%88%86%E9%A1%B5%E5%99%A8--basic" }, null, _parent));
      _push(`<h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> { ZPaginator } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;@zxy-ui/vue&#39;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2>`);
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
              vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcGFnaW5hdG9yLWV4YW1wbGUtaW5kZXgEqual)
            }, createSlots({ _: 2 }, [
              TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcGFnaW5hdG9yLWV4YW1wbGUtaW5kZXgEqual.value ? {
                name: "vue",
                fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcGFnaW5hdG9yLWV4YW1wbGUtaW5kZXgEqual), null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcGFnaW5hdG9yLWV4YW1wbGUtaW5kZXgEqual))
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
                vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcGFnaW5hdG9yLWV4YW1wbGUtaW5kZXgEqual)
              }, createSlots({ _: 2 }, [
                TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcGFnaW5hdG9yLWV4YW1wbGUtaW5kZXgEqual.value ? {
                  name: "vue",
                  fn: withCtx(() => [
                    createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcGFnaW5hdG9yLWV4YW1wbGUtaW5kZXgEqual))
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["onMount", "vueCode"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>modelValue</td><td>当前页码</td><td>number</td><td>1</td></tr><tr><td>totalPages</td><td>总页数</td><td>number</td><td>-</td></tr><tr><td>visiblePageCount</td><td>显示的页码按钮数量</td><td>number</td><td>5</td></tr><tr><td>showEndButtons</td><td>是否显示首页和尾页按钮</td><td>boolean</td><td>true</td></tr><tr><td>showPrevNextButtons</td><td>是否显示上一页和下一页按钮</td><td>boolean</td><td>true</td></tr><tr><td>showJumper</td><td>是否显示页码跳转输入框</td><td>boolean</td><td>false</td></tr><tr><td>size</td><td>分页器大小</td><td>&#39;sm&#39; | &#39;md&#39; | &#39;lg&#39;</td><td>&#39;md&#39;</td></tr><tr><td>variant</td><td>分页器样式变体</td><td>&#39;default&#39; | &#39;outline&#39; | &#39;text&#39;</td><td>&#39;default&#39;</td></tr><tr><td>shape</td><td>分页器形状</td><td>&#39;square&#39; | &#39;rounded&#39; | &#39;circle&#39;</td><td>&#39;rounded&#39;</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>false</td></tr><tr><td>unstyled</td><td>是否使用无样式模式</td><td>boolean</td><td>false</td></tr><tr><td>pt</td><td>传递模板样式</td><td>PaginatorPT</td><td>-</td></tr></tbody></table><h3 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:modelValue</td><td>页码变化时触发</td><td>(page: number) =&gt; void</td></tr><tr><td>change</td><td>页码变化时触发</td><td>(page: number) =&gt; void</td></tr></tbody></table><h3 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h3><table tabindex="0"><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>first-button</td><td>自定义首页按钮</td></tr><tr><td>prev-button</td><td>自定义上一页按钮</td></tr><tr><td>next-button</td><td>自定义下一页按钮</td></tr><tr><td>last-button</td><td>自定义尾页按钮</td></tr></tbody></table><h3 id="样式定制" tabindex="-1">样式定制 <a class="header-anchor" href="#样式定制" aria-label="Permalink to &quot;样式定制&quot;">​</a></h3><p>当使用 <code>unstyled</code> 模式时，可以通过 <code>pt</code> 属性传递自定义样式：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">interface</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> PaginatorPT</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">	root</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">	list</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">	item</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">	button</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">	activeButton</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">	prevButton</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">	nextButton</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">	firstButton</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">	lastButton</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">	ellipsis</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">	jumper</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">	jumperInput</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">	jumperButton</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">}</span></span></code></pre></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/paginator/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
