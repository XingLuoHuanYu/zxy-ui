import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { N as nl } from "./index.esm.BIucDlT0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedTime = ref("12:30");
    const time12h = ref("02:30 PM");
    const timeWithSeconds = ref("12:30:45");
    const timeWithSteps = ref("12:30:00");
    const disabledTime = ref("12:30");
    const readonlyTime = ref("12:30");
    const nonClearableTime = ref("12:30");
    const dateTime = ref(/* @__PURE__ */ new Date());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8" }, _attrs))}><section><h3 class="text-lg font-medium mb-4">基础用法</h3><div class="max-w-sm">`);
      _push(ssrRenderComponent(unref(nl), {
        modelValue: selectedTime.value,
        "onUpdate:modelValue": ($event) => selectedTime.value = $event
      }, null, _parent));
      _push(`</div><div class="mt-2">当前选择的时间: ${ssrInterpolate(selectedTime.value || "未选择")}</div></section><section><h3 class="text-lg font-medium mb-4">12小时制</h3><div class="max-w-sm">`);
      _push(ssrRenderComponent(unref(nl), {
        modelValue: time12h.value,
        "onUpdate:modelValue": ($event) => time12h.value = $event,
        format: "12h"
      }, null, _parent));
      _push(`</div><div class="mt-2">当前选择的时间: ${ssrInterpolate(time12h.value || "未选择")}</div></section><section><h3 class="text-lg font-medium mb-4">显示秒选择器</h3><div class="max-w-sm">`);
      _push(ssrRenderComponent(unref(nl), {
        modelValue: timeWithSeconds.value,
        "onUpdate:modelValue": ($event) => timeWithSeconds.value = $event,
        showSeconds: true
      }, null, _parent));
      _push(`</div><div class="mt-2">当前选择的时间: ${ssrInterpolate(timeWithSeconds.value || "未选择")}</div></section><section><h3 class="text-lg font-medium mb-4">自定义步长</h3><div class="max-w-sm">`);
      _push(ssrRenderComponent(unref(nl), {
        modelValue: timeWithSteps.value,
        "onUpdate:modelValue": ($event) => timeWithSteps.value = $event,
        hourStep: 2,
        minuteStep: 15,
        secondStep: 30,
        showSeconds: true
      }, null, _parent));
      _push(`</div><div class="mt-2"><div>当前选择的时间: ${ssrInterpolate(timeWithSteps.value || "未选择")}</div><div>小时步长: 2, 分钟步长: 15, 秒步长: 30</div></div></section><section><h3 class="text-lg font-medium mb-4">禁用状态</h3><div class="flex flex-wrap gap-8"><div><div class="max-w-sm">`);
      _push(ssrRenderComponent(unref(nl), {
        modelValue: disabledTime.value,
        "onUpdate:modelValue": ($event) => disabledTime.value = $event,
        disabled: ""
      }, null, _parent));
      _push(`</div><div class="mt-2">禁用状态</div></div><div><div class="max-w-sm">`);
      _push(ssrRenderComponent(unref(nl), {
        modelValue: readonlyTime.value,
        "onUpdate:modelValue": ($event) => readonlyTime.value = $event,
        readonly: ""
      }, null, _parent));
      _push(`</div><div class="mt-2">只读状态</div></div></div></section><section><h3 class="text-lg font-medium mb-4">不可清空</h3><div class="max-w-sm">`);
      _push(ssrRenderComponent(unref(nl), {
        modelValue: nonClearableTime.value,
        "onUpdate:modelValue": ($event) => nonClearableTime.value = $event,
        clearable: false
      }, null, _parent));
      _push(`</div><div class="mt-2"><div>当前选择的时间: ${ssrInterpolate(nonClearableTime.value || "未选择")}</div></div></section><section><h3 class="text-lg font-medium mb-4">使用Date对象</h3><div class="max-w-sm">`);
      _push(ssrRenderComponent(unref(nl), {
        modelValue: dateTime.value,
        "onUpdate:modelValue": ($event) => dateTime.value = $event
      }, null, _parent));
      _push(`</div><div class="mt-2"><div> 当前选择的时间: ${ssrInterpolate(dateTime.value ? dateTime.value.toLocaleTimeString() : "未选择")}</div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/timepicker/example/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
