import { defineComponent, ref, shallowRef, onMounted, resolveComponent, unref, withCtx, createSlots, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
/* empty css               */
import { VitepressDemoPlaceholder, VitepressDemoBox } from "vitepress-demo-plugin/client";
const TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdGV4dGFyZWEtZXhhbXBsZS1pbmRleAEqualEqual = `<template>\r
  <div class="flex flex-col gap-8">\r
    <!-- 基础文本域 -->\r
    <section>\r
      <h2 class="mb-4 text-lg font-bold">基础文本域</h2>\r
      <ZTextarea v-model="basicValue" placeholder="请输入内容..." />\r
    </section>\r
\r
    <!-- 不同尺寸 -->\r
    <section>\r
      <h2 class="mb-4 text-lg font-bold">不同尺寸</h2>\r
      <div class="space-y-4">\r
        <ZTextarea size="sm" placeholder="小尺寸" />\r
        <ZTextarea size="md" placeholder="中等尺寸（默认）" />\r
        <ZTextarea size="lg" placeholder="大尺寸" />\r
      </div>\r
    </section>\r
\r
    <!-- 禁用状态 -->\r
    <section>\r
      <h2 class="mb-4 text-lg font-bold">禁用状态</h2>\r
      <ZTextarea disabled placeholder="禁用状态" value="此文本域已被禁用" />\r
    </section>\r
\r
    <!-- 只读状态 -->\r
    <section>\r
      <h2 class="mb-4 text-lg font-bold">只读状态</h2>\r
      <ZTextarea readonly placeholder="只读状态" value="此文本域为只读" />\r
    </section>\r
\r
    <!-- 不同行数 -->\r
    <section>\r
      <h2 class="mb-4 text-lg font-bold">不同行数</h2>\r
      <div class="space-y-4">\r
        <ZTextarea :rows="2" placeholder="2行" />\r
        <ZTextarea :rows="4" placeholder="4行（默认）" />\r
        <ZTextarea :rows="6" placeholder="6行" />\r
      </div>\r
    </section>\r
\r
    <!-- 字数限制与统计 -->\r
    <section>\r
      <h2 class="mb-4 text-lg font-bold">字数限制与统计</h2>\r
      <ZTextarea\r
        v-model="limitedValue"\r
        placeholder="带字数限制的文本域"\r
        :maxLength="100"\r
        showCount\r
      />\r
    </section>\r
\r
    <!-- 自动调整高度 -->\r
    <section>\r
      <h2 class="mb-4 text-lg font-bold">自动调整高度</h2>\r
      <ZTextarea\r
        v-model="autosizeValue"\r
        placeholder="随着输入内容增加自动调整高度"\r
        :autosize="true"\r
      />\r
    </section>\r
\r
    <!-- 调整大小方向 -->\r
    <section>\r
      <h2 class="mb-4 text-lg font-bold">调整大小方向</h2>\r
      <div class="space-y-4">\r
        <ZTextarea resize="none" placeholder="不可调整大小" />\r
        <ZTextarea resize="horizontal" placeholder="只能水平调整大小" />\r
        <ZTextarea resize="vertical" placeholder="只能垂直调整大小（默认）" />\r
        <ZTextarea resize="both" placeholder="可以水平和垂直调整大小" />\r
      </div>\r
    </section>\r
\r
    <!-- 不同状态 -->\r
    <section>\r
      <h2 class="mb-4 text-lg font-bold">不同状态</h2>\r
      <div class="space-y-4">\r
        <ZTextarea\r
          status="error"\r
          placeholder="错误状态"\r
          value="这是一条错误信息"\r
        />\r
        <ZTextarea\r
          status="warning"\r
          placeholder="警告状态"\r
          value="这是一条警告信息"\r
        />\r
        <ZTextarea\r
          status="success"\r
          placeholder="成功状态"\r
          value="这是一条成功信息"\r
        />\r
      </div>\r
    </section>\r
\r
    <!-- 结合表单使用 -->\r
    <section>\r
      <h2 class="mb-4 text-lg font-bold">结合表单使用</h2>\r
      <div class="space-y-4">\r
        <div>\r
          <label class="block mb-1 font-medium">留言内容：</label>\r
          <ZTextarea\r
            v-model="formValue"\r
            placeholder="请输入留言内容..."\r
            :maxLength="200"\r
            showCount\r
          />\r
        </div>\r
        <button\r
          class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"\r
        >\r
          提交\r
        </button>\r
      </div>\r
    </section>\r
  </div>\r
</template>\r
\r
<script setup>\r
import { ref } from 'vue'\r
import { ZTextarea } from '@zxy-ui/vue'\r
\r
// 示例数据\r
const basicValue = ref('')\r
const limitedValue = ref('')\r
const autosizeValue = ref('')\r
const formValue = ref('')\r
<\/script>\r
`;
const __pageData = JSON.parse('{"title":"TextArea","description":"","frontmatter":{},"headers":[],"relativePath":"components/textarea/index.md","filePath":"components/textarea/index.md"}');
const __default__ = { name: "components/textarea/index.md" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __ssrInlineRender: true,
  setup(__props) {
    const __placeholder_visible_key__ = ref(true);
    const TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdGV4dGFyZWEtZXhhbXBsZS1pbmRleAEqualEqual = shallowRef();
    onMounted(async () => {
      TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdGV4dGFyZWEtZXhhbXBsZS1pbmRleAEqualEqual.value = (await import("./index.D9UE8MtJ.js")).default;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StorybookLink = resolveComponent("StorybookLink");
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="textarea" tabindex="-1">TextArea <a class="header-anchor" href="#textarea" aria-label="Permalink to &quot;TextArea&quot;">​</a></h1><p>TextArea 是一种允许用户输入多行文本的表单组件，通常以矩形区域呈现，支持文本编辑、换行和滚动。与单行输入框（Input）相比，它更适合长文本输入场景，如评论、留言、描述填写等。</p>`);
      _push(ssrRenderComponent(_component_StorybookLink, { link: "https://zxy-ui.github.io/zxy-ui/storybook/?path=/story/%E7%BB%84%E4%BB%B6-textarea-%E6%96%87%E6%9C%AC%E5%9F%9F--basic" }, null, _parent));
      _push(`<div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> { TextArea } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;@zxy-ui/vue&#39;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2>`);
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
              vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdGV4dGFyZWEtZXhhbXBsZS1pbmRleAEqualEqual)
            }, createSlots({ _: 2 }, [
              TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdGV4dGFyZWEtZXhhbXBsZS1pbmRleAEqualEqual.value ? {
                name: "vue",
                fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdGV4dGFyZWEtZXhhbXBsZS1pbmRleAEqualEqual), null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdGV4dGFyZWEtZXhhbXBsZS1pbmRleAEqualEqual))
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
                vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdGV4dGFyZWEtZXhhbXBsZS1pbmRleAEqualEqual)
              }, createSlots({ _: 2 }, [
                TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdGV4dGFyZWEtZXhhbXBsZS1pbmRleAEqualEqual.value ? {
                  name: "vue",
                  fn: withCtx(() => [
                    createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdGV4dGFyZWEtZXhhbXBsZS1pbmRleAEqualEqual))
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["onMount", "vueCode"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/textarea/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
