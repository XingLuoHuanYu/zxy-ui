import { defineComponent, ref, shallowRef, onMounted, resolveComponent, unref, withCtx, createSlots, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
/* empty css               */
import { VitepressDemoPlaceholder, VitepressDemoBox } from "vitepress-demo-plugin/client";
const TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtZGl2aWRlci1leGFtcGxlLWluZGV4 = `<template>\r
  <div class="flex flex-col gap-8">\r
    <!-- 基础分割线 -->\r
    <section>\r
      <h2 class="mb-4 text-lg font-bold">基础分割线</h2>\r
      <ZDivider />\r
    </section>\r
\r
    <!-- 带文本的分割线 -->\r
    <section>\r
      <h2 class="mb-4 text-lg font-bold">带文本的分割线</h2>\r
      <ZDivider label="文本内容" />\r
    </section>\r
\r
    <!-- 不同文本位置 -->\r
    <section>\r
      <h2 class="mb-4 text-lg font-bold">不同文本位置</h2>\r
      <ZDivider label="左侧文本" labelPosition="start" class="mb-4" />\r
      <ZDivider label="居中文本" labelPosition="center" class="mb-4" />\r
      <ZDivider label="右侧文本" labelPosition="end" />\r
    </section>\r
\r
    <!-- 不同样式 -->\r
    <section>\r
      <h2 class="mb-4 text-lg font-bold">不同样式</h2>\r
      <ZDivider variant="solid" label="实线" class="mb-4" />\r
      <ZDivider variant="dashed" label="虚线" class="mb-4" />\r
      <ZDivider variant="dotted" label="点线" />\r
    </section>\r
\r
    <!-- 不同粗细 -->\r
    <section>\r
      <h2 class="mb-4 text-lg font-bold">不同粗细</h2>\r
      <ZDivider size="thin" label="细线" class="mb-4" />\r
      <ZDivider size="medium" label="中等" class="mb-4" />\r
      <ZDivider size="thick" label="粗线" />\r
    </section>\r
\r
    <!-- 自定义颜色 -->\r
    <section>\r
      <h2 class="mb-4 text-lg font-bold">自定义颜色</h2>\r
      <ZDivider color="#1677ff" label="蓝色" class="mb-4" />\r
      <ZDivider color="#52c41a" label="绿色" class="mb-4" />\r
      <ZDivider color="#f5222d" label="红色" />\r
    </section>\r
\r
    <!-- 垂直分割线 -->\r
    <section>\r
      <h2 class="mb-4 text-lg font-bold">垂直分割线</h2>\r
      <div class="flex items-center h-20">\r
        <span>左侧文本</span>\r
        <ZDivider orientation="vertical" class="mx-4 h-full" />\r
        <span>右侧文本</span>\r
      </div>\r
    </section>\r
\r
    <!-- 自定义渲染元素 -->\r
    <section>\r
      <h2 class="mb-4 text-lg font-bold">自定义渲染元素</h2>\r
      <p class="mb-2">默认水平分割线 (hr元素)</p>\r
      <ZDivider class="mb-4" />\r
      <p class="mb-2">自定义为span元素:</p>\r
      <ZDivider as="span" class="mb-4" />\r
    </section>\r
\r
    <!-- 组合使用 -->\r
    <section>\r
      <h2 class="mb-4 text-lg font-bold">组合使用</h2>\r
      <div class="flex items-center">\r
        <span>文本</span>\r
        <ZDivider orientation="vertical" variant="dashed" class="mx-4 h-6" />\r
        <span>链接</span>\r
        <ZDivider\r
          orientation="vertical"\r
          variant="dotted"\r
          color="#1677ff"\r
          class="mx-4 h-6"\r
        />\r
        <span>按钮</span>\r
      </div>\r
    </section>\r
\r
    <!-- 分割内容区域 -->\r
    <section>\r
      <h2 class="mb-4 text-lg font-bold">分割内容区域</h2>\r
      <div class="p-4 border rounded">\r
        <p>上方内容区域</p>\r
        <ZDivider />\r
        <p>下方内容区域</p>\r
      </div>\r
    </section>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ZDivider } from '@zxy-ui/vue'\r
<\/script>\r
`;
const __pageData = JSON.parse('{"title":"Divider 分割线","description":"","frontmatter":{},"headers":[],"relativePath":"components/divider/index.md","filePath":"components/divider/index.md"}');
const __default__ = { name: "components/divider/index.md" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __ssrInlineRender: true,
  setup(__props) {
    const __placeholder_visible_key__ = ref(true);
    const TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtZGl2aWRlci1leGFtcGxlLWluZGV4 = shallowRef();
    onMounted(async () => {
      TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtZGl2aWRlci1leGFtcGxlLWluZGV4.value = (await import("./index.CbDGhVPL.js")).default;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StorybookLink = resolveComponent("StorybookLink");
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="divider-分割线" tabindex="-1">Divider 分割线 <a class="header-anchor" href="#divider-分割线" aria-label="Permalink to &quot;Divider 分割线&quot;">​</a></h1><p>Divider 是一种用于视觉分隔内容的界面元素，通过水平或垂直的线条、空白区域或装饰性元素划分不同内容区块，增强页面层次感和组织性。它不承载具体内容，而是通过空间关系引导用户注意力。</p>`);
      _push(ssrRenderComponent(_component_StorybookLink, { link: "https://zxy-ui.github.io/zxy-ui/storybook/?path=/story/%E7%BB%84%E4%BB%B6-divider-%E5%88%86%E5%89%B2%E7%BA%BF--basic" }, null, _parent));
      _push(`<h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> { ZDivider } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;@zxy-ui/vue&#39;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2>`);
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
              vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtZGl2aWRlci1leGFtcGxlLWluZGV4)
            }, createSlots({ _: 2 }, [
              TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtZGl2aWRlci1leGFtcGxlLWluZGV4.value ? {
                name: "vue",
                fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtZGl2aWRlci1leGFtcGxlLWluZGV4), null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtZGl2aWRlci1leGFtcGxlLWluZGV4))
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
                vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtZGl2aWRlci1leGFtcGxlLWluZGV4)
              }, createSlots({ _: 2 }, [
                TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtZGl2aWRlci1leGFtcGxlLWluZGV4.value ? {
                  name: "vue",
                  fn: withCtx(() => [
                    createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtZGl2aWRlci1leGFtcGxlLWluZGV4))
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["onMount", "vueCode"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>orientation</td><td>分割线方向</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr><tr><td>variant</td><td>线条样式</td><td><code>&#39;solid&#39; | &#39;dashed&#39; | &#39;dotted&#39;</code></td><td><code>&#39;solid&#39;</code></td></tr><tr><td>size</td><td>线条粗细</td><td><code>&#39;thin&#39; | &#39;medium&#39; | &#39;thick&#39;</code></td><td><code>&#39;medium&#39;</code></td></tr><tr><td>color</td><td>线条颜色</td><td><code>string</code></td><td>-</td></tr><tr><td>label</td><td>分割线文本</td><td><code>string</code></td><td>-</td></tr><tr><td>labelPosition</td><td>文本位置</td><td><code>&#39;start&#39; | &#39;center&#39; | &#39;end&#39;</code></td><td><code>&#39;center&#39;</code></td></tr><tr><td>as</td><td>自定义渲染元素</td><td><code>string</code></td><td>水平无文本时为<code>&#39;hr&#39;</code>，其他情况为<code>&#39;div&#39;</code></td></tr></tbody></table><h3 id="数据属性" tabindex="-1">数据属性 <a class="header-anchor" href="#数据属性" aria-label="Permalink to &quot;数据属性&quot;">​</a></h3><p>Divider 组件在根元素上添加以下数据属性：</p><ul><li><strong>data-orientation</strong>: 分割线的方向，基于 <code>orientation</code> 属性</li><li><strong>role</strong>: 设置为 <code>&quot;separator&quot;</code>，提供可访问性支持</li><li><strong>aria-orientation</strong>: 分割线的方向，提供可访问性支持</li></ul></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/divider/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
