import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { g as lr } from "./index.esm.BIucDlT0.js";
/* empty css             */
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const basicValue = ref("选项1");
    const basicOptions = ["选项1", "选项2", "选项3"];
    const objectValue = ref("apple");
    const objectOptions = [
      { value: "apple", label: "苹果" },
      { value: "banana", label: "香蕉" },
      { value: "orange", label: "橙子" }
    ];
    const disabledOptionValue = ref("a");
    const disabledOptionOptions = [
      { value: "a", label: "选项A" },
      { value: "b", label: "选项B", disabled: true },
      { value: "c", label: "选项C" }
    ];
    const sizeValue = ref("md");
    const sizeOptions = [
      { value: "sm", label: "小号" },
      { value: "md", label: "中号" },
      { value: "lg", label: "大号" }
    ];
    const disabledValue = ref("1");
    const isDisabled = ref(false);
    const blockValue = ref("left");
    const blockOptions = [
      { value: "left", label: "左对齐" },
      { value: "center", label: "居中对齐" },
      { value: "right", label: "右对齐" }
    ];
    const numberValue = ref(1);
    const numberOptions = [1, 2, 3, 4, 5];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8" }, _attrs))}><section><h2 class="text-lg font-medium mb-4">基础用法</h2>`);
      _push(ssrRenderComponent(unref(lr), {
        modelValue: basicValue.value,
        "onUpdate:modelValue": ($event) => basicValue.value = $event,
        options: basicOptions
      }, null, _parent));
      _push(`<div class="mt-2 text-sm text-gray-500">当前选中: ${ssrInterpolate(basicValue.value)}</div></section><section><h2 class="text-lg font-medium mb-4">对象选项</h2>`);
      _push(ssrRenderComponent(unref(lr), {
        modelValue: objectValue.value,
        "onUpdate:modelValue": ($event) => objectValue.value = $event,
        options: objectOptions
      }, null, _parent));
      _push(`<div class="mt-2 text-sm text-gray-500">当前选中: ${ssrInterpolate(objectValue.value)}</div></section><section><h2 class="text-lg font-medium mb-4">禁用选项</h2>`);
      _push(ssrRenderComponent(unref(lr), {
        modelValue: disabledOptionValue.value,
        "onUpdate:modelValue": ($event) => disabledOptionValue.value = $event,
        options: disabledOptionOptions
      }, null, _parent));
      _push(`<div class="mt-2 text-sm text-gray-500"> 当前选中: ${ssrInterpolate(disabledOptionValue.value)}</div></section><section><h2 class="text-lg font-medium mb-4">不同大小</h2><div class="space-y-4"><div>`);
      _push(ssrRenderComponent(unref(lr), {
        modelValue: sizeValue.value,
        "onUpdate:modelValue": ($event) => sizeValue.value = $event,
        options: sizeOptions,
        size: "sm"
      }, null, _parent));
      _push(`<span class="ml-2 text-sm text-gray-500">小号 (sm)</span></div><div>`);
      _push(ssrRenderComponent(unref(lr), {
        modelValue: sizeValue.value,
        "onUpdate:modelValue": ($event) => sizeValue.value = $event,
        options: sizeOptions,
        size: "md"
      }, null, _parent));
      _push(`<span class="ml-2 text-sm text-gray-500">中号 (md)</span></div><div>`);
      _push(ssrRenderComponent(unref(lr), {
        modelValue: sizeValue.value,
        "onUpdate:modelValue": ($event) => sizeValue.value = $event,
        options: sizeOptions,
        size: "lg"
      }, null, _parent));
      _push(`<span class="ml-2 text-sm text-gray-500">大号 (lg)</span></div></div></section><section><h2 class="text-lg font-medium mb-4">禁用状态</h2><div class="space-y-4">`);
      _push(ssrRenderComponent(unref(lr), {
        modelValue: disabledValue.value,
        "onUpdate:modelValue": ($event) => disabledValue.value = $event,
        options: ["1", "2", "3"],
        disabled: isDisabled.value
      }, null, _parent));
      _push(`<div><button class="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">${ssrInterpolate(isDisabled.value ? "启用" : "禁用")}</button></div></div></section><section><h2 class="text-lg font-medium mb-4">块级显示</h2>`);
      _push(ssrRenderComponent(unref(lr), {
        modelValue: blockValue.value,
        "onUpdate:modelValue": ($event) => blockValue.value = $event,
        options: blockOptions,
        block: ""
      }, null, _parent));
      _push(`</section><section><h2 class="text-lg font-medium mb-4">数字选项</h2>`);
      _push(ssrRenderComponent(unref(lr), {
        modelValue: numberValue.value,
        "onUpdate:modelValue": ($event) => numberValue.value = $event,
        options: numberOptions
      }, null, _parent));
      _push(`<div class="mt-2 text-sm text-gray-500"> 当前选中: ${ssrInterpolate(numberValue.value)} (类型: ${ssrInterpolate(typeof numberValue.value)}) </div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/segmented/example/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
