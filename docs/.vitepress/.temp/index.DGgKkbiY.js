import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { r as ri } from "./index.esm.BIucDlT0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const currentPage = ref(1);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8" }, _attrs))}><section><h3 class="text-lg font-medium mb-4">基础分页器</h3>`);
      _push(ssrRenderComponent(unref(ri), { totalPages: 10 }, null, _parent));
      _push(`</section><section><h3 class="text-lg font-medium mb-4">分页器大小</h3><div class="space-y-4"><div><p class="mb-2 text-sm text-gray-500">小尺寸</p>`);
      _push(ssrRenderComponent(unref(ri), {
        totalPages: 10,
        size: "sm"
      }, null, _parent));
      _push(`</div><div><p class="mb-2 text-sm text-gray-500">中尺寸</p>`);
      _push(ssrRenderComponent(unref(ri), {
        totalPages: 10,
        size: "md"
      }, null, _parent));
      _push(`</div><div><p class="mb-2 text-sm text-gray-500">大尺寸</p>`);
      _push(ssrRenderComponent(unref(ri), {
        totalPages: 10,
        size: "lg"
      }, null, _parent));
      _push(`</div></div></section><section><h3 class="text-lg font-medium mb-4">分页器变体</h3><div class="space-y-4"><div><p class="mb-2 text-sm text-gray-500">默认样式</p>`);
      _push(ssrRenderComponent(unref(ri), {
        totalPages: 10,
        variant: "default"
      }, null, _parent));
      _push(`</div><div><p class="mb-2 text-sm text-gray-500">轮廓样式</p>`);
      _push(ssrRenderComponent(unref(ri), {
        totalPages: 10,
        variant: "outline"
      }, null, _parent));
      _push(`</div><div><p class="mb-2 text-sm text-gray-500">文本样式</p>`);
      _push(ssrRenderComponent(unref(ri), {
        totalPages: 10,
        variant: "text"
      }, null, _parent));
      _push(`</div></div></section><section><h3 class="text-lg font-medium mb-4">分页器形状</h3><div class="space-y-4"><div><p class="mb-2 text-sm text-gray-500">方形</p>`);
      _push(ssrRenderComponent(unref(ri), {
        totalPages: 10,
        shape: "square"
      }, null, _parent));
      _push(`</div><div><p class="mb-2 text-sm text-gray-500">圆角</p>`);
      _push(ssrRenderComponent(unref(ri), {
        totalPages: 10,
        shape: "rounded"
      }, null, _parent));
      _push(`</div><div><p class="mb-2 text-sm text-gray-500">圆形</p>`);
      _push(ssrRenderComponent(unref(ri), {
        totalPages: 10,
        shape: "circle"
      }, null, _parent));
      _push(`</div></div></section><section><h3 class="text-lg font-medium mb-4">可见页码数量</h3><div class="space-y-4"><div><p class="mb-2 text-sm text-gray-500">显示3个页码</p>`);
      _push(ssrRenderComponent(unref(ri), {
        totalPages: 20,
        visiblePageCount: 3,
        modelValue: 10
      }, null, _parent));
      _push(`</div><div><p class="mb-2 text-sm text-gray-500">显示5个页码</p>`);
      _push(ssrRenderComponent(unref(ri), {
        totalPages: 20,
        visiblePageCount: 5,
        modelValue: 10
      }, null, _parent));
      _push(`</div></div></section><section><h3 class="text-lg font-medium mb-4">带页码跳转</h3>`);
      _push(ssrRenderComponent(unref(ri), {
        totalPages: 100,
        showJumper: ""
      }, null, _parent));
      _push(`</section><section><h3 class="text-lg font-medium mb-4">受控分页器</h3><div class="space-y-4"><p>当前页码: ${ssrInterpolate(currentPage.value)}</p>`);
      _push(ssrRenderComponent(unref(ri), {
        totalPages: 10,
        modelValue: currentPage.value,
        "onUpdate:modelValue": ($event) => currentPage.value = $event
      }, null, _parent));
      _push(`<div class="flex gap-2"><button class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"> 上一页 </button><button class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"> 下一页 </button></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/paginator/example/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
