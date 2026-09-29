import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { K as vo } from "./index.esm.BIucDlT0.js";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const basicValue = ref("");
    const limitedValue = ref("");
    const autosizeValue = ref("");
    const formValue = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-8" }, _attrs))}><section><h2 class="mb-4 text-lg font-bold">基础文本域</h2>`);
      _push(ssrRenderComponent(unref(vo), {
        modelValue: basicValue.value,
        "onUpdate:modelValue": ($event) => basicValue.value = $event,
        placeholder: "请输入内容..."
      }, null, _parent));
      _push(`</section><section><h2 class="mb-4 text-lg font-bold">不同尺寸</h2><div class="space-y-4">`);
      _push(ssrRenderComponent(unref(vo), {
        size: "sm",
        placeholder: "小尺寸"
      }, null, _parent));
      _push(ssrRenderComponent(unref(vo), {
        size: "md",
        placeholder: "中等尺寸（默认）"
      }, null, _parent));
      _push(ssrRenderComponent(unref(vo), {
        size: "lg",
        placeholder: "大尺寸"
      }, null, _parent));
      _push(`</div></section><section><h2 class="mb-4 text-lg font-bold">禁用状态</h2>`);
      _push(ssrRenderComponent(unref(vo), {
        disabled: "",
        placeholder: "禁用状态",
        value: "此文本域已被禁用"
      }, null, _parent));
      _push(`</section><section><h2 class="mb-4 text-lg font-bold">只读状态</h2>`);
      _push(ssrRenderComponent(unref(vo), {
        readonly: "",
        placeholder: "只读状态",
        value: "此文本域为只读"
      }, null, _parent));
      _push(`</section><section><h2 class="mb-4 text-lg font-bold">不同行数</h2><div class="space-y-4">`);
      _push(ssrRenderComponent(unref(vo), {
        rows: 2,
        placeholder: "2行"
      }, null, _parent));
      _push(ssrRenderComponent(unref(vo), {
        rows: 4,
        placeholder: "4行（默认）"
      }, null, _parent));
      _push(ssrRenderComponent(unref(vo), {
        rows: 6,
        placeholder: "6行"
      }, null, _parent));
      _push(`</div></section><section><h2 class="mb-4 text-lg font-bold">字数限制与统计</h2>`);
      _push(ssrRenderComponent(unref(vo), {
        modelValue: limitedValue.value,
        "onUpdate:modelValue": ($event) => limitedValue.value = $event,
        placeholder: "带字数限制的文本域",
        maxLength: 100,
        showCount: ""
      }, null, _parent));
      _push(`</section><section><h2 class="mb-4 text-lg font-bold">自动调整高度</h2>`);
      _push(ssrRenderComponent(unref(vo), {
        modelValue: autosizeValue.value,
        "onUpdate:modelValue": ($event) => autosizeValue.value = $event,
        placeholder: "随着输入内容增加自动调整高度",
        autosize: true
      }, null, _parent));
      _push(`</section><section><h2 class="mb-4 text-lg font-bold">调整大小方向</h2><div class="space-y-4">`);
      _push(ssrRenderComponent(unref(vo), {
        resize: "none",
        placeholder: "不可调整大小"
      }, null, _parent));
      _push(ssrRenderComponent(unref(vo), {
        resize: "horizontal",
        placeholder: "只能水平调整大小"
      }, null, _parent));
      _push(ssrRenderComponent(unref(vo), {
        resize: "vertical",
        placeholder: "只能垂直调整大小（默认）"
      }, null, _parent));
      _push(ssrRenderComponent(unref(vo), {
        resize: "both",
        placeholder: "可以水平和垂直调整大小"
      }, null, _parent));
      _push(`</div></section><section><h2 class="mb-4 text-lg font-bold">不同状态</h2><div class="space-y-4">`);
      _push(ssrRenderComponent(unref(vo), {
        status: "error",
        placeholder: "错误状态",
        value: "这是一条错误信息"
      }, null, _parent));
      _push(ssrRenderComponent(unref(vo), {
        status: "warning",
        placeholder: "警告状态",
        value: "这是一条警告信息"
      }, null, _parent));
      _push(ssrRenderComponent(unref(vo), {
        status: "success",
        placeholder: "成功状态",
        value: "这是一条成功信息"
      }, null, _parent));
      _push(`</div></section><section><h2 class="mb-4 text-lg font-bold">结合表单使用</h2><div class="space-y-4"><div><label class="block mb-1 font-medium">留言内容：</label>`);
      _push(ssrRenderComponent(unref(vo), {
        modelValue: formValue.value,
        "onUpdate:modelValue": ($event) => formValue.value = $event,
        placeholder: "请输入留言内容...",
        maxLength: 200,
        showCount: ""
      }, null, _parent));
      _push(`</div><button class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"> 提交 </button></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/textarea/example/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
