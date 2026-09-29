import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { J as Jn } from "./index.esm.BIucDlT0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedDateTime = ref(/* @__PURE__ */ new Date());
    const rangeDateTime = ref(/* @__PURE__ */ new Date());
    const today = /* @__PURE__ */ new Date();
    const minDateTime = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 7
    );
    const maxDateTime = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 7
    );
    const time12hDateTime = ref(/* @__PURE__ */ new Date());
    const secondsDateTime = ref(/* @__PURE__ */ new Date());
    const stepsDateTime = ref(/* @__PURE__ */ new Date());
    const disabledDateTime = ref(/* @__PURE__ */ new Date());
    const readonlyDateTime = ref(/* @__PURE__ */ new Date());
    const nonClearableDateTime = ref(/* @__PURE__ */ new Date());
    const localeDateTime = ref(/* @__PURE__ */ new Date());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8" }, _attrs))}><section><h3 class="text-lg font-medium mb-4">基础用法</h3><div class="max-w-sm">`);
      _push(ssrRenderComponent(unref(Jn), {
        modelValue: selectedDateTime.value,
        "onUpdate:modelValue": ($event) => selectedDateTime.value = $event
      }, null, _parent));
      _push(`</div><div class="mt-2"> 当前选择的日期时间: ${ssrInterpolate(selectedDateTime.value ? selectedDateTime.value.toLocaleString() : "未选择")}</div></section><section><h3 class="text-lg font-medium mb-4">日期范围限制</h3><div class="max-w-sm">`);
      _push(ssrRenderComponent(unref(Jn), {
        modelValue: rangeDateTime.value,
        "onUpdate:modelValue": ($event) => rangeDateTime.value = $event,
        min: unref(minDateTime),
        max: unref(maxDateTime)
      }, null, _parent));
      _push(`</div><div class="mt-2"><div> 当前选择的日期时间: ${ssrInterpolate(rangeDateTime.value ? rangeDateTime.value.toLocaleString() : "未选择")}</div><div> 可选范围: ${ssrInterpolate(unref(minDateTime).toLocaleString())} 至 ${ssrInterpolate(unref(maxDateTime).toLocaleString())}</div></div></section><section><h3 class="text-lg font-medium mb-4">12小时制</h3><div class="max-w-sm">`);
      _push(ssrRenderComponent(unref(Jn), {
        modelValue: time12hDateTime.value,
        "onUpdate:modelValue": ($event) => time12hDateTime.value = $event,
        timeFormat: "12h"
      }, null, _parent));
      _push(`</div><div class="mt-2"><div> 当前选择的日期时间: ${ssrInterpolate(time12hDateTime.value ? time12hDateTime.value.toLocaleString() : "未选择")}</div></div></section><section><h3 class="text-lg font-medium mb-4">显示秒选择器</h3><div class="max-w-sm">`);
      _push(ssrRenderComponent(unref(Jn), {
        modelValue: secondsDateTime.value,
        "onUpdate:modelValue": ($event) => secondsDateTime.value = $event,
        showSeconds: true
      }, null, _parent));
      _push(`</div><div class="mt-2"><div> 当前选择的日期时间: ${ssrInterpolate(secondsDateTime.value ? secondsDateTime.value.toLocaleString() : "未选择")}</div></div></section><section><h3 class="text-lg font-medium mb-4">自定义步长</h3><div class="max-w-sm">`);
      _push(ssrRenderComponent(unref(Jn), {
        modelValue: stepsDateTime.value,
        "onUpdate:modelValue": ($event) => stepsDateTime.value = $event,
        hourStep: 2,
        minuteStep: 15,
        secondStep: 30,
        showSeconds: true
      }, null, _parent));
      _push(`</div><div class="mt-2"><div> 当前选择的日期时间: ${ssrInterpolate(stepsDateTime.value ? stepsDateTime.value.toLocaleString() : "未选择")}</div><div>小时步长: 2, 分钟步长: 15, 秒步长: 30</div></div></section><section><h3 class="text-lg font-medium mb-4">禁用状态</h3><div class="flex flex-wrap gap-8"><div><div class="max-w-sm">`);
      _push(ssrRenderComponent(unref(Jn), {
        modelValue: disabledDateTime.value,
        "onUpdate:modelValue": ($event) => disabledDateTime.value = $event,
        disabled: ""
      }, null, _parent));
      _push(`</div><div class="mt-2">禁用状态</div></div><div><div class="max-w-sm">`);
      _push(ssrRenderComponent(unref(Jn), {
        modelValue: readonlyDateTime.value,
        "onUpdate:modelValue": ($event) => readonlyDateTime.value = $event,
        readonly: ""
      }, null, _parent));
      _push(`</div><div class="mt-2">只读状态</div></div></div></section><section><h3 class="text-lg font-medium mb-4">不可清空</h3><div class="max-w-sm">`);
      _push(ssrRenderComponent(unref(Jn), {
        modelValue: nonClearableDateTime.value,
        "onUpdate:modelValue": ($event) => nonClearableDateTime.value = $event,
        clearable: false
      }, null, _parent));
      _push(`</div><div class="mt-2"><div> 当前选择的日期时间: ${ssrInterpolate(nonClearableDateTime.value ? nonClearableDateTime.value.toLocaleString() : "未选择")}</div></div></section><section><h3 class="text-lg font-medium mb-4">本地化</h3><div class="max-w-sm">`);
      _push(ssrRenderComponent(unref(Jn), {
        modelValue: localeDateTime.value,
        "onUpdate:modelValue": ($event) => localeDateTime.value = $event,
        locale: "zh-CN"
      }, null, _parent));
      _push(`</div><div class="mt-2"><div> 当前选择的日期时间: ${ssrInterpolate(localeDateTime.value ? localeDateTime.value.toLocaleString() : "未选择")}</div><div>本地化: 中文</div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/datetimepicker/example/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
