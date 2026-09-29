import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { F as Fo } from "./index.esm.BIucDlT0.js";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedValue = ref(null);
    const selectedValue2 = ref("option1");
    const basicOptions = [
      { value: "option1", label: "选项 1" },
      { value: "option2", label: "选项 2" },
      { value: "option3", label: "选项 3" }
    ];
    const disabledOptions = [
      { value: "option1", label: "选项 1" },
      { value: "option2", label: "选项 2 (禁用)", disabled: true },
      { value: "option3", label: "选项 3" },
      { value: "option4", label: "选项 4 (禁用)", disabled: true }
    ];
    const fruitOptions = [
      { value: "apple", label: "苹果" },
      { value: "banana", label: "香蕉" },
      { value: "orange", label: "橙子" },
      { value: "grape", label: "葡萄" },
      { value: "watermelon", label: "西瓜" },
      { value: "strawberry", label: "草莓" },
      { value: "pear", label: "梨" },
      { value: "peach", label: "桃子" }
    ];
    const multiSelectedValue = ref([]);
    const searchValue = ref(null);
    const clearableValue = ref("option2");
    const groupedValue = ref(null);
    const groupedOptions = [
      { value: "fruit1", label: "苹果", group: "水果" },
      { value: "fruit2", label: "香蕉", group: "水果" },
      { value: "fruit3", label: "橙子", group: "水果" },
      { value: "veg1", label: "胡萝卜", group: "蔬菜" },
      { value: "veg2", label: "西兰花", group: "蔬菜" },
      { value: "veg3", label: "土豆", group: "蔬菜" },
      { value: "meat1", label: "牛肉", group: "肉类" },
      { value: "meat2", label: "猪肉", group: "肉类" },
      { value: "meat3", label: "鸡肉", group: "肉类" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-8" }, _attrs))}><section><h2 class="mb-4 text-lg font-bold">基础用法</h2>`);
      _push(ssrRenderComponent(unref(Fo), {
        modelValue: selectedValue.value,
        "onUpdate:modelValue": ($event) => selectedValue.value = $event,
        placeholder: "请选择一个选项",
        options: basicOptions
      }, null, _parent));
      _push(`<div class="mt-2 text-sm text-gray-600"> 当前选择: ${ssrInterpolate(selectedValue.value || "未选择")}</div></section><section><h2 class="mb-4 text-lg font-bold">带标签和默认值</h2>`);
      _push(ssrRenderComponent(unref(Fo), {
        modelValue: selectedValue2.value,
        "onUpdate:modelValue": ($event) => selectedValue2.value = $event,
        options: basicOptions,
        showLabel: true,
        label: "选择一个选项"
      }, null, _parent));
      _push(`<div class="mt-2 text-sm text-gray-600"> 当前选择: ${ssrInterpolate(selectedValue2.value)}</div></section><section><h2 class="mb-4 text-lg font-bold">尺寸变体</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(unref(Fo), {
        size: "small",
        showLabel: true,
        label: "小尺寸 (small)",
        placeholder: "选择选项",
        options: basicOptions
      }, null, _parent));
      _push(ssrRenderComponent(unref(Fo), {
        size: "default",
        showLabel: true,
        label: "默认尺寸 (default)",
        placeholder: "选择选项",
        options: basicOptions
      }, null, _parent));
      _push(ssrRenderComponent(unref(Fo), {
        size: "large",
        showLabel: true,
        label: "大尺寸 (large)",
        placeholder: "选择选项",
        options: basicOptions
      }, null, _parent));
      _push(`</div></section><section><h2 class="mb-4 text-lg font-bold">状态变体</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-4">`);
      _push(ssrRenderComponent(unref(Fo), {
        status: "success",
        showLabel: true,
        label: "成功状态 (success)",
        placeholder: "选择选项",
        options: basicOptions
      }, null, _parent));
      _push(ssrRenderComponent(unref(Fo), {
        status: "warning",
        showLabel: true,
        label: "警告状态 (warning)",
        placeholder: "选择选项",
        options: basicOptions
      }, null, _parent));
      _push(ssrRenderComponent(unref(Fo), {
        status: "error",
        showLabel: true,
        label: "错误状态 (error)",
        placeholder: "选择选项",
        errorText: "请选择一个有效选项",
        options: basicOptions
      }, null, _parent));
      _push(`</div></section><section><h2 class="mb-4 text-lg font-bold">交互状态</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-4">`);
      _push(ssrRenderComponent(unref(Fo), {
        disabled: "",
        showLabel: true,
        label: "禁用状态 (disabled)",
        placeholder: "无法选择",
        options: basicOptions
      }, null, _parent));
      _push(ssrRenderComponent(unref(Fo), {
        readonly: "",
        showLabel: true,
        label: "只读状态 (readonly)",
        placeholder: "只读",
        modelValue: "option1",
        options: basicOptions
      }, null, _parent));
      _push(ssrRenderComponent(unref(Fo), {
        showLabel: true,
        label: "必填状态",
        placeholder: "必须选择",
        required: "",
        options: basicOptions
      }, null, _parent));
      _push(ssrRenderComponent(unref(Fo), {
        showLabel: true,
        label: "帮助文本",
        placeholder: "选择选项",
        helpText: "请从下拉列表中选择一个选项",
        options: basicOptions
      }, null, _parent));
      _push(`</div></section><section><h2 class="mb-4 text-lg font-bold">禁用选项</h2>`);
      _push(ssrRenderComponent(unref(Fo), {
        showLabel: true,
        label: "部分选项禁用",
        placeholder: "选择选项",
        options: disabledOptions
      }, null, _parent));
      _push(`</section><section><h2 class="mb-4 text-lg font-bold">多选模式</h2>`);
      _push(ssrRenderComponent(unref(Fo), {
        multiple: "",
        showLabel: true,
        label: "多选选择器",
        placeholder: "选择多个选项",
        modelValue: multiSelectedValue.value,
        "onUpdate:modelValue": ($event) => multiSelectedValue.value = $event,
        clearable: "",
        options: basicOptions
      }, null, _parent));
      _push(`<div class="mt-2 text-sm text-gray-600"> 当前选择: ${ssrInterpolate(multiSelectedValue.value.length ? multiSelectedValue.value.join(", ") : "未选择")}</div></section><section><h2 class="mb-4 text-lg font-bold">可搜索选择器</h2>`);
      _push(ssrRenderComponent(unref(Fo), {
        filterable: "",
        showLabel: true,
        label: "可搜索选择器",
        placeholder: "搜索并选择水果",
        modelValue: searchValue.value,
        "onUpdate:modelValue": ($event) => searchValue.value = $event,
        options: fruitOptions
      }, null, _parent));
      _push(`<div class="mt-2 text-sm text-gray-600"> 当前选择: ${ssrInterpolate(searchValue.value || "未选择")}</div></section><section><h2 class="mb-4 text-lg font-bold">可清除选择</h2>`);
      _push(ssrRenderComponent(unref(Fo), {
        clearable: "",
        showLabel: true,
        label: "可清除选择器",
        placeholder: "选择后可清除",
        modelValue: clearableValue.value,
        "onUpdate:modelValue": ($event) => clearableValue.value = $event,
        options: basicOptions
      }, null, _parent));
      _push(`<div class="mt-2 text-sm text-gray-600"> 当前选择: ${ssrInterpolate(clearableValue.value || "未选择")}</div></section><section><h2 class="mb-4 text-lg font-bold">分组选项</h2>`);
      _push(ssrRenderComponent(unref(Fo), {
        showLabel: true,
        label: "分组选择",
        placeholder: "选择一个选项",
        modelValue: groupedValue.value,
        "onUpdate:modelValue": ($event) => groupedValue.value = $event,
        filterable: "",
        options: groupedOptions
      }, null, _parent));
      _push(`<div class="mt-2 text-sm text-gray-600"> 当前选择: ${ssrInterpolate(groupedValue.value || "未选择")}</div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/select/example/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
