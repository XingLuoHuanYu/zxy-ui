import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { x as xu } from "./index.esm.BIucDlT0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const tagValue = ref([]);
    const presetTags = ref(["JavaScript", "Vue", "React"]);
    const sizeTags = ref(["小", "中", "大"]);
    const prefixTags = ref(["前缀示例"]);
    const suffixTags = ref(["后缀示例"]);
    const maxCountTags = ref(["限制数量"]);
    const fixedTags = ref(["固定标签1", "固定标签2"]);
    const statusTags = ref(["状态示例"]);
    const disabledTags = ref(["禁用标签"]);
    const readonlyTags = ref(["只读标签"]);
    const customTags = ref(["自定义", "样式"]);
    const unstyledTags = ref(["完全", "自定义"]);
    const article = ref({
      title: "",
      tags: ["Vue3", "TypeScript"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8" }, _attrs))}><section><h2 class="text-lg font-medium mb-4">基础用法</h2><div class="max-w-md">`);
      _push(ssrRenderComponent(unref(xu), {
        modelValue: tagValue.value,
        "onUpdate:modelValue": ($event) => tagValue.value = $event,
        placeholder: "请输入标签后按回车"
      }, null, _parent));
      _push(`<div class="text-sm text-gray-500 mt-2"> 当前标签值: ${ssrInterpolate(tagValue.value.join(", ") || "空")}</div></div></section><section><h2 class="text-lg font-medium mb-4">预设标签</h2><div class="max-w-md">`);
      _push(ssrRenderComponent(unref(xu), {
        modelValue: presetTags.value,
        "onUpdate:modelValue": ($event) => presetTags.value = $event,
        placeholder: "请输入更多标签"
      }, null, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">不同尺寸</h2><div class="grid grid-cols-1 gap-4 max-w-md">`);
      _push(ssrRenderComponent(unref(xu), {
        modelValue: sizeTags.value,
        "onUpdate:modelValue": ($event) => sizeTags.value = $event,
        size: "small",
        placeholder: "小型标签输入框"
      }, null, _parent));
      _push(ssrRenderComponent(unref(xu), {
        modelValue: sizeTags.value,
        "onUpdate:modelValue": ($event) => sizeTags.value = $event,
        size: "default",
        placeholder: "默认尺寸标签输入框"
      }, null, _parent));
      _push(ssrRenderComponent(unref(xu), {
        modelValue: sizeTags.value,
        "onUpdate:modelValue": ($event) => sizeTags.value = $event,
        size: "large",
        placeholder: "大型标签输入框"
      }, null, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">前缀和后缀</h2><div class="grid grid-cols-1 gap-4 max-w-md">`);
      _push(ssrRenderComponent(unref(xu), {
        modelValue: prefixTags.value,
        "onUpdate:modelValue": ($event) => prefixTags.value = $event,
        placeholder: "带前缀"
      }, {
        prefix: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`标签:`);
          } else {
            return [
              createTextVNode("标签:")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(xu), {
        modelValue: suffixTags.value,
        "onUpdate:modelValue": ($event) => suffixTags.value = $event,
        placeholder: "带后缀"
      }, {
        suffix: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`+`);
          } else {
            return [
              createTextVNode("+")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">最大数量和计数</h2><div class="max-w-md">`);
      _push(ssrRenderComponent(unref(xu), {
        modelValue: maxCountTags.value,
        "onUpdate:modelValue": ($event) => maxCountTags.value = $event,
        maxCount: 5,
        showCount: "",
        placeholder: "最多添加5个标签"
      }, null, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">不可关闭标签</h2><div class="max-w-md">`);
      _push(ssrRenderComponent(unref(xu), {
        modelValue: fixedTags.value,
        "onUpdate:modelValue": ($event) => fixedTags.value = $event,
        closable: false,
        placeholder: "标签不可删除"
      }, null, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">不同状态</h2><div class="grid grid-cols-1 gap-4 max-w-md">`);
      _push(ssrRenderComponent(unref(xu), {
        modelValue: statusTags.value,
        "onUpdate:modelValue": ($event) => statusTags.value = $event,
        status: "error",
        placeholder: "错误状态"
      }, null, _parent));
      _push(ssrRenderComponent(unref(xu), {
        modelValue: statusTags.value,
        "onUpdate:modelValue": ($event) => statusTags.value = $event,
        status: "warning",
        placeholder: "警告状态"
      }, null, _parent));
      _push(ssrRenderComponent(unref(xu), {
        modelValue: statusTags.value,
        "onUpdate:modelValue": ($event) => statusTags.value = $event,
        status: "success",
        placeholder: "成功状态"
      }, null, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">禁用和只读</h2><div class="grid grid-cols-1 gap-4 max-w-md">`);
      _push(ssrRenderComponent(unref(xu), {
        modelValue: disabledTags.value,
        "onUpdate:modelValue": ($event) => disabledTags.value = $event,
        disabled: "",
        placeholder: "禁用状态"
      }, null, _parent));
      _push(ssrRenderComponent(unref(xu), {
        modelValue: readonlyTags.value,
        "onUpdate:modelValue": ($event) => readonlyTags.value = $event,
        readonly: "",
        placeholder: "只读状态"
      }, null, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">自定义样式 (PT)</h2><div class="max-w-md">`);
      _push(ssrRenderComponent(unref(xu), {
        modelValue: customTags.value,
        "onUpdate:modelValue": ($event) => customTags.value = $event,
        placeholder: "自定义样式",
        pt: {
          wrapper: "border-purple-500 focus-within:border-purple-700 focus-within:ring-purple-200",
          tag: "bg-purple-100 text-purple-800 border border-purple-300",
          tagClose: "text-purple-800 hover:text-purple-950"
        }
      }, null, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">无样式模式</h2><div class="max-w-md">`);
      _push(ssrRenderComponent(unref(xu), {
        modelValue: unstyledTags.value,
        "onUpdate:modelValue": ($event) => unstyledTags.value = $event,
        placeholder: "自定义所有样式",
        unstyled: "",
        pt: {
          root: "w-full",
          wrapper: "bg-gradient-to-r from-blue-500 to-purple-500 p-0.5 rounded-md flex flex-wrap items-center",
          input: "px-3 py-1 bg-white flex-grow outline-none rounded-sm",
          tag: "bg-blue-100 text-blue-800 rounded-full px-3 py-1 m-1 flex items-center",
          tagClose: "ml-1 text-blue-500 hover:text-blue-700 font-bold"
        }
      }, null, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">实际应用案例: 文章标签</h2><div class="max-w-lg border p-4 rounded-md shadow-sm bg-white"><div class="mb-4"><label class="block text-sm font-medium text-gray-700 mb-1"> 文章标题 </label><input type="text"${ssrRenderAttr("value", article.value.title)} class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="请输入文章标题"></div><div class="mb-4"><label class="block text-sm font-medium text-gray-700 mb-1"> 文章标签 <span class="text-xs text-gray-500">(最多5个)</span></label>`);
      _push(ssrRenderComponent(unref(xu), {
        modelValue: article.value.tags,
        "onUpdate:modelValue": ($event) => article.value.tags = $event,
        maxCount: 5,
        showCount: "",
        placeholder: "输入标签后按回车"
      }, null, _parent));
      _push(`</div><div><button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"${ssrIncludeBooleanAttr(!article.value.title || article.value.tags.length === 0) ? " disabled" : ""}> 发布文章 </button></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/inputtag/example/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
