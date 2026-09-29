import { ref, resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const basicValue = ref(3);
    const halfValue = ref(3.5);
    const readonlyValue = ref(4);
    const disabledValue = ref(2);
    const colorValue = ref(3);
    const customValue = ref(4);
    const maxValue = ref(6);
    const scoreValue = ref(3.5);
    const formatTooltip = (value) => {
      return `${value} 分`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ZRate = resolveComponent("ZRate");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8" }, _attrs))}><div><h2 class="text-lg font-medium mb-2">基础用法</h2>`);
      _push(ssrRenderComponent(_component_ZRate, {
        modelValue: basicValue.value,
        "onUpdate:modelValue": ($event) => basicValue.value = $event
      }, null, _parent));
      _push(`<div class="mt-2 text-sm text-gray-500">当前评分：${ssrInterpolate(basicValue.value)}</div></div><div><h2 class="text-lg font-medium mb-2">半星评分</h2>`);
      _push(ssrRenderComponent(_component_ZRate, {
        modelValue: halfValue.value,
        "onUpdate:modelValue": ($event) => halfValue.value = $event,
        "allow-half": true
      }, null, _parent));
      _push(`<div class="mt-2 text-sm text-gray-500">当前评分：${ssrInterpolate(halfValue.value)}</div></div><div><h2 class="text-lg font-medium mb-2">只读状态</h2>`);
      _push(ssrRenderComponent(_component_ZRate, {
        modelValue: readonlyValue.value,
        "onUpdate:modelValue": ($event) => readonlyValue.value = $event,
        readonly: true
      }, null, _parent));
      _push(`</div><div><h2 class="text-lg font-medium mb-2">禁用状态</h2>`);
      _push(ssrRenderComponent(_component_ZRate, {
        modelValue: disabledValue.value,
        "onUpdate:modelValue": ($event) => disabledValue.value = $event,
        disabled: true
      }, null, _parent));
      _push(`</div><div><h2 class="text-lg font-medium mb-2">自定义颜色</h2><div class="space-y-2"><div><span class="inline-block w-20">黄色（默认）:</span>`);
      _push(ssrRenderComponent(_component_ZRate, {
        modelValue: colorValue.value,
        "onUpdate:modelValue": ($event) => colorValue.value = $event,
        color: "yellow"
      }, null, _parent));
      _push(`</div><div><span class="inline-block w-20">蓝色:</span>`);
      _push(ssrRenderComponent(_component_ZRate, {
        modelValue: colorValue.value,
        "onUpdate:modelValue": ($event) => colorValue.value = $event,
        color: "blue"
      }, null, _parent));
      _push(`</div><div><span class="inline-block w-20">绿色:</span>`);
      _push(ssrRenderComponent(_component_ZRate, {
        modelValue: colorValue.value,
        "onUpdate:modelValue": ($event) => colorValue.value = $event,
        color: "green"
      }, null, _parent));
      _push(`</div><div><span class="inline-block w-20">红色:</span>`);
      _push(ssrRenderComponent(_component_ZRate, {
        modelValue: colorValue.value,
        "onUpdate:modelValue": ($event) => colorValue.value = $event,
        color: "red"
      }, null, _parent));
      _push(`</div><div><span class="inline-block w-20">紫色:</span>`);
      _push(ssrRenderComponent(_component_ZRate, {
        modelValue: colorValue.value,
        "onUpdate:modelValue": ($event) => colorValue.value = $event,
        color: "purple"
      }, null, _parent));
      _push(`</div></div></div><div><h2 class="text-lg font-medium mb-2">自定义字符</h2><div class="space-y-2">`);
      _push(ssrRenderComponent(_component_ZRate, {
        modelValue: customValue.value,
        "onUpdate:modelValue": ($event) => customValue.value = $event,
        character: "好"
      }, null, _parent));
      _push(`</div></div><div><h2 class="text-lg font-medium mb-2">自定义尺寸</h2><div class="space-y-2"><div><span class="inline-block w-20">小:</span>`);
      _push(ssrRenderComponent(_component_ZRate, {
        modelValue: colorValue.value,
        "onUpdate:modelValue": ($event) => colorValue.value = $event,
        size: "small"
      }, null, _parent));
      _push(`</div><div><span class="inline-block w-20">默认:</span>`);
      _push(ssrRenderComponent(_component_ZRate, {
        modelValue: colorValue.value,
        "onUpdate:modelValue": ($event) => colorValue.value = $event,
        size: "default"
      }, null, _parent));
      _push(`</div><div><span class="inline-block w-20">大:</span>`);
      _push(ssrRenderComponent(_component_ZRate, {
        modelValue: colorValue.value,
        "onUpdate:modelValue": ($event) => colorValue.value = $event,
        size: "large"
      }, null, _parent));
      _push(`</div></div></div><div><h2 class="text-lg font-medium mb-2">自定义最大值</h2>`);
      _push(ssrRenderComponent(_component_ZRate, {
        modelValue: maxValue.value,
        "onUpdate:modelValue": ($event) => maxValue.value = $event,
        max: 10
      }, null, _parent));
      _push(`<div class="mt-2 text-sm text-gray-500">当前评分：${ssrInterpolate(maxValue.value)}/10</div></div><div><h2 class="text-lg font-medium mb-2">显示分数</h2><div class="space-y-2"><div><span class="inline-block w-32">默认格式:</span>`);
      _push(ssrRenderComponent(_component_ZRate, {
        modelValue: scoreValue.value,
        "onUpdate:modelValue": ($event) => scoreValue.value = $event,
        "allow-half": true,
        "show-score": true
      }, null, _parent));
      _push(`</div><div><span class="inline-block w-32">自定义格式:</span>`);
      _push(ssrRenderComponent(_component_ZRate, {
        modelValue: scoreValue.value,
        "onUpdate:modelValue": ($event) => scoreValue.value = $event,
        "allow-half": true,
        "show-score": true,
        "format-tooltip": formatTooltip
      }, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/rate/example/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
