import { defineComponent, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { Q as Mr } from "./index.esm.BIucDlT0.js";
/* empty css             */
const longText = "这是一段较长的提示文本，用于演示文本换行和最大宽度的效果。当文本内容较多时，提示框会自动换行显示。";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-12" }, _attrs))}><section><h2 class="text-lg font-medium mb-4">基础用法</h2><div class="flex items-center space-x-4">`);
      _push(ssrRenderComponent(unref(Mr), { content: "这是一个基础提示" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"${_scopeId}> 悬停查看提示 </div>`);
          } else {
            return [
              createVNode("div", { class: "px-4 py-2 bg-blue-500 text-white rounded cursor-pointer" }, " 悬停查看提示 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">提示位置</h2><div class="grid grid-cols-2 gap-6 max-w-md">`);
      _push(ssrRenderComponent(unref(Mr), {
        content: "顶部提示",
        placement: "top"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer text-center"${_scopeId}> 顶部 </div>`);
          } else {
            return [
              createVNode("div", { class: "px-4 py-2 bg-blue-500 text-white rounded cursor-pointer text-center" }, " 顶部 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Mr), {
        content: "右侧提示",
        placement: "right"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer text-center"${_scopeId}> 右侧 </div>`);
          } else {
            return [
              createVNode("div", { class: "px-4 py-2 bg-blue-500 text-white rounded cursor-pointer text-center" }, " 右侧 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Mr), {
        content: "底部提示",
        placement: "bottom"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer text-center"${_scopeId}> 底部 </div>`);
          } else {
            return [
              createVNode("div", { class: "px-4 py-2 bg-blue-500 text-white rounded cursor-pointer text-center" }, " 底部 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Mr), {
        content: "左侧提示",
        placement: "left"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer text-center"${_scopeId}> 左侧 </div>`);
          } else {
            return [
              createVNode("div", { class: "px-4 py-2 bg-blue-500 text-white rounded cursor-pointer text-center" }, " 左侧 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">提示颜色</h2><div class="flex flex-wrap gap-4">`);
      _push(ssrRenderComponent(unref(Mr), {
        content: "默认提示",
        color: "default"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-4 py-2 bg-gray-500 text-white rounded cursor-pointer"${_scopeId}> 默认 </div>`);
          } else {
            return [
              createVNode("div", { class: "px-4 py-2 bg-gray-500 text-white rounded cursor-pointer" }, " 默认 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Mr), {
        content: "主要提示",
        color: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"${_scopeId}> 主要 </div>`);
          } else {
            return [
              createVNode("div", { class: "px-4 py-2 bg-blue-500 text-white rounded cursor-pointer" }, " 主要 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Mr), {
        content: "成功提示",
        color: "success"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-4 py-2 bg-green-500 text-white rounded cursor-pointer"${_scopeId}> 成功 </div>`);
          } else {
            return [
              createVNode("div", { class: "px-4 py-2 bg-green-500 text-white rounded cursor-pointer" }, " 成功 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Mr), {
        content: "警告提示",
        color: "warning"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-4 py-2 bg-yellow-500 text-white rounded cursor-pointer"${_scopeId}> 警告 </div>`);
          } else {
            return [
              createVNode("div", { class: "px-4 py-2 bg-yellow-500 text-white rounded cursor-pointer" }, " 警告 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Mr), {
        content: "危险提示",
        color: "danger"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-4 py-2 bg-red-500 text-white rounded cursor-pointer"${_scopeId}> 危险 </div>`);
          } else {
            return [
              createVNode("div", { class: "px-4 py-2 bg-red-500 text-white rounded cursor-pointer" }, " 危险 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">触发方式</h2><div class="flex items-center space-x-4">`);
      _push(ssrRenderComponent(unref(Mr), {
        content: "鼠标悬停触发",
        trigger: "hover"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"${_scopeId}> 悬停触发 </div>`);
          } else {
            return [
              createVNode("div", { class: "px-4 py-2 bg-blue-500 text-white rounded cursor-pointer" }, " 悬停触发 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Mr), {
        content: "获取焦点触发",
        trigger: "focus"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-300"${_scopeId}> 焦点触发(点击) </button>`);
          } else {
            return [
              createVNode("button", { class: "px-4 py-2 bg-blue-500 text-white rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-300" }, " 焦点触发(点击) ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Mr), {
        content: "悬停或焦点都可触发",
        trigger: "both"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-300"${_scopeId}> 双重触发 </button>`);
          } else {
            return [
              createVNode("button", { class: "px-4 py-2 bg-blue-500 text-white rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-300" }, " 双重触发 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">显示延迟</h2><div class="flex items-center space-x-4">`);
      _push(ssrRenderComponent(unref(Mr), {
        content: "延迟500毫秒显示",
        openDelay: 500
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"${_scopeId}> 延迟显示 </div>`);
          } else {
            return [
              createVNode("div", { class: "px-4 py-2 bg-blue-500 text-white rounded cursor-pointer" }, " 延迟显示 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Mr), {
        content: "延迟500毫秒隐藏",
        closeDelay: 500
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"${_scopeId}> 延迟隐藏 </div>`);
          } else {
            return [
              createVNode("div", { class: "px-4 py-2 bg-blue-500 text-white rounded cursor-pointer" }, " 延迟隐藏 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">跟随鼠标</h2><div class="flex items-center space-x-4">`);
      _push(ssrRenderComponent(unref(Mr), {
        content: "跟随鼠标移动",
        followCursor: true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"${_scopeId}> 移动鼠标试试 </div>`);
          } else {
            return [
              createVNode("div", { class: "px-4 py-2 bg-blue-500 text-white rounded cursor-pointer" }, " 移动鼠标试试 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">自定义偏移量</h2><div class="flex items-center space-x-4">`);
      _push(ssrRenderComponent(unref(Mr), {
        content: "距离元素20px",
        offset: 20
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"${_scopeId}> 大偏移 </div>`);
          } else {
            return [
              createVNode("div", { class: "px-4 py-2 bg-blue-500 text-white rounded cursor-pointer" }, " 大偏移 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Mr), {
        content: "距离元素4px",
        offset: 4
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"${_scopeId}> 小偏移 </div>`);
          } else {
            return [
              createVNode("div", { class: "px-4 py-2 bg-blue-500 text-white rounded cursor-pointer" }, " 小偏移 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">长文本与最大宽度</h2><div class="flex items-center space-x-4">`);
      _push(ssrRenderComponent(unref(Mr), {
        content: longText,
        maxWidth: 200
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"${_scopeId}> 长文本提示 </div>`);
          } else {
            return [
              createVNode("div", { class: "px-4 py-2 bg-blue-500 text-white rounded cursor-pointer" }, " 长文本提示 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">自定义内容</h2><div class="flex items-center space-x-4">`);
      _push(ssrRenderComponent(unref(Mr), null, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-1"${_scopeId}><div class="font-bold text-yellow-300"${_scopeId}>自定义标题</div><p class="mt-1"${_scopeId}> 这里可以放 <span class="text-red-300"${_scopeId}>任意HTML内容</span></p></div>`);
          } else {
            return [
              createVNode("div", { class: "p-1" }, [
                createVNode("div", { class: "font-bold text-yellow-300" }, "自定义标题"),
                createVNode("p", { class: "mt-1" }, [
                  createTextVNode(" 这里可以放 "),
                  createVNode("span", { class: "text-red-300" }, "任意HTML内容")
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"${_scopeId}> 富文本提示 </div>`);
          } else {
            return [
              createVNode("div", { class: "px-4 py-2 bg-blue-500 text-white rounded cursor-pointer" }, " 富文本提示 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">禁用状态</h2><div class="flex items-center space-x-4">`);
      _push(ssrRenderComponent(unref(Mr), {
        content: "这个提示不会显示",
        disabled: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-4 py-2 bg-gray-400 text-white rounded cursor-not-allowed"${_scopeId}> 禁用提示 </div>`);
          } else {
            return [
              createVNode("div", { class: "px-4 py-2 bg-gray-400 text-white rounded cursor-not-allowed" }, " 禁用提示 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">无箭头样式</h2><div class="flex items-center space-x-4">`);
      _push(ssrRenderComponent(unref(Mr), {
        content: "这个提示没有箭头",
        arrow: false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"${_scopeId}> 无箭头提示 </div>`);
          } else {
            return [
              createVNode("div", { class: "px-4 py-2 bg-blue-500 text-white rounded cursor-pointer" }, " 无箭头提示 ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tooltip/example/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
