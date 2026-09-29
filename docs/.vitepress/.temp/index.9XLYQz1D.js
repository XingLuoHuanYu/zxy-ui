import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { A as Ar } from "./index.esm.BIucDlT0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const selected1 = ref(false);
    const selected2 = ref(true);
    const selected3 = ref(false);
    const tags = ref(["Vue", "React", "Angular", "Svelte"]);
    const handleClose = (event) => {
      console.log("芯片被关闭", event);
    };
    const removeTag = (index) => {
      tags.value.splice(index, 1);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-7xl mx-auto px-4" }, _attrs))}><div class="grid grid-cols-1 md:grid-cols-2 gap-8"><div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100"><h3 class="text-lg font-medium mb-4 border-b pb-2">基础用法</h3><div class="flex flex-wrap gap-2">`);
      _push(ssrRenderComponent(unref(Ar), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`默认芯片`);
          } else {
            return [
              createTextVNode("默认芯片")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), { color: "primary" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`主色芯片`);
          } else {
            return [
              createTextVNode("主色芯片")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), { color: "secondary" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`次要色芯片`);
          } else {
            return [
              createTextVNode("次要色芯片")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), { color: "success" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`成功芯片`);
          } else {
            return [
              createTextVNode("成功芯片")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), { color: "warning" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`警告芯片`);
          } else {
            return [
              createTextVNode("警告芯片")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), { color: "danger" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`危险芯片`);
          } else {
            return [
              createTextVNode("危险芯片")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100"><h3 class="text-lg font-medium mb-4 border-b pb-2">禁用状态</h3><div class="flex flex-wrap gap-2">`);
      _push(ssrRenderComponent(unref(Ar), { disabled: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`禁用芯片`);
          } else {
            return [
              createTextVNode("禁用芯片")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), {
        color: "primary",
        disabled: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`禁用主色`);
          } else {
            return [
              createTextVNode("禁用主色")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), {
        color: "danger",
        disabled: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`禁用危险`);
          } else {
            return [
              createTextVNode("禁用危险")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100"><h3 class="text-lg font-medium mb-4 border-b pb-2">尺寸</h3><div class="flex items-center flex-wrap gap-3">`);
      _push(ssrRenderComponent(unref(Ar), {
        size: "sm",
        color: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`小号`);
          } else {
            return [
              createTextVNode("小号")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), {
        size: "md",
        color: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`中号`);
          } else {
            return [
              createTextVNode("中号")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), {
        size: "lg",
        color: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`大号`);
          } else {
            return [
              createTextVNode("大号")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100"><h3 class="text-lg font-medium mb-4 border-b pb-2">圆角</h3><div class="flex flex-wrap gap-3">`);
      _push(ssrRenderComponent(unref(Ar), {
        radius: "none",
        color: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`无圆角`);
          } else {
            return [
              createTextVNode("无圆角")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), {
        radius: "sm",
        color: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`小圆角`);
          } else {
            return [
              createTextVNode("小圆角")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), {
        radius: "md",
        color: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`中圆角`);
          } else {
            return [
              createTextVNode("中圆角")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), {
        radius: "lg",
        color: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`大圆角`);
          } else {
            return [
              createTextVNode("大圆角")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), {
        radius: "full",
        color: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`全圆角`);
          } else {
            return [
              createTextVNode("全圆角")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100"><h3 class="text-lg font-medium mb-4 border-b pb-2">颜色</h3><div class="flex flex-wrap gap-2">`);
      _push(ssrRenderComponent(unref(Ar), { color: "default" }, {
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
      _push(ssrRenderComponent(unref(Ar), { color: "primary" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`主色`);
          } else {
            return [
              createTextVNode("主色")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), { color: "secondary" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`次要色`);
          } else {
            return [
              createTextVNode("次要色")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), { color: "success" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`成功`);
          } else {
            return [
              createTextVNode("成功")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), { color: "warning" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`警告`);
          } else {
            return [
              createTextVNode("警告")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), { color: "danger" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`危险`);
          } else {
            return [
              createTextVNode("危险")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100"><h3 class="text-lg font-medium mb-4 border-b pb-2">自定义内容</h3><div class="flex flex-wrap gap-3">`);
      _push(ssrRenderComponent(unref(Ar), { color: "primary" }, {
        startContent: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-primary-600"${_scopeId}>🔥</span>`);
          } else {
            return [
              createVNode("span", { class: "text-primary-600" }, "🔥")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 热门话题 `);
          } else {
            return [
              createTextVNode(" 热门话题 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), { color: "success" }, {
        startContent: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-3.5 h-3.5 text-success-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-3.5 h-3.5 text-success-600",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                fill: "currentColor"
              }, [
                createVNode("path", {
                  "fill-rule": "evenodd",
                  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                  "clip-rule": "evenodd"
                })
              ]))
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 已完成 `);
          } else {
            return [
              createTextVNode(" 已完成 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), { color: "warning" }, {
        endContent: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-3.5 h-3.5 text-warning-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-3.5 h-3.5 text-warning-600",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                fill: "currentColor"
              }, [
                createVNode("path", {
                  "fill-rule": "evenodd",
                  d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                  "clip-rule": "evenodd"
                })
              ]))
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 需注意 `);
          } else {
            return [
              createTextVNode(" 需注意 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100"><h3 class="text-lg font-medium mb-4 border-b pb-2">带头像</h3><div class="flex flex-wrap gap-3">`);
      _push(ssrRenderComponent(unref(Ar), { color: "primary" }, {
        avatar: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-center w-5 h-5 rounded-full bg-primary-500 text-white text-xs font-medium"${_scopeId}> U </div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-center w-5 h-5 rounded-full bg-primary-500 text-white text-xs font-medium" }, " U ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 用户 `);
          } else {
            return [
              createTextVNode(" 用户 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), { color: "success" }, {
        avatar: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-center w-5 h-5 rounded-full bg-success-500 text-white text-xs font-medium"${_scopeId}> A </div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-center w-5 h-5 rounded-full bg-success-500 text-white text-xs font-medium" }, " A ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 管理员 `);
          } else {
            return [
              createTextVNode(" 管理员 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), { color: "secondary" }, {
        avatar: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-center w-5 h-5 rounded-full bg-purple-500 text-white text-xs font-medium overflow-hidden"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"${_scopeId}><path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd"${_scopeId}></path></svg></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-center w-5 h-5 rounded-full bg-purple-500 text-white text-xs font-medium overflow-hidden" }, [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  fill: "currentColor",
                  class: "w-4 h-4"
                }, [
                  createVNode("path", {
                    "fill-rule": "evenodd",
                    d: "M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z",
                    "clip-rule": "evenodd"
                  })
                ]))
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 访客 `);
          } else {
            return [
              createTextVNode(" 访客 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100"><h3 class="text-lg font-medium mb-4 border-b pb-2">关闭按钮</h3><div class="flex flex-wrap gap-3">`);
      _push(ssrRenderComponent(unref(Ar), {
        closable: "",
        onClose: handleClose
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`可关闭芯片`);
          } else {
            return [
              createTextVNode("可关闭芯片")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), {
        closable: "",
        color: "primary",
        onClose: handleClose
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`主色`);
          } else {
            return [
              createTextVNode("主色")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), {
        closable: "",
        color: "danger",
        onClose: handleClose
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`危险`);
          } else {
            return [
              createTextVNode("危险")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100"><h3 class="text-lg font-medium mb-4 border-b pb-2">可选择</h3><div class="flex flex-wrap gap-3">`);
      _push(ssrRenderComponent(unref(Ar), {
        modelValue: selected1.value,
        "onUpdate:modelValue": ($event) => selected1.value = $event,
        selectable: "",
        color: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`选项1`);
          } else {
            return [
              createTextVNode("选项1")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), {
        modelValue: selected2.value,
        "onUpdate:modelValue": ($event) => selected2.value = $event,
        selectable: "",
        color: "secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`选项2`);
          } else {
            return [
              createTextVNode("选项2")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), {
        modelValue: selected3.value,
        "onUpdate:modelValue": ($event) => selected3.value = $event,
        selectable: "",
        color: "success"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`选项3`);
          } else {
            return [
              createTextVNode("选项3")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-3 text-sm text-gray-500"> 已选择: ${ssrInterpolate([
        selected1.value ? "选项1" : "",
        selected2.value ? "选项2" : "",
        selected3.value ? "选项3" : ""
      ].filter(Boolean).join(", ") || "无")}</div></div><div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100"><h3 class="text-lg font-medium mb-4 border-b pb-2">芯片列表</h3><div class="flex flex-wrap gap-2"><!--[-->`);
      ssrRenderList(tags.value, (tag, index) => {
        _push(ssrRenderComponent(unref(Ar), {
          key: index,
          closable: "",
          onClose: ($event) => removeTag(index)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(tag)}`);
            } else {
              return [
                createTextVNode(toDisplayString(tag), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--><button class="inline-flex items-center border border-dashed border-gray-300 rounded-full px-3 py-1 text-sm hover:bg-gray-50 transition-colors"><span class="mr-1">+</span> 添加标签 </button></div></div></div><div class="mt-8 bg-white rounded-lg shadow-sm p-6 border border-gray-100"><h3 class="text-lg font-medium mb-4 border-b pb-2">变体</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"><div><p class="text-sm text-gray-500 mb-2 font-medium">solid 变体</p><div class="flex flex-wrap gap-2">`);
      _push(ssrRenderComponent(unref(Ar), {
        variant: "solid",
        color: "default"
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
      _push(ssrRenderComponent(unref(Ar), {
        variant: "solid",
        color: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`主色`);
          } else {
            return [
              createTextVNode("主色")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), {
        variant: "solid",
        color: "secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`次要色`);
          } else {
            return [
              createTextVNode("次要色")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), {
        variant: "solid",
        color: "success"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`成功`);
          } else {
            return [
              createTextVNode("成功")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), {
        variant: "solid",
        color: "warning"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`警告`);
          } else {
            return [
              createTextVNode("警告")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), {
        variant: "solid",
        color: "danger"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`危险`);
          } else {
            return [
              createTextVNode("危险")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div><p class="text-sm text-gray-500 mb-2 font-medium">bordered 变体</p><div class="flex flex-wrap gap-2">`);
      _push(ssrRenderComponent(unref(Ar), {
        variant: "bordered",
        color: "default"
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
      _push(ssrRenderComponent(unref(Ar), {
        variant: "bordered",
        color: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`主色`);
          } else {
            return [
              createTextVNode("主色")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), {
        variant: "bordered",
        color: "secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`次要色`);
          } else {
            return [
              createTextVNode("次要色")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), {
        variant: "bordered",
        color: "success"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`成功`);
          } else {
            return [
              createTextVNode("成功")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), {
        variant: "bordered",
        color: "warning"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`警告`);
          } else {
            return [
              createTextVNode("警告")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), {
        variant: "bordered",
        color: "danger"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`危险`);
          } else {
            return [
              createTextVNode("危险")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div><p class="text-sm text-gray-500 mb-2 font-medium">light 变体</p><div class="flex flex-wrap gap-2">`);
      _push(ssrRenderComponent(unref(Ar), {
        variant: "light",
        color: "default"
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
      _push(ssrRenderComponent(unref(Ar), {
        variant: "light",
        color: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`主色`);
          } else {
            return [
              createTextVNode("主色")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), {
        variant: "light",
        color: "secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`次要色`);
          } else {
            return [
              createTextVNode("次要色")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), {
        variant: "light",
        color: "success"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`成功`);
          } else {
            return [
              createTextVNode("成功")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), {
        variant: "light",
        color: "warning"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`警告`);
          } else {
            return [
              createTextVNode("警告")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), {
        variant: "light",
        color: "danger"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`危险`);
          } else {
            return [
              createTextVNode("危险")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div><p class="text-sm text-gray-500 mb-2 font-medium">flat 变体</p><div class="flex flex-wrap gap-2">`);
      _push(ssrRenderComponent(unref(Ar), {
        variant: "flat",
        color: "default"
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
      _push(ssrRenderComponent(unref(Ar), {
        variant: "flat",
        color: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`主色`);
          } else {
            return [
              createTextVNode("主色")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), {
        variant: "flat",
        color: "secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`次要色`);
          } else {
            return [
              createTextVNode("次要色")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), {
        variant: "flat",
        color: "success"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`成功`);
          } else {
            return [
              createTextVNode("成功")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), {
        variant: "flat",
        color: "warning"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`警告`);
          } else {
            return [
              createTextVNode("警告")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), {
        variant: "flat",
        color: "danger"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`危险`);
          } else {
            return [
              createTextVNode("危险")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div><p class="text-sm text-gray-500 mb-2 font-medium">faded 变体</p><div class="flex flex-wrap gap-2">`);
      _push(ssrRenderComponent(unref(Ar), {
        variant: "faded",
        color: "default"
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
      _push(ssrRenderComponent(unref(Ar), {
        variant: "faded",
        color: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`主色`);
          } else {
            return [
              createTextVNode("主色")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), {
        variant: "faded",
        color: "secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`次要色`);
          } else {
            return [
              createTextVNode("次要色")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), {
        variant: "faded",
        color: "success"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`成功`);
          } else {
            return [
              createTextVNode("成功")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), {
        variant: "faded",
        color: "warning"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`警告`);
          } else {
            return [
              createTextVNode("警告")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), {
        variant: "faded",
        color: "danger"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`危险`);
          } else {
            return [
              createTextVNode("危险")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div><p class="text-sm text-gray-500 mb-2 font-medium">shadow 变体</p><div class="flex flex-wrap gap-2">`);
      _push(ssrRenderComponent(unref(Ar), {
        variant: "shadow",
        color: "default"
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
      _push(ssrRenderComponent(unref(Ar), {
        variant: "shadow",
        color: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`主色`);
          } else {
            return [
              createTextVNode("主色")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), {
        variant: "shadow",
        color: "secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`次要色`);
          } else {
            return [
              createTextVNode("次要色")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), {
        variant: "shadow",
        color: "success"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`成功`);
          } else {
            return [
              createTextVNode("成功")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), {
        variant: "shadow",
        color: "warning"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`警告`);
          } else {
            return [
              createTextVNode("警告")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), {
        variant: "shadow",
        color: "danger"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`危险`);
          } else {
            return [
              createTextVNode("危险")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div><p class="text-sm text-gray-500 mb-2 font-medium">dot 变体</p><div class="flex flex-wrap gap-2">`);
      _push(ssrRenderComponent(unref(Ar), {
        variant: "dot",
        color: "default"
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
      _push(ssrRenderComponent(unref(Ar), {
        variant: "dot",
        color: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`主色`);
          } else {
            return [
              createTextVNode("主色")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), {
        variant: "dot",
        color: "secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`次要色`);
          } else {
            return [
              createTextVNode("次要色")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), {
        variant: "dot",
        color: "success"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`成功`);
          } else {
            return [
              createTextVNode("成功")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), {
        variant: "dot",
        color: "warning"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`警告`);
          } else {
            return [
              createTextVNode("警告")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Ar), {
        variant: "dot",
        color: "danger"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`危险`);
          } else {
            return [
              createTextVNode("危险")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/chip/example/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
