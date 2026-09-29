import { defineComponent, ref, shallowRef, onMounted, resolveComponent, unref, withCtx, createSlots, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
/* empty css               */
import { VitepressDemoPlaceholder, VitepressDemoBox } from "vitepress-demo-plugin/client";
const TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdG9hc3QtZXhhbXBsZS1pbmRleAEqualEqual = `<script setup lang="ts">
import { Toast } from '@zxy-ui/vue'
import '@zxy-ui/vue/style'

const showSuccess = () => {
  Toast.success('保存成功')
}

const showError = () => {
  Toast.error('请求失败，请稍后重试')
}

const showWarning = () => {
  Toast.warning('库存不足，请尽快补货')
}

const showInfo = () => {
  Toast.info('你有一条新的系统消息')
}

const showBottomCenter = () => {
  Toast.show({
    message: '这是底部居中的提示',
    type: 'info',
    position: 'bottom-center',
    duration: 4000,
  })
}

const showLongDuration = () => {
  Toast.show({
    message: '该提示将在 8 秒后自动关闭',
    type: 'success',
    duration: 8000,
  })
}

const clearAll = () => {
  Toast.removeAll()
}
<\/script>

<template>
  <div class="space-y-8">
    <section class="space-y-3">
      <h3 class="text-lg font-medium">基础类型</h3>
      <div class="flex flex-wrap gap-3">
        <button
          class="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
          @click="showSuccess"
        >
          Success
        </button>
        <button
          class="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
          @click="showError"
        >
          Error
        </button>
        <button
          class="rounded bg-amber-500 px-4 py-2 text-white hover:bg-amber-600"
          @click="showWarning"
        >
          Warning
        </button>
        <button
          class="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          @click="showInfo"
        >
          Info
        </button>
      </div>
    </section>

    <section class="space-y-3">
      <h3 class="text-lg font-medium">位置与时长</h3>
      <div class="flex flex-wrap gap-3">
        <button
          class="rounded bg-zinc-700 px-4 py-2 text-white hover:bg-zinc-800"
          @click="showBottomCenter"
        >
          底部居中
        </button>
        <button
          class="rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
          @click="showLongDuration"
        >
          8 秒自动关闭
        </button>
      </div>
    </section>

    <section class="space-y-3">
      <h3 class="text-lg font-medium">控制</h3>
      <div class="flex flex-wrap gap-3">
        <button
          class="rounded bg-slate-600 px-4 py-2 text-white hover:bg-slate-700"
          @click="clearAll"
        >
          清空全部提示
        </button>
      </div>
    </section>
  </div>
</template>
`;
const __pageData = JSON.parse('{"title":"Toast 轻提示","description":"","frontmatter":{},"headers":[],"relativePath":"components/toast/index.md","filePath":"components/toast/index.md"}');
const __default__ = { name: "components/toast/index.md" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __ssrInlineRender: true,
  setup(__props) {
    const __placeholder_visible_key__ = ref(true);
    const TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdG9hc3QtZXhhbXBsZS1pbmRleAEqualEqual = shallowRef();
    onMounted(async () => {
      TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdG9hc3QtZXhhbXBsZS1pbmRleAEqualEqual.value = (await import("./index.idNAXWaJ.js")).default;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="toast-轻提示" tabindex="-1">Toast 轻提示 <a class="header-anchor" href="#toast-轻提示" aria-label="Permalink to &quot;Toast 轻提示&quot;">​</a></h1><p>Toast 是一种轻量级的全局反馈组件，用于展示操作结果或状态信息，不会打断当前页面流程。</p><h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> { Toast } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;@zxy-ui/vue&#39;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2>`);
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
              vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdG9hc3QtZXhhbXBsZS1pbmRleAEqualEqual)
            }, createSlots({ _: 2 }, [
              TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdG9hc3QtZXhhbXBsZS1pbmRleAEqualEqual.value ? {
                name: "vue",
                fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdG9hc3QtZXhhbXBsZS1pbmRleAEqualEqual), null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdG9hc3QtZXhhbXBsZS1pbmRleAEqualEqual))
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
                vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdG9hc3QtZXhhbXBsZS1pbmRleAEqualEqual)
              }, createSlots({ _: 2 }, [
                TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdG9hc3QtZXhhbXBsZS1pbmRleAEqualEqual.value ? {
                  name: "vue",
                  fn: withCtx(() => [
                    createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtdG9hc3QtZXhhbXBsZS1pbmRleAEqualEqual))
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["onMount", "vueCode"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="toast-方法" tabindex="-1">Toast 方法 <a class="header-anchor" href="#toast-方法" aria-label="Permalink to &quot;Toast 方法&quot;">​</a></h3><table tabindex="0"><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>Toast.success</code></td><td>成功类型提示</td><td><code>(message: string, options?: Omit&lt;ToastOptions, &#39;message&#39; | &#39;type&#39;&gt;)</code></td></tr><tr><td><code>Toast.error</code></td><td>错误类型提示</td><td><code>(message: string, options?: Omit&lt;ToastOptions, &#39;message&#39; | &#39;type&#39;&gt;)</code></td></tr><tr><td><code>Toast.warning</code></td><td>警告类型提示</td><td><code>(message: string, options?: Omit&lt;ToastOptions, &#39;message&#39; | &#39;type&#39;&gt;)</code></td></tr><tr><td><code>Toast.info</code></td><td>信息类型提示</td><td><code>(message: string, options?: Omit&lt;ToastOptions, &#39;message&#39; | &#39;type&#39;&gt;)</code></td></tr><tr><td><code>Toast.show</code></td><td>自定义类型与配置</td><td><code>(options: ToastOptions)</code></td></tr><tr><td><code>Toast.remove</code></td><td>根据 id 移除提示</td><td><code>(id: string)</code></td></tr><tr><td><code>Toast.removeAll</code></td><td>移除全部提示</td><td><code>()</code></td></tr></tbody></table><h3 id="toastoptions" tabindex="-1">ToastOptions <a class="header-anchor" href="#toastoptions" aria-label="Permalink to &quot;ToastOptions&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>message</td><td>提示内容</td><td><code>string</code></td><td>-</td></tr><tr><td>type</td><td>提示类型</td><td><code>&#39;success&#39; | &#39;warning&#39; | &#39;info&#39; | &#39;error&#39;</code></td><td><code>&#39;info&#39;</code></td></tr><tr><td>duration</td><td>自动关闭时长（毫秒）</td><td><code>number</code></td><td><code>3000</code></td></tr><tr><td>position</td><td>显示位置</td><td><code>&#39;top-left&#39; | &#39;top-right&#39; | &#39;bottom-left&#39; | &#39;bottom-right&#39; | &#39;top-center&#39; | &#39;bottom-center&#39;</code></td><td><code>&#39;top-right&#39;</code></td></tr><tr><td>onClose</td><td>关闭回调</td><td><code>(id: string) =&gt; void</code></td><td>-</td></tr></tbody></table></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/toast/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
