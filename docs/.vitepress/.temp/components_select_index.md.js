import { defineComponent, ref, shallowRef, onMounted, resolveComponent, unref, withCtx, createSlots, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
/* empty css               */
import { VitepressDemoPlaceholder, VitepressDemoBox } from "vitepress-demo-plugin/client";
const TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc2VsZWN0LWV4YW1wbGUtaW5kZXgEqual = `<template>\r
  <div class="flex flex-col gap-8">\r
    <!-- 基础用法 -->\r
    <section>\r
      <h2 class="mb-4 text-lg font-bold">基础用法</h2>\r
      <ZSelect\r
        v-model="selectedValue"\r
        placeholder="请选择一个选项"\r
        :options="basicOptions"\r
      />\r
      <div class="mt-2 text-sm text-gray-600">\r
        当前选择: {{ selectedValue || '未选择' }}\r
      </div>\r
    </section>\r
\r
    <!-- 带标签和默认值 -->\r
    <section>\r
      <h2 class="mb-4 text-lg font-bold">带标签和默认值</h2>\r
      <ZSelect\r
        v-model="selectedValue2"\r
        :options="basicOptions"\r
        :showLabel="true"\r
        label="选择一个选项"\r
      />\r
      <div class="mt-2 text-sm text-gray-600">\r
        当前选择: {{ selectedValue2 }}\r
      </div>\r
    </section>\r
\r
    <!-- 尺寸变体 -->\r
    <section>\r
      <h2 class="mb-4 text-lg font-bold">尺寸变体</h2>\r
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">\r
        <ZSelect\r
          size="small"\r
          :showLabel="true"\r
          label="小尺寸 (small)"\r
          placeholder="选择选项"\r
          :options="basicOptions"\r
        />\r
        <ZSelect\r
          size="default"\r
          :showLabel="true"\r
          label="默认尺寸 (default)"\r
          placeholder="选择选项"\r
          :options="basicOptions"\r
        />\r
        <ZSelect\r
          size="large"\r
          :showLabel="true"\r
          label="大尺寸 (large)"\r
          placeholder="选择选项"\r
          :options="basicOptions"\r
        />\r
      </div>\r
    </section>\r
\r
    <!-- 状态变体 -->\r
    <section>\r
      <h2 class="mb-4 text-lg font-bold">状态变体</h2>\r
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">\r
        <ZSelect\r
          status="success"\r
          :showLabel="true"\r
          label="成功状态 (success)"\r
          placeholder="选择选项"\r
          :options="basicOptions"\r
        />\r
        <ZSelect\r
          status="warning"\r
          :showLabel="true"\r
          label="警告状态 (warning)"\r
          placeholder="选择选项"\r
          :options="basicOptions"\r
        />\r
        <ZSelect\r
          status="error"\r
          :showLabel="true"\r
          label="错误状态 (error)"\r
          placeholder="选择选项"\r
          errorText="请选择一个有效选项"\r
          :options="basicOptions"\r
        />\r
      </div>\r
    </section>\r
\r
    <!-- 状态展示 -->\r
    <section>\r
      <h2 class="mb-4 text-lg font-bold">交互状态</h2>\r
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">\r
        <ZSelect\r
          disabled\r
          :showLabel="true"\r
          label="禁用状态 (disabled)"\r
          placeholder="无法选择"\r
          :options="basicOptions"\r
        />\r
        <ZSelect\r
          readonly\r
          :showLabel="true"\r
          label="只读状态 (readonly)"\r
          placeholder="只读"\r
          modelValue="option1"\r
          :options="basicOptions"\r
        />\r
        <ZSelect\r
          :showLabel="true"\r
          label="必填状态"\r
          placeholder="必须选择"\r
          required\r
          :options="basicOptions"\r
        />\r
        <ZSelect\r
          :showLabel="true"\r
          label="帮助文本"\r
          placeholder="选择选项"\r
          helpText="请从下拉列表中选择一个选项"\r
          :options="basicOptions"\r
        />\r
      </div>\r
    </section>\r
\r
    <!-- 禁用选项 -->\r
    <section>\r
      <h2 class="mb-4 text-lg font-bold">禁用选项</h2>\r
      <ZSelect\r
        :showLabel="true"\r
        label="部分选项禁用"\r
        placeholder="选择选项"\r
        :options="disabledOptions"\r
      />\r
    </section>\r
\r
    <!-- 多选模式 -->\r
    <section>\r
      <h2 class="mb-4 text-lg font-bold">多选模式</h2>\r
      <ZSelect\r
        multiple\r
        :showLabel="true"\r
        label="多选选择器"\r
        placeholder="选择多个选项"\r
        v-model="multiSelectedValue"\r
        clearable\r
        :options="basicOptions"\r
      />\r
      <div class="mt-2 text-sm text-gray-600">\r
        当前选择:\r
        {{\r
          multiSelectedValue.length ? multiSelectedValue.join(', ') : '未选择'\r
        }}\r
      </div>\r
    </section>\r
\r
    <!-- 可搜索选择器 -->\r
    <section>\r
      <h2 class="mb-4 text-lg font-bold">可搜索选择器</h2>\r
      <ZSelect\r
        filterable\r
        :showLabel="true"\r
        label="可搜索选择器"\r
        placeholder="搜索并选择水果"\r
        v-model="searchValue"\r
        :options="fruitOptions"\r
      />\r
      <div class="mt-2 text-sm text-gray-600">\r
        当前选择: {{ searchValue || '未选择' }}\r
      </div>\r
    </section>\r
\r
    <!-- 可清除选择 -->\r
    <section>\r
      <h2 class="mb-4 text-lg font-bold">可清除选择</h2>\r
      <ZSelect\r
        clearable\r
        :showLabel="true"\r
        label="可清除选择器"\r
        placeholder="选择后可清除"\r
        v-model="clearableValue"\r
        :options="basicOptions"\r
      />\r
      <div class="mt-2 text-sm text-gray-600">\r
        当前选择: {{ clearableValue || '未选择' }}\r
      </div>\r
    </section>\r
\r
    <!-- 分组选项 -->\r
    <section>\r
      <h2 class="mb-4 text-lg font-bold">分组选项</h2>\r
      <ZSelect\r
        :showLabel="true"\r
        label="分组选择"\r
        placeholder="选择一个选项"\r
        v-model="groupedValue"\r
        filterable\r
        :options="groupedOptions"\r
      />\r
      <div class="mt-2 text-sm text-gray-600">\r
        当前选择: {{ groupedValue || '未选择' }}\r
      </div>\r
    </section>\r
  </div>\r
</template>\r
\r
<script setup>\r
import { ZSelect } from '@zxy-ui/vue'\r
import { ref } from 'vue'\r
\r
// 基础示例\r
const selectedValue = ref(null)\r
const selectedValue2 = ref('option1')\r
\r
const basicOptions = [\r
  { value: 'option1', label: '选项 1' },\r
  { value: 'option2', label: '选项 2' },\r
  { value: 'option3', label: '选项 3' },\r
]\r
\r
// 禁用选项示例\r
const disabledOptions = [\r
  { value: 'option1', label: '选项 1' },\r
  { value: 'option2', label: '选项 2 (禁用)', disabled: true },\r
  { value: 'option3', label: '选项 3' },\r
  { value: 'option4', label: '选项 4 (禁用)', disabled: true },\r
]\r
\r
// 水果选项\r
const fruitOptions = [\r
  { value: 'apple', label: '苹果' },\r
  { value: 'banana', label: '香蕉' },\r
  { value: 'orange', label: '橙子' },\r
  { value: 'grape', label: '葡萄' },\r
  { value: 'watermelon', label: '西瓜' },\r
  { value: 'strawberry', label: '草莓' },\r
  { value: 'pear', label: '梨' },\r
  { value: 'peach', label: '桃子' },\r
]\r
\r
// 多选示例\r
const multiSelectedValue = ref([])\r
\r
// 可搜索示例\r
const searchValue = ref(null)\r
\r
// 可清除示例\r
const clearableValue = ref('option2')\r
\r
// 分组选项示例\r
const groupedValue = ref(null)\r
const groupedOptions = [\r
  { value: 'fruit1', label: '苹果', group: '水果' },\r
  { value: 'fruit2', label: '香蕉', group: '水果' },\r
  { value: 'fruit3', label: '橙子', group: '水果' },\r
  { value: 'veg1', label: '胡萝卜', group: '蔬菜' },\r
  { value: 'veg2', label: '西兰花', group: '蔬菜' },\r
  { value: 'veg3', label: '土豆', group: '蔬菜' },\r
  { value: 'meat1', label: '牛肉', group: '肉类' },\r
  { value: 'meat2', label: '猪肉', group: '肉类' },\r
  { value: 'meat3', label: '鸡肉', group: '肉类' },\r
]\r
<\/script>\r
`;
const __pageData = JSON.parse('{"title":"Select 选择器","description":"","frontmatter":{},"headers":[],"relativePath":"components/select/index.md","filePath":"components/select/index.md"}');
const __default__ = { name: "components/select/index.md" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __ssrInlineRender: true,
  setup(__props) {
    const __placeholder_visible_key__ = ref(true);
    const TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc2VsZWN0LWV4YW1wbGUtaW5kZXgEqual = shallowRef();
    onMounted(async () => {
      TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc2VsZWN0LWV4YW1wbGUtaW5kZXgEqual.value = (await import("./index.DA_uPWTN.js")).default;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StorybookLink = resolveComponent("StorybookLink");
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="select-选择器" tabindex="-1">Select 选择器 <a class="header-anchor" href="#select-选择器" aria-label="Permalink to &quot;Select 选择器&quot;">​</a></h1><p>Select 组件用于从一组预定义选项中选择一个或多个值。</p>`);
      _push(ssrRenderComponent(_component_StorybookLink, { link: "https://zxy-ui.github.io/zxy-ui/storybook/?path=/story/%E7%BB%84%E4%BB%B6-select-%E9%80%89%E6%8B%A9%E5%99%A8--basic" }, null, _parent));
      _push(`<h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> { ZSelect, SelectItem } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;@zxy-ui/vue&#39;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2>`);
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
              vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc2VsZWN0LWV4YW1wbGUtaW5kZXgEqual)
            }, createSlots({ _: 2 }, [
              TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc2VsZWN0LWV4YW1wbGUtaW5kZXgEqual.value ? {
                name: "vue",
                fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc2VsZWN0LWV4YW1wbGUtaW5kZXgEqual), null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc2VsZWN0LWV4YW1wbGUtaW5kZXgEqual))
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
                vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc2VsZWN0LWV4YW1wbGUtaW5kZXgEqual)
              }, createSlots({ _: 2 }, [
                TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc2VsZWN0LWV4YW1wbGUtaW5kZXgEqual.value ? {
                  name: "vue",
                  fn: withCtx(() => [
                    createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtc2VsZWN0LWV4YW1wbGUtaW5kZXgEqual))
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["onMount", "vueCode"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="select-属性" tabindex="-1">Select 属性 <a class="header-anchor" href="#select-属性" aria-label="Permalink to &quot;Select 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>modelValue</td><td>选择器的值</td><td><code>string | number | Array&lt;string | number&gt;</code></td><td>-</td></tr><tr><td>placeholder</td><td>占位符</td><td><code>string</code></td><td><code>&#39;请选择&#39;</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>selectionMode</td><td>选择模式</td><td><code>&#39;single&#39; | &#39;multiple&#39;</code></td><td><code>&#39;single&#39;</code></td></tr><tr><td>size</td><td>尺寸</td><td><code>&#39;sm&#39; | &#39;md&#39; | &#39;lg&#39;</code></td><td><code>&#39;md&#39;</code></td></tr><tr><td>color</td><td>颜色变体</td><td><code>&#39;default&#39; | &#39;primary&#39; | &#39;secondary&#39; | &#39;success&#39; | &#39;warning&#39; | &#39;danger&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>variant</td><td>外观变体</td><td><code>&#39;flat&#39; | &#39;bordered&#39; | &#39;underlined&#39;</code></td><td><code>&#39;bordered&#39;</code></td></tr><tr><td>radius</td><td>圆角大小</td><td><code>&#39;none&#39; | &#39;sm&#39; | &#39;md&#39; | &#39;lg&#39; | &#39;full&#39;</code></td><td><code>&#39;md&#39;</code></td></tr><tr><td>label</td><td>标签文本</td><td><code>string</code></td><td>-</td></tr><tr><td>labelPlacement</td><td>标签位置</td><td><code>&#39;inside&#39; | &#39;outside&#39; | &#39;outside-left&#39;</code></td><td><code>&#39;inside&#39;</code></td></tr><tr><td>description</td><td>描述文本</td><td><code>string</code></td><td>-</td></tr><tr><td>errorMessage</td><td>错误消息</td><td><code>string</code></td><td>-</td></tr><tr><td>isInvalid</td><td>是否无效</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>isRequired</td><td>是否必填</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>isClearable</td><td>是否可清除</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>isFilterable</td><td>是否可搜索</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>maxDropdownHeight</td><td>最大下拉框高度</td><td><code>number</code></td><td><code>256</code></td></tr><tr><td>disabledKeys</td><td>禁用的选项键值</td><td><code>string[]</code></td><td>-</td></tr><tr><td>disableSelectorIconRotation</td><td>禁用选择器图标旋转</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>startContent</td><td>左侧内容</td><td><code>string</code></td><td>-</td></tr><tr><td>endContent</td><td>右侧内容</td><td><code>string</code></td><td>-</td></tr><tr><td>showScrollIndicators</td><td>是否显示滚动指示器</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>noMatchText</td><td>无匹配选项时显示的文本</td><td><code>string</code></td><td><code>&#39;无匹配选项&#39;</code></td></tr></tbody></table><h3 id="select-事件" tabindex="-1">Select 事件 <a class="header-anchor" href="#select-事件" aria-label="Permalink to &quot;Select 事件&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>update:modelValue</td><td>值变化时触发</td><td><code>(value: string | number | Array&lt;string | number&gt;)</code></td></tr><tr><td>change</td><td>值变化时触发</td><td><code>(value: string | number | Array&lt;string | number&gt;)</code></td></tr><tr><td>focus</td><td>获取焦点时触发</td><td>-</td></tr><tr><td>blur</td><td>失去焦点时触发</td><td>-</td></tr><tr><td>open-change</td><td>下拉菜单打开状态变化时触发</td><td><code>(isOpen: boolean)</code></td></tr></tbody></table><h3 id="select-插槽" tabindex="-1">Select 插槽 <a class="header-anchor" href="#select-插槽" aria-label="Permalink to &quot;Select 插槽&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>default</td><td>默认插槽，用于放置 SelectItem 组件</td><td>-</td></tr><tr><td>startContent</td><td>选择器左侧内容</td><td>-</td></tr><tr><td>endContent</td><td>选择器右侧内容</td><td>-</td></tr><tr><td>value</td><td>自定义选中值的渲染</td><td><code>{ selected: SelectItem[] }</code></td></tr><tr><td>selectorIcon</td><td>自定义选择器图标</td><td>-</td></tr></tbody></table><h3 id="selectitem-属性" tabindex="-1">SelectItem 属性 <a class="header-anchor" href="#selectitem-属性" aria-label="Permalink to &quot;SelectItem 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>选项键值</td><td><code>string</code></td><td><strong>必填</strong></td></tr><tr><td>label</td><td>选项标签</td><td><code>string</code></td><td>-</td></tr><tr><td>description</td><td>选项描述</td><td><code>string</code></td><td>-</td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>startContent</td><td>左侧内容</td><td><code>string</code></td><td>-</td></tr><tr><td>endContent</td><td>右侧内容</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="selectitem-插槽" tabindex="-1">SelectItem 插槽 <a class="header-anchor" href="#selectitem-插槽" aria-label="Permalink to &quot;SelectItem 插槽&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>default</td><td>默认插槽，用于自定义选项内容</td><td>-</td></tr><tr><td>description</td><td>自定义描述内容</td><td>-</td></tr><tr><td>startContent</td><td>选项左侧内容</td><td>-</td></tr><tr><td>endContent</td><td>选项右侧内容</td><td>-</td></tr><tr><td>selectedIcon</td><td>自定义选中图标</td><td>-</td></tr></tbody></table><h2 id="数据属性" tabindex="-1">数据属性 <a class="header-anchor" href="#数据属性" aria-label="Permalink to &quot;数据属性&quot;">​</a></h2><p>Select 组件在根元素上添加以下数据属性：</p><ul><li><strong>data-open</strong>: 下拉菜单是否打开</li><li><strong>data-disabled</strong>: 选择器是否禁用</li><li><strong>data-focus</strong>: 选择器是否聚焦</li><li><strong>data-invalid</strong>: 选择器是否无效</li></ul><p>SelectItem 组件在根元素上添加以下数据属性：</p><ul><li><strong>data-key</strong>: 选项的键值</li><li><strong>data-selected</strong>: 选项是否被选中</li><li><strong>data-disabled</strong>: 选项是否禁用</li><li><strong>data-focus</strong>: 选项是否聚焦</li><li><strong>data-hover</strong>: 选项是否悬停</li><li><strong>data-pressed</strong>: 选项是否按下</li></ul></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/select/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
