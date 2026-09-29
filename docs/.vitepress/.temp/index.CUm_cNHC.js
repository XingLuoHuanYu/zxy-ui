import { defineComponent, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { U as Ur } from "./index.esm.BIucDlT0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-8" }, _attrs))}><section><h2 class="text-lg font-medium mb-4">基本用法</h2><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Ur), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Ctrl`);
          } else {
            return [
              createTextVNode("Ctrl")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span>+</span>`);
      _push(ssrRenderComponent(unref(Ur), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`C`);
          } else {
            return [
              createTextVNode("C")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">不同尺寸</h2><div class="flex items-center gap-4">`);
      _push(ssrRenderComponent(unref(Ur), { size: "xs" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`A`);
          } else {
            return [
              createTextVNode("A")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ur), { size: "sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`B`);
          } else {
            return [
              createTextVNode("B")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ur), { size: "md" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`C`);
          } else {
            return [
              createTextVNode("C")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ur), { size: "lg" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`D`);
          } else {
            return [
              createTextVNode("D")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">常用组合</h2><div class="flex flex-col gap-4"><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Ur), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Ctrl`);
          } else {
            return [
              createTextVNode("Ctrl")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span>+</span>`);
      _push(ssrRenderComponent(unref(Ur), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Shift`);
          } else {
            return [
              createTextVNode("Shift")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span>+</span>`);
      _push(ssrRenderComponent(unref(Ur), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`F`);
          } else {
            return [
              createTextVNode("F")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Ur), { size: "sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Alt`);
          } else {
            return [
              createTextVNode("Alt")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span>+</span>`);
      _push(ssrRenderComponent(unref(Ur), { size: "sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Tab`);
          } else {
            return [
              createTextVNode("Tab")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Ur), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Esc`);
          } else {
            return [
              createTextVNode("Esc")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="text-sm text-gray-500">退出</span></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/kbd/example/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
