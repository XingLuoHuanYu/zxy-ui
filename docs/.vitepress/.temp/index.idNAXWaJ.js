import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import "./index.esm.BIucDlT0.js";
/* empty css             */
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8" }, _attrs))}><section class="space-y-3"><h3 class="text-lg font-medium">基础类型</h3><div class="flex flex-wrap gap-3"><button class="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"> Success </button><button class="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"> Error </button><button class="rounded bg-amber-500 px-4 py-2 text-white hover:bg-amber-600"> Warning </button><button class="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"> Info </button></div></section><section class="space-y-3"><h3 class="text-lg font-medium">位置与时长</h3><div class="flex flex-wrap gap-3"><button class="rounded bg-zinc-700 px-4 py-2 text-white hover:bg-zinc-800"> 底部居中 </button><button class="rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"> 8 秒自动关闭 </button></div></section><section class="space-y-3"><h3 class="text-lg font-medium">控制</h3><div class="flex flex-wrap gap-3"><button class="rounded bg-slate-600 px-4 py-2 text-white hover:bg-slate-700"> 清空全部提示 </button></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/toast/example/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
