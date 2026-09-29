import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { j as jn } from "./index.esm.BIucDlT0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedDate = ref(/* @__PURE__ */ new Date());
    const rangeDate = ref(/* @__PURE__ */ new Date());
    const today = /* @__PURE__ */ new Date();
    const minDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 7
    );
    const maxDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 7
    );
    const formatDate = ref(/* @__PURE__ */ new Date());
    const disabledDate = ref(/* @__PURE__ */ new Date());
    const readonlyDate = ref(/* @__PURE__ */ new Date());
    const nonClearableDate = ref(/* @__PURE__ */ new Date());
    const localeDate = ref(/* @__PURE__ */ new Date());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8" }, _attrs))}><section><h3 class="text-lg font-medium mb-4">基础用法</h3><div class="max-w-sm">`);
      _push(ssrRenderComponent(unref(jn), {
        modelValue: selectedDate.value,
        "onUpdate:modelValue": ($event) => selectedDate.value = $event
      }, null, _parent));
      _push(`</div><div class="mt-2"> 当前选择的日期: ${ssrInterpolate(selectedDate.value ? selectedDate.value.toLocaleDateString() : "未选择")}</div></section><section><h3 class="text-lg font-medium mb-4">日期范围限制</h3><div class="max-w-sm">`);
      _push(ssrRenderComponent(unref(jn), {
        modelValue: rangeDate.value,
        "onUpdate:modelValue": ($event) => rangeDate.value = $event,
        min: unref(minDate),
        max: unref(maxDate)
      }, null, _parent));
      _push(`</div><div class="mt-2"><div> 当前选择的日期: ${ssrInterpolate(rangeDate.value ? rangeDate.value.toLocaleDateString() : "未选择")}</div><div> 可选范围: ${ssrInterpolate(unref(minDate).toLocaleDateString())} 至 ${ssrInterpolate(unref(maxDate).toLocaleDateString())}</div></div></section><section><h3 class="text-lg font-medium mb-4">自定义格式</h3><div class="max-w-sm">`);
      _push(ssrRenderComponent(unref(jn), {
        modelValue: formatDate.value,
        "onUpdate:modelValue": ($event) => formatDate.value = $event,
        format: "yyyy年MM月dd日",
        placeholder: "请选择日期"
      }, null, _parent));
      _push(`</div><div class="mt-2"><div> 当前选择的日期: ${ssrInterpolate(formatDate.value ? formatDate.value.toLocaleDateString() : "未选择")}</div></div></section><section><h3 class="text-lg font-medium mb-4">禁用状态</h3><div class="flex flex-wrap gap-8"><div><div class="max-w-sm">`);
      _push(ssrRenderComponent(unref(jn), {
        modelValue: disabledDate.value,
        "onUpdate:modelValue": ($event) => disabledDate.value = $event,
        disabled: ""
      }, null, _parent));
      _push(`</div><div class="mt-2">禁用状态</div></div><div><div class="max-w-sm">`);
      _push(ssrRenderComponent(unref(jn), {
        modelValue: readonlyDate.value,
        "onUpdate:modelValue": ($event) => readonlyDate.value = $event,
        readonly: ""
      }, null, _parent));
      _push(`</div><div class="mt-2">只读状态</div></div></div></section><section><h3 class="text-lg font-medium mb-4">不可清空</h3><div class="max-w-sm">`);
      _push(ssrRenderComponent(unref(jn), {
        modelValue: nonClearableDate.value,
        "onUpdate:modelValue": ($event) => nonClearableDate.value = $event,
        clearable: false
      }, null, _parent));
      _push(`</div><div class="mt-2"><div> 当前选择的日期: ${ssrInterpolate(nonClearableDate.value ? nonClearableDate.value.toLocaleDateString() : "未选择")}</div></div></section><section><h3 class="text-lg font-medium mb-4">本地化</h3><div class="max-w-sm">`);
      _push(ssrRenderComponent(unref(jn), {
        modelValue: localeDate.value,
        "onUpdate:modelValue": ($event) => localeDate.value = $event,
        locale: "zh-CN"
      }, null, _parent));
      _push(`</div><div class="mt-2"><div> 当前选择的日期: ${ssrInterpolate(localeDate.value ? localeDate.value.toLocaleDateString() : "未选择")}</div><div>本地化: 中文</div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/datepicker/example/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
