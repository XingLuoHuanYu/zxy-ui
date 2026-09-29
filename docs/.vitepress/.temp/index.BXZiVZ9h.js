import { defineComponent, mergeProps, unref, withCtx, createVNode, createTextVNode, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { o as oo } from "./index.esm.BIucDlT0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8" }, _attrs))}><section><h3 class="text-lg font-medium mb-4">基础卡片</h3>`);
      _push(ssrRenderComponent(unref(oo), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>这是一个基础卡片，使用默认的样式和设置。</p>`);
          } else {
            return [
              createVNode("p", null, "这是一个基础卡片，使用默认的样式和设置。")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section><h3 class="text-lg font-medium mb-4"> 全局注册用法 <span class="text-sm text-gray-500">（z- 前缀）</span></h3><div class="grid grid-cols-1 md:grid-cols-2 gap-4">`);
      _push(ssrRenderComponent(unref(oo), { variant: "bordered" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="font-medium"${_scopeId}>z-card 全局组件</p><p class="text-gray-600"${_scopeId}> 执行 <code${_scopeId}>app.use(ZxyUI)</code> 后，无需 import 即可使用 <code${_scopeId}>&lt;z-card&gt;</code></p>`);
          } else {
            return [
              createVNode("p", { class: "font-medium" }, "z-card 全局组件"),
              createVNode("p", { class: "text-gray-600" }, [
                createTextVNode(" 执行 "),
                createVNode("code", null, "app.use(ZxyUI)"),
                createTextVNode(" 后，无需 import 即可使用 "),
                createVNode("code", null, "<z-card>")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(oo), {
        variant: "elevated",
        hover: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="font-medium"${_scopeId}>带阴影的 z-card</p><p class="text-gray-600"${_scopeId}>同样支持 variant / hover 等全部属性</p>`);
          } else {
            return [
              createVNode("p", { class: "font-medium" }, "带阴影的 z-card"),
              createVNode("p", { class: "text-gray-600" }, "同样支持 variant / hover 等全部属性")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h3 class="text-lg font-medium mb-4">变体样式</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(unref(oo), { variant: "default" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="font-medium"${_scopeId}>默认卡片</p><p class="text-gray-600"${_scopeId}>不带边框和阴影</p>`);
          } else {
            return [
              createVNode("p", { class: "font-medium" }, "默认卡片"),
              createVNode("p", { class: "text-gray-600" }, "不带边框和阴影")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(oo), { variant: "bordered" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="font-medium"${_scopeId}>带边框卡片</p><p class="text-gray-600"${_scopeId}>有边框的卡片</p>`);
          } else {
            return [
              createVNode("p", { class: "font-medium" }, "带边框卡片"),
              createVNode("p", { class: "text-gray-600" }, "有边框的卡片")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(oo), { variant: "elevated" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="font-medium"${_scopeId}>阴影卡片</p><p class="text-gray-600"${_scopeId}>带阴影效果的卡片</p>`);
          } else {
            return [
              createVNode("p", { class: "font-medium" }, "阴影卡片"),
              createVNode("p", { class: "text-gray-600" }, "带阴影效果的卡片")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h3 class="text-lg font-medium mb-4">内边距设置</h3><div class="flex flex-col gap-4">`);
      _push(ssrRenderComponent(unref(oo), {
        variant: "bordered",
        padding: "none",
        class: "overflow-hidden"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="https://picsum.photos/600/200" alt="无内边距卡片" class="w-full h-40 object-cover"${_scopeId}><div class="p-4"${_scopeId}><p class="font-medium"${_scopeId}>无内边距</p><p class="text-gray-600"${_scopeId}>内容可以自定义内边距</p></div>`);
          } else {
            return [
              createVNode("img", {
                src: "https://picsum.photos/600/200",
                alt: "无内边距卡片",
                class: "w-full h-40 object-cover"
              }),
              createVNode("div", { class: "p-4" }, [
                createVNode("p", { class: "font-medium" }, "无内边距"),
                createVNode("p", { class: "text-gray-600" }, "内容可以自定义内边距")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="grid grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(unref(oo), {
        variant: "bordered",
        padding: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="font-medium"${_scopeId}>小内边距</p>`);
          } else {
            return [
              createVNode("p", { class: "font-medium" }, "小内边距")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(oo), {
        variant: "bordered",
        padding: "md"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="font-medium"${_scopeId}>中内边距</p>`);
          } else {
            return [
              createVNode("p", { class: "font-medium" }, "中内边距")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(oo), {
        variant: "bordered",
        padding: "lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="font-medium"${_scopeId}>大内边距</p>`);
          } else {
            return [
              createVNode("p", { class: "font-medium" }, "大内边距")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section><h3 class="text-lg font-medium mb-4">圆角设置</h3><div class="grid grid-cols-1 md:grid-cols-5 gap-4">`);
      _push(ssrRenderComponent(unref(oo), {
        variant: "bordered",
        radius: "none"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="font-medium"${_scopeId}>无圆角</p>`);
          } else {
            return [
              createVNode("p", { class: "font-medium" }, "无圆角")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(oo), {
        variant: "bordered",
        radius: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="font-medium"${_scopeId}>小圆角</p>`);
          } else {
            return [
              createVNode("p", { class: "font-medium" }, "小圆角")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(oo), {
        variant: "bordered",
        radius: "md"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="font-medium"${_scopeId}>中圆角</p>`);
          } else {
            return [
              createVNode("p", { class: "font-medium" }, "中圆角")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(oo), {
        variant: "bordered",
        radius: "lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="font-medium"${_scopeId}>大圆角</p>`);
          } else {
            return [
              createVNode("p", { class: "font-medium" }, "大圆角")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(oo), {
        variant: "bordered",
        radius: "full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="font-medium"${_scopeId}>满圆角</p>`);
          } else {
            return [
              createVNode("p", { class: "font-medium" }, "满圆角")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h3 class="text-lg font-medium mb-4">悬停效果</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-4">`);
      _push(ssrRenderComponent(unref(oo), {
        variant: "bordered",
        hover: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="font-medium"${_scopeId}>悬停效果</p><p class="text-gray-600"${_scopeId}>鼠标悬停时会有阴影效果</p>`);
          } else {
            return [
              createVNode("p", { class: "font-medium" }, "悬停效果"),
              createVNode("p", { class: "text-gray-600" }, "鼠标悬停时会有阴影效果")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(oo), {
        variant: "elevated",
        hover: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="font-medium"${_scopeId}>增强阴影</p><p class="text-gray-600"${_scopeId}>悬停时阴影变大</p>`);
          } else {
            return [
              createVNode("p", { class: "font-medium" }, "增强阴影"),
              createVNode("p", { class: "text-gray-600" }, "悬停时阴影变大")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h3 class="text-lg font-medium mb-4">插槽使用</h3>`);
      _push(ssrRenderComponent(unref(oo), { variant: "bordered" }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-between items-center"${_scopeId}><h4 class="text-xl font-bold"${_scopeId}>卡片标题</h4><button class="text-gray-400 hover:text-gray-600"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"${_scopeId}></path></svg></button></div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-between items-center" }, [
                createVNode("h4", { class: "text-xl font-bold" }, "卡片标题"),
                createVNode("button", { class: "text-gray-400 hover:text-gray-600" }, [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    "stroke-width": "1.5",
                    stroke: "currentColor",
                    class: "w-5 h-5"
                  }, [
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      d: "M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    })
                  ]))
                ])
              ])
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex gap-2"${_scopeId}><button class="px-3 py-1 bg-primary-600 text-white rounded-md text-sm"${_scopeId}> 确认 </button><button class="px-3 py-1 border border-gray-300 rounded-md text-sm"${_scopeId}> 取消 </button></div>`);
          } else {
            return [
              createVNode("div", { class: "flex gap-2" }, [
                createVNode("button", { class: "px-3 py-1 bg-primary-600 text-white rounded-md text-sm" }, " 确认 "),
                createVNode("button", { class: "px-3 py-1 border border-gray-300 rounded-md text-sm" }, " 取消 ")
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-gray-600"${_scopeId}>这是卡片的主体内容区域，可以放置任何内容。</p><p class="mt-2"${_scopeId}>支持多个段落或复杂布局。</p>`);
          } else {
            return [
              createVNode("p", { class: "text-gray-600" }, "这是卡片的主体内容区域，可以放置任何内容。"),
              createVNode("p", { class: "mt-2" }, "支持多个段落或复杂布局。")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section><h3 class="text-lg font-medium mb-4">综合示例</h3><div class="flex flex-col gap-6">`);
      _push(ssrRenderComponent(unref(oo), {
        variant: "bordered",
        radius: "lg",
        hover: "",
        padding: "none",
        class: "overflow-hidden"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="https://picsum.photos/600/300" alt="产品图片" class="w-full h-48 object-cover"${_scopeId}><div class="p-4"${_scopeId}><h4 class="font-bold text-lg"${_scopeId}>产品标题</h4><p class="text-gray-600 mt-1"${_scopeId}>产品描述文字</p><div class="mt-4 flex justify-between items-center"${_scopeId}><span class="font-bold text-lg"${_scopeId}>¥199.00</span><button class="px-3 py-1 bg-primary-600 text-white rounded-md text-sm"${_scopeId}> 加入购物车 </button></div></div>`);
          } else {
            return [
              createVNode("img", {
                src: "https://picsum.photos/600/300",
                alt: "产品图片",
                class: "w-full h-48 object-cover"
              }),
              createVNode("div", { class: "p-4" }, [
                createVNode("h4", { class: "font-bold text-lg" }, "产品标题"),
                createVNode("p", { class: "text-gray-600 mt-1" }, "产品描述文字"),
                createVNode("div", { class: "mt-4 flex justify-between items-center" }, [
                  createVNode("span", { class: "font-bold text-lg" }, "¥199.00"),
                  createVNode("button", { class: "px-3 py-1 bg-primary-600 text-white rounded-md text-sm" }, " 加入购物车 ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(oo), {
        variant: "elevated",
        radius: "md",
        hover: ""
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h4 class="font-bold text-lg"${_scopeId}>文章标题</h4><div class="flex items-center gap-2 mt-1 text-sm text-gray-500"${_scopeId}><span${_scopeId}>作者名称</span><span${_scopeId}>•</span><span${_scopeId}>2023-06-15</span></div>`);
          } else {
            return [
              createVNode("h4", { class: "font-bold text-lg" }, "文章标题"),
              createVNode("div", { class: "flex items-center gap-2 mt-1 text-sm text-gray-500" }, [
                createVNode("span", null, "作者名称"),
                createVNode("span", null, "•"),
                createVNode("span", null, "2023-06-15")
              ])
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-between items-center w-full"${_scopeId}><div class="flex gap-3 text-gray-500"${_scopeId}><span class="flex items-center gap-1"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"${_scopeId}></path></svg> 128 </span><span class="flex items-center gap-1"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"${_scopeId}></path></svg> 36 </span></div><button class="text-primary-600 text-sm"${_scopeId}>阅读全文</button></div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-between items-center w-full" }, [
                createVNode("div", { class: "flex gap-3 text-gray-500" }, [
                  createVNode("span", { class: "flex items-center gap-1" }, [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      "stroke-width": "1.5",
                      stroke: "currentColor",
                      class: "w-4 h-4"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      })
                    ])),
                    createTextVNode(" 128 ")
                  ]),
                  createVNode("span", { class: "flex items-center gap-1" }, [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      "stroke-width": "1.5",
                      stroke: "currentColor",
                      class: "w-4 h-4"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                      })
                    ])),
                    createTextVNode(" 36 ")
                  ])
                ]),
                createVNode("button", { class: "text-primary-600 text-sm" }, "阅读全文")
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-gray-600"${_scopeId}> 这是文章摘要，简要介绍文章的主要内容和观点，吸引读者点击阅读全文... </p>`);
          } else {
            return [
              createVNode("p", { class: "text-gray-600" }, " 这是文章摘要，简要介绍文章的主要内容和观点，吸引读者点击阅读全文... ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(oo), {
        variant: "bordered",
        radius: "md"
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-between items-center"${_scopeId}><h4 class="font-bold"${_scopeId}>月度统计</h4><div class="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full"${_scopeId}> +12.5% </div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-between items-center" }, [
                createVNode("h4", { class: "font-bold" }, "月度统计"),
                createVNode("div", { class: "text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full" }, " +12.5% ")
              ])
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="w-full text-center text-sm text-primary-600"${_scopeId}> 查看详情 </button>`);
          } else {
            return [
              createVNode("button", { class: "w-full text-center text-sm text-primary-600" }, " 查看详情 ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-between items-center my-2"${_scopeId}><div${_scopeId}><div class="text-3xl font-bold"${_scopeId}>1,568</div><div class="text-sm text-gray-500"${_scopeId}>总访问量</div></div><div class="h-16 w-24 bg-gray-100 rounded"${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-between items-center my-2" }, [
                createVNode("div", null, [
                  createVNode("div", { class: "text-3xl font-bold" }, "1,568"),
                  createVNode("div", { class: "text-sm text-gray-500" }, "总访问量")
                ]),
                createVNode("div", { class: "h-16 w-24 bg-gray-100 rounded" })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/card/example/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
