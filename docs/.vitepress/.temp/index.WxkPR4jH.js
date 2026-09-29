import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { E as Et } from "./index.esm.BIucDlT0.js";
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
    const weekStartDate = ref(/* @__PURE__ */ new Date());
    const disabledDate = ref(/* @__PURE__ */ new Date());
    const readonlyDate = ref(/* @__PURE__ */ new Date());
    const localeDate = ref(/* @__PURE__ */ new Date());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8" }, _attrs))}><section><h3 class="text-lg font-medium mb-4">基础用法</h3><div class="max-w-sm">`);
      _push(ssrRenderComponent(unref(Et), {
        modelValue: selectedDate.value,
        "onUpdate:modelValue": ($event) => selectedDate.value = $event
      }, null, _parent));
      _push(`</div><div class="mt-2"> 当前选择的日期: ${ssrInterpolate(selectedDate.value ? selectedDate.value.toLocaleDateString() : "未选择")}</div></section><section><h3 class="text-lg font-medium mb-4">日期范围限制</h3><div class="max-w-sm">`);
      _push(ssrRenderComponent(unref(Et), {
        modelValue: rangeDate.value,
        "onUpdate:modelValue": ($event) => rangeDate.value = $event,
        min: unref(minDate),
        max: unref(maxDate)
      }, null, _parent));
      _push(`</div><div class="mt-2"><div> 当前选择的日期: ${ssrInterpolate(rangeDate.value ? rangeDate.value.toLocaleDateString() : "未选择")}</div><div> 可选范围: ${ssrInterpolate(unref(minDate).toLocaleDateString())} 至 ${ssrInterpolate(unref(maxDate).toLocaleDateString())}</div></div></section><section><h3 class="text-lg font-medium mb-4">周起始日</h3><div class="max-w-sm">`);
      _push(ssrRenderComponent(unref(Et), {
        modelValue: weekStartDate.value,
        "onUpdate:modelValue": ($event) => weekStartDate.value = $event,
        firstDayOfWeek: 1
      }, null, _parent));
      _push(`</div><div class="mt-2"><div> 当前选择的日期: ${ssrInterpolate(weekStartDate.value ? weekStartDate.value.toLocaleDateString() : "未选择")}</div><div>周起始日: 周一</div></div></section><section><h3 class="text-lg font-medium mb-4">禁用状态</h3><div class="flex flex-wrap gap-8"><div><div class="max-w-sm">`);
      _push(ssrRenderComponent(unref(Et), {
        modelValue: disabledDate.value,
        "onUpdate:modelValue": ($event) => disabledDate.value = $event,
        disabled: ""
      }, null, _parent));
      _push(`</div><div class="mt-2">禁用状态</div></div><div><div class="max-w-sm">`);
      _push(ssrRenderComponent(unref(Et), {
        modelValue: readonlyDate.value,
        "onUpdate:modelValue": ($event) => readonlyDate.value = $event,
        readonly: ""
      }, null, _parent));
      _push(`</div><div class="mt-2">只读状态</div></div></div></section><section><h3 class="text-lg font-medium mb-4">本地化</h3><div class="max-w-sm">`);
      _push(ssrRenderComponent(unref(Et), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/calendar/example/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
