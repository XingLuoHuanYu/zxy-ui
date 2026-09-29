import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _u } from "./index.esm.BIucDlT0.js";
/* empty css             */
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const isZoomed = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8" }, _attrs))}><section><h2 class="text-lg font-medium mb-4">基础用法</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><p class="mb-2 text-sm">默认图片：</p>`);
      _push(ssrRenderComponent(unref(_u), {
        src: "https://images.unsplash.com/photo-1682687982501-1e58ab814714",
        alt: "风景图片",
        width: "100%",
        height: "200px"
      }, null, _parent));
      _push(`</div><div><p class="mb-2 text-sm">不同填充模式：</p>`);
      _push(ssrRenderComponent(unref(_u), {
        src: "https://images.unsplash.com/photo-1682687982501-1e58ab814714",
        alt: "风景图片",
        width: "100%",
        height: "200px",
        fit: "contain"
      }, null, _parent));
      _push(`</div></div></section><section><h2 class="text-lg font-medium mb-4">模糊加载效果</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><p class="mb-2 text-sm">启用模糊加载：</p>`);
      _push(ssrRenderComponent(unref(_u), {
        src: "https://images.unsplash.com/photo-1682687982501-1e58ab814714",
        alt: "风景图片",
        width: "100%",
        height: "200px",
        blurred: true
      }, null, _parent));
      _push(`</div><div><p class="mb-2 text-sm">自定义模糊度：</p>`);
      _push(ssrRenderComponent(unref(_u), {
        src: "https://images.unsplash.com/photo-1682687982501-1e58ab814714",
        alt: "风景图片",
        width: "100%",
        height: "200px",
        blurred: true,
        blurAmount: 20
      }, null, _parent));
      _push(`</div></div></section><section><h2 class="text-lg font-medium mb-4">缩放功能</h2><div class="space-y-4"><div class="flex items-center gap-4"><button class="px-2 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700">${ssrInterpolate(isZoomed.value ? "取消缩放" : "缩放图片")}</button><span class="text-sm text-gray-500">点击按钮或图片切换缩放状态</span></div><div class="grid grid-cols-1 gap-6">`);
      _push(ssrRenderComponent(unref(_u), {
        src: "https://images.unsplash.com/photo-1682687982501-1e58ab814714",
        alt: "风景图片",
        width: "100%",
        height: "300px",
        isZoomable: true,
        isZoomed: isZoomed.value,
        zoomScale: 1.8,
        onZoom: ($event) => isZoomed.value = $event
      }, null, _parent));
      _push(`</div></div></section><section><h2 class="text-lg font-medium mb-4">骨架屏</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><p class="mb-2 text-sm">默认骨架屏：</p>`);
      _push(ssrRenderComponent(unref(_u), {
        src: "https://images.unsplash.com/photo-1682687982501-1e58ab814714",
        alt: "风景图片",
        width: "100%",
        height: "200px",
        skeleton: true
      }, null, _parent));
      _push(`</div><div><p class="mb-2 text-sm">自定义骨架屏颜色：</p>`);
      _push(ssrRenderComponent(unref(_u), {
        src: "https://images.unsplash.com/photo-1682687982501-1e58ab814714",
        alt: "风景图片",
        width: "100%",
        height: "200px",
        skeleton: true,
        skeletonColor: "#e0f2fe"
      }, null, _parent));
      _push(`</div></div></section><section><h2 class="text-lg font-medium mb-4">不同圆角</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div><p class="mb-2 text-sm">无圆角：</p>`);
      _push(ssrRenderComponent(unref(_u), {
        src: "https://images.unsplash.com/photo-1682687982501-1e58ab814714",
        alt: "风景图片",
        width: "100%",
        height: "150px",
        radius: "none"
      }, null, _parent));
      _push(`</div><div><p class="mb-2 text-sm">中等圆角（默认）：</p>`);
      _push(ssrRenderComponent(unref(_u), {
        src: "https://images.unsplash.com/photo-1682687982501-1e58ab814714",
        alt: "风景图片",
        width: "100%",
        height: "150px",
        radius: "md"
      }, null, _parent));
      _push(`</div><div><p class="mb-2 text-sm">大圆角：</p>`);
      _push(ssrRenderComponent(unref(_u), {
        src: "https://images.unsplash.com/photo-1682687982501-1e58ab814714",
        alt: "风景图片",
        width: "100%",
        height: "150px",
        radius: "xl"
      }, null, _parent));
      _push(`</div></div></section><section><h2 class="text-lg font-medium mb-4">错误状态</h2><div>`);
      _push(ssrRenderComponent(unref(_u), {
        src: "invalid-image-url.jpg",
        alt: "无效图片",
        width: "100%",
        height: "200px"
      }, null, _parent));
      _push(`</div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/image/example/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
