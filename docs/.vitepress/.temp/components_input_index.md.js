import { defineComponent, ref, shallowRef, onMounted, resolveComponent, unref, withCtx, createSlots, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
/* empty css               */
import { VitepressDemoPlaceholder, VitepressDemoBox } from "vitepress-demo-plugin/client";
const TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtaW5wdXQtZXhhbXBsZS1pbmRleAEqualEqual = `<template>\r
  <div class="space-y-8">\r
    <!-- 基础用法 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">基础用法</h2>\r
      <div class="max-w-md">\r
        <ZInput v-model="inputValue" placeholder="请输入内容" />\r
        <div class="text-sm text-gray-500 mt-2">\r
          当前输入值: {{ inputValue || '空' }}\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- 不同类型 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">不同类型</h2>\r
      <div class="grid grid-cols-2 gap-4 max-w-2xl">\r
        <ZInput v-model="inputText" placeholder="文本输入框" type="text" />\r
        <ZInput\r
          v-model="inputPassword"\r
          placeholder="密码输入框"\r
          type="password"\r
        />\r
        <ZInput v-model="inputEmail" placeholder="邮箱输入框" type="email" />\r
        <ZInput v-model="inputNumber" placeholder="数字输入框" type="number" />\r
        <ZInput v-model="inputSearch" placeholder="搜索输入框" type="search" />\r
        <ZInput v-model="inputUrl" placeholder="URL输入框" type="url" />\r
      </div>\r
    </section>\r
\r
    <!-- 不同尺寸 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">不同尺寸</h2>\r
      <div class="grid grid-cols-1 gap-4 max-w-md">\r
        <ZInput v-model="inputSize" size="small" placeholder="小型输入框" />\r
        <ZInput\r
          v-model="inputSize"\r
          size="default"\r
          placeholder="默认尺寸输入框"\r
        />\r
        <ZInput v-model="inputSize" size="large" placeholder="大型输入框" />\r
      </div>\r
    </section>\r
\r
    <!-- 前缀和后缀 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">前缀和后缀</h2>\r
      <div class="grid grid-cols-1 gap-4 max-w-md">\r
        <ZInput\r
          v-model="inputPrefix"\r
          placeholder="带前缀图标"\r
          prefixIcon="i-heroicons-user"\r
        />\r
        <ZInput\r
          v-model="inputSuffix"\r
          placeholder="带后缀图标"\r
          suffixIcon="i-heroicons-magnifying-glass"\r
        />\r
        <ZInput\r
          v-model="inputBoth"\r
          placeholder="前后缀都有"\r
          prefixIcon="i-heroicons-envelope"\r
          suffixIcon="i-heroicons-paper-airplane"\r
        />\r
      </div>\r
    </section>\r
\r
    <!-- 可清空 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">可清空</h2>\r
      <div class="max-w-md">\r
        <ZInput\r
          v-model="inputClearable"\r
          placeholder="输入后显示清除按钮"\r
          clearable\r
        />\r
      </div>\r
    </section>\r
\r
    <!-- 字数统计 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">字数统计</h2>\r
      <div class="max-w-md">\r
        <ZInput\r
          v-model="inputCount"\r
          placeholder="最多输入20个字符"\r
          maxlength="20"\r
          showCount\r
        />\r
      </div>\r
    </section>\r
\r
    <!-- 不同状态 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">不同状态</h2>\r
      <div class="grid grid-cols-2 gap-4 max-w-2xl">\r
        <ZInput v-model="inputNormal" placeholder="默认状态" />\r
        <ZInput v-model="inputSuccess" placeholder="成功状态" status="success" />\r
        <ZInput v-model="inputWarning" placeholder="警告状态" status="warning" />\r
        <ZInput v-model="inputError" placeholder="错误状态" status="error" />\r
      </div>\r
    </section>\r
\r
    <!-- 禁用和只读 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">禁用和只读</h2>\r
      <div class="grid grid-cols-2 gap-4 max-w-2xl">\r
        <ZInput v-model="inputDisabled" placeholder="禁用状态" disabled />\r
        <ZInput v-model="inputReadonly" placeholder="只读状态" readonly />\r
      </div>\r
    </section>\r
\r
    <!-- 自动聚焦 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">自动聚焦</h2>\r
      <div class="max-w-md flex space-x-4">\r
        <ZInput v-model="inputAutofocus" placeholder="自动获取焦点" autofocus />\r
        <button\r
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"\r
          @click="handleResetAutofocus"\r
        >\r
          重置\r
        </button>\r
      </div>\r
    </section>\r
\r
    <!-- 表单应用示例 -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">表单应用示例</h2>\r
      <div class="max-w-md space-y-4 border p-6 rounded-md">\r
        <div>\r
          <label class="block text-sm font-medium text-gray-700 mb-1">\r
            用户名\r
          </label>\r
          <ZInput v-model="formUsername" placeholder="请输入用户名" />\r
        </div>\r
        <div>\r
          <label class="block text-sm font-medium text-gray-700 mb-1">\r
            密码\r
          </label>\r
          <ZInput\r
            v-model="formPassword"\r
            type="password"\r
            placeholder="请输入密码"\r
          />\r
        </div>\r
        <div>\r
          <label class="block text-sm font-medium text-gray-700 mb-1">\r
            邮箱\r
          </label>\r
          <ZInput\r
            v-model="formEmail"\r
            type="email"\r
            placeholder="请输入邮箱"\r
            :status="isValidEmail ? 'success' : formEmail ? 'error' : undefined"\r
          />\r
          <div\r
            v-if="formEmail && !isValidEmail"\r
            class="text-sm text-red-500 mt-1"\r
          >\r
            请输入有效的邮箱地址\r
          </div>\r
        </div>\r
        <div>\r
          <button\r
            class="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"\r
            :disabled="!formIsValid"\r
          >\r
            提交\r
          </button>\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- 全局注册用法（ZxyUI 前缀） -->\r
    <section>\r
      <h2 class="text-lg font-medium mb-4">\r
        全局注册用法 <span class="text-sm text-gray-500">（z- 前缀）</span>\r
      </h2>\r
      <p class="text-sm text-gray-500 mb-4">\r
        执行 <code>app.use(ZxyUI)</code> 后，无需 import 即可直接使用\r
        <code>&lt;z-input&gt;</code> 标签：\r
      </p>\r
      <div class="max-w-md">\r
        <z-input v-model="globalValue" placeholder="使用 z-input 全局组件" />\r
        <div class="text-sm text-gray-500 mt-2">\r
          当前值: {{ globalValue || '空' }}\r
        </div>\r
      </div>\r
    </section>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref, computed } from 'vue'\r
import { ZInput } from '@zxy-ui/vue'\r
// 基础用法\r
const inputValue = ref('')\r
\r
// 全局注册用法\r
const globalValue = ref('')\r
\r
// 不同类型\r
const inputText = ref('')\r
const inputPassword = ref('')\r
const inputEmail = ref('')\r
const inputNumber = ref('')\r
const inputSearch = ref('')\r
const inputUrl = ref('')\r
\r
// 不同尺寸\r
const inputSize = ref('')\r
\r
// 前缀和后缀\r
const inputPrefix = ref('')\r
const inputSuffix = ref('')\r
const inputBoth = ref('')\r
\r
// 可清空\r
const inputClearable = ref('')\r
\r
// 字数统计\r
const inputCount = ref('')\r
\r
// 不同状态\r
const inputNormal = ref('')\r
const inputSuccess = ref('成功状态示例')\r
const inputWarning = ref('警告状态示例')\r
const inputError = ref('错误状态示例')\r
\r
// 禁用和只读\r
const inputDisabled = ref('禁用状态示例')\r
const inputReadonly = ref('只读状态示例')\r
\r
// 自动聚焦\r
const inputAutofocus = ref('')\r
const handleResetAutofocus = () => {\r
  inputAutofocus.value = ''\r
  // 模拟组件重新渲染，实际使用中可能需要更复杂的处理\r
  setTimeout(() => {\r
    const input = document.querySelector('input[autofocus]')\r
    if (input) {\r
      input.focus()\r
    }\r
  }, 0)\r
}\r
\r
// 表单应用示例\r
const formUsername = ref('')\r
const formPassword = ref('')\r
const formEmail = ref('')\r
\r
// 邮箱验证\r
const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/\r
const isValidEmail = computed(() => {\r
  if (!formEmail.value) return true // 空值不验证\r
  return emailRegex.test(formEmail.value)\r
})\r
\r
// 表单验证\r
const formIsValid = computed(() => {\r
  return (\r
    formUsername.value &&\r
    formPassword.value &&\r
    formEmail.value &&\r
    isValidEmail.value\r
  )\r
})\r
<\/script>\r
`;
const __pageData = JSON.parse('{"title":"Input","description":"","frontmatter":{},"headers":[],"relativePath":"components/input/index.md","filePath":"components/input/index.md"}');
const __default__ = { name: "components/input/index.md" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __ssrInlineRender: true,
  setup(__props) {
    const __placeholder_visible_key__ = ref(true);
    const TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtaW5wdXQtZXhhbXBsZS1pbmRleAEqualEqual = shallowRef();
    onMounted(async () => {
      TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtaW5wdXQtZXhhbXBsZS1pbmRleAEqualEqual.value = (await import("./index.dy0DAcSZ.js")).default;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StorybookLink = resolveComponent("StorybookLink");
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="input" tabindex="-1">Input <a class="header-anchor" href="#input" aria-label="Permalink to &quot;Input&quot;">​</a></h1><p>Input 是一种允许用户输入文本或数值的表单组件，通常以矩形框形式呈现，支持单行输入（默认）或通过属性扩展为多行（TextArea）。它是用户与系统进行文本交互的基础入口，广泛应用于表单填写、搜索框、数据录入等场景。</p>`);
      _push(ssrRenderComponent(_component_StorybookLink, { link: "https://zxy-ui.github.io/zxy-ui/storybook/?path=/story/%E7%BB%84%E4%BB%B6-input-%E8%BE%93%E5%85%A5%E6%A1%86--basic" }, null, _parent));
      _push(`<h2 id="引用" tabindex="-1">引用 <a class="header-anchor" href="#引用" aria-label="Permalink to &quot;引用&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> { ZInput } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;@zxy-ui/vue&#39;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2>`);
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
              vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtaW5wdXQtZXhhbXBsZS1pbmRleAEqualEqual)
            }, createSlots({ _: 2 }, [
              TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtaW5wdXQtZXhhbXBsZS1pbmRleAEqualEqual.value ? {
                name: "vue",
                fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtaW5wdXQtZXhhbXBsZS1pbmRleAEqualEqual), null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtaW5wdXQtZXhhbXBsZS1pbmRleAEqualEqual))
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
                vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtaW5wdXQtZXhhbXBsZS1pbmRleAEqualEqual)
              }, createSlots({ _: 2 }, [
                TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtaW5wdXQtZXhhbXBsZS1pbmRleAEqualEqual.value ? {
                  name: "vue",
                  fn: withCtx(() => [
                    createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtaW5wdXQtZXhhbXBsZS1pbmRleAEqualEqual))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/input/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
