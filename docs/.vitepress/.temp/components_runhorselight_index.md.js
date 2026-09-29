import { defineComponent, ref, shallowRef, onMounted, resolveComponent, unref, withCtx, createSlots, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
/* empty css               */
import { VitepressDemoPlaceholder, VitepressDemoBox } from "vitepress-demo-plugin/client";
const TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcnVuaG9yc2VsaWdodC1leGFtcGxlLWluZGV4 = `<template>\r
  <div class="space-y-8">\r
    <!-- 基础文本跑马灯 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">基础文本跑马灯</h3>\r
      <ZRunhorselight\r
        :items="['欢迎使用 ZxyUI 组件库', '这是一个功能强大的 Vue 3 组件库', '支持 TypeScript 和 Tailwind CSS']"\r
        :height="'4rem'"\r
      />\r
    </section>\r
\r
    <!-- 图片跑马灯 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">图片跑马灯</h3>\r
      <ZRunhorselight\r
        :items="logoItems"\r
        :height="'6rem'"\r
        :gap="'2rem'"\r
        :duration="25"\r
        :border-radius="'1rem'"\r
      />\r
    </section>\r
\r
    <!-- 卡片跑马灯 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">卡片跑马灯</h3>\r
      <ZRunhorselight\r
        :items="cardItems"\r
        :height="'12rem'"\r
        :gap="'1.5rem'"\r
        :duration="30"\r
        :border-radius="'1rem'"\r
        background-color="#f3f4f6"\r
      />\r
    </section>\r
\r
    <!-- 不同滚动方向 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">不同滚动方向</h3>\r
      <div class="space-y-4">\r
        <div>\r
          <p class="mb-2 text-sm text-gray-600">向左滚动 (默认)</p>\r
          <ZRunhorselight\r
            :items="['向左滚动的内容 1', '向左滚动的内容 2', '向左滚动的内容 3']"\r
            direction="left"\r
          />\r
        </div>\r
        <div>\r
          <p class="mb-2 text-sm text-gray-600">向右滚动</p>\r
          <ZRunhorselight\r
            :items="['向右滚动的内容 1', '向右滚动的内容 2', '向右滚动的内容 3']"\r
            direction="right"\r
          />\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- 不同速度 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">不同滚动速度</h3>\r
      <div class="space-y-4">\r
        <div>\r
          <p class="mb-2 text-sm text-gray-600">快速滚动 (10秒)</p>\r
          <ZRunhorselight\r
            :items="['快速滚动的内容 1', '快速滚动的内容 2', '快速滚动的内容 3']"\r
            :duration="10"\r
          />\r
        </div>\r
        <div>\r
          <p class="mb-2 text-sm text-gray-600">中速滚动 (20秒，默认)</p>\r
          <ZRunhorselight\r
            :items="['中速滚动的内容 1', '中速滚动的内容 2', '中速滚动的内容 3']"\r
            :duration="20"\r
          />\r
        </div>\r
        <div>\r
          <p class="mb-2 text-sm text-gray-600">慢速滚动 (40秒)</p>\r
          <ZRunhorselight\r
            :items="['慢速滚动的内容 1', '慢速滚动的内容 2', '慢速滚动的内容 3']"\r
            :duration="40"\r
          />\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- 带前缀和后缀 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">带前缀和后缀</h3>\r
      <ZRunhorselight\r
        :items="['新闻 1：重要通知', '新闻 2：系统更新', '新闻 3：新功能发布']"\r
        :prefix="{ type: 'text', content: '📢 最新消息：', textColor: '#ef4444' }"\r
        :suffix="{ type: 'text', content: '更多 »', textColor: '#3b82f6' }"\r
        :height="'3rem'"\r
        @prefix-click="handlePrefixClick"\r
        @suffix-click="handleSuffixClick"\r
      />\r
    </section>\r
\r
    <!-- 悬停暂停 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">鼠标悬停暂停</h3>\r
      <div class="space-y-4">\r
        <div>\r
          <p class="mb-2 text-sm text-gray-600">启用悬停暂停 (默认)</p>\r
          <ZRunhorselight\r
            :items="['悬停时暂停滚动 1', '悬停时暂停滚动 2', '悬停时暂停滚动 3']"\r
            :pause-on-hover="true"\r
          />\r
        </div>\r
        <div>\r
          <p class="mb-2 text-sm text-gray-600">禁用悬停暂停</p>\r
          <ZRunhorselight\r
            :items="['不暂停滚动 1', '不暂停滚动 2', '不暂停滚动 3']"\r
            :pause-on-hover="false"\r
          />\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- 自定义样式 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">自定义样式</h3>\r
      <div class="space-y-4">\r
        <div>\r
          <p class="mb-2 text-sm text-gray-600">自定义背景色和文本色</p>\r
          <ZRunhorselight\r
            :items="['自定义样式内容 1', '自定义样式内容 2', '自定义样式内容 3']"\r
            :height="'3.5rem'"\r
            background-color="#1e293b"\r
            text-color="#ffffff"\r
            :border-radius="'0.5rem'"\r
          />\r
        </div>\r
        <div>\r
          <p class="mb-2 text-sm text-gray-600">通过 PT 传递自定义样式</p>\r
          <ZRunhorselight\r
            :items="['PT 样式内容 1', 'PT 样式内容 2', 'PT 样式内容 3']"\r
            :height="'3.5rem'"\r
            :pt="{\r
              root: 'bg-gradient-to-r from-purple-500 to-pink-500',\r
              text: 'text-white font-bold text-lg',\r
              item: 'px-6'\r
            }"\r
          />\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- 混合内容类型 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">混合内容类型</h3>\r
      <ZRunhorselight\r
        :items="mixedItems"\r
        :height="'6rem'"\r
        :gap="'1.5rem'"\r
        :duration="35"\r
        :border-radius="'0.75rem'"\r
      />\r
    </section>\r
\r
    <!-- 无缝循环 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">无缝循环</h3>\r
      <div class="space-y-4">\r
        <div>\r
          <p class="mb-2 text-sm text-gray-600">启用无缝循环 (默认)</p>\r
          <ZRunhorselight\r
            :items="['无缝循环内容 1', '无缝循环内容 2', '无缝循环内容 3']"\r
            :loop="true"\r
          />\r
        </div>\r
        <div>\r
          <p class="mb-2 text-sm text-gray-600">禁用无缝循环</p>\r
          <ZRunhorselight\r
            :items="['不循环内容 1', '不循环内容 2', '不循环内容 3']"\r
            :loop="false"\r
          />\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- 自定义插槽 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">自定义插槽</h3>\r
      <ZRunhorselight\r
        :items="[]"\r
        :height="'5rem'"\r
        :gap="'2rem'"\r
      >\r
        <template #default>\r
          <div class="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full">\r
            <span>🚀</span>\r
            <span>自定义内容 1</span>\r
          </div>\r
          <div class="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full">\r
            <span>⭐</span>\r
            <span>自定义内容 2</span>\r
          </div>\r
          <div class="flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-800 rounded-full">\r
            <span>🎨</span>\r
            <span>自定义内容 3</span>\r
          </div>\r
          <div class="flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-800 rounded-full">\r
            <span>🔥</span>\r
            <span>自定义内容 4</span>\r
          </div>\r
        </template>\r
      </ZRunhorselight>\r
    </section>\r
\r
    <!-- 自动填充 -->\r
    <section>\r
      <h3 class="text-lg font-medium mb-4">自动填充内容</h3>\r
      <div class="space-y-4">\r
        <div>\r
          <p class="mb-2 text-sm text-gray-600">启用自动填充</p>\r
          <ZRunhorselight\r
            :items="logoItems.slice(0, 2)"\r
            :height="'6rem'"\r
            :gap="'2rem'"\r
            :autofill="true"\r
            :border-radius="'0.5rem'"\r
          />\r
        </div>\r
        <div>\r
          <p class="mb-2 text-sm text-gray-600">禁用自动填充</p>\r
          <ZRunhorselight\r
            :items="logoItems.slice(0, 2)"\r
            :height="'6rem'"\r
            :gap="'2rem'"\r
            :autofill="false"\r
            :border-radius="'0.5rem'"\r
          />\r
        </div>\r
      </div>\r
    </section>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ZRunhorselight } from '@zxy-ui/vue'\r
import type { RunhorselightAffixClickPayload } from '@zxy-ui/vue'\r
\r
// 图片跑马灯数据\r
const logoItems = [\r
  {\r
    type: 'image',\r
    src: 'https://picsum.photos/id/1018/200/80',\r
    alt: 'Logo 1',\r
  },\r
  {\r
    type: 'image',\r
    src: 'https://picsum.photos/id/1015/200/80',\r
    alt: 'Logo 2',\r
  },\r
  {\r
    type: 'image',\r
    src: 'https://picsum.photos/id/1019/200/80',\r
    alt: 'Logo 3',\r
  },\r
  {\r
    type: 'image',\r
    src: 'https://picsum.photos/id/1016/200/80',\r
    alt: 'Logo 4',\r
  },\r
  {\r
    type: 'image',\r
    src: 'https://picsum.photos/id/1021/200/80',\r
    alt: 'Logo 5',\r
  },\r
]\r
\r
// 卡片跑马灯数据\r
const cardItems = [\r
  {\r
    type: 'card',\r
    title: 'Vue 3 发布',\r
    description: '新一代前端框架，更快的性能和更小的体积',\r
    backgroundColor: '#dbeafe',\r
    textColor: '#1e40af',\r
    borderRadius: '0.5rem',\r
  },\r
  {\r
    type: 'card',\r
    title: 'TypeScript 5.0',\r
    description: '更强大的类型系统和更好的开发体验',\r
    backgroundColor: '#dcfce7',\r
    textColor: '#166534',\r
    borderRadius: '0.5rem',\r
  },\r
  {\r
    type: 'card',\r
    title: 'Tailwind CSS 4.0',\r
    description: '实用优先的 CSS 框架，快速构建现代网站',\r
    backgroundColor: '#fef3c7',\r
    textColor: '#92400e',\r
    borderRadius: '0.5rem',\r
  },\r
  {\r
    type: 'card',\r
    title: 'Vite 6.0',\r
    description: '极速的开发服务器和构建工具',\r
    backgroundColor: '#fce7f3',\r
    textColor: '#9d174d',\r
    borderRadius: '0.5rem',\r
  },\r
]\r
\r
// 混合内容类型数据\r
const mixedItems = [\r
  '纯文本内容',\r
  {\r
    type: 'image',\r
    src: 'https://picsum.photos/id/1018/100/60',\r
    alt: '混合图片',\r
  },\r
  {\r
    type: 'card',\r
    title: '重要通知',\r
    description: '系统维护时间：今晚 22:00-24:00',\r
    backgroundColor: '#fef2f2',\r
    textColor: '#991b1b',\r
  },\r
  '更多文本内容',\r
]\r
\r
// 事件处理\r
const handlePrefixClick = (payload: RunhorselightAffixClickPayload) => {\r
  console.log('前缀点击:', payload)\r
  // 可以在这里添加跳转或其他逻辑\r
}\r
\r
const handleSuffixClick = (payload: RunhorselightAffixClickPayload) => {\r
  console.log('后缀点击:', payload)\r
  // 可以在这里添加跳转或其他逻辑\r
}\r
<\/script>`;
const __pageData = JSON.parse('{"title":"Runhorselight 跑马灯组件","description":"","frontmatter":{},"headers":[],"relativePath":"components/runhorselight/index.md","filePath":"components/runhorselight/index.md"}');
const __default__ = { name: "components/runhorselight/index.md" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __ssrInlineRender: true,
  setup(__props) {
    const __placeholder_visible_key__ = ref(true);
    const TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcnVuaG9yc2VsaWdodC1leGFtcGxlLWluZGV4 = shallowRef();
    onMounted(async () => {
      TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcnVuaG9yc2VsaWdodC1leGFtcGxlLWluZGV4.value = (await import("./index.CRFqa5l3.js")).default;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StorybookLink = resolveComponent("StorybookLink");
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="runhorselight-跑马灯组件" tabindex="-1">Runhorselight 跑马灯组件 <a class="header-anchor" href="#runhorselight-跑马灯组件" aria-label="Permalink to &quot;Runhorselight 跑马灯组件&quot;">​</a></h1><p>Runhorselight 是一个无限循环滚动的跑马灯组件，支持文本、图片、卡片等多种内容类型。它可以用于展示公告、广告、合作伙伴 Logo、图片轮播等场景，并提供多种自定义选项和流畅的动画效果。</p>`);
      _push(ssrRenderComponent(_component_StorybookLink, { link: "https://zxy-ui.github.io/zxy-ui/storybook/?path=/story/components-runhorselight--basic" }, null, _parent));
      _push(`<h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> { ZRunhorselight } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;@zxy-ui/vue&#39;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2>`);
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
              vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcnVuaG9yc2VsaWdodC1leGFtcGxlLWluZGV4)
            }, createSlots({ _: 2 }, [
              TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcnVuaG9yc2VsaWdodC1leGFtcGxlLWluZGV4.value ? {
                name: "vue",
                fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcnVuaG9yc2VsaWdodC1leGFtcGxlLWluZGV4), null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcnVuaG9yc2VsaWdodC1leGFtcGxlLWluZGV4))
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
                vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcnVuaG9yc2VsaWdodC1leGFtcGxlLWluZGV4)
              }, createSlots({ _: 2 }, [
                TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcnVuaG9yc2VsaWdodC1leGFtcGxlLWluZGV4.value ? {
                  name: "vue",
                  fn: withCtx(() => [
                    createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtcnVuaG9yc2VsaWdodC1leGFtcGxlLWluZGV4))
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["onMount", "vueCode"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>items</td><td><code>RunhorselightItem[]</code></td><td><code>[]</code></td><td>跑马灯数据项，当传入默认插槽时可传入空数组</td></tr><tr><td>prefix</td><td><code>RunhorselightAffix</code></td><td>-</td><td>每一轮内容前展示的前缀，支持文字或图片等格式</td></tr><tr><td>suffix</td><td><code>RunhorselightAffix</code></td><td>-</td><td>每一轮内容后展示的后缀，支持文字或图片等格式</td></tr><tr><td>direction</td><td><code>&#39;left&#39; | &#39;right&#39;</code></td><td><code>&#39;left&#39;</code></td><td>滚动方向，left 为向左滚动，right 为向右滚动</td></tr><tr><td>duration</td><td><code>number | string</code></td><td><code>20</code></td><td>完成一次滚动循环的时长（秒）</td></tr><tr><td>height</td><td><code>string</code></td><td><code>&#39;3rem&#39;</code></td><td>组件高度</td></tr><tr><td>backgroundColor</td><td><code>string</code></td><td><code>&#39;transparent&#39;</code></td><td>背景色</td></tr><tr><td>textColor</td><td><code>string</code></td><td><code>&#39;#111827&#39;</code></td><td>默认文本色</td></tr><tr><td>borderRadius</td><td><code>string</code></td><td><code>&#39;0.75rem&#39;</code></td><td>圆角大小</td></tr><tr><td>gap</td><td><code>string</code></td><td><code>&#39;1rem&#39;</code></td><td>项间距</td></tr><tr><td>pauseOnHover</td><td><code>boolean</code></td><td><code>true</code></td><td>鼠标悬停时暂停滚动</td></tr><tr><td>loop</td><td><code>boolean</code></td><td><code>true</code></td><td>是否无缝循环滚动</td></tr><tr><td>autofill</td><td><code>boolean</code></td><td><code>false</code></td><td>图片模式下自动补充内容，避免首屏过空</td></tr><tr><td>unstyled</td><td><code>boolean</code></td><td><code>false</code></td><td>是否使用无样式模式</td></tr><tr><td>pt</td><td><code>RunhorselightPT</code></td><td>-</td><td>自定义样式传递</td></tr></tbody></table><h3 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>prefix-click</td><td><code>(payload: RunhorselightAffixClickPayload) =&gt; void</code></td><td>前缀点击事件</td></tr><tr><td>suffix-click</td><td><code>(payload: RunhorselightAffixClickPayload) =&gt; void</code></td><td>后缀点击事件</td></tr></tbody></table><h3 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h3><table tabindex="0"><thead><tr><th>插槽名</th><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>-</td><td>默认内容插槽，用于自定义跑马灯内容</td></tr><tr><td>item</td><td><code>(item: RunhorselightNormalizedItem) =&gt; void</code></td><td>单个数据项的内容插槽</td></tr><tr><td>prefix</td><td><code>(item: RunhorselightNormalizedItem) =&gt; void</code></td><td>前缀内容插槽</td></tr><tr><td>suffix</td><td><code>(item: RunhorselightNormalizedItem) =&gt; void</code></td><td>后缀内容插槽</td></tr></tbody></table><h3 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to &quot;类型定义&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">// 跑马灯数据项类型</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">type</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> RunhorselightItem</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> </span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">  |</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">  // 纯文本</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">  |</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">      type</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;text&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> |</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;image&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> |</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;card&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">  // 内容类型</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">      content</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">                    // 文本内容</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">      src</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">                         // 图片地址</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">      alt</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">                         // 图片描述</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">      title</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">                       // 卡片标题</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">      description</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">                 // 卡片描述</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">      backgroundColor</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">            // 背景色</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">      textColor</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">                   // 文本颜色</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">      borderRadius</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">                // 圆角大小</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">    }</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">// 样式传递类型</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">type</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> RunhorselightPT</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">  root</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">              // 根元素样式类</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">  viewport</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">          // 视口容器样式类</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">  track</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">             // 轨道样式类</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">  group</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">             // 组样式类</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">  item</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">              // 单个项样式类</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">  image</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">             // 图片样式类</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">  card</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">              // 卡片样式类</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">  cardTitle</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">         // 卡片标题样式类</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">  cardDescription</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">    // 卡片描述样式类</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">  text</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">              // 文本样式类</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">}</span></span></code></pre></div><h2 id="使用场景" tabindex="-1">使用场景 <a class="header-anchor" href="#使用场景" aria-label="Permalink to &quot;使用场景&quot;">​</a></h2><h3 id="文本跑马灯" tabindex="-1">文本跑马灯 <a class="header-anchor" href="#文本跑马灯" aria-label="Permalink to &quot;文本跑马灯&quot;">​</a></h3><p>适用于公告、通知等纯文本内容的滚动展示。</p><h3 id="图片跑马灯" tabindex="-1">图片跑马灯 <a class="header-anchor" href="#图片跑马灯" aria-label="Permalink to &quot;图片跑马灯&quot;">​</a></h3><p>适用于合作伙伴 Logo、产品图片等图片内容的循环展示。</p><h3 id="卡片跑马灯" tabindex="-1">卡片跑马灯 <a class="header-anchor" href="#卡片跑马灯" aria-label="Permalink to &quot;卡片跑马灯&quot;">​</a></h3><p>适用于新闻卡片、产品卡片等包含标题和描述的复合内容展示。</p><h3 id="自定义内容" tabindex="-1">自定义内容 <a class="header-anchor" href="#自定义内容" aria-label="Permalink to &quot;自定义内容&quot;">​</a></h3><p>通过默认插槽可以完全自定义跑马灯的内容，支持任意 Vue 组件。</p><h2 id="无障碍访问" tabindex="-1">无障碍访问 <a class="header-anchor" href="#无障碍访问" aria-label="Permalink to &quot;无障碍访问&quot;">​</a></h2><p>Runhorselight 组件遵循 WCAG 2.1 标准，支持以下无障碍特性：</p><ul><li>键盘可访问：所有交互元素都支持键盘导航</li><li>ARIA 属性：正确使用 <code>aria-hidden</code> 属性来标识重复内容</li><li>焦点管理：支持合理的焦点顺序和可见的焦点状态</li><li>动画控制：提供 <code>pauseOnHover</code> 属性，允许用户暂停动画</li></ul><h2 id="性能优化" tabindex="-1">性能优化 <a class="header-anchor" href="#性能优化" aria-label="Permalink to &quot;性能优化&quot;">​</a></h2><ul><li>使用 <code>transform</code> 和 <code>will-change</code> 属性优化动画性能</li><li>通过 <code>requestAnimationFrame</code> 实现流畅的 60fps 动画</li><li>自动计算内容重复次数，确保无缝滚动的同时最小化 DOM 节点</li><li>支持 <code>ResizeObserver</code> 自动响应容器尺寸变化</li></ul><h2 id="暗黑模式" tabindex="-1">暗黑模式 <a class="header-anchor" href="#暗黑模式" aria-label="Permalink to &quot;暗黑模式&quot;">​</a></h2><p>组件完全支持暗黑模式，会自动根据系统主题或手动设置的暗黑模式调整样式。通过 Tailwind CSS 的 <code>dark:</code> 前缀可以实现自定义的暗黑模式样式。</p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/runhorselight/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
