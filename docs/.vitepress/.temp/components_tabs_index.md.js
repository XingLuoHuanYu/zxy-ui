import { defineComponent, ref, shallowRef, onMounted, resolveComponent, unref, withCtx, createSlots, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
/* empty css               */
import { VitepressDemoPlaceholder, VitepressDemoBox } from "vitepress-demo-plugin/client";
const TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdGFicy1leGFtcGxlLWluZGV4 = `<script setup lang="ts">\r
import { ZTabs, ZTabItem } from '@zxy-ui/vue'\r
import '@zxy-ui/vue/style'\r
import { ref } from 'vue'\r
\r
// 控制当前激活的标签页\r
const activeTab = ref('tab1')\r
\r
// 处理标签页变化\r
const handleTabChange = (value: string | number) => {\r
  console.log('当前选中的标签:', value)\r
  activeTab.value = value as string\r
}\r
<\/script>\r
\r
<template>\r
  <div class="tabs-examples space-y-8">\r
    <!-- 基础用法 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-3">基础用法</h2>\r
      <ZTabs v-model="activeTab" @change="handleTabChange">\r
        <ZTabItem name="tab1" title="标签1">\r
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">\r
            <p>这是标签1的内容</p>\r
            <p class="mt-2">当前选中的标签: {{ activeTab }}</p>\r
          </div>\r
        </ZTabItem>\r
        <ZTabItem name="tab2" title="标签2">\r
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">\r
            <p>这是标签2的内容</p>\r
            <p class="mt-2">当前选中的标签: {{ activeTab }}</p>\r
          </div>\r
        </ZTabItem>\r
        <ZTabItem name="tab3" title="标签3">\r
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">\r
            <p>这是标签3的内容</p>\r
            <p class="mt-2">当前选中的标签: {{ activeTab }}</p>\r
          </div>\r
        </ZTabItem>\r
      </ZTabs>\r
    </section>\r
\r
    <!-- 不同变体 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-3">不同变体</h2>\r
\r
      <h3 class="text-sm font-medium mb-2">默认样式 (default)</h3>\r
      <ZTabs variant="default">\r
        <ZTabItem name="var1" title="标签1">\r
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">\r
            <p>默认样式标签内容</p>\r
          </div>\r
        </ZTabItem>\r
        <ZTabItem name="var2" title="标签2">\r
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">\r
            <p>默认样式标签内容</p>\r
          </div>\r
        </ZTabItem>\r
      </ZTabs>\r
\r
      <h3 class="text-sm font-medium mb-2 mt-4">胶囊样式 (pills)</h3>\r
      <ZTabs variant="pills">\r
        <ZTabItem name="pill1" title="标签1">\r
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">\r
            <p>胶囊样式标签内容</p>\r
          </div>\r
        </ZTabItem>\r
        <ZTabItem name="pill2" title="标签2">\r
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">\r
            <p>胶囊样式标签内容</p>\r
          </div>\r
        </ZTabItem>\r
      </ZTabs>\r
\r
      <h3 class="text-sm font-medium mb-2 mt-4">下划线样式 (underline)</h3>\r
      <ZTabs variant="underline">\r
        <ZTabItem name="under1" title="标签1">\r
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">\r
            <p>下划线样式标签内容</p>\r
          </div>\r
        </ZTabItem>\r
        <ZTabItem name="under2" title="标签2">\r
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">\r
            <p>下划线样式标签内容</p>\r
          </div>\r
        </ZTabItem>\r
      </ZTabs>\r
    </section>\r
\r
    <!-- 不同尺寸 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-3">不同尺寸</h2>\r
\r
      <h3 class="text-sm font-medium mb-2">小尺寸 (sm)</h3>\r
      <ZTabs size="sm">\r
        <ZTabItem name="sm1" title="标签1">\r
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">\r
            <p>小尺寸标签内容</p>\r
          </div>\r
        </ZTabItem>\r
        <ZTabItem name="sm2" title="标签2">\r
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">\r
            <p>小尺寸标签内容</p>\r
          </div>\r
        </ZTabItem>\r
      </ZTabs>\r
\r
      <h3 class="text-sm font-medium mb-2 mt-4">中尺寸 (md) - 默认</h3>\r
      <ZTabs size="md">\r
        <ZTabItem name="md1" title="标签1">\r
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">\r
            <p>中尺寸标签内容</p>\r
          </div>\r
        </ZTabItem>\r
        <ZTabItem name="md2" title="标签2">\r
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">\r
            <p>中尺寸标签内容</p>\r
          </div>\r
        </ZTabItem>\r
      </ZTabs>\r
\r
      <h3 class="text-sm font-medium mb-2 mt-4">大尺寸 (lg)</h3>\r
      <ZTabs size="lg">\r
        <ZTabItem name="lg1" title="标签1">\r
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">\r
            <p>大尺寸标签内容</p>\r
          </div>\r
        </ZTabItem>\r
        <ZTabItem name="lg2" title="标签2">\r
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">\r
            <p>大尺寸标签内容</p>\r
          </div>\r
        </ZTabItem>\r
      </ZTabs>\r
    </section>\r
\r
    <!-- 不同位置 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-3">不同位置</h2>\r
\r
      <h3 class="text-sm font-medium mb-2">顶部位置 (top) - 默认</h3>\r
      <ZTabs placement="top">\r
        <ZTabItem name="top1" title="标签1">\r
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">\r
            <p>顶部位置标签内容</p>\r
          </div>\r
        </ZTabItem>\r
        <ZTabItem name="top2" title="标签2">\r
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">\r
            <p>顶部位置标签内容</p>\r
          </div>\r
        </ZTabItem>\r
      </ZTabs>\r
\r
      <h3 class="text-sm font-medium mb-2 mt-4">底部位置 (bottom)</h3>\r
      <ZTabs placement="bottom">\r
        <ZTabItem name="bottom1" title="标签1">\r
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">\r
            <p>底部位置标签内容</p>\r
          </div>\r
        </ZTabItem>\r
        <ZTabItem name="bottom2" title="标签2">\r
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">\r
            <p>底部位置标签内容</p>\r
          </div>\r
        </ZTabItem>\r
      </ZTabs>\r
\r
      <h3 class="text-sm font-medium mb-2 mt-4">左侧位置 (left)</h3>\r
      <ZTabs placement="left">\r
        <ZTabItem name="left1" title="标签1">\r
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">\r
            <p>左侧位置标签内容</p>\r
          </div>\r
        </ZTabItem>\r
        <ZTabItem name="left2" title="标签2">\r
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">\r
            <p>左侧位置标签内容</p>\r
          </div>\r
        </ZTabItem>\r
      </ZTabs>\r
\r
      <h3 class="text-sm font-medium mb-2 mt-4">右侧位置 (right)</h3>\r
      <ZTabs placement="right">\r
        <ZTabItem name="right1" title="标签1">\r
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">\r
            <p>右侧位置标签内容</p>\r
          </div>\r
        </ZTabItem>\r
        <ZTabItem name="right2" title="标签2">\r
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">\r
            <p>右侧位置标签内容</p>\r
          </div>\r
        </ZTabItem>\r
      </ZTabs>\r
    </section>\r
\r
    <!-- 禁用状态 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-3">禁用状态</h2>\r
\r
      <h3 class="text-sm font-medium mb-2">禁用单个标签</h3>\r
      <ZTabs>\r
        <ZTabItem name="dis1" title="标签1">\r
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">\r
            <p>这是标签1的内容</p>\r
          </div>\r
        </ZTabItem>\r
        <ZTabItem name="dis2" title="标签2" :disabled="true">\r
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">\r
            <p>这是标签2的内容（已禁用）</p>\r
          </div>\r
        </ZTabItem>\r
        <ZTabItem name="dis3" title="标签3">\r
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">\r
            <p>这是标签3的内容</p>\r
          </div>\r
        </ZTabItem>\r
      </ZTabs>\r
\r
      <h3 class="text-sm font-medium mb-2 mt-4">禁用整个标签组件</h3>\r
      <ZTabs :disabled="true">\r
        <ZTabItem name="all-dis1" title="标签1">\r
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">\r
            <p>这是标签1的内容（整个标签组已禁用）</p>\r
          </div>\r
        </ZTabItem>\r
        <ZTabItem name="all-dis2" title="标签2">\r
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">\r
            <p>这是标签2的内容（整个标签组已禁用）</p>\r
          </div>\r
        </ZTabItem>\r
      </ZTabs>\r
    </section>\r
\r
    <!-- 全宽模式 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-3">全宽模式</h2>\r
      <ZTabs :fullWidth="true">\r
        <ZTabItem name="full1" title="标签1">\r
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">\r
            <p>全宽模式标签内容</p>\r
          </div>\r
        </ZTabItem>\r
        <ZTabItem name="full2" title="标签2">\r
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">\r
            <p>全宽模式标签内容</p>\r
          </div>\r
        </ZTabItem>\r
        <ZTabItem name="full3" title="标签3">\r
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">\r
            <p>全宽模式标签内容</p>\r
          </div>\r
        </ZTabItem>\r
      </ZTabs>\r
    </section>\r
  </div>\r
</template>\r
\r
<style scoped>\r
.tabs-examples {\r
  width: 100%;\r
  max-width: 800px;\r
  margin: 0 auto;\r
}\r
</style>\r
`;
const __pageData = JSON.parse('{"title":"Tabs 标签页","description":"","frontmatter":{},"headers":[],"relativePath":"components/tabs/index.md","filePath":"components/tabs/index.md"}');
const __default__ = { name: "components/tabs/index.md" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __ssrInlineRender: true,
  setup(__props) {
    const __placeholder_visible_key__ = ref(true);
    const TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdGFicy1leGFtcGxlLWluZGV4 = shallowRef();
    onMounted(async () => {
      TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdGFicy1leGFtcGxlLWluZGV4.value = (await import("./index.DRnR2TPq.js")).default;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="tabs-标签页" tabindex="-1">Tabs 标签页 <a class="header-anchor" href="#tabs-标签页" aria-label="Permalink to &quot;Tabs 标签页&quot;">​</a></h1><p>Tabs（标签页）组件是一种常见的界面模式，用于在有限空间内组织和切换多个内容面板，使信息呈现更具条理且易于浏览。用户通过点击或滑动标签快速在不同内容区域间切换，提升交互效率。</p><h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">// 引入组件</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> { Tab, ZTabItem } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;@zxy-ui/vue&#39;</span></span></code></pre></div><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>使用<code>Tab</code>和<code>TabItem</code>组件可以灵活地自定义标签页内容。</p>`);
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
              vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdGFicy1leGFtcGxlLWluZGV4)
            }, createSlots({ _: 2 }, [
              TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdGFicy1leGFtcGxlLWluZGV4.value ? {
                name: "vue",
                fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdGFicy1leGFtcGxlLWluZGV4), null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdGFicy1leGFtcGxlLWluZGV4))
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
                vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdGFicy1leGFtcGxlLWluZGV4)
              }, createSlots({ _: 2 }, [
                TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdGFicy1leGFtcGxlLWluZGV4.value ? {
                  name: "vue",
                  fn: withCtx(() => [
                    createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdGFicy1leGFtcGxlLWluZGV4))
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["onMount", "vueCode"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="tab-props" tabindex="-1">Tab Props <a class="header-anchor" href="#tab-props" aria-label="Permalink to &quot;Tab Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>initialIndex</td><td>初始选中的标签索引</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>size</td><td>标签页尺寸</td><td><code>&#39;sm&#39; | &#39;md&#39; | &#39;lg&#39;</code></td><td><code>&#39;md&#39;</code></td></tr><tr><td>disabled</td><td>是否禁用所有标签</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>block</td><td>是否块级显示（宽度100%）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>unstyled</td><td>是否使用无样式模式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>pt</td><td>自定义样式</td><td><code>TabsPT</code></td><td>-</td></tr></tbody></table><h3 id="tabitem-props" tabindex="-1">TabItem Props <a class="header-anchor" href="#tabitem-props" aria-label="Permalink to &quot;TabItem Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>标签文本</td><td><code>string</code></td><td>-</td></tr><tr><td>disabled</td><td>是否禁用该标签</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>icon</td><td>图标URL</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>当前激活的标签改变时触发</td><td><code>(index: number) =&gt; void</code></td></tr></tbody></table><h3 id="tabspt-类型定义" tabindex="-1">TabsPT 类型定义 <a class="header-anchor" href="#tabspt-类型定义" aria-label="Permalink to &quot;TabsPT 类型定义&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">type</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> TabsPT</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">	container</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">	trigger</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">	panel</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">	icon</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">?:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> string</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">}</span></span></code></pre></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tabs/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
