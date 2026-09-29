import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { t as gr } from "./index.esm.BIucDlT0.js";
/* empty css             */
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const basicValue = ref(50);
    const rangeValue = ref(30);
    const stepValue = ref(25);
    const verticalValue = ref(60);
    const disabledValue = ref(70);
    const tooltipValue = ref(40);
    const customTooltipValue = ref(85);
    const formatTooltip = (value) => `${value}%`;
    const marksValue = ref(20);
    const customMarksValue = ref(25);
    const marks = {
      0: "0°C",
      25: "25°C",
      50: "50°C",
      75: "75°C",
      100: "100°C"
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-12" }, _attrs))}><section><h2 class="text-lg font-medium mb-4">基础用法</h2><div class="w-full max-w-md">`);
      _push(ssrRenderComponent(unref(gr), {
        modelValue: basicValue.value,
        "onUpdate:modelValue": ($event) => basicValue.value = $event
      }, null, _parent));
      _push(`<div class="mt-2 text-sm text-gray-500">当前值: ${ssrInterpolate(basicValue.value)}</div></div></section><section><h2 class="text-lg font-medium mb-4">设置最小值最大值</h2><div class="w-full max-w-md">`);
      _push(ssrRenderComponent(unref(gr), {
        modelValue: rangeValue.value,
        "onUpdate:modelValue": ($event) => rangeValue.value = $event,
        min: 20,
        max: 80
      }, null, _parent));
      _push(`<div class="mt-2 text-sm text-gray-500"> 当前值: ${ssrInterpolate(rangeValue.value)} (范围: 20-80) </div></div></section><section><h2 class="text-lg font-medium mb-4">设置步长</h2><div class="w-full max-w-md">`);
      _push(ssrRenderComponent(unref(gr), {
        modelValue: stepValue.value,
        "onUpdate:modelValue": ($event) => stepValue.value = $event,
        step: 25
      }, null, _parent));
      _push(`<div class="mt-2 text-sm text-gray-500"> 当前值: ${ssrInterpolate(stepValue.value)} (步长: 25) </div></div></section><section><h2 class="text-lg font-medium mb-4">垂直方向</h2><div class="h-64">`);
      _push(ssrRenderComponent(unref(gr), {
        modelValue: verticalValue.value,
        "onUpdate:modelValue": ($event) => verticalValue.value = $event,
        orientation: "vertical"
      }, null, _parent));
      _push(`<div class="mt-2 text-sm text-gray-500"> 当前值: ${ssrInterpolate(verticalValue.value)}</div></div></section><section><h2 class="text-lg font-medium mb-4">禁用状态</h2><div class="w-full max-w-md">`);
      _push(ssrRenderComponent(unref(gr), {
        modelValue: disabledValue.value,
        "onUpdate:modelValue": ($event) => disabledValue.value = $event,
        disabled: ""
      }, null, _parent));
      _push(`<div class="mt-2 text-sm text-gray-500"> 当前值: ${ssrInterpolate(disabledValue.value)}</div></div></section><section><h2 class="text-lg font-medium mb-4">显示提示</h2><div class="w-full max-w-md">`);
      _push(ssrRenderComponent(unref(gr), {
        modelValue: tooltipValue.value,
        "onUpdate:modelValue": ($event) => tooltipValue.value = $event,
        "show-tooltip": ""
      }, null, _parent));
      _push(`<div class="mt-2 text-sm text-gray-500">当前值: ${ssrInterpolate(tooltipValue.value)}</div></div></section><section><h2 class="text-lg font-medium mb-4">自定义提示</h2><div class="w-full max-w-md">`);
      _push(ssrRenderComponent(unref(gr), {
        modelValue: customTooltipValue.value,
        "onUpdate:modelValue": ($event) => customTooltipValue.value = $event,
        "show-tooltip": "",
        "format-tooltip": formatTooltip
      }, null, _parent));
      _push(`<div class="mt-2 text-sm text-gray-500"> 当前值: ${ssrInterpolate(formatTooltip(customTooltipValue.value))}</div></div></section><section><h2 class="text-lg font-medium mb-4">显示刻度</h2><div class="w-full max-w-md">`);
      _push(ssrRenderComponent(unref(gr), {
        modelValue: marksValue.value,
        "onUpdate:modelValue": ($event) => marksValue.value = $event,
        "show-marks": ""
      }, null, _parent));
      _push(`<div class="mt-2 text-sm text-gray-500">当前值: ${ssrInterpolate(marksValue.value)}</div></div></section><section><h2 class="text-lg font-medium mb-4">自定义刻度</h2><div class="w-full max-w-md">`);
      _push(ssrRenderComponent(unref(gr), {
        modelValue: customMarksValue.value,
        "onUpdate:modelValue": ($event) => customMarksValue.value = $event,
        "show-marks": "",
        marks
      }, null, _parent));
      _push(`<div class="mt-2 text-sm text-gray-500"> 当前值: ${ssrInterpolate(customMarksValue.value)}</div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/slider/example/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
