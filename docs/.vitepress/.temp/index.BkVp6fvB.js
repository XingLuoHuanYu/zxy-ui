import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { q as qa } from "./index.esm.BIucDlT0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const showBasicDrawer = ref(false);
    const showLeftDrawer = ref(false);
    const showRightDrawer = ref(false);
    const showTopDrawer = ref(false);
    const showBottomDrawer = ref(false);
    const showTitleDrawer = ref(false);
    const showCustomSizeDrawer = ref(false);
    const showCustomDrawer = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="mb-4"><h3 class="text-lg font-medium mb-2">基础用法</h3><button class="px-4 py-2 bg-black text-white rounded cursor-pointer"> 打开基础抽屉 </button>`);
      _push(ssrRenderComponent(unref(qa), {
        modelValue: showBasicDrawer.value,
        "onUpdate:modelValue": ($event) => showBasicDrawer.value = $event,
        onClose: ($event) => console.log("基础抽屉关闭了")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-gray-600"${_scopeId}>这是一个基础抽屉，默认从右侧滑出。</p>`);
          } else {
            return [
              createVNode("p", { class: "text-gray-600" }, "这是一个基础抽屉，默认从右侧滑出。")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-4"><h3 class="text-lg font-medium mb-2">不同位置</h3><div class="flex gap-2 flex-wrap"><button class="px-4 py-2 bg-black text-white rounded cursor-pointer"> 左侧抽屉 </button><button class="px-4 py-2 bg-black text-white rounded cursor-pointer"> 右侧抽屉 </button><button class="px-4 py-2 bg-black text-white rounded cursor-pointer"> 顶部抽屉 </button><button class="px-4 py-2 bg-black text-white rounded cursor-pointer"> 底部抽屉 </button></div>`);
      _push(ssrRenderComponent(unref(qa), {
        modelValue: showLeftDrawer.value,
        "onUpdate:modelValue": ($event) => showLeftDrawer.value = $event,
        placement: "left",
        title: "左侧抽屉"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-gray-600"${_scopeId}>这是一个从左侧滑出的抽屉。</p>`);
          } else {
            return [
              createVNode("p", { class: "text-gray-600" }, "这是一个从左侧滑出的抽屉。")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(qa), {
        modelValue: showRightDrawer.value,
        "onUpdate:modelValue": ($event) => showRightDrawer.value = $event,
        placement: "right",
        title: "右侧抽屉"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-gray-600"${_scopeId}>这是一个从右侧滑出的抽屉。</p>`);
          } else {
            return [
              createVNode("p", { class: "text-gray-600" }, "这是一个从右侧滑出的抽屉。")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(qa), {
        modelValue: showTopDrawer.value,
        "onUpdate:modelValue": ($event) => showTopDrawer.value = $event,
        placement: "top",
        title: "顶部抽屉"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-gray-600"${_scopeId}>这是一个从顶部滑出的抽屉。</p>`);
          } else {
            return [
              createVNode("p", { class: "text-gray-600" }, "这是一个从顶部滑出的抽屉。")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(qa), {
        modelValue: showBottomDrawer.value,
        "onUpdate:modelValue": ($event) => showBottomDrawer.value = $event,
        placement: "bottom",
        title: "底部抽屉"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-gray-600"${_scopeId}>这是一个从底部滑出的抽屉。</p>`);
          } else {
            return [
              createVNode("p", { class: "text-gray-600" }, "这是一个从底部滑出的抽屉。")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-4"><h3 class="text-lg font-medium mb-2">带标题</h3><button class="px-4 py-2 bg-black text-white rounded cursor-pointer"> 打开带标题抽屉 </button>`);
      _push(ssrRenderComponent(unref(qa), {
        modelValue: showTitleDrawer.value,
        "onUpdate:modelValue": ($event) => showTitleDrawer.value = $event,
        title: "这是标题"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-gray-600"${_scopeId}>这是一个带标题的抽屉。</p>`);
          } else {
            return [
              createVNode("p", { class: "text-gray-600" }, "这是一个带标题的抽屉。")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-4"><h3 class="text-lg font-medium mb-2">自定义尺寸</h3><button class="px-4 py-2 bg-black text-white rounded cursor-pointer"> 打开宽抽屉 </button>`);
      _push(ssrRenderComponent(unref(qa), {
        modelValue: showCustomSizeDrawer.value,
        "onUpdate:modelValue": ($event) => showCustomSizeDrawer.value = $event,
        title: "宽抽屉",
        size: "500px"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-gray-600"${_scopeId}>这是一个宽度为 500px 的抽屉。</p>`);
          } else {
            return [
              createVNode("p", { class: "text-gray-600" }, "这是一个宽度为 500px 的抽屉。")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-4"><h3 class="text-lg font-medium mb-2">自定义头部和底部</h3><button class="px-4 py-2 bg-black text-white rounded cursor-pointer"> 打开自定义抽屉 </button>`);
      _push(ssrRenderComponent(unref(qa), {
        modelValue: showCustomDrawer.value,
        "onUpdate:modelValue": ($event) => showCustomDrawer.value = $event
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center"${_scopeId}><div class="w-3 h-3 rounded-full bg-green-500 mr-2"${_scopeId}></div><h3 class="text-lg font-medium"${_scopeId}>自定义头部</h3></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center" }, [
                createVNode("div", { class: "w-3 h-3 rounded-full bg-green-500 mr-2" }),
                createVNode("h3", { class: "text-lg font-medium" }, "自定义头部")
              ])
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-end gap-2"${_scopeId}><button class="px-3 py-1 border border-gray-300 rounded"${_scopeId}> 取消 </button><button class="px-3 py-1 bg-blue-500 text-white rounded"${_scopeId}> 确认 </button></div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-end gap-2" }, [
                createVNode("button", {
                  onClick: ($event) => showCustomDrawer.value = false,
                  class: "px-3 py-1 border border-gray-300 rounded"
                }, " 取消 ", 8, ["onClick"]),
                createVNode("button", {
                  onClick: ($event) => showCustomDrawer.value = false,
                  class: "px-3 py-1 bg-blue-500 text-white rounded"
                }, " 确认 ", 8, ["onClick"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-gray-600"${_scopeId}>这是一个带自定义头部和底部的抽屉。</p>`);
          } else {
            return [
              createVNode("p", { class: "text-gray-600" }, "这是一个带自定义头部和底部的抽屉。")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/drawer/example/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
