import { defineComponent, ref, shallowRef, onMounted, resolveComponent, unref, withCtx, createSlots, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
/* empty css               */
import { VitepressDemoPlaceholder, VitepressDemoBox } from "vitepress-demo-plugin/client";
const TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtaW1hZ2UtZXhhbXBsZS1pbmRleAEqualEqual = `<script setup lang="ts">\r
import { ref } from 'vue'\r
import { ZImage } from '@zxy-ui/vue'\r
import '@zxy-ui/vue/style'\r
\r
const isZoomed = ref(false)\r
const toggleZoom = () => {\r
  isZoomed.value = !isZoomed.value\r
}\r
<\/script>\r
\r
<template>\r
  <div class="space-y-8">\r
    <!-- 基础用法 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">基础用法</h2>\r
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">\r
        <div>\r
          <p class="mb-2 text-sm">默认图片：</p>\r
          <ZImage\r
            src="https://images.unsplash.com/photo-1682687982501-1e58ab814714"\r
            alt="风景图片"\r
            width="100%"\r
            height="200px"\r
          />\r
        </div>\r
        <div>\r
          <p class="mb-2 text-sm">不同填充模式：</p>\r
          <ZImage\r
            src="https://images.unsplash.com/photo-1682687982501-1e58ab814714"\r
            alt="风景图片"\r
            width="100%"\r
            height="200px"\r
            fit="contain"\r
          />\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- 模糊加载效果 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">模糊加载效果</h2>\r
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">\r
        <div>\r
          <p class="mb-2 text-sm">启用模糊加载：</p>\r
          <ZImage\r
            src="https://images.unsplash.com/photo-1682687982501-1e58ab814714"\r
            alt="风景图片"\r
            width="100%"\r
            height="200px"\r
            :blurred="true"\r
          />\r
        </div>\r
        <div>\r
          <p class="mb-2 text-sm">自定义模糊度：</p>\r
          <ZImage\r
            src="https://images.unsplash.com/photo-1682687982501-1e58ab814714"\r
            alt="风景图片"\r
            width="100%"\r
            height="200px"\r
            :blurred="true"\r
            :blurAmount="20"\r
          />\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- 缩放功能 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">缩放功能</h2>\r
      <div class="space-y-4">\r
        <div class="flex items-center gap-4">\r
          <button\r
            @click="toggleZoom"\r
            class="px-2 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"\r
          >\r
            {{ isZoomed ? '取消缩放' : '缩放图片' }}\r
          </button>\r
          <span class="text-sm text-gray-500">点击按钮或图片切换缩放状态</span>\r
        </div>\r
\r
        <div class="grid grid-cols-1 gap-6">\r
          <ZImage\r
            src="https://images.unsplash.com/photo-1682687982501-1e58ab814714"\r
            alt="风景图片"\r
            width="100%"\r
            height="300px"\r
            :isZoomable="true"\r
            :isZoomed="isZoomed"\r
            :zoomScale="1.8"\r
            @zoom="isZoomed = $event"\r
          />\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- 骨架屏 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">骨架屏</h2>\r
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">\r
        <div>\r
          <p class="mb-2 text-sm">默认骨架屏：</p>\r
          <ZImage\r
            src="https://images.unsplash.com/photo-1682687982501-1e58ab814714"\r
            alt="风景图片"\r
            width="100%"\r
            height="200px"\r
            :skeleton="true"\r
          />\r
        </div>\r
        <div>\r
          <p class="mb-2 text-sm">自定义骨架屏颜色：</p>\r
          <ZImage\r
            src="https://images.unsplash.com/photo-1682687982501-1e58ab814714"\r
            alt="风景图片"\r
            width="100%"\r
            height="200px"\r
            :skeleton="true"\r
            skeletonColor="#e0f2fe"\r
          />\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- 不同圆角 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">不同圆角</h2>\r
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">\r
        <div>\r
          <p class="mb-2 text-sm">无圆角：</p>\r
          <ZImage\r
            src="https://images.unsplash.com/photo-1682687982501-1e58ab814714"\r
            alt="风景图片"\r
            width="100%"\r
            height="150px"\r
            radius="none"\r
          />\r
        </div>\r
        <div>\r
          <p class="mb-2 text-sm">中等圆角（默认）：</p>\r
          <ZImage\r
            src="https://images.unsplash.com/photo-1682687982501-1e58ab814714"\r
            alt="风景图片"\r
            width="100%"\r
            height="150px"\r
            radius="md"\r
          />\r
        </div>\r
        <div>\r
          <p class="mb-2 text-sm">大圆角：</p>\r
          <ZImage\r
            src="https://images.unsplash.com/photo-1682687982501-1e58ab814714"\r
            alt="风景图片"\r
            width="100%"\r
            height="150px"\r
            radius="xl"\r
          />\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- 错误状态 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">错误状态</h2>\r
      <div>\r
        <ZImage\r
          src="invalid-image-url.jpg"\r
          alt="无效图片"\r
          width="100%"\r
          height="200px"\r
        />\r
      </div>\r
    </section>\r
  </div>\r
</template>\r
`;
const __pageData = JSON.parse('{"title":"Image 图片","description":"","frontmatter":{},"headers":[],"relativePath":"components/image/index.md","filePath":"components/image/index.md"}');
const __default__ = { name: "components/image/index.md" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __ssrInlineRender: true,
  setup(__props) {
    const __placeholder_visible_key__ = ref(true);
    const TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtaW1hZ2UtZXhhbXBsZS1pbmRleAEqualEqual = shallowRef();
    onMounted(async () => {
      TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtaW1hZ2UtZXhhbXBsZS1pbmRleAEqualEqual.value = (await import("./index.Dnkh5e2u.js")).default;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StorybookLink = resolveComponent("StorybookLink");
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="image-图片" tabindex="-1">Image 图片 <a class="header-anchor" href="#image-图片" aria-label="Permalink to &quot;Image 图片&quot;">​</a></h1><p>Image 组件是一个增强的图片显示组件，提供了模糊加载、缩放、骨架屏等功能，为用户提供更好的图片浏览体验。</p>`);
      _push(ssrRenderComponent(_component_StorybookLink, { link: "https://zxy-ui.github.io/zxy-ui/storybook/?path=/story/%E7%BB%84%E4%BB%B6-image-%E5%9B%BE%E7%89%87--basic" }, null, _parent));
      _push(`<h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> { ZImage } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;@zxy-ui/vue&#39;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2>`);
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
              vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtaW1hZ2UtZXhhbXBsZS1pbmRleAEqualEqual)
            }, createSlots({ _: 2 }, [
              TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtaW1hZ2UtZXhhbXBsZS1pbmRleAEqualEqual.value ? {
                name: "vue",
                fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtaW1hZ2UtZXhhbXBsZS1pbmRleAEqualEqual), null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtaW1hZ2UtZXhhbXBsZS1pbmRleAEqualEqual))
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
                vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtaW1hZ2UtZXhhbXBsZS1pbmRleAEqualEqual)
              }, createSlots({ _: 2 }, [
                TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtaW1hZ2UtZXhhbXBsZS1pbmRleAEqualEqual.value ? {
                  name: "vue",
                  fn: withCtx(() => [
                    createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtaW1hZ2UtZXhhbXBsZS1pbmRleAEqualEqual))
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["onMount", "vueCode"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>src</td><td>图片源地址</td><td><code>string</code></td><td>-</td></tr><tr><td>alt</td><td>图片加载失败时的替代文本</td><td><code>string</code></td><td><code>&#39;&#39;</code></td></tr><tr><td>width</td><td>图片宽度</td><td><code>string | number</code></td><td><code>&#39;auto&#39;</code></td></tr><tr><td>height</td><td>图片高度</td><td><code>string | number</code></td><td><code>&#39;auto&#39;</code></td></tr><tr><td>fit</td><td>图片填充模式</td><td><code>&#39;fill&#39; | &#39;contain&#39; | &#39;cover&#39; | &#39;none&#39; | &#39;scale-down&#39;</code></td><td><code>&#39;cover&#39;</code></td></tr><tr><td>blurred</td><td>是否启用模糊加载效果</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>blurAmount</td><td>模糊加载的模糊度</td><td><code>number</code></td><td><code>10</code></td></tr><tr><td>loading</td><td>图片加载策略</td><td><code>&#39;lazy&#39; | &#39;eager&#39;</code></td><td><code>&#39;lazy&#39;</code></td></tr><tr><td>isZoomable</td><td>是否启用缩放功能</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>isZoomed</td><td>是否当前处于缩放状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>zoomScale</td><td>缩放比例</td><td><code>number</code></td><td><code>1.5</code></td></tr><tr><td>skeleton</td><td>是否显示骨架屏</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>skeletonColor</td><td>骨架屏背景色</td><td><code>string</code></td><td>-</td></tr><tr><td>radius</td><td>图片圆角</td><td><code>&#39;none&#39; | &#39;sm&#39; | &#39;md&#39; | &#39;lg&#39; | &#39;xl&#39; | &#39;full&#39;</code></td><td><code>&#39;md&#39;</code></td></tr><tr><td>unstyled</td><td>是否禁用默认样式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>pt</td><td>自定义样式传递</td><td><code>ImagePT</code></td><td>-</td></tr></tbody></table><h3 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>load</td><td>图片加载成功时触发</td><td><code>(event: Event) =&gt; void</code></td></tr><tr><td>error</td><td>图片加载失败时触发</td><td><code>(event: Event) =&gt; void</code></td></tr><tr><td>zoom</td><td>图片缩放状态变化时触发</td><td><code>(zoomed: boolean) =&gt; void</code></td></tr></tbody></table><h3 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h3><table tabindex="0"><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>默认插槽，通常不需要使用</td></tr><tr><td>error</td><td>图片加载失败时显示的内容</td></tr><tr><td>zoom-icon</td><td>缩放图标的自定义内容</td></tr></tbody></table><h3 id="样式定制" tabindex="-1">样式定制 <a class="header-anchor" href="#样式定制" aria-label="Permalink to &quot;样式定制&quot;">​</a></h3><p>可以通过 <code>pt</code> 属性传递自定义样式：</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">ZImage</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">	src</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;...&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">	:</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">pt</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">		root: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;custom-root-class&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">		img: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;custom-img-class&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">		skeleton: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;custom-skeleton-class&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">		overlay: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;custom-overlay-class&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">	}</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">/&gt;</span></span></code></pre></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/image/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
