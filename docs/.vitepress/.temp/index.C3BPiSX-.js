import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { O as us } from "./index.esm.BIucDlT0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedTime = ref("12:30");
    const customRangeTime = ref("09:00");
    const time12h = ref("02:30 PM");
    const customOptionsTime = ref("09:00");
    const customOptions = ["09:00", "12:00", "15:00", "18:00"];
    const disabledTime = ref("12:30");
    const readonlyTime = ref("12:30");
    const nonClearableTime = ref("12:30");
    const placeholderTime = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8" }, _attrs))}><section><h3 class="text-lg font-medium mb-4">基础用法</h3><div class="max-w-sm">`);
      _push(ssrRenderComponent(unref(us), {
        modelValue: selectedTime.value,
        "onUpdate:modelValue": ($event) => selectedTime.value = $event
      }, null, _parent));
      _push(`</div><div class="mt-2">当前选择的时间: ${ssrInterpolate(selectedTime.value || "未选择")}</div></section><section><h3 class="text-lg font-medium mb-4">自定义时间范围和步长</h3><div class="max-w-sm">`);
      _push(ssrRenderComponent(unref(us), {
        modelValue: customRangeTime.value,
        "onUpdate:modelValue": ($event) => customRangeTime.value = $event,
        start: "09:00",
        end: "18:00",
        step: 15
      }, null, _parent));
      _push(`</div><div class="mt-2"><div>当前选择的时间: ${ssrInterpolate(customRangeTime.value || "未选择")}</div><div>时间范围: 09:00 至 18:00，步长: 15分钟</div></div></section><section><h3 class="text-lg font-medium mb-4">12小时制</h3><div class="max-w-sm">`);
      _push(ssrRenderComponent(unref(us), {
        modelValue: time12h.value,
        "onUpdate:modelValue": ($event) => time12h.value = $event,
        format: "12h"
      }, null, _parent));
      _push(`</div><div class="mt-2">当前选择的时间: ${ssrInterpolate(time12h.value || "未选择")}</div></section><section><h3 class="text-lg font-medium mb-4">自定义选项</h3><div class="max-w-sm">`);
      _push(ssrRenderComponent(unref(us), {
        modelValue: customOptionsTime.value,
        "onUpdate:modelValue": ($event) => customOptionsTime.value = $event,
        options: customOptions
      }, null, _parent));
      _push(`</div><div class="mt-2"><div>当前选择的时间: ${ssrInterpolate(customOptionsTime.value || "未选择")}</div><div>自定义选项: ${ssrInterpolate(customOptions.join(", "))}</div></div></section><section><h3 class="text-lg font-medium mb-4">禁用状态</h3><div class="flex flex-wrap gap-8"><div><div class="max-w-sm">`);
      _push(ssrRenderComponent(unref(us), {
        modelValue: disabledTime.value,
        "onUpdate:modelValue": ($event) => disabledTime.value = $event,
        disabled: ""
      }, null, _parent));
      _push(`</div><div class="mt-2">禁用状态</div></div><div><div class="max-w-sm">`);
      _push(ssrRenderComponent(unref(us), {
        modelValue: readonlyTime.value,
        "onUpdate:modelValue": ($event) => readonlyTime.value = $event,
        readonly: ""
      }, null, _parent));
      _push(`</div><div class="mt-2">只读状态</div></div></div></section><section><h3 class="text-lg font-medium mb-4">不可清空</h3><div class="max-w-sm">`);
      _push(ssrRenderComponent(unref(us), {
        modelValue: nonClearableTime.value,
        "onUpdate:modelValue": ($event) => nonClearableTime.value = $event,
        clearable: false
      }, null, _parent));
      _push(`</div><div class="mt-2"><div>当前选择的时间: ${ssrInterpolate(nonClearableTime.value || "未选择")}</div></div></section><section><h3 class="text-lg font-medium mb-4">自定义占位文本</h3><div class="max-w-sm">`);
      _push(ssrRenderComponent(unref(us), {
        modelValue: placeholderTime.value,
        "onUpdate:modelValue": ($event) => placeholderTime.value = $event,
        placeholder: "请选择预约时间"
      }, null, _parent));
      _push(`</div><div class="mt-2"><div>当前选择的时间: ${ssrInterpolate(placeholderTime.value || "未选择")}</div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/timeselect/example/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
