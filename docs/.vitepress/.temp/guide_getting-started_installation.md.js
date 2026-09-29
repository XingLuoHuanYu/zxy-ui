import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"安装","description":"","frontmatter":{},"headers":[],"relativePath":"guide/getting-started/installation.md","filePath":"guide/getting-started/installation.md"}');
const _sfc_main = { name: "guide/getting-started/installation.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h1><p>ZxyUI 提供多种包管理工具的安装方式，选择一种适合你的方式进行安装。</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-SxKVs" id="tab-Syn6qZn" checked><label data-title="npm" for="tab-Syn6qZn">npm</label><input type="radio" name="group-SxKVs" id="tab-rkLtg_u"><label data-title="yarn" for="tab-rkLtg_u">yarn</label><input type="radio" name="group-SxKVs" id="tab-4unGQmI"><label data-title="pnpm" for="tab-4unGQmI">pnpm</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">npm</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> install</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> @zxy-ui/vue</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">yarn</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> add</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> @zxy-ui/vue</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">pnpm</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> add</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> @zxy-ui/vue</span></span></code></pre></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/getting-started/installation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const installation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  installation as default
};
