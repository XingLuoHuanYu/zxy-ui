import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { V as Va } from "./index.esm.BIucDlT0.js";
/* empty css             */
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const imageError = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8" }, _attrs))}><section><h2 class="text-lg font-medium mb-4">基础用法</h2><div class="flex gap-6 items-center">`);
      _push(ssrRenderComponent(unref(Va), {
        src: "https://randomuser.me/api/portraits/men/1.jpg",
        alt: "用户头像"
      }, null, _parent));
      _push(ssrRenderComponent(unref(Va), {
        src: "https://randomuser.me/api/portraits/women/1.jpg",
        alt: "用户头像"
      }, null, _parent));
      _push(ssrRenderComponent(unref(Va), { alt: "张三" }, null, _parent));
      _push(ssrRenderComponent(unref(Va), null, null, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">不同大小</h2><div class="flex gap-6 items-end">`);
      _push(ssrRenderComponent(unref(Va), {
        src: "https://randomuser.me/api/portraits/men/2.jpg",
        alt: "用户头像",
        size: "xs"
      }, null, _parent));
      _push(ssrRenderComponent(unref(Va), {
        src: "https://randomuser.me/api/portraits/men/3.jpg",
        alt: "用户头像",
        size: "sm"
      }, null, _parent));
      _push(ssrRenderComponent(unref(Va), {
        src: "https://randomuser.me/api/portraits/men/4.jpg",
        alt: "用户头像",
        size: "md"
      }, null, _parent));
      _push(ssrRenderComponent(unref(Va), {
        src: "https://randomuser.me/api/portraits/men/5.jpg",
        alt: "用户头像",
        size: "lg"
      }, null, _parent));
      _push(ssrRenderComponent(unref(Va), {
        src: "https://randomuser.me/api/portraits/men/6.jpg",
        alt: "用户头像",
        size: "xl"
      }, null, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">不同形状</h2><div class="flex gap-6 items-center">`);
      _push(ssrRenderComponent(unref(Va), {
        src: "https://randomuser.me/api/portraits/men/7.jpg",
        alt: "用户头像",
        shape: "circle"
      }, null, _parent));
      _push(ssrRenderComponent(unref(Va), {
        src: "https://randomuser.me/api/portraits/men/8.jpg",
        alt: "用户头像",
        shape: "square"
      }, null, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">状态指示器</h2><div class="flex gap-6 items-center">`);
      _push(ssrRenderComponent(unref(Va), {
        src: "https://randomuser.me/api/portraits/women/2.jpg",
        alt: "用户头像",
        status: "online"
      }, null, _parent));
      _push(ssrRenderComponent(unref(Va), {
        src: "https://randomuser.me/api/portraits/women/3.jpg",
        alt: "用户头像",
        status: "offline"
      }, null, _parent));
      _push(ssrRenderComponent(unref(Va), {
        src: "https://randomuser.me/api/portraits/women/4.jpg",
        alt: "用户头像",
        status: "away"
      }, null, _parent));
      _push(ssrRenderComponent(unref(Va), {
        src: "https://randomuser.me/api/portraits/women/5.jpg",
        alt: "用户头像",
        status: "busy"
      }, null, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">回退显示</h2><div class="flex flex-col space-y-4"><div class="flex items-center gap-4"><button class="px-2 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700">${ssrInterpolate(imageError.value ? "加载正确图片" : "模拟加载失败")}</button><span class="text-sm text-gray-500">点击按钮切换图片加载状态</span></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div><p class="mb-2 text-sm">图片加载失败时显示文字缩写：</p>`);
      _push(ssrRenderComponent(unref(Va), {
        src: imageError.value ? "invalid-url.jpg" : "https://randomuser.me/api/portraits/men/9.jpg",
        alt: "李四"
      }, null, _parent));
      _push(`</div><div><p class="mb-2 text-sm">图片加载失败时显示备用图片：</p>`);
      _push(ssrRenderComponent(unref(Va), {
        src: imageError.value ? "invalid-url.jpg" : "https://randomuser.me/api/portraits/men/10.jpg",
        alt: "王五",
        fallback: "https://via.placeholder.com/150/CCCCCC/808080?text=Fallback"
      }, null, _parent));
      _push(`</div><div><p class="mb-2 text-sm">图片加载失败时显示默认图标：</p>`);
      _push(ssrRenderComponent(unref(Va), {
        src: imageError.value ? "invalid-url.jpg" : "https://randomuser.me/api/portraits/men/11.jpg"
      }, null, _parent));
      _push(`</div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/avatar/example/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
