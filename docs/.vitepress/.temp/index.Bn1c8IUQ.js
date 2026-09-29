import { defineComponent, resolveComponent, unref, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { b as Du, R as Ru, l as lo } from "./index.esm.BIucDlT0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ZDropdownDivider = resolveComponent("ZDropdownDivider");
      _push(ssrRenderComponent(unref(Du), _attrs, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(lo), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`点击打开菜单`);
                } else {
                  return [
                    createTextVNode("点击打开菜单")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(lo), null, {
                default: withCtx(() => [
                  createTextVNode("点击打开菜单")
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Ru), { value: "option1" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`选项1`);
                } else {
                  return [
                    createTextVNode("选项1")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ru), { value: "option2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`选项2`);
                } else {
                  return [
                    createTextVNode("选项2")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ZDropdownDivider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ru), {
              value: "option3",
              disabled: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`禁用选项`);
                } else {
                  return [
                    createTextVNode("禁用选项")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Ru), { value: "option1" }, {
                default: withCtx(() => [
                  createTextVNode("选项1")
                ]),
                _: 1
              }),
              createVNode(unref(Ru), { value: "option2" }, {
                default: withCtx(() => [
                  createTextVNode("选项2")
                ]),
                _: 1
              }),
              createVNode(_component_ZDropdownDivider),
              createVNode(unref(Ru), {
                value: "option3",
                disabled: ""
              }, {
                default: withCtx(() => [
                  createTextVNode("禁用选项")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dropdown/example/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
