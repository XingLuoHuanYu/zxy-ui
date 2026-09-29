import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { f as _i } from "./index.esm.BIucDlT0.js";
/* empty css             */
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const basicRange = ref([null, null]);
    const defaultRange = ref([
      new Date(2023, 0, 15),
      new Date(2023, 0, 20)
    ]);
    const limitedRange = ref([null, null]);
    const disabledRange = ref([
      new Date(2023, 0, 15),
      new Date(2023, 0, 20)
    ]);
    const readonlyRange = ref([
      new Date(2023, 0, 15),
      new Date(2023, 0, 20)
    ]);
    const mondayFirstRange = ref([null, null]);
    const localeRange = ref([null, null]);
    const customStyleRange = ref([null, null]);
    const unstyledRange = ref([null, null]);
    const isDarkMode = ref(false);
    if (typeof window !== "undefined") {
      isDarkMode.value = document.documentElement.classList.contains("dark") || window.matchMedia("(prefers-color-scheme: dark)").matches;
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
        isDarkMode.value = e.matches;
      });
    }
    const formatDateRange = (range) => {
      if (!range[0] || !range[1]) return "未选择";
      const formatDate = (date) => {
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
      };
      return `${formatDate(range[0])} 至 ${formatDate(range[1])}`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-12" }, _attrs))} data-v-5ac04db3><section class="example-section" data-v-5ac04db3><h2 class="example-title" data-v-5ac04db3>基础用法</h2><div class="example-container" data-v-5ac04db3>`);
      _push(ssrRenderComponent(unref(_i), {
        modelValue: basicRange.value,
        "onUpdate:modelValue": ($event) => basicRange.value = $event
      }, null, _parent));
      _push(`<div class="selection-info" data-v-5ac04db3> 已选择: ${ssrInterpolate(formatDateRange(basicRange.value))}</div></div></section><section class="example-section" data-v-5ac04db3><h2 class="example-title" data-v-5ac04db3>默认选中日期</h2><div class="example-container" data-v-5ac04db3>`);
      _push(ssrRenderComponent(unref(_i), {
        modelValue: defaultRange.value,
        "onUpdate:modelValue": ($event) => defaultRange.value = $event
      }, null, _parent));
      _push(`<div class="selection-info" data-v-5ac04db3> 已选择: ${ssrInterpolate(formatDateRange(defaultRange.value))}</div></div></section><section class="example-section" data-v-5ac04db3><h2 class="example-title" data-v-5ac04db3>日期范围限制</h2><div class="example-container" data-v-5ac04db3>`);
      _push(ssrRenderComponent(unref(_i), {
        modelValue: limitedRange.value,
        "onUpdate:modelValue": ($event) => limitedRange.value = $event,
        "min-date": new Date(2023, 0, 1),
        "max-date": new Date(2023, 11, 31)
      }, null, _parent));
      _push(`<div class="selection-info" data-v-5ac04db3> 已选择: ${ssrInterpolate(formatDateRange(limitedRange.value))} <div class="selection-constraint" data-v-5ac04db3> (可选范围: 2023-01-01 至 2023-12-31) </div></div></div></section><section class="example-section" data-v-5ac04db3><h2 class="example-title" data-v-5ac04db3>禁用状态</h2><div class="example-container" data-v-5ac04db3>`);
      _push(ssrRenderComponent(unref(_i), {
        modelValue: disabledRange.value,
        "onUpdate:modelValue": ($event) => disabledRange.value = $event,
        disabled: ""
      }, null, _parent));
      _push(`<div class="selection-info" data-v-5ac04db3> 已选择: ${ssrInterpolate(formatDateRange(disabledRange.value))}</div></div></section><section class="example-section" data-v-5ac04db3><h2 class="example-title" data-v-5ac04db3>只读状态</h2><div class="example-container" data-v-5ac04db3>`);
      _push(ssrRenderComponent(unref(_i), {
        modelValue: readonlyRange.value,
        "onUpdate:modelValue": ($event) => readonlyRange.value = $event,
        readonly: ""
      }, null, _parent));
      _push(`<div class="selection-info" data-v-5ac04db3> 已选择: ${ssrInterpolate(formatDateRange(readonlyRange.value))}</div></div></section><section class="example-section" data-v-5ac04db3><h2 class="example-title" data-v-5ac04db3>周一作为一周的第一天</h2><div class="example-container" data-v-5ac04db3>`);
      _push(ssrRenderComponent(unref(_i), {
        modelValue: mondayFirstRange.value,
        "onUpdate:modelValue": ($event) => mondayFirstRange.value = $event,
        "first-day-of-week": 1
      }, null, _parent));
      _push(`<div class="selection-info" data-v-5ac04db3> 已选择: ${ssrInterpolate(formatDateRange(mondayFirstRange.value))}</div></div></section><section class="example-section" data-v-5ac04db3><h2 class="example-title" data-v-5ac04db3>本地化设置</h2><div class="example-container" data-v-5ac04db3>`);
      _push(ssrRenderComponent(unref(_i), {
        modelValue: localeRange.value,
        "onUpdate:modelValue": ($event) => localeRange.value = $event,
        locale: "zh-CN"
      }, null, _parent));
      _push(`<div class="selection-info" data-v-5ac04db3> 已选择: ${ssrInterpolate(formatDateRange(localeRange.value))}</div></div></section><section class="example-section" data-v-5ac04db3><h2 class="example-title" data-v-5ac04db3>自定义样式</h2><div class="example-container" data-v-5ac04db3>`);
      _push(ssrRenderComponent(unref(_i), {
        modelValue: customStyleRange.value,
        "onUpdate:modelValue": ($event) => customStyleRange.value = $event,
        pt: {
          root: "border border-gray-300 dark:border-gray-600 rounded-md overflow-hidden",
          header: isDarkMode.value ? "bg-blue-900" : "bg-blue-50",
          title: isDarkMode.value ? "text-blue-300 font-bold" : "text-blue-700 font-bold",
          weekDay: isDarkMode.value ? "text-blue-400" : "text-blue-500",
          day: {
            selected: isDarkMode.value ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-blue-500 text-white hover:bg-blue-600",
            inRange: isDarkMode.value ? "bg-blue-900" : "bg-blue-100",
            today: isDarkMode.value ? "border-blue-400" : "border-blue-500"
          }
        }
      }, null, _parent));
      _push(`<div class="selection-info" data-v-5ac04db3> 已选择: ${ssrInterpolate(formatDateRange(customStyleRange.value))}</div></div></section><section class="example-section" data-v-5ac04db3><h2 class="example-title" data-v-5ac04db3>无样式模式</h2><div class="example-container" data-v-5ac04db3>`);
      _push(ssrRenderComponent(unref(_i), {
        modelValue: unstyledRange.value,
        "onUpdate:modelValue": ($event) => unstyledRange.value = $event,
        unstyled: "",
        pt: {
          root: isDarkMode.value ? "border border-gray-600 rounded-lg p-4" : "border border-gray-200 rounded-lg p-4",
          header: "flex justify-between items-center mb-4",
          title: isDarkMode.value ? "text-lg font-medium text-gray-200" : "text-lg font-medium text-gray-800",
          monthNavPrev: isDarkMode.value ? "p-1 rounded-full hover:bg-gray-700" : "p-1 rounded-full hover:bg-gray-100",
          monthNavNext: isDarkMode.value ? "p-1 rounded-full hover:bg-gray-700" : "p-1 rounded-full hover:bg-gray-100",
          weekDays: "grid grid-cols-7 mb-2",
          weekDay: isDarkMode.value ? "text-center text-sm font-medium text-gray-400" : "text-center text-sm font-medium text-gray-500",
          days: "grid grid-cols-7 gap-1",
          day: {
            root: "flex items-center justify-center h-8 w-8 rounded-full",
            today: isDarkMode.value ? "border border-blue-400" : "border border-blue-500",
            selected: isDarkMode.value ? "bg-blue-600 text-white" : "bg-blue-500 text-white",
            inRange: isDarkMode.value ? "bg-blue-900" : "bg-blue-100",
            disabled: isDarkMode.value ? "text-gray-600 cursor-not-allowed" : "text-gray-300 cursor-not-allowed",
            adjacent: isDarkMode.value ? "text-gray-600" : "text-gray-400"
          }
        }
      }, null, _parent));
      _push(`<div class="selection-info" data-v-5ac04db3> 已选择: ${ssrInterpolate(formatDateRange(unstyledRange.value))}</div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/rangecalendar/example/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5ac04db3"]]);
export {
  index as default
};
