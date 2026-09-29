import { defineComponent, mergeProps, unref, useSSRContext, ref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { y as ys, h as hs, l as lo, s as ws } from "./index.esm.BIucDlT0.js";
/* empty css             */
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "basic",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div><h3 class="text-sm font-medium mb-2">基础骨架屏</h3>`);
      _push(ssrRenderComponent(unref(ys), {
        width: "100%",
        height: "100px"
      }, null, _parent));
      _push(`</div><div><h3 class="text-sm font-medium mb-2">带圆角的骨架屏</h3>`);
      _push(ssrRenderComponent(unref(ys), {
        width: "100%",
        height: "100px",
        rounded: true
      }, null, _parent));
      _push(`</div><div><h3 class="text-sm font-medium mb-2">脉冲动画 (pulse)</h3>`);
      _push(ssrRenderComponent(unref(ys), {
        width: "100%",
        height: "50px",
        animation: "pulse"
      }, null, _parent));
      _push(`<h3 class="text-sm font-medium mt-4 mb-2">波浪动画 (wave)</h3>`);
      _push(ssrRenderComponent(unref(ys), {
        width: "100%",
        height: "50px",
        animation: "wave"
      }, null, _parent));
      _push(`<h3 class="text-sm font-medium mt-4 mb-2">无动画 (none)</h3>`);
      _push(ssrRenderComponent(unref(ys), {
        width: "100%",
        height: "50px",
        animation: "none"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/skeleton/example/basic.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "text",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div><h3 class="text-sm font-medium mb-2">基础文本骨架屏</h3>`);
      _push(ssrRenderComponent(unref(hs), { lines: 3 }, null, _parent));
      _push(`</div><div><h3 class="text-sm font-medium mb-2">自定义行数 (5行)</h3>`);
      _push(ssrRenderComponent(unref(hs), { lines: 5 }, null, _parent));
      _push(`</div><div><h3 class="text-sm font-medium mb-2">自定义每行宽度</h3>`);
      _push(ssrRenderComponent(unref(hs), {
        lines: 4,
        widths: ["100%", "80%", "60%", "40%"]
      }, null, _parent));
      _push(`</div><div><h3 class="text-sm font-medium mb-2">自定义行高 (2rem)</h3>`);
      _push(ssrRenderComponent(unref(hs), {
        lines: 3,
        lineHeight: "2rem"
      }, null, _parent));
      _push(`</div><div><h3 class="text-sm font-medium mb-2">带圆角的文本骨架屏</h3>`);
      _push(ssrRenderComponent(unref(hs), {
        lines: 3,
        rounded: true
      }, null, _parent));
      _push(`</div><div><h3 class="text-sm font-medium mb-2">波浪动画效果</h3>`);
      _push(ssrRenderComponent(unref(hs), {
        lines: 3,
        animation: "wave"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/skeleton/example/text.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "combined",
  __ssrInlineRender: true,
  setup(__props) {
    const loading = ref(true);
    const toggleLoading = () => {
      loading.value = !loading.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="mb-4">`);
      _push(ssrRenderComponent(unref(lo), { onClick: toggleLoading }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(loading.value ? "显示内容" : "显示骨架屏")}`);
          } else {
            return [
              createTextVNode(toDisplayString(loading.value ? "显示内容" : "显示骨架屏"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div><h3 class="text-sm font-medium mb-2">卡片骨架屏</h3>`);
      _push(ssrRenderComponent(unref(ys), {
        loading: loading.value,
        class: "rounded-lg overflow-hidden"
      }, {
        skeleton: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-4 bg-white dark:bg-gray-800"${_scopeId}><div class="flex gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ws), { size: "lg" }, null, _parent2, _scopeId));
            _push2(`<div class="flex-1"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(hs), { lines: 2 }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(hs), { lines: 3 }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-4 bg-white dark:bg-gray-800" }, [
                createVNode("div", { class: "flex gap-4" }, [
                  createVNode(unref(ws), { size: "lg" }),
                  createVNode("div", { class: "flex-1" }, [
                    createVNode(unref(hs), { lines: 2 })
                  ])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(unref(hs), { lines: 3 })
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-4 bg-white dark:bg-gray-800 rounded-lg"${_scopeId}><div class="flex gap-4"${_scopeId}><div class="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white"${_scopeId}> VK </div><div class="flex-1"${_scopeId}><h3 class="font-medium"${_scopeId}>张三</h3><p class="text-sm text-gray-500"${_scopeId}>产品经理</p></div></div><div class="mt-4"${_scopeId}><p${_scopeId}> 这是一个用户卡片示例，展示了如何使用Skeleton组件创建加载占位符。 </p></div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-lg" }, [
                createVNode("div", { class: "flex gap-4" }, [
                  createVNode("div", { class: "h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white" }, " VK "),
                  createVNode("div", { class: "flex-1" }, [
                    createVNode("h3", { class: "font-medium" }, "张三"),
                    createVNode("p", { class: "text-sm text-gray-500" }, "产品经理")
                  ])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode("p", null, " 这是一个用户卡片示例，展示了如何使用Skeleton组件创建加载占位符。 ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div><h3 class="text-sm font-medium mb-2">列表骨架屏</h3>`);
      _push(ssrRenderComponent(unref(ys), {
        loading: loading.value,
        class: "rounded-lg overflow-hidden"
      }, {
        skeleton: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-4 bg-white dark:bg-gray-800"${_scopeId}><!--[-->`);
            ssrRenderList(3, (i) => {
              _push2(`<div class="${ssrRenderClass([{ "border-t dark:border-gray-700": i > 1 }, "flex items-center gap-3 py-3"])}"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(ws), { size: "sm" }, null, _parent2, _scopeId));
              _push2(`<div class="flex-1"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(hs), { lines: 1 }, null, _parent2, _scopeId));
              _push2(`</div><div class="w-16"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(ys), {
                width: "100%",
                height: "24px",
                rounded: true
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "p-4 bg-white dark:bg-gray-800" }, [
                (openBlock(), createBlock(Fragment, null, renderList(3, (i) => {
                  return createVNode("div", {
                    key: i,
                    class: ["flex items-center gap-3 py-3", { "border-t dark:border-gray-700": i > 1 }]
                  }, [
                    createVNode(unref(ws), { size: "sm" }),
                    createVNode("div", { class: "flex-1" }, [
                      createVNode(unref(hs), { lines: 1 })
                    ]),
                    createVNode("div", { class: "w-16" }, [
                      createVNode(unref(ys), {
                        width: "100%",
                        height: "24px",
                        rounded: true
                      })
                    ])
                  ], 2);
                }), 64))
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-4 bg-white dark:bg-gray-800 rounded-lg"${_scopeId}><!--[-->`);
            ssrRenderList(["张三", "李四", "王五"], (item, i) => {
              _push2(`<div class="${ssrRenderClass([{ "border-t dark:border-gray-700": i > 0 }, "flex items-center gap-3 py-3"])}"${_scopeId}><div class="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs"${_scopeId}>${ssrInterpolate(item.charAt(0))}</div><div class="flex-1"${_scopeId}><p${_scopeId}>${ssrInterpolate(item)}</p></div><div class="w-16"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(lo), {
                size: "xs",
                variant: "outline",
                fullWidth: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`查看`);
                  } else {
                    return [
                      createTextVNode("查看")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-lg" }, [
                (openBlock(), createBlock(Fragment, null, renderList(["张三", "李四", "王五"], (item, i) => {
                  return createVNode("div", {
                    key: i,
                    class: ["flex items-center gap-3 py-3", { "border-t dark:border-gray-700": i > 0 }]
                  }, [
                    createVNode("div", { class: "h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs" }, toDisplayString(item.charAt(0)), 1),
                    createVNode("div", { class: "flex-1" }, [
                      createVNode("p", null, toDisplayString(item), 1)
                    ]),
                    createVNode("div", { class: "w-16" }, [
                      createVNode(unref(lo), {
                        size: "xs",
                        variant: "outline",
                        fullWidth: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("查看")
                        ]),
                        _: 1
                      })
                    ])
                  ], 2);
                }), 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div><h3 class="text-sm font-medium mb-2">文章骨架屏</h3>`);
      _push(ssrRenderComponent(unref(ys), {
        loading: loading.value,
        class: "rounded-lg overflow-hidden"
      }, {
        skeleton: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-4 bg-white dark:bg-gray-800"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ys), {
              width: "60%",
              height: "32px",
              class: "mb-4",
              rounded: true
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex items-center gap-3 mb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ws), { size: "sm" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(hs), {
              lines: 1,
              widths: 120
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(ys), {
              width: "100%",
              height: "200px",
              class: "mb-4",
              rounded: true
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(hs), { lines: 6 }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "p-4 bg-white dark:bg-gray-800" }, [
                createVNode(unref(ys), {
                  width: "60%",
                  height: "32px",
                  class: "mb-4",
                  rounded: true
                }),
                createVNode("div", { class: "flex items-center gap-3 mb-6" }, [
                  createVNode(unref(ws), { size: "sm" }),
                  createVNode(unref(hs), {
                    lines: 1,
                    widths: 120
                  })
                ]),
                createVNode(unref(ys), {
                  width: "100%",
                  height: "200px",
                  class: "mb-4",
                  rounded: true
                }),
                createVNode(unref(hs), { lines: 6 })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-4 bg-white dark:bg-gray-800 rounded-lg"${_scopeId}><h2 class="text-2xl font-bold mb-4"${_scopeId}>如何使用Skeleton组件</h2><div class="flex items-center gap-3 mb-6"${_scopeId}><div class="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs"${_scopeId}> VK </div><p class="text-sm text-gray-500"${_scopeId}>张三 · 2023-10-25</p></div><div class="h-[200px] bg-gray-100 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center"${_scopeId}> [文章图片] </div><p class="mb-3"${_scopeId}> Skeleton组件是一种在内容加载过程中显示的占位符，它能够提升用户体验。 </p><p class="mb-3"${_scopeId}> 通过使用骨架屏，我们可以让用户在等待内容加载的过程中感知到页面的结构，减少用户的焦虑感。 </p><p${_scopeId}> ZxyUI提供了三种骨架屏组件：Skeleton、SkeletonText和SkeletonAvatar，可以根据不同的场景进行组合使用。 </p></div>`);
          } else {
            return [
              createVNode("div", { class: "p-4 bg-white dark:bg-gray-800 rounded-lg" }, [
                createVNode("h2", { class: "text-2xl font-bold mb-4" }, "如何使用Skeleton组件"),
                createVNode("div", { class: "flex items-center gap-3 mb-6" }, [
                  createVNode("div", { class: "h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs" }, " VK "),
                  createVNode("p", { class: "text-sm text-gray-500" }, "张三 · 2023-10-25")
                ]),
                createVNode("div", { class: "h-[200px] bg-gray-100 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center" }, " [文章图片] "),
                createVNode("p", { class: "mb-3" }, " Skeleton组件是一种在内容加载过程中显示的占位符，它能够提升用户体验。 "),
                createVNode("p", { class: "mb-3" }, " 通过使用骨架屏，我们可以让用户在等待内容加载的过程中感知到页面的结构，减少用户的焦虑感。 "),
                createVNode("p", null, " ZxyUI提供了三种骨架屏组件：Skeleton、SkeletonText和SkeletonAvatar，可以根据不同的场景进行组合使用。 ")
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/skeleton/example/combined.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ZAvatar = resolveComponent("ZAvatar");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-10" }, _attrs))}><div><h2 class="text-xl font-medium mb-4">基础骨架屏</h2>`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`</div><div><h2 class="text-xl font-medium mb-4">文本骨架屏</h2>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div><div><h2 class="text-xl font-medium mb-4">头像骨架屏</h2>`);
      _push(ssrRenderComponent(_component_ZAvatar, null, null, _parent));
      _push(`</div><div><h2 class="text-xl font-medium mb-4">组合示例</h2>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/skeleton/example/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
