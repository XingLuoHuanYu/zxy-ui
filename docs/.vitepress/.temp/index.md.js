import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { defineComponent, useTemplateRef, onMounted, onUnmounted, watch, mergeProps, useSSRContext, ref, computed, unref } from "vue";
import { Renderer, Triangle, Program, Color, Mesh } from "ogl";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const vertexShader = `
  attribute vec2 position;
  attribute vec2 uv;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
  }
  `;
const fragmentShader = `
  precision highp float;
  
  uniform float iTime;
  uniform vec3 iResolution;
  uniform vec3 uColor;
  uniform float uAmplitude;
  uniform float uDistance;
  uniform vec2 uMouse;
  
  #define PI 3.1415926538
  
  const int u_line_count = 40;
  const float u_line_width = 7.0;
  const float u_line_blur = 10.0;
  
  float Perlin2D(vec2 P) {
      vec2 Pi = floor(P);
      vec4 Pf_Pfmin1 = P.xyxy - vec4(Pi, Pi + 1.0);
      vec4 Pt = vec4(Pi.xy, Pi.xy + 1.0);
      Pt = Pt - floor(Pt * (1.0 / 71.0)) * 71.0;
      Pt += vec2(26.0, 161.0).xyxy;
      Pt *= Pt;
      Pt = Pt.xzxz * Pt.yyww;
      vec4 hash_x = fract(Pt * (1.0 / 951.135664));
      vec4 hash_y = fract(Pt * (1.0 / 642.949883));
      vec4 grad_x = hash_x - 0.49999;
      vec4 grad_y = hash_y - 0.49999;
      vec4 grad_results = inversesqrt(grad_x * grad_x + grad_y * grad_y)
          * (grad_x * Pf_Pfmin1.xzxz + grad_y * Pf_Pfmin1.yyww);
      grad_results *= 1.4142135623730950;
      vec2 blend = Pf_Pfmin1.xy * Pf_Pfmin1.xy * Pf_Pfmin1.xy
                 * (Pf_Pfmin1.xy * (Pf_Pfmin1.xy * 6.0 - 15.0) + 10.0);
      vec4 blend2 = vec4(blend, vec2(1.0 - blend));
      return dot(grad_results, blend2.zxzx * blend2.wwyy);
  }
  
  float pixel(float count, vec2 resolution) {
      return (1.0 / max(resolution.x, resolution.y)) * count;
  }
  
  float lineFn(vec2 st, float width, float perc, float offset, vec2 mouse, float time, float amplitude, float distance) {
      float split_offset = (perc * 0.4);
      float split_point = 0.1 + split_offset;
  
      float amplitude_normal = smoothstep(split_point, 0.7, st.x);
      float amplitude_strength = 0.5;
      float finalAmplitude = amplitude_normal * amplitude_strength
                             * amplitude * (1.0 + (mouse.y - 0.5) * 0.2);
  
      float time_scaled = time / 10.0 + (mouse.x - 0.5) * 1.0;
      float blur = smoothstep(split_point, split_point + 0.05, st.x) * perc;
  
      float xnoise = mix(
          Perlin2D(vec2(time_scaled, st.x + perc) * 2.5),
          Perlin2D(vec2(time_scaled, st.x + time_scaled) * 3.5) / 1.5,
          st.x * 0.3
      );
  
      float y = 0.5 + (perc - 0.5) * distance + xnoise / 2.0 * finalAmplitude;
  
      float line_start = smoothstep(
          y + (width / 2.0) + (u_line_blur * pixel(1.0, iResolution.xy) * blur),
          y,
          st.y
      );
  
      float line_end = smoothstep(
          y,
          y - (width / 2.0) - (u_line_blur * pixel(1.0, iResolution.xy) * blur),
          st.y
      );
  
      return clamp(
          (line_start - line_end) * (1.0 - smoothstep(0.0, 1.0, pow(perc, 0.3))),
          0.0,
          1.0
      );
  }
  
  void mainImage(out vec4 fragColor, in vec2 fragCoord) {
      vec2 uv = fragCoord / iResolution.xy;
  
      float line_strength = 1.0;
      for (int i = 0; i < u_line_count; i++) {
          float p = float(i) / float(u_line_count);
          line_strength *= (1.0 - lineFn(
              uv,
              u_line_width * pixel(1.0, iResolution.xy) * (1.0 - p),
              p,
              (PI * 1.0) * p,
              uMouse,
              iTime,
              uAmplitude,
              uDistance
          ));
      }
  
      float colorVal = 1.0 - line_strength;
      fragColor = vec4(uColor * colorVal, colorVal);
  }
  
  void main() {
      mainImage(gl_FragColor, gl_FragCoord.xy);
  }
  `;
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Threads",
  __ssrInlineRender: true,
  props: {
    color: { default: () => [1, 1, 1] },
    amplitude: { default: 1 },
    distance: { default: 0 },
    enableMouseInteraction: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const containerRef = useTemplateRef("containerRef");
    let renderer = null;
    let gl = null;
    let program = null;
    let mesh = null;
    let animationId = null;
    let currentMouse = [0.5, 0.5];
    let targetMouse = [0.5, 0.5];
    const resize = () => {
      if (!containerRef.value || !renderer || !program) return;
      const container = containerRef.value;
      const { clientWidth, clientHeight } = container;
      renderer.setSize(clientWidth, clientHeight);
      program.uniforms.iResolution.value.r = clientWidth;
      program.uniforms.iResolution.value.g = clientHeight;
      program.uniforms.iResolution.value.b = clientWidth / clientHeight;
    };
    const handleMouseMove = (e) => {
      if (!containerRef.value) return;
      const rect = containerRef.value.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1 - (e.clientY - rect.top) / rect.height;
      targetMouse = [x, y];
    };
    const handleMouseLeave = () => {
      targetMouse = [0.5, 0.5];
    };
    const update = (t) => {
      if (!program || !renderer || !mesh) return;
      if (props.enableMouseInteraction) {
        const smoothing = 0.05;
        currentMouse[0] += smoothing * (targetMouse[0] - currentMouse[0]);
        currentMouse[1] += smoothing * (targetMouse[1] - currentMouse[1]);
        program.uniforms.uMouse.value[0] = currentMouse[0];
        program.uniforms.uMouse.value[1] = currentMouse[1];
      } else {
        program.uniforms.uMouse.value[0] = 0.5;
        program.uniforms.uMouse.value[1] = 0.5;
      }
      program.uniforms.iTime.value = t * 1e-3;
      renderer.render({ scene: mesh });
      animationId = requestAnimationFrame(update);
    };
    const initializeScene = () => {
      if (!containerRef.value) return;
      cleanup();
      const container = containerRef.value;
      renderer = new Renderer({ alpha: true });
      gl = renderer.gl;
      gl.clearColor(0, 0, 0, 0);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      const geometry = new Triangle(gl);
      program = new Program(gl, {
        vertex: vertexShader,
        fragment: fragmentShader,
        uniforms: {
          iTime: { value: 0 },
          iResolution: {
            value: new Color(
              gl.canvas.width,
              gl.canvas.height,
              gl.canvas.width / gl.canvas.height
            )
          },
          uColor: { value: new Color(...props.color) },
          uAmplitude: { value: props.amplitude },
          uDistance: { value: props.distance },
          uMouse: { value: new Float32Array([0.5, 0.5]) }
        }
      });
      mesh = new Mesh(gl, { geometry, program });
      const canvas = gl.canvas;
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      canvas.style.display = "block";
      container.appendChild(canvas);
      window.addEventListener("resize", resize);
      if (props.enableMouseInteraction) {
        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseleave", handleMouseLeave);
      }
      resize();
      animationId = requestAnimationFrame(update);
    };
    const cleanup = () => {
      var _a;
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
      window.removeEventListener("resize", resize);
      if (containerRef.value) {
        containerRef.value.removeEventListener("mousemove", handleMouseMove);
        containerRef.value.removeEventListener("mouseleave", handleMouseLeave);
        const canvas = containerRef.value.querySelector("canvas");
        if (canvas) {
          containerRef.value.removeChild(canvas);
        }
      }
      if (gl) {
        (_a = gl.getExtension("WEBGL_lose_context")) == null ? void 0 : _a.loseContext();
      }
      renderer = null;
      gl = null;
      program = null;
      mesh = null;
      currentMouse = [0.5, 0.5];
      targetMouse = [0.5, 0.5];
    };
    onMounted(() => {
      initializeScene();
    });
    onUnmounted(() => {
      cleanup();
    });
    watch(
      [
        () => props.color,
        () => props.amplitude,
        () => props.distance,
        () => props.enableMouseInteraction
      ],
      () => {
        initializeScene();
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "containerRef",
        ref: containerRef,
        class: "w-full h-full relative"
      }, _attrs))}></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/components/Threads.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    const isDark = ref(false);
    const checkDarkMode = () => {
      isDark.value = document.documentElement.classList.contains("dark");
    };
    const threadColor = computed(() => {
      return isDark.value ? [1, 1, 1] : [0.1, 0.1, 0.1];
    });
    let observer = null;
    onMounted(() => {
      checkDarkMode();
      observer = new MutationObserver(() => {
        checkDarkMode();
      });
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"]
      });
    });
    onUnmounted(() => {
      if (observer) {
        observer.disconnect();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero" }, _attrs))} data-v-06421420><div class="hero-bg" data-v-06421420>`);
      _push(ssrRenderComponent(_sfc_main$6, {
        color: threadColor.value,
        amplitude: 1,
        distance: 0,
        enableMouseInteraction: false
      }, null, _parent));
      _push(`</div><div class="hero-content" data-v-06421420><div class="hero-badge" data-v-06421420><span class="hero-badge-text" data-v-06421420>Headless Design ❤️</span></div><h1 class="hero-title" data-v-06421420><span class="hero-title-main" data-v-06421420>ZxyUI</span><span class="hero-title-sub" data-v-06421420>无头组件库</span></h1><p class="hero-subtitle" data-v-06421420>完全解耦逻辑与样式，提供 100% 样式控制权</p><p class="hero-description" data-v-06421420> 基于 Vue3 + TypeScript 构建，50+ 无头组件，支持完全自定义样式，开箱即用或深度定制 </p><div class="hero-stats" data-v-06421420><div class="hero-stat" data-v-06421420><div class="hero-stat-number" data-v-06421420>50+</div><div class="hero-stat-label" data-v-06421420>组件</div></div><div class="hero-stat-divider" data-v-06421420></div><div class="hero-stat" data-v-06421420><div class="hero-stat-number" data-v-06421420>100%</div><div class="hero-stat-label" data-v-06421420>TypeScript</div></div><div class="hero-stat-divider" data-v-06421420></div><div class="hero-stat" data-v-06421420><div class="hero-stat-number" data-v-06421420>∞</div><div class="hero-stat-label" data-v-06421420>可定制</div></div></div><div class="hero-actions" data-v-06421420><a href="/zxy-ui/guide/getting-started/quickstart" class="btn-primary" data-v-06421420> 开始使用 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="btn-icon" data-v-06421420><path d="M5 12h14M12 5l7 7-7 7" data-v-06421420></path></svg></a><a href="/zxy-ui/guide/getting-started/introduction" class="btn-secondary" data-v-06421420> 查看文档 </a></div><div class="hero-features-preview" data-v-06421420><div class="hero-feature-item" data-v-06421420><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="hero-feature-icon" data-v-06421420><path d="M12 2L2 7l10 5 10-5-10-5z" data-v-06421420></path><path d="M2 17l10 5 10-5M2 12l10 5 10-5" data-v-06421420></path></svg><span data-v-06421420>无头设计</span></div><div class="hero-feature-item" data-v-06421420><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="hero-feature-icon" data-v-06421420><circle cx="12" cy="12" r="3" data-v-06421420></circle><path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24" data-v-06421420></path></svg><span data-v-06421420>完全定制</span></div><div class="hero-feature-item" data-v-06421420><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="hero-feature-icon" data-v-06421420><circle cx="12" cy="12" r="10" data-v-06421420></circle><path d="M12 2a15 15 0 0 0 8 20M12 2a15 15 0 0 1-8 20" data-v-06421420></path><path d="M2 12h20" data-v-06421420></path></svg><span data-v-06421420>无障碍访问</span></div></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/components/HomePage/components/HeroSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const HeroSection = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-06421420"]]);
const features = [
  {
    title: "无头设计",
    description: "逻辑与样式完全解耦，提供 100% 样式控制权，支持完全自定义或使用默认样式",
    icon: "headless"
  },
  {
    title: "TypeScript 支持",
    description: "完整的 TypeScript 类型定义，提供更好的开发体验和类型安全",
    icon: "typescript"
  },
  {
    title: "高度可定制",
    description: "基于 Tailwind CSS 和 tailwind-variants，支持主题定制和样式传递（PT）",
    icon: "customize"
  },
  {
    title: "无障碍访问",
    description: "遵循 WCAG 2.1 标准，支持键盘导航和屏幕阅读器，确保所有用户都能使用",
    icon: "accessibility"
  }
];
const featuredComponents = [
  {
    name: "Button",
    description: "按钮组件",
    path: "/zxy-ui/components/button/"
  },
  {
    name: "Input",
    description: "输入框组件",
    path: "/zxy-ui/components/input/"
  },
  {
    name: "Card",
    description: "卡片组件",
    path: "/zxy-ui/components/card/"
  },
  {
    name: "Modal",
    description: "模态框组件",
    path: "/zxy-ui/components/modal/"
  },
  {
    name: "Dropdown",
    description: "下拉菜单组件",
    path: "/zxy-ui/components/dropdown/"
  },
  {
    name: "Tabs",
    description: "标签页组件",
    path: "/zxy-ui/components/tabs/"
  },
  {
    name: "Progress",
    description: "进度条组件",
    path: "/zxy-ui/components/progress/"
  },
  {
    name: "Alert",
    description: "警告提示组件",
    path: "/zxy-ui/components/alert/"
  }
];
const contributors = [
  {
    name: "lenran659",
    avatar: "https://avatars.githubusercontent.com/u/74483049?v=4",
    github: "https://github.com/lenran659"
  },
  {
    name: "Dream-2022",
    avatar: "https://avatars.githubusercontent.com/u/131731035?v=4",
    github: "https://github.com/Dream-2022"
  },
  {
    name: "ZRMYDYCG",
    avatar: "https://avatars.githubusercontent.com/u/116160870?v=4",
    github: "https://github.com/ZRMYDYCG"
  },
  {
    name: "ZHuuO",
    avatar: "https://avatars.githubusercontent.com/u/128499037?v=4",
    github: "https://github.com/ZHuuO"
  },
  {
    name: "Simonmie",
    avatar: "https://avatars.githubusercontent.com/u/122306263?v=4",
    github: "https://github.com/Simonmie"
  },
  {
    name: "abining",
    avatar: "https://avatars.githubusercontent.com/u/86543671?v=4",
    github: "https://github.com/abining"
  },
  {
    name: "dhj-l",
    avatar: "https://avatars.githubusercontent.com/u/126545033?v=4",
    github: "https://github.com/dhj-l"
  },
  {
    name: "yyz945947732",
    avatar: "https://avatars.githubusercontent.com/u/47586954?v=4",
    github: "https://github.com/yyz945947732"
  },
  {
    name: "StriveToLearnCode",
    avatar: "https://avatars.githubusercontent.com/u/184910937?v=4",
    github: "https://github.com/StriveToLearnCode"
  },
  {
    name: "yuguaa",
    avatar: "https://avatars.githubusercontent.com/u/58333667?v=4",
    github: "https://github.com/yuguaa"
  },
  {
    name: "xiaotanqingjiao",
    avatar: "https://avatars.githubusercontent.com/u/85224021?v=4",
    github: "https://github.com/xiaotanqingjiao"
  }
];
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "FeaturesSection",
  __ssrInlineRender: true,
  setup(__props) {
    const getIconPath = (icon) => {
      switch (icon) {
        case "headless":
          return ["M12 2L2 7l10 5 10-5-10-5z", "M2 17l10 5 10-5M2 12l10 5 10-5"];
        case "typescript":
          return ["M16 18l6-6-6-6", "M8 6l-6 6 6 6"];
        case "customize":
          return [
            "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
            "M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24"
          ];
        case "accessibility":
          return [
            "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
            "M2 12h20",
            "M12 2a15 15 0 0 1 0 30 15 15 0 0 1 0-30"
          ];
        default:
          return [];
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "features" }, _attrs))} data-v-f8aee046><div class="features-container" data-v-f8aee046><h2 class="section-title" data-v-f8aee046>核心特性</h2><div class="features-grid" data-v-f8aee046><!--[-->`);
      ssrRenderList(unref(features), (feature) => {
        _push(`<div class="feature-card" data-v-f8aee046><div class="feature-icon-wrapper" data-v-f8aee046><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feature-icon" data-v-f8aee046><!--[-->`);
        ssrRenderList(getIconPath(feature.icon), (d, index) => {
          _push(`<path${ssrRenderAttr("d", d)} data-v-f8aee046></path>`);
        });
        _push(`<!--]--></svg></div><h3 class="feature-title" data-v-f8aee046>${ssrInterpolate(feature.title)}</h3><p class="feature-description" data-v-f8aee046>${ssrInterpolate(feature.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/components/HomePage/components/FeaturesSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const FeaturesSection = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-f8aee046"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ComponentsSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "components-preview" }, _attrs))} data-v-6717a2d0><div class="components-container" data-v-6717a2d0><h2 class="section-title" data-v-6717a2d0>组件概览</h2><p class="section-subtitle" data-v-6717a2d0>提供丰富的通用组件，满足绝大多数业务需求</p><div class="components-grid" data-v-6717a2d0><!--[-->`);
      ssrRenderList(unref(featuredComponents), (component) => {
        _push(`<a${ssrRenderAttr("href", component.path)} class="component-card" data-v-6717a2d0><div class="component-header" data-v-6717a2d0><h3 class="component-name" data-v-6717a2d0>${ssrInterpolate(component.name)}</h3><span class="component-arrow" data-v-6717a2d0>→</span></div><p class="component-description" data-v-6717a2d0>${ssrInterpolate(component.description)}</p></a>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/components/HomePage/components/ComponentsSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ComponentsSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-6717a2d0"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ContributorsSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "contributors" }, _attrs))} data-v-62d6099a><div class="contributors-container" data-v-62d6099a><h2 class="section-title" data-v-62d6099a>贡献者</h2><p class="section-subtitle" data-v-62d6099a>感谢所有为 ZxyUI 做出贡献的开发者们</p><div class="contributors-grid" data-v-62d6099a><!--[-->`);
      ssrRenderList(unref(contributors), (contributor) => {
        _push(`<a${ssrRenderAttr("href", contributor.github)} target="_blank" rel="noopener noreferrer" class="contributor-card" data-v-62d6099a><img${ssrRenderAttr("src", contributor.avatar)}${ssrRenderAttr("alt", contributor.name)} class="contributor-avatar" data-v-62d6099a><span class="contributor-name" data-v-62d6099a>${ssrInterpolate(contributor.name)}</span></a>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/components/HomePage/components/ContributorsSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ContributorsSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-62d6099a"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-page" }, _attrs))} data-v-a676b83d>`);
      _push(ssrRenderComponent(HeroSection, null, null, _parent));
      _push(ssrRenderComponent(FeaturesSection, null, null, _parent));
      _push(ssrRenderComponent(ComponentsSection, null, null, _parent));
      _push(ssrRenderComponent(ContributorsSection, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/components/HomePage/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const HomePage = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-a676b83d"]]);
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home"},"headers":[],"relativePath":"index.md","filePath":"index.md"}');
const __default__ = { name: "index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(HomePage, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
