import { defineComponent, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { Z as Zs } from "./index.esm.BIucDlT0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8" }, _attrs))}><section><h3 class="text-lg font-medium mb-4">基础面板</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-4">`);
      _push(ssrRenderComponent(unref(Zs), { title: "基础面板" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>这是一个基础面板的内容区域。</p>`);
          } else {
            return [
              createVNode("p", null, "这是一个基础面板的内容区域。")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Zs), {
        title: "带边框面板",
        variant: "bordered"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>这是一个带边框面板的内容区域。</p>`);
          } else {
            return [
              createVNode("p", null, "这是一个带边框面板的内容区域。")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h3 class="text-lg font-medium mb-4">面板变体</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(unref(Zs), {
        title: "默认面板",
        variant: "default"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>这是默认样式的面板。</p>`);
          } else {
            return [
              createVNode("p", null, "这是默认样式的面板。")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Zs), {
        title: "带边框面板",
        variant: "bordered"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>这是带边框的面板。</p>`);
          } else {
            return [
              createVNode("p", null, "这是带边框的面板。")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Zs), {
        title: "阴影面板",
        variant: "elevated"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>这是带阴影的面板。</p>`);
          } else {
            return [
              createVNode("p", null, "这是带阴影的面板。")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h3 class="text-lg font-medium mb-4">可折叠面板</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-4">`);
      _push(ssrRenderComponent(unref(Zs), {
        title: "可折叠面板",
        collapsible: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>点击面板头部可以折叠/展开此内容。</p><p class="mt-2"${_scopeId}>这是可折叠面板的更多内容。</p>`);
          } else {
            return [
              createVNode("p", null, "点击面板头部可以折叠/展开此内容。"),
              createVNode("p", { class: "mt-2" }, "这是可折叠面板的更多内容。")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Zs), {
        title: "默认折叠面板",
        collapsible: "",
        defaultCollapsed: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>这个面板默认是折叠的，点击面板头部可以展开。</p><p class="mt-2"${_scopeId}>这是默认折叠面板的更多内容。</p>`);
          } else {
            return [
              createVNode("p", null, "这个面板默认是折叠的，点击面板头部可以展开。"),
              createVNode("p", { class: "mt-2" }, "这是默认折叠面板的更多内容。")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h3 class="text-lg font-medium mb-4">不同内边距</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><p class="mb-2 text-sm text-gray-500">无内边距</p>`);
      _push(ssrRenderComponent(unref(Zs), {
        title: "无内边距",
        padding: "none",
        variant: "bordered"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>这是无内边距的面板内容。</p>`);
          } else {
            return [
              createVNode("p", null, "这是无内边距的面板内容。")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div><p class="mb-2 text-sm text-gray-500">大内边距</p>`);
      _push(ssrRenderComponent(unref(Zs), {
        title: "大内边距",
        padding: "lg",
        variant: "bordered"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>这是大内边距的面板内容。</p>`);
          } else {
            return [
              createVNode("p", null, "这是大内边距的面板内容。")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section><h3 class="text-lg font-medium mb-4">自定义标题和图标</h3>`);
      _push(ssrRenderComponent(unref(Zs), { collapsible: "" }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-2"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"${_scopeId}></path><polyline points="14 2 14 8 20 8"${_scopeId}></polyline><line x1="16" y1="13" x2="8" y2="13"${_scopeId}></line><line x1="16" y1="17" x2="8" y2="17"${_scopeId}></line><polyline points="10 9 9 9 8 9"${_scopeId}></polyline></svg><span class="text-blue-600 font-bold"${_scopeId}>自定义标题</span></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-2" }, [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "16",
                  height: "16",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, [
                  createVNode("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
                  createVNode("polyline", { points: "14 2 14 8 20 8" }),
                  createVNode("line", {
                    x1: "16",
                    y1: "13",
                    x2: "8",
                    y2: "13"
                  }),
                  createVNode("line", {
                    x1: "16",
                    y1: "17",
                    x2: "8",
                    y2: "17"
                  }),
                  createVNode("polyline", { points: "10 9 9 9 8 9" })
                ])),
                createVNode("span", { class: "text-blue-600 font-bold" }, "自定义标题")
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>这个面板使用了自定义标题插槽。</p>`);
          } else {
            return [
              createVNode("p", null, "这个面板使用了自定义标题插槽。")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/panel/example/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
