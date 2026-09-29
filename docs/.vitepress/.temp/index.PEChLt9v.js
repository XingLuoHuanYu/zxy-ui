import { ref, resolveComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const singleExpanded = ref("item-2");
    const multiExpanded = ref(["item-1", "item-3"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ZAccordion = resolveComponent("ZAccordion");
      const _component_ZAccordionItem = resolveComponent("ZAccordionItem");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "accordion-examples" }, _attrs))} data-v-f479a86a><section class="example-section" data-v-f479a86a><h3 class="example-title" data-v-f479a86a>基础用法</h3>`);
      _push(ssrRenderComponent(_component_ZAccordion, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ZAccordionItem, {
              value: "item-1",
              header: "第一项"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p data-v-f479a86a${_scopeId2}>这是第一项的内容区域。这里可以放置任何内容。</p>`);
                } else {
                  return [
                    createVNode("p", null, "这是第一项的内容区域。这里可以放置任何内容。")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ZAccordionItem, {
              value: "item-2",
              header: "第二项"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p data-v-f479a86a${_scopeId2}>这是第二项的内容区域。点击标题可以折叠/展开内容。</p>`);
                } else {
                  return [
                    createVNode("p", null, "这是第二项的内容区域。点击标题可以折叠/展开内容。")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ZAccordionItem, {
              value: "item-3",
              header: "第三项"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p data-v-f479a86a${_scopeId2}>这是第三项的内容区域。默认情况下，同一时间只能展开一个面板。</p>`);
                } else {
                  return [
                    createVNode("p", null, "这是第三项的内容区域。默认情况下，同一时间只能展开一个面板。")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ZAccordionItem, {
                value: "item-1",
                header: "第一项"
              }, {
                default: withCtx(() => [
                  createVNode("p", null, "这是第一项的内容区域。这里可以放置任何内容。")
                ]),
                _: 1
              }),
              createVNode(_component_ZAccordionItem, {
                value: "item-2",
                header: "第二项"
              }, {
                default: withCtx(() => [
                  createVNode("p", null, "这是第二项的内容区域。点击标题可以折叠/展开内容。")
                ]),
                _: 1
              }),
              createVNode(_component_ZAccordionItem, {
                value: "item-3",
                header: "第三项"
              }, {
                default: withCtx(() => [
                  createVNode("p", null, "这是第三项的内容区域。默认情况下，同一时间只能展开一个面板。")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="example-section" data-v-f479a86a><h3 class="example-title" data-v-f479a86a>样式变体</h3><div class="example-row" data-v-f479a86a><div class="example-item" data-v-f479a86a><h4 class="example-subtitle" data-v-f479a86a>默认样式</h4>`);
      _push(ssrRenderComponent(_component_ZAccordion, { variant: "default" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ZAccordionItem, {
              value: "item-1",
              header: "默认样式"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p data-v-f479a86a${_scopeId2}>这是默认样式的手风琴项目。</p>`);
                } else {
                  return [
                    createVNode("p", null, "这是默认样式的手风琴项目。")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ZAccordionItem, {
              value: "item-2",
              header: "第二项"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p data-v-f479a86a${_scopeId2}>这是第二个项目。</p>`);
                } else {
                  return [
                    createVNode("p", null, "这是第二个项目。")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ZAccordionItem, {
                value: "item-1",
                header: "默认样式"
              }, {
                default: withCtx(() => [
                  createVNode("p", null, "这是默认样式的手风琴项目。")
                ]),
                _: 1
              }),
              createVNode(_component_ZAccordionItem, {
                value: "item-2",
                header: "第二项"
              }, {
                default: withCtx(() => [
                  createVNode("p", null, "这是第二个项目。")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="example-item" data-v-f479a86a><h4 class="example-subtitle" data-v-f479a86a>带边框样式</h4>`);
      _push(ssrRenderComponent(_component_ZAccordion, { variant: "bordered" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ZAccordionItem, {
              value: "item-1",
              header: "带边框样式"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p data-v-f479a86a${_scopeId2}>这是带边框的手风琴项目。</p>`);
                } else {
                  return [
                    createVNode("p", null, "这是带边框的手风琴项目。")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ZAccordionItem, {
              value: "item-2",
              header: "第二项"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p data-v-f479a86a${_scopeId2}>这是第二个项目。</p>`);
                } else {
                  return [
                    createVNode("p", null, "这是第二个项目。")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ZAccordionItem, {
                value: "item-1",
                header: "带边框样式"
              }, {
                default: withCtx(() => [
                  createVNode("p", null, "这是带边框的手风琴项目。")
                ]),
                _: 1
              }),
              createVNode(_component_ZAccordionItem, {
                value: "item-2",
                header: "第二项"
              }, {
                default: withCtx(() => [
                  createVNode("p", null, "这是第二个项目。")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="example-item" data-v-f479a86a><h4 class="example-subtitle" data-v-f479a86a>阴影样式</h4>`);
      _push(ssrRenderComponent(_component_ZAccordion, { variant: "elevated" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ZAccordionItem, {
              value: "item-1",
              header: "阴影样式"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p data-v-f479a86a${_scopeId2}>这是带阴影的手风琴项目。</p>`);
                } else {
                  return [
                    createVNode("p", null, "这是带阴影的手风琴项目。")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ZAccordionItem, {
              value: "item-2",
              header: "第二项"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p data-v-f479a86a${_scopeId2}>这是第二个项目。</p>`);
                } else {
                  return [
                    createVNode("p", null, "这是第二个项目。")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ZAccordionItem, {
                value: "item-1",
                header: "阴影样式"
              }, {
                default: withCtx(() => [
                  createVNode("p", null, "这是带阴影的手风琴项目。")
                ]),
                _: 1
              }),
              createVNode(_component_ZAccordionItem, {
                value: "item-2",
                header: "第二项"
              }, {
                default: withCtx(() => [
                  createVNode("p", null, "这是第二个项目。")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="example-section" data-v-f479a86a><h3 class="example-title" data-v-f479a86a>多面板模式</h3><div class="example-row" data-v-f479a86a><div class="example-item" data-v-f479a86a><h4 class="example-subtitle" data-v-f479a86a>单面板模式（默认）</h4>`);
      _push(ssrRenderComponent(_component_ZAccordion, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ZAccordionItem, {
              value: "item-1",
              header: "第一项"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p data-v-f479a86a${_scopeId2}>在单面板模式下，同一时间只能展开一个面板。</p>`);
                } else {
                  return [
                    createVNode("p", null, "在单面板模式下，同一时间只能展开一个面板。")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ZAccordionItem, {
              value: "item-2",
              header: "第二项"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p data-v-f479a86a${_scopeId2}>打开此面板会自动关闭其他已打开的面板。</p>`);
                } else {
                  return [
                    createVNode("p", null, "打开此面板会自动关闭其他已打开的面板。")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ZAccordionItem, {
              value: "item-3",
              header: "第三项"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p data-v-f479a86a${_scopeId2}>这样可以确保界面简洁清晰。</p>`);
                } else {
                  return [
                    createVNode("p", null, "这样可以确保界面简洁清晰。")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ZAccordionItem, {
                value: "item-1",
                header: "第一项"
              }, {
                default: withCtx(() => [
                  createVNode("p", null, "在单面板模式下，同一时间只能展开一个面板。")
                ]),
                _: 1
              }),
              createVNode(_component_ZAccordionItem, {
                value: "item-2",
                header: "第二项"
              }, {
                default: withCtx(() => [
                  createVNode("p", null, "打开此面板会自动关闭其他已打开的面板。")
                ]),
                _: 1
              }),
              createVNode(_component_ZAccordionItem, {
                value: "item-3",
                header: "第三项"
              }, {
                default: withCtx(() => [
                  createVNode("p", null, "这样可以确保界面简洁清晰。")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="example-item" data-v-f479a86a><h4 class="example-subtitle" data-v-f479a86a>多面板模式</h4>`);
      _push(ssrRenderComponent(_component_ZAccordion, { multiple: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ZAccordionItem, {
              value: "item-1",
              header: "第一项"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p data-v-f479a86a${_scopeId2}>在多面板模式下，可以同时展开多个面板。</p>`);
                } else {
                  return [
                    createVNode("p", null, "在多面板模式下，可以同时展开多个面板。")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ZAccordionItem, {
              value: "item-2",
              header: "第二项"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p data-v-f479a86a${_scopeId2}>这对于需要同时查看多个内容区域的场景很有用。</p>`);
                } else {
                  return [
                    createVNode("p", null, "这对于需要同时查看多个内容区域的场景很有用。")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ZAccordionItem, {
              value: "item-3",
              header: "第三项"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p data-v-f479a86a${_scopeId2}>用户可以自由组合需要展示的内容。</p>`);
                } else {
                  return [
                    createVNode("p", null, "用户可以自由组合需要展示的内容。")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ZAccordionItem, {
                value: "item-1",
                header: "第一项"
              }, {
                default: withCtx(() => [
                  createVNode("p", null, "在多面板模式下，可以同时展开多个面板。")
                ]),
                _: 1
              }),
              createVNode(_component_ZAccordionItem, {
                value: "item-2",
                header: "第二项"
              }, {
                default: withCtx(() => [
                  createVNode("p", null, "这对于需要同时查看多个内容区域的场景很有用。")
                ]),
                _: 1
              }),
              createVNode(_component_ZAccordionItem, {
                value: "item-3",
                header: "第三项"
              }, {
                default: withCtx(() => [
                  createVNode("p", null, "用户可以自由组合需要展示的内容。")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="example-section" data-v-f479a86a><h3 class="example-title" data-v-f479a86a>默认展开状态</h3><div class="example-row" data-v-f479a86a><div class="example-item" data-v-f479a86a><h4 class="example-subtitle" data-v-f479a86a>单项默认展开</h4>`);
      _push(ssrRenderComponent(_component_ZAccordion, {
        modelValue: singleExpanded.value,
        "onUpdate:modelValue": ($event) => singleExpanded.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ZAccordionItem, {
              value: "item-1",
              header: "默认关闭项"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p data-v-f479a86a${_scopeId2}>这个面板默认是关闭的。</p>`);
                } else {
                  return [
                    createVNode("p", null, "这个面板默认是关闭的。")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ZAccordionItem, {
              value: "item-2",
              header: "默认展开项"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p data-v-f479a86a${_scopeId2}>这个面板默认是展开的。</p>`);
                } else {
                  return [
                    createVNode("p", null, "这个面板默认是展开的。")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ZAccordionItem, {
              value: "item-3",
              header: "默认关闭项"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p data-v-f479a86a${_scopeId2}>这个面板默认是关闭的。</p>`);
                } else {
                  return [
                    createVNode("p", null, "这个面板默认是关闭的。")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ZAccordionItem, {
                value: "item-1",
                header: "默认关闭项"
              }, {
                default: withCtx(() => [
                  createVNode("p", null, "这个面板默认是关闭的。")
                ]),
                _: 1
              }),
              createVNode(_component_ZAccordionItem, {
                value: "item-2",
                header: "默认展开项"
              }, {
                default: withCtx(() => [
                  createVNode("p", null, "这个面板默认是展开的。")
                ]),
                _: 1
              }),
              createVNode(_component_ZAccordionItem, {
                value: "item-3",
                header: "默认关闭项"
              }, {
                default: withCtx(() => [
                  createVNode("p", null, "这个面板默认是关闭的。")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="example-item" data-v-f479a86a><h4 class="example-subtitle" data-v-f479a86a>多项默认展开</h4>`);
      _push(ssrRenderComponent(_component_ZAccordion, {
        multiple: "",
        modelValue: multiExpanded.value,
        "onUpdate:modelValue": ($event) => multiExpanded.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ZAccordionItem, {
              value: "item-1",
              header: "默认展开项"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p data-v-f479a86a${_scopeId2}>这个面板默认是展开的。</p>`);
                } else {
                  return [
                    createVNode("p", null, "这个面板默认是展开的。")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ZAccordionItem, {
              value: "item-2",
              header: "默认关闭项"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p data-v-f479a86a${_scopeId2}>这个面板默认是关闭的。</p>`);
                } else {
                  return [
                    createVNode("p", null, "这个面板默认是关闭的。")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ZAccordionItem, {
              value: "item-3",
              header: "默认展开项"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p data-v-f479a86a${_scopeId2}>这个面板默认是展开的。</p>`);
                } else {
                  return [
                    createVNode("p", null, "这个面板默认是展开的。")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ZAccordionItem, {
                value: "item-1",
                header: "默认展开项"
              }, {
                default: withCtx(() => [
                  createVNode("p", null, "这个面板默认是展开的。")
                ]),
                _: 1
              }),
              createVNode(_component_ZAccordionItem, {
                value: "item-2",
                header: "默认关闭项"
              }, {
                default: withCtx(() => [
                  createVNode("p", null, "这个面板默认是关闭的。")
                ]),
                _: 1
              }),
              createVNode(_component_ZAccordionItem, {
                value: "item-3",
                header: "默认展开项"
              }, {
                default: withCtx(() => [
                  createVNode("p", null, "这个面板默认是展开的。")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="example-section" data-v-f479a86a><h3 class="example-title" data-v-f479a86a>禁用状态</h3><div class="example-row" data-v-f479a86a><div class="example-item" data-v-f479a86a><h4 class="example-subtitle" data-v-f479a86a>全部禁用</h4>`);
      _push(ssrRenderComponent(_component_ZAccordion, { disabled: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ZAccordionItem, {
              value: "item-1",
              header: "禁用项目1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p data-v-f479a86a${_scopeId2}>这个手风琴的所有项目都被禁用，无法点击。</p>`);
                } else {
                  return [
                    createVNode("p", null, "这个手风琴的所有项目都被禁用，无法点击。")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ZAccordionItem, {
              value: "item-2",
              header: "禁用项目2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p data-v-f479a86a${_scopeId2}>这个项目也被禁用，无法点击。</p>`);
                } else {
                  return [
                    createVNode("p", null, "这个项目也被禁用，无法点击。")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ZAccordionItem, {
                value: "item-1",
                header: "禁用项目1"
              }, {
                default: withCtx(() => [
                  createVNode("p", null, "这个手风琴的所有项目都被禁用，无法点击。")
                ]),
                _: 1
              }),
              createVNode(_component_ZAccordionItem, {
                value: "item-2",
                header: "禁用项目2"
              }, {
                default: withCtx(() => [
                  createVNode("p", null, "这个项目也被禁用，无法点击。")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="example-item" data-v-f479a86a><h4 class="example-subtitle" data-v-f479a86a>单项禁用</h4>`);
      _push(ssrRenderComponent(_component_ZAccordion, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ZAccordionItem, {
              value: "item-1",
              header: "正常项目"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p data-v-f479a86a${_scopeId2}>这是一个可以正常点击的项目。</p>`);
                } else {
                  return [
                    createVNode("p", null, "这是一个可以正常点击的项目。")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ZAccordionItem, {
              value: "item-2",
              header: "禁用项目",
              disabled: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p data-v-f479a86a${_scopeId2}>这个项目被禁用，无法点击。</p>`);
                } else {
                  return [
                    createVNode("p", null, "这个项目被禁用，无法点击。")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ZAccordionItem, {
              value: "item-3",
              header: "正常项目"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p data-v-f479a86a${_scopeId2}>这是一个可以正常点击的项目。</p>`);
                } else {
                  return [
                    createVNode("p", null, "这是一个可以正常点击的项目。")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ZAccordionItem, {
                value: "item-1",
                header: "正常项目"
              }, {
                default: withCtx(() => [
                  createVNode("p", null, "这是一个可以正常点击的项目。")
                ]),
                _: 1
              }),
              createVNode(_component_ZAccordionItem, {
                value: "item-2",
                header: "禁用项目",
                disabled: ""
              }, {
                default: withCtx(() => [
                  createVNode("p", null, "这个项目被禁用，无法点击。")
                ]),
                _: 1
              }),
              createVNode(_component_ZAccordionItem, {
                value: "item-3",
                header: "正常项目"
              }, {
                default: withCtx(() => [
                  createVNode("p", null, "这是一个可以正常点击的项目。")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="example-section" data-v-f479a86a><h3 class="example-title" data-v-f479a86a>自定义头部和图标</h3>`);
      _push(ssrRenderComponent(_component_ZAccordion, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ZAccordionItem, { value: "item-1" }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2" data-v-f479a86a${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-600" data-v-f479a86a${_scopeId2}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" data-v-f479a86a${_scopeId2}></path><polyline points="3.27 6.96 12 12.01 20.73 6.96" data-v-f479a86a${_scopeId2}></polyline><line x1="12" y1="22.08" x2="12" y2="12" data-v-f479a86a${_scopeId2}></line></svg><span class="text-blue-600 font-bold" data-v-f479a86a${_scopeId2}>自定义标题</span></div>`);
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
                        "stroke-linejoin": "round",
                        class: "text-blue-600"
                      }, [
                        createVNode("path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }),
                        createVNode("polyline", { points: "3.27 6.96 12 12.01 20.73 6.96" }),
                        createVNode("line", {
                          x1: "12",
                          y1: "22.08",
                          x2: "12",
                          y2: "12"
                        })
                      ])),
                      createVNode("span", { class: "text-blue-600 font-bold" }, "自定义标题")
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="custom-content" data-v-f479a86a${_scopeId2}><p data-v-f479a86a${_scopeId2}>这是一个使用了自定义标题的手风琴项目。</p><p class="note" data-v-f479a86a${_scopeId2}>可以添加任何自定义内容。</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "custom-content" }, [
                      createVNode("p", null, "这是一个使用了自定义标题的手风琴项目。"),
                      createVNode("p", { class: "note" }, "可以添加任何自定义内容。")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ZAccordionItem, {
              value: "item-2",
              header: "自定义图标"
            }, {
              icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-600" data-v-f479a86a${_scopeId2}><circle cx="12" cy="12" r="10" data-v-f479a86a${_scopeId2}></circle><polyline points="12 16 16 12 12 8" data-v-f479a86a${_scopeId2}></polyline><line x1="8" y1="12" x2="16" y2="12" data-v-f479a86a${_scopeId2}></line></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "16",
                      height: "16",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      class: "text-green-600"
                    }, [
                      createVNode("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10"
                      }),
                      createVNode("polyline", { points: "12 16 16 12 12 8" }),
                      createVNode("line", {
                        x1: "8",
                        y1: "12",
                        x2: "16",
                        y2: "12"
                      })
                    ]))
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="custom-content" data-v-f479a86a${_scopeId2}><p data-v-f479a86a${_scopeId2}>这是一个使用了自定义图标的手风琴项目。</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "custom-content" }, [
                      createVNode("p", null, "这是一个使用了自定义图标的手风琴项目。")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ZAccordionItem, { value: "item-1" }, {
                header: withCtx(() => [
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
                      "stroke-linejoin": "round",
                      class: "text-blue-600"
                    }, [
                      createVNode("path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }),
                      createVNode("polyline", { points: "3.27 6.96 12 12.01 20.73 6.96" }),
                      createVNode("line", {
                        x1: "12",
                        y1: "22.08",
                        x2: "12",
                        y2: "12"
                      })
                    ])),
                    createVNode("span", { class: "text-blue-600 font-bold" }, "自定义标题")
                  ])
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "custom-content" }, [
                    createVNode("p", null, "这是一个使用了自定义标题的手风琴项目。"),
                    createVNode("p", { class: "note" }, "可以添加任何自定义内容。")
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_ZAccordionItem, {
                value: "item-2",
                header: "自定义图标"
              }, {
                icon: withCtx(() => [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    class: "text-green-600"
                  }, [
                    createVNode("circle", {
                      cx: "12",
                      cy: "12",
                      r: "10"
                    }),
                    createVNode("polyline", { points: "12 16 16 12 12 8" }),
                    createVNode("line", {
                      x1: "8",
                      y1: "12",
                      x2: "16",
                      y2: "12"
                    })
                  ]))
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "custom-content" }, [
                    createVNode("p", null, "这是一个使用了自定义图标的手风琴项目。")
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="example-section" data-v-f479a86a><h3 class="example-title" data-v-f479a86a>无样式模式</h3>`);
      _push(ssrRenderComponent(_component_ZAccordion, {
        unstyled: "",
        pt: { root: "bg-gray-100 rounded-lg p-4" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ZAccordionItem, {
              value: "item-1",
              header: "自定义样式项目",
              pt: {
                root: "mb-4",
                header: "mb-1",
                trigger: "bg-white rounded-lg shadow-sm p-4 w-full flex justify-between items-center hover:bg-gray-50 transition-colors",
                title: "text-indigo-600 font-medium",
                icon: "text-indigo-600",
                content: "overflow-hidden transition-all duration-300",
                contentInner: "bg-white rounded-lg mt-1 p-4 shadow-sm"
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p data-v-f479a86a${_scopeId2}>这是无样式模式下，通过pt属性自定义的项目。</p><p class="note" data-v-f479a86a${_scopeId2}>可以完全控制每个元素的样式。</p>`);
                } else {
                  return [
                    createVNode("p", null, "这是无样式模式下，通过pt属性自定义的项目。"),
                    createVNode("p", { class: "note" }, "可以完全控制每个元素的样式。")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ZAccordionItem, {
              value: "item-2",
              header: "另一个自定义项目",
              pt: {
                root: "mb-0",
                header: "mb-1",
                trigger: "bg-indigo-500 text-white rounded-lg shadow-sm p-4 w-full flex justify-between items-center hover:bg-indigo-600 transition-colors",
                title: "font-medium",
                icon: "",
                content: "overflow-hidden transition-all duration-300",
                contentInner: "bg-white rounded-lg mt-1 p-4 shadow-sm border-l-4 border-indigo-500"
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p data-v-f479a86a${_scopeId2}>不同风格的自定义项目。</p>`);
                } else {
                  return [
                    createVNode("p", null, "不同风格的自定义项目。")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ZAccordionItem, {
                value: "item-1",
                header: "自定义样式项目",
                pt: {
                  root: "mb-4",
                  header: "mb-1",
                  trigger: "bg-white rounded-lg shadow-sm p-4 w-full flex justify-between items-center hover:bg-gray-50 transition-colors",
                  title: "text-indigo-600 font-medium",
                  icon: "text-indigo-600",
                  content: "overflow-hidden transition-all duration-300",
                  contentInner: "bg-white rounded-lg mt-1 p-4 shadow-sm"
                }
              }, {
                default: withCtx(() => [
                  createVNode("p", null, "这是无样式模式下，通过pt属性自定义的项目。"),
                  createVNode("p", { class: "note" }, "可以完全控制每个元素的样式。")
                ]),
                _: 1
              }),
              createVNode(_component_ZAccordionItem, {
                value: "item-2",
                header: "另一个自定义项目",
                pt: {
                  root: "mb-0",
                  header: "mb-1",
                  trigger: "bg-indigo-500 text-white rounded-lg shadow-sm p-4 w-full flex justify-between items-center hover:bg-indigo-600 transition-colors",
                  title: "font-medium",
                  icon: "",
                  content: "overflow-hidden transition-all duration-300",
                  contentInner: "bg-white rounded-lg mt-1 p-4 shadow-sm border-l-4 border-indigo-500"
                }
              }, {
                default: withCtx(() => [
                  createVNode("p", null, "不同风格的自定义项目。")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/accordion/example/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f479a86a"]]);
export {
  index as default
};
