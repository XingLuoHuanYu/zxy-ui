import { defineComponent, ref, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { P as Pa } from "./index.esm.BIucDlT0.js";
/* empty css             */
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const enabled = ref(false);
    const sizeEnabled = ref({
      small: true,
      default: true,
      large: true
    });
    const colorEnabled = ref({
      blue: true,
      green: true,
      red: true,
      yellow: true,
      purple: true
    });
    const animationSwitches = ref([false, false, false, false, false]);
    const allEnabled = computed(
      () => animationSwitches.value.every((state) => state === true)
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8" }, _attrs))}><section><h2 class="text-lg font-medium mb-4">基础用法</h2><div class="flex items-center space-x-4">`);
      _push(ssrRenderComponent(unref(Pa), {
        modelValue: enabled.value,
        "onUpdate:modelValue": ($event) => enabled.value = $event
      }, null, _parent));
      _push(`<span class="text-sm">${ssrInterpolate(enabled.value ? "开启" : "关闭")}</span></div></section><section><h2 class="text-lg font-medium mb-4">不同尺寸</h2><div class="flex items-center space-x-8"><div class="flex flex-col items-center space-y-2">`);
      _push(ssrRenderComponent(unref(Pa), {
        modelValue: sizeEnabled.value.small,
        "onUpdate:modelValue": ($event) => sizeEnabled.value.small = $event,
        size: "small"
      }, null, _parent));
      _push(`<span class="text-sm">小型</span></div><div class="flex flex-col items-center space-y-2">`);
      _push(ssrRenderComponent(unref(Pa), {
        modelValue: sizeEnabled.value.default,
        "onUpdate:modelValue": ($event) => sizeEnabled.value.default = $event
      }, null, _parent));
      _push(`<span class="text-sm">默认</span></div><div class="flex flex-col items-center space-y-2">`);
      _push(ssrRenderComponent(unref(Pa), {
        modelValue: sizeEnabled.value.large,
        "onUpdate:modelValue": ($event) => sizeEnabled.value.large = $event,
        size: "large"
      }, null, _parent));
      _push(`<span class="text-sm">大型</span></div></div></section><section><h2 class="text-lg font-medium mb-4">不同颜色</h2><div class="grid grid-cols-5 gap-6"><div class="flex flex-col items-center space-y-2">`);
      _push(ssrRenderComponent(unref(Pa), {
        modelValue: colorEnabled.value.blue,
        "onUpdate:modelValue": ($event) => colorEnabled.value.blue = $event,
        color: "blue"
      }, null, _parent));
      _push(`<span class="text-sm">蓝色</span></div><div class="flex flex-col items-center space-y-2">`);
      _push(ssrRenderComponent(unref(Pa), {
        modelValue: colorEnabled.value.green,
        "onUpdate:modelValue": ($event) => colorEnabled.value.green = $event,
        color: "green"
      }, null, _parent));
      _push(`<span class="text-sm">绿色</span></div><div class="flex flex-col items-center space-y-2">`);
      _push(ssrRenderComponent(unref(Pa), {
        modelValue: colorEnabled.value.red,
        "onUpdate:modelValue": ($event) => colorEnabled.value.red = $event,
        color: "red"
      }, null, _parent));
      _push(`<span class="text-sm">红色</span></div><div class="flex flex-col items-center space-y-2">`);
      _push(ssrRenderComponent(unref(Pa), {
        modelValue: colorEnabled.value.yellow,
        "onUpdate:modelValue": ($event) => colorEnabled.value.yellow = $event,
        color: "yellow"
      }, null, _parent));
      _push(`<span class="text-sm">黄色</span></div><div class="flex flex-col items-center space-y-2">`);
      _push(ssrRenderComponent(unref(Pa), {
        modelValue: colorEnabled.value.purple,
        "onUpdate:modelValue": ($event) => colorEnabled.value.purple = $event,
        color: "purple"
      }, null, _parent));
      _push(`<span class="text-sm">紫色</span></div></div></section><section><h2 class="text-lg font-medium mb-4">禁用状态</h2><div class="flex items-center space-x-8"><div class="flex flex-col items-center space-y-2">`);
      _push(ssrRenderComponent(unref(Pa), { disabled: "" }, null, _parent));
      _push(`<span class="text-sm">禁用关闭</span></div><div class="flex flex-col items-center space-y-2">`);
      _push(ssrRenderComponent(unref(Pa), {
        "model-value": true,
        disabled: ""
      }, null, _parent));
      _push(`<span class="text-sm">禁用开启</span></div></div></section><section><h2 class="text-lg font-medium mb-4">动画演示</h2><div class="flex flex-col space-y-4"><div class="flex items-center space-x-4"><button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">${ssrInterpolate(allEnabled.value ? "全部关闭" : "全部开启")}</button></div><div class="flex items-center space-x-4 mt-4"><!--[-->`);
      ssrRenderList(5, (_, i) => {
        _push(ssrRenderComponent(unref(Pa), {
          key: i,
          modelValue: animationSwitches.value[i],
          "onUpdate:modelValue": ($event) => animationSwitches.value[i] = $event
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/switch/example/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
