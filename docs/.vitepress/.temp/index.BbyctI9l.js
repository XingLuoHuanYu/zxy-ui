import { defineComponent, ref, reactive, mergeProps, unref, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { m as mo } from "./index.esm.BIucDlT0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const checked1 = ref(true);
    const checkedSize = ref(true);
    const checkedColor = ref(true);
    const checkedDisabled = ref(false);
    const checkedDisabledChecked = ref(true);
    const checkedLabel = ref(false);
    const checkedSlot = ref(false);
    const checkedGroup = reactive({
      option1: true,
      option2: false,
      option3: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8" }, _attrs))}><section><h2 class="text-lg font-medium mb-4">基础用法</h2><div class="flex space-x-4 items-center">`);
      _push(ssrRenderComponent(unref(mo), {
        modelValue: checked1.value,
        "onUpdate:modelValue": ($event) => checked1.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`默认复选框`);
          } else {
            return [
              createTextVNode("默认复选框")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="text-sm text-gray-500"> 当前状态: ${ssrInterpolate(checked1.value ? "选中" : "未选中")}</div></div></section><section><h2 class="text-lg font-medium mb-4">不同尺寸</h2><div class="flex space-x-6 items-center">`);
      _push(ssrRenderComponent(unref(mo), {
        modelValue: checkedSize.value,
        "onUpdate:modelValue": ($event) => checkedSize.value = $event,
        size: "small"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`小型`);
          } else {
            return [
              createTextVNode("小型")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(mo), {
        modelValue: checkedSize.value,
        "onUpdate:modelValue": ($event) => checkedSize.value = $event,
        size: "default"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`默认`);
          } else {
            return [
              createTextVNode("默认")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(mo), {
        modelValue: checkedSize.value,
        "onUpdate:modelValue": ($event) => checkedSize.value = $event,
        size: "large"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`大型`);
          } else {
            return [
              createTextVNode("大型")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">不同颜色</h2><div class="grid grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(unref(mo), {
        modelValue: checkedColor.value,
        "onUpdate:modelValue": ($event) => checkedColor.value = $event,
        color: "blue"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`蓝色 (默认)`);
          } else {
            return [
              createTextVNode("蓝色 (默认)")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(mo), {
        modelValue: checkedColor.value,
        "onUpdate:modelValue": ($event) => checkedColor.value = $event,
        color: "green"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`绿色`);
          } else {
            return [
              createTextVNode("绿色")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(mo), {
        modelValue: checkedColor.value,
        "onUpdate:modelValue": ($event) => checkedColor.value = $event,
        color: "red"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`红色`);
          } else {
            return [
              createTextVNode("红色")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(mo), {
        modelValue: checkedColor.value,
        "onUpdate:modelValue": ($event) => checkedColor.value = $event,
        color: "yellow"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`黄色`);
          } else {
            return [
              createTextVNode("黄色")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(mo), {
        modelValue: checkedColor.value,
        "onUpdate:modelValue": ($event) => checkedColor.value = $event,
        color: "purple"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`紫色`);
          } else {
            return [
              createTextVNode("紫色")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">禁用状态</h2><div class="flex space-x-6 items-center">`);
      _push(ssrRenderComponent(unref(mo), {
        modelValue: checkedDisabled.value,
        "onUpdate:modelValue": ($event) => checkedDisabled.value = $event,
        disabled: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`禁用未选中`);
          } else {
            return [
              createTextVNode("禁用未选中")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(mo), {
        modelValue: checkedDisabledChecked.value,
        "onUpdate:modelValue": ($event) => checkedDisabledChecked.value = $event,
        disabled: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 禁用已选中 `);
          } else {
            return [
              createTextVNode(" 禁用已选中 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">使用标签属性</h2>`);
      _push(ssrRenderComponent(unref(mo), {
        modelValue: checkedLabel.value,
        "onUpdate:modelValue": ($event) => checkedLabel.value = $event,
        label: "使用label属性的复选框"
      }, null, _parent));
      _push(`</section><section><h2 class="text-lg font-medium mb-4">使用插槽自定义内容</h2>`);
      _push(ssrRenderComponent(unref(mo), {
        modelValue: checkedSlot.value,
        "onUpdate:modelValue": ($event) => checkedSlot.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="font-medium text-purple-600"${_scopeId}>自定义插槽内容</span><span class="text-xs ml-1 text-gray-500"${_scopeId}>(支持任意内容)</span>`);
          } else {
            return [
              createVNode("span", { class: "font-medium text-purple-600" }, "自定义插槽内容"),
              createVNode("span", { class: "text-xs ml-1 text-gray-500" }, "(支持任意内容)")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section><h2 class="text-lg font-medium mb-4">复选框组</h2><div class="space-y-2">`);
      _push(ssrRenderComponent(unref(mo), {
        modelValue: checkedGroup.option1,
        "onUpdate:modelValue": ($event) => checkedGroup.option1 = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`选项 1`);
          } else {
            return [
              createTextVNode("选项 1")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(mo), {
        modelValue: checkedGroup.option2,
        "onUpdate:modelValue": ($event) => checkedGroup.option2 = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`选项 2`);
          } else {
            return [
              createTextVNode("选项 2")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(mo), {
        modelValue: checkedGroup.option3,
        "onUpdate:modelValue": ($event) => checkedGroup.option3 = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`选项 3`);
          } else {
            return [
              createTextVNode("选项 3")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="text-sm text-gray-500 mt-2"> 已选中: ${ssrInterpolate(Object.keys(checkedGroup).filter((key) => checkedGroup[key]).join(", ").replaceAll("option", "选项 "))}</div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/checkbox/example/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
