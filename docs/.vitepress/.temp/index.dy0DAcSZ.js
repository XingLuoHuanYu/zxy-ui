import { defineComponent, ref, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { k as ko } from "./index.esm.BIucDlT0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const inputValue = ref("");
    const globalValue = ref("");
    const inputText = ref("");
    const inputPassword = ref("");
    const inputEmail = ref("");
    const inputNumber = ref("");
    const inputSearch = ref("");
    const inputUrl = ref("");
    const inputSize = ref("");
    const inputPrefix = ref("");
    const inputSuffix = ref("");
    const inputBoth = ref("");
    const inputClearable = ref("");
    const inputCount = ref("");
    const inputNormal = ref("");
    const inputSuccess = ref("成功状态示例");
    const inputWarning = ref("警告状态示例");
    const inputError = ref("错误状态示例");
    const inputDisabled = ref("禁用状态示例");
    const inputReadonly = ref("只读状态示例");
    const inputAutofocus = ref("");
    const formUsername = ref("");
    const formPassword = ref("");
    const formEmail = ref("");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = computed(() => {
      if (!formEmail.value) return true;
      return emailRegex.test(formEmail.value);
    });
    const formIsValid = computed(() => {
      return formUsername.value && formPassword.value && formEmail.value && isValidEmail.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8" }, _attrs))}><section><h2 class="text-lg font-medium mb-4">基础用法</h2><div class="max-w-md">`);
      _push(ssrRenderComponent(unref(ko), {
        modelValue: inputValue.value,
        "onUpdate:modelValue": ($event) => inputValue.value = $event,
        placeholder: "请输入内容"
      }, null, _parent));
      _push(`<div class="text-sm text-gray-500 mt-2"> 当前输入值: ${ssrInterpolate(inputValue.value || "空")}</div></div></section><section><h2 class="text-lg font-medium mb-4">不同类型</h2><div class="grid grid-cols-2 gap-4 max-w-2xl">`);
      _push(ssrRenderComponent(unref(ko), {
        modelValue: inputText.value,
        "onUpdate:modelValue": ($event) => inputText.value = $event,
        placeholder: "文本输入框",
        type: "text"
      }, null, _parent));
      _push(ssrRenderComponent(unref(ko), {
        modelValue: inputPassword.value,
        "onUpdate:modelValue": ($event) => inputPassword.value = $event,
        placeholder: "密码输入框",
        type: "password"
      }, null, _parent));
      _push(ssrRenderComponent(unref(ko), {
        modelValue: inputEmail.value,
        "onUpdate:modelValue": ($event) => inputEmail.value = $event,
        placeholder: "邮箱输入框",
        type: "email"
      }, null, _parent));
      _push(ssrRenderComponent(unref(ko), {
        modelValue: inputNumber.value,
        "onUpdate:modelValue": ($event) => inputNumber.value = $event,
        placeholder: "数字输入框",
        type: "number"
      }, null, _parent));
      _push(ssrRenderComponent(unref(ko), {
        modelValue: inputSearch.value,
        "onUpdate:modelValue": ($event) => inputSearch.value = $event,
        placeholder: "搜索输入框",
        type: "search"
      }, null, _parent));
      _push(ssrRenderComponent(unref(ko), {
        modelValue: inputUrl.value,
        "onUpdate:modelValue": ($event) => inputUrl.value = $event,
        placeholder: "URL输入框",
        type: "url"
      }, null, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">不同尺寸</h2><div class="grid grid-cols-1 gap-4 max-w-md">`);
      _push(ssrRenderComponent(unref(ko), {
        modelValue: inputSize.value,
        "onUpdate:modelValue": ($event) => inputSize.value = $event,
        size: "small",
        placeholder: "小型输入框"
      }, null, _parent));
      _push(ssrRenderComponent(unref(ko), {
        modelValue: inputSize.value,
        "onUpdate:modelValue": ($event) => inputSize.value = $event,
        size: "default",
        placeholder: "默认尺寸输入框"
      }, null, _parent));
      _push(ssrRenderComponent(unref(ko), {
        modelValue: inputSize.value,
        "onUpdate:modelValue": ($event) => inputSize.value = $event,
        size: "large",
        placeholder: "大型输入框"
      }, null, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">前缀和后缀</h2><div class="grid grid-cols-1 gap-4 max-w-md">`);
      _push(ssrRenderComponent(unref(ko), {
        modelValue: inputPrefix.value,
        "onUpdate:modelValue": ($event) => inputPrefix.value = $event,
        placeholder: "带前缀图标",
        prefixIcon: "i-heroicons-user"
      }, null, _parent));
      _push(ssrRenderComponent(unref(ko), {
        modelValue: inputSuffix.value,
        "onUpdate:modelValue": ($event) => inputSuffix.value = $event,
        placeholder: "带后缀图标",
        suffixIcon: "i-heroicons-magnifying-glass"
      }, null, _parent));
      _push(ssrRenderComponent(unref(ko), {
        modelValue: inputBoth.value,
        "onUpdate:modelValue": ($event) => inputBoth.value = $event,
        placeholder: "前后缀都有",
        prefixIcon: "i-heroicons-envelope",
        suffixIcon: "i-heroicons-paper-airplane"
      }, null, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">可清空</h2><div class="max-w-md">`);
      _push(ssrRenderComponent(unref(ko), {
        modelValue: inputClearable.value,
        "onUpdate:modelValue": ($event) => inputClearable.value = $event,
        placeholder: "输入后显示清除按钮",
        clearable: ""
      }, null, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">字数统计</h2><div class="max-w-md">`);
      _push(ssrRenderComponent(unref(ko), {
        modelValue: inputCount.value,
        "onUpdate:modelValue": ($event) => inputCount.value = $event,
        placeholder: "最多输入20个字符",
        maxlength: "20",
        showCount: ""
      }, null, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">不同状态</h2><div class="grid grid-cols-2 gap-4 max-w-2xl">`);
      _push(ssrRenderComponent(unref(ko), {
        modelValue: inputNormal.value,
        "onUpdate:modelValue": ($event) => inputNormal.value = $event,
        placeholder: "默认状态"
      }, null, _parent));
      _push(ssrRenderComponent(unref(ko), {
        modelValue: inputSuccess.value,
        "onUpdate:modelValue": ($event) => inputSuccess.value = $event,
        placeholder: "成功状态",
        status: "success"
      }, null, _parent));
      _push(ssrRenderComponent(unref(ko), {
        modelValue: inputWarning.value,
        "onUpdate:modelValue": ($event) => inputWarning.value = $event,
        placeholder: "警告状态",
        status: "warning"
      }, null, _parent));
      _push(ssrRenderComponent(unref(ko), {
        modelValue: inputError.value,
        "onUpdate:modelValue": ($event) => inputError.value = $event,
        placeholder: "错误状态",
        status: "error"
      }, null, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">禁用和只读</h2><div class="grid grid-cols-2 gap-4 max-w-2xl">`);
      _push(ssrRenderComponent(unref(ko), {
        modelValue: inputDisabled.value,
        "onUpdate:modelValue": ($event) => inputDisabled.value = $event,
        placeholder: "禁用状态",
        disabled: ""
      }, null, _parent));
      _push(ssrRenderComponent(unref(ko), {
        modelValue: inputReadonly.value,
        "onUpdate:modelValue": ($event) => inputReadonly.value = $event,
        placeholder: "只读状态",
        readonly: ""
      }, null, _parent));
      _push(`</div></section><section><h2 class="text-lg font-medium mb-4">自动聚焦</h2><div class="max-w-md flex space-x-4">`);
      _push(ssrRenderComponent(unref(ko), {
        modelValue: inputAutofocus.value,
        "onUpdate:modelValue": ($event) => inputAutofocus.value = $event,
        placeholder: "自动获取焦点",
        autofocus: ""
      }, null, _parent));
      _push(`<button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"> 重置 </button></div></section><section><h2 class="text-lg font-medium mb-4">表单应用示例</h2><div class="max-w-md space-y-4 border p-6 rounded-md"><div><label class="block text-sm font-medium text-gray-700 mb-1"> 用户名 </label>`);
      _push(ssrRenderComponent(unref(ko), {
        modelValue: formUsername.value,
        "onUpdate:modelValue": ($event) => formUsername.value = $event,
        placeholder: "请输入用户名"
      }, null, _parent));
      _push(`</div><div><label class="block text-sm font-medium text-gray-700 mb-1"> 密码 </label>`);
      _push(ssrRenderComponent(unref(ko), {
        modelValue: formPassword.value,
        "onUpdate:modelValue": ($event) => formPassword.value = $event,
        type: "password",
        placeholder: "请输入密码"
      }, null, _parent));
      _push(`</div><div><label class="block text-sm font-medium text-gray-700 mb-1"> 邮箱 </label>`);
      _push(ssrRenderComponent(unref(ko), {
        modelValue: formEmail.value,
        "onUpdate:modelValue": ($event) => formEmail.value = $event,
        type: "email",
        placeholder: "请输入邮箱",
        status: isValidEmail.value ? "success" : formEmail.value ? "error" : void 0
      }, null, _parent));
      if (formEmail.value && !isValidEmail.value) {
        _push(`<div class="text-sm text-red-500 mt-1"> 请输入有效的邮箱地址 </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><button class="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"${ssrIncludeBooleanAttr(!formIsValid.value) ? " disabled" : ""}> 提交 </button></div></div></section><section><h2 class="text-lg font-medium mb-4"> 全局注册用法 <span class="text-sm text-gray-500">（z- 前缀）</span></h2><p class="text-sm text-gray-500 mb-4"> 执行 <code>app.use(ZxyUI)</code> 后，无需 import 即可直接使用 <code>&lt;z-input&gt;</code> 标签： </p><div class="max-w-md">`);
      _push(ssrRenderComponent(unref(ko), {
        modelValue: globalValue.value,
        "onUpdate:modelValue": ($event) => globalValue.value = $event,
        placeholder: "使用 z-input 全局组件"
      }, null, _parent));
      _push(`<div class="text-sm text-gray-500 mt-2"> 当前值: ${ssrInterpolate(globalValue.value || "空")}</div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/input/example/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
