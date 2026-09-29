import { defineComponent, ref, computed, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { H as pc } from "./index.esm.BIucDlT0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const columns = [
      { key: "name", title: "姓名" },
      { key: "role", title: "角色" },
      { key: "status", title: "状态", align: "center" },
      { key: "joinedAt", title: "加入时间", align: "right" }
    ];
    const rows = ref([
      {
        name: "张三",
        role: "前端工程师",
        status: "active",
        joinedAt: "2026-01-12"
      },
      {
        name: "李四",
        role: "产品经理",
        status: "inactive",
        joinedAt: "2025-10-08"
      },
      { name: "王五", role: "设计师", status: "active", joinedAt: "2024-06-21" }
    ]);
    const emptyRows = ref([]);
    const statusLabel = (status) => status === "active" ? "启用中" : "已停用";
    const statusClass = (status) => status === "active" ? "inline-flex rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-700 dark:bg-green-900/40 dark:text-green-300" : "inline-flex rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-300";
    const count = computed(() => rows.value.length);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8" }, _attrs))}><section class="space-y-3"><h3 class="text-lg font-medium">基础用法</h3>`);
      _push(ssrRenderComponent(unref(pc), {
        columns,
        data: rows.value
      }, null, _parent));
      _push(`</section><section class="space-y-3"><h3 class="text-lg font-medium">斑马纹 + 边框 + 紧凑模式</h3>`);
      _push(ssrRenderComponent(unref(pc), {
        columns,
        data: rows.value,
        stripe: "",
        border: "",
        dense: ""
      }, null, _parent));
      _push(`</section><section class="space-y-3"><h3 class="text-lg font-medium">自定义单元格</h3>`);
      _push(ssrRenderComponent(unref(pc), {
        columns,
        data: rows.value,
        border: ""
      }, {
        status: withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="${ssrRenderClass(statusClass(row.status))}"${_scopeId}>${ssrInterpolate(statusLabel(row.status))}</span>`);
          } else {
            return [
              createVNode("span", {
                class: statusClass(row.status)
              }, toDisplayString(statusLabel(row.status)), 3)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-sm text-gray-500 dark:text-gray-400"> 当前共 ${ssrInterpolate(count.value)} 条数据 </p></section><section class="space-y-3"><h3 class="text-lg font-medium">空状态插槽</h3>`);
      _push(ssrRenderComponent(unref(pc), {
        columns,
        data: emptyRows.value,
        "empty-text": "暂无数据"
      }, {
        empty: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-4 text-sm text-gray-500 dark:text-gray-400"${_scopeId}> 当前筛选条件下没有结果 </div>`);
          } else {
            return [
              createVNode("div", { class: "py-4 text-sm text-gray-500 dark:text-gray-400" }, " 当前筛选条件下没有结果 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/table/example/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
