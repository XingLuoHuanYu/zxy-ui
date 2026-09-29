import { defineComponent, ref, shallowRef, onMounted, resolveComponent, unref, withCtx, createSlots, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
/* empty css               */
import { VitepressDemoPlaceholder, VitepressDemoBox } from "vitepress-demo-plugin/client";
const TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtbGluay1leGFtcGxlLWluZGV4 = `<script setup lang="ts">\r
import { ZLink } from '@zxy-ui/vue'\r
import '@zxy-ui/vue/style'\r
<\/script>\r
\r
<template>\r
  <div class="space-y-8">\r
    <!-- 基础用法 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">基础用法</h2>\r
      <div class="flex flex-wrap gap-6">\r
        <ZLink href="https://example.com">默认链接</ZLink>\r
        <ZLink href="https://example.com" variant="primary">主要链接</ZLink>\r
        <ZLink href="https://example.com" variant="secondary">次要链接</ZLink>\r
        <ZLink href="https://example.com" variant="success">成功链接</ZLink>\r
        <ZLink href="https://example.com" variant="danger">危险链接</ZLink>\r
        <ZLink href="https://example.com" variant="warning">警告链接</ZLink>\r
        <ZLink href="https://example.com" variant="info">信息链接</ZLink>\r
      </div>\r
    </section>\r
\r
    <!-- 不同尺寸 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">不同尺寸</h2>\r
      <div class="flex items-center gap-6">\r
        <ZLink href="https://example.com" size="sm">小尺寸链接</ZLink>\r
        <ZLink href="https://example.com" size="md">中等尺寸链接</ZLink>\r
        <ZLink href="https://example.com" size="lg">大尺寸链接</ZLink>\r
      </div>\r
    </section>\r
\r
    <!-- 带下划线 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">带下划线</h2>\r
      <div class="flex gap-6">\r
        <ZLink href="https://example.com" underline>默认下划线链接</ZLink>\r
        <ZLink href="https://example.com" variant="primary" underline>\r
          主要下划线链接\r
        </ZLink>\r
      </div>\r
    </section>\r
\r
    <!-- 外部链接 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">外部链接</h2>\r
      <div class="flex gap-6">\r
        <ZLink href="https://example.com" external>\r
          外部链接（自动添加图标）\r
        </ZLink>\r
        <ZLink href="https://example.com" external variant="primary">\r
          外部主要链接\r
        </ZLink>\r
      </div>\r
    </section>\r
\r
    <!-- 禁用状态 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">禁用状态</h2>\r
      <div class="flex gap-6">\r
        <ZLink href="https://example.com" disabled>禁用链接</ZLink>\r
        <ZLink href="https://example.com" variant="primary" disabled>\r
          禁用主要链接\r
        </ZLink>\r
      </div>\r
    </section>\r
\r
    <!-- 带图标 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">带图标</h2>\r
      <div class="flex flex-col gap-4">\r
        <div>\r
          <ZLink href="https://example.com" iconPosition="left">\r
            <template #icon-left>\r
              <svg\r
                xmlns="http://www.w3.org/2000/svg"\r
                width="24"\r
                height="24"\r
                viewBox="0 0 24 24"\r
                fill="none"\r
                stroke="currentColor"\r
                stroke-width="2"\r
                stroke-linecap="round"\r
                stroke-linejoin="round"\r
              >\r
                <path d="M15 18l-6-6 6-6" />\r
              </svg>\r
            </template>\r
            左侧图标\r
          </ZLink>\r
        </div>\r
        <div>\r
          <ZLink\r
            href="https://example.com"\r
            variant="primary"\r
            iconPosition="right"\r
          >\r
            右侧图标\r
            <template #icon-right>\r
              <svg\r
                xmlns="http://www.w3.org/2000/svg"\r
                width="24"\r
                height="24"\r
                viewBox="0 0 24 24"\r
                fill="none"\r
                stroke="currentColor"\r
                stroke-width="2"\r
                stroke-linecap="round"\r
                stroke-linejoin="round"\r
              >\r
                <path d="M9 18l6-6-6-6" />\r
              </svg>\r
            </template>\r
          </ZLink>\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- 自定义样式 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">自定义样式</h2>\r
      <div class="flex gap-6">\r
        <ZLink\r
          href="https://example.com"\r
          :pt="{\r
            root: 'text-purple-500 hover:text-purple-700 font-bold',\r
          }"\r
        >\r
          自定义颜色和字重\r
        </ZLink>\r
        <ZLink\r
          href="https://example.com"\r
          unstyled\r
          :pt="{\r
            root: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full hover:shadow-lg transition-shadow',\r
          }"\r
        >\r
          完全自定义样式\r
        </ZLink>\r
      </div>\r
    </section>\r
  </div>\r
</template>\r
`;
const __pageData = JSON.parse('{"title":"Link 链接","description":"","frontmatter":{},"headers":[],"relativePath":"components/link/index.md","filePath":"components/link/index.md"}');
const __default__ = { name: "components/link/index.md" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __ssrInlineRender: true,
  setup(__props) {
    const __placeholder_visible_key__ = ref(true);
    const TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtbGluay1leGFtcGxlLWluZGV4 = shallowRef();
    onMounted(async () => {
      TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtbGluay1leGFtcGxlLWluZGV4.value = (await import("./index.B3HycLsW.js")).default;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StorybookLink = resolveComponent("StorybookLink");
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="link-链接" tabindex="-1">Link 链接 <a class="header-anchor" href="#link-链接" aria-label="Permalink to &quot;Link 链接&quot;">​</a></h1><p>Link 组件用于创建可点击的文本链接，支持多种样式变体、尺寸和图标位置，可用于导航或触发操作。</p>`);
      _push(ssrRenderComponent(_component_StorybookLink, { link: "https://zxy-ui.github.io/zxy-ui/storybook/?path=/story/%E7%BB%84%E4%BB%B6-link-%E9%93%BE%E6%8E%A5--basic" }, null, _parent));
      _push(`<h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> { ZLink } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;@zxy-ui/vue&#39;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2>`);
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
              vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtbGluay1leGFtcGxlLWluZGV4)
            }, createSlots({ _: 2 }, [
              TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtbGluay1leGFtcGxlLWluZGV4.value ? {
                name: "vue",
                fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtbGluay1leGFtcGxlLWluZGV4), null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtbGluay1leGFtcGxlLWluZGV4))
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
                vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtbGluay1leGFtcGxlLWluZGV4)
              }, createSlots({ _: 2 }, [
                TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtbGluay1leGFtcGxlLWluZGV4.value ? {
                  name: "vue",
                  fn: withCtx(() => [
                    createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtbGluay1leGFtcGxlLWluZGV4))
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["onMount", "vueCode"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>href</td><td>链接的目标地址</td><td><code>string</code></td><td>-</td></tr><tr><td>variant</td><td>链接的变体样式</td><td><code>&#39;default&#39; | &#39;primary&#39; | &#39;secondary&#39; | &#39;success&#39; | &#39;danger&#39; | &#39;warning&#39; | &#39;info&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>size</td><td>链接的尺寸</td><td><code>&#39;sm&#39; | &#39;md&#39; | &#39;lg&#39;</code></td><td><code>&#39;md&#39;</code></td></tr><tr><td>external</td><td>是否在新标签页中打开链接</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>underline</td><td>是否显示下划线</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>disabled</td><td>是否禁用链接</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>iconPosition</td><td>链接的图标位置</td><td><code>&#39;left&#39; | &#39;right&#39;</code></td><td>-</td></tr><tr><td>unstyled</td><td>是否禁用默认样式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>pt</td><td>自定义样式传递</td><td><code>LinkPT</code></td><td>-</td></tr></tbody></table><h3 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击链接时触发</td><td><code>(event: MouseEvent) =&gt; void</code></td></tr></tbody></table><h3 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h3><table tabindex="0"><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>链接的文本内容</td></tr><tr><td>icon-left</td><td>链接左侧的图标</td></tr><tr><td>icon-right</td><td>链接右侧的图标</td></tr></tbody></table><h3 id="样式定制" tabindex="-1">样式定制 <a class="header-anchor" href="#样式定制" aria-label="Permalink to &quot;样式定制&quot;">​</a></h3><p>可以通过 <code>pt</code> 属性传递自定义样式：</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">ZLink</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">	href</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;https://example.com&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">	:</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">pt</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">		root: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;custom-root-class&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">		icon: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;custom-icon-class&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">	}</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">  自定义样式链接</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">ZLink</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span></code></pre></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/link/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
