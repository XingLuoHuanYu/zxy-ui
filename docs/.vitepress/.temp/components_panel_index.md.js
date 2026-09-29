import { defineComponent, ref, shallowRef, onMounted, resolveComponent, unref, withCtx, createSlots, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
/* empty css               */
import { VitepressDemoPlaceholder, VitepressDemoBox } from "vitepress-demo-plugin/client";
const TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcGFuZWwtZXhhbXBsZS1pbmRleAEqualEqual = `<template>\r
  <div class="space-y-8">\r
    <!-- 基础面板 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">基础面板</h3>\r
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">\r
        <ZPanel title="基础面板">\r
          <p>这是一个基础面板的内容区域。</p>\r
        </ZPanel>\r
        <ZPanel title="带边框面板" variant="bordered">\r
          <p>这是一个带边框面板的内容区域。</p>\r
        </ZPanel>\r
      </div>\r
    </section>\r
\r
    <!-- 面板变体 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">面板变体</h3>\r
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">\r
        <ZPanel title="默认面板" variant="default">\r
          <p>这是默认样式的面板。</p>\r
        </ZPanel>\r
        <ZPanel title="带边框面板" variant="bordered">\r
          <p>这是带边框的面板。</p>\r
        </ZPanel>\r
        <ZPanel title="阴影面板" variant="elevated">\r
          <p>这是带阴影的面板。</p>\r
        </ZPanel>\r
      </div>\r
    </section>\r
\r
    <!-- 可折叠面板 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">可折叠面板</h3>\r
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">\r
        <ZPanel title="可折叠面板" collapsible>\r
          <p>点击面板头部可以折叠/展开此内容。</p>\r
          <p class="mt-2">这是可折叠面板的更多内容。</p>\r
        </ZPanel>\r
        <ZPanel title="默认折叠面板" collapsible defaultCollapsed>\r
          <p>这个面板默认是折叠的，点击面板头部可以展开。</p>\r
          <p class="mt-2">这是默认折叠面板的更多内容。</p>\r
        </ZPanel>\r
      </div>\r
    </section>\r
\r
    <!-- 不同内边距 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">不同内边距</h3>\r
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">\r
        <div>\r
          <p class="mb-2 text-sm text-gray-500">无内边距</p>\r
          <ZPanel title="无内边距" padding="none" variant="bordered">\r
            <p>这是无内边距的面板内容。</p>\r
          </ZPanel>\r
        </div>\r
        <div>\r
          <p class="mb-2 text-sm text-gray-500">大内边距</p>\r
          <ZPanel title="大内边距" padding="lg" variant="bordered">\r
            <p>这是大内边距的面板内容。</p>\r
          </ZPanel>\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- 自定义标题和图标 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">自定义标题和图标</h3>\r
      <ZPanel collapsible>\r
        <template #title>\r
          <div class="flex items-center gap-2">\r
            <svg\r
              xmlns="http://www.w3.org/2000/svg"\r
              width="16"\r
              height="16"\r
              viewBox="0 0 24 24"\r
              fill="none"\r
              stroke="currentColor"\r
              stroke-width="2"\r
              stroke-linecap="round"\r
              stroke-linejoin="round"\r
            >\r
              <path\r
                d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"\r
              ></path>\r
              <polyline points="14 2 14 8 20 8"></polyline>\r
              <line x1="16" y1="13" x2="8" y2="13"></line>\r
              <line x1="16" y1="17" x2="8" y2="17"></line>\r
              <polyline points="10 9 9 9 8 9"></polyline>\r
            </svg>\r
            <span class="text-blue-600 font-bold">自定义标题</span>\r
          </div>\r
        </template>\r
        <p>这个面板使用了自定义标题插槽。</p>\r
      </ZPanel>\r
    </section>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ZPanel } from '@zxy-ui/vue'\r
<\/script>\r
`;
const __pageData = JSON.parse('{"title":"Panel","description":"","frontmatter":{},"headers":[],"relativePath":"components/panel/index.md","filePath":"components/panel/index.md"}');
const __default__ = { name: "components/panel/index.md" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __ssrInlineRender: true,
  setup(__props) {
    const __placeholder_visible_key__ = ref(true);
    const TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcGFuZWwtZXhhbXBsZS1pbmRleAEqualEqual = shallowRef();
    onMounted(async () => {
      TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcGFuZWwtZXhhbXBsZS1pbmRleAEqualEqual.value = (await import("./index.BsW-m_8-.js")).default;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StorybookLink = resolveComponent("StorybookLink");
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="panel" tabindex="-1">Panel <a class="header-anchor" href="#panel" aria-label="Permalink to &quot;Panel&quot;">​</a></h1><p>Panel 是一个可折叠的内容容器组件，用于组织和展示信息，支持多种样式变体和自定义配置。它可以有效地节省页面空间，提高用户体验，常用于分组展示相关内容、FAQ、设置面板等场景。</p>`);
      _push(ssrRenderComponent(_component_StorybookLink, { link: "https://zxy-ui.github.io/zxy-ui/storybook/?path=/story/%E7%BB%84%E4%BB%B6-panel-%E9%9D%A2%E6%9D%BF--basic" }, null, _parent));
      _push(`<h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> { ZPanel } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;@zxy-ui/vue&#39;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2>`);
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
              vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcGFuZWwtZXhhbXBsZS1pbmRleAEqualEqual)
            }, createSlots({ _: 2 }, [
              TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcGFuZWwtZXhhbXBsZS1pbmRleAEqualEqual.value ? {
                name: "vue",
                fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcGFuZWwtZXhhbXBsZS1pbmRleAEqualEqual), null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcGFuZWwtZXhhbXBsZS1pbmRleAEqualEqual))
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
                vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcGFuZWwtZXhhbXBsZS1pbmRleAEqualEqual)
              }, createSlots({ _: 2 }, [
                TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcGFuZWwtZXhhbXBsZS1pbmRleAEqualEqual.value ? {
                  name: "vue",
                  fn: withCtx(() => [
                    createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcGFuZWwtZXhhbXBsZS1pbmRleAEqualEqual))
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["onMount", "vueCode"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>面板标题</td><td>string</td><td>-</td></tr><tr><td>variant</td><td>面板样式变体</td><td>&#39;default&#39; | &#39;bordered&#39; | &#39;elevated&#39;</td><td>&#39;default&#39;</td></tr><tr><td>padding</td><td>内边距大小</td><td>&#39;none&#39; | &#39;sm&#39; | &#39;md&#39; | &#39;lg&#39;</td><td>&#39;md&#39;</td></tr><tr><td>radius</td><td>圆角大小</td><td>&#39;none&#39; | &#39;sm&#39; | &#39;md&#39; | &#39;lg&#39; | &#39;full&#39;</td><td>&#39;md&#39;</td></tr><tr><td>collapsible</td><td>是否可折叠</td><td>boolean</td><td>false</td></tr><tr><td>defaultCollapsed</td><td>是否默认折叠</td><td>boolean</td><td>false</td></tr><tr><td>bordered</td><td>是否显示边框</td><td>boolean</td><td>true</td></tr><tr><td>unstyled</td><td>是否使用无样式模式</td><td>boolean</td><td>false</td></tr><tr><td>pt</td><td>传递模板样式</td><td>PanelPT</td><td>-</td></tr></tbody></table><h3 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:collapsed</td><td>折叠状态变化时触发</td><td>(collapsed: boolean) =&gt; void</td></tr><tr><td>collapse</td><td>折叠状态变化时触发</td><td>(collapsed: boolean) =&gt; void</td></tr></tbody></table><h3 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h3><table tabindex="0"><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>面板内容</td></tr><tr><td>title</td><td>自定义标题</td></tr><tr><td>icon</td><td>自定义折叠图标</td></tr></tbody></table><h3 id="样式定制" tabindex="-1">样式定制 <a class="header-anchor" href="#样式定制" aria-label="Permalink to &quot;样式定制&quot;">​</a></h3><p>当使用 <code>unstyled</code> 模式时，可以通过 <code>pt</code> 属性传递自定义样式：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">interface</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> PanelPT</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">	root</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">	header</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">	title</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">	content</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">	icon</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">}</span></span></code></pre></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/panel/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
