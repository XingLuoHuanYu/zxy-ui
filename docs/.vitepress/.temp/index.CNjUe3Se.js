import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { v as vi } from "./index.esm.BIucDlT0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const dynamicValue = ref(0);
    const isProgressing = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8" }, _attrs))}><section><h3 class="text-lg font-medium mb-4">基础进度条</h3>`);
      _push(ssrRenderComponent(unref(vi), { value: 40 }, null, _parent));
      _push(`</section><section><h3 class="text-lg font-medium mb-4">带文本的进度条</h3>`);
      _push(ssrRenderComponent(unref(vi), {
        value: 60,
        showText: ""
      }, null, _parent));
      _push(`</section><section><h3 class="text-lg font-medium mb-4">不同大小的进度条</h3><div class="space-y-4"><div><p class="mb-2 text-sm text-gray-500">小号进度条</p>`);
      _push(ssrRenderComponent(unref(vi), {
        value: 30,
        size: "sm"
      }, null, _parent));
      _push(`</div><div><p class="mb-2 text-sm text-gray-500">中号进度条</p>`);
      _push(ssrRenderComponent(unref(vi), {
        value: 50,
        size: "md"
      }, null, _parent));
      _push(`</div><div><p class="mb-2 text-sm text-gray-500">大号进度条</p>`);
      _push(ssrRenderComponent(unref(vi), {
        value: 70,
        size: "lg"
      }, null, _parent));
      _push(`</div></div></section><section><h3 class="text-lg font-medium mb-4">不同形状的进度条</h3><div class="space-y-4"><div><p class="mb-2 text-sm text-gray-500">方形进度条</p>`);
      _push(ssrRenderComponent(unref(vi), {
        value: 40,
        shape: "flat"
      }, null, _parent));
      _push(`</div><div><p class="mb-2 text-sm text-gray-500">圆角进度条</p>`);
      _push(ssrRenderComponent(unref(vi), {
        value: 60,
        shape: "rounded"
      }, null, _parent));
      _push(`</div><div><p class="mb-2 text-sm text-gray-500">胶囊形进度条</p>`);
      _push(ssrRenderComponent(unref(vi), {
        value: 80,
        shape: "pill"
      }, null, _parent));
      _push(`</div></div></section><section><h3 class="text-lg font-medium mb-4">不同状态的进度条</h3><div class="space-y-4"><div><p class="mb-2 text-sm text-gray-500">默认状态</p>`);
      _push(ssrRenderComponent(unref(vi), {
        value: 40,
        variant: "default",
        showText: ""
      }, null, _parent));
      _push(`</div><div><p class="mb-2 text-sm text-gray-500">成功状态</p>`);
      _push(ssrRenderComponent(unref(vi), {
        value: 100,
        variant: "success",
        showText: ""
      }, null, _parent));
      _push(`</div><div><p class="mb-2 text-sm text-gray-500">警告状态</p>`);
      _push(ssrRenderComponent(unref(vi), {
        value: 70,
        variant: "warning",
        showText: ""
      }, null, _parent));
      _push(`</div><div><p class="mb-2 text-sm text-gray-500">危险状态</p>`);
      _push(ssrRenderComponent(unref(vi), {
        value: 20,
        variant: "danger",
        showText: ""
      }, null, _parent));
      _push(`</div><div><p class="mb-2 text-sm text-gray-500">信息状态</p>`);
      _push(ssrRenderComponent(unref(vi), {
        value: 50,
        variant: "info",
        showText: ""
      }, null, _parent));
      _push(`</div></div></section><section><h3 class="text-lg font-medium mb-4">条纹进度条</h3>`);
      _push(ssrRenderComponent(unref(vi), {
        value: 60,
        striped: ""
      }, null, _parent));
      _push(`</section><section><h3 class="text-lg font-medium mb-4">动画进度条</h3>`);
      _push(ssrRenderComponent(unref(vi), {
        value: 60,
        striped: "",
        animated: ""
      }, null, _parent));
      _push(`</section><section><h3 class="text-lg font-medium mb-4">不确定状态进度条</h3>`);
      _push(ssrRenderComponent(unref(vi), { indeterminate: "" }, null, _parent));
      _push(`</section><section><h3 class="text-lg font-medium mb-4">自定义文本</h3>`);
      _push(ssrRenderComponent(unref(vi), {
        value: 75,
        showText: ""
      }, {
        text: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="font-bold"${_scopeId}>${ssrInterpolate(Math.round(75))}分 / 100分</span>`);
          } else {
            return [
              createVNode("span", { class: "font-bold" }, toDisplayString(Math.round(75)) + "分 / 100分", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section><h3 class="text-lg font-medium mb-4">动态进度条</h3><div class="space-y-4">`);
      _push(ssrRenderComponent(unref(vi), {
        value: dynamicValue.value,
        showText: ""
      }, null, _parent));
      _push(`<div class="flex items-center gap-4"><button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"${ssrIncludeBooleanAttr(isProgressing.value) ? " disabled" : ""}> 开始进度 </button><button class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"> 重置 </button></div></div></section><section><h3 class="text-lg font-medium mb-4">无样式模式</h3>`);
      _push(ssrRenderComponent(unref(vi), {
        value: 50,
        unstyled: "",
        pt: {
          root: "w-full",
          container: "w-full h-4 bg-gray-100 rounded-full overflow-hidden",
          bar: "h-full bg-gradient-to-r from-purple-500 to-pink-500",
          text: "text-right text-sm font-medium text-purple-700 mt-1"
        },
        showText: ""
      }, null, _parent));
      _push(`</section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/progress/example/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
