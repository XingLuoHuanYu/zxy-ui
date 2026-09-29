import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ZxyUI 介绍","description":"","frontmatter":{},"headers":[],"relativePath":"guide/getting-started/introduction.md","filePath":"guide/getting-started/introduction.md"}');
const _sfc_main = { name: "guide/getting-started/introduction.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="zxyui-介绍" tabindex="-1">ZxyUI 介绍 <a class="header-anchor" href="#zxyui-介绍" aria-label="Permalink to &quot;ZxyUI 介绍&quot;">​</a></h1><p>ZxyUI 是一个基于 Vue 3 的现代化组件库，提供丰富的组件和灵活的主题定制能力。</p><h2 id="核心特性" tabindex="-1">核心特性 <a class="header-anchor" href="#核心特性" aria-label="Permalink to &quot;核心特性&quot;">​</a></h2><ul><li><strong>丰富组件</strong> - 提供 20+ 个高质量通用组件，满足各类业务场景</li><li><strong>中文优先</strong> - 由国人开发，完善的中英文文档和技术支持</li><li><strong>按需引入</strong> - 支持组件按需引入，优化应用体积</li><li><strong>主题定制</strong> - 灵活的主题系统，轻松打造品牌专属UI</li><li><strong>国际化</strong> - 内置多语言支持，轻松实现全球化应用</li><li><strong>TypeScript</strong> - 完整的 TypeScript 类型支持</li><li><strong>测试覆盖</strong> - 90%+ 单元测试覆盖率，确保组件稳定可靠</li><li><strong>暗黑模式</strong> - 内置暗黑模式支持，提升用户体验</li><li><strong>开发工具</strong> - 提供官方 VSCode 插件，提升开发效率</li><li><strong>无障碍访问</strong> - 符合 WAI-ARIA 规范，让应用更具包容性</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/getting-started/introduction.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const introduction = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  introduction as default
};
