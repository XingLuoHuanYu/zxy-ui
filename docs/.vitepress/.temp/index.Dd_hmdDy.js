import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { d as ka } from "./index.esm.BIucDlT0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const showBasicModal = ref(false);
    const showTitleModal = ref(false);
    const showSmallModal = ref(false);
    const showLargeModal = ref(false);
    const showCustomModal = ref(false);
    const showNoOverlayCloseModal = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-4" }, _attrs))}><div class="mb-4"><h3 class="text-lg font-medium mb-2">基础用法</h3><button class="px-4 py-2 bg-black text-white rounded cursor-pointer"> 打开基础模态框 </button>`);
      _push(ssrRenderComponent(unref(ka), {
        modelValue: showBasicModal.value,
        "onUpdate:modelValue": ($event) => showBasicModal.value = $event,
        onClose: ($event) => console.log("基础模态框关闭了")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-gray-600"${_scopeId}>这是一个基础模态框，没有标题和底部。</p>`);
          } else {
            return [
              createVNode("p", { class: "text-gray-600" }, "这是一个基础模态框，没有标题和底部。")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-4"><h3 class="text-lg font-medium mb-2">带标题</h3><button class="px-4 py-2 bg-black text-white rounded cursor-pointer"> 打开带标题模态框 </button>`);
      _push(ssrRenderComponent(unref(ka), {
        modelValue: showTitleModal.value,
        "onUpdate:modelValue": ($event) => showTitleModal.value = $event,
        title: "这是标题",
        onClose: ($event) => console.log("带标题模态框关闭了")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-gray-600"${_scopeId}>这是一个带标题的模态框。</p>`);
          } else {
            return [
              createVNode("p", { class: "text-gray-600" }, "这是一个带标题的模态框。")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-4"><h3 class="text-lg font-medium mb-2">不同尺寸</h3><div class="flex gap-2"><button class="px-4 py-2 bg-black text-white rounded cursor-pointer"> 小尺寸 </button><button class="px-4 py-2 bg-black text-white rounded cursor-pointer"> 大尺寸 </button></div>`);
      _push(ssrRenderComponent(unref(ka), {
        modelValue: showSmallModal.value,
        "onUpdate:modelValue": ($event) => showSmallModal.value = $event,
        title: "小尺寸模态框",
        size: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-gray-600"${_scopeId}>这是一个小尺寸的模态框。</p>`);
          } else {
            return [
              createVNode("p", { class: "text-gray-600" }, "这是一个小尺寸的模态框。")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(ka), {
        modelValue: showLargeModal.value,
        "onUpdate:modelValue": ($event) => showLargeModal.value = $event,
        title: "大尺寸模态框",
        size: "2xl"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-gray-600"${_scopeId}>这是一个大尺寸的模态框。</p>`);
          } else {
            return [
              createVNode("p", { class: "text-gray-600" }, "这是一个大尺寸的模态框。")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-4"><h3 class="text-lg font-medium mb-2">自定义头部和底部</h3><button class="px-4 py-2 bg-black text-white rounded cursor-pointer"> 打开自定义模态框 </button>`);
      _push(ssrRenderComponent(unref(ka), {
        modelValue: showCustomModal.value,
        "onUpdate:modelValue": ($event) => showCustomModal.value = $event
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
                  onClick: ($event) => showCustomModal.value = false,
                  class: "px-3 py-1 border border-gray-300 rounded"
                }, " 取消 ", 8, ["onClick"]),
                createVNode("button", {
                  onClick: ($event) => showCustomModal.value = false,
                  class: "px-3 py-1 bg-blue-500 text-white rounded"
                }, " 确认 ", 8, ["onClick"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-gray-600"${_scopeId}>这是一个带自定义头部和底部的模态框。</p>`);
          } else {
            return [
              createVNode("p", { class: "text-gray-600" }, "这是一个带自定义头部和底部的模态框。")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-4"><h3 class="text-lg font-medium mb-2">禁用点击遮罩层关闭</h3><button class="px-4 py-2 bg-black text-white rounded cursor-pointer"> 打开模态框 </button>`);
      _push(ssrRenderComponent(unref(ka), {
        modelValue: showNoOverlayCloseModal.value,
        "onUpdate:modelValue": ($event) => showNoOverlayCloseModal.value = $event,
        title: "禁用点击遮罩层关闭",
        closeOnOverlayClick: false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-gray-600"${_scopeId}> 点击遮罩层不会关闭此模态框，只能点击右上角的关闭按钮或按 ESC 键关闭。 </p><div class="mt-4 flex justify-end"${_scopeId}><button class="px-3 py-1 bg-blue-500 text-white rounded"${_scopeId}> 关闭 </button></div>`);
          } else {
            return [
              createVNode("p", { class: "text-gray-600" }, " 点击遮罩层不会关闭此模态框，只能点击右上角的关闭按钮或按 ESC 键关闭。 "),
              createVNode("div", { class: "mt-4 flex justify-end" }, [
                createVNode("button", {
                  onClick: ($event) => showNoOverlayCloseModal.value = false,
                  class: "px-3 py-1 bg-blue-500 text-white rounded"
                }, " 关闭 ", 8, ["onClick"])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modal/example/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
