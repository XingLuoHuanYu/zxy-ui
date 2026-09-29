import { mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { u as Ri, C as Ei } from "./index.esm.BIucDlT0.js";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-8" }, _attrs))}><div class="space-y-2"><h3 class="text-lg font-medium">基础水平分割</h3>`);
      _push(ssrRenderComponent(unref(Ri), { class: "h-64 border border-gray-200 rounded" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Ei), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="h-full flex items-center justify-center bg-gray-50 p-4"${_scopeId2}><div class="text-center"${_scopeId2}><div class="text-xl font-medium mb-2"${_scopeId2}>左侧面板</div><p class="text-gray-500"${_scopeId2}>可拖动中间的分隔条调整面板大小</p></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "h-full flex items-center justify-center bg-gray-50 p-4" }, [
                      createVNode("div", { class: "text-center" }, [
                        createVNode("div", { class: "text-xl font-medium mb-2" }, "左侧面板"),
                        createVNode("p", { class: "text-gray-500" }, "可拖动中间的分隔条调整面板大小")
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ei), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="h-full flex items-center justify-center bg-gray-100 p-4"${_scopeId2}><div class="text-center"${_scopeId2}><div class="text-xl font-medium mb-2"${_scopeId2}>右侧面板</div><p class="text-gray-500"${_scopeId2}>基础水平分割面板示例</p></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "h-full flex items-center justify-center bg-gray-100 p-4" }, [
                      createVNode("div", { class: "text-center" }, [
                        createVNode("div", { class: "text-xl font-medium mb-2" }, "右侧面板"),
                        createVNode("p", { class: "text-gray-500" }, "基础水平分割面板示例")
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Ei), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "h-full flex items-center justify-center bg-gray-50 p-4" }, [
                    createVNode("div", { class: "text-center" }, [
                      createVNode("div", { class: "text-xl font-medium mb-2" }, "左侧面板"),
                      createVNode("p", { class: "text-gray-500" }, "可拖动中间的分隔条调整面板大小")
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(Ei), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "h-full flex items-center justify-center bg-gray-100 p-4" }, [
                    createVNode("div", { class: "text-center" }, [
                      createVNode("div", { class: "text-xl font-medium mb-2" }, "右侧面板"),
                      createVNode("p", { class: "text-gray-500" }, "基础水平分割面板示例")
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="space-y-2"><h3 class="text-lg font-medium">垂直分割</h3>`);
      _push(ssrRenderComponent(unref(Ri), {
        direction: "vertical",
        class: "h-64 border border-gray-200 rounded"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Ei), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="h-full flex items-center justify-center bg-gray-50 p-4"${_scopeId2}><div class="text-center"${_scopeId2}><div class="text-xl font-medium mb-2"${_scopeId2}>上部面板</div><p class="text-gray-500"${_scopeId2}>通过direction=&quot;vertical&quot;设置垂直分割</p></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "h-full flex items-center justify-center bg-gray-50 p-4" }, [
                      createVNode("div", { class: "text-center" }, [
                        createVNode("div", { class: "text-xl font-medium mb-2" }, "上部面板"),
                        createVNode("p", { class: "text-gray-500" }, '通过direction="vertical"设置垂直分割')
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ei), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="h-full flex items-center justify-center bg-gray-100 p-4"${_scopeId2}><div class="text-center"${_scopeId2}><div class="text-xl font-medium mb-2"${_scopeId2}>下部面板</div><p class="text-gray-500"${_scopeId2}>垂直拖动分隔条调整大小</p></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "h-full flex items-center justify-center bg-gray-100 p-4" }, [
                      createVNode("div", { class: "text-center" }, [
                        createVNode("div", { class: "text-xl font-medium mb-2" }, "下部面板"),
                        createVNode("p", { class: "text-gray-500" }, "垂直拖动分隔条调整大小")
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Ei), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "h-full flex items-center justify-center bg-gray-50 p-4" }, [
                    createVNode("div", { class: "text-center" }, [
                      createVNode("div", { class: "text-xl font-medium mb-2" }, "上部面板"),
                      createVNode("p", { class: "text-gray-500" }, '通过direction="vertical"设置垂直分割')
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(Ei), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "h-full flex items-center justify-center bg-gray-100 p-4" }, [
                    createVNode("div", { class: "text-center" }, [
                      createVNode("div", { class: "text-xl font-medium mb-2" }, "下部面板"),
                      createVNode("p", { class: "text-gray-500" }, "垂直拖动分隔条调整大小")
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="space-y-2"><h3 class="text-lg font-medium">多面板分割</h3>`);
      _push(ssrRenderComponent(unref(Ri), { class: "h-64 border border-gray-200 rounded" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Ei), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="h-full flex items-center justify-center bg-gray-50 p-4"${_scopeId2}><div class="text-center"${_scopeId2}><div class="text-xl font-medium"${_scopeId2}>面板 1</div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "h-full flex items-center justify-center bg-gray-50 p-4" }, [
                      createVNode("div", { class: "text-center" }, [
                        createVNode("div", { class: "text-xl font-medium" }, "面板 1")
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ei), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="h-full flex items-center justify-center bg-gray-100 p-4"${_scopeId2}><div class="text-center"${_scopeId2}><div class="text-xl font-medium"${_scopeId2}>面板 2</div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "h-full flex items-center justify-center bg-gray-100 p-4" }, [
                      createVNode("div", { class: "text-center" }, [
                        createVNode("div", { class: "text-xl font-medium" }, "面板 2")
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ei), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="h-full flex items-center justify-center bg-gray-200 p-4"${_scopeId2}><div class="text-center"${_scopeId2}><div class="text-xl font-medium"${_scopeId2}>面板 3</div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "h-full flex items-center justify-center bg-gray-200 p-4" }, [
                      createVNode("div", { class: "text-center" }, [
                        createVNode("div", { class: "text-xl font-medium" }, "面板 3")
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Ei), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "h-full flex items-center justify-center bg-gray-50 p-4" }, [
                    createVNode("div", { class: "text-center" }, [
                      createVNode("div", { class: "text-xl font-medium" }, "面板 1")
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(Ei), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "h-full flex items-center justify-center bg-gray-100 p-4" }, [
                    createVNode("div", { class: "text-center" }, [
                      createVNode("div", { class: "text-xl font-medium" }, "面板 2")
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(Ei), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "h-full flex items-center justify-center bg-gray-200 p-4" }, [
                    createVNode("div", { class: "text-center" }, [
                      createVNode("div", { class: "text-xl font-medium" }, "面板 3")
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="space-y-2"><h3 class="text-lg font-medium">嵌套分割面板</h3>`);
      _push(ssrRenderComponent(unref(Ri), { class: "h-64 border border-gray-200 rounded" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Ei), { size: "40%" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="h-full flex items-center justify-center bg-gray-50 p-4"${_scopeId2}><div class="text-center"${_scopeId2}><div class="text-xl font-medium mb-2"${_scopeId2}>左侧面板</div><p class="text-gray-500"${_scopeId2}>占据40%宽度</p></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "h-full flex items-center justify-center bg-gray-50 p-4" }, [
                      createVNode("div", { class: "text-center" }, [
                        createVNode("div", { class: "text-xl font-medium mb-2" }, "左侧面板"),
                        createVNode("p", { class: "text-gray-500" }, "占据40%宽度")
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ei), { size: "60%" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Ri), {
                    direction: "vertical",
                    class: "h-full"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Ei), { size: "60%" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="h-full flex items-center justify-center bg-gray-100 p-4"${_scopeId4}><div class="text-center"${_scopeId4}><div class="text-xl font-medium"${_scopeId4}>右上面板</div><p class="text-gray-500"${_scopeId4}>嵌套的垂直分割面板</p></div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "h-full flex items-center justify-center bg-gray-100 p-4" }, [
                                  createVNode("div", { class: "text-center" }, [
                                    createVNode("div", { class: "text-xl font-medium" }, "右上面板"),
                                    createVNode("p", { class: "text-gray-500" }, "嵌套的垂直分割面板")
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(Ei), { size: "40%" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="h-full flex items-center justify-center bg-gray-200 p-4"${_scopeId4}><div class="text-center"${_scopeId4}><div class="text-xl font-medium"${_scopeId4}>右下面板</div></div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "h-full flex items-center justify-center bg-gray-200 p-4" }, [
                                  createVNode("div", { class: "text-center" }, [
                                    createVNode("div", { class: "text-xl font-medium" }, "右下面板")
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Ei), { size: "60%" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "h-full flex items-center justify-center bg-gray-100 p-4" }, [
                                createVNode("div", { class: "text-center" }, [
                                  createVNode("div", { class: "text-xl font-medium" }, "右上面板"),
                                  createVNode("p", { class: "text-gray-500" }, "嵌套的垂直分割面板")
                                ])
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Ei), { size: "40%" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "h-full flex items-center justify-center bg-gray-200 p-4" }, [
                                createVNode("div", { class: "text-center" }, [
                                  createVNode("div", { class: "text-xl font-medium" }, "右下面板")
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Ri), {
                      direction: "vertical",
                      class: "h-full"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Ei), { size: "60%" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "h-full flex items-center justify-center bg-gray-100 p-4" }, [
                              createVNode("div", { class: "text-center" }, [
                                createVNode("div", { class: "text-xl font-medium" }, "右上面板"),
                                createVNode("p", { class: "text-gray-500" }, "嵌套的垂直分割面板")
                              ])
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Ei), { size: "40%" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "h-full flex items-center justify-center bg-gray-200 p-4" }, [
                              createVNode("div", { class: "text-center" }, [
                                createVNode("div", { class: "text-xl font-medium" }, "右下面板")
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Ei), { size: "40%" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "h-full flex items-center justify-center bg-gray-50 p-4" }, [
                    createVNode("div", { class: "text-center" }, [
                      createVNode("div", { class: "text-xl font-medium mb-2" }, "左侧面板"),
                      createVNode("p", { class: "text-gray-500" }, "占据40%宽度")
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(Ei), { size: "60%" }, {
                default: withCtx(() => [
                  createVNode(unref(Ri), {
                    direction: "vertical",
                    class: "h-full"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Ei), { size: "60%" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "h-full flex items-center justify-center bg-gray-100 p-4" }, [
                            createVNode("div", { class: "text-center" }, [
                              createVNode("div", { class: "text-xl font-medium" }, "右上面板"),
                              createVNode("p", { class: "text-gray-500" }, "嵌套的垂直分割面板")
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Ei), { size: "40%" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "h-full flex items-center justify-center bg-gray-200 p-4" }, [
                            createVNode("div", { class: "text-center" }, [
                              createVNode("div", { class: "text-xl font-medium" }, "右下面板")
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="space-y-2"><h3 class="text-lg font-medium">自定义配置</h3>`);
      _push(ssrRenderComponent(unref(Ri), {
        class: "h-64 border border-gray-200 rounded",
        "gutter-size": 10,
        panels: [
          { size: "30%", minSize: "20%", maxSize: "40%", collapsible: true },
          { size: "70%", minSize: "60%", resizable: true }
        ]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Ei), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="h-full flex items-center justify-center bg-gray-50 p-4"${_scopeId2}><div class="text-center"${_scopeId2}><div class="text-xl font-medium mb-2"${_scopeId2}>可折叠面板</div><p class="text-gray-500"${_scopeId2}>配置了最小尺寸20%和最大尺寸40%</p></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "h-full flex items-center justify-center bg-gray-50 p-4" }, [
                      createVNode("div", { class: "text-center" }, [
                        createVNode("div", { class: "text-xl font-medium mb-2" }, "可折叠面板"),
                        createVNode("p", { class: "text-gray-500" }, "配置了最小尺寸20%和最大尺寸40%")
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ei), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="h-full flex items-center justify-center bg-gray-100 p-4"${_scopeId2}><div class="text-center"${_scopeId2}><div class="text-xl font-medium mb-2"${_scopeId2}>主面板</div><p class="text-gray-500"${_scopeId2}>最小尺寸为60%</p></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "h-full flex items-center justify-center bg-gray-100 p-4" }, [
                      createVNode("div", { class: "text-center" }, [
                        createVNode("div", { class: "text-xl font-medium mb-2" }, "主面板"),
                        createVNode("p", { class: "text-gray-500" }, "最小尺寸为60%")
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Ei), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "h-full flex items-center justify-center bg-gray-50 p-4" }, [
                    createVNode("div", { class: "text-center" }, [
                      createVNode("div", { class: "text-xl font-medium mb-2" }, "可折叠面板"),
                      createVNode("p", { class: "text-gray-500" }, "配置了最小尺寸20%和最大尺寸40%")
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(Ei), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "h-full flex items-center justify-center bg-gray-100 p-4" }, [
                    createVNode("div", { class: "text-center" }, [
                      createVNode("div", { class: "text-xl font-medium mb-2" }, "主面板"),
                      createVNode("p", { class: "text-gray-500" }, "最小尺寸为60%")
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="space-y-2"><h3 class="text-lg font-medium">自定义样式</h3>`);
      _push(ssrRenderComponent(unref(Ri), {
        class: "h-64",
        pt: {
          root: "border border-gray-300 rounded-lg overflow-hidden",
          gutter: "bg-blue-500 hover:bg-blue-600 transition-colors",
          gutterHandler: "h-10 w-1.5 bg-white rounded-full"
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Ei), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="h-full flex items-center justify-center bg-gray-50 p-4"${_scopeId2}><div class="text-center"${_scopeId2}><div class="text-xl font-medium mb-2"${_scopeId2}>自定义样式面板</div><p class="text-gray-500"${_scopeId2}>通过pt属性自定义组件样式</p></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "h-full flex items-center justify-center bg-gray-50 p-4" }, [
                      createVNode("div", { class: "text-center" }, [
                        createVNode("div", { class: "text-xl font-medium mb-2" }, "自定义样式面板"),
                        createVNode("p", { class: "text-gray-500" }, "通过pt属性自定义组件样式")
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ei), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="h-full flex items-center justify-center bg-gray-100 p-4"${_scopeId2}><div class="text-center"${_scopeId2}><div class="text-xl font-medium mb-2"${_scopeId2}>自定义分割条</div><p class="text-gray-500"${_scopeId2}>蓝色分割条带有悬停效果</p></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "h-full flex items-center justify-center bg-gray-100 p-4" }, [
                      createVNode("div", { class: "text-center" }, [
                        createVNode("div", { class: "text-xl font-medium mb-2" }, "自定义分割条"),
                        createVNode("p", { class: "text-gray-500" }, "蓝色分割条带有悬停效果")
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Ei), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "h-full flex items-center justify-center bg-gray-50 p-4" }, [
                    createVNode("div", { class: "text-center" }, [
                      createVNode("div", { class: "text-xl font-medium mb-2" }, "自定义样式面板"),
                      createVNode("p", { class: "text-gray-500" }, "通过pt属性自定义组件样式")
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(Ei), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "h-full flex items-center justify-center bg-gray-100 p-4" }, [
                    createVNode("div", { class: "text-center" }, [
                      createVNode("div", { class: "text-xl font-medium mb-2" }, "自定义分割条"),
                      createVNode("p", { class: "text-gray-500" }, "蓝色分割条带有悬停效果")
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="space-y-2"><h3 class="text-lg font-medium">无样式模式</h3>`);
      _push(ssrRenderComponent(unref(Ri), {
        class: "h-64",
        unstyled: "",
        pt: {
          root: "flex border-2 border-dashed border-gray-300 rounded-xl overflow-hidden",
          panel: "flex-1",
          gutter: "w-2 bg-gray-50 hover:bg-gray-100 cursor-col-resize flex items-center justify-center",
          gutterHandler: "h-16 w-1 bg-gray-400 rounded"
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Ei), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="h-full flex items-center justify-center bg-gray-50 p-4"${_scopeId2}><div class="text-center"${_scopeId2}><div class="text-xl font-medium mb-2"${_scopeId2}>无样式模式</div><p class="text-gray-500"${_scopeId2}>使用unstyled属性移除默认样式</p></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "h-full flex items-center justify-center bg-gray-50 p-4" }, [
                      createVNode("div", { class: "text-center" }, [
                        createVNode("div", { class: "text-xl font-medium mb-2" }, "无样式模式"),
                        createVNode("p", { class: "text-gray-500" }, "使用unstyled属性移除默认样式")
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ei), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="h-full flex items-center justify-center bg-gray-100 p-4"${_scopeId2}><div class="text-center"${_scopeId2}><div class="text-xl font-medium mb-2"${_scopeId2}>完全自定义</div><p class="text-gray-500"${_scopeId2}>通过pt属性定义所有样式</p></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "h-full flex items-center justify-center bg-gray-100 p-4" }, [
                      createVNode("div", { class: "text-center" }, [
                        createVNode("div", { class: "text-xl font-medium mb-2" }, "完全自定义"),
                        createVNode("p", { class: "text-gray-500" }, "通过pt属性定义所有样式")
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Ei), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "h-full flex items-center justify-center bg-gray-50 p-4" }, [
                    createVNode("div", { class: "text-center" }, [
                      createVNode("div", { class: "text-xl font-medium mb-2" }, "无样式模式"),
                      createVNode("p", { class: "text-gray-500" }, "使用unstyled属性移除默认样式")
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(Ei), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "h-full flex items-center justify-center bg-gray-100 p-4" }, [
                    createVNode("div", { class: "text-center" }, [
                      createVNode("div", { class: "text-xl font-medium mb-2" }, "完全自定义"),
                      createVNode("p", { class: "text-gray-500" }, "通过pt属性定义所有样式")
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/splitter/example/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
