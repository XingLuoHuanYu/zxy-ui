import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { e as kr } from "./index.esm.BIucDlT0.js";
/* empty css             */
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const isBasicOpen = ref(false);
    const isManualOpen = ref(false);
    const toggleManual = () => {
      isManualOpen.value = !isManualOpen.value;
    };
    const isWithTitleOpen = ref(false);
    const isCustomWidthOpen = ref(false);
    const isDisabledOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-12" }, _attrs))}><section><h2 class="text-lg font-medium mb-4">基础用法</h2><div class="flex items-center space-x-4">`);
      _push(ssrRenderComponent(unref(kr), {
        modelValue: isBasicOpen.value,
        "onUpdate:modelValue": ($event) => isBasicOpen.value = $event
      }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"${_scopeId}> 点击显示弹出框 </div>`);
          } else {
            return [
              createVNode("div", { class: "px-4 py-2 bg-blue-500 text-white rounded cursor-pointer" }, " 点击显示弹出框 ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 这是一个基础的弹出框内容 `);
          } else {
            return [
              createTextVNode(" 这是一个基础的弹出框内容 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">不同位置</h2><div class="flex justify-center items-center space-x-8 mb-6">`);
      _push(ssrRenderComponent(unref(kr), { placement: "top" }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"${_scopeId}> 顶部 </div>`);
          } else {
            return [
              createVNode("div", { class: "px-4 py-2 bg-blue-500 text-white rounded cursor-pointer" }, " 顶部 ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 弹出位置: 顶部 (top) `);
          } else {
            return [
              createTextVNode(" 弹出位置: 顶部 (top) ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(kr), { placement: "right" }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"${_scopeId}> 右侧 </div>`);
          } else {
            return [
              createVNode("div", { class: "px-4 py-2 bg-blue-500 text-white rounded cursor-pointer" }, " 右侧 ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 弹出位置: 右侧 (right) `);
          } else {
            return [
              createTextVNode(" 弹出位置: 右侧 (right) ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(kr), { placement: "bottom" }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"${_scopeId}> 底部 </div>`);
          } else {
            return [
              createVNode("div", { class: "px-4 py-2 bg-blue-500 text-white rounded cursor-pointer" }, " 底部 ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 弹出位置: 底部 (bottom) `);
          } else {
            return [
              createTextVNode(" 弹出位置: 底部 (bottom) ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(kr), { placement: "left" }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"${_scopeId}> 左侧 </div>`);
          } else {
            return [
              createVNode("div", { class: "px-4 py-2 bg-blue-500 text-white rounded cursor-pointer" }, " 左侧 ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 弹出位置: 左侧 (left) `);
          } else {
            return [
              createTextVNode(" 弹出位置: 左侧 (left) ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">不同触发方式</h2><div class="flex items-center space-x-4">`);
      _push(ssrRenderComponent(unref(kr), { trigger: "click" }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"${_scopeId}> 点击触发 </div>`);
          } else {
            return [
              createVNode("div", { class: "px-4 py-2 bg-blue-500 text-white rounded cursor-pointer" }, " 点击触发 ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 点击触发的弹出框 `);
          } else {
            return [
              createTextVNode(" 点击触发的弹出框 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(kr), { trigger: "hover" }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"${_scopeId}> 悬停触发 </div>`);
          } else {
            return [
              createVNode("div", { class: "px-4 py-2 bg-blue-500 text-white rounded cursor-pointer" }, " 悬停触发 ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 悬停触发的弹出框 `);
          } else {
            return [
              createTextVNode(" 悬停触发的弹出框 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(kr), {
        modelValue: isManualOpen.value,
        "onUpdate:modelValue": ($event) => isManualOpen.value = $event,
        trigger: "manual"
      }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"${_scopeId}> 手动触发 </div>`);
          } else {
            return [
              createVNode("div", {
                class: "px-4 py-2 bg-blue-500 text-white rounded cursor-pointer",
                onClick: toggleManual
              }, " 手动触发 ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 手动控制的弹出框 `);
          } else {
            return [
              createTextVNode(" 手动控制的弹出框 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">带标题</h2><div class="flex items-center space-x-4">`);
      _push(ssrRenderComponent(unref(kr), {
        modelValue: isWithTitleOpen.value,
        "onUpdate:modelValue": ($event) => isWithTitleOpen.value = $event,
        title: "弹出框标题"
      }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"${_scopeId}> 带标题的弹出框 </div>`);
          } else {
            return [
              createVNode("div", { class: "px-4 py-2 bg-blue-500 text-white rounded cursor-pointer" }, " 带标题的弹出框 ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 这是带有标题的弹出框内容 `);
          } else {
            return [
              createTextVNode(" 这是带有标题的弹出框内容 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">自定义宽度</h2><div class="flex items-center space-x-4">`);
      _push(ssrRenderComponent(unref(kr), {
        modelValue: isCustomWidthOpen.value,
        "onUpdate:modelValue": ($event) => isCustomWidthOpen.value = $event,
        width: 300
      }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"${_scopeId}> 自定义宽度 </div>`);
          } else {
            return [
              createVNode("div", { class: "px-4 py-2 bg-blue-500 text-white rounded cursor-pointer" }, " 自定义宽度 ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 这是一个宽度为300px的弹出框，可以显示更多的内容。你可以根据需要自定义弹出框的宽度，以适应不同的内容展示需求。 `);
          } else {
            return [
              createTextVNode(" 这是一个宽度为300px的弹出框，可以显示更多的内容。你可以根据需要自定义弹出框的宽度，以适应不同的内容展示需求。 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">禁用状态</h2><div class="flex items-center space-x-4">`);
      _push(ssrRenderComponent(unref(kr), {
        modelValue: isDisabledOpen.value,
        "onUpdate:modelValue": ($event) => isDisabledOpen.value = $event,
        disabled: ""
      }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-4 py-2 bg-gray-400 text-white rounded cursor-not-allowed"${_scopeId}> 禁用状态 </div>`);
          } else {
            return [
              createVNode("div", { class: "px-4 py-2 bg-gray-400 text-white rounded cursor-not-allowed" }, " 禁用状态 ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 这个弹出框被禁用了，无法显示 `);
          } else {
            return [
              createTextVNode(" 这个弹出框被禁用了，无法显示 ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/popover/example/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
