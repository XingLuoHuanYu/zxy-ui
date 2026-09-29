import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { G as Gr } from "./index.esm.BIucDlT0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const initialClosableAlerts = [
      {
        id: 1,
        variant: "info",
        title: "信息提示",
        content: "这是一条可以关闭的信息提示。"
      },
      {
        id: 2,
        variant: "success",
        title: "成功提示",
        content: "这是一条可以关闭的成功提示。"
      },
      {
        id: 3,
        variant: "warning",
        title: "警告提示",
        content: "这是一条可以关闭的警告提示。"
      },
      {
        id: 4,
        variant: "error",
        title: "错误提示",
        content: "这是一条可以关闭的错误提示。"
      }
    ];
    const closableAlerts = ref([...initialClosableAlerts]);
    const handleClose = (id) => {
      closableAlerts.value = closableAlerts.value.filter((alert) => alert.id !== id);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8" }, _attrs))}><section><h3 class="text-lg font-medium mb-3">基础类型</h3><div class="space-y-3">`);
      _push(ssrRenderComponent(unref(Gr), {
        variant: "info",
        title: "信息提示"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 这是一条信息提示，用于展示普通信息。 `);
          } else {
            return [
              createTextVNode(" 这是一条信息提示，用于展示普通信息。 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Gr), {
        variant: "success",
        title: "成功提示"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 这是一条成功提示，用于展示操作成功的信息。 `);
          } else {
            return [
              createTextVNode(" 这是一条成功提示，用于展示操作成功的信息。 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Gr), {
        variant: "warning",
        title: "警告提示"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 这是一条警告提示，用于展示需要注意的信息。 `);
          } else {
            return [
              createTextVNode(" 这是一条警告提示，用于展示需要注意的信息。 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Gr), {
        variant: "error",
        title: "错误提示"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 这是一条错误提示，用于展示操作失败的信息。 `);
          } else {
            return [
              createTextVNode(" 这是一条错误提示，用于展示操作失败的信息。 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h3 class="text-lg font-medium mb-3">可关闭的提示</h3><div class="space-y-3"><!--[-->`);
      ssrRenderList(closableAlerts.value, (alert) => {
        _push(ssrRenderComponent(unref(Gr), {
          key: alert.id,
          variant: alert.variant,
          title: alert.title,
          closable: "",
          onClose: ($event) => handleClose(alert.id)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(alert.content)}`);
            } else {
              return [
                createTextVNode(toDisplayString(alert.content), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
      if (closableAlerts.value.length === 0) {
        _push(`<div class="mt-3"><button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"> 重置提示 </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section><section><h3 class="text-lg font-medium mb-3">不同尺寸</h3><div class="space-y-3">`);
      _push(ssrRenderComponent(unref(Gr), {
        variant: "info",
        title: "超小尺寸 (xs)",
        size: "xs"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 这是一个超小尺寸的提示框，适合紧凑型界面。 `);
          } else {
            return [
              createTextVNode(" 这是一个超小尺寸的提示框，适合紧凑型界面。 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Gr), {
        variant: "info",
        title: "小尺寸 (sm)",
        size: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 这是一个小尺寸的提示框，适合一般界面。 `);
          } else {
            return [
              createTextVNode(" 这是一个小尺寸的提示框，适合一般界面。 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Gr), {
        variant: "info",
        title: "中等尺寸 (md)",
        size: "md"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 这是一个中等尺寸的提示框，这是默认尺寸。 `);
          } else {
            return [
              createTextVNode(" 这是一个中等尺寸的提示框，这是默认尺寸。 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Gr), {
        variant: "info",
        title: "大尺寸 (lg)",
        size: "lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 这是一个大尺寸的提示框，适合重要信息展示。 `);
          } else {
            return [
              createTextVNode(" 这是一个大尺寸的提示框，适合重要信息展示。 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h3 class="text-lg font-medium mb-3">图标定制</h3><div class="space-y-3">`);
      _push(ssrRenderComponent(unref(Gr), {
        variant: "success",
        title: "无图标提示",
        icon: false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 这是一个没有图标的提示框，适合简洁风格。 `);
          } else {
            return [
              createTextVNode(" 这是一个没有图标的提示框，适合简洁风格。 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Gr), {
        variant: "info",
        title: "自定义图标"
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"${_scopeId}></path><line x1="12" y1="9" x2="12" y2="13"${_scopeId}></line><line x1="12" y1="17" x2="12.01" y2="17"${_scopeId}></line></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }, [
                createVNode("path", { d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" }),
                createVNode("line", {
                  x1: "12",
                  y1: "9",
                  x2: "12",
                  y2: "13"
                }),
                createVNode("line", {
                  x1: "12",
                  y1: "17",
                  x2: "12.01",
                  y2: "17"
                })
              ]))
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 这是一个带自定义图标的提示框，可以根据需要自定义图标。 `);
          } else {
            return [
              createTextVNode(" 这是一个带自定义图标的提示框，可以根据需要自定义图标。 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h3 class="text-lg font-medium mb-3">边框与阴影</h3><div class="space-y-3">`);
      _push(ssrRenderComponent(unref(Gr), {
        variant: "warning",
        title: "标准边框",
        description: "这是默认的边框样式。"
      }, null, _parent));
      _push(ssrRenderComponent(unref(Gr), {
        variant: "warning",
        title: "无边框",
        border: false,
        description: "这是没有边框的样式。"
      }, null, _parent));
      _push(ssrRenderComponent(unref(Gr), {
        variant: "warning",
        title: "带阴影",
        shadow: true,
        description: "这是带阴影效果的提示框。"
      }, null, _parent));
      _push(ssrRenderComponent(unref(Gr), {
        variant: "warning",
        title: "无边框带阴影",
        border: false,
        shadow: true,
        description: "这是没有边框但带阴影的提示框。"
      }, null, _parent));
      _push(`</div></section><section><h3 class="text-lg font-medium mb-3">圆角样式</h3><div class="space-y-3">`);
      _push(ssrRenderComponent(unref(Gr), {
        variant: "success",
        title: "无圆角 (none)",
        rounded: "none"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 这是一个没有圆角的提示框，适合方正风格。 `);
          } else {
            return [
              createTextVNode(" 这是一个没有圆角的提示框，适合方正风格。 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Gr), {
        variant: "success",
        title: "小圆角 (sm)",
        rounded: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 这是一个小圆角的提示框。 `);
          } else {
            return [
              createTextVNode(" 这是一个小圆角的提示框。 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Gr), {
        variant: "success",
        title: "中等圆角 (md)",
        rounded: "md"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 这是一个中等圆角的提示框，这是默认圆角。 `);
          } else {
            return [
              createTextVNode(" 这是一个中等圆角的提示框，这是默认圆角。 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Gr), {
        variant: "success",
        title: "大圆角 (lg)",
        rounded: "lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 这是一个大圆角的提示框。 `);
          } else {
            return [
              createTextVNode(" 这是一个大圆角的提示框。 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Gr), {
        variant: "success",
        title: "满圆角 (full)",
        rounded: "full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 这是一个满圆角的提示框，适合圆润风格。 `);
          } else {
            return [
              createTextVNode(" 这是一个满圆角的提示框，适合圆润风格。 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section><h3 class="text-lg font-medium mb-3">组合样式</h3><div class="space-y-3">`);
      _push(ssrRenderComponent(unref(Gr), {
        variant: "error",
        title: "重要错误提示",
        size: "lg",
        rounded: "lg",
        shadow: true,
        closable: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 这是一个重要的错误提示，使用了大尺寸、大圆角和阴影效果，并且可以关闭。 `);
          } else {
            return [
              createTextVNode(" 这是一个重要的错误提示，使用了大尺寸、大圆角和阴影效果，并且可以关闭。 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Gr), {
        variant: "info",
        icon: false,
        border: false,
        shadow: true,
        rounded: "full",
        class: "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="font-medium"${_scopeId}>自定义渐变背景</div> 这是一个使用自定义类添加渐变背景的提示框，同时移除了图标和边框，添加了阴影和满圆角。 `);
          } else {
            return [
              createVNode("div", { class: "font-medium" }, "自定义渐变背景"),
              createTextVNode(" 这是一个使用自定义类添加渐变背景的提示框，同时移除了图标和边框，添加了阴影和满圆角。 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/alert/example/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
