import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, createSlots, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { p as pd } from "./index.esm.BIucDlT0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const images = [
      "https://picsum.photos/id/1018/800/400",
      "https://picsum.photos/id/1015/800/400",
      "https://picsum.photos/id/1019/800/400",
      "https://picsum.photos/id/1016/800/400"
    ];
    const carouselRef = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8" }, _attrs))}><section><h3 class="text-lg font-medium mb-4">基础轮播</h3><div class="h-64">`);
      _push(ssrRenderComponent(unref(pd), null, {
        "item-0": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-full bg-blue-500 flex items-center justify-center text-white text-2xl"${_scopeId}> 幻灯片 1 </div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-full bg-blue-500 flex items-center justify-center text-white text-2xl" }, " 幻灯片 1 ")
            ];
          }
        }),
        "item-1": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-full bg-green-500 flex items-center justify-center text-white text-2xl"${_scopeId}> 幻灯片 2 </div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-full bg-green-500 flex items-center justify-center text-white text-2xl" }, " 幻灯片 2 ")
            ];
          }
        }),
        "item-2": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-full bg-red-500 flex items-center justify-center text-white text-2xl"${_scopeId}> 幻灯片 3 </div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-full bg-red-500 flex items-center justify-center text-white text-2xl" }, " 幻灯片 3 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h3 class="text-lg font-medium mb-4">自动播放</h3><div class="h-64">`);
      _push(ssrRenderComponent(unref(pd), {
        autoplay: true,
        interval: 3e3
      }, {
        "item-0": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-full bg-blue-500 flex items-center justify-center text-white text-2xl"${_scopeId}> 幻灯片 1 </div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-full bg-blue-500 flex items-center justify-center text-white text-2xl" }, " 幻灯片 1 ")
            ];
          }
        }),
        "item-1": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-full bg-green-500 flex items-center justify-center text-white text-2xl"${_scopeId}> 幻灯片 2 </div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-full bg-green-500 flex items-center justify-center text-white text-2xl" }, " 幻灯片 2 ")
            ];
          }
        }),
        "item-2": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-full bg-red-500 flex items-center justify-center text-white text-2xl"${_scopeId}> 幻灯片 3 </div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-full bg-red-500 flex items-center justify-center text-white text-2xl" }, " 幻灯片 3 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h3 class="text-lg font-medium mb-4">不同尺寸</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4"><div><p class="mb-2 text-sm text-gray-600">小尺寸 (sm)</p>`);
      _push(ssrRenderComponent(unref(pd), { size: "sm" }, {
        "item-0": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-full bg-blue-500 flex items-center justify-center text-white"${_scopeId}> 幻灯片 1 </div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-full bg-blue-500 flex items-center justify-center text-white" }, " 幻灯片 1 ")
            ];
          }
        }),
        "item-1": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-full bg-green-500 flex items-center justify-center text-white"${_scopeId}> 幻灯片 2 </div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-full bg-green-500 flex items-center justify-center text-white" }, " 幻灯片 2 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div><p class="mb-2 text-sm text-gray-600">中尺寸 (md)</p>`);
      _push(ssrRenderComponent(unref(pd), { size: "md" }, {
        "item-0": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-full bg-blue-500 flex items-center justify-center text-white"${_scopeId}> 幻灯片 1 </div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-full bg-blue-500 flex items-center justify-center text-white" }, " 幻灯片 1 ")
            ];
          }
        }),
        "item-1": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-full bg-green-500 flex items-center justify-center text-white"${_scopeId}> 幻灯片 2 </div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-full bg-green-500 flex items-center justify-center text-white" }, " 幻灯片 2 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div><p class="mb-2 text-sm text-gray-600">大尺寸 (lg)</p>`);
      _push(ssrRenderComponent(unref(pd), { size: "lg" }, {
        "item-0": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-full bg-blue-500 flex items-center justify-center text-white"${_scopeId}> 幻灯片 1 </div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-full bg-blue-500 flex items-center justify-center text-white" }, " 幻灯片 1 ")
            ];
          }
        }),
        "item-1": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-full bg-green-500 flex items-center justify-center text-white"${_scopeId}> 幻灯片 2 </div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-full bg-green-500 flex items-center justify-center text-white" }, " 幻灯片 2 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section><h3 class="text-lg font-medium mb-4">控制选项</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="h-48"><p class="mb-2 text-sm text-gray-600">无导航按钮</p>`);
      _push(ssrRenderComponent(unref(pd), { navigation: false }, {
        "item-0": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-full bg-blue-500 flex items-center justify-center text-white text-xl"${_scopeId}> 无导航按钮 </div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-full bg-blue-500 flex items-center justify-center text-white text-xl" }, " 无导航按钮 ")
            ];
          }
        }),
        "item-1": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-full bg-green-500 flex items-center justify-center text-white text-xl"${_scopeId}> 幻灯片 2 </div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-full bg-green-500 flex items-center justify-center text-white text-xl" }, " 幻灯片 2 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="h-48"><p class="mb-2 text-sm text-gray-600">无指示器</p>`);
      _push(ssrRenderComponent(unref(pd), { indicators: false }, {
        "item-0": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-full bg-blue-500 flex items-center justify-center text-white text-xl"${_scopeId}> 无指示器 </div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-full bg-blue-500 flex items-center justify-center text-white text-xl" }, " 无指示器 ")
            ];
          }
        }),
        "item-1": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-full bg-green-500 flex items-center justify-center text-white text-xl"${_scopeId}> 幻灯片 2 </div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-full bg-green-500 flex items-center justify-center text-white text-xl" }, " 幻灯片 2 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section><h3 class="text-lg font-medium mb-4">自定义导航图标</h3><div class="h-64">`);
      _push(ssrRenderComponent(unref(pd), null, {
        "item-0": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-full bg-blue-500 flex items-center justify-center text-white text-2xl"${_scopeId}> 幻灯片 1 </div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-full bg-blue-500 flex items-center justify-center text-white text-2xl" }, " 幻灯片 1 ")
            ];
          }
        }),
        "item-1": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-full bg-green-500 flex items-center justify-center text-white text-2xl"${_scopeId}> 幻灯片 2 </div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-full bg-green-500 flex items-center justify-center text-white text-2xl" }, " 幻灯片 2 ")
            ];
          }
        }),
        "item-2": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-full bg-red-500 flex items-center justify-center text-white text-2xl"${_scopeId}> 幻灯片 3 </div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-full bg-red-500 flex items-center justify-center text-white text-2xl" }, " 幻灯片 3 ")
            ];
          }
        }),
        "prev-icon": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                class: "h-6 w-6",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M15 19l-7-7 7-7"
                })
              ]))
            ];
          }
        }),
        "next-icon": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                class: "h-6 w-6",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M9 5l7 7-7 7"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h3 class="text-lg font-medium mb-4">图片轮播</h3><div class="h-64">`);
      _push(ssrRenderComponent(unref(pd), {
        autoplay: true,
        interval: 3e3
      }, createSlots({ _: 2 }, [
        renderList(images, (image, index) => {
          return {
            name: `item-${index}`,
            fn: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="w-full h-full"${_scopeId}><img${ssrRenderAttr("src", image)} class="w-full h-full object-cover"${ssrRenderAttr("alt", `图片 ${index + 1}`)}${_scopeId}></div>`);
              } else {
                return [
                  createVNode("div", { class: "w-full h-full" }, [
                    createVNode("img", {
                      src: image,
                      class: "w-full h-full object-cover",
                      alt: `图片 ${index + 1}`
                    }, null, 8, ["src", "alt"])
                  ])
                ];
              }
            })
          };
        })
      ]), _parent));
      _push(`</div></section><section><h3 class="text-lg font-medium mb-4">程序控制轮播</h3><div class="h-64 mb-4">`);
      _push(ssrRenderComponent(unref(pd), {
        ref_key: "carouselRef",
        ref: carouselRef,
        navigation: false
      }, {
        "item-0": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-full bg-blue-500 flex items-center justify-center text-white text-2xl"${_scopeId}> 幻灯片 1 </div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-full bg-blue-500 flex items-center justify-center text-white text-2xl" }, " 幻灯片 1 ")
            ];
          }
        }),
        "item-1": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-full bg-green-500 flex items-center justify-center text-white text-2xl"${_scopeId}> 幻灯片 2 </div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-full bg-green-500 flex items-center justify-center text-white text-2xl" }, " 幻灯片 2 ")
            ];
          }
        }),
        "item-2": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-full bg-red-500 flex items-center justify-center text-white text-2xl"${_scopeId}> 幻灯片 3 </div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-full bg-red-500 flex items-center justify-center text-white text-2xl" }, " 幻灯片 3 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex gap-2"><button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"> 上一项 </button><button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"> 下一项 </button><div class="flex gap-2 ml-4"><!--[-->`);
      ssrRenderList(3, (i) => {
        _push(`<button class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">${ssrInterpolate(i)}</button>`);
      });
      _push(`<!--]--></div></div></section><section><h3 class="text-lg font-medium mb-4">自定义样式</h3><div class="h-64">`);
      _push(ssrRenderComponent(unref(pd), {
        pt: {
          root: "rounded-lg shadow-xl overflow-hidden",
          prevButton: "bg-black/50 text-white",
          nextButton: "bg-black/50 text-white",
          indicator: "w-3 h-3 bg-gray-300",
          activeIndicator: "w-6 h-3 bg-white"
        },
        autoplay: true
      }, {
        "item-0": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-full bg-blue-500 flex items-center justify-center text-white text-2xl"${_scopeId}> 幻灯片 1 </div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-full bg-blue-500 flex items-center justify-center text-white text-2xl" }, " 幻灯片 1 ")
            ];
          }
        }),
        "item-1": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-full bg-green-500 flex items-center justify-center text-white text-2xl"${_scopeId}> 幻灯片 2 </div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-full bg-green-500 flex items-center justify-center text-white text-2xl" }, " 幻灯片 2 ")
            ];
          }
        }),
        "item-2": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-full bg-red-500 flex items-center justify-center text-white text-2xl"${_scopeId}> 幻灯片 3 </div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-full bg-red-500 flex items-center justify-center text-white text-2xl" }, " 幻灯片 3 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h3 class="text-lg font-medium mb-4">禁用状态</h3><div class="h-64">`);
      _push(ssrRenderComponent(unref(pd), { disabled: true }, {
        "item-0": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-full bg-blue-500 flex items-center justify-center text-white text-2xl"${_scopeId}> 已禁用轮播 </div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-full bg-blue-500 flex items-center justify-center text-white text-2xl" }, " 已禁用轮播 ")
            ];
          }
        }),
        "item-1": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-full bg-green-500 flex items-center justify-center text-white text-2xl"${_scopeId}> 幻灯片 2 </div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-full bg-green-500 flex items-center justify-center text-white text-2xl" }, " 幻灯片 2 ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/carousel/example/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
