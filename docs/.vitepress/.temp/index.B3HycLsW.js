import { defineComponent, mergeProps, unref, withCtx, createTextVNode, openBlock, createBlock, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { n as nd } from "./index.esm.BIucDlT0.js";
/* empty css             */
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8" }, _attrs))}><section><h2 class="text-lg font-medium mb-4">基础用法</h2><div class="flex flex-wrap gap-6">`);
      _push(ssrRenderComponent(unref(nd), { href: "https://example.com" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`默认链接`);
          } else {
            return [
              createTextVNode("默认链接")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(nd), {
        href: "https://example.com",
        variant: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`主要链接`);
          } else {
            return [
              createTextVNode("主要链接")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(nd), {
        href: "https://example.com",
        variant: "secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`次要链接`);
          } else {
            return [
              createTextVNode("次要链接")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(nd), {
        href: "https://example.com",
        variant: "success"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`成功链接`);
          } else {
            return [
              createTextVNode("成功链接")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(nd), {
        href: "https://example.com",
        variant: "danger"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`危险链接`);
          } else {
            return [
              createTextVNode("危险链接")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(nd), {
        href: "https://example.com",
        variant: "warning"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`警告链接`);
          } else {
            return [
              createTextVNode("警告链接")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(nd), {
        href: "https://example.com",
        variant: "info"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`信息链接`);
          } else {
            return [
              createTextVNode("信息链接")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">不同尺寸</h2><div class="flex items-center gap-6">`);
      _push(ssrRenderComponent(unref(nd), {
        href: "https://example.com",
        size: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`小尺寸链接`);
          } else {
            return [
              createTextVNode("小尺寸链接")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(nd), {
        href: "https://example.com",
        size: "md"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`中等尺寸链接`);
          } else {
            return [
              createTextVNode("中等尺寸链接")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(nd), {
        href: "https://example.com",
        size: "lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`大尺寸链接`);
          } else {
            return [
              createTextVNode("大尺寸链接")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">带下划线</h2><div class="flex gap-6">`);
      _push(ssrRenderComponent(unref(nd), {
        href: "https://example.com",
        underline: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`默认下划线链接`);
          } else {
            return [
              createTextVNode("默认下划线链接")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(nd), {
        href: "https://example.com",
        variant: "primary",
        underline: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 主要下划线链接 `);
          } else {
            return [
              createTextVNode(" 主要下划线链接 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">外部链接</h2><div class="flex gap-6">`);
      _push(ssrRenderComponent(unref(nd), {
        href: "https://example.com",
        external: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 外部链接（自动添加图标） `);
          } else {
            return [
              createTextVNode(" 外部链接（自动添加图标） ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(nd), {
        href: "https://example.com",
        external: "",
        variant: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 外部主要链接 `);
          } else {
            return [
              createTextVNode(" 外部主要链接 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">禁用状态</h2><div class="flex gap-6">`);
      _push(ssrRenderComponent(unref(nd), {
        href: "https://example.com",
        disabled: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`禁用链接`);
          } else {
            return [
              createTextVNode("禁用链接")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(nd), {
        href: "https://example.com",
        variant: "primary",
        disabled: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 禁用主要链接 `);
          } else {
            return [
              createTextVNode(" 禁用主要链接 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">带图标</h2><div class="flex flex-col gap-4"><div>`);
      _push(ssrRenderComponent(unref(nd), {
        href: "https://example.com",
        iconPosition: "left"
      }, {
        "icon-left": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="M15 18l-6-6 6-6"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }, [
                createVNode("path", { d: "M15 18l-6-6 6-6" })
              ]))
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 左侧图标 `);
          } else {
            return [
              createTextVNode(" 左侧图标 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(unref(nd), {
        href: "https://example.com",
        variant: "primary",
        iconPosition: "right"
      }, {
        "icon-right": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="M9 18l6-6-6-6"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }, [
                createVNode("path", { d: "M9 18l6-6-6-6" })
              ]))
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 右侧图标 `);
          } else {
            return [
              createTextVNode(" 右侧图标 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section><h2 class="text-lg font-medium mb-4">自定义样式</h2><div class="flex gap-6">`);
      _push(ssrRenderComponent(unref(nd), {
        href: "https://example.com",
        pt: {
          root: "text-purple-500 hover:text-purple-700 font-bold"
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 自定义颜色和字重 `);
          } else {
            return [
              createTextVNode(" 自定义颜色和字重 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(nd), {
        href: "https://example.com",
        unstyled: "",
        pt: {
          root: "bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full hover:shadow-lg transition-shadow"
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 完全自定义样式 `);
          } else {
            return [
              createTextVNode(" 完全自定义样式 ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/link/example/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
