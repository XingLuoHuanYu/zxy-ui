import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { L as Rd, M as Ed } from "./index.esm.BIucDlT0.js";
/* empty css             */
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const isDarkMode = ref(false);
    if (typeof window !== "undefined") {
      isDarkMode.value = document.documentElement.classList.contains("dark") || window.matchMedia("(prefers-color-scheme: dark)").matches;
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
        isDarkMode.value = e.matches;
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "timeline-examples" }, _attrs))} data-v-9441de77><section class="example-section" data-v-9441de77><h2 class="example-title" data-v-9441de77>基础用法</h2><div class="example-container" data-v-9441de77>`);
      _push(ssrRenderComponent(unref(Rd), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Ed), {
              position: 0,
              isLast: false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="timeline-title" data-v-9441de77${_scopeId2}>创建项目</div><div class="timeline-date" data-v-9441de77${_scopeId2}>2023-01-01</div><div class="timeline-content" data-v-9441de77${_scopeId2}>项目初始化完成</div>`);
                } else {
                  return [
                    createVNode("div", { class: "timeline-title" }, "创建项目"),
                    createVNode("div", { class: "timeline-date" }, "2023-01-01"),
                    createVNode("div", { class: "timeline-content" }, "项目初始化完成")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ed), {
              position: 1,
              isLast: false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="timeline-title" data-v-9441de77${_scopeId2}>开发阶段</div><div class="timeline-date" data-v-9441de77${_scopeId2}>2023-02-15</div><div class="timeline-content" data-v-9441de77${_scopeId2}>完成核心功能开发</div>`);
                } else {
                  return [
                    createVNode("div", { class: "timeline-title" }, "开发阶段"),
                    createVNode("div", { class: "timeline-date" }, "2023-02-15"),
                    createVNode("div", { class: "timeline-content" }, "完成核心功能开发")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ed), {
              position: 2,
              isLast: true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="timeline-title" data-v-9441de77${_scopeId2}>测试阶段</div><div class="timeline-date" data-v-9441de77${_scopeId2}>2023-03-20</div><div class="timeline-content" data-v-9441de77${_scopeId2}>完成所有测试用例</div>`);
                } else {
                  return [
                    createVNode("div", { class: "timeline-title" }, "测试阶段"),
                    createVNode("div", { class: "timeline-date" }, "2023-03-20"),
                    createVNode("div", { class: "timeline-content" }, "完成所有测试用例")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Ed), {
                position: 0,
                isLast: false
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "timeline-title" }, "创建项目"),
                  createVNode("div", { class: "timeline-date" }, "2023-01-01"),
                  createVNode("div", { class: "timeline-content" }, "项目初始化完成")
                ]),
                _: 1
              }),
              createVNode(unref(Ed), {
                position: 1,
                isLast: false
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "timeline-title" }, "开发阶段"),
                  createVNode("div", { class: "timeline-date" }, "2023-02-15"),
                  createVNode("div", { class: "timeline-content" }, "完成核心功能开发")
                ]),
                _: 1
              }),
              createVNode(unref(Ed), {
                position: 2,
                isLast: true
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "timeline-title" }, "测试阶段"),
                  createVNode("div", { class: "timeline-date" }, "2023-03-20"),
                  createVNode("div", { class: "timeline-content" }, "完成所有测试用例")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section class="example-section" data-v-9441de77><h2 class="example-title" data-v-9441de77>对齐方式</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-v-9441de77><div class="example-card" data-v-9441de77><h3 class="example-subtitle" data-v-9441de77>左侧对齐</h3>`);
      _push(ssrRenderComponent(unref(Rd), { align: "left" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Ed), {
              position: 0,
              isLast: false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="timeline-title" data-v-9441de77${_scopeId2}>创建项目</div><div class="timeline-date" data-v-9441de77${_scopeId2}>2023-01-01</div>`);
                } else {
                  return [
                    createVNode("div", { class: "timeline-title" }, "创建项目"),
                    createVNode("div", { class: "timeline-date" }, "2023-01-01")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ed), {
              position: 1,
              isLast: false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="timeline-title" data-v-9441de77${_scopeId2}>开发阶段</div><div class="timeline-date" data-v-9441de77${_scopeId2}>2023-02-15</div>`);
                } else {
                  return [
                    createVNode("div", { class: "timeline-title" }, "开发阶段"),
                    createVNode("div", { class: "timeline-date" }, "2023-02-15")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ed), {
              position: 2,
              isLast: true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="timeline-title" data-v-9441de77${_scopeId2}>测试阶段</div><div class="timeline-date" data-v-9441de77${_scopeId2}>2023-03-20</div>`);
                } else {
                  return [
                    createVNode("div", { class: "timeline-title" }, "测试阶段"),
                    createVNode("div", { class: "timeline-date" }, "2023-03-20")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Ed), {
                position: 0,
                isLast: false
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "timeline-title" }, "创建项目"),
                  createVNode("div", { class: "timeline-date" }, "2023-01-01")
                ]),
                _: 1
              }),
              createVNode(unref(Ed), {
                position: 1,
                isLast: false
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "timeline-title" }, "开发阶段"),
                  createVNode("div", { class: "timeline-date" }, "2023-02-15")
                ]),
                _: 1
              }),
              createVNode(unref(Ed), {
                position: 2,
                isLast: true
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "timeline-title" }, "测试阶段"),
                  createVNode("div", { class: "timeline-date" }, "2023-03-20")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="example-card" data-v-9441de77><h3 class="example-subtitle" data-v-9441de77>右侧对齐</h3>`);
      _push(ssrRenderComponent(unref(Rd), { align: "right" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Ed), {
              position: 0,
              isLast: false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="timeline-title" data-v-9441de77${_scopeId2}>创建项目</div><div class="timeline-date" data-v-9441de77${_scopeId2}>2023-01-01</div>`);
                } else {
                  return [
                    createVNode("div", { class: "timeline-title" }, "创建项目"),
                    createVNode("div", { class: "timeline-date" }, "2023-01-01")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ed), {
              position: 1,
              isLast: false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="timeline-title" data-v-9441de77${_scopeId2}>开发阶段</div><div class="timeline-date" data-v-9441de77${_scopeId2}>2023-02-15</div>`);
                } else {
                  return [
                    createVNode("div", { class: "timeline-title" }, "开发阶段"),
                    createVNode("div", { class: "timeline-date" }, "2023-02-15")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ed), {
              position: 2,
              isLast: true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="timeline-title" data-v-9441de77${_scopeId2}>测试阶段</div><div class="timeline-date" data-v-9441de77${_scopeId2}>2023-03-20</div>`);
                } else {
                  return [
                    createVNode("div", { class: "timeline-title" }, "测试阶段"),
                    createVNode("div", { class: "timeline-date" }, "2023-03-20")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Ed), {
                position: 0,
                isLast: false
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "timeline-title" }, "创建项目"),
                  createVNode("div", { class: "timeline-date" }, "2023-01-01")
                ]),
                _: 1
              }),
              createVNode(unref(Ed), {
                position: 1,
                isLast: false
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "timeline-title" }, "开发阶段"),
                  createVNode("div", { class: "timeline-date" }, "2023-02-15")
                ]),
                _: 1
              }),
              createVNode(unref(Ed), {
                position: 2,
                isLast: true
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "timeline-title" }, "测试阶段"),
                  createVNode("div", { class: "timeline-date" }, "2023-03-20")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="example-card" data-v-9441de77><h3 class="example-subtitle" data-v-9441de77>交替对齐</h3>`);
      _push(ssrRenderComponent(unref(Rd), { align: "alternate" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Ed), {
              position: 0,
              isLast: false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="timeline-title" data-v-9441de77${_scopeId2}>创建项目</div><div class="timeline-date" data-v-9441de77${_scopeId2}>2023-01-01</div>`);
                } else {
                  return [
                    createVNode("div", { class: "timeline-title" }, "创建项目"),
                    createVNode("div", { class: "timeline-date" }, "2023-01-01")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ed), {
              position: 1,
              isLast: false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="timeline-title" data-v-9441de77${_scopeId2}>开发阶段</div><div class="timeline-date" data-v-9441de77${_scopeId2}>2023-02-15</div>`);
                } else {
                  return [
                    createVNode("div", { class: "timeline-title" }, "开发阶段"),
                    createVNode("div", { class: "timeline-date" }, "2023-02-15")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ed), {
              position: 2,
              isLast: false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="timeline-title" data-v-9441de77${_scopeId2}>测试阶段</div><div class="timeline-date" data-v-9441de77${_scopeId2}>2023-03-20</div>`);
                } else {
                  return [
                    createVNode("div", { class: "timeline-title" }, "测试阶段"),
                    createVNode("div", { class: "timeline-date" }, "2023-03-20")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ed), {
              position: 3,
              isLast: true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="timeline-title" data-v-9441de77${_scopeId2}>发布阶段</div><div class="timeline-date" data-v-9441de77${_scopeId2}>2023-04-10</div>`);
                } else {
                  return [
                    createVNode("div", { class: "timeline-title" }, "发布阶段"),
                    createVNode("div", { class: "timeline-date" }, "2023-04-10")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Ed), {
                position: 0,
                isLast: false
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "timeline-title" }, "创建项目"),
                  createVNode("div", { class: "timeline-date" }, "2023-01-01")
                ]),
                _: 1
              }),
              createVNode(unref(Ed), {
                position: 1,
                isLast: false
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "timeline-title" }, "开发阶段"),
                  createVNode("div", { class: "timeline-date" }, "2023-02-15")
                ]),
                _: 1
              }),
              createVNode(unref(Ed), {
                position: 2,
                isLast: false
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "timeline-title" }, "测试阶段"),
                  createVNode("div", { class: "timeline-date" }, "2023-03-20")
                ]),
                _: 1
              }),
              createVNode(unref(Ed), {
                position: 3,
                isLast: true
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "timeline-title" }, "发布阶段"),
                  createVNode("div", { class: "timeline-date" }, "2023-04-10")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="example-section" data-v-9441de77><h2 class="example-title" data-v-9441de77>自定义点和线</h2><div class="example-container" data-v-9441de77>`);
      _push(ssrRenderComponent(unref(Rd), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Ed), {
              position: 0,
              isLast: false,
              "dot-color": "var(--example-success)"
            }, {
              dot: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-check" data-v-9441de77${_scopeId2}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" data-v-9441de77${_scopeId2}></path><polyline points="22 4 12 14.01 9 11.01" data-v-9441de77${_scopeId2}></polyline></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "16",
                      height: "16",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      class: "icon-check"
                    }, [
                      createVNode("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
                      createVNode("polyline", { points: "22 4 12 14.01 9 11.01" })
                    ]))
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="timeline-title" data-v-9441de77${_scopeId2}>任务完成</div><div class="timeline-date" data-v-9441de77${_scopeId2}>2023-01-01</div>`);
                } else {
                  return [
                    createVNode("div", { class: "timeline-title" }, "任务完成"),
                    createVNode("div", { class: "timeline-date" }, "2023-01-01")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ed), {
              position: 1,
              isLast: false,
              "dot-color": "var(--example-warning)",
              "line-color": "var(--example-warning)"
            }, {
              dot: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-alert" data-v-9441de77${_scopeId2}><circle cx="12" cy="12" r="10" data-v-9441de77${_scopeId2}></circle><line x1="12" y1="8" x2="12" y2="12" data-v-9441de77${_scopeId2}></line><line x1="12" y1="16" x2="12.01" y2="16" data-v-9441de77${_scopeId2}></line></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "16",
                      height: "16",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      class: "icon-alert"
                    }, [
                      createVNode("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10"
                      }),
                      createVNode("line", {
                        x1: "12",
                        y1: "8",
                        x2: "12",
                        y2: "12"
                      }),
                      createVNode("line", {
                        x1: "12",
                        y1: "16",
                        x2: "12.01",
                        y2: "16"
                      })
                    ]))
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="timeline-title" data-v-9441de77${_scopeId2}>进行中</div><div class="timeline-date" data-v-9441de77${_scopeId2}>2023-02-15</div>`);
                } else {
                  return [
                    createVNode("div", { class: "timeline-title" }, "进行中"),
                    createVNode("div", { class: "timeline-date" }, "2023-02-15")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ed), {
              position: 2,
              isLast: true,
              "dot-color": "var(--example-danger)",
              "line-color": "var(--example-danger)"
            }, {
              dot: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-cancel" data-v-9441de77${_scopeId2}><circle cx="12" cy="12" r="10" data-v-9441de77${_scopeId2}></circle><line x1="15" y1="9" x2="9" y2="15" data-v-9441de77${_scopeId2}></line><line x1="9" y1="9" x2="15" y2="15" data-v-9441de77${_scopeId2}></line></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "16",
                      height: "16",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      class: "icon-cancel"
                    }, [
                      createVNode("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10"
                      }),
                      createVNode("line", {
                        x1: "15",
                        y1: "9",
                        x2: "9",
                        y2: "15"
                      }),
                      createVNode("line", {
                        x1: "9",
                        y1: "9",
                        x2: "15",
                        y2: "15"
                      })
                    ]))
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="timeline-title" data-v-9441de77${_scopeId2}>已取消</div><div class="timeline-date" data-v-9441de77${_scopeId2}>2023-03-20</div>`);
                } else {
                  return [
                    createVNode("div", { class: "timeline-title" }, "已取消"),
                    createVNode("div", { class: "timeline-date" }, "2023-03-20")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Ed), {
                position: 0,
                isLast: false,
                "dot-color": "var(--example-success)"
              }, {
                dot: withCtx(() => [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    class: "icon-check"
                  }, [
                    createVNode("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
                    createVNode("polyline", { points: "22 4 12 14.01 9 11.01" })
                  ]))
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "timeline-title" }, "任务完成"),
                  createVNode("div", { class: "timeline-date" }, "2023-01-01")
                ]),
                _: 1
              }),
              createVNode(unref(Ed), {
                position: 1,
                isLast: false,
                "dot-color": "var(--example-warning)",
                "line-color": "var(--example-warning)"
              }, {
                dot: withCtx(() => [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    class: "icon-alert"
                  }, [
                    createVNode("circle", {
                      cx: "12",
                      cy: "12",
                      r: "10"
                    }),
                    createVNode("line", {
                      x1: "12",
                      y1: "8",
                      x2: "12",
                      y2: "12"
                    }),
                    createVNode("line", {
                      x1: "12",
                      y1: "16",
                      x2: "12.01",
                      y2: "16"
                    })
                  ]))
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "timeline-title" }, "进行中"),
                  createVNode("div", { class: "timeline-date" }, "2023-02-15")
                ]),
                _: 1
              }),
              createVNode(unref(Ed), {
                position: 2,
                isLast: true,
                "dot-color": "var(--example-danger)",
                "line-color": "var(--example-danger)"
              }, {
                dot: withCtx(() => [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    class: "icon-cancel"
                  }, [
                    createVNode("circle", {
                      cx: "12",
                      cy: "12",
                      r: "10"
                    }),
                    createVNode("line", {
                      x1: "15",
                      y1: "9",
                      x2: "9",
                      y2: "15"
                    }),
                    createVNode("line", {
                      x1: "9",
                      y1: "9",
                      x2: "15",
                      y2: "15"
                    })
                  ]))
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "timeline-title" }, "已取消"),
                  createVNode("div", { class: "timeline-date" }, "2023-03-20")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section class="example-section" data-v-9441de77><h2 class="example-title" data-v-9441de77>反向内容</h2><div class="example-container" data-v-9441de77>`);
      _push(ssrRenderComponent(unref(Rd), { align: "alternate" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Ed), {
              position: 0,
              isLast: false
            }, {
              opposite: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="timeline-tag timeline-tag-blue" data-v-9441de77${_scopeId2}>阶段 1</div>`);
                } else {
                  return [
                    createVNode("div", { class: "timeline-tag timeline-tag-blue" }, "阶段 1")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="timeline-title" data-v-9441de77${_scopeId2}>创建项目</div><div class="timeline-date" data-v-9441de77${_scopeId2}>2023-01-01</div>`);
                } else {
                  return [
                    createVNode("div", { class: "timeline-title" }, "创建项目"),
                    createVNode("div", { class: "timeline-date" }, "2023-01-01")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ed), {
              position: 1,
              isLast: false
            }, {
              opposite: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="timeline-tag timeline-tag-green" data-v-9441de77${_scopeId2}>阶段 2</div>`);
                } else {
                  return [
                    createVNode("div", { class: "timeline-tag timeline-tag-green" }, "阶段 2")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="timeline-title" data-v-9441de77${_scopeId2}>开发阶段</div><div class="timeline-date" data-v-9441de77${_scopeId2}>2023-02-15</div>`);
                } else {
                  return [
                    createVNode("div", { class: "timeline-title" }, "开发阶段"),
                    createVNode("div", { class: "timeline-date" }, "2023-02-15")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ed), {
              position: 2,
              isLast: true
            }, {
              opposite: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="timeline-tag timeline-tag-amber" data-v-9441de77${_scopeId2}>阶段 3</div>`);
                } else {
                  return [
                    createVNode("div", { class: "timeline-tag timeline-tag-amber" }, "阶段 3")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="timeline-title" data-v-9441de77${_scopeId2}>测试阶段</div><div class="timeline-date" data-v-9441de77${_scopeId2}>2023-03-20</div>`);
                } else {
                  return [
                    createVNode("div", { class: "timeline-title" }, "测试阶段"),
                    createVNode("div", { class: "timeline-date" }, "2023-03-20")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Ed), {
                position: 0,
                isLast: false
              }, {
                opposite: withCtx(() => [
                  createVNode("div", { class: "timeline-tag timeline-tag-blue" }, "阶段 1")
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "timeline-title" }, "创建项目"),
                  createVNode("div", { class: "timeline-date" }, "2023-01-01")
                ]),
                _: 1
              }),
              createVNode(unref(Ed), {
                position: 1,
                isLast: false
              }, {
                opposite: withCtx(() => [
                  createVNode("div", { class: "timeline-tag timeline-tag-green" }, "阶段 2")
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "timeline-title" }, "开发阶段"),
                  createVNode("div", { class: "timeline-date" }, "2023-02-15")
                ]),
                _: 1
              }),
              createVNode(unref(Ed), {
                position: 2,
                isLast: true
              }, {
                opposite: withCtx(() => [
                  createVNode("div", { class: "timeline-tag timeline-tag-amber" }, "阶段 3")
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "timeline-title" }, "测试阶段"),
                  createVNode("div", { class: "timeline-date" }, "2023-03-20")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section class="example-section" data-v-9441de77><h2 class="example-title" data-v-9441de77>自定义样式</h2><div class="example-container custom-timeline" data-v-9441de77>`);
      _push(ssrRenderComponent(unref(Rd), {
        pt: {
          root: isDarkMode.value ? "border-l-2 border-blue-400 pl-6 ml-6" : "border-l-2 border-blue-500 pl-6 ml-6"
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Ed), {
              position: 0,
              isLast: false,
              pt: {
                dot: isDarkMode.value ? "bg-blue-400 border-gray-800" : "bg-blue-500 border-white",
                connector: isDarkMode.value ? "bg-blue-400" : "bg-blue-500"
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="timeline-title" data-v-9441de77${_scopeId2}>创建项目</div><div class="timeline-date" data-v-9441de77${_scopeId2}>2023-01-01</div>`);
                } else {
                  return [
                    createVNode("div", { class: "timeline-title" }, "创建项目"),
                    createVNode("div", { class: "timeline-date" }, "2023-01-01")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ed), {
              position: 1,
              isLast: false,
              pt: {
                dot: isDarkMode.value ? "bg-green-400 border-gray-800" : "bg-green-500 border-white",
                connector: isDarkMode.value ? "bg-green-400" : "bg-green-500"
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="timeline-title" data-v-9441de77${_scopeId2}>开发阶段</div><div class="timeline-date" data-v-9441de77${_scopeId2}>2023-02-15</div>`);
                } else {
                  return [
                    createVNode("div", { class: "timeline-title" }, "开发阶段"),
                    createVNode("div", { class: "timeline-date" }, "2023-02-15")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ed), {
              position: 2,
              isLast: true,
              pt: {
                dot: isDarkMode.value ? "bg-amber-400 border-gray-800" : "bg-amber-500 border-white",
                connector: isDarkMode.value ? "bg-amber-400" : "bg-amber-500"
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="timeline-title" data-v-9441de77${_scopeId2}>测试阶段</div><div class="timeline-date" data-v-9441de77${_scopeId2}>2023-03-20</div>`);
                } else {
                  return [
                    createVNode("div", { class: "timeline-title" }, "测试阶段"),
                    createVNode("div", { class: "timeline-date" }, "2023-03-20")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Ed), {
                position: 0,
                isLast: false,
                pt: {
                  dot: isDarkMode.value ? "bg-blue-400 border-gray-800" : "bg-blue-500 border-white",
                  connector: isDarkMode.value ? "bg-blue-400" : "bg-blue-500"
                }
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "timeline-title" }, "创建项目"),
                  createVNode("div", { class: "timeline-date" }, "2023-01-01")
                ]),
                _: 1
              }, 8, ["pt"]),
              createVNode(unref(Ed), {
                position: 1,
                isLast: false,
                pt: {
                  dot: isDarkMode.value ? "bg-green-400 border-gray-800" : "bg-green-500 border-white",
                  connector: isDarkMode.value ? "bg-green-400" : "bg-green-500"
                }
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "timeline-title" }, "开发阶段"),
                  createVNode("div", { class: "timeline-date" }, "2023-02-15")
                ]),
                _: 1
              }, 8, ["pt"]),
              createVNode(unref(Ed), {
                position: 2,
                isLast: true,
                pt: {
                  dot: isDarkMode.value ? "bg-amber-400 border-gray-800" : "bg-amber-500 border-white",
                  connector: isDarkMode.value ? "bg-amber-400" : "bg-amber-500"
                }
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "timeline-title" }, "测试阶段"),
                  createVNode("div", { class: "timeline-date" }, "2023-03-20")
                ]),
                _: 1
              }, 8, ["pt"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section class="example-section" data-v-9441de77><h2 class="example-title" data-v-9441de77>无样式模式</h2><div class="example-container" data-v-9441de77>`);
      _push(ssrRenderComponent(unref(Rd), {
        unstyled: "",
        pt: {
          root: isDarkMode.value ? "relative border-l-2 border-gray-600 ml-4 pl-8" : "relative border-l-2 border-gray-300 ml-4 pl-8"
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Ed), {
              position: 0,
              isLast: false,
              unstyled: "",
              pt: {
                root: "mb-8 relative",
                dot: isDarkMode.value ? "absolute -left-10 flex items-center justify-center w-6 h-6 rounded-full bg-gray-800 border-4 border-blue-400" : "absolute -left-10 flex items-center justify-center w-6 h-6 rounded-full bg-white border-4 border-blue-500",
                content: isDarkMode.value ? "bg-gray-800 p-4 rounded-md shadow-md border border-gray-700" : "bg-white p-4 rounded-md shadow-md border border-gray-100",
                connector: isDarkMode.value ? "absolute top-6 bottom-0 -left-9 w-0.5 bg-gray-600" : "absolute top-6 bottom-0 -left-9 w-0.5 bg-gray-300"
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="timeline-title" data-v-9441de77${_scopeId2}>创建项目</div><div class="timeline-date" data-v-9441de77${_scopeId2}>2023-01-01</div>`);
                } else {
                  return [
                    createVNode("div", { class: "timeline-title" }, "创建项目"),
                    createVNode("div", { class: "timeline-date" }, "2023-01-01")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ed), {
              position: 1,
              isLast: false,
              unstyled: "",
              pt: {
                root: "mb-8 relative",
                dot: isDarkMode.value ? "absolute -left-10 flex items-center justify-center w-6 h-6 rounded-full bg-gray-800 border-4 border-green-400" : "absolute -left-10 flex items-center justify-center w-6 h-6 rounded-full bg-white border-4 border-green-500",
                content: isDarkMode.value ? "bg-gray-800 p-4 rounded-md shadow-md border border-gray-700" : "bg-white p-4 rounded-md shadow-md border border-gray-100",
                connector: isDarkMode.value ? "absolute top-6 bottom-0 -left-9 w-0.5 bg-gray-600" : "absolute top-6 bottom-0 -left-9 w-0.5 bg-gray-300"
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="timeline-title" data-v-9441de77${_scopeId2}>开发阶段</div><div class="timeline-date" data-v-9441de77${_scopeId2}>2023-02-15</div>`);
                } else {
                  return [
                    createVNode("div", { class: "timeline-title" }, "开发阶段"),
                    createVNode("div", { class: "timeline-date" }, "2023-02-15")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ed), {
              position: 2,
              isLast: true,
              unstyled: "",
              pt: {
                root: "mb-8 relative",
                dot: isDarkMode.value ? "absolute -left-10 flex items-center justify-center w-6 h-6 rounded-full bg-gray-800 border-4 border-amber-400" : "absolute -left-10 flex items-center justify-center w-6 h-6 rounded-full bg-white border-4 border-amber-500",
                content: isDarkMode.value ? "bg-gray-800 p-4 rounded-md shadow-md border border-gray-700" : "bg-white p-4 rounded-md shadow-md border border-gray-100"
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="timeline-title" data-v-9441de77${_scopeId2}>测试阶段</div><div class="timeline-date" data-v-9441de77${_scopeId2}>2023-03-20</div>`);
                } else {
                  return [
                    createVNode("div", { class: "timeline-title" }, "测试阶段"),
                    createVNode("div", { class: "timeline-date" }, "2023-03-20")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Ed), {
                position: 0,
                isLast: false,
                unstyled: "",
                pt: {
                  root: "mb-8 relative",
                  dot: isDarkMode.value ? "absolute -left-10 flex items-center justify-center w-6 h-6 rounded-full bg-gray-800 border-4 border-blue-400" : "absolute -left-10 flex items-center justify-center w-6 h-6 rounded-full bg-white border-4 border-blue-500",
                  content: isDarkMode.value ? "bg-gray-800 p-4 rounded-md shadow-md border border-gray-700" : "bg-white p-4 rounded-md shadow-md border border-gray-100",
                  connector: isDarkMode.value ? "absolute top-6 bottom-0 -left-9 w-0.5 bg-gray-600" : "absolute top-6 bottom-0 -left-9 w-0.5 bg-gray-300"
                }
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "timeline-title" }, "创建项目"),
                  createVNode("div", { class: "timeline-date" }, "2023-01-01")
                ]),
                _: 1
              }, 8, ["pt"]),
              createVNode(unref(Ed), {
                position: 1,
                isLast: false,
                unstyled: "",
                pt: {
                  root: "mb-8 relative",
                  dot: isDarkMode.value ? "absolute -left-10 flex items-center justify-center w-6 h-6 rounded-full bg-gray-800 border-4 border-green-400" : "absolute -left-10 flex items-center justify-center w-6 h-6 rounded-full bg-white border-4 border-green-500",
                  content: isDarkMode.value ? "bg-gray-800 p-4 rounded-md shadow-md border border-gray-700" : "bg-white p-4 rounded-md shadow-md border border-gray-100",
                  connector: isDarkMode.value ? "absolute top-6 bottom-0 -left-9 w-0.5 bg-gray-600" : "absolute top-6 bottom-0 -left-9 w-0.5 bg-gray-300"
                }
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "timeline-title" }, "开发阶段"),
                  createVNode("div", { class: "timeline-date" }, "2023-02-15")
                ]),
                _: 1
              }, 8, ["pt"]),
              createVNode(unref(Ed), {
                position: 2,
                isLast: true,
                unstyled: "",
                pt: {
                  root: "mb-8 relative",
                  dot: isDarkMode.value ? "absolute -left-10 flex items-center justify-center w-6 h-6 rounded-full bg-gray-800 border-4 border-amber-400" : "absolute -left-10 flex items-center justify-center w-6 h-6 rounded-full bg-white border-4 border-amber-500",
                  content: isDarkMode.value ? "bg-gray-800 p-4 rounded-md shadow-md border border-gray-700" : "bg-white p-4 rounded-md shadow-md border border-gray-100"
                }
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "timeline-title" }, "测试阶段"),
                  createVNode("div", { class: "timeline-date" }, "2023-03-20")
                ]),
                _: 1
              }, 8, ["pt"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section class="example-section" data-v-9441de77><h2 class="example-title" data-v-9441de77>水平方向</h2><div class="example-container" data-v-9441de77>`);
      _push(ssrRenderComponent(unref(Rd), { orientation: "horizontal" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Ed), {
              position: 0,
              isLast: false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="timeline-title" data-v-9441de77${_scopeId2}>创建项目</div><div class="timeline-date" data-v-9441de77${_scopeId2}>2023-01-01</div>`);
                } else {
                  return [
                    createVNode("div", { class: "timeline-title" }, "创建项目"),
                    createVNode("div", { class: "timeline-date" }, "2023-01-01")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ed), {
              position: 1,
              isLast: false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="timeline-title" data-v-9441de77${_scopeId2}>开发阶段</div><div class="timeline-date" data-v-9441de77${_scopeId2}>2023-02-15</div>`);
                } else {
                  return [
                    createVNode("div", { class: "timeline-title" }, "开发阶段"),
                    createVNode("div", { class: "timeline-date" }, "2023-02-15")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ed), {
              position: 2,
              isLast: false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="timeline-title" data-v-9441de77${_scopeId2}>测试阶段</div><div class="timeline-date" data-v-9441de77${_scopeId2}>2023-03-20</div>`);
                } else {
                  return [
                    createVNode("div", { class: "timeline-title" }, "测试阶段"),
                    createVNode("div", { class: "timeline-date" }, "2023-03-20")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Ed), {
              position: 3,
              isLast: true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="timeline-title" data-v-9441de77${_scopeId2}>发布阶段</div><div class="timeline-date" data-v-9441de77${_scopeId2}>2023-04-10</div>`);
                } else {
                  return [
                    createVNode("div", { class: "timeline-title" }, "发布阶段"),
                    createVNode("div", { class: "timeline-date" }, "2023-04-10")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Ed), {
                position: 0,
                isLast: false
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "timeline-title" }, "创建项目"),
                  createVNode("div", { class: "timeline-date" }, "2023-01-01")
                ]),
                _: 1
              }),
              createVNode(unref(Ed), {
                position: 1,
                isLast: false
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "timeline-title" }, "开发阶段"),
                  createVNode("div", { class: "timeline-date" }, "2023-02-15")
                ]),
                _: 1
              }),
              createVNode(unref(Ed), {
                position: 2,
                isLast: false
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "timeline-title" }, "测试阶段"),
                  createVNode("div", { class: "timeline-date" }, "2023-03-20")
                ]),
                _: 1
              }),
              createVNode(unref(Ed), {
                position: 3,
                isLast: true
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "timeline-title" }, "发布阶段"),
                  createVNode("div", { class: "timeline-date" }, "2023-04-10")
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/timeline/example/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9441de77"]]);
export {
  index as default
};
