import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { T as Ts, I as Ds } from "./index.esm.BIucDlT0.js";
/* empty css             */
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const activeTab = ref("tab1");
    const handleTabChange = (value) => {
      console.log("当前选中的标签:", value);
      activeTab.value = value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "tabs-examples space-y-8" }, _attrs))} data-v-b80f9b13><section data-v-b80f9b13><h2 class="text-lg font-medium mb-3" data-v-b80f9b13>基础用法</h2>`);
      _push(ssrRenderComponent(unref(Ts), {
        modelValue: activeTab.value,
        "onUpdate:modelValue": ($event) => activeTab.value = $event,
        onChange: handleTabChange
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Ds), {
              name: "tab1",
              title: "标签1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-4 bg-white dark:bg-gray-800 rounded-md" data-v-b80f9b13${_scopeId2}><p data-v-b80f9b13${_scopeId2}>这是标签1的内容</p><p class="mt-2" data-v-b80f9b13${_scopeId2}>当前选中的标签: ${ssrInterpolate(activeTab.value)}</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                      createVNode("p", null, "这是标签1的内容"),
                      createVNode("p", { class: "mt-2" }, "当前选中的标签: " + toDisplayString(activeTab.value), 1)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ds), {
              name: "tab2",
              title: "标签2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-4 bg-white dark:bg-gray-800 rounded-md" data-v-b80f9b13${_scopeId2}><p data-v-b80f9b13${_scopeId2}>这是标签2的内容</p><p class="mt-2" data-v-b80f9b13${_scopeId2}>当前选中的标签: ${ssrInterpolate(activeTab.value)}</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                      createVNode("p", null, "这是标签2的内容"),
                      createVNode("p", { class: "mt-2" }, "当前选中的标签: " + toDisplayString(activeTab.value), 1)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ds), {
              name: "tab3",
              title: "标签3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-4 bg-white dark:bg-gray-800 rounded-md" data-v-b80f9b13${_scopeId2}><p data-v-b80f9b13${_scopeId2}>这是标签3的内容</p><p class="mt-2" data-v-b80f9b13${_scopeId2}>当前选中的标签: ${ssrInterpolate(activeTab.value)}</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                      createVNode("p", null, "这是标签3的内容"),
                      createVNode("p", { class: "mt-2" }, "当前选中的标签: " + toDisplayString(activeTab.value), 1)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Ds), {
                name: "tab1",
                title: "标签1"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                    createVNode("p", null, "这是标签1的内容"),
                    createVNode("p", { class: "mt-2" }, "当前选中的标签: " + toDisplayString(activeTab.value), 1)
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(Ds), {
                name: "tab2",
                title: "标签2"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                    createVNode("p", null, "这是标签2的内容"),
                    createVNode("p", { class: "mt-2" }, "当前选中的标签: " + toDisplayString(activeTab.value), 1)
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(Ds), {
                name: "tab3",
                title: "标签3"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                    createVNode("p", null, "这是标签3的内容"),
                    createVNode("p", { class: "mt-2" }, "当前选中的标签: " + toDisplayString(activeTab.value), 1)
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section data-v-b80f9b13><h2 class="text-lg font-medium mb-3" data-v-b80f9b13>不同变体</h2><h3 class="text-sm font-medium mb-2" data-v-b80f9b13>默认样式 (default)</h3>`);
      _push(ssrRenderComponent(unref(Ts), { variant: "default" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Ds), {
              name: "var1",
              title: "标签1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-4 bg-white dark:bg-gray-800 rounded-md" data-v-b80f9b13${_scopeId2}><p data-v-b80f9b13${_scopeId2}>默认样式标签内容</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                      createVNode("p", null, "默认样式标签内容")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ds), {
              name: "var2",
              title: "标签2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-4 bg-white dark:bg-gray-800 rounded-md" data-v-b80f9b13${_scopeId2}><p data-v-b80f9b13${_scopeId2}>默认样式标签内容</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                      createVNode("p", null, "默认样式标签内容")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Ds), {
                name: "var1",
                title: "标签1"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                    createVNode("p", null, "默认样式标签内容")
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(Ds), {
                name: "var2",
                title: "标签2"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                    createVNode("p", null, "默认样式标签内容")
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h3 class="text-sm font-medium mb-2 mt-4" data-v-b80f9b13>胶囊样式 (pills)</h3>`);
      _push(ssrRenderComponent(unref(Ts), { variant: "pills" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Ds), {
              name: "pill1",
              title: "标签1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-4 bg-white dark:bg-gray-800 rounded-md" data-v-b80f9b13${_scopeId2}><p data-v-b80f9b13${_scopeId2}>胶囊样式标签内容</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                      createVNode("p", null, "胶囊样式标签内容")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ds), {
              name: "pill2",
              title: "标签2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-4 bg-white dark:bg-gray-800 rounded-md" data-v-b80f9b13${_scopeId2}><p data-v-b80f9b13${_scopeId2}>胶囊样式标签内容</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                      createVNode("p", null, "胶囊样式标签内容")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Ds), {
                name: "pill1",
                title: "标签1"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                    createVNode("p", null, "胶囊样式标签内容")
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(Ds), {
                name: "pill2",
                title: "标签2"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                    createVNode("p", null, "胶囊样式标签内容")
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h3 class="text-sm font-medium mb-2 mt-4" data-v-b80f9b13>下划线样式 (underline)</h3>`);
      _push(ssrRenderComponent(unref(Ts), { variant: "underline" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Ds), {
              name: "under1",
              title: "标签1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-4 bg-white dark:bg-gray-800 rounded-md" data-v-b80f9b13${_scopeId2}><p data-v-b80f9b13${_scopeId2}>下划线样式标签内容</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                      createVNode("p", null, "下划线样式标签内容")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ds), {
              name: "under2",
              title: "标签2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-4 bg-white dark:bg-gray-800 rounded-md" data-v-b80f9b13${_scopeId2}><p data-v-b80f9b13${_scopeId2}>下划线样式标签内容</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                      createVNode("p", null, "下划线样式标签内容")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Ds), {
                name: "under1",
                title: "标签1"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                    createVNode("p", null, "下划线样式标签内容")
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(Ds), {
                name: "under2",
                title: "标签2"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                    createVNode("p", null, "下划线样式标签内容")
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section data-v-b80f9b13><h2 class="text-lg font-medium mb-3" data-v-b80f9b13>不同尺寸</h2><h3 class="text-sm font-medium mb-2" data-v-b80f9b13>小尺寸 (sm)</h3>`);
      _push(ssrRenderComponent(unref(Ts), { size: "sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Ds), {
              name: "sm1",
              title: "标签1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-4 bg-white dark:bg-gray-800 rounded-md" data-v-b80f9b13${_scopeId2}><p data-v-b80f9b13${_scopeId2}>小尺寸标签内容</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                      createVNode("p", null, "小尺寸标签内容")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ds), {
              name: "sm2",
              title: "标签2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-4 bg-white dark:bg-gray-800 rounded-md" data-v-b80f9b13${_scopeId2}><p data-v-b80f9b13${_scopeId2}>小尺寸标签内容</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                      createVNode("p", null, "小尺寸标签内容")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Ds), {
                name: "sm1",
                title: "标签1"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                    createVNode("p", null, "小尺寸标签内容")
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(Ds), {
                name: "sm2",
                title: "标签2"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                    createVNode("p", null, "小尺寸标签内容")
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h3 class="text-sm font-medium mb-2 mt-4" data-v-b80f9b13>中尺寸 (md) - 默认</h3>`);
      _push(ssrRenderComponent(unref(Ts), { size: "md" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Ds), {
              name: "md1",
              title: "标签1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-4 bg-white dark:bg-gray-800 rounded-md" data-v-b80f9b13${_scopeId2}><p data-v-b80f9b13${_scopeId2}>中尺寸标签内容</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                      createVNode("p", null, "中尺寸标签内容")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ds), {
              name: "md2",
              title: "标签2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-4 bg-white dark:bg-gray-800 rounded-md" data-v-b80f9b13${_scopeId2}><p data-v-b80f9b13${_scopeId2}>中尺寸标签内容</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                      createVNode("p", null, "中尺寸标签内容")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Ds), {
                name: "md1",
                title: "标签1"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                    createVNode("p", null, "中尺寸标签内容")
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(Ds), {
                name: "md2",
                title: "标签2"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                    createVNode("p", null, "中尺寸标签内容")
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h3 class="text-sm font-medium mb-2 mt-4" data-v-b80f9b13>大尺寸 (lg)</h3>`);
      _push(ssrRenderComponent(unref(Ts), { size: "lg" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Ds), {
              name: "lg1",
              title: "标签1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-4 bg-white dark:bg-gray-800 rounded-md" data-v-b80f9b13${_scopeId2}><p data-v-b80f9b13${_scopeId2}>大尺寸标签内容</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                      createVNode("p", null, "大尺寸标签内容")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ds), {
              name: "lg2",
              title: "标签2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-4 bg-white dark:bg-gray-800 rounded-md" data-v-b80f9b13${_scopeId2}><p data-v-b80f9b13${_scopeId2}>大尺寸标签内容</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                      createVNode("p", null, "大尺寸标签内容")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Ds), {
                name: "lg1",
                title: "标签1"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                    createVNode("p", null, "大尺寸标签内容")
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(Ds), {
                name: "lg2",
                title: "标签2"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                    createVNode("p", null, "大尺寸标签内容")
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section data-v-b80f9b13><h2 class="text-lg font-medium mb-3" data-v-b80f9b13>不同位置</h2><h3 class="text-sm font-medium mb-2" data-v-b80f9b13>顶部位置 (top) - 默认</h3>`);
      _push(ssrRenderComponent(unref(Ts), { placement: "top" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Ds), {
              name: "top1",
              title: "标签1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-4 bg-white dark:bg-gray-800 rounded-md" data-v-b80f9b13${_scopeId2}><p data-v-b80f9b13${_scopeId2}>顶部位置标签内容</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                      createVNode("p", null, "顶部位置标签内容")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ds), {
              name: "top2",
              title: "标签2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-4 bg-white dark:bg-gray-800 rounded-md" data-v-b80f9b13${_scopeId2}><p data-v-b80f9b13${_scopeId2}>顶部位置标签内容</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                      createVNode("p", null, "顶部位置标签内容")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Ds), {
                name: "top1",
                title: "标签1"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                    createVNode("p", null, "顶部位置标签内容")
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(Ds), {
                name: "top2",
                title: "标签2"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                    createVNode("p", null, "顶部位置标签内容")
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h3 class="text-sm font-medium mb-2 mt-4" data-v-b80f9b13>底部位置 (bottom)</h3>`);
      _push(ssrRenderComponent(unref(Ts), { placement: "bottom" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Ds), {
              name: "bottom1",
              title: "标签1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-4 bg-white dark:bg-gray-800 rounded-md" data-v-b80f9b13${_scopeId2}><p data-v-b80f9b13${_scopeId2}>底部位置标签内容</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                      createVNode("p", null, "底部位置标签内容")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ds), {
              name: "bottom2",
              title: "标签2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-4 bg-white dark:bg-gray-800 rounded-md" data-v-b80f9b13${_scopeId2}><p data-v-b80f9b13${_scopeId2}>底部位置标签内容</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                      createVNode("p", null, "底部位置标签内容")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Ds), {
                name: "bottom1",
                title: "标签1"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                    createVNode("p", null, "底部位置标签内容")
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(Ds), {
                name: "bottom2",
                title: "标签2"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                    createVNode("p", null, "底部位置标签内容")
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h3 class="text-sm font-medium mb-2 mt-4" data-v-b80f9b13>左侧位置 (left)</h3>`);
      _push(ssrRenderComponent(unref(Ts), { placement: "left" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Ds), {
              name: "left1",
              title: "标签1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-4 bg-white dark:bg-gray-800 rounded-md" data-v-b80f9b13${_scopeId2}><p data-v-b80f9b13${_scopeId2}>左侧位置标签内容</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                      createVNode("p", null, "左侧位置标签内容")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ds), {
              name: "left2",
              title: "标签2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-4 bg-white dark:bg-gray-800 rounded-md" data-v-b80f9b13${_scopeId2}><p data-v-b80f9b13${_scopeId2}>左侧位置标签内容</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                      createVNode("p", null, "左侧位置标签内容")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Ds), {
                name: "left1",
                title: "标签1"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                    createVNode("p", null, "左侧位置标签内容")
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(Ds), {
                name: "left2",
                title: "标签2"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                    createVNode("p", null, "左侧位置标签内容")
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h3 class="text-sm font-medium mb-2 mt-4" data-v-b80f9b13>右侧位置 (right)</h3>`);
      _push(ssrRenderComponent(unref(Ts), { placement: "right" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Ds), {
              name: "right1",
              title: "标签1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-4 bg-white dark:bg-gray-800 rounded-md" data-v-b80f9b13${_scopeId2}><p data-v-b80f9b13${_scopeId2}>右侧位置标签内容</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                      createVNode("p", null, "右侧位置标签内容")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ds), {
              name: "right2",
              title: "标签2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-4 bg-white dark:bg-gray-800 rounded-md" data-v-b80f9b13${_scopeId2}><p data-v-b80f9b13${_scopeId2}>右侧位置标签内容</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                      createVNode("p", null, "右侧位置标签内容")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Ds), {
                name: "right1",
                title: "标签1"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                    createVNode("p", null, "右侧位置标签内容")
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(Ds), {
                name: "right2",
                title: "标签2"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                    createVNode("p", null, "右侧位置标签内容")
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section data-v-b80f9b13><h2 class="text-lg font-medium mb-3" data-v-b80f9b13>禁用状态</h2><h3 class="text-sm font-medium mb-2" data-v-b80f9b13>禁用单个标签</h3>`);
      _push(ssrRenderComponent(unref(Ts), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Ds), {
              name: "dis1",
              title: "标签1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-4 bg-white dark:bg-gray-800 rounded-md" data-v-b80f9b13${_scopeId2}><p data-v-b80f9b13${_scopeId2}>这是标签1的内容</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                      createVNode("p", null, "这是标签1的内容")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ds), {
              name: "dis2",
              title: "标签2",
              disabled: true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-4 bg-white dark:bg-gray-800 rounded-md" data-v-b80f9b13${_scopeId2}><p data-v-b80f9b13${_scopeId2}>这是标签2的内容（已禁用）</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                      createVNode("p", null, "这是标签2的内容（已禁用）")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ds), {
              name: "dis3",
              title: "标签3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-4 bg-white dark:bg-gray-800 rounded-md" data-v-b80f9b13${_scopeId2}><p data-v-b80f9b13${_scopeId2}>这是标签3的内容</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                      createVNode("p", null, "这是标签3的内容")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Ds), {
                name: "dis1",
                title: "标签1"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                    createVNode("p", null, "这是标签1的内容")
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(Ds), {
                name: "dis2",
                title: "标签2",
                disabled: true
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                    createVNode("p", null, "这是标签2的内容（已禁用）")
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(Ds), {
                name: "dis3",
                title: "标签3"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                    createVNode("p", null, "这是标签3的内容")
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h3 class="text-sm font-medium mb-2 mt-4" data-v-b80f9b13>禁用整个标签组件</h3>`);
      _push(ssrRenderComponent(unref(Ts), { disabled: true }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Ds), {
              name: "all-dis1",
              title: "标签1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-4 bg-white dark:bg-gray-800 rounded-md" data-v-b80f9b13${_scopeId2}><p data-v-b80f9b13${_scopeId2}>这是标签1的内容（整个标签组已禁用）</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                      createVNode("p", null, "这是标签1的内容（整个标签组已禁用）")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ds), {
              name: "all-dis2",
              title: "标签2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-4 bg-white dark:bg-gray-800 rounded-md" data-v-b80f9b13${_scopeId2}><p data-v-b80f9b13${_scopeId2}>这是标签2的内容（整个标签组已禁用）</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                      createVNode("p", null, "这是标签2的内容（整个标签组已禁用）")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Ds), {
                name: "all-dis1",
                title: "标签1"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                    createVNode("p", null, "这是标签1的内容（整个标签组已禁用）")
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(Ds), {
                name: "all-dis2",
                title: "标签2"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                    createVNode("p", null, "这是标签2的内容（整个标签组已禁用）")
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section data-v-b80f9b13><h2 class="text-lg font-medium mb-3" data-v-b80f9b13>全宽模式</h2>`);
      _push(ssrRenderComponent(unref(Ts), { fullWidth: true }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Ds), {
              name: "full1",
              title: "标签1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-4 bg-white dark:bg-gray-800 rounded-md" data-v-b80f9b13${_scopeId2}><p data-v-b80f9b13${_scopeId2}>全宽模式标签内容</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                      createVNode("p", null, "全宽模式标签内容")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ds), {
              name: "full2",
              title: "标签2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-4 bg-white dark:bg-gray-800 rounded-md" data-v-b80f9b13${_scopeId2}><p data-v-b80f9b13${_scopeId2}>全宽模式标签内容</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                      createVNode("p", null, "全宽模式标签内容")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ds), {
              name: "full3",
              title: "标签3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-4 bg-white dark:bg-gray-800 rounded-md" data-v-b80f9b13${_scopeId2}><p data-v-b80f9b13${_scopeId2}>全宽模式标签内容</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                      createVNode("p", null, "全宽模式标签内容")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Ds), {
                name: "full1",
                title: "标签1"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                    createVNode("p", null, "全宽模式标签内容")
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(Ds), {
                name: "full2",
                title: "标签2"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                    createVNode("p", null, "全宽模式标签内容")
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(Ds), {
                name: "full3",
                title: "标签3"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-md" }, [
                    createVNode("p", null, "全宽模式标签内容")
                  ])
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
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tabs/example/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b80f9b13"]]);
export {
  index as default
};
