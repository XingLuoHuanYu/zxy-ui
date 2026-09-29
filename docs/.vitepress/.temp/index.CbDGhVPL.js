import { defineComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { a as io } from "./index.esm.BIucDlT0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-8" }, _attrs))}><section><h2 class="mb-4 text-lg font-bold">基础分割线</h2>`);
      _push(ssrRenderComponent(unref(io), null, null, _parent));
      _push(`</section><section><h2 class="mb-4 text-lg font-bold">带文本的分割线</h2>`);
      _push(ssrRenderComponent(unref(io), { label: "文本内容" }, null, _parent));
      _push(`</section><section><h2 class="mb-4 text-lg font-bold">不同文本位置</h2>`);
      _push(ssrRenderComponent(unref(io), {
        label: "左侧文本",
        labelPosition: "start",
        class: "mb-4"
      }, null, _parent));
      _push(ssrRenderComponent(unref(io), {
        label: "居中文本",
        labelPosition: "center",
        class: "mb-4"
      }, null, _parent));
      _push(ssrRenderComponent(unref(io), {
        label: "右侧文本",
        labelPosition: "end"
      }, null, _parent));
      _push(`</section><section><h2 class="mb-4 text-lg font-bold">不同样式</h2>`);
      _push(ssrRenderComponent(unref(io), {
        variant: "solid",
        label: "实线",
        class: "mb-4"
      }, null, _parent));
      _push(ssrRenderComponent(unref(io), {
        variant: "dashed",
        label: "虚线",
        class: "mb-4"
      }, null, _parent));
      _push(ssrRenderComponent(unref(io), {
        variant: "dotted",
        label: "点线"
      }, null, _parent));
      _push(`</section><section><h2 class="mb-4 text-lg font-bold">不同粗细</h2>`);
      _push(ssrRenderComponent(unref(io), {
        size: "thin",
        label: "细线",
        class: "mb-4"
      }, null, _parent));
      _push(ssrRenderComponent(unref(io), {
        size: "medium",
        label: "中等",
        class: "mb-4"
      }, null, _parent));
      _push(ssrRenderComponent(unref(io), {
        size: "thick",
        label: "粗线"
      }, null, _parent));
      _push(`</section><section><h2 class="mb-4 text-lg font-bold">自定义颜色</h2>`);
      _push(ssrRenderComponent(unref(io), {
        color: "#1677ff",
        label: "蓝色",
        class: "mb-4"
      }, null, _parent));
      _push(ssrRenderComponent(unref(io), {
        color: "#52c41a",
        label: "绿色",
        class: "mb-4"
      }, null, _parent));
      _push(ssrRenderComponent(unref(io), {
        color: "#f5222d",
        label: "红色"
      }, null, _parent));
      _push(`</section><section><h2 class="mb-4 text-lg font-bold">垂直分割线</h2><div class="flex items-center h-20"><span>左侧文本</span>`);
      _push(ssrRenderComponent(unref(io), {
        orientation: "vertical",
        class: "mx-4 h-full"
      }, null, _parent));
      _push(`<span>右侧文本</span></div></section><section><h2 class="mb-4 text-lg font-bold">自定义渲染元素</h2><p class="mb-2">默认水平分割线 (hr元素)</p>`);
      _push(ssrRenderComponent(unref(io), { class: "mb-4" }, null, _parent));
      _push(`<p class="mb-2">自定义为span元素:</p>`);
      _push(ssrRenderComponent(unref(io), {
        as: "span",
        class: "mb-4"
      }, null, _parent));
      _push(`</section><section><h2 class="mb-4 text-lg font-bold">组合使用</h2><div class="flex items-center"><span>文本</span>`);
      _push(ssrRenderComponent(unref(io), {
        orientation: "vertical",
        variant: "dashed",
        class: "mx-4 h-6"
      }, null, _parent));
      _push(`<span>链接</span>`);
      _push(ssrRenderComponent(unref(io), {
        orientation: "vertical",
        variant: "dotted",
        color: "#1677ff",
        class: "mx-4 h-6"
      }, null, _parent));
      _push(`<span>按钮</span></div></section><section><h2 class="mb-4 text-lg font-bold">分割内容区域</h2><div class="p-4 border rounded"><p>上方内容区域</p>`);
      _push(ssrRenderComponent(unref(io), null, null, _parent));
      _push(`<p>下方内容区域</p></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/divider/example/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
