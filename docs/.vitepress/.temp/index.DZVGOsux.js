import { ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { W as Wu } from "./index.esm.BIucDlT0.js";
/* empty css             */
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const isActive = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-4 text-sm" }, _attrs))}><section><h4 class="text-sm font-medium mb-2">变体效果</h4><div class="flex flex-wrap items-start gap-4"><div class="flex flex-col items-center gap-1"><span class="text-xs text-gray-500 dark:text-gray-400">基础用法</span>`);
      _push(ssrRenderComponent(unref(Wu), {
        active: isActive.value,
        "onUpdate:active": ($event) => isActive.value = $event
      }, {
        on: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-primary-500 text-white rounded px-2 py-1 text-xs"${_scopeId}> 开启 </div>`);
          } else {
            return [
              createVNode("div", { class: "bg-primary-500 text-white rounded px-2 py-1 text-xs" }, " 开启 ")
            ];
          }
        }),
        off: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded px-2 py-1 text-xs"${_scopeId}> 关闭 </div>`);
          } else {
            return [
              createVNode("div", { class: "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded px-2 py-1 text-xs" }, " 关闭 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-col items-center gap-1"><span class="text-xs text-gray-500 dark:text-gray-400">淡入淡出</span>`);
      _push(ssrRenderComponent(unref(Wu), {
        variant: "fade",
        active: isActive.value,
        "onUpdate:active": ($event) => isActive.value = $event
      }, {
        on: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-primary-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"${_scopeId}> ✓ </div>`);
          } else {
            return [
              createVNode("div", { class: "bg-primary-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs" }, " ✓ ")
            ];
          }
        }),
        off: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-xs"${_scopeId}> ✗ </div>`);
          } else {
            return [
              createVNode("div", { class: "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-xs" }, " ✗ ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-col items-center gap-1"><span class="text-xs text-gray-500 dark:text-gray-400">翻转</span>`);
      _push(ssrRenderComponent(unref(Wu), {
        variant: "flip",
        active: isActive.value,
        "onUpdate:active": ($event) => isActive.value = $event
      }, {
        on: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-primary-500 text-white rounded w-6 h-6 flex items-center justify-center text-xs"${_scopeId}> A </div>`);
          } else {
            return [
              createVNode("div", { class: "bg-primary-500 text-white rounded w-6 h-6 flex items-center justify-center text-xs" }, " A ")
            ];
          }
        }),
        off: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded w-6 h-6 flex items-center justify-center text-xs"${_scopeId}> B </div>`);
          } else {
            return [
              createVNode("div", { class: "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded w-6 h-6 flex items-center justify-center text-xs" }, " B ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-col items-center gap-1"><span class="text-xs text-gray-500 dark:text-gray-400">旋转</span>`);
      _push(ssrRenderComponent(unref(Wu), {
        variant: "rotate",
        active: isActive.value,
        "onUpdate:active": ($event) => isActive.value = $event
      }, {
        on: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-primary-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"${_scopeId}> + </div>`);
          } else {
            return [
              createVNode("div", { class: "bg-primary-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs" }, " + ")
            ];
          }
        }),
        off: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-xs"${_scopeId}> - </div>`);
          } else {
            return [
              createVNode("div", { class: "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-xs" }, " - ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-col items-center gap-1"><span class="text-xs text-gray-500 dark:text-gray-400">滑动</span>`);
      _push(ssrRenderComponent(unref(Wu), {
        variant: "slide",
        active: isActive.value,
        "onUpdate:active": ($event) => isActive.value = $event
      }, {
        on: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-primary-500 text-white rounded px-2 py-1 text-xs"${_scopeId}> 上 </div>`);
          } else {
            return [
              createVNode("div", { class: "bg-primary-500 text-white rounded px-2 py-1 text-xs" }, " 上 ")
            ];
          }
        }),
        off: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded px-2 py-1 text-xs"${_scopeId}> 下 </div>`);
          } else {
            return [
              createVNode("div", { class: "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded px-2 py-1 text-xs" }, " 下 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="border-t pt-2"><h4 class="text-sm font-medium mb-2">尺寸</h4><div class="flex flex-wrap items-end gap-4"><div class="flex flex-col items-center gap-1"><span class="text-xs text-gray-500 dark:text-gray-400">小</span>`);
      _push(ssrRenderComponent(unref(Wu), {
        size: "sm",
        active: isActive.value,
        "onUpdate:active": ($event) => isActive.value = $event
      }, {
        on: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-primary-500 text-white rounded flex items-center justify-center w-4 h-4 text-xs"${_scopeId}> S </div>`);
          } else {
            return [
              createVNode("div", { class: "bg-primary-500 text-white rounded flex items-center justify-center w-4 h-4 text-xs" }, " S ")
            ];
          }
        }),
        off: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded flex items-center justify-center w-4 h-4 text-xs"${_scopeId}> S </div>`);
          } else {
            return [
              createVNode("div", { class: "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded flex items-center justify-center w-4 h-4 text-xs" }, " S ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-col items-center gap-1"><span class="text-xs text-gray-500 dark:text-gray-400">中</span>`);
      _push(ssrRenderComponent(unref(Wu), {
        size: "md",
        active: isActive.value,
        "onUpdate:active": ($event) => isActive.value = $event
      }, {
        on: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-primary-500 text-white rounded flex items-center justify-center w-6 h-6 text-xs"${_scopeId}> M </div>`);
          } else {
            return [
              createVNode("div", { class: "bg-primary-500 text-white rounded flex items-center justify-center w-6 h-6 text-xs" }, " M ")
            ];
          }
        }),
        off: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded flex items-center justify-center w-6 h-6 text-xs"${_scopeId}> M </div>`);
          } else {
            return [
              createVNode("div", { class: "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded flex items-center justify-center w-6 h-6 text-xs" }, " M ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-col items-center gap-1"><span class="text-xs text-gray-500 dark:text-gray-400">大</span>`);
      _push(ssrRenderComponent(unref(Wu), {
        size: "lg",
        active: isActive.value,
        "onUpdate:active": ($event) => isActive.value = $event
      }, {
        on: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-primary-500 text-white rounded flex items-center justify-center w-8 h-8 text-xs"${_scopeId}> L </div>`);
          } else {
            return [
              createVNode("div", { class: "bg-primary-500 text-white rounded flex items-center justify-center w-8 h-8 text-xs" }, " L ")
            ];
          }
        }),
        off: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded flex items-center justify-center w-8 h-8 text-xs"${_scopeId}> L </div>`);
          } else {
            return [
              createVNode("div", { class: "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded flex items-center justify-center w-8 h-8 text-xs" }, " L ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="border-t pt-2"><h4 class="text-sm font-medium mb-2">触发方式</h4><div class="flex flex-wrap items-center gap-4"><div class="flex flex-col items-center gap-1"><span class="text-xs text-gray-500 dark:text-gray-400">点击</span>`);
      _push(ssrRenderComponent(unref(Wu), {
        trigger: "click",
        active: isActive.value,
        "onUpdate:active": ($event) => isActive.value = $event
      }, {
        on: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-primary-500 text-white rounded px-2 py-1 text-xs"${_scopeId}> 点击状态 </div>`);
          } else {
            return [
              createVNode("div", { class: "bg-primary-500 text-white rounded px-2 py-1 text-xs" }, " 点击状态 ")
            ];
          }
        }),
        off: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded px-2 py-1 text-xs"${_scopeId}> 点击切换 </div>`);
          } else {
            return [
              createVNode("div", { class: "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded px-2 py-1 text-xs" }, " 点击切换 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-col items-center gap-1"><span class="text-xs text-gray-500 dark:text-gray-400">悬停</span>`);
      _push(ssrRenderComponent(unref(Wu), {
        trigger: "hover",
        active: isActive.value,
        "onUpdate:active": ($event) => isActive.value = $event
      }, {
        on: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-primary-500 text-white rounded px-2 py-1 text-xs"${_scopeId}> 悬停状态 </div>`);
          } else {
            return [
              createVNode("div", { class: "bg-primary-500 text-white rounded px-2 py-1 text-xs" }, " 悬停状态 ")
            ];
          }
        }),
        off: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded px-2 py-1 text-xs"${_scopeId}> 悬停切换 </div>`);
          } else {
            return [
              createVNode("div", { class: "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded px-2 py-1 text-xs" }, " 悬停切换 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-col items-center gap-1"><span class="text-xs text-gray-500 dark:text-gray-400">聚焦</span>`);
      _push(ssrRenderComponent(unref(Wu), {
        trigger: "focus",
        active: isActive.value,
        "onUpdate:active": ($event) => isActive.value = $event
      }, {
        on: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-primary-500 text-white rounded px-2 py-1 text-xs"${_scopeId}> 聚焦状态 </div>`);
          } else {
            return [
              createVNode("div", { class: "bg-primary-500 text-white rounded px-2 py-1 text-xs" }, " 聚焦状态 ")
            ];
          }
        }),
        off: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded px-2 py-1 text-xs"${_scopeId}> 点击聚焦 </div>`);
          } else {
            return [
              createVNode("div", { class: "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded px-2 py-1 text-xs" }, " 点击聚焦 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="border-t pt-2"><h4 class="text-sm font-medium mb-2">外部控制</h4><div class="flex flex-wrap items-center gap-2">`);
      _push(ssrRenderComponent(unref(Wu), {
        active: isActive.value,
        "onUpdate:active": ($event) => isActive.value = $event
      }, {
        on: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-primary-500 text-white rounded px-2 py-1 text-xs"${_scopeId}> 开启状态 </div>`);
          } else {
            return [
              createVNode("div", { class: "bg-primary-500 text-white rounded px-2 py-1 text-xs" }, " 开启状态 ")
            ];
          }
        }),
        off: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded px-2 py-1 text-xs"${_scopeId}> 关闭状态 </div>`);
          } else {
            return [
              createVNode("div", { class: "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded px-2 py-1 text-xs" }, " 关闭状态 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="px-2 py-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded text-xs">${ssrInterpolate(isActive.value ? "切换为关闭" : "切换为开启")}</button></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/swap/example/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
