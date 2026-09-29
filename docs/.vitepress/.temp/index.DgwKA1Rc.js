import { defineComponent, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { D as Da } from "./index.esm.BIucDlT0.js";
/* empty css             */
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8" }, _attrs))}><section><h2 class="text-lg font-medium mb-4">基础用法</h2><div class="flex gap-6">`);
      _push(ssrRenderComponent(unref(Da), { content: "5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Da), { content: "99+" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Da), { dot: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">不同颜色</h2><div class="flex gap-6">`);
      _push(ssrRenderComponent(unref(Da), {
        content: "5",
        color: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Da), {
        content: "5",
        color: "secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Da), {
        content: "5",
        color: "success"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Da), {
        content: "5",
        color: "warning"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Da), {
        content: "5",
        color: "danger"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Da), {
        content: "5",
        color: "info"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">不同大小</h2><div class="flex gap-6 items-center">`);
      _push(ssrRenderComponent(unref(Da), {
        content: "5",
        size: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Da), {
        content: "5",
        size: "md"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Da), {
        content: "5",
        size: "lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">不同位置</h2><div class="flex gap-6">`);
      _push(ssrRenderComponent(unref(Da), {
        content: "5",
        position: "top-right"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Da), {
        content: "5",
        position: "top-left"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Da), {
        content: "5",
        position: "bottom-right"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Da), {
        content: "5",
        position: "bottom-left"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">最大值</h2><div class="flex gap-6">`);
      _push(ssrRenderComponent(unref(Da), {
        content: 100,
        max: 99
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Da), {
        content: 1e3,
        max: 999
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">自定义内容</h2><div class="flex gap-6">`);
      _push(ssrRenderComponent(unref(Da), { content: "新" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Da), { content: "热" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/badge/example/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
