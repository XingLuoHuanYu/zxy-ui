import { defineComponent, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { l as lo } from "./index.esm.BIucDlT0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8" }, _attrs))}><section><h3 class="text-lg font-medium mb-4">变体样式</h3><div class="flex flex-wrap gap-4">`);
      _push(ssrRenderComponent(unref(lo), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`默认按钮`);
          } else {
            return [
              createTextVNode("默认按钮")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(lo), { variant: "secondary" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`次要按钮`);
          } else {
            return [
              createTextVNode("次要按钮")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(lo), { variant: "success" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`成功按钮`);
          } else {
            return [
              createTextVNode("成功按钮")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(lo), { variant: "warning" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`警告按钮`);
          } else {
            return [
              createTextVNode("警告按钮")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(lo), { variant: "info" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`信息按钮`);
          } else {
            return [
              createTextVNode("信息按钮")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(lo), { variant: "danger" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`危险按钮`);
          } else {
            return [
              createTextVNode("危险按钮")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(lo), { variant: "outline" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`描边按钮`);
          } else {
            return [
              createTextVNode("描边按钮")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(lo), { variant: "ghost" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`幽灵按钮`);
          } else {
            return [
              createTextVNode("幽灵按钮")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(lo), { variant: "link" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`链接按钮`);
          } else {
            return [
              createTextVNode("链接按钮")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h3 class="text-lg font-medium mb-4">尺寸</h3><div class="flex items-center flex-wrap gap-4">`);
      _push(ssrRenderComponent(unref(lo), { size: "xs" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`超小按钮`);
          } else {
            return [
              createTextVNode("超小按钮")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(lo), { size: "sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`小按钮`);
          } else {
            return [
              createTextVNode("小按钮")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(lo), { size: "md" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`中按钮`);
          } else {
            return [
              createTextVNode("中按钮")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(lo), { size: "lg" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`大按钮`);
          } else {
            return [
              createTextVNode("大按钮")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h3 class="text-lg font-medium mb-4">状态</h3><div class="flex flex-wrap gap-4">`);
      _push(ssrRenderComponent(unref(lo), { disabled: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`禁用按钮`);
          } else {
            return [
              createTextVNode("禁用按钮")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(lo), { loading: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`加载中`);
          } else {
            return [
              createTextVNode("加载中")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(lo), {
        variant: "outline",
        disabled: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`禁用描边`);
          } else {
            return [
              createTextVNode("禁用描边")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(lo), {
        variant: "outline",
        loading: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`加载中`);
          } else {
            return [
              createTextVNode("加载中")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h3 class="text-lg font-medium mb-4">圆角</h3><div class="flex flex-wrap gap-4">`);
      _push(ssrRenderComponent(unref(lo), { rounded: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`圆角按钮`);
          } else {
            return [
              createTextVNode("圆角按钮")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(lo), {
        size: "xs",
        rounded: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`超小圆角`);
          } else {
            return [
              createTextVNode("超小圆角")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(lo), {
        size: "lg",
        rounded: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`大圆角`);
          } else {
            return [
              createTextVNode("大圆角")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h3 class="text-lg font-medium mb-4">全宽</h3><div class="space-y-2">`);
      _push(ssrRenderComponent(unref(lo), { fullWidth: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`全宽按钮`);
          } else {
            return [
              createTextVNode("全宽按钮")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(lo), {
        variant: "outline",
        fullWidth: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`全宽描边按钮`);
          } else {
            return [
              createTextVNode("全宽描边按钮")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h3 class="text-lg font-medium mb-4">组合使用</h3><div class="space-y-2"><div class="flex flex-wrap gap-4">`);
      _push(ssrRenderComponent(unref(lo), {
        variant: "primary",
        size: "sm",
        rounded: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`圆角小按钮`);
          } else {
            return [
              createTextVNode("圆角小按钮")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(lo), {
        variant: "danger",
        loading: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`危险加载`);
          } else {
            return [
              createTextVNode("危险加载")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(lo), {
        variant: "outline",
        disabled: "",
        rounded: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`禁用圆角描边`);
          } else {
            return [
              createTextVNode("禁用圆角描边")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(unref(lo), {
        variant: "secondary",
        fullWidth: "",
        size: "lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 大号全宽次要按钮 `);
          } else {
            return [
              createTextVNode(" 大号全宽次要按钮 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h3 class="text-lg font-medium mb-4"> 全局注册用法 <span class="text-sm text-gray-500">（z- 前缀）</span></h3><p class="text-sm text-gray-500 mb-4"> 执行 <code>app.use(ZxyUI)</code> 后，组件已全局注册， 无需 import 即可直接使用 <code>&lt;z-button&gt;</code> 标签： </p><div class="flex flex-wrap gap-4">`);
      _push(ssrRenderComponent(unref(lo), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`默认按钮`);
          } else {
            return [
              createTextVNode("默认按钮")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(lo), { variant: "success" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`成功按钮`);
          } else {
            return [
              createTextVNode("成功按钮")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(lo), { variant: "danger" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`危险按钮`);
          } else {
            return [
              createTextVNode("危险按钮")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(lo), { variant: "outline" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`描边按钮`);
          } else {
            return [
              createTextVNode("描边按钮")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/button/example/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
