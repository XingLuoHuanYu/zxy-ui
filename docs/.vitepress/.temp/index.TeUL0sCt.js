import { defineComponent, mergeProps, unref, withCtx, createTextVNode, createVNode, h, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { i as il, z as zi } from "./index.esm.BIucDlT0.js";
/* empty css             */
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const ChevronRightIcon = {
      name: "ChevronRightIcon",
      render() {
        return h(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          },
          [
            h("polyline", {
              points: "9 18 15 12 9 6"
            })
          ]
        );
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8" }, _attrs))}><section><h2 class="text-lg font-medium mb-4">基础用法</h2><div class="flex gap-6">`);
      _push(ssrRenderComponent(unref(il), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(zi), { href: "/" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`首页`);
                } else {
                  return [
                    createTextVNode("首页")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(zi), { href: "/components" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`组件`);
                } else {
                  return [
                    createTextVNode("组件")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(zi), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`面包屑`);
                } else {
                  return [
                    createTextVNode("面包屑")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(zi), { href: "/" }, {
                default: withCtx(() => [
                  createTextVNode("首页")
                ]),
                _: 1
              }),
              createVNode(unref(zi), { href: "/components" }, {
                default: withCtx(() => [
                  createTextVNode("组件")
                ]),
                _: 1
              }),
              createVNode(unref(zi), null, {
                default: withCtx(() => [
                  createTextVNode("面包屑")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">自定义分隔符</h2><div class="flex gap-6">`);
      _push(ssrRenderComponent(unref(il), { separator: ">" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(zi), { href: "/" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`首页`);
                } else {
                  return [
                    createTextVNode("首页")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(zi), { href: "/components" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`组件`);
                } else {
                  return [
                    createTextVNode("组件")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(zi), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`面包屑`);
                } else {
                  return [
                    createTextVNode("面包屑")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(zi), { href: "/" }, {
                default: withCtx(() => [
                  createTextVNode("首页")
                ]),
                _: 1
              }),
              createVNode(unref(zi), { href: "/components" }, {
                default: withCtx(() => [
                  createTextVNode("组件")
                ]),
                _: 1
              }),
              createVNode(unref(zi), null, {
                default: withCtx(() => [
                  createTextVNode("面包屑")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">图标分隔符</h2><div class="flex gap-6">`);
      _push(ssrRenderComponent(unref(il), { "separator-icon": ChevronRightIcon }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(zi), { href: "/" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`首页`);
                } else {
                  return [
                    createTextVNode("首页")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(zi), { href: "/components" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`组件`);
                } else {
                  return [
                    createTextVNode("组件")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(zi), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`面包屑`);
                } else {
                  return [
                    createTextVNode("面包屑")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(zi), { href: "/" }, {
                default: withCtx(() => [
                  createTextVNode("首页")
                ]),
                _: 1
              }),
              createVNode(unref(zi), { href: "/components" }, {
                default: withCtx(() => [
                  createTextVNode("组件")
                ]),
                _: 1
              }),
              createVNode(unref(zi), null, {
                default: withCtx(() => [
                  createTextVNode("面包屑")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">禁用状态</h2><div class="flex gap-6">`);
      _push(ssrRenderComponent(unref(il), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(zi), { href: "/" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`首页`);
                } else {
                  return [
                    createTextVNode("首页")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(zi), {
              disabled: "",
              href: "/components"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`组件`);
                } else {
                  return [
                    createTextVNode("组件")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(zi), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`面包屑`);
                } else {
                  return [
                    createTextVNode("面包屑")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(zi), { href: "/" }, {
                default: withCtx(() => [
                  createTextVNode("首页")
                ]),
                _: 1
              }),
              createVNode(unref(zi), {
                disabled: "",
                href: "/components"
              }, {
                default: withCtx(() => [
                  createTextVNode("组件")
                ]),
                _: 1
              }),
              createVNode(unref(zi), null, {
                default: withCtx(() => [
                  createTextVNode("面包屑")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">激活状态</h2><div class="flex gap-6">`);
      _push(ssrRenderComponent(unref(il), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(zi), { href: "/" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`首页`);
                } else {
                  return [
                    createTextVNode("首页")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(zi), { href: "/components" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`组件`);
                } else {
                  return [
                    createTextVNode("组件")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(zi), { active: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`面包屑`);
                } else {
                  return [
                    createTextVNode("面包屑")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(zi), { href: "/" }, {
                default: withCtx(() => [
                  createTextVNode("首页")
                ]),
                _: 1
              }),
              createVNode(unref(zi), { href: "/components" }, {
                default: withCtx(() => [
                  createTextVNode("组件")
                ]),
                _: 1
              }),
              createVNode(unref(zi), { active: "" }, {
                default: withCtx(() => [
                  createTextVNode("面包屑")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">自定义样式</h2><div class="flex gap-6">`);
      _push(ssrRenderComponent(unref(il), { pt: { root: "bg-gray-100 p-3 rounded" } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(zi), {
              href: "/",
              pt: { root: "text-blue-500" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` 首页 `);
                } else {
                  return [
                    createTextVNode(" 首页 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(zi), { href: "/components" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`组件`);
                } else {
                  return [
                    createTextVNode("组件")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(zi), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`面包屑`);
                } else {
                  return [
                    createTextVNode("面包屑")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(zi), {
                href: "/",
                pt: { root: "text-blue-500" }
              }, {
                default: withCtx(() => [
                  createTextVNode(" 首页 ")
                ]),
                _: 1
              }),
              createVNode(unref(zi), { href: "/components" }, {
                default: withCtx(() => [
                  createTextVNode("组件")
                ]),
                _: 1
              }),
              createVNode(unref(zi), null, {
                default: withCtx(() => [
                  createTextVNode("面包屑")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">无样式模式</h2><div class="flex gap-6">`);
      _push(ssrRenderComponent(unref(il), {
        unstyled: "",
        pt: {
          root: "flex p-2 bg-gray-50 rounded",
          list: "flex items-center"
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(zi), {
              href: "/",
              unstyled: "",
              pt: {
                root: "text-blue-600 hover:underline",
                separator: "mx-2 text-gray-400"
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` 首页 `);
                } else {
                  return [
                    createTextVNode(" 首页 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(zi), {
              href: "/components",
              unstyled: "",
              pt: {
                root: "text-blue-600 hover:underline",
                separator: "mx-2 text-gray-400"
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` 组件 `);
                } else {
                  return [
                    createTextVNode(" 组件 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(zi), {
              unstyled: "",
              pt: { root: "text-gray-800 font-medium", content: "font-medium" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` 面包屑 `);
                } else {
                  return [
                    createTextVNode(" 面包屑 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(zi), {
                href: "/",
                unstyled: "",
                pt: {
                  root: "text-blue-600 hover:underline",
                  separator: "mx-2 text-gray-400"
                }
              }, {
                default: withCtx(() => [
                  createTextVNode(" 首页 ")
                ]),
                _: 1
              }),
              createVNode(unref(zi), {
                href: "/components",
                unstyled: "",
                pt: {
                  root: "text-blue-600 hover:underline",
                  separator: "mx-2 text-gray-400"
                }
              }, {
                default: withCtx(() => [
                  createTextVNode(" 组件 ")
                ]),
                _: 1
              }),
              createVNode(unref(zi), {
                unstyled: "",
                pt: { root: "text-gray-800 font-medium", content: "font-medium" }
              }, {
                default: withCtx(() => [
                  createTextVNode(" 面包屑 ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">自定义分隔符插槽</h2><div class="flex gap-6">`);
      _push(ssrRenderComponent(unref(il), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(zi), { href: "/" }, {
              separator: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-red-500 mx-2"${_scopeId2}>•</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-red-500 mx-2" }, "•")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` 首页 `);
                } else {
                  return [
                    createTextVNode(" 首页 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(zi), { href: "/components" }, {
              separator: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-red-500 mx-2"${_scopeId2}>•</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-red-500 mx-2" }, "•")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` 组件 `);
                } else {
                  return [
                    createTextVNode(" 组件 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(zi), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`面包屑`);
                } else {
                  return [
                    createTextVNode("面包屑")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(zi), { href: "/" }, {
                separator: withCtx(() => [
                  createVNode("span", { class: "text-red-500 mx-2" }, "•")
                ]),
                default: withCtx(() => [
                  createTextVNode(" 首页 ")
                ]),
                _: 1
              }),
              createVNode(unref(zi), { href: "/components" }, {
                separator: withCtx(() => [
                  createVNode("span", { class: "text-red-500 mx-2" }, "•")
                ]),
                default: withCtx(() => [
                  createTextVNode(" 组件 ")
                ]),
                _: 1
              }),
              createVNode(unref(zi), null, {
                default: withCtx(() => [
                  createTextVNode("面包屑")
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/breadcrumb/example/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
