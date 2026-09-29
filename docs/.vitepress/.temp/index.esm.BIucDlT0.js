import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, createElementVNode, toDisplayString, unref, ref, renderSlot, createCommentVNode, onMounted, createBlock, resolveDynamicComponent, inject, provide, Fragment, renderList, watch, useSlots, nextTick, onUnmounted, normalizeStyle, withModifiers, createVNode, onBeforeUnmount, withDirectives, vShow, withCtx, createTextVNode, withKeys, Transition, createStaticVNode, vModelText, vModelDynamic, mergeProps, Teleport, reactive, toRef, TransitionGroup } from "vue";
const le = (e, a, l) => {
  const t = typeof a == "string" ? a : void 0, r = typeof a == "string" ? l : a;
  if (e.install = (o) => {
    const n = t ?? e.name;
    n && o.component(n, e);
    for (const g of Object.values(r ?? {})) {
      const s = g.name;
      s && o.component(s, g);
    }
  }, r)
    for (const [o, n] of Object.entries(r))
      e[o] = n;
  return e;
};
function yl(e = 4) {
  const a = ref(Array(e).fill("")), l = ref([]);
  return {
    values: a,
    setRef: (n, g) => {
      n && (l.value[g] = n);
    },
    onInput: (n, g) => {
      const u = n.target.value.replace(/\D/g, "");
      a.value[g] = u.slice(0, 1), u && g < e - 1 && nextTick(() => {
        var v;
        (v = l.value[g + 1]) == null || v.focus();
      });
    },
    onKeydown: (n, g) => {
      n.key === "Backspace" && !a.value[g] && g > 0 && nextTick(() => {
        var s;
        (s = l.value[g - 1]) == null || s.focus();
      });
    }
  };
}
var Pt = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Ie = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, hl = (e, a) => JSON.stringify(e) === JSON.stringify(a);
function Kt(e, a) {
  e.forEach(function(l) {
    Array.isArray(l) ? Kt(l, a) : a.push(l);
  });
}
function Yt(e) {
  let a = [];
  return Kt(e, a), a;
}
var Ut = (...e) => Yt(e).filter(Boolean), Xt = (e, a) => {
  let l = {}, t = Object.keys(e), r = Object.keys(a);
  for (let o of t) if (r.includes(o)) {
    let n = e[o], g = a[o];
    Array.isArray(n) || Array.isArray(g) ? l[o] = Ut(g, n) : typeof n == "object" && typeof g == "object" ? l[o] = Xt(n, g) : l[o] = g + " " + n;
  } else l[o] = e[o];
  for (let o of r) t.includes(o) || (l[o] = a[o]);
  return l;
}, jt = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim();
const Dt = "-", wl = (e) => {
  const a = kl(e), {
    conflictingClassGroups: l,
    conflictingClassGroupModifiers: t
  } = e;
  return {
    getClassGroupId: (n) => {
      const g = n.split(Dt);
      return g[0] === "" && g.length !== 1 && g.shift(), qt(g, a) || xl(n);
    },
    getConflictingClassGroupIds: (n, g) => {
      const s = l[n] || [];
      return g && t[n] ? [...s, ...t[n]] : s;
    }
  };
}, qt = (e, a) => {
  var n;
  if (e.length === 0)
    return a.classGroupId;
  const l = e[0], t = a.nextPart.get(l), r = t ? qt(e.slice(1), t) : void 0;
  if (r)
    return r;
  if (a.validators.length === 0)
    return;
  const o = e.join(Dt);
  return (n = a.validators.find(({
    validator: g
  }) => g(o))) == null ? void 0 : n.classGroupId;
}, Zt = /^\[(.+)\]$/, xl = (e) => {
  if (Zt.test(e)) {
    const a = Zt.exec(e)[1], l = a == null ? void 0 : a.substring(0, a.indexOf(":"));
    if (l)
      return "arbitrary.." + l;
  }
}, kl = (e) => {
  const {
    theme: a,
    classGroups: l
  } = e, t = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const r in l)
    zt(l[r], t, r, a);
  return t;
}, zt = (e, a, l, t) => {
  e.forEach((r) => {
    if (typeof r == "string") {
      const o = r === "" ? a : Wt(a, r);
      o.classGroupId = l;
      return;
    }
    if (typeof r == "function") {
      if (Cl(r)) {
        zt(r(t), a, l, t);
        return;
      }
      a.validators.push({
        validator: r,
        classGroupId: l
      });
      return;
    }
    Object.entries(r).forEach(([o, n]) => {
      zt(n, Wt(a, o), l, t);
    });
  });
}, Wt = (e, a) => {
  let l = e;
  return a.split(Dt).forEach((t) => {
    l.nextPart.has(t) || l.nextPart.set(t, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), l = l.nextPart.get(t);
  }), l;
}, Cl = (e) => e.isThemeGetter, Sl = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let a = 0, l = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  const r = (o, n) => {
    l.set(o, n), a++, a > e && (a = 0, t = l, l = /* @__PURE__ */ new Map());
  };
  return {
    get(o) {
      let n = l.get(o);
      if (n !== void 0)
        return n;
      if ((n = t.get(o)) !== void 0)
        return r(o, n), n;
    },
    set(o, n) {
      l.has(o) ? l.set(o, n) : r(o, n);
    }
  };
}, $t = "!", Bt = ":", zl = Bt.length, $l = (e) => {
  const {
    prefix: a,
    experimentalParseClassName: l
  } = e;
  let t = (r) => {
    const o = [];
    let n = 0, g = 0, s = 0, u;
    for (let w = 0; w < r.length; w++) {
      let x = r[w];
      if (n === 0 && g === 0) {
        if (x === Bt) {
          o.push(r.slice(s, w)), s = w + zl;
          continue;
        }
        if (x === "/") {
          u = w;
          continue;
        }
      }
      x === "[" ? n++ : x === "]" ? n-- : x === "(" ? g++ : x === ")" && g--;
    }
    const v = o.length === 0 ? r : r.substring(s), h = Bl(v), S = h !== v, c = u && u > s ? u - s : void 0;
    return {
      modifiers: o,
      hasImportantModifier: S,
      baseClassName: h,
      maybePostfixModifierPosition: c
    };
  };
  if (a) {
    const r = a + Bt, o = t;
    t = (n) => n.startsWith(r) ? o(n.substring(r.length)) : {
      isExternal: true,
      modifiers: [],
      hasImportantModifier: false,
      baseClassName: n,
      maybePostfixModifierPosition: void 0
    };
  }
  if (l) {
    const r = t;
    t = (o) => l({
      className: o,
      parseClassName: r
    });
  }
  return t;
}, Bl = (e) => e.endsWith($t) ? e.substring(0, e.length - 1) : e.startsWith($t) ? e.substring(1) : e, Vl = (e) => {
  const a = Object.fromEntries(e.orderSensitiveModifiers.map((t) => [t, true]));
  return (t) => {
    if (t.length <= 1)
      return t;
    const r = [];
    let o = [];
    return t.forEach((n) => {
      n[0] === "[" || a[n] ? (r.push(...o.sort(), n), o = []) : o.push(n);
    }), r.push(...o.sort()), r;
  };
}, Il = (e) => ({
  cache: Sl(e.cacheSize),
  parseClassName: $l(e),
  sortModifiers: Vl(e),
  ...wl(e)
}), Ml = /\s+/, Tl = (e, a) => {
  const {
    parseClassName: l,
    getClassGroupId: t,
    getConflictingClassGroupIds: r,
    sortModifiers: o
  } = a, n = [], g = e.trim().split(Ml);
  let s = "";
  for (let u = g.length - 1; u >= 0; u -= 1) {
    const v = g[u], {
      isExternal: h,
      modifiers: S,
      hasImportantModifier: c,
      baseClassName: w,
      maybePostfixModifierPosition: x
    } = l(v);
    if (h) {
      s = v + (s.length > 0 ? " " + s : s);
      continue;
    }
    let i = !!x, d = t(i ? w.substring(0, x) : w);
    if (!d) {
      if (!i) {
        s = v + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (d = t(w), !d) {
        s = v + (s.length > 0 ? " " + s : s);
        continue;
      }
      i = false;
    }
    const k = o(S).join(":"), y = c ? k + $t : k, $ = y + d;
    if (n.includes($))
      continue;
    n.push($);
    const I = r(d, i);
    for (let V = 0; V < I.length; ++V) {
      const A = I[V];
      n.push(y + A);
    }
    s = v + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function Dl() {
  let e = 0, a, l, t = "";
  for (; e < arguments.length; )
    (a = arguments[e++]) && (l = Jt(a)) && (t && (t += " "), t += l);
  return t;
}
const Jt = (e) => {
  if (typeof e == "string")
    return e;
  let a, l = "";
  for (let t = 0; t < e.length; t++)
    e[t] && (a = Jt(e[t])) && (l && (l += " "), l += a);
  return l;
};
function Vt(e, ...a) {
  let l, t, r, o = n;
  function n(s) {
    const u = a.reduce((v, h) => h(v), e());
    return l = Il(u), t = l.cache.get, r = l.cache.set, o = g, g(s);
  }
  function g(s) {
    const u = t(s);
    if (u)
      return u;
    const v = Tl(s, l);
    return r(s, v), v;
  }
  return function() {
    return o(Dl.apply(null, arguments));
  };
}
const Be = (e) => {
  const a = (l) => l[e] || [];
  return a.isThemeGetter = true, a;
}, Qt = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, _t = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Rl = /^\d+\/\d+$/, El = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ll = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Al = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Ol = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Pl = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, _e = (e) => Rl.test(e), ce = (e) => !!e && !Number.isNaN(Number(e)), Ge = (e) => !!e && Number.isInteger(Number(e)), Ft = (e) => e.endsWith("%") && ce(e.slice(0, -1)), Fe = (e) => El.test(e), jl = () => true, Zl = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ll.test(e) && !Al.test(e)
), Rt = () => false, Wl = (e) => Ol.test(e), Fl = (e) => Pl.test(e), Hl = (e) => !Q(e) && !_(e), Nl = (e) => et(e, ll, Rt), Q = (e) => Qt.test(e), Ke = (e) => et(e, al, Zl), wt = (e) => et(e, ta, ce), Gl = (e) => et(e, el, Rt), Kl = (e) => et(e, tl, Fl), Yl = (e) => et(e, Rt, Wl), _ = (e) => _t.test(e), gt = (e) => tt(e, al), Ul = (e) => tt(e, la), Xl = (e) => tt(e, el), ql = (e) => tt(e, ll), Jl = (e) => tt(e, tl), Ql = (e) => tt(e, aa, true), et = (e, a, l) => {
  const t = Qt.exec(e);
  return t ? t[1] ? a(t[1]) : l(t[2]) : false;
}, tt = (e, a, l = false) => {
  const t = _t.exec(e);
  return t ? t[1] ? a(t[1]) : l : false;
}, el = (e) => e === "position", _l = /* @__PURE__ */ new Set(["image", "url"]), tl = (e) => _l.has(e), ea = /* @__PURE__ */ new Set(["length", "size", "percentage"]), ll = (e) => ea.has(e), al = (e) => e === "length", ta = (e) => e === "number", la = (e) => e === "family-name", aa = (e) => e === "shadow", It = () => {
  const e = Be("color"), a = Be("font"), l = Be("text"), t = Be("font-weight"), r = Be("tracking"), o = Be("leading"), n = Be("breakpoint"), g = Be("container"), s = Be("spacing"), u = Be("radius"), v = Be("shadow"), h = Be("inset-shadow"), S = Be("drop-shadow"), c = Be("blur"), w = Be("perspective"), x = Be("aspect"), i = Be("ease"), d = Be("animate"), k = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], y = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], $ = () => ["auto", "hidden", "clip", "visible", "scroll"], I = () => ["auto", "contain", "none"], V = () => [_, Q, s], A = () => [_e, "full", "auto", ...V()], T = () => [Ge, "none", "subgrid", _, Q], O = () => ["auto", {
    span: ["full", Ge, _, Q]
  }, _, Q], D = () => [Ge, "auto", _, Q], L = () => ["auto", "min", "max", "fr", _, Q], Z = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline"], W = () => ["start", "end", "center", "stretch"], B = () => ["auto", ...V()], E = () => [_e, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...V()], M = () => [e, _, Q], N = () => [Ft, Ke], j = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    _,
    Q
  ], Y = () => ["", ce, gt, Ke], X = () => ["solid", "dashed", "dotted", "double"], se = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], H = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    c,
    _,
    Q
  ], J = () => ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", _, Q], re = () => ["none", ce, _, Q], ne = () => ["none", ce, _, Q], ve = () => [ce, _, Q], fe = () => [_e, "full", ...V()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Fe],
      breakpoint: [Fe],
      color: [jl],
      container: [Fe],
      "drop-shadow": [Fe],
      ease: ["in", "out", "in-out"],
      font: [Hl],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Fe],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Fe],
      shadow: [Fe],
      spacing: ["px", ce],
      text: [Fe],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", _e, Q, _, x]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [ce, Q, _, g]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": k()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": k()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...y(), Q, _]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: $()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": $()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": $()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: I()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": I()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": I()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: A()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": A()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": A()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: A()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: A()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: A()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: A()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: A()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: A()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [Ge, "auto", _, Q]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [_e, "full", "auto", g, ...V()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [ce, _e, "auto", "initial", "none", Q]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ce, _, Q]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ce, _, Q]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Ge, "first", "last", "none", _, Q]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": T()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: O()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": D()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": D()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": T()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: O()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": D()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": D()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": L()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": L()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: V()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": V()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": V()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...Z(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...W(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...W()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...Z()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...W(), "baseline"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...W(), "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": Z()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...W(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...W()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: V()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: V()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: V()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: V()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: V()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: V()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: V()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: V()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: V()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: B()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: B()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: B()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: B()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: B()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: B()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: B()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: B()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: B()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": V()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": V()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: E()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [g, "screen", ...E()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          g,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...E()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          g,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [n]
          },
          ...E()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...E()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...E()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...E()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", l, gt, Ke]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [t, _, wt]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ft, Q]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Ul, Q, a]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [r, _, Q]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [ce, "none", _, wt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          o,
          ...V()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", _, Q]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", _, Q]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: M()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: M()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...X(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [ce, "from-font", "auto", _, Ke]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: M()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [ce, "auto", _, Q]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: V()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", _, Q]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", _, Q]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...y(), Xl, Gl]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "space", "round"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", ql, Nl]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Ge, _, Q],
          radial: ["", _, Q],
          conic: [Ge, _, Q]
        }, Jl, Kl]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: M()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: N()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: N()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: N()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: M()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: M()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: M()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: j()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": j()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": j()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": j()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": j()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": j()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": j()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": j()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": j()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": j()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": j()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": j()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": j()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": j()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": j()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: Y()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": Y()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": Y()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": Y()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": Y()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": Y()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": Y()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": Y()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": Y()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": Y()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": Y()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...X(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...X(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: M()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": M()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": M()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": M()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": M()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": M()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": M()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": M()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": M()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: M()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...X(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ce, _, Q]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ce, gt, Ke]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          v,
          Ql,
          Yl
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: M()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", _, Q, h]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": M()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: Y()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: M()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [ce, Ke]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": M()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": Y()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": M()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [ce, _, Q]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...se(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": se()
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          _,
          Q
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: H()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [ce, _, Q]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ce, _, Q]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          S,
          _,
          Q
        ]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", ce, _, Q]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ce, _, Q]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ce, _, Q]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ce, _, Q]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ce, _, Q]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          _,
          Q
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": H()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [ce, _, Q]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ce, _, Q]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ce, _, Q]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ce, _, Q]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ce, _, Q]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ce, _, Q]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ce, _, Q]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ce, _, Q]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": V()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": V()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": V()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", _, Q]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [ce, "initial", _, Q]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", i, _, Q]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [ce, _, Q]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", d, _, Q]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [w, _, Q]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": J()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: re()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": re()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": re()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": re()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ne()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ne()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ne()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ne()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: ve()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ve()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ve()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [_, Q, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: J()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: fe()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": fe()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": fe()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": fe()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: M()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: M()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", _, Q]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": V()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": V()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": V()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": V()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": V()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": V()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": V()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": V()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": V()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": V()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": V()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": V()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": V()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": V()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": V()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": V()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": V()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": V()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", _, Q]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...M()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ce, gt, Ke, wt]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...M()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["before", "after", "placeholder", "file", "marker", "selection", "first-line", "first-letter", "backdrop", "*", "**"]
  };
}, ra = (e, {
  cacheSize: a,
  prefix: l,
  experimentalParseClassName: t,
  extend: r = {},
  override: o = {}
}) => (ut(e, "cacheSize", a), ut(e, "prefix", l), ut(e, "experimentalParseClassName", t), bt(e.theme, o.theme), bt(e.classGroups, o.classGroups), bt(e.conflictingClassGroups, o.conflictingClassGroups), bt(e.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), ut(e, "orderSensitiveModifiers", o.orderSensitiveModifiers), pt(e.theme, r.theme), pt(e.classGroups, r.classGroups), pt(e.conflictingClassGroups, r.conflictingClassGroups), pt(e.conflictingClassGroupModifiers, r.conflictingClassGroupModifiers), rl(e, r, "orderSensitiveModifiers"), e), ut = (e, a, l) => {
  l !== void 0 && (e[a] = l);
}, bt = (e, a) => {
  if (a)
    for (const l in a)
      ut(e, l, a[l]);
}, pt = (e, a) => {
  if (a)
    for (const l in a)
      rl(e, a, l);
}, rl = (e, a, l) => {
  const t = a[l];
  t !== void 0 && (e[l] = e[l] ? e[l].concat(t) : t);
}, oa = (e, ...a) => typeof e == "function" ? Vt(It, e, ...a) : Vt(() => ra(It(), e), ...a), na = /* @__PURE__ */ Vt(It);
var sa = { twMerge: true, twMergeConfig: {}, responsiveVariants: false }, ol = (e) => e || void 0, ft = (...e) => ol(Yt(e).filter(Boolean).join(" ")), xt = null, We = {}, Mt = false, ot = (...e) => (a) => a.twMerge ? ((!xt || Mt) && (Mt = false, xt = Ie(We) ? na : oa({ ...We, extend: { theme: We.theme, classGroups: We.classGroups, conflictingClassGroupModifiers: We.conflictingClassGroupModifiers, conflictingClassGroups: We.conflictingClassGroups, ...We.extend } })), ol(xt(ft(e)))) : ft(e), Ht = (e, a) => {
  for (let l in a) e.hasOwnProperty(l) ? e[l] = ft(e[l], a[l]) : e[l] = a[l];
  return e;
}, R = (e, a) => {
  let { extend: l = null, slots: t = {}, variants: r = {}, compoundVariants: o = [], compoundSlots: n = [], defaultVariants: g = {} } = e, s = { ...sa, ...a }, u = l != null && l.base ? ft(l.base, e == null ? void 0 : e.base) : e == null ? void 0 : e.base, v = l != null && l.variants && !Ie(l.variants) ? Xt(r, l.variants) : r, h = l != null && l.defaultVariants && !Ie(l.defaultVariants) ? { ...l.defaultVariants, ...g } : g;
  !Ie(s.twMergeConfig) && !hl(s.twMergeConfig, We) && (Mt = true, We = s.twMergeConfig);
  let S = Ie(l == null ? void 0 : l.slots), c = Ie(t) ? {} : { base: ft(e == null ? void 0 : e.base, S && (l == null ? void 0 : l.base)), ...t }, w = S ? c : Ht({ ...l == null ? void 0 : l.slots }, Ie(c) ? { base: e == null ? void 0 : e.base } : c), x = Ie(l == null ? void 0 : l.compoundVariants) ? o : Ut(l == null ? void 0 : l.compoundVariants, o), i = (k) => {
    if (Ie(v) && Ie(t) && S) return ot(u, k == null ? void 0 : k.class, k == null ? void 0 : k.className)(s);
    if (x && !Array.isArray(x)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof x}`);
    if (n && !Array.isArray(n)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof n}`);
    let y = (Z, W, B = [], E) => {
      let M = B;
      if (typeof W == "string") M = M.concat(jt(W).split(" ").map((N) => `${Z}:${N}`));
      else if (Array.isArray(W)) M = M.concat(W.reduce((N, j) => N.concat(`${Z}:${j}`), []));
      else if (typeof W == "object" && typeof E == "string") {
        for (let N in W) if (W.hasOwnProperty(N) && N === E) {
          let j = W[N];
          if (j && typeof j == "string") {
            let Y = jt(j);
            M[E] ? M[E] = M[E].concat(Y.split(" ").map((X) => `${Z}:${X}`)) : M[E] = Y.split(" ").map((X) => `${Z}:${X}`);
          } else Array.isArray(j) && j.length > 0 && (M[E] = j.reduce((Y, X) => Y.concat(`${Z}:${X}`), []));
        }
      }
      return M;
    }, $ = (Z, W = v, B = null, E = null) => {
      var M;
      let N = W[Z];
      if (!N || Ie(N)) return null;
      let j = (M = E == null ? void 0 : E[Z]) != null ? M : k == null ? void 0 : k[Z];
      if (j === null) return null;
      let Y = Pt(j), X = Array.isArray(s.responsiveVariants) && s.responsiveVariants.length > 0 || s.responsiveVariants === true, se = h == null ? void 0 : h[Z], H = [];
      if (typeof Y == "object" && X) for (let [ne, ve] of Object.entries(Y)) {
        let fe = N[ve];
        if (ne === "initial") {
          se = ve;
          continue;
        }
        Array.isArray(s.responsiveVariants) && !s.responsiveVariants.includes(ne) || (H = y(ne, fe, H, B));
      }
      let J = Y != null && typeof Y != "object" ? Y : Pt(se), re = N[J || "false"];
      return typeof H == "object" && typeof B == "string" && H[B] ? Ht(H, re) : H.length > 0 ? (H.push(re), B === "base" ? H.join(" ") : H) : re;
    }, I = () => v ? Object.keys(v).map((Z) => $(Z, v)) : null, V = (Z, W) => {
      if (!v || typeof v != "object") return null;
      let B = new Array();
      for (let E in v) {
        let M = $(E, v, Z, W), N = Z === "base" && typeof M == "string" ? M : M && M[Z];
        N && (B[B.length] = N);
      }
      return B;
    }, A = {};
    for (let Z in k) k[Z] !== void 0 && (A[Z] = k[Z]);
    let T = (Z, W) => {
      var B;
      let E = typeof (k == null ? void 0 : k[Z]) == "object" ? { [Z]: (B = k[Z]) == null ? void 0 : B.initial } : {};
      return { ...h, ...A, ...E, ...W };
    }, O = (Z = [], W) => {
      let B = [];
      for (let { class: E, className: M, ...N } of Z) {
        let j = true;
        for (let [Y, X] of Object.entries(N)) {
          let se = T(Y, W)[Y];
          if (Array.isArray(X)) {
            if (!X.includes(se)) {
              j = false;
              break;
            }
          } else {
            let H = (J) => J == null || J === false;
            if (H(X) && H(se)) continue;
            if (se !== X) {
              j = false;
              break;
            }
          }
        }
        j && (E && B.push(E), M && B.push(M));
      }
      return B;
    }, D = (Z) => {
      let W = O(x, Z);
      if (!Array.isArray(W)) return W;
      let B = {};
      for (let E of W) if (typeof E == "string" && (B.base = ot(B.base, E)(s)), typeof E == "object") for (let [M, N] of Object.entries(E)) B[M] = ot(B[M], N)(s);
      return B;
    }, L = (Z) => {
      if (n.length < 1) return null;
      let W = {};
      for (let { slots: B = [], class: E, className: M, ...N } of n) {
        if (!Ie(N)) {
          let j = true;
          for (let Y of Object.keys(N)) {
            let X = T(Y, Z)[Y];
            if (X === void 0 || (Array.isArray(N[Y]) ? !N[Y].includes(X) : N[Y] !== X)) {
              j = false;
              break;
            }
          }
          if (!j) continue;
        }
        for (let j of B) W[j] = W[j] || [], W[j].push([E, M]);
      }
      return W;
    };
    if (!Ie(t) || !S) {
      let Z = {};
      if (typeof w == "object" && !Ie(w)) for (let W of Object.keys(w)) Z[W] = (B) => {
        var E, M;
        return ot(w[W], V(W, B), ((E = D(B)) != null ? E : [])[W], ((M = L(B)) != null ? M : [])[W], B == null ? void 0 : B.class, B == null ? void 0 : B.className)(s);
      };
      return Z;
    }
    return ot(u, I(), O(x), k == null ? void 0 : k.class, k == null ? void 0 : k.className)(s);
  }, d = () => {
    if (!(!v || typeof v != "object")) return Object.keys(v);
  };
  return i.variantKeys = d(), i.extend = l, i.base = u, i.slots = w, i.variants = v, i.defaultVariants = h, i.compoundSlots = n, i.compoundVariants = x, i;
};
const ia = R({
  base: "w-10 h-10 text-center border rounded outline-none transition-colors",
  variants: {
    state: {
      default: "border-gray-300 focus:border-gray-900 border-2 border-solid",
      error: "border-gray-700 focus:border-black border-2 border-solid",
      success: "border-black focus:border-gray-800 border-2 border-solid"
    },
    size: {
      sm: "w-8 h-8 text-sm",
      md: "w-10 h-10 text-base",
      lg: "w-12 h-12 text-lg"
    }
  },
  defaultVariants: {
    state: "default",
    size: "md"
  }
}), ua = ["onUpdate:modelValue", "onInput", "onKeydown"], da = /* @__PURE__ */ defineComponent({
  name: "ZInputOtp",
  __name: "index",
  props: {
    length: { default: 4 },
    size: { default: "md" },
    state: { default: "default" },
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  setup(e) {
    const a = e, { values: l, setRef: t, onInput: r, onKeydown: o } = yl(a.length ?? 4), n = computed(() => {
      var s, u;
      return a.unstyled ? ((s = a.pt) == null ? void 0 : s.container) || "flex gap-2" : (u = a.pt) != null && u.container ? `flex gap-2 ${a.pt.container}` : "flex gap-2";
    }), g = computed(() => {
      var s, u;
      return a.unstyled ? ((s = a.pt) == null ? void 0 : s.input) || "" : ia({
        state: a.state,
        size: a.size,
        class: (u = a.pt) == null ? void 0 : u.input
      });
    });
    return (s, u) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(n.value)
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(l).length, (v, h) => withDirectives((openBlock(), createElementBlock("input", {
        key: h,
        "onUpdate:modelValue": (S) => unref(l)[h] = S,
        ref_for: true,
        ref: (S) => unref(t)(S, h),
        class: normalizeClass(g.value),
        maxlength: "1",
        onInput: (S) => unref(r)(S, h),
        onKeydown: (S) => unref(o)(S, h),
        type: "text",
        inputmode: "numeric",
        autocomplete: "one-time-code"
      }, null, 42, ua)), [
        [vModelText, unref(l)[h]]
      ])), 128))
    ], 2));
  }
}), ca = le(da);
function fa(e) {
  const a = ref(false), l = (e == null ? void 0 : e.closeOnEsc) ?? true, t = (e == null ? void 0 : e.closeOnOverlayClick) ?? true, r = () => {
    a.value = true;
  }, o = () => {
    var v;
    a.value = false, (v = e == null ? void 0 : e.onClose) == null || v.call(e);
  }, n = ref(null), g = ref(null), s = (v) => {
    v.key === "Escape" && l && o();
  };
  return watch(a, (v) => {
    v ? (document.addEventListener("keydown", s), document.body.style.overflow = "hidden") : (document.removeEventListener("keydown", s), document.body.style.overflow = "");
  }), onUnmounted(() => {
    document.removeEventListener("keydown", s), document.body.style.overflow = "";
  }), {
    isOpen: a,
    open: r,
    close: o,
    modalRef: n,
    overlayRef: g,
    onOverlayClick: (v) => {
      v.target === g.value && t && o();
    }
  };
}
const va = R({
  base: "fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center"
}), ga = R({
  base: `
    relative
    bg-white dark:bg-gray-800
    rounded-lg shadow-lg
    w-full max-w-lg
    transition-all duration-300
    flex flex-col
    overflow-hidden
  `,
  variants: {
    size: {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      "2xl": "max-w-2xl",
      "3xl": "max-w-3xl",
      "4xl": "max-w-4xl",
      "5xl": "max-w-5xl",
      full: "max-w-full"
    }
  },
  defaultVariants: {
    size: "lg"
  }
}), ba = R({
  base: "px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between"
}), pa = R({
  base: "text-lg font-medium text-gray-900 dark:text-white"
}), ma = R({
  base: "p-6 flex-1 overflow-y-auto"
}), ya = R({
  base: "px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex justify-end space-x-2"
}), ha = R({
  base: "absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
}), wa = /* @__PURE__ */ defineComponent({
  name: "ZModal",
  __name: "index",
  props: {
    modelValue: { type: Boolean, default: false },
    title: {},
    size: { default: "lg" },
    closeOnEsc: { type: Boolean, default: true },
    closeOnOverlayClick: { type: Boolean, default: true },
    hideCloseButton: { type: Boolean, default: false },
    class: {},
    contentClass: {},
    headerClass: {},
    bodyClass: {},
    footerClass: {},
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  emits: ["update:modelValue", "close"],
  setup(e, { emit: a }) {
    const l = e, t = a, r = useSlots(), { isOpen: o, open: n, close: g, modalRef: s, overlayRef: u, onOverlayClick: v } = fa({
      onClose: () => {
        t("close"), t("update:modelValue", false);
      },
      closeOnEsc: l.closeOnEsc,
      closeOnOverlayClick: l.closeOnOverlayClick
    });
    onMounted(async () => {
      await nextTick(), l.modelValue && n();
    }), watch(
      () => l.modelValue,
      (I) => {
        I && !o.value ? n() : !I && o.value && g();
      }
    ), watch(o, (I) => {
      I !== l.modelValue && t("update:modelValue", I);
    });
    const h = () => {
      g();
    }, S = computed(() => !!l.title || !!r.header), c = computed(() => !!r.footer), w = computed(() => {
      var I, V;
      return l.unstyled ? [(I = l.pt) == null ? void 0 : I.overlay, l.class].filter(Boolean) : [va({ class: (V = l.pt) == null ? void 0 : V.overlay }), l.class];
    }), x = computed(() => {
      var I, V;
      return l.unstyled ? [(I = l.pt) == null ? void 0 : I.content, l.contentClass].filter(Boolean) : [
        ga({
          size: l.size,
          class: (V = l.pt) == null ? void 0 : V.content
        }),
        l.contentClass
      ];
    }), i = computed(() => {
      var I, V;
      return l.unstyled ? [(I = l.pt) == null ? void 0 : I.header, l.headerClass].filter(Boolean) : [ba({ class: (V = l.pt) == null ? void 0 : V.header }), l.headerClass];
    }), d = computed(() => {
      var I, V;
      return l.unstyled ? ((I = l.pt) == null ? void 0 : I.title) || "" : pa({ class: (V = l.pt) == null ? void 0 : V.title });
    }), k = computed(() => {
      var I, V;
      return l.unstyled ? [(I = l.pt) == null ? void 0 : I.body, l.bodyClass].filter(Boolean) : [ma({ class: (V = l.pt) == null ? void 0 : V.body }), l.bodyClass];
    }), y = computed(() => {
      var I, V;
      return l.unstyled ? [(I = l.pt) == null ? void 0 : I.footer, l.footerClass].filter(Boolean) : [ya({ class: (V = l.pt) == null ? void 0 : V.footer }), l.footerClass];
    }), $ = computed(() => {
      var I, V;
      return l.unstyled ? ((I = l.pt) == null ? void 0 : I.closeButton) || "" : ha({ class: (V = l.pt) == null ? void 0 : V.closeButton });
    });
    return (I, V) => (openBlock(), createBlock(Teleport, { to: "body" }, [
      createVNode(Transition, {
        name: "vk-modal",
        appear: ""
      }, {
        default: withCtx(() => [
          unref(o) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(w.value),
            ref_key: "overlayRef",
            ref: u,
            onClick: V[0] || (V[0] = //@ts-ignore
            (...A) => unref(v) && unref(v)(...A))
          }, [
            createElementVNode("div", {
              class: normalizeClass([x.value, "vk-modal-dialog"]),
              ref_key: "modalRef",
              ref: s,
              role: "dialog",
              "aria-modal": "true",
              tabindex: "-1"
            }, [
              S.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(i.value)
              }, [
                renderSlot(I.$slots, "header", {}, () => [
                  createElementVNode("h3", {
                    class: normalizeClass(d.value)
                  }, toDisplayString(l.title), 3)
                ], true),
                e.hideCloseButton ? createCommentVNode("", true) : (openBlock(), createElementBlock("button", {
                  key: 0,
                  class: normalizeClass($.value),
                  onClick: h,
                  "aria-label": "关闭"
                }, [
                  renderSlot(I.$slots, "close-icon", {}, () => [
                    V[1] || (V[1] = createElementVNode("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "20",
                      height: "20",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }, [
                      createElementVNode("line", {
                        x1: "18",
                        y1: "6",
                        x2: "6",
                        y2: "18"
                      }),
                      createElementVNode("line", {
                        x1: "6",
                        y1: "6",
                        x2: "18",
                        y2: "18"
                      })
                    ], -1))
                  ], true)
                ], 2))
              ], 2)) : createCommentVNode("", true),
              createElementVNode("div", {
                class: normalizeClass(k.value)
              }, [
                renderSlot(I.$slots, "default", {}, void 0, true)
              ], 2),
              c.value ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(y.value)
              }, [
                renderSlot(I.$slots, "footer", {}, void 0, true)
              ], 2)) : createCommentVNode("", true)
            ], 2)
          ], 2)) : createCommentVNode("", true)
        ]),
        _: 3
      })
    ]));
  }
}), lt = (e, a) => {
  const l = e.__vccOpts || e;
  for (const [t, r] of a)
    l[t] = r;
  return l;
}, xa = /* @__PURE__ */ lt(wa, [["__scopeId", "data-v-ee9d6adc"]]), ka = le(xa);
function Ca() {
  const e = ref(false), a = ref(false);
  return {
    isLoaded: e,
    isError: a,
    onLoad: () => {
      e.value = true, a.value = false;
    },
    onError: () => {
      a.value = true, e.value = false;
    }
  };
}
const Sa = R({
  base: "inline-flex items-center justify-center overflow-hidden bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 relative",
  variants: {
    size: {
      xs: "w-6 h-6 text-xs",
      sm: "w-8 h-8 text-sm",
      md: "w-10 h-10 text-base",
      lg: "w-12 h-12 text-lg",
      xl: "w-16 h-16 text-xl"
    },
    shape: {
      circle: "rounded-full",
      square: "rounded-md"
    },
    status: {
      online: "after:absolute after:bottom-0 after:right-0 after:w-2 after:h-2 after:bg-green-500 after:rounded-full after:border-2 after:border-white dark:after:border-gray-800",
      offline: "after:absolute after:bottom-0 after:right-0 after:w-2 after:h-2 after:bg-gray-400 after:rounded-full after:border-2 after:border-white dark:after:border-gray-800",
      away: "after:absolute after:bottom-0 after:right-0 after:w-2 after:h-2 after:bg-yellow-500 after:rounded-full after:border-2 after:border-white dark:after:border-gray-800",
      busy: "after:absolute after:bottom-0 after:right-0 after:w-2 after:h-2 after:bg-red-500 after:rounded-full after:border-2 after:border-white dark:after:border-gray-800",
      none: ""
    }
  },
  defaultVariants: {
    size: "md",
    shape: "circle",
    status: "none"
  },
  compoundVariants: []
}), za = ["src", "alt"], $a = ["src", "alt"], Ba = /* @__PURE__ */ defineComponent({
  name: "ZAvatar",
  __name: "index",
  props: {
    size: { default: "md" },
    src: {},
    alt: { default: "" },
    fallback: { default: "" },
    shape: { default: "circle" },
    status: { default: "none" },
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  setup(e) {
    const a = e, { isError: l, onLoad: t, onError: r } = Ca(), o = computed(() => {
      var S, c;
      return a.unstyled ? ((S = a.pt) == null ? void 0 : S.root) || "" : Sa({
        size: a.size,
        shape: a.shape,
        status: a.status,
        class: (c = a.pt) == null ? void 0 : c.root
      });
    }), n = computed(() => {
      var S;
      return a.unstyled ? ((S = a.pt) == null ? void 0 : S.image) || "" : "w-full h-full object-cover";
    }), g = computed(() => {
      var S;
      return a.unstyled ? ((S = a.pt) == null ? void 0 : S.fallback) || "" : "w-full h-full flex items-center justify-center";
    }), s = computed(() => {
      var S;
      return a.unstyled ? ((S = a.pt) == null ? void 0 : S.initials) || "" : "w-full h-full flex items-center justify-center";
    }), u = computed(() => {
      var S;
      return a.unstyled ? ((S = a.pt) == null ? void 0 : S.icon) || "" : "w-1/2 h-1/2";
    }), v = computed(() => a.alt ? a.alt.split(" ").map((S) => S.charAt(0)).slice(0, 2).join("").toUpperCase() : ""), h = computed(() => !a.src || l.value);
    return (S, c) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(o.value)
    }, [
      h.value ? e.fallback ? (openBlock(), createElementBlock("span", {
        key: 1,
        class: normalizeClass(g.value)
      }, [
        createElementVNode("img", {
          src: e.fallback,
          alt: e.alt,
          class: normalizeClass(n.value)
        }, null, 10, $a)
      ], 2)) : e.alt ? (openBlock(), createElementBlock("span", {
        key: 2,
        class: normalizeClass(s.value)
      }, toDisplayString(v.value), 3)) : (openBlock(), createElementBlock("span", {
        key: 3,
        class: normalizeClass(g.value)
      }, [
        (openBlock(), createElementBlock("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          class: normalizeClass(u.value)
        }, [...c[2] || (c[2] = [
          createElementVNode("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }, null, -1),
          createElementVNode("circle", {
            cx: "12",
            cy: "7",
            r: "4"
          }, null, -1)
        ])], 2))
      ], 2)) : (openBlock(), createElementBlock("img", {
        key: 0,
        src: e.src,
        alt: e.alt,
        class: normalizeClass(n.value),
        onLoad: c[0] || (c[0] = //@ts-ignore
        (...w) => unref(t) && unref(t)(...w)),
        onError: c[1] || (c[1] = //@ts-ignore
        (...w) => unref(r) && unref(r)(...w))
      }, null, 42, za))
    ], 2));
  }
}), Va = le(Ba);
function Ia(e) {
  const a = computed(() => e.dot ? e.show !== false : e.show !== false && e.content !== void 0 && e.content !== ""), l = computed(() => {
    switch (e.position) {
      case "top-left":
        return "top-0 left-0 -translate-x-1/2 -translate-y-1/2";
      case "bottom-right":
        return "bottom-0 right-0 translate-x-1/2 translate-y-1/2";
      case "bottom-left":
        return "bottom-0 left-0 -translate-x-1/2 translate-y-1/2";
      case "top-right":
      default:
        return "top-0 right-0 translate-x-1/2 -translate-y-1/2";
    }
  });
  return {
    visible: a,
    positionClass: l
  };
}
const Ma = R({
  base: "absolute inline-flex items-center justify-center font-medium rounded-full z-10",
  variants: {
    color: {
      primary: "bg-blue-500 text-white dark:bg-blue-600",
      secondary: "bg-gray-500 text-white dark:bg-gray-600",
      success: "bg-green-500 text-white dark:bg-green-600",
      warning: "bg-yellow-500 text-white dark:bg-yellow-600",
      danger: "bg-red-500 text-white dark:bg-red-600",
      info: "bg-sky-500 text-white dark:bg-sky-600"
    },
    size: {
      sm: "min-w-4 h-4 text-xs px-1",
      md: "min-w-5 h-5 text-xs px-1.5",
      lg: "min-w-6 h-6 text-sm px-2"
    },
    dot: {
      true: "w-2 h-2 min-w-0 p-0",
      false: ""
    }
  },
  compoundVariants: [
    {
      dot: true,
      size: "sm",
      class: "w-1.5 h-1.5"
    },
    {
      dot: true,
      size: "lg",
      class: "w-2.5 h-2.5"
    }
  ],
  defaultVariants: {
    color: "primary",
    size: "md",
    dot: false
  }
}), Ta = /* @__PURE__ */ defineComponent({
  name: "ZBadge",
  __name: "index",
  props: {
    content: {},
    dot: { type: Boolean, default: false },
    show: { type: Boolean, default: true },
    position: { default: "top-right" },
    color: { default: "primary" },
    size: { default: "md" },
    max: { default: 99 },
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  setup(e) {
    const a = e, { visible: l, positionClass: t } = Ia(a), r = computed(() => {
      var g;
      return a.unstyled ? ((g = a.pt) == null ? void 0 : g.root) || "" : "relative inline-block";
    }), o = computed(() => {
      var g, s;
      return a.unstyled ? ((g = a.pt) == null ? void 0 : g.badge) || "" : Ma({
        color: a.color,
        size: a.size,
        dot: a.dot,
        class: [t.value, (s = a.pt) == null ? void 0 : s.badge]
      });
    }), n = computed(() => a.dot ? "" : typeof a.content == "number" && a.max && a.content > a.max ? `${a.max}+` : a.content);
    return (g, s) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(r.value)
    }, [
      renderSlot(g.$slots, "default"),
      unref(l) ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(o.value),
        role: "status",
        "aria-live": "polite"
      }, toDisplayString(n.value), 3)) : createCommentVNode("", true)
    ], 2));
  }
}), Da = le(Ta);
function Ra(e) {
  const a = ref(e.modelValue ?? false), l = () => {
    var r;
    e.disabled || (a.value = !a.value, (r = e.onChange) == null || r.call(e, a.value));
  };
  return watch(
    () => e.modelValue,
    (r) => {
      r !== void 0 && (a.value = r);
    }
  ), {
    checked: computed(() => !!a.value),
    disabled: computed(() => !!e.disabled),
    toggle: l,
    onKeyDown: (r) => {
      (r.key === "Enter" || r.key === " ") && (r.preventDefault(), l());
    }
  };
}
const Ea = R({
  slots: {
    root: [
      "relative inline-flex items-center rounded-full transition-all duration-300 ease-in-out",
      "focus:outline-none focus:ring-2 focus:ring-offset-2",
      "dark:focus:ring-offset-gray-800",
      "cursor-pointer overflow-hidden"
    ],
    thumb: [
      "absolute bg-white rounded-full shadow-md",
      "transform transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
      "dark:bg-gray-100",
      "will-change-transform",
      "flex items-center justify-center"
    ]
  },
  variants: {
    checked: {
      true: {
        root: ["transition-all duration-300 ease-in-out"],
        thumb: ["transition-all duration-300", "scale-110"]
      },
      false: {
        root: ["transition-all duration-300 ease-in-out"],
        thumb: ["transition-all duration-300"]
      }
    },
    disabled: {
      true: {
        root: "opacity-50 cursor-not-allowed"
      }
    },
    size: {
      small: {
        root: "w-8 h-5",
        thumb: "w-3 h-3 top-1 left-1"
      },
      default: {
        root: "w-10 h-6",
        thumb: "w-4 h-4 top-1 left-1"
      },
      large: {
        root: "w-12 h-7",
        thumb: "w-5 h-5 top-1 left-1"
      }
    },
    color: {
      blue: {
        root: [
          "focus:ring-blue-500 dark:focus:ring-blue-400",
          "before:bg-blue-400/30"
        ]
      },
      green: {
        root: [
          "focus:ring-green-500 dark:focus:ring-green-400",
          "before:bg-green-400/30"
        ]
      },
      red: {
        root: [
          "focus:ring-red-500 dark:focus:ring-red-400",
          "before:bg-red-400/30"
        ]
      },
      yellow: {
        root: [
          "focus:ring-yellow-500 dark:focus:ring-yellow-400",
          "before:bg-yellow-400/30"
        ]
      },
      purple: {
        root: [
          "focus:ring-purple-500 dark:focus:ring-purple-400",
          "before:bg-purple-400/30"
        ]
      }
    }
  },
  defaultVariants: {
    checked: false,
    disabled: false,
    size: "default",
    color: "blue"
  }
}), La = ["aria-checked", "disabled"], Aa = /* @__PURE__ */ defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "ZSwitch",
  __name: "index",
  props: {
    modelValue: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    size: { default: "default" },
    color: { default: "blue" },
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: a }) {
    const l = e, t = a, { checked: r, toggle: o, onKeyDown: n } = Ra({
      modelValue: l.modelValue,
      disabled: l.disabled,
      onChange: (i) => t("update:modelValue", i)
    }), g = ref(false);
    watch(r, (i) => {
      i && (g.value = true, setTimeout(() => {
        g.value = false;
      }, 500));
    });
    const s = () => {
      if (!r.value) return "";
      switch (l.size) {
        case "small":
          return "translate-x-3";
        case "large":
          return "translate-x-5";
        default:
          return "translate-x-4";
      }
    }, u = () => {
      if (!r.value)
        return "bg-gray-300 dark:bg-gray-600";
      const i = {
        blue: "bg-blue-600 dark:bg-blue-500",
        green: "bg-green-600 dark:bg-green-500",
        red: "bg-red-600 dark:bg-red-500",
        yellow: "bg-yellow-600 dark:bg-yellow-500",
        purple: "bg-purple-600 dark:bg-purple-500"
      };
      return i[l.color] || i.blue;
    }, v = () => {
      const i = {
        blue: "bg-blue-400/10",
        green: "bg-green-400/10",
        red: "bg-red-400/10",
        yellow: "bg-yellow-400/10",
        purple: "bg-purple-400/10"
      };
      return i[l.color] || i.blue;
    }, h = computed(
      () => Ea({
        checked: r.value,
        disabled: l.disabled,
        size: l.size,
        color: l.color
      })
    ), S = computed(() => {
      var i, d;
      return l.unstyled ? ((i = l.pt) == null ? void 0 : i.root) || "" : h.value.root({ class: (d = l.pt) == null ? void 0 : d.root });
    }), c = computed(() => {
      var i, d;
      return l.unstyled ? ((i = l.pt) == null ? void 0 : i.track) || "" : u() + ((d = l.pt) != null && d.track ? ` ${l.pt.track}` : "");
    }), w = computed(() => {
      var i, d;
      return l.unstyled ? ((i = l.pt) == null ? void 0 : i.thumb) || "" : h.value.thumb({ class: (d = l.pt) == null ? void 0 : d.thumb });
    }), x = computed(() => {
      var i, d;
      return l.unstyled ? ((i = l.pt) == null ? void 0 : i.ripple) || "" : v() + ((d = l.pt) != null && d.ripple ? ` ${l.pt.ripple}` : "");
    });
    return (i, d) => (openBlock(), createElementBlock("button", {
      type: "button",
      role: "switch",
      "aria-checked": unref(r),
      disabled: l.disabled,
      onClick: d[0] || (d[0] = //@ts-ignore
      (...k) => unref(o) && unref(o)(...k)),
      onKeydown: d[1] || (d[1] = //@ts-ignore
      (...k) => unref(n) && unref(n)(...k)),
      class: normalizeClass(S.value)
    }, [
      createElementVNode("span", {
        class: normalizeClass([
          c.value,
          "absolute inset-0 rounded-full transition-colors duration-300 ease-in-out"
        ])
      }, null, 2),
      createElementVNode("span", {
        class: normalizeClass([
          w.value,
          "transform transition-all duration-300 ease-in-out",
          s()
        ])
      }, [
        unref(r) ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass(["absolute inset-0 bg-white rounded-full transition-all duration-300", {
            "opacity-100 scale-100": unref(r),
            "opacity-0 scale-0": !unref(r)
          }])
        }, null, 2)) : createCommentVNode("", true)
      ], 2),
      createElementVNode("span", {
        class: normalizeClass(["absolute inset-0 transition-opacity duration-300", { "opacity-0": !unref(r), "opacity-100": unref(r) }])
      }, [
        createElementVNode("span", {
          class: normalizeClass(["absolute inset-0 rounded-full transform transition-transform duration-500", [
            x.value,
            { "scale-100": g.value, "scale-0": !g.value }
          ]])
        }, null, 2)
      ], 2)
    ], 42, La));
  }
}), Oa = /* @__PURE__ */ lt(Aa, [["__scopeId", "data-v-874fcdd3"]]), Pa = le(Oa);
function ja(e) {
  const a = ref(false), l = (e == null ? void 0 : e.closeOnEsc) ?? true, t = (e == null ? void 0 : e.closeOnOverlayClick) ?? true, r = () => {
    var v;
    a.value = true, (v = e == null ? void 0 : e.onOpen) == null || v.call(e);
  }, o = () => {
    var v;
    a.value = false, (v = e == null ? void 0 : e.onClose) == null || v.call(e);
  }, n = ref(null), g = ref(null), s = (v) => {
    v.key === "Escape" && l && o();
  }, u = (v) => {
    v.target === g.value && t && o();
  };
  return watch(a, (v) => {
    v ? document.addEventListener("keydown", s) : document.removeEventListener("keydown", s);
  }), onUnmounted(() => {
    document.removeEventListener("keydown", s);
  }), {
    isOpen: a,
    open: r,
    close: o,
    overlayRef: g,
    drawerRef: n,
    onOverlayClick: u
  };
}
const Za = R({
  base: "fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity z-40",
  variants: {
    open: {
      true: "opacity-100",
      false: "opacity-0 pointer-events-none"
    }
  },
  defaultVariants: {
    open: false
  }
}), Wa = R({
  base: "fixed bg-white dark:bg-gray-800 shadow-xl transition-all duration-300 overflow-auto flex flex-col z-50",
  variants: {
    placement: {
      left: "top-0 left-0 bottom-0 h-full",
      right: "top-0 right-0 bottom-0 h-full",
      top: "top-0 left-0 right-0 w-full",
      bottom: "bottom-0 left-0 right-0 w-full"
    },
    open: {
      true: "",
      false: ""
    }
  },
  compoundVariants: [
    {
      placement: "left",
      open: true,
      class: "translate-x-0"
    },
    {
      placement: "left",
      open: false,
      class: "-translate-x-full"
    },
    {
      placement: "right",
      open: true,
      class: "translate-x-0"
    },
    {
      placement: "right",
      open: false,
      class: "translate-x-full"
    },
    {
      placement: "top",
      open: true,
      class: "translate-y-0"
    },
    {
      placement: "top",
      open: false,
      class: "-translate-y-full"
    },
    {
      placement: "bottom",
      open: true,
      class: "translate-y-0"
    },
    {
      placement: "bottom",
      open: false,
      class: "translate-y-full"
    }
  ],
  defaultVariants: {
    placement: "right",
    open: false
  }
}), Fa = R({
  base: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700"
}), Ha = R({
  base: "text-lg font-medium text-gray-900 dark:text-white"
}), Na = R({
  base: "p-1 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
}), Ga = R({
  base: "flex-1 p-4 overflow-y-auto"
}), Ka = R({
  base: "flex justify-end gap-2 p-4 border-t border-gray-200 dark:border-gray-700"
}), Ya = ["aria-hidden", "aria-labelledby"], Ua = /* @__PURE__ */ defineComponent({
  name: "ZDrawer",
  __name: "index",
  props: {
    modelValue: { type: Boolean },
    placement: { default: "right" },
    size: { default: "300px" },
    showOverlay: { type: Boolean, default: true },
    closeOnEsc: { type: Boolean, default: true },
    closeOnOverlayClick: { type: Boolean, default: true },
    preventScroll: { type: Boolean, default: true },
    zIndex: { default: 1e3 },
    title: {},
    hideCloseButton: { type: Boolean, default: false },
    class: {},
    contentClass: {},
    headerClass: {},
    bodyClass: {},
    footerClass: {},
    overlayClass: {},
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  emits: ["update:modelValue", "close", "open"],
  setup(e, { emit: a }) {
    const l = e, t = a, r = useSlots(), { isOpen: o, close: n, open: g, drawerRef: s, overlayRef: u, onOverlayClick: v } = ja({
      onClose: () => {
        t("update:modelValue", false), t("close");
      },
      onOpen: () => {
        t("open");
      },
      closeOnEsc: l.closeOnEsc,
      closeOnOverlayClick: l.closeOnOverlayClick
    });
    watch(
      () => l.modelValue,
      (T) => {
        T && !o.value ? g() : !T && o.value && n();
      },
      { immediate: true }
    ), watch(o, (T) => {
      T !== l.modelValue && t("update:modelValue", T);
    });
    const h = ref("");
    watch(o, (T) => {
      l.preventScroll && (T ? (h.value = document.body.style.overflow, document.body.style.overflow = "hidden") : document.body.style.overflow = h.value);
    }), onBeforeUnmount(() => {
      l.preventScroll && o.value && (document.body.style.overflow = h.value);
    });
    const S = computed(() => {
      var T, O;
      return l.unstyled ? [(T = l.pt) == null ? void 0 : T.overlay, l.overlayClass].filter(Boolean) : [
        Za({
          open: o.value,
          class: (O = l.pt) == null ? void 0 : O.overlay
        }),
        l.overlayClass
      ];
    }), c = computed(() => {
      var T, O;
      return l.unstyled ? [(T = l.pt) == null ? void 0 : T.container, l.contentClass, l.class].filter(
        Boolean
      ) : [
        Wa({
          placement: l.placement,
          open: o.value,
          class: (O = l.pt) == null ? void 0 : O.container
        }),
        l.contentClass,
        l.class
      ];
    }), w = computed(() => {
      const T = {
        zIndex: l.zIndex.toString()
      };
      if (!l.unstyled && l.size) {
        const O = typeof l.size == "number" ? `${l.size}px` : l.size;
        l.placement === "left" || l.placement === "right" ? T.width = O : T.height = O;
      }
      return T;
    }), x = computed(() => {
      var T, O;
      return l.unstyled ? [(T = l.pt) == null ? void 0 : T.header, l.headerClass].filter(Boolean) : [Fa({ class: (O = l.pt) == null ? void 0 : O.header }), l.headerClass];
    }), i = computed(() => {
      var T, O;
      return l.unstyled ? ((T = l.pt) == null ? void 0 : T.title) || "" : Ha({ class: (O = l.pt) == null ? void 0 : O.title });
    }), d = computed(() => {
      var T, O;
      return l.unstyled ? ((T = l.pt) == null ? void 0 : T.closeButton) || "" : Na({ class: (O = l.pt) == null ? void 0 : O.closeButton });
    }), k = computed(() => {
      var T, O;
      return l.unstyled ? [(T = l.pt) == null ? void 0 : T.body, l.bodyClass].filter(Boolean) : [Ga({ class: (O = l.pt) == null ? void 0 : O.body }), l.bodyClass];
    }), y = computed(() => {
      var T, O;
      return l.unstyled ? [(T = l.pt) == null ? void 0 : T.footer, l.footerClass].filter(Boolean) : [Ka({ class: (O = l.pt) == null ? void 0 : O.footer }), l.footerClass];
    }), $ = () => {
      n();
    }, I = computed(() => !!l.title || !!r.header), V = computed(() => !!r.footer), A = computed(() => `vk-drawer-${l.placement}`);
    return (T, O) => (openBlock(), createBlock(Teleport, { to: "body" }, [
      createVNode(Transition, {
        name: "vk-drawer-overlay",
        appear: ""
      }, {
        default: withCtx(() => [
          e.showOverlay && unref(o) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(S.value),
            ref_key: "overlayRef",
            ref: u,
            onClick: O[0] || (O[0] = //@ts-ignore
            (...D) => unref(v) && unref(v)(...D)),
            role: "presentation",
            "aria-hidden": "true"
          }, null, 2)) : createCommentVNode("", true)
        ]),
        _: 1
      }),
      createVNode(Transition, {
        name: A.value,
        appear: ""
      }, {
        default: withCtx(() => [
          unref(o) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass([c.value, "vk-drawer-panel"]),
            style: normalizeStyle(w.value),
            ref_key: "drawerRef",
            ref: s,
            role: "dialog",
            "aria-modal": "true",
            "aria-hidden": !unref(o),
            "aria-labelledby": e.title ? "drawer-title" : void 0
          }, [
            I.value ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(x.value)
            }, [
              renderSlot(T.$slots, "header", {}, () => [
                e.title ? (openBlock(), createElementBlock("h2", {
                  key: 0,
                  class: normalizeClass(i.value),
                  id: "drawer-title"
                }, toDisplayString(e.title), 3)) : createCommentVNode("", true)
              ], true),
              e.hideCloseButton ? createCommentVNode("", true) : (openBlock(), createElementBlock("button", {
                key: 0,
                class: normalizeClass(d.value),
                onClick: $,
                "aria-label": "关闭",
                type: "button"
              }, [
                renderSlot(T.$slots, "close-icon", {}, () => [
                  O[1] || (O[1] = createElementVNode("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }, [
                    createElementVNode("line", {
                      x1: "18",
                      y1: "6",
                      x2: "6",
                      y2: "18"
                    }),
                    createElementVNode("line", {
                      x1: "6",
                      y1: "6",
                      x2: "18",
                      y2: "18"
                    })
                  ], -1))
                ], true)
              ], 2))
            ], 2)) : createCommentVNode("", true),
            createElementVNode("div", {
              class: normalizeClass(k.value)
            }, [
              renderSlot(T.$slots, "default", {}, void 0, true)
            ], 2),
            V.value ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: normalizeClass(y.value)
            }, [
              renderSlot(T.$slots, "footer", {}, void 0, true)
            ], 2)) : createCommentVNode("", true)
          ], 14, Ya)) : createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["name"])
    ]));
  }
}), Xa = /* @__PURE__ */ lt(Ua, [["__scopeId", "data-v-8cc8a517"]]), qa = le(Xa);
function Ja(e, a) {
  const l = ref(
    a.modelValue !== void 0 ? a.modelValue : e[0]
  ), t = (n) => l.value === n, r = (n) => {
    var g;
    l.value = n, (g = a.onChange) == null || g.call(a, n);
  };
  return {
    selected: l,
    isSelected: t,
    select: r,
    onKeydown: (n) => {
      const g = e.indexOf(l.value);
      if (n.key === "ArrowRight" || n.key === "ArrowDown") {
        const s = e[(g + 1) % e.length];
        r(s);
      } else if (n.key === "ArrowLeft" || n.key === "ArrowUp") {
        const s = e[(g - 1 + e.length) % e.length];
        r(s);
      }
    }
  };
}
const Qa = R({
  base: "inline-flex rounded-md p-1 bg-gray-100 dark:bg-gray-800 outline-none border-none",
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base"
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
      false: ""
    },
    block: {
      true: "w-full",
      false: ""
    }
  },
  defaultVariants: {
    size: "md",
    disabled: false,
    block: false
  }
}), _a = R({
  base: "relative flex-1 flex items-center max-w-max justify-center px-3 py-1.5 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:focus:ring-gray-400",
  variants: {
    selected: {
      true: "bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm",
      false: "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
      false: "cursor-pointer"
    },
    size: {
      sm: "h-6",
      md: "h-8",
      lg: "h-10"
    }
  },
  defaultVariants: {
    selected: false,
    disabled: false,
    size: "md"
  }
}), er = ["disabled", "aria-selected", "tabindex", "onClick"], tr = /* @__PURE__ */ defineComponent({
  name: "ZSegmented",
  __name: "index",
  props: {
    modelValue: {},
    options: {},
    size: { default: "md" },
    disabled: { type: Boolean, default: false },
    block: { type: Boolean, default: false },
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: a }) {
    const l = e, t = a, r = computed(() => l.options.map((S) => typeof S == "object" ? {
      value: S.value,
      label: S.label,
      disabled: S.disabled || false
    } : {
      value: S,
      label: String(S),
      disabled: false
    })), o = computed(() => r.value.map((S) => S.value)), { isSelected: n, select: g, onKeydown: s } = Ja(o.value, {
      modelValue: l.modelValue,
      onChange: (S) => {
        t("update:modelValue", S), t("change", S);
      }
    });
    watch(
      () => l.modelValue,
      (S) => {
        S !== void 0 && o.value.includes(S) && g(S);
      }
    );
    const u = computed(() => {
      var S, c;
      return l.unstyled ? ((S = l.pt) == null ? void 0 : S.container) || "" : Qa({
        size: l.size,
        disabled: l.disabled,
        block: l.block,
        class: (c = l.pt) == null ? void 0 : c.container
      });
    }), v = (S, c) => {
      var w, x;
      return l.unstyled ? ((w = l.pt) == null ? void 0 : w.option) || "" : _a({
        selected: n(S),
        disabled: l.disabled || c,
        size: l.size,
        class: (x = l.pt) == null ? void 0 : x.option
      });
    }, h = (S, c) => {
      l.disabled || c || g(S);
    };
    return (S, c) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(u.value),
      role: "tablist",
      onKeydown: c[0] || (c[0] = //@ts-ignore
      (...w) => unref(s) && unref(s)(...w))
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(r.value, (w) => (openBlock(), createElementBlock("button", {
        key: String(w.value),
        class: normalizeClass(v(w.value, w.disabled)),
        disabled: l.disabled || w.disabled,
        "aria-selected": unref(n)(w.value),
        tabindex: unref(n)(w.value) ? 0 : -1,
        role: "tab",
        type: "button",
        onClick: (x) => h(w.value, w.disabled)
      }, toDisplayString(w.label), 11, er))), 128))
    ], 34));
  }
}), lr = le(tr);
function ar(e) {
  const a = ref(null), l = ref(null), t = e.min ?? 0, r = e.max ?? 100, o = e.step ?? 1, n = e.orientation ?? "horizontal", g = ref(e.modelValue ?? t), s = computed(() => (g.value - t) / (r - t) * 100), u = (c) => {
    var i;
    const w = Math.round(c / o) * o, x = Math.min(r, Math.max(t, w));
    g.value = x, (i = e.onChange) == null || i.call(e, x);
  }, v = (c) => {
    const w = a.value;
    if (!w) return;
    const x = w.getBoundingClientRect(), i = n === "horizontal" ? (c.clientX - x.left) / x.width : 1 - (c.clientY - x.top) / x.height;
    u(t + i * (r - t));
  }, h = (c) => {
    c.key === "ArrowRight" || c.key === "ArrowUp" ? (c.preventDefault(), u(g.value + o)) : (c.key === "ArrowLeft" || c.key === "ArrowDown") && (c.preventDefault(), u(g.value - o));
  }, S = (c) => {
    c.preventDefault();
    const w = (i) => {
      const d = a.value;
      if (!d) return;
      const k = d.getBoundingClientRect(), y = n === "horizontal" ? (i.clientX - k.left) / k.width : 1 - (i.clientY - k.top) / k.height;
      u(t + y * (r - t));
    }, x = () => {
      window.removeEventListener("mousemove", w), window.removeEventListener("mouseup", x);
    };
    window.addEventListener("mousemove", w), window.addEventListener("mouseup", x);
  };
  return watch(
    () => e.modelValue,
    (c) => {
      c != null && (g.value = c);
    }
  ), {
    value: g,
    percent: s,
    trackRef: a,
    thumbRef: l,
    onTrackClick: v,
    onThumbKeyDown: h,
    onThumbMouseDown: S
  };
}
const rr = R({
  base: "relative",
  variants: {
    orientation: {
      horizontal: "h-12 w-full",
      vertical: "h-64 w-12"
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
      false: ""
    }
  },
  defaultVariants: {
    orientation: "horizontal",
    disabled: false
  }
}), or = R({
  base: "rounded-full bg-gray-200 dark:bg-gray-700 cursor-pointer",
  variants: {
    orientation: {
      horizontal: "h-2 w-full absolute top-1/2 -translate-y-1/2",
      vertical: "w-2 h-full absolute left-1/2 -translate-x-1/2"
    },
    disabled: {
      true: "cursor-not-allowed",
      false: ""
    }
  },
  defaultVariants: {
    orientation: "horizontal",
    disabled: false
  }
}), nr = R({
  base: "absolute rounded-full bg-blue-500 dark:bg-blue-600",
  variants: {
    orientation: {
      horizontal: "h-full top-0 left-0",
      vertical: "w-full bottom-0 left-0"
    },
    disabled: {
      true: "bg-gray-400 dark:bg-gray-500",
      false: ""
    }
  },
  defaultVariants: {
    orientation: "horizontal",
    disabled: false
  }
}), sr = R({
  base: "absolute bg-white dark:bg-gray-200 rounded-full shadow-md border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800",
  variants: {
    orientation: {
      horizontal: "h-4 w-4 top-1/2 -translate-x-1/2 -translate-y-1/2",
      vertical: "h-4 w-4 left-1/2 -translate-x-1/2 translate-y-1/2"
    },
    disabled: {
      true: "cursor-not-allowed",
      false: "cursor-grab active:cursor-grabbing"
    }
  },
  defaultVariants: {
    orientation: "horizontal",
    disabled: false
  }
}), ir = R({
  base: "absolute bg-gray-800 dark:bg-gray-700 text-white px-2 py-1 text-xs rounded pointer-events-none transform -translate-x-1/2 whitespace-nowrap",
  variants: {
    orientation: {
      horizontal: "bottom-full mb-2",
      vertical: "left-full ml-2 -translate-y-1/2"
    },
    visible: {
      true: "opacity-100",
      false: "opacity-0"
    }
  },
  defaultVariants: {
    orientation: "horizontal",
    visible: false
  }
}), ur = R({
  base: "absolute",
  variants: {
    orientation: {
      horizontal: "top-1/2 -translate-y-1/2 h-2",
      vertical: "left-1/2 -translate-x-1/2 w-2"
    }
  },
  defaultVariants: {
    orientation: "horizontal"
  }
}), dr = R({
  base: "absolute bg-gray-400 dark:bg-gray-500 rounded-full",
  variants: {
    orientation: {
      horizontal: "h-2 w-1 -translate-x-1/2",
      vertical: "w-2 h-1 -translate-y-1/2"
    },
    active: {
      true: "bg-blue-500 dark:bg-blue-600",
      false: ""
    }
  },
  defaultVariants: {
    orientation: "horizontal",
    active: false
  }
}), cr = R({
  base: "absolute text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap",
  variants: {
    orientation: {
      horizontal: "top-full mt-1 -translate-x-1/2",
      vertical: "left-full ml-2 -translate-y-1/2"
    }
  },
  defaultVariants: {
    orientation: "horizontal"
  }
}), fr = ["aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-orientation", "aria-disabled", "tabindex"], vr = /* @__PURE__ */ defineComponent({
  name: "ZSlider",
  __name: "index",
  props: {
    modelValue: {},
    min: { default: 0 },
    max: { default: 100 },
    step: { default: 1 },
    orientation: { default: "horizontal" },
    disabled: { type: Boolean, default: false },
    showTooltip: { type: Boolean, default: false },
    showMarks: { type: Boolean, default: false },
    marks: {},
    formatTooltip: {},
    unstyled: { type: Boolean, default: false },
    pt: { default: void 0 }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: a }) {
    const l = e, t = a, {
      value: r,
      percent: o,
      trackRef: n,
      thumbRef: g,
      onTrackClick: s,
      onThumbKeyDown: u,
      onThumbMouseDown: v
    } = ar({
      min: l.min,
      max: l.max,
      step: l.step,
      orientation: l.orientation,
      modelValue: l.modelValue,
      onChange: (B) => {
        t("update:modelValue", B), t("change", B);
      }
    }), h = computed(() => {
      var B, E;
      return l.unstyled ? ((B = l.pt) == null ? void 0 : B.container) || "" : rr({
        orientation: l.orientation,
        disabled: l.disabled,
        class: (E = l.pt) == null ? void 0 : E.container
      });
    }), S = computed(() => {
      var B, E;
      return l.unstyled ? ((B = l.pt) == null ? void 0 : B.track) || "" : or({
        orientation: l.orientation,
        disabled: l.disabled,
        class: (E = l.pt) == null ? void 0 : E.track
      });
    }), c = computed(() => {
      var B, E;
      return l.unstyled ? ((B = l.pt) == null ? void 0 : B.fill) || "" : nr({
        orientation: l.orientation,
        disabled: l.disabled,
        class: (E = l.pt) == null ? void 0 : E.fill
      });
    }), w = computed(() => {
      var B, E;
      return l.unstyled ? ((B = l.pt) == null ? void 0 : B.thumb) || "" : sr({
        orientation: l.orientation,
        disabled: l.disabled,
        class: (E = l.pt) == null ? void 0 : E.thumb
      });
    }), x = computed(() => l.orientation === "horizontal" ? { width: `${o.value}%` } : { height: `${o.value}%` }), i = computed(() => l.orientation === "horizontal" ? { left: `${o.value}%` } : { bottom: `${o.value}%` }), d = ref(false), k = computed(() => {
      var B, E;
      return l.unstyled ? ((B = l.pt) == null ? void 0 : B.tooltip) || "" : ir({
        orientation: l.orientation,
        visible: l.showTooltip && d.value,
        class: (E = l.pt) == null ? void 0 : E.tooltip
      });
    }), y = () => {
      l.disabled || (d.value = true);
    }, $ = () => {
      d.value = false;
    }, I = computed(() => l.formatTooltip ? l.formatTooltip(r.value) : r.value.toString()), V = computed(() => {
      var B, E;
      return l.unstyled ? ((B = l.pt) == null ? void 0 : B.marks) || "" : ur({
        orientation: l.orientation,
        class: (E = l.pt) == null ? void 0 : E.marks
      });
    }), A = computed(() => {
      if (!l.showMarks) return [];
      if (l.marks)
        return Object.entries(l.marks).map(([N, j]) => ({
          value: Number(N),
          label: j,
          percent: (Number(N) - l.min) / (l.max - l.min) * 100,
          active: r.value >= Number(N)
        }));
      const B = Math.floor((l.max - l.min) / l.step), E = B > 10 ? Math.floor(B / 5) : 1, M = [];
      for (let N = 0; N <= B; N += E) {
        const j = l.min + N * l.step;
        M.push({
          value: j,
          label: j.toString(),
          percent: N / B * 100,
          active: r.value >= j
        });
      }
      return M;
    }), T = (B) => {
      var E, M;
      return l.unstyled ? ((E = l.pt) == null ? void 0 : E.mark) || "" : dr({
        orientation: l.orientation,
        active: B,
        class: (M = l.pt) == null ? void 0 : M.mark
      });
    }, O = (B) => l.orientation === "horizontal" ? { left: `${B}%` } : { bottom: `${B}%` }, D = () => {
      var B, E;
      return l.unstyled ? ((B = l.pt) == null ? void 0 : B.markLabel) || "" : cr({
        orientation: l.orientation,
        class: (E = l.pt) == null ? void 0 : E.markLabel
      });
    }, L = (B) => {
      l.disabled || s(B);
    }, Z = (B) => {
      l.disabled || u(B);
    }, W = (B) => {
      if (l.disabled) return;
      v(B), y();
      const E = () => {
        $(), window.removeEventListener("mouseup", E);
      };
      window.addEventListener("mouseup", E);
    };
    return (B, E) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(h.value)
    }, [
      createElementVNode("div", {
        class: normalizeClass(S.value),
        ref_key: "trackRef",
        ref: n,
        onClick: L
      }, [
        createElementVNode("div", {
          class: normalizeClass(c.value),
          style: normalizeStyle(x.value)
        }, null, 6),
        e.showMarks ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(V.value)
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(A.value, (M) => (openBlock(), createElementBlock("div", {
            key: M.value,
            class: normalizeClass(T(M.active)),
            style: normalizeStyle(O(M.percent))
          }, [
            createElementVNode("span", {
              class: normalizeClass(D)
            }, toDisplayString(M.label), 1)
          ], 6))), 128))
        ], 2)) : createCommentVNode("", true)
      ], 2),
      createElementVNode("div", {
        class: normalizeClass(w.value),
        style: normalizeStyle(i.value),
        ref_key: "thumbRef",
        ref: g,
        onMousedown: W,
        onKeydown: Z,
        onMouseover: y,
        onMouseleave: $,
        role: "slider",
        "aria-valuemin": e.min,
        "aria-valuemax": e.max,
        "aria-valuenow": unref(r),
        "aria-orientation": e.orientation,
        "aria-disabled": e.disabled,
        tabindex: e.disabled ? -1 : 0
      }, [
        e.showTooltip ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(k.value)
        }, toDisplayString(I.value), 3)) : createCommentVNode("", true)
      ], 46, fr)
    ], 2));
  }
}), gr = le(vr), br = R({
  base: "inline-block",
  variants: {
    disabled: {
      true: "cursor-not-allowed opacity-50",
      false: ""
    }
  },
  defaultVariants: {
    disabled: false
  }
}), pr = R({
  base: "absolute z-10 rounded-md shadow-lg border p-4 max-w-sm box-border",
  variants: {
    placement: {
      top: "mb-2",
      right: "ml-2",
      bottom: "mt-2",
      left: "mr-2"
    },
    visible: {
      true: "opacity-100 scale-100",
      false: "opacity-0 scale-95 pointer-events-none"
    },
    color: {
      default: "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",
      primary: "bg-blue-600 border-blue-700 text-white",
      success: "bg-green-600 border-green-700 text-white",
      warning: "bg-yellow-600 border-yellow-700 text-white",
      danger: "bg-red-600 border-red-700 text-white"
    }
  },
  defaultVariants: {
    placement: "bottom",
    visible: false,
    color: "default"
  }
}), mr = R({
  base: "absolute w-3 h-3 transform rotate-45",
  variants: {
    placement: {
      top: "bottom-[-6.5px] left-1/2 -translate-x-1/2",
      right: "left-[-6.5px] top-1/2 -translate-y-1/2",
      bottom: "top-[-6.5px] left-1/2 -translate-x-1/2",
      left: "right-[-6.5px] top-1/2 -translate-y-1/2"
    },
    color: {
      default: "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",
      primary: "bg-blue-600 border-blue-700",
      success: "bg-green-600 border-green-700",
      warning: "bg-yellow-600 border-yellow-700",
      danger: "bg-red-600 border-red-700"
    }
  },
  defaultVariants: {
    placement: "bottom",
    color: "default"
  }
}), yr = R({
  base: "text-sm font-medium mb-2 pb-2 border-b",
  variants: {
    color: {
      default: "text-gray-900 dark:text-gray-100 border-gray-200 dark:border-gray-700",
      primary: "text-white border-blue-700",
      success: "text-white border-green-700",
      warning: "text-white border-yellow-700",
      danger: "text-white border-red-700"
    }
  },
  defaultVariants: {
    color: "default"
  }
}), hr = R({
  base: "text-sm",
  variants: {
    color: {
      default: "text-gray-700 dark:text-gray-300",
      primary: "text-white",
      success: "text-white",
      warning: "text-white",
      danger: "text-white"
    }
  },
  defaultVariants: {
    color: "default"
  }
}), wr = { class: "popover-inner" }, xr = /* @__PURE__ */ defineComponent({
  name: "ZPopover",
  __name: "index",
  props: {
    modelValue: { type: Boolean, default: false },
    placement: { default: "bottom" },
    trigger: { default: "click" },
    title: {},
    width: {},
    zIndex: { default: 1e3 },
    disabled: { type: Boolean },
    showArrow: { type: Boolean, default: true },
    offset: { default: 8 },
    transition: { default: "none" },
    teleport: { type: [Boolean, String], default: true },
    openDelay: { default: 0 },
    closeDelay: { default: 0 },
    followCursor: { type: Boolean, default: false },
    unbound: { type: Boolean, default: false },
    content: {},
    color: { default: "default" },
    unstyled: { type: Boolean, default: false },
    pt: { default: void 0 }
  },
  emits: ["update:modelValue"],
  setup(e, { expose: a, emit: l }) {
    const t = e, r = l, o = ref(false), n = ref(null), g = ref(null), s = `popover-${Math.random().toString(36).slice(2, 9)}`;
    let u = null, v = null;
    const h = ref(0), S = ref(0), c = async () => {
      v && clearTimeout(v), !t.disabled && (u = setTimeout(() => {
        o.value = true, r("update:modelValue", true), nextTick(d);
      }, t.openDelay));
    }, w = () => {
      u && clearTimeout(u), !t.disabled && (v = setTimeout(() => {
        o.value = false, r("update:modelValue", false);
      }, t.closeDelay));
    }, x = () => {
      o.value ? w() : c();
    }, i = (H) => {
      H ? c() : w();
    }, d = () => {
      const H = g.value;
      if (!H || !o.value) return;
      const J = h.value, re = S.value;
      if (t.followCursor || t.unbound) {
        let he = 0, be = 0;
        switch (t.placement) {
          case "top":
            he = re - H.offsetHeight - t.offset, be = J - H.offsetWidth / 2;
            break;
          case "right":
            he = re - H.offsetHeight / 2, be = J + t.offset;
            break;
          case "bottom":
            he = re + t.offset, be = J - H.offsetWidth / 2;
            break;
          case "left":
            he = re - H.offsetHeight / 2, be = J - H.offsetWidth - t.offset;
            break;
        }
        k(H, he, be);
        return;
      }
      const ne = n.value;
      if (!ne) return;
      const ve = ne.getBoundingClientRect(), fe = H.getBoundingClientRect();
      let ye = 0, ke = 0;
      const we = ve.left + ve.width / 2, Ce = ve.top + ve.height / 2;
      switch (t.placement) {
        case "top":
          ye = ve.top - fe.height - t.offset, ke = we - fe.width / 2;
          break;
        case "right":
          ye = Ce - fe.height / 2, ke = ve.right + t.offset;
          break;
        case "bottom":
          ye = ve.bottom + t.offset, ke = we - fe.width / 2;
          break;
        case "left":
          ye = Ce - fe.height / 2, ke = ve.left - fe.width - t.offset;
          break;
      }
      k(H, ye, ke);
    }, k = (H, J, re) => {
      var ve;
      const ne = H.querySelector(
        '[class*="popoverArrow"]'
      );
      if (re = Math.max(8, re), re = Math.min(re, window.innerWidth - H.offsetWidth - 8), J = Math.max(8, J), J = Math.min(J, window.innerHeight - H.offsetHeight - 8), H.style.position = "fixed", H.style.top = `${J}px`, H.style.left = `${re}px`, H.style.zIndex = ((ve = t.zIndex) == null ? void 0 : ve.toString()) || "1000", H.style.transition = "none", ne && t.showArrow && !t.followCursor && !t.unbound) {
        const fe = n.value;
        if (!fe) return;
        const ye = fe.getBoundingClientRect(), ke = H.getBoundingClientRect(), we = getComputedStyle(H).borderColor;
        switch (t.placement) {
          case "top":
          case "bottom": {
            const he = ye.left + ye.width / 2 - re, be = 12, De = ke.width - 12, K = Math.max(
              be,
              Math.min(De, he)
            );
            ne.style.left = `${K}px`, ne.style.transform = "rotate(45deg)", t.placement === "top" ? (ne.style.borderRight = `1px solid ${we}`, ne.style.borderBottom = `1px solid ${we}`, ne.style.borderLeft = "none", ne.style.borderTop = "none") : (ne.style.borderLeft = `1px solid ${we}`, ne.style.borderTop = `1px solid ${we}`, ne.style.borderRight = "none", ne.style.borderBottom = "none");
            break;
          }
          case "left":
          case "right": {
            const he = ye.top + ye.height / 2 - J, be = 12, De = ke.height - 12, K = Math.max(
              be,
              Math.min(De, he)
            );
            ne.style.top = `${K}px`, ne.style.transform = "rotate(45deg)", t.placement === "left" ? (ne.style.borderRight = `1px solid ${we}`, ne.style.borderBottom = `1px solid ${we}`, ne.style.borderLeft = "none", ne.style.borderTop = "none") : (ne.style.borderLeft = `1px solid ${we}`, ne.style.borderTop = `1px solid ${we}`, ne.style.borderRight = "none", ne.style.borderBottom = "none");
            break;
          }
        }
      }
    }, y = (H) => {
      h.value = H.clientX, S.value = H.clientY, (t.followCursor || t.unbound) && o.value && d();
    }, $ = () => {
      o.value && d();
    }, I = () => {
      o.value && d();
    }, V = () => {
      t.disabled || (t.trigger === "click" || t.trigger === "manual") && x();
    }, A = (H) => {
      t.disabled || (h.value = H.clientX, S.value = H.clientY, t.trigger === "hover" && c());
    }, T = () => {
      t.disabled || t.trigger === "hover" && w();
    }, O = () => {
      t.disabled || c();
    }, D = () => {
      t.disabled || w();
    }, L = (H) => {
      var J, re;
      o.value && !((J = g.value) != null && J.contains(H.target)) && !((re = n.value) != null && re.contains(H.target)) && w();
    }, Z = computed(() => {
      var H, J;
      return t.unstyled ? ((H = t.pt) == null ? void 0 : H.container) || "relative inline-block" : (J = t.pt) != null && J.container ? `relative inline-block ${t.pt.container}` : "relative inline-block";
    }), W = computed(() => {
      var H, J;
      return t.unstyled ? ((H = t.pt) == null ? void 0 : H.trigger) || "inline-block" : br({
        disabled: t.disabled,
        class: (J = t.pt) == null ? void 0 : J.trigger
      });
    }), B = computed(() => {
      var H, J;
      return t.unstyled ? ((H = t.pt) == null ? void 0 : H.content) || "" : pr({
        placement: t.placement,
        visible: o.value,
        color: t.color,
        class: (J = t.pt) == null ? void 0 : J.content
      });
    }), E = computed(() => {
      var H, J;
      return t.unstyled ? ((H = t.pt) == null ? void 0 : H.arrow) || "" : mr({
        placement: t.placement,
        color: t.color,
        class: (J = t.pt) == null ? void 0 : J.arrow
      });
    }), M = computed(() => {
      var H, J;
      return t.unstyled ? ((H = t.pt) == null ? void 0 : H.title) || "" : yr({
        color: t.color,
        class: (J = t.pt) == null ? void 0 : J.title
      });
    }), N = computed(() => {
      var H, J;
      return t.unstyled ? ((H = t.pt) == null ? void 0 : H.body) || "" : hr({
        color: t.color,
        class: (J = t.pt) == null ? void 0 : J.body
      });
    }), j = computed(() => {
      var J;
      const H = {
        zIndex: ((J = t.zIndex) == null ? void 0 : J.toString()) || "1000",
        transition: "none",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        maxWidth: "280px",
        overflow: "hidden"
      };
      return t.width && (H.width = typeof t.width == "number" ? `${t.width}px` : t.width), H;
    }), Y = computed(() => t.teleport === false ? null : typeof t.teleport == "string" ? t.teleport : "body"), X = () => {
      window.addEventListener("resize", $), window.addEventListener("scroll", I, true), document.addEventListener("click", L), window.addEventListener("mousemove", y);
    }, se = () => {
      window.removeEventListener("resize", $), window.removeEventListener("scroll", I, true), document.removeEventListener("click", L), window.removeEventListener("mousemove", y);
    };
    return onMounted(() => {
      X(), t.modelValue && nextTick(() => {
        i(true);
      });
    }), onUnmounted(() => {
      se(), u && clearTimeout(u), v && clearTimeout(v);
    }), watch(
      () => t.modelValue,
      (H) => {
        H !== o.value && i(H);
      }
    ), watch(o, (H) => {
      H && nextTick(d), r("update:modelValue", H);
    }), watch(
      () => [t.placement, t.offset, t.followCursor, t.unbound],
      () => {
        o.value && nextTick(d);
      }
    ), a({
      show: () => i(true),
      hide: () => i(false),
      toggle: x,
      updatePosition: d
    }), (H, J) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(Z.value),
      onMousemove: y
    }, [
      e.unbound ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", {
        key: 0,
        ref_key: "triggerRef",
        ref: n,
        class: normalizeClass(W.value),
        "aria-describedby": s,
        onClick: V,
        onMouseenter: A,
        onMouseleave: T,
        onFocus: O,
        onBlur: D
      }, [
        renderSlot(H.$slots, "trigger")
      ], 34)),
      (openBlock(), createBlock(Teleport, {
        to: Y.value,
        disabled: !Y.value
      }, [
        o.value && !e.disabled ? (openBlock(), createElementBlock("div", {
          key: 0,
          ref_key: "popoverRef",
          ref: g,
          class: normalizeClass(B.value),
          style: normalizeStyle(j.value),
          id: s,
          role: "tooltip",
          "aria-live": "polite"
        }, [
          e.showArrow && !e.followCursor && !e.unbound ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(E.value)
          }, null, 2)) : createCommentVNode("", true),
          createElementVNode("div", wr, [
            e.title ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(M.value)
            }, toDisplayString(e.title), 3)) : createCommentVNode("", true),
            createElementVNode("div", {
              class: normalizeClass(N.value)
            }, [
              renderSlot(H.$slots, "default", {}, () => [
                createTextVNode(toDisplayString(e.content), 1)
              ])
            ], 2)
          ])
        ], 6)) : createCommentVNode("", true)
      ], 8, ["to", "disabled"]))
    ], 34));
  }
}), kr = le(xr);
function Cr(e) {
  const a = ref(false), l = ref(null), t = ref(null);
  let r = null, o = null, n = 0, g = 0;
  const u = {
    ...{
      openDelay: 0,
      closeDelay: 100,
      placement: "top",
      offset: 8,
      followCursor: false,
      unbound: false
    },
    ...e
  }, v = (V) => {
    n = V.clientX, g = V.clientY, (u.followCursor || u.unbound) && a.value && w();
  }, h = () => {
    o && clearTimeout(o), r = setTimeout(() => {
      a.value = true, requestAnimationFrame(w);
    }, u.openDelay);
  }, S = () => {
    r && clearTimeout(r), o = setTimeout(() => {
      a.value = false;
    }, u.closeDelay);
  }, c = (V) => {
    V ? h() : S();
  }, w = () => {
    if (!a.value || !t.value || !u.unbound && !u.followCursor && !l.value) return;
    const V = t.value, A = V.getBoundingClientRect();
    let T = 0, O = 0;
    const D = u.offset;
    if (u.followCursor || u.unbound)
      switch (u.placement) {
        case "top":
          T = g - A.height - D, O = n - A.width / 2;
          break;
        case "right":
          T = g - A.height / 2, O = n + D;
          break;
        case "bottom":
          T = g + D, O = n - A.width / 2;
          break;
        case "left":
          T = g - A.height / 2, O = n - A.width - D;
          break;
      }
    else {
      const Z = l.value.getBoundingClientRect();
      switch (u.placement) {
        case "top":
          T = Z.top - A.height - D, O = Z.left + Z.width / 2 - A.width / 2;
          break;
        case "right":
          T = Z.top + Z.height / 2 - A.height / 2, O = Z.right + D;
          break;
        case "bottom":
          T = Z.bottom + D, O = Z.left + Z.width / 2 - A.width / 2;
          break;
        case "left":
          T = Z.top + Z.height / 2 - A.height / 2, O = Z.left - A.width - D;
          break;
      }
    }
    O = Math.max(8, O), O = Math.min(O, window.innerWidth - A.width - 8), T = Math.max(8, T), T = Math.min(T, window.innerHeight - A.height - 8), V.style.position = "fixed", V.style.top = "0", V.style.left = "0", V.style.transform = `translate3d(${O}px, ${T}px, 0)`, V.style.zIndex = "9999";
  }, x = () => {
    a.value && w();
  }, i = () => {
    a.value && w();
  };
  watch(a, (V) => {
    V ? (window.addEventListener("resize", x), window.addEventListener("scroll", i, true), (u.followCursor || u.unbound) && window.addEventListener("mousemove", v)) : (window.removeEventListener("resize", x), window.removeEventListener("scroll", i, true), (u.followCursor || u.unbound) && window.removeEventListener("mousemove", v));
  }), watch(l, (V) => {
    V && a.value && !u.unbound && w();
  }), onMounted(() => {
    (u.followCursor || u.unbound) && window.addEventListener("mousemove", v);
  });
  const d = (V) => {
    n = V.clientX, g = V.clientY, h();
  }, k = () => h(), y = () => S(), $ = () => S();
  onUnmounted(() => {
    r && clearTimeout(r), o && clearTimeout(o), window.removeEventListener("resize", x), window.removeEventListener("scroll", i, true), (u.followCursor || u.unbound) && window.removeEventListener("mousemove", v);
  });
  const I = `tooltip-${Math.random().toString(36).slice(2, 9)}`;
  return {
    isOpen: a,
    triggerRef: l,
    tooltipRef: t,
    tooltipId: I,
    updatePosition: w,
    onMouseEnter: d,
    onFocus: k,
    onMouseLeave: y,
    onBlur: $,
    setIsOpen: c
  };
}
const Sr = R({
  base: "inline-block"
}), zr = R({
  base: "px-2 py-1 text-xs font-medium rounded shadow-md pointer-events-none max-w-xs",
  variants: {
    color: {
      default: "bg-gray-800 text-white dark:bg-gray-700",
      primary: "bg-blue-600 text-white",
      success: "bg-green-600 text-white",
      warning: "bg-yellow-600 text-white",
      danger: "bg-red-600 text-white"
    },
    visible: {
      true: "block",
      false: "hidden"
    }
  },
  defaultVariants: {
    color: "default",
    visible: true
  }
}), $r = R({
  base: "absolute w-2 h-2 rotate-45",
  variants: {
    color: {
      default: "bg-gray-800 dark:bg-gray-700",
      primary: "bg-blue-600",
      success: "bg-green-600",
      warning: "bg-yellow-600",
      danger: "bg-red-600"
    },
    placement: {
      top: "bottom-[-4px] left-1/2 -translate-x-1/2",
      right: "left-[-4px] top-1/2 -translate-y-1/2",
      bottom: "top-[-4px] left-1/2 -translate-x-1/2",
      left: "right-[-4px] top-1/2 -translate-y-1/2"
    }
  },
  defaultVariants: {
    color: "default",
    placement: "top"
  }
}), Br = ["aria-describedby"], Vr = ["id"], Ir = /* @__PURE__ */ defineComponent({
  name: "ZTooltip",
  __name: "index",
  props: {
    content: {},
    placement: { default: "top" },
    openDelay: { default: 0 },
    closeDelay: { default: 0 },
    disabled: { type: Boolean, default: false },
    trigger: { default: "hover" },
    maxWidth: {},
    color: { default: "default" },
    arrow: { type: Boolean, default: true },
    offset: { default: 8 },
    followCursor: { type: Boolean, default: false },
    unbound: { type: Boolean, default: false },
    modelValue: { type: Boolean, default: false },
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: a, emit: l }) {
    const t = e, r = l, o = ref(0), n = ref(0), g = ref(false), s = Cr({
      openDelay: t.openDelay,
      closeDelay: t.closeDelay,
      placement: t.placement,
      offset: t.offset,
      followCursor: t.followCursor,
      unbound: t.unbound
    }), u = s.isOpen, v = s.triggerRef, h = s.tooltipRef, S = s.tooltipId, c = s.setIsOpen, w = () => {
      g.value = true, c(true), nextTick(() => {
        I();
      });
    }, x = () => {
      g.value = false, c(false);
    }, i = () => {
      g.value ? x() : w();
    }, d = computed(() => {
      var M, N;
      return t.unstyled ? ((M = t.pt) == null ? void 0 : M.container) || "" : Sr({
        class: (N = t.pt) == null ? void 0 : N.container
      });
    }), k = computed(() => {
      var M, N;
      return t.unstyled ? ((M = t.pt) == null ? void 0 : M.content) || "" : zr({
        color: t.color,
        visible: true,
        class: (N = t.pt) == null ? void 0 : N.content
      });
    }), y = computed(() => {
      var M, N;
      return t.unstyled ? ((M = t.pt) == null ? void 0 : M.arrow) || "" : $r({
        color: t.color,
        placement: t.placement,
        class: (N = t.pt) == null ? void 0 : N.arrow
      });
    }), $ = computed(() => {
      const M = {};
      return t.maxWidth && (M.maxWidth = typeof t.maxWidth == "number" ? `${t.maxWidth}px` : t.maxWidth), M;
    }), I = () => {
      const M = h.value;
      if (!M || !u.value) return;
      const N = o.value, j = n.value;
      if (t.followCursor || t.unbound) {
        let J = 0, re = 0;
        switch (t.placement) {
          case "top":
            J = j - M.offsetHeight - t.offset, re = N - M.offsetWidth / 2;
            break;
          case "right":
            J = j - M.offsetHeight / 2, re = N + t.offset;
            break;
          case "bottom":
            J = j + t.offset, re = N - M.offsetWidth / 2;
            break;
          case "left":
            J = j - M.offsetHeight / 2, re = N - M.offsetWidth - t.offset;
            break;
        }
        V(M, J, re);
        return;
      }
      const Y = v.value;
      if (!Y) return;
      const X = Y.getBoundingClientRect();
      let se = 0, H = 0;
      switch (t.placement) {
        case "top":
          se = X.top - M.offsetHeight - t.offset, H = X.left + X.width / 2 - M.offsetWidth / 2;
          break;
        case "right":
          se = X.top + X.height / 2 - M.offsetHeight / 2, H = X.right + t.offset;
          break;
        case "bottom":
          se = X.bottom + t.offset, H = X.left + X.width / 2 - M.offsetWidth / 2;
          break;
        case "left":
          se = X.top + X.height / 2 - M.offsetHeight / 2, H = X.left - M.offsetWidth - t.offset;
          break;
      }
      V(M, se, H);
    }, V = (M, N, j) => {
      j = Math.max(8, j), j = Math.min(j, window.innerWidth - M.offsetWidth - 8), N = Math.max(8, N), N = Math.min(N, window.innerHeight - M.offsetHeight - 8), M.style.position = "fixed", M.style.top = `${N}px`, M.style.left = `${j}px`, M.style.zIndex = "9999", M.style.transition = "none";
    }, A = (M) => {
      o.value = M.clientX, n.value = M.clientY, u.value && (t.followCursor || t.unbound) && I();
    }, T = () => {
      u.value && I();
    }, O = () => {
      u.value && I();
    }, D = (M) => {
      t.disabled || (o.value = M.clientX, n.value = M.clientY, (t.trigger === "hover" || t.trigger === "both") && (c(true), nextTick(I)));
    }, L = () => {
      t.disabled || (t.trigger === "focus" || t.trigger === "both") && (c(true), nextTick(I));
    }, Z = () => {
      t.disabled || (t.trigger === "hover" || t.trigger === "both") && c(false);
    }, W = () => {
      t.disabled || (t.trigger === "focus" || t.trigger === "both") && c(false);
    }, B = () => {
      window.addEventListener("mousemove", A), window.addEventListener("resize", T), window.addEventListener("scroll", O, true);
    }, E = () => {
      window.removeEventListener("mousemove", A), window.removeEventListener("resize", T), window.removeEventListener("scroll", O, true);
    };
    return onMounted(() => {
      B(), t.unbound && t.modelValue && (g.value = true, c(true), nextTick(I));
    }), onUnmounted(() => {
      E();
    }), watch(u, (M) => {
      M && nextTick(I), t.unbound && (r("update:modelValue", M), g.value = M);
    }), watch(
      () => t.modelValue,
      (M) => {
        t.unbound && (g.value = M, c(M), M && nextTick(I));
      }
    ), a({
      show: w,
      hide: x,
      toggle: i,
      updatePosition: I
    }), (M, N) => (openBlock(), createElementBlock(Fragment, null, [
      e.unbound ? createCommentVNode("", true) : (openBlock(), createElementBlock("span", {
        key: 0,
        ref_key: "triggerRef",
        ref: v,
        onMouseenter: D,
        onMouseleave: Z,
        onFocus: L,
        onBlur: W,
        "aria-describedby": unref(S),
        class: normalizeClass(d.value),
        role: "button",
        tabindex: "0"
      }, [
        renderSlot(M.$slots, "default")
      ], 42, Br)),
      (openBlock(), createBlock(Teleport, { to: "body" }, [
        unref(u) && !e.disabled ? (openBlock(), createElementBlock("div", {
          key: 0,
          ref_key: "tooltipRef",
          ref: h,
          class: normalizeClass(k.value),
          style: normalizeStyle($.value),
          id: unref(S),
          role: "tooltip",
          "aria-live": "polite"
        }, [
          renderSlot(M.$slots, "content", {}, () => [
            createTextVNode(toDisplayString(e.content), 1)
          ]),
          e.arrow && !e.followCursor && !e.unbound ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(y.value)
          }, null, 2)) : createCommentVNode("", true)
        ], 14, Vr)) : createCommentVNode("", true)
      ]))
    ], 64));
  }
}), Mr = le(Ir);
function Tr(e) {
  const a = ref(e.modelValue ?? false), l = () => {
    var n;
    e.disabled || !e.selectable || (a.value = !a.value, (n = e.onChange) == null || n.call(e, a.value));
  }, t = (n) => {
    var g;
    e.disabled || (n.stopPropagation(), (g = e.onClose) == null || g.call(e, n));
  }, r = computed(() => a.value), o = computed(() => e.closable || !!e.onClose);
  return {
    isSelected: r,
    isClosable: o,
    toggle: l,
    handleClose: t
  };
}
const Dr = R({
  base: "inline-flex items-center justify-center gap-1 text-sm transition-colors duration-200",
  variants: {
    variant: {
      solid: "border-transparent",
      bordered: "bg-transparent border",
      light: "border-transparent",
      flat: "border-transparent",
      faded: "border-transparent bg-opacity-20",
      shadow: "border-transparent shadow-md",
      dot: "pl-2"
      // 使用更小的左内边距，为dot预留空间
    },
    color: {
      default: "bg-zinc-100 text-zinc-800 border-zinc-200",
      primary: "bg-blue-100 text-blue-800 border-blue-300",
      secondary: "bg-purple-100 text-purple-800 border-purple-300",
      success: "bg-green-100 text-green-800 border-green-300",
      warning: "bg-yellow-100 text-yellow-800 border-yellow-300",
      danger: "bg-red-100 text-red-800 border-red-300"
    },
    size: {
      sm: "text-xs py-0.5 px-2 h-5",
      md: "py-1 px-2.5 h-7",
      lg: "text-base py-1.5 px-3 h-9"
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full"
    },
    selected: {
      true: "",
      false: ""
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed pointer-events-none",
      false: ""
    }
  },
  compoundVariants: [
    // 默认/未选中状态
    {
      variant: "solid",
      color: "default",
      selected: false,
      class: "bg-gray-100 text-gray-800"
    },
    {
      variant: "solid",
      color: "primary",
      selected: false,
      class: "bg-blue-100 text-blue-800"
    },
    {
      variant: "solid",
      color: "secondary",
      selected: false,
      class: "bg-purple-100 text-purple-800"
    },
    {
      variant: "solid",
      color: "success",
      selected: false,
      class: "bg-green-100 text-green-800"
    },
    {
      variant: "solid",
      color: "warning",
      selected: false,
      class: "bg-yellow-100 text-yellow-800"
    },
    {
      variant: "solid",
      color: "danger",
      selected: false,
      class: "bg-red-100 text-red-800"
    },
    // 选中状态
    {
      variant: "solid",
      color: "default",
      selected: true,
      class: "bg-gray-200 text-gray-900"
    },
    {
      variant: "solid",
      color: "primary",
      selected: true,
      class: "bg-blue-200 text-blue-900"
    },
    {
      variant: "solid",
      color: "secondary",
      selected: true,
      class: "bg-purple-200 text-purple-900"
    },
    {
      variant: "solid",
      color: "success",
      selected: true,
      class: "bg-green-200 text-green-900"
    },
    {
      variant: "solid",
      color: "warning",
      selected: true,
      class: "bg-yellow-200 text-yellow-900"
    },
    {
      variant: "solid",
      color: "danger",
      selected: true,
      class: "bg-red-200 text-red-900"
    },
    // Bordered 变体
    {
      variant: "bordered",
      color: "default",
      class: "border-gray-300 text-gray-800"
    },
    {
      variant: "bordered",
      color: "primary",
      class: "border-blue-400 text-blue-600"
    },
    {
      variant: "bordered",
      color: "secondary",
      class: "border-purple-400 text-purple-600"
    },
    {
      variant: "bordered",
      color: "success",
      class: "border-green-400 text-green-600"
    },
    {
      variant: "bordered",
      color: "warning",
      class: "border-yellow-400 text-yellow-600"
    },
    {
      variant: "bordered",
      color: "danger",
      class: "border-red-400 text-red-600"
    },
    // Light 变体
    {
      variant: "light",
      color: "default",
      class: "bg-gray-50 text-gray-600"
    },
    {
      variant: "light",
      color: "primary",
      class: "bg-blue-50 text-blue-600"
    },
    {
      variant: "light",
      color: "secondary",
      class: "bg-purple-50 text-purple-600"
    },
    {
      variant: "light",
      color: "success",
      class: "bg-green-50 text-green-600"
    },
    {
      variant: "light",
      color: "warning",
      class: "bg-yellow-50 text-yellow-600"
    },
    {
      variant: "light",
      color: "danger",
      class: "bg-red-50 text-red-600"
    },
    // Flat 变体
    {
      variant: "flat",
      color: "default",
      class: "bg-gray-200 text-gray-800"
    },
    {
      variant: "flat",
      color: "primary",
      class: "bg-blue-200 text-blue-800"
    },
    {
      variant: "flat",
      color: "secondary",
      class: "bg-purple-200 text-purple-800"
    },
    {
      variant: "flat",
      color: "success",
      class: "bg-green-200 text-green-800"
    },
    {
      variant: "flat",
      color: "warning",
      class: "bg-yellow-200 text-yellow-800"
    },
    {
      variant: "flat",
      color: "danger",
      class: "bg-red-200 text-red-800"
    },
    // Faded 变体
    {
      variant: "faded",
      color: "default",
      class: "bg-gray-500 bg-opacity-20 text-gray-800"
    },
    {
      variant: "faded",
      color: "primary",
      class: "bg-blue-500 bg-opacity-20 text-blue-800"
    },
    {
      variant: "faded",
      color: "secondary",
      class: "bg-purple-500 bg-opacity-20 text-purple-800"
    },
    {
      variant: "faded",
      color: "success",
      class: "bg-green-500 bg-opacity-20 text-green-800"
    },
    {
      variant: "faded",
      color: "warning",
      class: "bg-yellow-500 bg-opacity-20 text-yellow-800"
    },
    {
      variant: "faded",
      color: "danger",
      class: "bg-red-500 bg-opacity-20 text-red-800"
    },
    // Shadow 变体
    {
      variant: "shadow",
      color: "default",
      class: "bg-white text-gray-800 shadow-gray-200/50"
    },
    {
      variant: "shadow",
      color: "primary",
      class: "bg-white text-blue-800 shadow-blue-200/50"
    },
    {
      variant: "shadow",
      color: "secondary",
      class: "bg-white text-purple-800 shadow-purple-200/50"
    },
    {
      variant: "shadow",
      color: "success",
      class: "bg-white text-green-800 shadow-green-200/50"
    },
    {
      variant: "shadow",
      color: "warning",
      class: "bg-white text-yellow-800 shadow-yellow-200/50"
    },
    {
      variant: "shadow",
      color: "danger",
      class: "bg-white text-red-800 shadow-red-200/50"
    }
  ],
  defaultVariants: {
    variant: "solid",
    color: "default",
    size: "md",
    radius: "full",
    selected: false,
    disabled: false
  }
}), Rr = ["aria-selected"], Er = ["disabled"], Lr = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    modelValue: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    selectable: { type: Boolean, default: false },
    closable: { type: Boolean, default: false },
    onClose: {},
    variant: { default: "solid" },
    color: { default: "default" },
    size: { default: "md" },
    radius: { default: "full" },
    avatar: {},
    startContent: {},
    endContent: {},
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  emits: ["update:modelValue", "close"],
  setup(e, { emit: a }) {
    const l = e, t = a, { isSelected: r, isClosable: o, toggle: n, handleClose: g } = Tr({
      modelValue: l.modelValue,
      selectable: l.selectable,
      disabled: l.disabled,
      closable: l.closable,
      onClose: (x) => t("close", x),
      onChange: (x) => t("update:modelValue", x)
    }), s = computed(() => {
      var x, i;
      return l.unstyled ? ((x = l.pt) == null ? void 0 : x.root) || "" : Dr({
        variant: l.variant,
        color: l.color,
        size: l.size,
        radius: l.radius,
        selected: r.value,
        disabled: l.disabled,
        class: (i = l.pt) == null ? void 0 : i.root
      });
    }), u = computed(() => {
      var i, d;
      return l.unstyled ? ((i = l.pt) == null ? void 0 : i.dot) || "" : [
        "mr-1.5 h-2 w-2 rounded-full",
        {
          default: "bg-zinc-500",
          primary: "bg-blue-500",
          secondary: "bg-purple-500",
          success: "bg-green-500",
          warning: "bg-yellow-500",
          danger: "bg-red-500"
        }[l.color || "default"],
        (d = l.pt) == null ? void 0 : d.dot
      ];
    }), v = computed(() => {
      var x;
      return l.unstyled ? ((x = l.pt) == null ? void 0 : x.avatar) || "" : "flex shrink-0 mr-1.5";
    }), h = computed(() => {
      var x;
      return l.unstyled ? ((x = l.pt) == null ? void 0 : x.startContent) || "" : "flex shrink-0 mr-1.5";
    }), S = computed(() => {
      var x;
      return l.unstyled ? ((x = l.pt) == null ? void 0 : x.content) || "" : "truncate";
    }), c = computed(() => {
      var x;
      return l.unstyled ? ((x = l.pt) == null ? void 0 : x.endContent) || "" : "flex shrink-0 ml-1.5";
    }), w = computed(() => {
      var x;
      return l.unstyled ? ((x = l.pt) == null ? void 0 : x.closeButton) || "" : "ml-1.5 flex-shrink-0 flex items-center justify-center rounded-full hover:bg-black/5 focus:outline-none focus:bg-black/10 w-4 h-4";
    });
    return (x, i) => (openBlock(), createElementBlock("span", {
      class: normalizeClass(s.value),
      role: "option",
      "aria-selected": unref(r),
      onClick: i[1] || (i[1] = //@ts-ignore
      (...d) => unref(n) && unref(n)(...d))
    }, [
      e.variant === "dot" ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(u.value)
      }, null, 2)) : createCommentVNode("", true),
      x.$slots.avatar ? renderSlot(x.$slots, "avatar", {
        class: normalizeClass(v.value)
      }, void 0, void 0, 1) : e.avatar ? renderSlot(x.$slots, "avatarFallback", {
        class: normalizeClass(v.value)
      }, () => [
        createElementVNode("span", {
          class: normalizeClass(v.value)
        }, [
          (openBlock(), createBlock(resolveDynamicComponent(e.avatar)))
        ], 2)
      ], void 0, 2) : createCommentVNode("", true),
      x.$slots.startContent ? renderSlot(x.$slots, "startContent", {
        class: normalizeClass(h.value)
      }, void 0, void 0, 3) : e.startContent ? renderSlot(x.$slots, "startContentFallback", {
        class: normalizeClass(h.value)
      }, () => [
        createElementVNode("span", {
          class: normalizeClass(h.value)
        }, [
          (openBlock(), createBlock(resolveDynamicComponent(e.startContent)))
        ], 2)
      ], void 0, 4) : createCommentVNode("", true),
      createElementVNode("span", {
        class: normalizeClass(S.value)
      }, [
        renderSlot(x.$slots, "default")
      ], 2),
      x.$slots.endContent ? renderSlot(x.$slots, "endContent", {
        class: normalizeClass(c.value)
      }, void 0, void 0, 5) : e.endContent ? renderSlot(x.$slots, "endContentFallback", {
        class: normalizeClass(c.value)
      }, () => [
        createElementVNode("span", {
          class: normalizeClass(c.value)
        }, [
          (openBlock(), createBlock(resolveDynamicComponent(e.endContent)))
        ], 2)
      ], void 0, 6) : createCommentVNode("", true),
      unref(o) ? (openBlock(), createElementBlock("button", {
        key: 7,
        type: "button",
        class: normalizeClass(w.value),
        onClick: i[0] || (i[0] = withModifiers(
          //@ts-ignore
          (...d) => unref(g) && unref(g)(...d),
          ["stop"]
        )),
        "aria-label": "关闭",
        disabled: e.disabled
      }, [...i[2] || (i[2] = [
        createElementVNode("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "12",
          height: "12",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          class: "opacity-70 hover:opacity-100"
        }, [
          createElementVNode("line", {
            x1: "18",
            y1: "6",
            x2: "6",
            y2: "18"
          }),
          createElementVNode("line", {
            x1: "6",
            y1: "6",
            x2: "18",
            y2: "18"
          })
        ], -1)
      ])], 10, Er)) : createCommentVNode("", true)
    ], 10, Rr));
  }
}), Ar = le(Lr), Or = R({
  base: "w-full flex items-start gap-3 relative",
  variants: {
    variant: {
      info: "bg-blue-50 text-blue-800 border-blue-300 dark:bg-blue-900/30 dark:text-blue-200 dark:border-blue-800",
      success: "bg-green-50 text-green-800 border-green-300 dark:bg-green-900/30 dark:text-green-200 dark:border-green-800",
      warning: "bg-amber-50 text-amber-800 border-amber-300 dark:bg-amber-900/30 dark:text-amber-200 dark:border-amber-800",
      error: "bg-red-50 text-red-800 border-red-300 dark:bg-red-900/30 dark:text-red-200 dark:border-red-800"
    },
    size: {
      xs: "text-xs p-2",
      sm: "text-sm p-3",
      md: "text-base p-4",
      lg: "text-base p-5"
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-xl"
    },
    border: {
      true: "border",
      false: "border-0"
    },
    shadow: {
      true: "shadow-sm",
      false: "shadow-none"
    }
  },
  defaultVariants: {
    variant: "info",
    size: "md",
    rounded: "md",
    border: true,
    shadow: false
  }
}), Pr = R({
  base: "shrink-0 flex items-center justify-center",
  variants: {
    variant: {
      info: "text-blue-500 dark:text-blue-400",
      success: "text-green-500 dark:text-green-400",
      warning: "text-amber-500 dark:text-amber-400",
      error: "text-red-500 dark:text-red-400"
    },
    size: {
      xs: "w-4 h-4",
      sm: "w-5 h-5",
      md: "w-6 h-6",
      lg: "w-7 h-7"
    }
  },
  defaultVariants: {
    variant: "info",
    size: "md"
  }
}), jr = R({
  base: "font-medium leading-tight",
  variants: {
    size: {
      xs: "text-xs mb-0.5",
      sm: "text-sm mb-1",
      md: "text-base mb-1",
      lg: "text-lg mb-1.5"
    }
  },
  defaultVariants: {
    size: "md"
  }
}), Zr = R({
  base: "leading-normal",
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-base"
    }
  },
  defaultVariants: {
    size: "md"
  }
}), Wr = R({
  base: "absolute right-2 top-2 p-1 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors",
  variants: {
    size: {
      xs: "w-5 h-5",
      sm: "w-6 h-6",
      md: "w-7 h-7",
      lg: "w-8 h-8"
    }
  },
  defaultVariants: {
    size: "md"
  }
}), Fr = ["innerHTML"], Hr = { class: "flex-1" }, Nr = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    variant: { default: "info" },
    size: { default: "md" },
    title: {},
    description: {},
    icon: { type: Boolean, default: true },
    closable: { type: Boolean, default: false },
    class: {},
    rounded: { default: "md" },
    border: { type: Boolean, default: true },
    shadow: { type: Boolean, default: false },
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  emits: ["close"],
  setup(e, { emit: a }) {
    const l = e, t = a, r = ref(true), o = () => {
      r.value = false, t("close");
    }, n = computed(
      () => {
        var S, c;
        return l.unstyled ? ((S = l.pt) == null ? void 0 : S.root) || "" : Or({
          variant: l.variant,
          size: l.size,
          rounded: l.rounded,
          border: l.border,
          shadow: l.shadow,
          class: [l.class, (c = l.pt) == null ? void 0 : c.root]
        });
      }
    ), g = computed(
      () => {
        var S, c;
        return l.unstyled ? ((S = l.pt) == null ? void 0 : S.icon) || "" : Pr({
          variant: l.variant,
          size: l.size,
          class: (c = l.pt) == null ? void 0 : c.icon
        });
      }
    ), s = computed(
      () => {
        var S, c;
        return l.unstyled ? ((S = l.pt) == null ? void 0 : S.title) || "" : jr({
          size: l.size,
          class: (c = l.pt) == null ? void 0 : c.title
        });
      }
    ), u = computed(
      () => {
        var S, c;
        return l.unstyled ? ((S = l.pt) == null ? void 0 : S.description) || "" : Zr({
          size: l.size,
          class: (c = l.pt) == null ? void 0 : c.description
        });
      }
    ), v = computed(
      () => {
        var S, c;
        return l.unstyled ? ((S = l.pt) == null ? void 0 : S.closeButton) || "" : Wr({
          size: l.size,
          class: (c = l.pt) == null ? void 0 : c.closeButton
        });
      }
    ), h = {
      info: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
  </svg>`,
      success: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
  </svg>`,
      warning: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
  </svg>`,
      error: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
  </svg>`
    };
    return (S, c) => r.value ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(n.value)
    }, [
      e.icon ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(g.value)
      }, [
        renderSlot(S.$slots, "icon", {}, () => [
          createElementVNode("span", {
            innerHTML: h[e.variant]
          }, null, 8, Fr)
        ])
      ], 2)) : createCommentVNode("", true),
      createElementVNode("div", Hr, [
        S.$slots.title || e.title ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(s.value)
        }, [
          renderSlot(S.$slots, "title", {}, () => [
            createTextVNode(toDisplayString(e.title), 1)
          ])
        ], 2)) : createCommentVNode("", true),
        createElementVNode("div", {
          class: normalizeClass(u.value)
        }, [
          renderSlot(S.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(e.description), 1)
          ])
        ], 2)
      ]),
      e.closable ? (openBlock(), createElementBlock("button", {
        key: 1,
        class: normalizeClass(v.value),
        onClick: o,
        "aria-label": "关闭",
        type: "button"
      }, [
        renderSlot(S.$slots, "close-icon", {}, () => [
          c[0] || (c[0] = createElementVNode("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, [
            createElementVNode("line", {
              x1: "18",
              y1: "6",
              x2: "6",
              y2: "18"
            }),
            createElementVNode("line", {
              x1: "6",
              y1: "6",
              x2: "18",
              y2: "18"
            })
          ], -1))
        ])
      ], 2)) : createCommentVNode("", true)
    ], 2)) : createCommentVNode("", true);
  }
}), Gr = le(Nr), Kr = R({
  base: "inline-flex items-center justify-center font-mono font-medium rounded-md border shadow-sm min-w-[20px] text-center transition-all",
  variants: {
    variant: {
      default: "bg-slate-900 dark:bg-zinc-900  text-white "
    },
    size: {
      xs: "text-xs px-1.5 py-0.5 rounded-sm",
      sm: "text-sm px-2 py-0.5 rounded-sm",
      md: "text-base px-2.5 py-1",
      lg: "text-base px-3 py-1.5"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "md"
  }
}), Yr = /* @__PURE__ */ defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "ZKbd",
  __name: "index",
  props: {
    size: { default: "md" },
    variant: { default: "default" },
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  setup(e) {
    const a = e, l = computed(() => {
      var t, r;
      return a.unstyled ? ((t = a.pt) == null ? void 0 : t.root) || "" : Kr({
        size: a.size,
        variant: a.variant,
        class: (r = a.pt) == null ? void 0 : r.root
      });
    });
    return (t, r) => (openBlock(), createElementBlock("kbd", {
      class: normalizeClass(l.value)
    }, [
      renderSlot(t.$slots, "default")
    ], 2));
  }
}), Ur = le(Yr), Xr = R({
  base: "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  variants: {
    variant: {
      primary: "bg-blue-500 text-white hover:bg-blue-700 focus-visible:ring-blue-500",
      secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus-visible:ring-gray-400",
      success: "bg-green-500 text-white hover:bg-green-700 focus-visible:ring-green-500",
      warning: "bg-yellow-500 text-white hover:bg-yellow-700 focus-visible:ring-yellow-500",
      info: "bg-zinc-500 text-white hover:bg-zinc-700 focus-visible:ring-zinc-500",
      danger: "bg-red-500 text-white hover:bg-red-700 focus-visible:ring-red-500",
      outline: "border border-gray-300 bg-transparent hover:bg-gray-50 focus-visible:ring-gray-400",
      ghost: "bg-transparent hover:bg-gray-100 focus-visible:ring-gray-400",
      link: "bg-transparent underline-offset-4 hover:underline focus-visible:ring-primary-500"
    },
    size: {
      xs: "text-xs px-2.5 py-1.5 rounded",
      sm: "text-sm px-3 py-2 rounded-md",
      md: "text-sm px-4 py-2 rounded-md",
      lg: "text-base px-5 py-2.5 rounded-md"
    },
    fullWidth: {
      true: "w-full"
    },
    rounded: {
      true: "rounded-full"
    },
    disabled: {
      true: "opacity-50 pointer-events-none cursor-not-allowed",
      false: "cursor-pointer"
    }
  },
  compoundVariants: [
    {
      size: "xs",
      rounded: true,
      class: "rounded-full"
    },
    {
      size: ["sm", "md", "lg"],
      rounded: true,
      class: "rounded-full"
    }
  ],
  defaultVariants: {
    variant: "primary",
    size: "md",
    disabled: false
  }
}), qr = {
  click: (e) => e instanceof MouseEvent
}, Jr = (e, a) => ({
  _ref: ref(null),
  handleClick: (r) => {
    if (e.disabled || e.loading) {
      r.stopPropagation();
      return;
    } else
      a("click", r);
  }
}), Qr = ["type", "disabled"], _r = { key: 0 }, eo = {
  key: 1,
  class: "inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
}, to = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    variant: { default: "primary" },
    size: { default: "md" },
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    fullWidth: { type: Boolean, default: false },
    rounded: { type: Boolean, default: false },
    type: { default: "button" },
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  emits: qr,
  setup(e, { expose: a, emit: l }) {
    const t = l, r = e, { _ref: o, handleClick: n } = Jr(r, t), g = computed(() => {
      var v, h;
      return r.unstyled ? ((v = r.pt) == null ? void 0 : v.root) || "" : Xr({
        variant: r.variant,
        size: r.size,
        fullWidth: r.fullWidth,
        rounded: r.rounded,
        disabled: r.disabled || r.loading,
        class: (h = r.pt) == null ? void 0 : h.root
      });
    }), s = computed(() => {
      var v;
      return r.unstyled ? ((v = r.pt) == null ? void 0 : v.loader) || "" : "mr-2";
    }), u = computed(() => {
      var v;
      return r.unstyled && ((v = r.pt) == null ? void 0 : v.icon) || "";
    });
    return a({
      _ref: o,
      handleClick: n
    }), (v, h) => (openBlock(), createElementBlock("button", {
      class: normalizeClass(g.value),
      type: e.type,
      disabled: e.disabled || e.loading,
      ref_key: "_ref",
      ref: o,
      onClick: h[0] || (h[0] = //@ts-ignore
      (...S) => unref(n) && unref(n)(...S))
    }, [
      e.loading ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(s.value)
      }, [
        v.$slots.loading ? (openBlock(), createElementBlock("span", _r, [
          renderSlot(v.$slots, "loading")
        ])) : (openBlock(), createElementBlock("span", eo))
      ], 2)) : v.$slots.icon ? (openBlock(), createElementBlock("span", {
        key: 1,
        class: normalizeClass(u.value)
      }, [
        renderSlot(v.$slots, "icon")
      ], 2)) : createCommentVNode("", true),
      renderSlot(v.$slots, "default")
    ], 10, Qr));
  }
}), lo = le(to), ao = R({
  base: "bg-white",
  variants: {
    variant: {
      default: "",
      bordered: "border border-gray-200",
      elevated: "shadow-md"
    },
    padding: {
      none: "",
      sm: "p-3",
      md: "p-5",
      lg: "p-7"
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-xl"
    },
    hover: {
      true: "transition-all duration-200 hover:shadow-lg"
    }
  },
  defaultVariants: {
    variant: "default",
    padding: "md",
    radius: "md",
    hover: false
  }
}), ro = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    variant: { default: "default" },
    padding: { default: "md" },
    radius: { default: "md" },
    hover: { type: Boolean, default: false },
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  setup(e) {
    const a = e, l = computed(() => {
      var n, g;
      return a.unstyled ? ((n = a.pt) == null ? void 0 : n.root) || "" : ao({
        variant: a.variant,
        padding: a.padding,
        radius: a.radius,
        hover: a.hover,
        class: (g = a.pt) == null ? void 0 : g.root
      });
    }), t = computed(() => {
      var n;
      return a.unstyled ? ((n = a.pt) == null ? void 0 : n.header) || "" : "mb-4";
    }), r = computed(() => {
      var n;
      return a.unstyled && ((n = a.pt) == null ? void 0 : n.body) || "";
    }), o = computed(() => {
      var n;
      return a.unstyled ? ((n = a.pt) == null ? void 0 : n.footer) || "" : "mt-4 flex justify-end";
    });
    return (n, g) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(l.value)
    }, [
      n.$slots.header ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(t.value)
      }, [
        renderSlot(n.$slots, "header")
      ], 2)) : createCommentVNode("", true),
      createElementVNode("div", {
        class: normalizeClass(r.value)
      }, [
        renderSlot(n.$slots, "default")
      ], 2),
      n.$slots.footer ? (openBlock(), createElementBlock("div", {
        key: 1,
        class: normalizeClass(o.value)
      }, [
        renderSlot(n.$slots, "footer")
      ], 2)) : createCommentVNode("", true)
    ], 2));
  }
}), oo = le(ro), no = R({
  base: "flex",
  variants: {
    orientation: {
      horizontal: "w-full",
      vertical: "h-full flex-col"
    },
    variant: {
      solid: "border-solid",
      dashed: "border-dashed",
      dotted: "border-dotted"
    },
    size: {
      thin: "border-[0.5px]",
      medium: "border-[1px]",
      thick: "border-[2px]"
    },
    labelPosition: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end"
    },
    withLabel: {
      true: "items-center",
      false: ""
    }
  },
  compoundVariants: [
    {
      orientation: "horizontal",
      class: "border-t border-gray-200 dark:border-gray-700"
    },
    {
      orientation: "vertical",
      class: "border-l border-gray-200 dark:border-gray-700"
    },
    {
      orientation: "horizontal",
      withLabel: true,
      class: "border-0 items-center"
    },
    {
      orientation: "horizontal",
      withLabel: true,
      labelPosition: "start",
      class: 'before:content-[""] before:border-t before:border-inherit before:mr-2 before:w-4'
    },
    {
      orientation: "horizontal",
      withLabel: true,
      labelPosition: "center",
      class: 'before:content-[""] before:border-t before:border-inherit before:mr-2 before:w-full after:content-[""] after:border-t after:border-inherit after:ml-2 after:w-full'
    },
    {
      orientation: "horizontal",
      withLabel: true,
      labelPosition: "end",
      class: 'after:content-[""] after:border-t after:border-inherit after:ml-2 after:w-4'
    }
  ],
  defaultVariants: {
    orientation: "horizontal",
    variant: "solid",
    size: "medium",
    labelPosition: "center",
    withLabel: false
  }
}), so = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    orientation: { default: "horizontal" },
    variant: { default: "solid" },
    size: { default: "medium" },
    color: { default: void 0 },
    label: { default: void 0 },
    labelPosition: { default: "center" },
    as: { default: void 0 },
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  setup(e) {
    const a = e, l = useSlots(), t = computed(() => {
      var s;
      return !!a.label || !!((s = l.default) != null && s.call(l));
    }), r = computed(() => a.as ? a.as : a.orientation === "horizontal" && !t.value ? "hr" : "div"), o = computed(() => {
      var s, u;
      return a.unstyled ? ((s = a.pt) == null ? void 0 : s.root) || "" : no({
        orientation: a.orientation,
        variant: a.variant,
        size: a.size,
        labelPosition: a.labelPosition,
        withLabel: t.value,
        class: (u = a.pt) == null ? void 0 : u.root
      });
    }), n = computed(() => {
      var s;
      return a.unstyled ? ((s = a.pt) == null ? void 0 : s.label) || "" : "shrink-0 whitespace-nowrap px-2 text-gray-500";
    }), g = computed(() => !a.unstyled && a.color ? {
      borderColor: a.color,
      "--tw-border-opacity": 1,
      "before:border-color": a.color,
      "after:border-color": a.color
    } : {});
    return (s, u) => (openBlock(), createBlock(resolveDynamicComponent(r.value), {
      class: normalizeClass(o.value),
      style: normalizeStyle(g.value),
      role: "separator",
      "aria-orientation": e.orientation,
      "data-orientation": e.orientation
    }, {
      default: withCtx(() => [
        t.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(n.value)
        }, [
          renderSlot(s.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(e.label), 1)
          ])
        ], 2)) : createCommentVNode("", true)
      ]),
      _: 3
    }, 8, ["class", "style", "aria-orientation", "data-orientation"]));
  }
}), io = le(so), uo = R({
  base: "w-full rounded-md border border-gray-300 shadow-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50",
  variants: {
    size: {
      sm: "text-xs p-1.5",
      md: "text-sm p-2",
      lg: "text-base p-2.5"
    },
    status: {
      error: "border-red-500 focus:border-red-500 focus:ring-red-500",
      warning: "border-yellow-500 focus:border-yellow-500 focus:ring-yellow-500",
      success: "border-green-500 focus:border-green-500 focus:ring-green-500"
    },
    resize: {
      none: "resize-none",
      both: "resize",
      horizontal: "resize-x",
      vertical: "resize-y"
    }
  },
  defaultVariants: {
    size: "md",
    resize: "vertical"
  }
}), co = ["value", "placeholder", "disabled", "readonly", "rows", "maxlength", "minlength"], fo = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    modelValue: { default: "" },
    placeholder: { default: "" },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    rows: { default: 4 },
    maxLength: { default: void 0 },
    minLength: { default: void 0 },
    autosize: { type: Boolean, default: false },
    resize: { default: "vertical" },
    showCount: { type: Boolean, default: false },
    size: { default: "md" },
    status: { default: void 0 },
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: a }) {
    const l = e, t = a, r = computed(() => {
      var u;
      return ((u = l.pt) == null ? void 0 : u.root) || "w-full";
    }), o = computed(() => {
      var u, v;
      return l.unstyled ? ((u = l.pt) == null ? void 0 : u.textarea) || "" : uo({
        size: l.size,
        status: l.status,
        resize: l.resize,
        class: (v = l.pt) == null ? void 0 : v.textarea
      });
    }), n = computed(() => {
      var u, v;
      return l.unstyled ? ((u = l.pt) == null ? void 0 : u.counter) || "" : ((v = l.pt) == null ? void 0 : v.counter) || "mt-1 text-right text-sm text-gray-500";
    }), g = (u) => {
      const v = u.target;
      t("update:modelValue", v.value), l.autosize && s(v);
    }, s = (u) => {
      u.style.height = "auto", u.style.height = `${u.scrollHeight}px`;
    };
    return onMounted(() => {
      if (l.autosize) {
        const u = document.querySelector("textarea");
        u && s(u);
      }
    }), (u, v) => {
      var h;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(r.value)
      }, [
        createElementVNode("textarea", {
          class: normalizeClass(o.value),
          value: e.modelValue,
          placeholder: e.placeholder,
          disabled: e.disabled,
          readonly: e.readonly,
          rows: e.rows,
          maxlength: e.maxLength,
          minlength: e.minLength,
          onInput: g
        }, null, 42, co),
        e.showCount && e.maxLength ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(n.value)
        }, toDisplayString(((h = e.modelValue) == null ? void 0 : h.length) || 0) + "/" + toDisplayString(e.maxLength), 3)) : createCommentVNode("", true)
      ], 2);
    };
  }
}), vo = le(fo), mt = R({
  slots: {
    root: "relative inline-flex items-center",
    checkbox: "relative h-5 w-5 appearance-none rounded border transition-all",
    icon: "absolute inset-0 flex items-center justify-center text-white",
    label: "ml-2 text-gray-700 dark:text-gray-300"
  },
  variants: {
    checked: {
      true: {}
    },
    size: {
      small: {
        root: "gap-1.5",
        checkbox: "h-4 w-4",
        label: "text-sm"
      },
      default: {
        root: "gap-2",
        checkbox: "h-5 w-5",
        label: "text-base"
      },
      large: {
        root: "gap-2.5",
        checkbox: "h-6 w-6",
        label: "text-lg"
      }
    },
    color: {
      blue: {},
      green: {},
      red: {},
      yellow: {},
      purple: {}
    },
    disabled: {
      true: {
        root: "cursor-not-allowed opacity-50",
        checkbox: "border-gray-300 bg-gray-100 dark:border-gray-600 dark:bg-gray-700",
        label: "text-gray-500 dark:text-gray-400"
      },
      false: {
        root: "cursor-pointer",
        checkbox: "border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-700"
      }
    }
  },
  compoundVariants: [
    {
      checked: true,
      color: "blue",
      class: {
        checkbox: "border-blue-600 bg-blue-600 dark:border-blue-500 dark:bg-blue-500"
      }
    },
    {
      checked: true,
      color: "green",
      class: {
        checkbox: "border-green-600 bg-green-600 dark:border-green-500 dark:bg-green-500"
      }
    },
    {
      checked: true,
      color: "red",
      class: {
        checkbox: "border-red-600 bg-red-600 dark:border-red-500 dark:bg-red-500"
      }
    },
    {
      checked: true,
      color: "yellow",
      class: {
        checkbox: "border-yellow-600 bg-yellow-600 dark:border-yellow-500 dark:bg-yellow-500"
      }
    },
    {
      checked: true,
      color: "purple",
      class: {
        checkbox: "border-purple-600 bg-purple-600 dark:border-purple-500 dark:bg-purple-500"
      }
    },
    {
      checked: false,
      disabled: false,
      class: {
        checkbox: "hover:border-gray-400 focus:border-gray-400 focus:ring-2 focus:ring-gray-400/20 dark:hover:border-gray-500 dark:focus:border-gray-500 dark:focus:ring-gray-500/20"
      }
    }
  ],
  defaultVariants: {
    checked: false,
    size: "default",
    color: "blue",
    disabled: false
  }
}), go = ["checked", "disabled"], bo = /* @__PURE__ */ defineComponent({
  name: "ZCheckbox",
  __name: "index",
  props: {
    modelValue: { type: [Boolean, String, Number, Array], default: false },
    value: { type: [String, Number, Boolean] },
    disabled: { type: Boolean, default: false },
    size: { default: "default" },
    color: { default: "blue" },
    label: {},
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: a }) {
    const l = e, t = a, r = inject("checkbox-group", null), o = computed(() => {
      if (r) {
        const x = l.value;
        return r.modelValue.value.includes(
          x
        );
      }
      return Array.isArray(l.modelValue) ? l.modelValue.includes(l.value) : !!l.modelValue;
    }), n = computed(() => (r == null ? void 0 : r.disabled.value) || false || l.disabled), g = computed(() => (r == null ? void 0 : r.size.value) || l.size || "default"), s = computed(() => (r == null ? void 0 : r.color.value) || l.color || "blue"), u = () => {
      if (!n.value)
        if (r) {
          const x = l.value, i = [...r.modelValue.value], d = i.indexOf(x);
          if (d === -1) {
            if (r.max.value && i.length >= r.max.value)
              return;
            i.push(x);
          } else {
            if (r.min.value && i.length <= r.min.value)
              return;
            i.splice(d, 1);
          }
          r.changeEvent(i);
        } else if (Array.isArray(l.modelValue)) {
          const x = l.value, i = [...l.modelValue], d = i.indexOf(x);
          d === -1 ? i.push(x) : i.splice(d, 1), t("update:modelValue", i), t("change", i);
        } else {
          const x = !l.modelValue;
          t("update:modelValue", x), t("change", x);
        }
    }, v = (x) => {
      (x.key === "Enter" || x.key === " ") && (x.preventDefault(), u());
    }, h = computed(() => {
      var i, d;
      return l.unstyled ? ((i = l.pt) == null ? void 0 : i.root) || "" : mt({
        checked: o.value,
        disabled: n.value,
        size: g.value,
        color: s.value
      }).root({ class: (d = l.pt) == null ? void 0 : d.root });
    }), S = computed(() => {
      var i, d;
      return l.unstyled ? ((i = l.pt) == null ? void 0 : i.checkbox) || "" : mt({
        checked: o.value,
        disabled: n.value,
        size: g.value,
        color: s.value
      }).checkbox({ class: (d = l.pt) == null ? void 0 : d.checkbox });
    }), c = computed(() => {
      var i, d;
      return l.unstyled ? ((i = l.pt) == null ? void 0 : i.icon) || "" : mt({
        checked: o.value,
        disabled: n.value,
        size: g.value,
        color: s.value
      }).icon({ class: (d = l.pt) == null ? void 0 : d.icon });
    }), w = computed(() => {
      var i, d;
      return l.unstyled ? ((i = l.pt) == null ? void 0 : i.label) || "" : mt({
        checked: o.value,
        disabled: n.value,
        size: g.value,
        color: s.value
      }).label({ class: (d = l.pt) == null ? void 0 : d.label });
    });
    return (x, i) => (openBlock(), createElementBlock("label", {
      class: normalizeClass(h.value),
      onClick: withModifiers(u, ["prevent"]),
      onKeydown: v,
      tabindex: "0"
    }, [
      createElementVNode("input", {
        type: "checkbox",
        class: "sr-only",
        checked: o.value,
        disabled: n.value
      }, null, 8, go),
      createElementVNode("div", {
        class: normalizeClass(S.value)
      }, [
        o.value ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass(c.value)
        }, [...i[0] || (i[0] = [
          createElementVNode("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "3",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: "size-3/4"
          }, [
            createElementVNode("polyline", { points: "20 6 9 17 4 12" })
          ], -1)
        ])], 2)) : createCommentVNode("", true)
      ], 2),
      l.label ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(w.value)
      }, toDisplayString(l.label), 3)) : renderSlot(x.$slots, "default", {}, void 0, void 0, 1)
    ], 34));
  }
}), po = /* @__PURE__ */ defineComponent({
  __name: "CheckboxGroup",
  props: {
    modelValue: { default: () => [] },
    disabled: { type: Boolean, default: false },
    size: { default: "default" },
    color: { default: "blue" },
    direction: { default: "horizontal" },
    min: {},
    max: {}
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: a }) {
    const l = e, t = a, r = (o) => {
      t("update:modelValue", o), t("change", o);
    };
    return provide("checkbox-group", {
      modelValue: toRef(l, "modelValue"),
      disabled: toRef(l, "disabled"),
      size: toRef(l, "size"),
      color: toRef(l, "color"),
      min: toRef(l, "min"),
      max: toRef(l, "max"),
      changeEvent: r
    }), (o, n) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["flex flex-wrap", [e.direction === "vertical" ? "flex-col gap-2" : "flex-row gap-4"]]),
      role: "group",
      "aria-label": "checkbox-group"
    }, [
      renderSlot(o.$slots, "default")
    ], 2));
  }
}), mo = le(bo), yo = le(po), Ye = R({
  slots: {
    root: "relative inline-flex w-full",
    wrapper: "relative flex w-full rounded-md border border-gray-300 bg-white shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 dark:border-gray-600 dark:bg-gray-800",
    input: "block w-full border-0 bg-transparent px-3 py-2 outline-none placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50 dark:text-white dark:placeholder:text-gray-400",
    prefix: "flex items-center pl-3 text-gray-500 dark:text-gray-400",
    suffix: "flex items-center pr-3 text-gray-500 dark:text-gray-400",
    clear: "flex cursor-pointer items-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300",
    count: "absolute right-2 -bottom-5 text-xs text-gray-500 dark:text-gray-400"
  },
  variants: {
    size: {
      small: {
        wrapper: "h-8 text-sm",
        input: "text-sm",
        prefix: "text-sm",
        suffix: "text-sm"
      },
      default: {
        wrapper: "h-10",
        input: "text-base"
      },
      large: {
        wrapper: "h-12 text-lg",
        input: "text-lg",
        prefix: "text-lg",
        suffix: "text-lg"
      }
    },
    status: {
      error: {
        wrapper: "!border-red-500 !ring-red-500/30 focus-within:!ring-red-500/30"
      },
      warning: {
        wrapper: "!border-yellow-500 !ring-yellow-500/30 focus-within:!ring-yellow-500/30"
      },
      success: {
        wrapper: "!border-green-500 !ring-green-500/30 focus-within:!ring-green-500/30"
      }
    },
    disabled: {
      true: {
        wrapper: "bg-gray-100 dark:bg-gray-700",
        input: "cursor-not-allowed"
      }
    }
  },
  defaultVariants: {
    size: "default"
  }
});
function ho(e) {
  var g;
  const a = ref(((g = e.modelValue) == null ? void 0 : g.toString()) || ""), l = ref(null), t = (s) => {
    var u;
    if (!(e.disabled || e.readonly)) {
      if (e.type === "number" && s !== "") {
        const v = parseFloat(s);
        a.value = isNaN(v) ? "" : s;
      } else
        a.value = s;
      e.maxlength && s.length > e.maxlength && (a.value = s.slice(0, e.maxlength)), (u = e.onChange) == null || u.call(e, a.value);
    }
  };
  return watch(
    () => e.modelValue,
    (s) => {
      s != null ? a.value = s.toString() : a.value = "";
    }
  ), {
    inputValue: a,
    inputRef: l,
    updateValue: t,
    clearInput: () => {
      var s, u;
      e.disabled || e.readonly || (a.value = "", (s = e.onChange) == null || s.call(e, ""), (u = l.value) == null || u.focus());
    },
    focus: () => {
      var s;
      (s = l.value) == null || s.focus();
    },
    blur: () => {
      var s;
      (s = l.value) == null || s.blur();
    }
  };
}
const wo = ["type", "value", "placeholder", "disabled", "readonly", "maxlength", "autofocus"], xo = /* @__PURE__ */ defineComponent({
  name: "ZInput",
  __name: "index",
  props: {
    modelValue: { default: "" },
    placeholder: {},
    type: { default: "text" },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    size: { default: "default" },
    prefixIcon: {},
    suffixIcon: {},
    clearable: { type: Boolean, default: false },
    maxlength: {},
    showCount: { type: Boolean, default: false },
    autofocus: { type: Boolean, default: false },
    status: {},
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  emits: ["update:modelValue", "focus", "blur", "clear"],
  setup(e, { expose: a, emit: l }) {
    const t = e, r = l, { inputValue: o, inputRef: n, updateValue: g, clearInput: s, focus: u, blur: v } = ho(
      {
        modelValue: t.modelValue,
        type: t.type,
        disabled: t.disabled,
        readonly: t.readonly,
        maxlength: t.maxlength,
        onChange: (k) => r("update:modelValue", k)
      }
    ), h = computed(() => {
      var y, $;
      return t.unstyled ? ((y = t.pt) == null ? void 0 : y.root) || "" : Ye({
        size: t.size,
        status: t.status,
        disabled: t.disabled
      }).root({ class: ($ = t.pt) == null ? void 0 : $.root });
    }), S = computed(() => {
      var y, $;
      return t.unstyled ? ((y = t.pt) == null ? void 0 : y.wrapper) || "" : Ye({
        size: t.size,
        status: t.status,
        disabled: t.disabled
      }).wrapper({ class: ($ = t.pt) == null ? void 0 : $.wrapper });
    }), c = computed(() => {
      var y, $;
      return t.unstyled ? ((y = t.pt) == null ? void 0 : y.input) || "" : Ye({
        size: t.size,
        status: t.status,
        disabled: t.disabled
      }).input({ class: ($ = t.pt) == null ? void 0 : $.input });
    }), w = computed(() => {
      var y, $;
      return t.unstyled ? ((y = t.pt) == null ? void 0 : y.prefix) || "" : Ye({
        size: t.size,
        status: t.status,
        disabled: t.disabled
      }).prefix({ class: ($ = t.pt) == null ? void 0 : $.prefix });
    }), x = computed(() => {
      var y, $;
      return t.unstyled ? ((y = t.pt) == null ? void 0 : y.suffix) || "" : Ye({
        size: t.size,
        status: t.status,
        disabled: t.disabled
      }).suffix({ class: ($ = t.pt) == null ? void 0 : $.suffix });
    }), i = computed(() => {
      var y, $;
      return t.unstyled ? ((y = t.pt) == null ? void 0 : y.clear) || "" : Ye({
        size: t.size,
        status: t.status,
        disabled: t.disabled
      }).clear({ class: ($ = t.pt) == null ? void 0 : $.clear });
    }), d = computed(() => {
      var y, $;
      return t.unstyled ? ((y = t.pt) == null ? void 0 : y.count) || "" : Ye({
        size: t.size,
        status: t.status,
        disabled: t.disabled
      }).count({ class: ($ = t.pt) == null ? void 0 : $.count });
    });
    return a({
      focus: u,
      blur: v,
      inputRef: n
    }), (k, y) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(h.value)
    }, [
      createElementVNode("div", {
        class: normalizeClass([S.value, t.readonly && "cursor-default"])
      }, [
        t.prefixIcon ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(w.value)
        }, [
          createElementVNode("i", {
            class: normalizeClass(t.prefixIcon)
          }, null, 2)
        ], 2)) : createCommentVNode("", true),
        createElementVNode("input", {
          type: t.type,
          class: normalizeClass(c.value),
          value: unref(o),
          placeholder: t.placeholder,
          disabled: t.disabled,
          readonly: t.readonly,
          maxlength: t.maxlength,
          autofocus: t.autofocus,
          ref_key: "inputRef",
          ref: n,
          onInput: y[0] || (y[0] = ($) => unref(g)($.target.value)),
          onFocus: y[1] || (y[1] = ($) => k.$emit("focus", $)),
          onBlur: y[2] || (y[2] = ($) => k.$emit("blur", $))
        }, null, 42, wo),
        t.clearable && unref(o) && !t.disabled && !t.readonly ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass([x.value, i.value]),
          onClick: y[3] || (y[3] = //@ts-ignore
          (...$) => unref(s) && unref(s)(...$))
        }, [...y[4] || (y[4] = [
          createElementVNode("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, [
            createElementVNode("line", {
              x1: "18",
              y1: "6",
              x2: "6",
              y2: "18"
            }),
            createElementVNode("line", {
              x1: "6",
              y1: "6",
              x2: "18",
              y2: "18"
            })
          ], -1)
        ])], 2)) : createCommentVNode("", true),
        t.suffixIcon ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: normalizeClass(x.value)
        }, [
          createElementVNode("i", {
            class: normalizeClass(t.suffixIcon)
          }, null, 2)
        ], 2)) : createCommentVNode("", true)
      ], 2),
      t.showCount && t.maxlength ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(d.value)
      }, toDisplayString(unref(o).length) + "/" + toDisplayString(t.maxlength), 3)) : createCommentVNode("", true)
    ], 2));
  }
}), ko = le(xo);
function Co(e) {
  const a = ref(false), l = ref(""), t = ref(0), r = ref(null), o = ref(null), n = ref(e.modelValue);
  watch(
    () => e.modelValue,
    (D) => {
      n.value = D;
    },
    { immediate: true }
  );
  const g = computed(() => {
    var D;
    return ((D = e.options) == null ? void 0 : D.map((L) => ({
      ...L,
      disabled: L.disabled || false
    }))) || [];
  }), s = computed(() => {
    const D = {}, L = [];
    return g.value.forEach((Z) => {
      Z.group ? (D[Z.group] || (D[Z.group] = []), D[Z.group].push(Z)) : L.push(Z);
    }), { groups: D, noGroup: L };
  }), u = computed(() => e.multiple ? Array.isArray(n.value) ? n.value : [] : n.value !== void 0 ? [n.value] : []), v = computed(() => {
    const D = [];
    if (!u.value.length) return D;
    for (const L of u.value) {
      const Z = g.value.find(
        (W) => W.value === L || String(W.value) === String(L)
      );
      if (Z)
        D.push(Z);
      else if (L != null && (typeof L == "string" || typeof L == "number")) {
        const W = {
          label: String(L),
          value: L,
          disabled: false
        };
        D.push(W);
      }
    }
    return D;
  }), h = computed(() => {
    var D;
    return !v.value || v.value.length === 0 ? "" : ((D = v.value[0]) == null ? void 0 : D.label) || "";
  }), S = computed(() => {
    if (!e.filterable || !l.value)
      return g.value;
    const D = l.value.toLowerCase();
    return g.value.filter(
      (L) => L.label.toLowerCase().includes(D)
    );
  }), c = (D) => {
    var Z;
    if (e.disabled || e.readonly || D.disabled)
      return;
    let L;
    if (e.multiple) {
      const W = [...u.value], B = W.findIndex(
        (E) => String(E) === String(D.value)
      );
      B > -1 ? W.splice(B, 1) : W.push(D.value), L = W;
    } else
      L = D.value, d();
    n.value = L, (Z = e.onChange) == null || Z.call(e, L), e.filterable && nextTick(() => {
      l.value = "";
    });
  }, w = (D) => {
    var Z;
    if (D && D.stopPropagation(), e.disabled || e.readonly) return;
    const L = e.multiple ? [] : void 0;
    n.value = L, (Z = e.onChange) == null || Z.call(e, L);
  }, x = () => {
    var D;
    e.disabled || e.readonly || (a.value = !a.value, (D = e.onDropdownVisibleChange) == null || D.call(e, a.value), a.value && nextTick(() => {
      k();
    }));
  }, i = () => {
    var D;
    e.disabled || e.readonly || a.value || (a.value = true, (D = e.onDropdownVisibleChange) == null || D.call(e, true), nextTick(() => {
      k();
    }));
  }, d = () => {
    var D;
    a.value && (a.value = false, l.value = "", (D = e.onDropdownVisibleChange) == null || D.call(e, false));
  }, k = () => {
    const D = S.value;
    for (let L = 0; L < D.length; L++)
      if (!D[L].disabled) {
        t.value = L;
        return;
      }
    t.value = -1;
  }, y = (D) => u.value.some((L) => String(L) === String(D)), $ = (D) => {
    var Z, W;
    if (e.disabled || e.readonly) return;
    const L = S.value;
    switch (D.key) {
      case "ArrowDown":
        if (D.preventDefault(), !a.value)
          i();
        else {
          let B = t.value, E = 0;
          do
            B = (B + 1) % L.length, E++;
          while ((Z = L[B]) != null && Z.disabled && E < L.length);
          t.value = B;
        }
        break;
      case "ArrowUp":
        if (D.preventDefault(), !a.value)
          i();
        else {
          let B = t.value, E = 0;
          do
            B = B <= 0 ? L.length - 1 : B - 1, E++;
          while ((W = L[B]) != null && W.disabled && E < L.length);
          t.value = B;
        }
        break;
      case "Enter":
      case " ":
        D.preventDefault(), a.value && t.value >= 0 && L[t.value] ? c(L[t.value]) : x();
        break;
      case "Escape":
        D.preventDefault(), d();
        break;
      case "Tab":
        d();
        break;
    }
  }, I = (D) => {
    var L;
    l.value = D, (L = e.onSearch) == null || L.call(e, D), k();
  }, V = (D) => {
    a.value && r.value && o.value && !r.value.contains(D.target) && !o.value.contains(D.target) && d();
  }, A = () => {
    document.addEventListener("mousedown", V);
  }, T = () => {
    document.removeEventListener("mousedown", V);
  };
  watch(a, (D) => {
    D ? A() : T();
  });
  const O = () => {
    T();
  };
  return onMounted(() => {
    a.value && A();
  }), onBeforeUnmount(() => {
    O();
  }), {
    isOpen: a,
    searchValue: l,
    activeIndex: t,
    triggerRef: r,
    dropdownRef: o,
    selectedValues: u,
    selectedOptions: v,
    getOptionLabel: h,
    filteredOptions: S,
    groupedOptions: s,
    selectOption: c,
    clearSelection: w,
    toggleDropdown: x,
    openDropdown: i,
    closeDropdown: d,
    isSelected: y,
    onKeyDown: $,
    onSearchInput: I,
    cleanup: O
  };
}
const So = R({
  slots: {
    root: "relative w-full",
    trigger: [
      "flex items-center justify-between w-full px-3 py-2 border rounded-md",
      "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100",
      "transition-colors duration-200 ease-in-out",
      "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50",
      "hover:border-blue-400 dark:hover:border-blue-500"
    ],
    value: "flex-1 flex items-center flex-wrap gap-1 min-w-0",
    placeholder: "text-gray-400 dark:text-gray-500",
    dropdown: [
      "absolute z-50 w-full mt-1 py-1 overflow-auto",
      "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
      "rounded-md shadow-lg"
    ],
    option: [
      "flex items-center justify-between px-3 py-2 cursor-pointer",
      "text-gray-800 dark:text-gray-200",
      "hover:bg-gray-100 dark:hover:bg-gray-700",
      "transition-colors duration-200"
    ],
    optionSelected: "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
    optionActive: "bg-gray-100 dark:bg-gray-700",
    optionDisabled: "opacity-50 cursor-not-allowed hover:bg-transparent dark:hover:bg-transparent",
    icon: "flex items-center text-gray-400",
    clearIcon: "flex items-center mr-1 text-gray-400 hover:text-gray-600",
    checkIcon: "w-4 h-4 text-blue-500",
    search: [
      "w-full px-3 py-2 border-b border-gray-200 dark:border-gray-700",
      "bg-transparent text-gray-800 dark:text-gray-200",
      "focus:outline-none"
    ],
    tag: [
      "inline-flex items-center px-2 py-1 mr-1 mb-1 text-sm",
      "bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300",
      "rounded-md"
    ],
    tagRemove: ["ml-1 text-blue-500 hover:text-blue-700", "focus:outline-none"],
    noMatch: "px-3 py-2 text-center text-gray-500"
  },
  variants: {
    size: {
      small: {
        trigger: "h-8 text-xs",
        option: "py-1 text-xs",
        tag: "text-xs py-0.5"
      },
      default: {
        trigger: "h-10 text-sm",
        option: "py-2 text-sm"
      },
      large: {
        trigger: "h-12",
        option: "py-2.5"
      }
    },
    status: {
      default: {},
      success: {
        trigger: "border-green-500 focus:ring-green-500"
      },
      warning: {
        trigger: "border-yellow-500 focus:ring-yellow-500"
      },
      error: {
        trigger: "border-red-500 focus:ring-red-500"
      }
    },
    disabled: {
      true: {
        root: "opacity-60",
        trigger: "bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 cursor-not-allowed"
      }
    },
    multiple: {
      true: {
        value: "flex-wrap"
      }
    },
    open: {
      true: {
        trigger: "border-blue-500 ring-2 ring-blue-500 ring-opacity-50"
      }
    }
  },
  defaultVariants: {
    size: "default",
    status: "default",
    disabled: false,
    multiple: false,
    open: false
  }
});
R({
  slots: {
    base: [
      "flex w-full items-center gap-2 p-2 data-[hover=true]:bg-default-100",
      "cursor-pointer rounded-md outline-none",
      "data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-focus data-[focus-visible=true]:ring-offset-2",
      "data-[pressed=true]:opacity-70",
      "data-[selected=true]:bg-primary-500/20",
      "data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-disabled"
    ],
    wrapper: "flex w-full flex-col",
    label: "text-sm font-normal truncate",
    description: "text-xs text-foreground-400 truncate",
    selectedIcon: "text-primary"
  }
});
const zo = {
  key: 0,
  class: "text-red-500"
}, $o = ["aria-expanded", "aria-disabled", "aria-readonly", "aria-required"], Bo = {
  key: 0,
  class: "flex flex-wrap gap-1"
}, Vo = { class: "truncate" }, Io = ["onClick"], Mo = {
  key: 1,
  class: "truncate"
}, To = { class: "flex items-center" }, Do = ["aria-multiselectable"], Ro = {
  key: 0,
  class: "sticky top-0"
}, Eo = ["value"], Lo = ["onClick", "aria-selected", "aria-disabled"], Ao = ["onClick", "aria-selected", "aria-disabled"], Oo = { class: "px-3 py-1 text-xs font-semibold text-gray-500 dark:text-gray-400" }, Po = ["onClick", "aria-selected", "aria-disabled"], jo = {
  key: 1,
  class: "mt-1 text-xs text-gray-500 dark:text-gray-400"
}, Zo = {
  key: 2,
  class: "mt-1 text-xs text-red-500"
}, Wo = /* @__PURE__ */ defineComponent({
  name: "ZSelect",
  __name: "index",
  props: {
    modelValue: {},
    options: { default: () => [] },
    placeholder: { default: "请选择" },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    multiple: { type: Boolean, default: false },
    size: { default: "default" },
    status: {},
    clearable: { type: Boolean, default: false },
    filterable: { type: Boolean, default: false },
    noMatchText: { default: "无匹配数据" },
    maxDropdownHeight: { default: 250 },
    showLabel: { type: Boolean, default: false },
    label: {},
    required: { type: Boolean, default: false },
    helpText: {},
    errorText: {},
    renderOption: {},
    renderValue: {},
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  emits: [
    "update:modelValue",
    "change",
    "focus",
    "blur",
    "clear",
    "search",
    "dropdown-visible-change",
    "option-select"
  ],
  setup(e, { expose: a, emit: l }) {
    const t = e, r = l, o = So(), n = computed(() => {
      var E, M, N, j, Y, X, se, H, J, re, ne, ve, fe, ye, ke, we, Ce, he, be, De, K, oe, je, pe, ze, at, Qe, q, te, de, me, Ne, rt;
      return t.unstyled ? {
        root: ((E = t.pt) == null ? void 0 : E.root) || "",
        trigger: ((M = t.pt) == null ? void 0 : M.trigger) || "",
        value: ((N = t.pt) == null ? void 0 : N.value) || "",
        placeholder: ((j = t.pt) == null ? void 0 : j.placeholder) || "",
        dropdown: ((Y = t.pt) == null ? void 0 : Y.dropdown) || "",
        option: ((X = t.pt) == null ? void 0 : X.option) || "",
        optionSelected: ((se = t.pt) == null ? void 0 : se.optionSelected) || "",
        optionActive: ((H = t.pt) == null ? void 0 : H.optionActive) || "",
        optionDisabled: ((J = t.pt) == null ? void 0 : J.optionDisabled) || "",
        icon: ((re = t.pt) == null ? void 0 : re.icon) || "",
        clearIcon: ((ne = t.pt) == null ? void 0 : ne.clearIcon) || "",
        checkIcon: ((ve = t.pt) == null ? void 0 : ve.checkIcon) || "",
        search: ((fe = t.pt) == null ? void 0 : fe.search) || "",
        tag: ((ye = t.pt) == null ? void 0 : ye.tag) || "",
        tagRemove: ((ke = t.pt) == null ? void 0 : ke.tagRemove) || "",
        noMatch: ((we = t.pt) == null ? void 0 : we.noMatch) || "",
        label: ((Ce = t.pt) == null ? void 0 : Ce.label) || ""
      } : {
        root: o.root({
          size: t.size,
          status: t.status,
          disabled: t.disabled,
          multiple: t.multiple,
          open: u.value,
          class: (he = t.pt) == null ? void 0 : he.root
        }),
        trigger: o.trigger({
          size: t.size,
          status: t.status,
          disabled: t.disabled,
          multiple: t.multiple,
          open: u.value,
          class: (be = t.pt) == null ? void 0 : be.trigger
        }),
        value: o.value({
          multiple: t.multiple,
          class: (De = t.pt) == null ? void 0 : De.value
        }),
        placeholder: o.placeholder({ class: (K = t.pt) == null ? void 0 : K.placeholder }),
        dropdown: o.dropdown({ class: (oe = t.pt) == null ? void 0 : oe.dropdown }),
        option: o.option({ class: (je = t.pt) == null ? void 0 : je.option }),
        optionSelected: o.optionSelected({ class: (pe = t.pt) == null ? void 0 : pe.optionSelected }),
        optionActive: o.optionActive({ class: (ze = t.pt) == null ? void 0 : ze.optionActive }),
        optionDisabled: o.optionDisabled({ class: (at = t.pt) == null ? void 0 : at.optionDisabled }),
        icon: o.icon({ class: (Qe = t.pt) == null ? void 0 : Qe.icon }),
        clearIcon: o.clearIcon({ class: (q = t.pt) == null ? void 0 : q.clearIcon }),
        checkIcon: o.checkIcon({ class: (te = t.pt) == null ? void 0 : te.checkIcon }),
        search: o.search({ class: (de = t.pt) == null ? void 0 : de.search }),
        tag: o.tag({ class: (me = t.pt) == null ? void 0 : me.tag }),
        tagRemove: o.tagRemove({ class: (Ne = t.pt) == null ? void 0 : Ne.tagRemove }),
        noMatch: o.noMatch({ class: (rt = t.pt) == null ? void 0 : rt.noMatch })
      };
    }), g = `versa-select-dropdown-${Math.random().toString(36).substring(2, 9)}`, s = ref(null), {
      isOpen: u,
      searchValue: v,
      activeIndex: h,
      triggerRef: S,
      dropdownRef: c,
      selectedValues: w,
      selectedOptions: x,
      getOptionLabel: i,
      filteredOptions: d,
      groupedOptions: k,
      selectOption: y,
      clearSelection: $,
      toggleDropdown: I,
      openDropdown: V,
      closeDropdown: A,
      isSelected: T,
      onKeyDown: O,
      onSearchInput: D,
      cleanup: L
    } = Co({
      modelValue: t.modelValue,
      options: t.options,
      multiple: t.multiple,
      filterable: t.filterable,
      disabled: t.disabled,
      readonly: t.readonly,
      onChange: (E) => {
        r("update:modelValue", E), r("change", E), (E === void 0 || Array.isArray(E) && E.length === 0) && r("clear");
      },
      onSearch: (E) => {
        r("search", E);
      },
      onDropdownVisibleChange: (E) => {
        r("dropdown-visible-change", E), E && t.filterable && setTimeout(() => {
          var M;
          (M = s.value) == null || M.focus();
        }, 0);
      }
    }), Z = computed(() => Object.keys(k.value.groups).length > 0), W = (E, M) => {
      let N = 0;
      if (E === null)
        return M;
      N += k.value.noGroup.length;
      const j = Object.keys(k.value.groups);
      for (let Y = 0; Y < j.length; Y++) {
        const X = j[Y];
        if (X === E)
          return N + M;
        N += k.value.groups[X].length;
      }
      return -1;
    }, B = (E) => {
      D(E.target.value);
    };
    return onBeforeUnmount(() => {
      L();
    }), a({
      open: V,
      close: A,
      clear: $
    }), (E, M) => {
      var N;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(n.value.root)
      }, [
        t.showLabel && t.label ? (openBlock(), createElementBlock("label", {
          key: 0,
          class: normalizeClass(
            ((N = t.pt) == null ? void 0 : N.label) || "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          )
        }, [
          createTextVNode(toDisplayString(t.label) + " ", 1),
          t.required ? (openBlock(), createElementBlock("span", zo, "*")) : createCommentVNode("", true)
        ], 2)) : createCommentVNode("", true),
        createElementVNode("div", {
          ref_key: "triggerRef",
          ref: S,
          class: normalizeClass(n.value.trigger),
          onClick: M[1] || (M[1] = (j) => !t.disabled && !t.readonly && unref(I)()),
          onKeydown: M[2] || (M[2] = //@ts-ignore
          (...j) => unref(O) && unref(O)(...j)),
          tabindex: "0",
          role: "combobox",
          "aria-expanded": unref(u),
          "aria-disabled": t.disabled,
          "aria-readonly": t.readonly,
          "aria-required": t.required,
          "aria-haspopup": true,
          "aria-controls": g
        }, [
          createElementVNode("div", {
            class: normalizeClass(n.value.value)
          }, [
            t.multiple && unref(x).length ? (openBlock(), createElementBlock("div", Bo, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(x), (j) => (openBlock(), createElementBlock("div", {
                key: j.value,
                class: normalizeClass(n.value.tag)
              }, [
                createElementVNode("span", Vo, toDisplayString(j.label), 1),
                !t.disabled && !t.readonly ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  type: "button",
                  class: normalizeClass(n.value.tagRemove),
                  onClick: withModifiers((Y) => unref(y)(j), ["stop"]),
                  "aria-label": "移除"
                }, [...M[4] || (M[4] = [
                  createElementVNode("svg", {
                    viewBox: "0 0 24 24",
                    width: "12",
                    height: "12",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    fill: "none"
                  }, [
                    createElementVNode("line", {
                      x1: "18",
                      y1: "6",
                      x2: "6",
                      y2: "18"
                    }),
                    createElementVNode("line", {
                      x1: "6",
                      y1: "6",
                      x2: "18",
                      y2: "18"
                    })
                  ], -1)
                ])], 10, Io)) : createCommentVNode("", true)
              ], 2))), 128))
            ])) : unref(x).length ? (openBlock(), createElementBlock("div", Mo, toDisplayString(unref(i)), 1)) : (openBlock(), createElementBlock("div", {
              key: 2,
              class: normalizeClass(n.value.placeholder)
            }, toDisplayString(t.placeholder), 3))
          ], 2),
          createElementVNode("div", To, [
            t.clearable && unref(w).length && !t.disabled && !t.readonly ? (openBlock(), createElementBlock("button", {
              key: 0,
              type: "button",
              class: normalizeClass(n.value.clearIcon),
              onClick: M[0] || (M[0] = withModifiers(
                //@ts-ignore
                (...j) => unref($) && unref($)(...j),
                ["stop"]
              )),
              "aria-label": "清除选择"
            }, [...M[5] || (M[5] = [
              createElementVNode("svg", {
                viewBox: "0 0 24 24",
                width: "14",
                height: "14",
                stroke: "currentColor",
                "stroke-width": "2",
                fill: "none"
              }, [
                createElementVNode("line", {
                  x1: "18",
                  y1: "6",
                  x2: "6",
                  y2: "18"
                }),
                createElementVNode("line", {
                  x1: "6",
                  y1: "6",
                  x2: "18",
                  y2: "18"
                })
              ], -1)
            ])], 2)) : createCommentVNode("", true),
            createElementVNode("div", {
              class: normalizeClass(n.value.icon)
            }, [
              (openBlock(), createElementBlock("svg", {
                viewBox: "0 0 24 24",
                width: "16",
                height: "16",
                stroke: "currentColor",
                "stroke-width": "2",
                fill: "none",
                style: normalizeStyle({ transform: unref(u) ? "rotate(180deg)" : void 0 }),
                class: "transition-transform duration-200"
              }, [...M[6] || (M[6] = [
                createElementVNode("polyline", { points: "6 9 12 15 18 9" }, null, -1)
              ])], 4))
            ], 2)
          ])
        ], 42, $o),
        createVNode(Transition, { name: "versa-select-dropdown" }, {
          default: withCtx(() => [
            unref(u) ? (openBlock(), createElementBlock("div", {
              key: 0,
              ref_key: "dropdownRef",
              ref: c,
              id: g,
              class: normalizeClass(n.value.dropdown),
              style: normalizeStyle({ maxHeight: `${t.maxDropdownHeight}px` }),
              role: "listbox",
              "aria-multiselectable": t.multiple
            }, [
              t.filterable ? (openBlock(), createElementBlock("div", Ro, [
                createElementVNode("input", {
                  ref_key: "searchInputRef",
                  ref: s,
                  class: normalizeClass(n.value.search),
                  type: "text",
                  value: unref(v),
                  onInput: B,
                  placeholder: "搜索...",
                  onKeydown: M[3] || (M[3] = withModifiers(() => {
                  }, ["stop"]))
                }, null, 42, Eo)
              ])) : createCommentVNode("", true),
              createElementVNode("div", null, [
                Z.value ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  unref(k).noGroup.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(k).noGroup, (j, Y) => (openBlock(), createElementBlock("div", {
                    key: j.value,
                    class: normalizeClass([
                      n.value.option,
                      {
                        [n.value.optionSelected]: unref(T)(j.value),
                        [n.value.optionActive]: unref(h) === Y,
                        [n.value.optionDisabled]: j.disabled
                      }
                    ]),
                    onClick: withModifiers((X) => !j.disabled && unref(y)(j), ["stop"]),
                    role: "option",
                    "aria-selected": unref(T)(j.value),
                    "aria-disabled": j.disabled
                  }, [
                    createTextVNode(toDisplayString(j.label) + " ", 1),
                    unref(T)(j.value) ? (openBlock(), createElementBlock("svg", {
                      key: 0,
                      class: normalizeClass(n.value.checkIcon),
                      viewBox: "0 0 24 24",
                      width: "16",
                      height: "16",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      fill: "none"
                    }, [...M[8] || (M[8] = [
                      createElementVNode("polyline", { points: "20 6 9 17 4 12" }, null, -1)
                    ])], 2)) : createCommentVNode("", true)
                  ], 10, Ao))), 128)) : createCommentVNode("", true),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(k).groups, (j, Y) => (openBlock(), createElementBlock(Fragment, { key: Y }, [
                    createElementVNode("div", Oo, toDisplayString(Y), 1),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(j, (X, se) => (openBlock(), createElementBlock("div", {
                      key: X.value,
                      class: normalizeClass([
                        n.value.option,
                        "pl-5",
                        {
                          [n.value.optionSelected]: unref(T)(X.value),
                          [n.value.optionActive]: W(Y, se) === unref(h),
                          [n.value.optionDisabled]: X.disabled
                        }
                      ]),
                      onClick: withModifiers((H) => !X.disabled && unref(y)(X), ["stop"]),
                      role: "option",
                      "aria-selected": unref(T)(X.value),
                      "aria-disabled": X.disabled
                    }, [
                      createTextVNode(toDisplayString(X.label) + " ", 1),
                      unref(T)(X.value) ? (openBlock(), createElementBlock("svg", {
                        key: 0,
                        class: normalizeClass(n.value.checkIcon),
                        viewBox: "0 0 24 24",
                        width: "16",
                        height: "16",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        fill: "none"
                      }, [...M[9] || (M[9] = [
                        createElementVNode("polyline", { points: "20 6 9 17 4 12" }, null, -1)
                      ])], 2)) : createCommentVNode("", true)
                    ], 10, Po))), 128))
                  ], 64))), 128))
                ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  unref(d).length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(d), (j, Y) => (openBlock(), createElementBlock("div", {
                    key: j.value,
                    class: normalizeClass([
                      n.value.option,
                      {
                        [n.value.optionSelected]: unref(T)(j.value),
                        [n.value.optionActive]: unref(h) === Y,
                        [n.value.optionDisabled]: j.disabled
                      }
                    ]),
                    onClick: withModifiers((X) => !j.disabled && unref(y)(j), ["stop"]),
                    role: "option",
                    "aria-selected": unref(T)(j.value),
                    "aria-disabled": j.disabled
                  }, [
                    createTextVNode(toDisplayString(j.label) + " ", 1),
                    unref(T)(j.value) ? (openBlock(), createElementBlock("svg", {
                      key: 0,
                      class: normalizeClass(n.value.checkIcon),
                      viewBox: "0 0 24 24",
                      width: "16",
                      height: "16",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      fill: "none"
                    }, [...M[7] || (M[7] = [
                      createElementVNode("polyline", { points: "20 6 9 17 4 12" }, null, -1)
                    ])], 2)) : createCommentVNode("", true)
                  ], 10, Lo))), 128)) : (openBlock(), createElementBlock("div", {
                    key: 1,
                    class: normalizeClass(n.value.noMatch)
                  }, toDisplayString(t.noMatchText), 3))
                ], 64))
              ])
            ], 14, Do)) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        t.helpText && !t.errorText ? (openBlock(), createElementBlock("div", jo, toDisplayString(t.helpText), 1)) : createCommentVNode("", true),
        t.errorText ? (openBlock(), createElementBlock("div", Zo, toDisplayString(t.errorText), 1)) : createCommentVNode("", true)
      ], 2);
    };
  }
}), Fo = le(Wo);
function Ho(e) {
  const a = ref(e.modelValue ?? 0), l = ref(-1), t = ref(false);
  return watch(
    () => e.modelValue,
    (s) => {
      s !== void 0 && (a.value = s);
    }
  ), {
    currentValue: a,
    hoverValue: l,
    isHovering: t,
    getStarValue: (s) => {
      const u = t.value ? l.value : a.value;
      return e.allowHalf ? u >= s + 1 ? 1 : u >= s + 0.5 ? 0.5 : 0 : u >= s + 1 ? 1 : 0;
    },
    handleClick: (s, u) => {
      var h;
      if (e.disabled || e.readonly) return;
      let v;
      e.allowHalf && u ? v = s + 0.5 : v = s + 1, v === a.value && (v = 0), a.value = v, (h = e.onChange) == null || h.call(e, v);
    },
    handleMouseMove: (s, u) => {
      var v;
      if (!(e.disabled || e.readonly)) {
        if (t.value = true, e.allowHalf) {
          const S = s.currentTarget.getBoundingClientRect(), c = s.clientX - S.left < S.width / 2;
          l.value = c ? u + 0.5 : u + 1;
        } else
          l.value = u + 1;
        (v = e.onHoverChange) == null || v.call(e, l.value);
      }
    },
    handleMouseLeave: () => {
      var s;
      e.disabled || e.readonly || (t.value = false, l.value = -1, (s = e.onHoverChange) == null || s.call(e, a.value));
    }
  };
}
const No = R({
  base: "inline-flex items-center",
  variants: {
    disabled: {
      true: "opacity-50 cursor-not-allowed",
      false: ""
    }
  },
  defaultVariants: {
    disabled: false
  }
}), Go = R({
  base: "relative inline-flex items-center justify-center cursor-pointer transition-all duration-200",
  variants: {
    size: {
      small: "text-lg",
      default: "text-2xl",
      large: "text-3xl"
    },
    disabled: {
      true: "cursor-not-allowed",
      false: ""
    },
    readonly: {
      true: "cursor-default",
      false: ""
    }
  },
  defaultVariants: {
    size: "default",
    disabled: false,
    readonly: false
  }
}), Ko = R({
  base: "ml-2 text-gray-700 dark:text-gray-300",
  variants: {
    size: {
      small: "text-sm",
      default: "text-base",
      large: "text-lg"
    }
  },
  defaultVariants: {
    size: "default"
  }
}), Yo = R({
  base: "absolute inset-0 overflow-hidden",
  variants: {
    color: {
      yellow: "text-yellow-400 dark:text-yellow-500",
      blue: "text-blue-500 dark:text-blue-400",
      green: "text-green-500 dark:text-green-400",
      red: "text-red-500 dark:text-red-400",
      purple: "text-purple-500 dark:text-purple-400"
    }
  },
  defaultVariants: {
    color: "yellow"
  }
}), Uo = R({
  base: "text-gray-300 dark:text-gray-600"
}), Xo = R({
  base: "absolute inset-0 overflow-hidden",
  variants: {
    color: {
      yellow: "text-yellow-400 dark:text-yellow-500",
      blue: "text-blue-500 dark:text-blue-400",
      green: "text-green-500 dark:text-green-400",
      red: "text-red-500 dark:text-red-400",
      purple: "text-purple-500 dark:text-purple-400"
    }
  },
  defaultVariants: {
    color: "yellow"
  }
}), qo = {
  "update:modelValue": (e) => typeof e == "number",
  change: (e) => typeof e == "number",
  "hover-change": (e) => typeof e == "number"
}, Jo = ["onClick", "onMousemove", "aria-checked", "aria-disabled", "aria-readonly", "tabindex"], Qo = /* @__PURE__ */ defineComponent({
  name: "ZRate",
  __name: "index",
  props: {
    modelValue: { default: 0 },
    max: { default: 5 },
    allowHalf: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    color: { default: "yellow" },
    voidColor: {},
    size: { default: "default" },
    character: {},
    showScore: { type: Boolean, default: false },
    formatTooltip: {},
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  emits: qo,
  setup(e, { emit: a }) {
    const l = e, t = a, {
      currentValue: r,
      getStarValue: o,
      handleClick: n,
      handleMouseMove: g,
      handleMouseLeave: s
    } = Ho({
      modelValue: l.modelValue,
      max: l.max,
      allowHalf: l.allowHalf,
      readonly: l.readonly,
      disabled: l.disabled,
      onChange: (i) => {
        t("update:modelValue", i), t("change", i);
      },
      onHoverChange: (i) => {
        t("hover-change", i);
      }
    }), u = computed(() => {
      var i, d;
      return l.unstyled ? ((i = l.pt) == null ? void 0 : i.container) || "" : No({
        disabled: l.disabled,
        class: (d = l.pt) == null ? void 0 : d.container
      });
    }), v = computed(() => {
      var i, d;
      return l.unstyled ? ((i = l.pt) == null ? void 0 : i.item) || "" : Go({
        size: l.size,
        disabled: l.disabled,
        readonly: l.readonly,
        class: (d = l.pt) == null ? void 0 : d.item
      });
    }), h = computed(() => {
      var i, d;
      return l.unstyled ? ((i = l.pt) == null ? void 0 : i.score) || "" : Ko({
        size: l.size,
        class: (d = l.pt) == null ? void 0 : d.score
      });
    }), S = computed(() => {
      var i, d;
      return l.unstyled ? ((i = l.pt) == null ? void 0 : i.fullStar) || "absolute inset-0 overflow-hidden w-full" : Yo({
        color: l.color,
        class: (d = l.pt) == null ? void 0 : d.fullStar
      }) + " w-full";
    }), c = computed(() => {
      var i, d;
      return l.unstyled ? ((i = l.pt) == null ? void 0 : i.halfStar) || "absolute inset-0 overflow-hidden w-1/2" : Xo({
        color: l.color,
        class: (d = l.pt) == null ? void 0 : d.halfStar
      }) + " w-1/2";
    }), w = computed(() => {
      var i, d;
      return l.unstyled ? ((i = l.pt) == null ? void 0 : i.voidStar) || "" : Uo({
        class: (d = l.pt) == null ? void 0 : d.voidStar
      });
    }), x = (i) => l.formatTooltip ? l.formatTooltip(i) : i.toString();
    return (i, d) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(u.value),
      onMouseleave: d[0] || (d[0] = //@ts-ignore
      (...k) => unref(s) && unref(s)(...k)),
      role: "radiogroup",
      "aria-label": "评分"
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(e.max, (k) => (openBlock(), createElementBlock("div", {
        key: k,
        class: normalizeClass(v.value),
        onClick: (y) => unref(n)(k - 1, false),
        onMousemove: (y) => unref(g)(y, k - 1),
        role: "radio",
        "aria-checked": unref(o)(k - 1) > 0,
        "aria-disabled": e.disabled,
        "aria-readonly": e.readonly,
        tabindex: e.disabled ? -1 : 0
      }, [
        createElementVNode("span", {
          class: normalizeClass(w.value)
        }, [
          renderSlot(i.$slots, "character", {}, () => [
            createTextVNode(toDisplayString(e.character || "★"), 1)
          ], true)
        ], 2),
        unref(o)(k - 1) === 1 ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass(S.value)
        }, [
          renderSlot(i.$slots, "character", {}, () => [
            createTextVNode(toDisplayString(e.character || "★"), 1)
          ], true)
        ], 2)) : unref(o)(k - 1) === 0.5 ? (openBlock(), createElementBlock("span", {
          key: 1,
          class: normalizeClass(c.value)
        }, [
          renderSlot(i.$slots, "character", {}, () => [
            createTextVNode(toDisplayString(e.character || "★"), 1)
          ], true)
        ], 2)) : createCommentVNode("", true)
      ], 42, Jo))), 128)),
      e.showScore ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(h.value)
      }, toDisplayString(x(unref(r))), 3)) : createCommentVNode("", true)
    ], 34));
  }
}), _o = /* @__PURE__ */ lt(Qo, [["__scopeId", "data-v-4b13d791"]]), en = le(_o), tn = (e, a) => {
  const l = ref(e.modelValue || /* @__PURE__ */ new Date()), t = ref(l.value.getMonth()), r = ref(l.value.getFullYear()), o = computed(() => {
    const h = e.locale || "default", S = e.firstDayOfWeek || 0, c = [];
    for (let w = 0; w < 7; w++) {
      const x = (w + S) % 7;
      c.push(
        new Intl.DateTimeFormat(h, { weekday: "short" }).format(
          new Date(2021, 0, x + 3)
          // 2021-01-03 is a Sunday
        )
      );
    }
    return c;
  }), n = computed(() => {
    const h = r.value, S = t.value, c = new Date(h, S, 1).getDay(), w = new Date(h, S + 1, 0).getDate(), x = e.firstDayOfWeek || 0, i = [], d = new Date(h, S, 0).getDate(), k = (c - x + 7) % 7;
    for (let I = d - k + 1; I <= d; I++)
      i.push({
        date: new Date(h, S - 1, I),
        day: I,
        isCurrentMonth: false,
        isToday: false,
        isSelected: false,
        isDisabled: false
      });
    const y = /* @__PURE__ */ new Date();
    for (let I = 1; I <= w; I++) {
      const V = new Date(h, S, I), A = y.getDate() === I && y.getMonth() === S && y.getFullYear() === h, T = e.modelValue && e.modelValue.getDate() === I && e.modelValue.getMonth() === S && e.modelValue.getFullYear() === h, O = e.disabled || e.min && V < e.min || e.max && V > e.max;
      i.push({
        date: V,
        day: I,
        isCurrentMonth: true,
        isToday: A,
        isSelected: T,
        isDisabled: O
      });
    }
    const $ = 42 - i.length;
    for (let I = 1; I <= $; I++)
      i.push({
        date: new Date(h, S + 1, I),
        day: I,
        isCurrentMonth: false,
        isToday: false,
        isSelected: false,
        isDisabled: false
      });
    return i;
  }), g = computed(() => {
    const h = e.locale || "default";
    return new Intl.DateTimeFormat(h, { month: "long" }).format(
      new Date(r.value, t.value)
    );
  }), s = () => {
    t.value === 0 ? (t.value = 11, r.value--) : t.value--;
  }, u = () => {
    t.value === 11 ? (t.value = 0, r.value++) : t.value++;
  }, v = (h) => {
    e.disabled || e.readonly || e.min && h < e.min || e.max && h > e.max || (l.value = h, a("update:modelValue", h), a("change", h));
  };
  return watch(
    () => e.modelValue,
    (h) => {
      h && (l.value = h, t.value = h.getMonth(), r.value = h.getFullYear());
    }
  ), {
    currentDate: l,
    currentMonth: t,
    currentYear: r,
    weekdays: o,
    daysInMonth: n,
    monthName: g,
    prevMonth: s,
    nextMonth: u,
    selectDate: v
  };
}, ln = R({
  base: "w-full",
  variants: {
    unstyled: {
      false: ""
    }
  },
  defaultVariants: {
    unstyled: false
  }
}), an = R({
  base: "flex items-center justify-between mb-4"
}), rn = R({
  base: "text-lg font-medium"
}), on = R({
  base: "flex items-center space-x-1"
}), nn = R({
  base: "p-1 rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
}), sn = R({
  base: "grid grid-cols-7 mb-1"
}), un = R({
  base: "text-center text-sm font-medium text-gray-500 py-2"
}), dn = R({
  base: "grid grid-cols-7 gap-1"
}), Ze = R({
  base: "flex items-center justify-center h-9 w-9 rounded-md text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
  variants: {
    isToday: {
      true: "border border-blue-500"
    },
    isSelected: {
      true: "bg-blue-500 text-white hover:bg-blue-600"
    },
    isDisabled: {
      true: "text-gray-300 cursor-not-allowed"
    },
    isAdjacent: {
      true: "text-gray-400"
    }
  },
  compoundVariants: [
    {
      isSelected: false,
      isDisabled: false,
      isAdjacent: false,
      class: "hover:bg-gray-100 cursor-pointer"
    }
  ]
}), cn = {
  "update:modelValue": (e) => e === null || e instanceof Date,
  change: (e) => e === null || e instanceof Date
}, fn = ["disabled"], vn = ["disabled"], gn = ["onClick", "disabled"], bn = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    modelValue: {},
    min: {},
    max: {},
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    firstDayOfWeek: { default: 0 },
    locale: {},
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  emits: cn,
  setup(e, { emit: a }) {
    const l = a, t = e, {
      currentYear: r,
      weekdays: o,
      daysInMonth: n,
      monthName: g,
      prevMonth: s,
      nextMonth: u,
      selectDate: v
    } = tn(t, l), h = computed(() => {
      var S, c, w, x, i, d, k, y, $, I, V, A, T, O, D, L, Z, W, B, E, M, N, j, Y, X, se;
      return {
        root: t.unstyled ? ((S = t.pt) == null ? void 0 : S.root) || "" : ln({ unstyled: t.unstyled, class: (c = t.pt) == null ? void 0 : c.root }),
        header: t.unstyled ? ((w = t.pt) == null ? void 0 : w.header) || "" : an({ class: (x = t.pt) == null ? void 0 : x.header }),
        title: t.unstyled ? ((i = t.pt) == null ? void 0 : i.title) || "" : rn({ class: (d = t.pt) == null ? void 0 : d.title }),
        navigation: t.unstyled ? ((k = t.pt) == null ? void 0 : k.navigation) || "" : on({ class: (y = t.pt) == null ? void 0 : y.navigation }),
        navButton: t.unstyled ? (($ = t.pt) == null ? void 0 : $.navButton) || "" : nn({ class: (I = t.pt) == null ? void 0 : I.navButton }),
        weekdays: t.unstyled ? ((V = t.pt) == null ? void 0 : V.weekdays) || "" : sn({ class: (A = t.pt) == null ? void 0 : A.weekdays }),
        weekday: t.unstyled ? ((T = t.pt) == null ? void 0 : T.weekday) || "" : un({ class: (O = t.pt) == null ? void 0 : O.weekday }),
        days: t.unstyled ? ((D = t.pt) == null ? void 0 : D.days) || "" : dn({ class: (L = t.pt) == null ? void 0 : L.days }),
        day: t.unstyled ? ((Z = t.pt) == null ? void 0 : Z.day) || "" : Ze({ class: (W = t.pt) == null ? void 0 : W.day }),
        today: t.unstyled ? ((B = t.pt) == null ? void 0 : B.today) || "" : Ze({ isToday: true, class: (E = t.pt) == null ? void 0 : E.today }).split(" ").filter((H) => !Ze().includes(H)).join(" "),
        selected: t.unstyled ? ((M = t.pt) == null ? void 0 : M.selected) || "" : Ze({ isSelected: true, class: (N = t.pt) == null ? void 0 : N.selected }).split(" ").filter((H) => !Ze().includes(H)).join(" "),
        disabled: t.unstyled ? ((j = t.pt) == null ? void 0 : j.disabled) || "" : Ze({ isDisabled: true, class: (Y = t.pt) == null ? void 0 : Y.disabled }).split(" ").filter((H) => !Ze().includes(H)).join(" "),
        adjacent: t.unstyled ? ((X = t.pt) == null ? void 0 : X.adjacent) || "" : Ze({ isAdjacent: true, class: (se = t.pt) == null ? void 0 : se.adjacent }).split(" ").filter((H) => !Ze().includes(H)).join(" ")
      };
    });
    return (S, c) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(h.value.root)
    }, [
      createElementVNode("div", {
        class: normalizeClass(h.value.header)
      }, [
        createElementVNode("div", {
          class: normalizeClass(h.value.title)
        }, toDisplayString(unref(g)) + " " + toDisplayString(unref(r)), 3),
        createElementVNode("div", {
          class: normalizeClass(h.value.navigation)
        }, [
          createElementVNode("button", {
            class: normalizeClass(h.value.navButton),
            onClick: c[0] || (c[0] = //@ts-ignore
            (...w) => unref(s) && unref(s)(...w)),
            disabled: e.disabled || e.readonly
          }, [...c[2] || (c[2] = [
            createElementVNode("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, [
              createElementVNode("path", { d: "m15 18-6-6 6-6" })
            ], -1)
          ])], 10, fn),
          createElementVNode("button", {
            class: normalizeClass(h.value.navButton),
            onClick: c[1] || (c[1] = //@ts-ignore
            (...w) => unref(u) && unref(u)(...w)),
            disabled: e.disabled || e.readonly
          }, [...c[3] || (c[3] = [
            createElementVNode("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, [
              createElementVNode("path", { d: "m9 18 6-6-6-6" })
            ], -1)
          ])], 10, vn)
        ], 2)
      ], 2),
      createElementVNode("div", {
        class: normalizeClass(h.value.weekdays)
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(o), (w, x) => (openBlock(), createElementBlock("div", {
          key: x,
          class: normalizeClass(h.value.weekday)
        }, toDisplayString(w), 3))), 128))
      ], 2),
      createElementVNode("div", {
        class: normalizeClass(h.value.days)
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(n), (w, x) => (openBlock(), createElementBlock("button", {
          key: x,
          class: normalizeClass([
            h.value.day,
            w.isToday ? h.value.today : "",
            w.isSelected ? h.value.selected : "",
            w.isDisabled ? h.value.disabled : "",
            w.isCurrentMonth ? "" : h.value.adjacent
          ]),
          onClick: (i) => unref(v)(w.date),
          disabled: w.isDisabled || e.disabled || e.readonly
        }, toDisplayString(w.day), 11, gn))), 128))
      ], 2)
    ], 2));
  }
}), Et = le(bn), pn = (e, a) => {
  const l = ref(false), t = ref(null), r = ref(null), o = ref(null), n = ref(null), g = ref(null), s = ref(null), u = computed(() => {
    let B = 0, E = 0, M = 0;
    if (e.modelValue) {
      if (e.modelValue instanceof Date)
        B = e.modelValue.getHours(), E = e.modelValue.getMinutes(), M = e.modelValue.getSeconds();
      else if (typeof e.modelValue == "string") {
        const N = e.modelValue.split(":");
        B = parseInt(N[0]) || 0, E = parseInt(N[1]) || 0, M = N[2] ? parseInt(N[2]) : 0;
      }
    }
    return { hours: B, minutes: E, seconds: M };
  }), v = ref(u.value.hours), h = ref(u.value.minutes), S = ref(u.value.seconds), c = ref(u.value.hours >= 12 ? "pm" : "am"), w = computed(() => {
    const B = [], E = e.hourStep || 1, M = e.format === "12h", N = M ? 1 : 0, j = M ? 12 : 23;
    for (let Y = N; Y <= j; Y += E)
      B.push(Y);
    return B;
  }), x = computed(() => {
    const B = [], E = e.minuteStep || 1;
    for (let M = 0; M <= 59; M += E)
      B.push(M);
    return B;
  }), i = computed(() => {
    const B = [], E = e.secondStep || 1;
    for (let M = 0; M <= 59; M += E)
      B.push(M);
    return B;
  }), d = computed(() => {
    if (!e.modelValue) return "";
    try {
      if (e.modelValue instanceof Date) {
        const B = {
          hour: "numeric",
          minute: "2-digit"
        };
        return e.showSeconds && (B.second = "2-digit"), e.format === "12h" ? B.hour12 = true : B.hour12 = false, new Intl.DateTimeFormat("default", B).format(
          e.modelValue
        );
      } else
        return e.modelValue;
    } catch (B) {
      return console.error("Time formatting error:", B), e.modelValue instanceof Date ? e.modelValue.toLocaleTimeString() : e.modelValue;
    }
  }), k = () => {
    e.disabled || e.readonly || (l.value = !l.value, l.value && (v.value = u.value.hours, h.value = u.value.minutes, S.value = u.value.seconds, c.value = u.value.hours >= 12 ? "pm" : "am", setTimeout(() => {
      $();
    }, 50)));
  }, y = () => {
    l.value = false;
  }, $ = () => {
    const B = (E, M) => {
      if (!E) return;
      const j = E.querySelectorAll("div")[M];
      j && (E.scrollTop = j.offsetTop - E.offsetHeight / 2 + j.offsetHeight / 2);
    };
    if (e.format === "12h") {
      const E = v.value > 12 ? v.value - 12 : v.value === 0 ? 12 : v.value;
      B(o.value, w.value.indexOf(E));
    } else
      B(o.value, w.value.indexOf(v.value));
    B(
      n.value,
      x.value.indexOf(h.value)
    ), e.showSeconds && g.value && B(
      g.value,
      i.value.indexOf(S.value)
    ), e.format === "12h" && s.value && B(s.value, c.value === "am" ? 0 : 1);
  }, I = () => {
    let B = v.value;
    e.format === "12h" && (c.value === "pm" && B < 12 ? B += 12 : c.value === "am" && B === 12 && (B = 0));
    let E;
    if (e.modelValue instanceof Date) {
      const M = new Date(e.modelValue);
      M.setHours(B), M.setMinutes(h.value), M.setSeconds(e.showSeconds ? S.value : 0), E = M;
    } else {
      const M = B.toString().padStart(2, "0"), N = h.value.toString().padStart(2, "0");
      if (e.showSeconds) {
        const j = S.value.toString().padStart(2, "0");
        E = `${M}:${N}:${j}`;
      } else
        E = `${M}:${N}`;
    }
    a("update:modelValue", E), a("change", E);
  }, V = (B) => {
    v.value = B, I();
  }, A = (B) => {
    h.value = B, I();
  }, T = (B) => {
    S.value = B, I();
  }, O = (B) => {
    c.value = B, I();
  }, D = (B) => {
    B.stopPropagation(), a("update:modelValue", null), a("change", null), a("clear");
  }, L = (B) => {
    a("focus", B);
  }, Z = (B) => {
    a("blur", B);
  }, W = (B) => {
    l.value && t.value && r.value && !t.value.contains(B.target) && !r.value.contains(B.target) && y();
  };
  return onMounted(() => {
    document.addEventListener("mousedown", W);
  }), onBeforeUnmount(() => {
    document.removeEventListener("mousedown", W);
  }), watch(
    () => e.modelValue,
    (B) => {
      B ? (v.value = u.value.hours, h.value = u.value.minutes, S.value = u.value.seconds, c.value = u.value.hours >= 12 ? "pm" : "am") : y();
    }
  ), {
    isOpen: l,
    inputRef: t,
    dropdownRef: r,
    hourRef: o,
    minuteRef: n,
    secondRef: g,
    ampmRef: s,
    formattedValue: d,
    hourList: w,
    minuteList: x,
    secondList: i,
    selectedHour: v,
    selectedMinute: h,
    selectedSecond: S,
    selectedAmPm: c,
    toggleDropdown: k,
    closeDropdown: y,
    selectHour: V,
    selectMinute: A,
    selectSecond: T,
    selectAmPm: O,
    handleClear: D,
    handleFocus: L,
    handleBlur: Z
  };
}, mn = R({
  base: "relative w-full",
  variants: {
    unstyled: {
      false: ""
    }
  },
  defaultVariants: {
    unstyled: false
  }
}), yn = R({
  base: "relative flex items-center"
}), hn = R({
  base: "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:ring-blue-400 dark:focus:ring-offset-gray-900",
  variants: {
    error: {
      true: "border-red-500 focus:ring-red-500"
    }
  }
}), wn = R({
  base: "absolute right-3 cursor-pointer text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-300"
}), xn = R({
  base: "absolute z-50 mt-1 w-full rounded-md border border-gray-200 bg-white p-4 shadow-lg dark:border-gray-700 dark:bg-gray-800"
}), kn = R({
  base: "flex space-x-2 h-52 overflow-hidden"
}), Cn = R({
  base: "flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-700"
}), kt = R({
  base: "cursor-pointer rounded-md px-3 py-2 text-center text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700",
  variants: {
    selected: {
      true: "bg-blue-100 font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
    }
  }
}), Sn = {
  "update:modelValue": (e) => e === null || typeof e == "string" || e instanceof Date,
  change: (e) => e === null || typeof e == "string" || e instanceof Date,
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => true
}, zn = ["value", "placeholder", "disabled"], $n = ["onClick"], Bn = ["onClick"], Vn = ["onClick"], In = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    modelValue: {},
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    placeholder: { default: "选择时间" },
    format: { default: "24h" },
    hourStep: { default: 1 },
    minuteStep: { default: 1 },
    secondStep: { default: 1 },
    showSeconds: { type: Boolean, default: false },
    clearable: { type: Boolean, default: true },
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  emits: Sn,
  setup(e, { emit: a }) {
    const l = a, t = e, {
      isOpen: r,
      inputRef: o,
      dropdownRef: n,
      hourRef: g,
      minuteRef: s,
      secondRef: u,
      ampmRef: v,
      formattedValue: h,
      hourList: S,
      minuteList: c,
      secondList: w,
      selectedHour: x,
      selectedMinute: i,
      selectedSecond: d,
      selectedAmPm: k,
      toggleDropdown: y,
      selectHour: $,
      selectMinute: I,
      selectSecond: V,
      selectAmPm: A,
      handleClear: T,
      handleFocus: O,
      handleBlur: D
    } = pn(t, l), L = computed(() => {
      var Z, W, B, E, M, N, j, Y, X, se, H, J, re, ne, ve, fe, ye, ke;
      return {
        root: t.unstyled ? ((Z = t.pt) == null ? void 0 : Z.root) || "" : mn({ unstyled: t.unstyled, class: (W = t.pt) == null ? void 0 : W.root }),
        inputWrapper: t.unstyled ? ((B = t.pt) == null ? void 0 : B.inputWrapper) || "" : yn({ class: (E = t.pt) == null ? void 0 : E.inputWrapper }),
        input: t.unstyled ? ((M = t.pt) == null ? void 0 : M.input) || "" : hn({ class: (N = t.pt) == null ? void 0 : N.input }),
        clearButton: t.unstyled ? ((j = t.pt) == null ? void 0 : j.clearButton) || "" : wn({ class: (Y = t.pt) == null ? void 0 : Y.clearButton }),
        dropdown: t.unstyled ? ((X = t.pt) == null ? void 0 : X.dropdown) || "" : xn({ class: (se = t.pt) == null ? void 0 : se.dropdown }),
        timeSelector: t.unstyled ? ((H = t.pt) == null ? void 0 : H.timeSelector) || "" : kn({ class: (J = t.pt) == null ? void 0 : J.timeSelector }),
        column: t.unstyled ? ((re = t.pt) == null ? void 0 : re.column) || "" : Cn({ class: (ne = t.pt) == null ? void 0 : ne.column }),
        item: t.unstyled ? ((ve = t.pt) == null ? void 0 : ve.item) || "" : kt({ class: (fe = t.pt) == null ? void 0 : fe.item }),
        itemSelected: t.unstyled ? ((ye = t.pt) == null ? void 0 : ye.itemSelected) || "" : kt({ selected: true, class: (ke = t.pt) == null ? void 0 : ke.itemSelected }).split(" ").filter((we) => !kt().includes(we)).join(" ")
      };
    });
    return (Z, W) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(L.value.root)
    }, [
      createElementVNode("div", {
        class: normalizeClass(L.value.inputWrapper),
        onClick: W[3] || (W[3] = //@ts-ignore
        (...B) => unref(y) && unref(y)(...B))
      }, [
        createElementVNode("input", {
          ref_key: "inputRef",
          ref: o,
          type: "text",
          class: normalizeClass(L.value.input),
          value: unref(h),
          placeholder: e.placeholder,
          disabled: e.disabled,
          readonly: true,
          onFocus: W[0] || (W[0] = //@ts-ignore
          (...B) => unref(O) && unref(O)(...B)),
          onBlur: W[1] || (W[1] = //@ts-ignore
          (...B) => unref(D) && unref(D)(...B))
        }, null, 42, zn),
        e.clearable && e.modelValue && !e.disabled && !e.readonly ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass(L.value.clearButton),
          onClick: W[2] || (W[2] = //@ts-ignore
          (...B) => unref(T) && unref(T)(...B))
        }, [...W[6] || (W[6] = [
          createElementVNode("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, [
            createElementVNode("line", {
              x1: "18",
              y1: "6",
              x2: "6",
              y2: "18"
            }),
            createElementVNode("line", {
              x1: "6",
              y1: "6",
              x2: "18",
              y2: "18"
            })
          ], -1)
        ])], 2)) : createCommentVNode("", true)
      ], 2),
      unref(r) ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref_key: "dropdownRef",
        ref: n,
        class: normalizeClass(L.value.dropdown)
      }, [
        createElementVNode("div", {
          class: normalizeClass(L.value.timeSelector)
        }, [
          createElementVNode("div", {
            ref_key: "hourRef",
            ref: g,
            class: normalizeClass(L.value.column)
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(S), (B) => (openBlock(), createElementBlock("div", {
              key: `hour-${B}`,
              class: normalizeClass([
                L.value.item,
                (e.format === "12h" ? (unref(x) > 12 ? unref(x) - 12 : unref(x) === 0 ? 12 : unref(x)) === B : unref(x) === B) ? L.value.itemSelected : ""
              ]),
              onClick: (E) => unref($)(B)
            }, toDisplayString(B.toString().padStart(2, "0")), 11, $n))), 128))
          ], 2),
          createElementVNode("div", {
            ref_key: "minuteRef",
            ref: s,
            class: normalizeClass(L.value.column)
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(c), (B) => (openBlock(), createElementBlock("div", {
              key: `minute-${B}`,
              class: normalizeClass([
                L.value.item,
                unref(i) === B ? L.value.itemSelected : ""
              ]),
              onClick: (E) => unref(I)(B)
            }, toDisplayString(B.toString().padStart(2, "0")), 11, Bn))), 128))
          ], 2),
          e.showSeconds ? (openBlock(), createElementBlock("div", {
            key: 0,
            ref_key: "secondRef",
            ref: u,
            class: normalizeClass(L.value.column)
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(w), (B) => (openBlock(), createElementBlock("div", {
              key: `second-${B}`,
              class: normalizeClass([
                L.value.item,
                unref(d) === B ? L.value.itemSelected : ""
              ]),
              onClick: (E) => unref(V)(B)
            }, toDisplayString(B.toString().padStart(2, "0")), 11, Vn))), 128))
          ], 2)) : createCommentVNode("", true),
          e.format === "12h" ? (openBlock(), createElementBlock("div", {
            key: 1,
            ref_key: "ampmRef",
            ref: v,
            class: normalizeClass(L.value.column)
          }, [
            createElementVNode("div", {
              class: normalizeClass([
                L.value.item,
                unref(k) === "am" ? L.value.itemSelected : ""
              ]),
              onClick: W[4] || (W[4] = (B) => unref(A)("am"))
            }, " AM ", 2),
            createElementVNode("div", {
              class: normalizeClass([
                L.value.item,
                unref(k) === "pm" ? L.value.itemSelected : ""
              ]),
              onClick: W[5] || (W[5] = (B) => unref(A)("pm"))
            }, " PM ", 2)
          ], 2)) : createCommentVNode("", true)
        ], 2)
      ], 2)) : createCommentVNode("", true)
    ], 2));
  }
}), nl = le(In), Mn = (e, a) => {
  const l = ref(false), t = ref(null), r = ref(null), o = computed(() => {
    if (!e.modelValue) return "";
    try {
      const c = e.locale || "default", w = {};
      return e.format ? (e.format.includes("yyyy") && (w.year = "numeric"), e.format.includes("MM") ? w.month = "2-digit" : e.format.includes("M") && (w.month = "numeric"), e.format.includes("dd") ? w.day = "2-digit" : e.format.includes("d") && (w.day = "numeric"), Object.keys(w).length === 0 && (w.year = "numeric", w.month = "2-digit", w.day = "2-digit")) : (w.year = "numeric", w.month = "2-digit", w.day = "2-digit"), new Intl.DateTimeFormat(c, w).format(e.modelValue);
    } catch (c) {
      return console.error("Date formatting error:", c), e.modelValue.toLocaleDateString();
    }
  }), n = () => {
    e.disabled || e.readonly || (l.value = !l.value);
  }, g = () => {
    l.value = false;
  }, s = (c) => {
    c === null ? (a("update:modelValue", null), a("change", null)) : (a("update:modelValue", c), a("change", c)), g();
  }, u = (c) => {
    c.stopPropagation(), a("update:modelValue", null), a("change", null), a("clear");
  }, v = (c) => {
    a("focus", c);
  }, h = (c) => {
    a("blur", c);
  }, S = (c) => {
    l.value && t.value && r.value && !t.value.contains(c.target) && !r.value.contains(c.target) && g();
  };
  return onMounted(() => {
    document.addEventListener("mousedown", S);
  }), onBeforeUnmount(() => {
    document.removeEventListener("mousedown", S);
  }), watch(
    () => e.modelValue,
    (c) => {
      c || g();
    }
  ), {
    isOpen: l,
    inputRef: t,
    dropdownRef: r,
    formattedValue: o,
    toggleDropdown: n,
    closeDropdown: g,
    handleDateChange: s,
    handleClear: u,
    handleFocus: v,
    handleBlur: h
  };
}, Tn = R({
  base: "relative w-full",
  variants: {
    unstyled: {
      false: ""
    }
  },
  defaultVariants: {
    unstyled: false
  }
}), Dn = R({
  base: "relative flex items-center"
}), Rn = R({
  base: "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:ring-blue-400 dark:focus:ring-offset-gray-900",
  variants: {
    error: {
      true: "border-red-500 focus:ring-red-500"
    }
  }
}), En = R({
  base: "absolute right-3 cursor-pointer text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-300"
}), Ln = R({
  base: "absolute z-50 mt-1 w-full rounded-md border border-gray-200 bg-white p-4 shadow-lg dark:border-gray-700 dark:bg-gray-800"
}), An = {
  "update:modelValue": (e) => e === null || e instanceof Date,
  change: (e) => e === null || e instanceof Date,
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => true
}, On = ["value", "placeholder", "disabled"], Pn = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    modelValue: {},
    min: {},
    max: {},
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    placeholder: { default: "选择日期" },
    format: {},
    firstDayOfWeek: { default: 0 },
    locale: {},
    clearable: { type: Boolean, default: true },
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  emits: An,
  setup(e, { emit: a }) {
    const l = a, t = e, {
      isOpen: r,
      inputRef: o,
      dropdownRef: n,
      formattedValue: g,
      toggleDropdown: s,
      handleDateChange: u,
      handleClear: v,
      handleFocus: h,
      handleBlur: S
    } = Mn(t, l), c = computed(() => {
      var w, x, i, d, k, y, $, I, V, A;
      return {
        root: t.unstyled ? ((w = t.pt) == null ? void 0 : w.root) || "" : Tn({ unstyled: t.unstyled, class: (x = t.pt) == null ? void 0 : x.root }),
        inputWrapper: t.unstyled ? ((i = t.pt) == null ? void 0 : i.inputWrapper) || "" : Dn({ class: (d = t.pt) == null ? void 0 : d.inputWrapper }),
        input: t.unstyled ? ((k = t.pt) == null ? void 0 : k.input) || "" : Rn({ class: (y = t.pt) == null ? void 0 : y.input }),
        clearButton: t.unstyled ? (($ = t.pt) == null ? void 0 : $.clearButton) || "" : En({ class: (I = t.pt) == null ? void 0 : I.clearButton }),
        dropdown: t.unstyled ? ((V = t.pt) == null ? void 0 : V.dropdown) || "" : Ln({ class: (A = t.pt) == null ? void 0 : A.dropdown })
      };
    });
    return (w, x) => {
      var i;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(c.value.root)
      }, [
        createElementVNode("div", {
          class: normalizeClass(c.value.inputWrapper),
          onClick: x[3] || (x[3] = //@ts-ignore
          (...d) => unref(s) && unref(s)(...d))
        }, [
          createElementVNode("input", {
            ref_key: "inputRef",
            ref: o,
            type: "text",
            class: normalizeClass(c.value.input),
            value: unref(g),
            placeholder: e.placeholder,
            disabled: e.disabled,
            readonly: true,
            onFocus: x[0] || (x[0] = //@ts-ignore
            (...d) => unref(h) && unref(h)(...d)),
            onBlur: x[1] || (x[1] = //@ts-ignore
            (...d) => unref(S) && unref(S)(...d))
          }, null, 42, On),
          e.clearable && e.modelValue && !e.disabled && !e.readonly ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass(c.value.clearButton),
            onClick: x[2] || (x[2] = //@ts-ignore
            (...d) => unref(v) && unref(v)(...d))
          }, [...x[4] || (x[4] = [
            createElementVNode("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, [
              createElementVNode("line", {
                x1: "18",
                y1: "6",
                x2: "6",
                y2: "18"
              }),
              createElementVNode("line", {
                x1: "6",
                y1: "6",
                x2: "18",
                y2: "18"
              })
            ], -1)
          ])], 2)) : createCommentVNode("", true)
        ], 2),
        unref(r) ? (openBlock(), createElementBlock("div", {
          key: 0,
          ref_key: "dropdownRef",
          ref: n,
          class: normalizeClass(c.value.dropdown)
        }, [
          createVNode(unref(Et), {
            modelValue: e.modelValue,
            min: e.min,
            max: e.max,
            disabled: e.disabled,
            readonly: e.readonly,
            firstDayOfWeek: e.firstDayOfWeek,
            locale: e.locale,
            pt: (i = e.pt) == null ? void 0 : i.calendar,
            "onUpdate:modelValue": unref(u)
          }, null, 8, ["modelValue", "min", "max", "disabled", "readonly", "firstDayOfWeek", "locale", "pt", "onUpdate:modelValue"])
        ], 2)) : createCommentVNode("", true)
      ], 2);
    };
  }
}), jn = le(Pn), Zn = (e, a) => {
  const l = ref(false), t = ref("date"), r = ref(null), o = ref(null), n = ref(e.modelValue || /* @__PURE__ */ new Date()), g = computed(() => {
    if (!e.modelValue) return "";
    try {
      const d = e.locale || "default", k = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "2-digit"
      };
      return e.showSeconds && (k.second = "2-digit"), e.timeFormat === "12h" ? k.hour12 = true : k.hour12 = false, new Intl.DateTimeFormat(d, k).format(e.modelValue);
    } catch (d) {
      return console.error("DateTime formatting error:", d), e.modelValue.toLocaleString();
    }
  }), s = () => {
    e.disabled || e.readonly || (l.value = !l.value, l.value && (n.value = e.modelValue || /* @__PURE__ */ new Date()));
  }, u = () => {
    l.value = false;
  }, v = (d) => {
    t.value = d;
  }, h = (d) => {
    if (!d) return;
    const k = new Date(n.value);
    k.setFullYear(d.getFullYear()), k.setMonth(d.getMonth()), k.setDate(d.getDate()), n.value = k, a("update:modelValue", k), a("change", k), v("time");
  }, S = (d) => {
    if (!d) return;
    const k = new Date(n.value);
    if (d instanceof Date)
      k.setHours(d.getHours()), k.setMinutes(d.getMinutes()), k.setSeconds(d.getSeconds());
    else if (typeof d == "string") {
      const y = d.split(":");
      y.length >= 2 && (k.setHours(parseInt(y[0]) || 0), k.setMinutes(parseInt(y[1]) || 0), y.length >= 3 && k.setSeconds(parseInt(y[2]) || 0));
    }
    n.value = k, a("update:modelValue", k), a("change", k), u();
  }, c = (d) => {
    d.stopPropagation(), a("update:modelValue", null), a("change", null), a("clear");
  }, w = (d) => {
    a("focus", d);
  }, x = (d) => {
    a("blur", d);
  }, i = (d) => {
    l.value && r.value && o.value && !r.value.contains(d.target) && !o.value.contains(d.target) && u();
  };
  return onMounted(() => {
    document.addEventListener("mousedown", i);
  }), onBeforeUnmount(() => {
    document.removeEventListener("mousedown", i);
  }), watch(
    () => e.modelValue,
    (d) => {
      d ? n.value = d : u();
    }
  ), {
    isOpen: l,
    activeTab: t,
    inputRef: r,
    dropdownRef: o,
    currentDateTime: n,
    formattedValue: g,
    toggleDropdown: s,
    closeDropdown: u,
    switchTab: v,
    handleDateChange: h,
    handleTimeChange: S,
    handleClear: c,
    handleFocus: w,
    handleBlur: x
  };
}, Wn = R({
  base: "relative w-full",
  variants: {
    unstyled: {
      false: ""
    }
  },
  defaultVariants: {
    unstyled: false
  }
}), Fn = R({
  base: "relative flex items-center"
}), Hn = R({
  base: "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:ring-blue-400 dark:focus:ring-offset-gray-900",
  variants: {
    error: {
      true: "border-red-500 focus:ring-red-500"
    }
  }
}), Nn = R({
  base: "absolute right-3 cursor-pointer text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-300"
}), Gn = R({
  base: "absolute z-50 mt-1 w-full rounded-md border border-gray-200 bg-white p-4 shadow-lg dark:border-gray-700 dark:bg-gray-800"
}), Kn = R({
  base: "mb-4 flex border-b border-gray-200 dark:border-gray-700"
}), Ct = R({
  base: "cursor-pointer px-4 py-2 text-sm font-medium",
  variants: {
    active: {
      true: "border-b-2 border-blue-500 text-blue-700 dark:border-blue-400 dark:text-blue-300",
      false: "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
    }
  },
  defaultVariants: {
    active: false
  }
}), Yn = R({
  base: "mt-2"
}), Un = {
  "update:modelValue": (e) => e === null || e instanceof Date,
  change: (e) => e === null || e instanceof Date,
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => true
}, Xn = ["value", "placeholder", "disabled"], qn = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    modelValue: {},
    min: {},
    max: {},
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    placeholder: { default: "选择日期时间" },
    dateFormat: {},
    timeFormat: { default: "24h" },
    firstDayOfWeek: { default: 0 },
    locale: {},
    hourStep: { default: 1 },
    minuteStep: { default: 1 },
    secondStep: { default: 1 },
    showSeconds: { type: Boolean, default: false },
    clearable: { type: Boolean, default: true },
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  emits: Un,
  setup(e, { emit: a }) {
    const l = a, t = e, {
      isOpen: r,
      activeTab: o,
      inputRef: n,
      dropdownRef: g,
      currentDateTime: s,
      formattedValue: u,
      toggleDropdown: v,
      switchTab: h,
      handleDateChange: S,
      handleTimeChange: c,
      handleClear: w,
      handleFocus: x,
      handleBlur: i
    } = Zn(t, l), d = computed(() => {
      var k, y, $, I, V, A, T, O, D, L, Z, W, B, E, M, N, j, Y;
      return {
        root: t.unstyled ? ((k = t.pt) == null ? void 0 : k.root) || "" : Wn({
          unstyled: t.unstyled,
          class: (y = t.pt) == null ? void 0 : y.root
        }),
        inputWrapper: t.unstyled ? (($ = t.pt) == null ? void 0 : $.inputWrapper) || "" : Fn({ class: (I = t.pt) == null ? void 0 : I.inputWrapper }),
        input: t.unstyled ? ((V = t.pt) == null ? void 0 : V.input) || "" : Hn({ class: (A = t.pt) == null ? void 0 : A.input }),
        clearButton: t.unstyled ? ((T = t.pt) == null ? void 0 : T.clearButton) || "" : Nn({ class: (O = t.pt) == null ? void 0 : O.clearButton }),
        dropdown: t.unstyled ? ((D = t.pt) == null ? void 0 : D.dropdown) || "" : Gn({ class: (L = t.pt) == null ? void 0 : L.dropdown }),
        tabs: t.unstyled ? ((Z = t.pt) == null ? void 0 : Z.tabs) || "" : Kn({ class: (W = t.pt) == null ? void 0 : W.tabs }),
        tab: t.unstyled ? ((B = t.pt) == null ? void 0 : B.tab) || "" : Ct({ class: (E = t.pt) == null ? void 0 : E.tab }),
        activeTab: t.unstyled ? ((M = t.pt) == null ? void 0 : M.activeTab) || "" : Ct({ active: true, class: (N = t.pt) == null ? void 0 : N.activeTab }).split(" ").filter((X) => !Ct().includes(X)).join(" "),
        tabContent: t.unstyled ? ((j = t.pt) == null ? void 0 : j.tabContent) || "" : Yn({ class: (Y = t.pt) == null ? void 0 : Y.tabContent })
      };
    });
    return (k, y) => {
      var $, I, V, A, T, O, D, L, Z, W;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(d.value.root)
      }, [
        createElementVNode("div", {
          class: normalizeClass(d.value.inputWrapper),
          onClick: y[3] || (y[3] = //@ts-ignore
          (...B) => unref(v) && unref(v)(...B))
        }, [
          createElementVNode("input", {
            ref_key: "inputRef",
            ref: n,
            type: "text",
            class: normalizeClass(d.value.input),
            value: unref(u),
            placeholder: e.placeholder,
            disabled: e.disabled,
            readonly: true,
            onFocus: y[0] || (y[0] = //@ts-ignore
            (...B) => unref(x) && unref(x)(...B)),
            onBlur: y[1] || (y[1] = //@ts-ignore
            (...B) => unref(i) && unref(i)(...B))
          }, null, 42, Xn),
          e.clearable && e.modelValue && !e.disabled && !e.readonly ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass(d.value.clearButton),
            onClick: y[2] || (y[2] = //@ts-ignore
            (...B) => unref(w) && unref(w)(...B))
          }, [...y[6] || (y[6] = [
            createElementVNode("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, [
              createElementVNode("line", {
                x1: "18",
                y1: "6",
                x2: "6",
                y2: "18"
              }),
              createElementVNode("line", {
                x1: "6",
                y1: "6",
                x2: "18",
                y2: "18"
              })
            ], -1)
          ])], 2)) : createCommentVNode("", true)
        ], 2),
        unref(r) ? (openBlock(), createElementBlock("div", {
          key: 0,
          ref_key: "dropdownRef",
          ref: g,
          class: normalizeClass(d.value.dropdown)
        }, [
          createElementVNode("div", {
            class: normalizeClass(d.value.tabs)
          }, [
            createElementVNode("div", {
              class: normalizeClass([d.value.tab, unref(o) === "date" ? d.value.activeTab : ""]),
              onClick: y[4] || (y[4] = (B) => unref(h)("date"))
            }, " 日期 ", 2),
            createElementVNode("div", {
              class: normalizeClass([d.value.tab, unref(o) === "time" ? d.value.activeTab : ""]),
              onClick: y[5] || (y[5] = (B) => unref(h)("time"))
            }, " 时间 ", 2)
          ], 2),
          createElementVNode("div", {
            class: normalizeClass(d.value.tabContent)
          }, [
            withDirectives(createElementVNode("div", null, [
              createVNode(unref(Et), {
                modelValue: unref(s),
                min: e.min,
                max: e.max,
                disabled: e.disabled,
                readonly: e.readonly,
                firstDayOfWeek: e.firstDayOfWeek,
                locale: e.locale,
                pt: (I = ($ = e.pt) == null ? void 0 : $.datePicker) == null ? void 0 : I.calendar,
                "onUpdate:modelValue": unref(S)
              }, null, 8, ["modelValue", "min", "max", "disabled", "readonly", "firstDayOfWeek", "locale", "pt", "onUpdate:modelValue"])
            ], 512), [
              [vShow, unref(o) === "date"]
            ]),
            withDirectives(createElementVNode("div", null, [
              createVNode(unref(nl), {
                modelValue: unref(s),
                disabled: e.disabled,
                readonly: e.readonly,
                format: e.timeFormat,
                hourStep: e.hourStep,
                minuteStep: e.minuteStep,
                secondStep: e.secondStep,
                showSeconds: e.showSeconds,
                pt: {
                  timeSelector: (A = (V = e.pt) == null ? void 0 : V.timePicker) == null ? void 0 : A.timeSelector,
                  column: (O = (T = e.pt) == null ? void 0 : T.timePicker) == null ? void 0 : O.column,
                  item: (L = (D = e.pt) == null ? void 0 : D.timePicker) == null ? void 0 : L.item,
                  itemSelected: (W = (Z = e.pt) == null ? void 0 : Z.timePicker) == null ? void 0 : W.itemSelected
                },
                "onUpdate:modelValue": unref(c)
              }, null, 8, ["modelValue", "disabled", "readonly", "format", "hourStep", "minuteStep", "secondStep", "showSeconds", "pt", "onUpdate:modelValue"])
            ], 512), [
              [vShow, unref(o) === "time"]
            ])
          ], 2)
        ], 2)) : createCommentVNode("", true)
      ], 2);
    };
  }
}), Jn = le(qn), Qn = (e, a) => {
  const l = ref(false), t = ref(null), r = ref(null), o = computed(() => {
    if (e.options && e.options.length > 0)
      return e.options;
    const c = [], w = e.start || "00:00", x = e.end || "23:59", i = e.step || 30, [d, k] = w.split(":").map(Number), [y, $] = x.split(":").map(Number), I = d * 60 + k, V = y * 60 + $;
    for (let A = I; A <= V; A += i) {
      const T = Math.floor(A / 60), O = A % 60;
      if (e.format === "12h") {
        const D = T >= 12 ? "PM" : "AM", L = T === 0 ? 12 : T > 12 ? T - 12 : T;
        c.push(
          `${L.toString().padStart(2, "0")}:${O.toString().padStart(2, "0")} ${D}`
        );
      } else
        c.push(
          `${T.toString().padStart(2, "0")}:${O.toString().padStart(2, "0")}`
        );
    }
    return c;
  }), n = () => {
    e.disabled || e.readonly || (l.value = !l.value);
  }, g = () => {
    l.value = false;
  }, s = (c) => {
    a("update:modelValue", c), a("change", c), g();
  }, u = (c) => {
    c.stopPropagation(), a("update:modelValue", null), a("change", null), a("clear");
  }, v = (c) => {
    a("focus", c);
  }, h = (c) => {
    a("blur", c);
  }, S = (c) => {
    l.value && t.value && r.value && !t.value.contains(c.target) && !r.value.contains(c.target) && g();
  };
  return onMounted(() => {
    document.addEventListener("mousedown", S);
  }), onBeforeUnmount(() => {
    document.removeEventListener("mousedown", S);
  }), watch(
    () => e.modelValue,
    (c) => {
      c || g();
    }
  ), {
    isOpen: l,
    inputRef: t,
    dropdownRef: r,
    timeOptions: o,
    toggleDropdown: n,
    selectOption: s,
    handleClear: u,
    handleFocus: v,
    handleBlur: h
  };
}, _n = R({
  base: "relative w-full",
  variants: {
    unstyled: {
      false: ""
    }
  },
  defaultVariants: {
    unstyled: false
  }
}), es = R({
  base: "relative flex items-center"
}), ts = R({
  base: "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:ring-blue-400 dark:focus:ring-offset-gray-900",
  variants: {
    error: {
      true: "border-red-500 focus:ring-red-500"
    }
  }
}), ls = R({
  base: "absolute right-3 cursor-pointer text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-300"
}), as = R({
  base: "absolute z-50 mt-1 w-full rounded-md border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800"
}), rs = R({
  base: "max-h-60 overflow-auto py-1"
}), nt = R({
  base: "cursor-pointer px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700",
  variants: {
    selected: {
      true: "bg-blue-100 font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
    },
    disabled: {
      true: "cursor-not-allowed opacity-50 hover:bg-transparent dark:hover:bg-transparent"
    }
  }
}), os = {
  "update:modelValue": (e) => e === null || typeof e == "string",
  change: (e) => e === null || typeof e == "string",
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => true
}, ns = ["value", "placeholder", "disabled"], ss = ["onClick"], is = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    modelValue: {},
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    placeholder: { default: "选择时间" },
    options: {},
    start: { default: "00:00" },
    end: { default: "23:59" },
    step: { default: 30 },
    format: { default: "24h" },
    clearable: { type: Boolean, default: true },
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  emits: os,
  setup(e, { emit: a }) {
    const l = a, t = e, {
      isOpen: r,
      inputRef: o,
      dropdownRef: n,
      timeOptions: g,
      toggleDropdown: s,
      selectOption: u,
      handleClear: v,
      handleFocus: h,
      handleBlur: S
    } = Qn(t, l), c = computed(() => {
      var w, x, i, d, k, y, $, I, V, A, T, O, D, L, Z, W;
      return {
        root: t.unstyled ? ((w = t.pt) == null ? void 0 : w.root) || "" : _n({ unstyled: t.unstyled, class: (x = t.pt) == null ? void 0 : x.root }),
        inputWrapper: t.unstyled ? ((i = t.pt) == null ? void 0 : i.inputWrapper) || "" : es({ class: (d = t.pt) == null ? void 0 : d.inputWrapper }),
        input: t.unstyled ? ((k = t.pt) == null ? void 0 : k.input) || "" : ts({ class: (y = t.pt) == null ? void 0 : y.input }),
        clearButton: t.unstyled ? (($ = t.pt) == null ? void 0 : $.clearButton) || "" : ls({ class: (I = t.pt) == null ? void 0 : I.clearButton }),
        dropdown: t.unstyled ? ((V = t.pt) == null ? void 0 : V.dropdown) || "" : as({ class: (A = t.pt) == null ? void 0 : A.dropdown }),
        optionsList: t.unstyled ? ((T = t.pt) == null ? void 0 : T.optionsList) || "" : rs({ class: (O = t.pt) == null ? void 0 : O.optionsList }),
        option: t.unstyled ? ((D = t.pt) == null ? void 0 : D.option) || "" : nt({ class: (L = t.pt) == null ? void 0 : L.option }),
        optionSelected: t.unstyled ? ((Z = t.pt) == null ? void 0 : Z.optionSelected) || "" : nt({
          selected: true,
          class: (W = t.pt) == null ? void 0 : W.optionSelected
        }).split(" ").filter((B) => !nt().includes(B)).join(" "),
        optionDisabled: t.unstyled ? "" : nt({ disabled: true }).split(" ").filter((B) => !nt().includes(B)).join(" ")
      };
    });
    return (w, x) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(c.value.root)
    }, [
      createElementVNode("div", {
        class: normalizeClass(c.value.inputWrapper),
        onClick: x[3] || (x[3] = //@ts-ignore
        (...i) => unref(s) && unref(s)(...i))
      }, [
        createElementVNode("input", {
          ref_key: "inputRef",
          ref: o,
          type: "text",
          class: normalizeClass(c.value.input),
          value: e.modelValue,
          placeholder: e.placeholder,
          disabled: e.disabled,
          readonly: true,
          onFocus: x[0] || (x[0] = //@ts-ignore
          (...i) => unref(h) && unref(h)(...i)),
          onBlur: x[1] || (x[1] = //@ts-ignore
          (...i) => unref(S) && unref(S)(...i))
        }, null, 42, ns),
        e.clearable && e.modelValue && !e.disabled && !e.readonly ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass(c.value.clearButton),
          onClick: x[2] || (x[2] = //@ts-ignore
          (...i) => unref(v) && unref(v)(...i))
        }, [...x[4] || (x[4] = [
          createElementVNode("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, [
            createElementVNode("line", {
              x1: "18",
              y1: "6",
              x2: "6",
              y2: "18"
            }),
            createElementVNode("line", {
              x1: "6",
              y1: "6",
              x2: "18",
              y2: "18"
            })
          ], -1)
        ])], 2)) : createCommentVNode("", true)
      ], 2),
      unref(r) ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref_key: "dropdownRef",
        ref: n,
        class: normalizeClass(c.value.dropdown)
      }, [
        createElementVNode("div", {
          class: normalizeClass(c.value.optionsList)
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(g), (i, d) => (openBlock(), createElementBlock("div", {
            key: d,
            class: normalizeClass([
              c.value.option,
              e.modelValue === i ? c.value.optionSelected : "",
              e.disabled ? c.value.optionDisabled : ""
            ]),
            onClick: (k) => !e.disabled && unref(u)(i)
          }, toDisplayString(i), 11, ss))), 128)),
          unref(g).length === 0 ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(c.value.option),
            style: { cursor: "default" }
          }, " 无可用选项 ", 2)) : createCommentVNode("", true)
        ], 2)
      ], 2)) : createCommentVNode("", true)
    ], 2));
  }
}), us = le(is), ds = R({
  base: "relative overflow-hidden bg-gray-200 dark:bg-gray-700",
  variants: {
    animation: {
      pulse: "animate-pulse",
      wave: "skeleton-wave",
      none: ""
    },
    rounded: {
      true: "rounded-md",
      false: ""
    }
  },
  defaultVariants: {
    animation: "pulse",
    rounded: false
  }
}), cs = R({
  base: "w-full",
  variants: {
    rounded: {
      true: "rounded-md",
      false: ""
    }
  },
  defaultVariants: {
    rounded: false
  }
}), fs = R({
  base: "bg-gray-200 dark:bg-gray-700 h-4 mb-2 last:mb-0",
  variants: {
    animation: {
      pulse: "animate-pulse",
      wave: "skeleton-wave",
      none: ""
    },
    rounded: {
      true: "rounded-md",
      false: ""
    }
  },
  defaultVariants: {
    animation: "pulse",
    rounded: false
  }
}), vs = R({
  base: "bg-gray-200 dark:bg-gray-700 inline-block",
  variants: {
    size: {
      xs: "h-6 w-6",
      sm: "h-8 w-8",
      md: "h-10 w-10",
      lg: "h-12 w-12",
      xl: "h-16 w-16"
    },
    circle: {
      true: "rounded-full",
      false: "rounded-md"
    },
    animation: {
      pulse: "animate-pulse",
      wave: "skeleton-wave",
      none: ""
    }
  },
  defaultVariants: {
    size: "md",
    circle: true,
    animation: "pulse"
  }
}), gs = { key: 1 }, bs = /* @__PURE__ */ defineComponent({
  name: "ZSkeleton",
  __name: "index",
  props: {
    animation: { default: "pulse" },
    loading: { type: Boolean, default: true },
    rounded: { type: Boolean, default: false },
    width: {},
    height: {},
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  setup(e) {
    const a = e, l = computed(() => {
      var o, n;
      return a.unstyled ? ((o = a.pt) == null ? void 0 : o.root) || "" : ds({
        animation: a.animation,
        rounded: a.rounded,
        class: (n = a.pt) == null ? void 0 : n.root
      });
    }), t = computed(() => {
      var o;
      return a.unstyled && ((o = a.pt) == null ? void 0 : o.content) || "";
    }), r = computed(() => {
      const o = {};
      return a.width && (o.width = typeof a.width == "number" ? `${a.width}px` : a.width), a.height && (o.height = typeof a.height == "number" ? `${a.height}px` : a.height), o;
    });
    return (o, n) => e.loading ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(l.value),
      style: normalizeStyle(r.value)
    }, [
      createElementVNode("div", {
        class: normalizeClass(t.value)
      }, [
        renderSlot(o.$slots, "skeleton")
      ], 2)
    ], 6)) : (openBlock(), createElementBlock("div", gs, [
      renderSlot(o.$slots, "default")
    ]));
  }
}), ps = /* @__PURE__ */ defineComponent({
  name: "ZSkeletonText",
  __name: "SkeletonText",
  props: {
    lines: { default: 3 },
    widths: { default: () => ["100%", "100%", "80%"] },
    lineHeight: { default: "1rem" },
    animation: { default: "pulse" },
    rounded: { type: Boolean, default: false },
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  setup(e) {
    const a = e, l = computed(() => {
      var n, g;
      return a.unstyled ? ((n = a.pt) == null ? void 0 : n.root) || "" : cs({
        rounded: a.rounded,
        class: (g = a.pt) == null ? void 0 : g.root
      });
    }), t = () => {
      var n, g;
      return a.unstyled ? ((n = a.pt) == null ? void 0 : n.line) || "" : fs({
        animation: a.animation,
        rounded: a.rounded,
        class: (g = a.pt) == null ? void 0 : g.line
      });
    }, r = (n) => typeof a.widths == "string" || typeof a.widths == "number" ? a.widths : Array.isArray(a.widths) && a.widths.length > 0 ? a.widths[n % a.widths.length] : "100%", o = (n) => {
      const g = r(n), s = {
        width: typeof g == "number" ? `${g}px` : g
      };
      return a.lineHeight && (s.height = typeof a.lineHeight == "number" ? `${a.lineHeight}px` : a.lineHeight), s;
    };
    return (n, g) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(l.value)
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(e.lines, (s) => (openBlock(), createElementBlock("div", {
        key: s,
        class: normalizeClass(t()),
        style: normalizeStyle(o(s - 1))
      }, null, 6))), 128))
    ], 2));
  }
}), ms = /* @__PURE__ */ defineComponent({
  name: "ZSkeletonAvatar",
  __name: "SkeletonAvatar",
  props: {
    size: { default: "md" },
    circle: { type: Boolean, default: true },
    animation: { default: "pulse" },
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  setup(e) {
    const a = e, l = computed(() => {
      var t, r;
      return a.unstyled ? ((t = a.pt) == null ? void 0 : t.root) || "" : vs({
        size: a.size,
        circle: a.circle,
        animation: a.animation,
        class: (r = a.pt) == null ? void 0 : r.root
      });
    });
    return (t, r) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(l.value)
    }, null, 2));
  }
}), ys = le(bs), hs = le(ps), ws = le(ms);
function xs(e = {}) {
  const a = ref(e.modelValue || ""), l = (o) => a.value === o, t = (o) => {
    var n;
    a.value = o, (n = e.onChange) == null || n.call(e, o);
  };
  return watch(
    () => e.modelValue,
    (o) => {
      o !== void 0 && o !== a.value && (a.value = o);
    }
  ), {
    activeTab: a,
    isActive: l,
    activate: t,
    onKeydown: (o, n) => {
      const g = n.indexOf(a.value);
      if (g === -1 && n.length > 0) {
        t(n[0]);
        return;
      }
      if (o.key === "ArrowRight" || o.key === "ArrowDown") {
        const s = (g + 1) % n.length;
        t(n[s]), o.preventDefault();
      } else if (o.key === "ArrowLeft" || o.key === "ArrowUp") {
        const s = (g - 1 + n.length) % n.length;
        t(n[s]), o.preventDefault();
      }
    }
  };
}
const ks = R({
  base: "w-full",
  variants: {
    placement: {
      top: "flex flex-col",
      bottom: "flex flex-col-reverse",
      left: "flex flex-row",
      right: "flex flex-row-reverse"
    },
    fullWidth: {
      true: "w-full",
      false: ""
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
      false: ""
    }
  },
  defaultVariants: {
    placement: "top",
    fullWidth: false,
    disabled: false
  }
}), Cs = R({
  base: "flex",
  variants: {
    variant: {
      default: "border-b border-gray-200 dark:border-gray-700",
      pills: "gap-2",
      underline: "border-b border-gray-200 dark:border-gray-700"
    },
    placement: {
      top: "flex-row",
      bottom: "flex-row",
      left: "flex-col",
      right: "flex-col"
    },
    fullWidth: {
      true: "w-full",
      false: ""
    },
    size: {
      sm: "gap-1",
      md: "gap-2",
      lg: "gap-3"
    }
  },
  defaultVariants: {
    variant: "default",
    placement: "top",
    fullWidth: false,
    size: "md"
  }
}), Ss = R({
  base: "focus:outline-none transition-colors",
  variants: {
    variant: {
      default: "px-4 py-2 border-b-2 -mb-px",
      pills: "px-4 py-2 rounded-md",
      underline: "px-4 py-2 border-b-2 -mb-px"
    },
    active: {
      true: "",
      false: ""
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
      false: "cursor-pointer"
    },
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base"
    },
    fullWidth: {
      true: "flex-1 text-center",
      false: ""
    }
  },
  compoundVariants: [
    {
      variant: "default",
      active: true,
      class: "border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-400"
    },
    {
      variant: "default",
      active: false,
      class: "border-transparent text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
    },
    {
      variant: "pills",
      active: true,
      class: "bg-blue-500 text-white dark:bg-blue-600"
    },
    {
      variant: "pills",
      active: false,
      class: "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
    },
    {
      variant: "underline",
      active: true,
      class: "border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-400"
    },
    {
      variant: "underline",
      active: false,
      class: "border-transparent text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
    }
  ],
  defaultVariants: {
    variant: "default",
    active: false,
    disabled: false,
    size: "md",
    fullWidth: false
  }
}), zs = R({
  base: "py-4",
  variants: {
    placement: {
      top: "pt-4",
      bottom: "pb-4",
      left: "pl-4",
      right: "pr-4"
    }
  },
  defaultVariants: {
    placement: "top"
  }
}), $s = {
  "update:modelValue": (e) => typeof e == "string" || typeof e == "number",
  change: (e) => typeof e == "string" || typeof e == "number"
}, Bs = ["aria-disabled"], Vs = ["aria-selected", "aria-disabled", "tabindex", "onClick"], Is = /* @__PURE__ */ defineComponent({
  name: "ZTabs",
  __name: "tabs",
  props: {
    modelValue: {},
    variant: { default: "default" },
    size: { default: "md" },
    placement: { default: "top" },
    disabled: { type: Boolean, default: false },
    fullWidth: { type: Boolean, default: false },
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  emits: $s,
  setup(e, { emit: a }) {
    const l = e, t = a, r = useSlots(), o = computed(() => {
      if (!r.default) return [];
      const d = r.default({}) || [], k = /* @__PURE__ */ new Set(), y = [];
      return d.filter(($) => $.type && ($.type.name === "ZTabItem" || typeof $.type == "object" && $.type.__name === "ZTabItem")).forEach(($) => {
        const I = $.props || {}, V = I.name;
        V && !k.has(V) ? (k.add(V), y.push({
          name: V,
          title: I.title || I.label || "",
          disabled: I.disabled || false
        })) : console.warn(
          V ? `[Tabs] 发现重复的TabItem name: ${V}，只有第一个会被显示` : "[Tabs] TabItem必须提供name属性"
        );
      }), y;
    }), n = computed(
      () => o.value.map((d) => d.name)
    ), { activeTab: g, isActive: s, activate: u, onKeydown: v } = xs({
      modelValue: l.modelValue,
      onChange: (d) => {
        t("update:modelValue", d), t("change", d);
      }
    });
    watch(
      o,
      (d) => {
        d.length > 0 && !d.some((k) => s(k.name)) && u(d[0].name);
      },
      { immediate: true }
    );
    const h = (d, k) => {
      l.disabled || k || u(d);
    }, S = (d) => {
      v(d, n.value);
    }, c = computed(() => {
      var d, k;
      return l.unstyled ? ((d = l.pt) == null ? void 0 : d.container) || "" : ks({
        placement: l.placement,
        fullWidth: l.fullWidth,
        disabled: l.disabled,
        class: (k = l.pt) == null ? void 0 : k.container
      });
    }), w = computed(() => {
      var d, k;
      return l.unstyled ? ((d = l.pt) == null ? void 0 : d.nav) || "" : Cs({
        variant: l.variant,
        placement: l.placement,
        fullWidth: l.fullWidth,
        size: l.size,
        class: (k = l.pt) == null ? void 0 : k.nav
      });
    }), x = (d, k) => {
      var y, $;
      return l.unstyled ? ((y = l.pt) == null ? void 0 : y.navItem) || "" : Ss({
        variant: l.variant,
        active: s(d),
        disabled: l.disabled || k,
        size: l.size,
        fullWidth: l.fullWidth,
        class: ($ = l.pt) == null ? void 0 : $.navItem
      });
    }, i = computed(() => {
      var d, k;
      return l.unstyled ? ((d = l.pt) == null ? void 0 : d.content) || "" : zs({
        placement: l.placement,
        class: (k = l.pt) == null ? void 0 : k.content
      });
    });
    return provide("activeTab", g), (d, k) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(c.value),
      "aria-disabled": e.disabled,
      role: "tablist",
      onKeydown: S
    }, [
      createElementVNode("div", {
        class: normalizeClass(w.value)
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(o.value, (y) => (openBlock(), createElementBlock("button", {
          key: y.name,
          class: normalizeClass(x(y.name, y.disabled)),
          role: "tab",
          "aria-selected": unref(s)(y.name),
          "aria-disabled": e.disabled || y.disabled,
          tabindex: unref(s)(y.name) ? 0 : -1,
          onClick: ($) => h(y.name, y.disabled)
        }, toDisplayString(y.title), 11, Vs))), 128))
      ], 2),
      createElementVNode("div", {
        class: normalizeClass(i.value)
      }, [
        renderSlot(d.$slots, "default")
      ], 2)
    ], 42, Bs));
  }
}), Ms = /* @__PURE__ */ defineComponent({
  name: "ZTabItem",
  __name: "tab-item",
  props: {
    name: {},
    title: {},
    label: {},
    disabled: { type: Boolean, default: false },
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  setup(e) {
    const a = e, l = inject("activeTab", ref("")), t = computed(() => l.value === a.name), r = computed(() => {
      var o;
      return a.unstyled && ((o = a.pt) == null ? void 0 : o.root) || "";
    });
    return (o, n) => withDirectives((openBlock(), createElementBlock("div", {
      class: normalizeClass(r.value)
    }, [
      renderSlot(o.$slots, "default")
    ], 2)), [
      [vShow, t.value]
    ]);
  }
}), Ts = le(Is), Ds = le(Ms), Rs = R({
  base: "bg-white overflow-hidden",
  variants: {
    variant: {
      default: "",
      bordered: "border border-gray-200",
      elevated: "shadow-md"
    },
    padding: {
      none: "",
      sm: "",
      md: "",
      lg: ""
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-xl"
    },
    bordered: {
      true: "border border-gray-200",
      false: ""
    }
  },
  compoundVariants: [
    {
      padding: "none",
      class: ""
    },
    {
      padding: "sm",
      class: ""
    },
    {
      padding: "md",
      class: ""
    },
    {
      padding: "lg",
      class: ""
    }
  ],
  defaultVariants: {
    variant: "default",
    padding: "md",
    radius: "md",
    bordered: true
  }
}), Es = R({
  base: "flex items-center justify-between",
  variants: {
    padding: {
      none: "p-0",
      sm: "p-3",
      md: "p-4",
      lg: "p-5"
    },
    collapsible: {
      true: "cursor-pointer select-none",
      false: ""
    }
  },
  defaultVariants: {
    padding: "md",
    collapsible: false
  }
}), Ls = R({
  base: "text-lg font-medium"
}), As = R({
  base: "transition-all",
  variants: {
    padding: {
      none: "p-0",
      sm: "px-3 pb-3",
      md: "px-4 pb-4",
      lg: "px-5 pb-5"
    },
    collapsed: {
      true: "max-h-0 overflow-hidden opacity-0",
      false: "max-h-[1000px] opacity-100"
    }
  },
  defaultVariants: {
    padding: "md",
    collapsed: false
  }
}), Os = R({
  base: "transition-transform duration-200",
  variants: {
    collapsed: {
      true: "transform rotate-180",
      false: ""
    }
  },
  defaultVariants: {
    collapsed: false
  }
}), Ps = {
  "update:collapsed": (e) => typeof e == "boolean",
  collapse: (e) => typeof e == "boolean"
}, js = /* @__PURE__ */ defineComponent({
  name: "ZPanel",
  __name: "index",
  props: {
    title: {},
    variant: { default: "default" },
    padding: { default: "md" },
    radius: { default: "md" },
    collapsible: { type: Boolean, default: false },
    defaultCollapsed: { type: Boolean, default: false },
    bordered: { type: Boolean, default: true },
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  emits: Ps,
  setup(e, { emit: a }) {
    const l = e, t = a, r = ref(l.defaultCollapsed);
    watch(
      () => l.defaultCollapsed,
      (h) => {
        r.value = h;
      }
    );
    const o = () => {
      l.collapsible && (r.value = !r.value, t("update:collapsed", r.value), t("collapse", r.value));
    }, n = computed(() => {
      var h, S;
      return l.unstyled ? ((h = l.pt) == null ? void 0 : h.root) || "" : Rs({
        variant: l.variant,
        padding: l.padding,
        radius: l.radius,
        bordered: l.bordered,
        class: (S = l.pt) == null ? void 0 : S.root
      });
    }), g = computed(() => {
      var h, S;
      return l.unstyled ? ((h = l.pt) == null ? void 0 : h.header) || "" : Es({
        padding: l.padding,
        collapsible: l.collapsible,
        class: (S = l.pt) == null ? void 0 : S.header
      });
    }), s = computed(() => {
      var h, S;
      return l.unstyled ? ((h = l.pt) == null ? void 0 : h.title) || "" : Ls({
        class: (S = l.pt) == null ? void 0 : S.title
      });
    }), u = computed(() => {
      var h, S;
      return l.unstyled ? ((h = l.pt) == null ? void 0 : h.content) || "" : As({
        padding: l.padding,
        collapsed: r.value,
        class: (S = l.pt) == null ? void 0 : S.content
      });
    }), v = computed(() => {
      var h, S;
      return l.unstyled ? ((h = l.pt) == null ? void 0 : h.icon) || "" : Os({
        collapsed: r.value,
        class: (S = l.pt) == null ? void 0 : S.icon
      });
    });
    return (h, S) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(n.value)
    }, [
      createElementVNode("div", {
        class: normalizeClass(g.value),
        onClick: o
      }, [
        createElementVNode("div", {
          class: normalizeClass(s.value)
        }, [
          renderSlot(h.$slots, "title", {}, () => [
            createTextVNode(toDisplayString(e.title), 1)
          ])
        ], 2),
        e.collapsible ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(v.value)
        }, [
          renderSlot(h.$slots, "icon", {}, () => [
            S[0] || (S[0] = createElementVNode("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, [
              createElementVNode("polyline", { points: "6 9 12 15 18 9" })
            ], -1))
          ])
        ], 2)) : createCommentVNode("", true)
      ], 2),
      createElementVNode("div", {
        class: normalizeClass(u.value)
      }, [
        renderSlot(h.$slots, "default")
      ], 2)
    ], 2));
  }
}), Zs = le(js), Ws = R({
  base: "flex items-center justify-center",
  variants: {
    disabled: {
      true: "opacity-50 pointer-events-none",
      false: ""
    }
  },
  defaultVariants: {
    disabled: false
  }
}), Fs = R({
  base: "flex items-center gap-1"
}), Hs = R({
  base: ""
}), Ns = R({
  base: "flex items-center justify-center transition-colors focus:outline-none",
  variants: {
    variant: {
      default: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800",
      outline: "border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800",
      text: "bg-transparent text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
    },
    size: {
      sm: "h-7 w-7 text-xs",
      md: "h-9 w-9 text-sm",
      lg: "h-11 w-11 text-base"
    },
    shape: {
      square: "rounded-none",
      rounded: "rounded-md",
      circle: "rounded-full"
    },
    active: {
      true: "border-blue-500 bg-blue-500 text-white hover:bg-blue-600 dark:border-blue-500 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-500",
      false: ""
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
      false: "cursor-pointer"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    shape: "rounded",
    active: false,
    disabled: false
  }
}), Gs = R({
  base: "flex items-center justify-center text-gray-500 dark:text-gray-400",
  variants: {
    size: {
      sm: "h-7 w-7 text-xs",
      md: "h-9 w-9 text-sm",
      lg: "h-11 w-11 text-base"
    }
  },
  defaultVariants: {
    size: "md"
  }
}), Ks = R({
  base: "ml-4 flex items-center text-gray-700 dark:text-gray-300"
}), Ys = R({
  base: "mx-1 h-full w-12 rounded-md border border-gray-300 bg-white text-center text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:focus:border-blue-400 dark:focus:ring-blue-400",
  variants: {
    size: {
      sm: "h-7 text-xs",
      md: "h-9 text-sm",
      lg: "h-11 text-base"
    }
  },
  defaultVariants: {
    size: "md"
  }
}), Us = R({
  base: "ml-2 rounded-md bg-blue-500 px-3 text-white hover:bg-blue-600 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-500",
  variants: {
    size: {
      sm: "h-7 text-xs",
      md: "h-9 text-sm",
      lg: "h-11 text-base"
    }
  },
  defaultVariants: {
    size: "md"
  }
}), Xs = {
  "update:modelValue": (e) => typeof e == "number",
  change: (e) => typeof e == "number"
}, qs = ["disabled"], Js = ["disabled"], Qs = ["onClick", "disabled", "aria-current"], _s = ["disabled"], ei = ["disabled"], ti = ["max", "disabled"], li = ["disabled"], ai = /* @__PURE__ */ defineComponent({
  name: "ZPaginator",
  __name: "index",
  props: {
    modelValue: { default: 1 },
    totalPages: {},
    visiblePageCount: { default: 5 },
    showEndButtons: { type: Boolean, default: true },
    showPrevNextButtons: { type: Boolean, default: true },
    showJumper: { type: Boolean, default: false },
    size: { default: "md" },
    variant: { default: "default" },
    shape: { default: "rounded" },
    disabled: { type: Boolean, default: false },
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  emits: Xs,
  setup(e, { emit: a }) {
    const l = e, t = a, r = ref(l.modelValue);
    watch(
      () => l.modelValue,
      (y) => {
        y !== r.value && (r.value = y);
      }
    );
    const o = computed({
      get: () => r.value,
      set: (y) => {
        r.value = y, t("update:modelValue", y), t("change", y);
      }
    }), n = ref(""), g = computed(() => l.disabled), s = computed(() => {
      const y = l.totalPages, $ = r.value, I = l.visiblePageCount;
      if (y <= I)
        return Array.from({ length: y }, (D, L) => L + 1);
      const V = Math.floor(I / 2);
      let A = $ - V, T = $ + V;
      A < 1 && (T = Math.min(y, T + (1 - A)), A = 1), T > y && (A = Math.max(1, A - (T - y)), T = y);
      const O = [];
      A > 1 && (O.push(1), A > 2 && O.push("..."));
      for (let D = A; D <= T; D++)
        O.push(D);
      return T < y && (T < y - 1 && O.push("..."), O.push(y)), O;
    }), u = (y) => {
      y >= 1 && y <= l.totalPages && y !== o.value && (o.value = y);
    }, v = () => {
      const y = Number(n.value);
      !isNaN(y) && y >= 1 && y <= l.totalPages && u(y), n.value = "";
    }, h = computed(() => {
      var y, $;
      return l.unstyled ? ((y = l.pt) == null ? void 0 : y.root) || "" : Ws({
        disabled: l.disabled,
        class: ($ = l.pt) == null ? void 0 : $.root
      });
    }), S = computed(() => {
      var y, $;
      return l.unstyled ? ((y = l.pt) == null ? void 0 : y.list) || "" : Fs({
        class: ($ = l.pt) == null ? void 0 : $.list
      });
    }), c = computed(() => {
      var y, $;
      return l.unstyled ? ((y = l.pt) == null ? void 0 : y.item) || "" : Hs({
        class: ($ = l.pt) == null ? void 0 : $.item
      });
    }), w = (y, $) => {
      var I, V, A, T, O, D, L, Z, W, B, E, M;
      return l.unstyled ? $ === "first" ? ((I = l.pt) == null ? void 0 : I.firstButton) || "" : $ === "prev" ? ((V = l.pt) == null ? void 0 : V.prevButton) || "" : $ === "next" ? ((A = l.pt) == null ? void 0 : A.nextButton) || "" : $ === "last" ? ((T = l.pt) == null ? void 0 : T.lastButton) || "" : y === o.value ? ((O = l.pt) == null ? void 0 : O.activeButton) || "" : ((D = l.pt) == null ? void 0 : D.button) || "" : Ns({
        variant: l.variant,
        size: l.size,
        shape: l.shape,
        active: y === o.value,
        disabled: l.disabled,
        class: y === o.value ? (L = l.pt) == null ? void 0 : L.activeButton : $ === "first" ? (Z = l.pt) == null ? void 0 : Z.firstButton : $ === "prev" ? (W = l.pt) == null ? void 0 : W.prevButton : $ === "next" ? (B = l.pt) == null ? void 0 : B.nextButton : $ === "last" ? (E = l.pt) == null ? void 0 : E.lastButton : (M = l.pt) == null ? void 0 : M.button
      });
    }, x = computed(() => {
      var y, $;
      return l.unstyled ? ((y = l.pt) == null ? void 0 : y.ellipsis) || "" : Gs({
        size: l.size,
        class: ($ = l.pt) == null ? void 0 : $.ellipsis
      });
    }), i = computed(() => {
      var y, $;
      return l.unstyled ? ((y = l.pt) == null ? void 0 : y.jumper) || "" : Ks({
        class: ($ = l.pt) == null ? void 0 : $.jumper
      });
    }), d = computed(() => {
      var y, $;
      return l.unstyled ? ((y = l.pt) == null ? void 0 : y.jumperInput) || "" : Ys({
        size: l.size,
        class: ($ = l.pt) == null ? void 0 : $.jumperInput
      });
    }), k = computed(() => {
      var y, $;
      return l.unstyled ? ((y = l.pt) == null ? void 0 : y.jumperButton) || "" : Us({
        size: l.size,
        class: ($ = l.pt) == null ? void 0 : $.jumperButton
      });
    });
    return (y, $) => (openBlock(), createElementBlock("nav", {
      class: normalizeClass(h.value),
      "aria-label": "分页导航"
    }, [
      createElementVNode("ul", {
        class: normalizeClass(S.value)
      }, [
        e.showEndButtons ? (openBlock(), createElementBlock("li", {
          key: 0,
          class: normalizeClass(c.value)
        }, [
          createElementVNode("button", {
            class: normalizeClass(w(1, "first")),
            onClick: $[0] || ($[0] = (I) => u(1)),
            disabled: g.value || o.value === 1,
            "aria-label": "首页"
          }, [
            renderSlot(y.$slots, "first-button", {}, () => [
              $[5] || ($[5] = createElementVNode("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }, [
                createElementVNode("polyline", { points: "11 17 6 12 11 7" }),
                createElementVNode("polyline", { points: "18 17 13 12 18 7" })
              ], -1))
            ])
          ], 10, qs)
        ], 2)) : createCommentVNode("", true),
        e.showPrevNextButtons ? (openBlock(), createElementBlock("li", {
          key: 1,
          class: normalizeClass(c.value)
        }, [
          createElementVNode("button", {
            class: normalizeClass(w(o.value - 1, "prev")),
            onClick: $[1] || ($[1] = (I) => u(o.value - 1)),
            disabled: g.value || o.value === 1,
            "aria-label": "上一页"
          }, [
            renderSlot(y.$slots, "prev-button", {}, () => [
              $[6] || ($[6] = createElementVNode("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }, [
                createElementVNode("polyline", { points: "15 18 9 12 15 6" })
              ], -1))
            ])
          ], 10, Js)
        ], 2)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(s.value, (I, V) => (openBlock(), createElementBlock(Fragment, { key: V }, [
          I !== "..." ? (openBlock(), createElementBlock("li", {
            key: 0,
            class: normalizeClass(c.value)
          }, [
            createElementVNode("button", {
              class: normalizeClass(w(Number(I))),
              onClick: (A) => u(Number(I)),
              disabled: g.value,
              "aria-current": o.value === I ? "page" : void 0
            }, toDisplayString(I), 11, Qs)
          ], 2)) : (openBlock(), createElementBlock("li", {
            key: 1,
            class: normalizeClass(c.value)
          }, [
            createElementVNode("span", {
              class: normalizeClass(x.value)
            }, "...", 2)
          ], 2))
        ], 64))), 128)),
        e.showPrevNextButtons ? (openBlock(), createElementBlock("li", {
          key: 2,
          class: normalizeClass(c.value)
        }, [
          createElementVNode("button", {
            class: normalizeClass(w(o.value + 1, "next")),
            onClick: $[2] || ($[2] = (I) => u(o.value + 1)),
            disabled: g.value || o.value === e.totalPages,
            "aria-label": "下一页"
          }, [
            renderSlot(y.$slots, "next-button", {}, () => [
              $[7] || ($[7] = createElementVNode("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }, [
                createElementVNode("polyline", { points: "9 18 15 12 9 6" })
              ], -1))
            ])
          ], 10, _s)
        ], 2)) : createCommentVNode("", true),
        e.showEndButtons ? (openBlock(), createElementBlock("li", {
          key: 3,
          class: normalizeClass(c.value)
        }, [
          createElementVNode("button", {
            class: normalizeClass(w(e.totalPages, "last")),
            onClick: $[3] || ($[3] = (I) => u(e.totalPages)),
            disabled: g.value || o.value === e.totalPages,
            "aria-label": "尾页"
          }, [
            renderSlot(y.$slots, "last-button", {}, () => [
              $[8] || ($[8] = createElementVNode("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }, [
                createElementVNode("polyline", { points: "13 17 18 12 13 7" }),
                createElementVNode("polyline", { points: "6 17 11 12 6 7" })
              ], -1))
            ])
          ], 10, ei)
        ], 2)) : createCommentVNode("", true),
        e.showJumper ? (openBlock(), createElementBlock("li", {
          key: 4,
          class: normalizeClass(i.value)
        }, [
          $[9] || ($[9] = createElementVNode("span", null, "前往", -1)),
          withDirectives(createElementVNode("input", {
            class: normalizeClass(d.value),
            type: "number",
            "onUpdate:modelValue": $[4] || ($[4] = (I) => n.value = I),
            min: "1",
            max: e.totalPages,
            disabled: g.value,
            onKeyup: withKeys(v, ["enter"])
          }, null, 42, ti), [
            [vModelText, n.value]
          ]),
          $[10] || ($[10] = createElementVNode("span", null, "页", -1)),
          createElementVNode("button", {
            class: normalizeClass(k.value),
            onClick: v,
            disabled: g.value
          }, " 跳转 ", 10, li)
        ], 2)) : createCommentVNode("", true)
      ], 2)
    ], 2));
  }
}), ri = le(ai), oi = R({
  base: "w-full",
  variants: {
    unstyled: {
      true: "",
      false: ""
    }
  },
  defaultVariants: {
    unstyled: false
  }
}), ni = R({
  base: "w-full overflow-hidden",
  variants: {
    size: {
      sm: "h-1.5",
      md: "h-2.5",
      lg: "h-4"
    },
    shape: {
      flat: "rounded-none",
      rounded: "rounded",
      pill: "rounded-full"
    },
    unstyled: {
      true: "",
      false: "bg-gray-200 dark:bg-gray-700"
    }
  },
  defaultVariants: {
    size: "md",
    shape: "rounded",
    unstyled: false
  }
}), si = R({
  base: "h-full transition-all",
  variants: {
    variant: {
      default: "bg-blue-500",
      success: "bg-green-500",
      warning: "bg-yellow-500",
      danger: "bg-red-500",
      info: "bg-gray-500"
    },
    striped: {
      true: "bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:1rem_1rem]",
      false: ""
    },
    animated: {
      true: "animate-progress",
      false: ""
    },
    indeterminate: {
      true: "animate-indeterminate w-1/3",
      false: ""
    },
    unstyled: {
      true: "",
      false: ""
    }
  },
  defaultVariants: {
    variant: "default",
    striped: false,
    animated: false,
    indeterminate: false,
    unstyled: false
  }
}), ii = R({
  base: "text-right text-sm font-medium",
  variants: {
    variant: {
      default: "text-blue-700 dark:text-blue-500",
      success: "text-green-700 dark:text-green-500",
      warning: "text-yellow-700 dark:text-yellow-500",
      danger: "text-red-700 dark:text-red-500",
      info: "text-gray-700 dark:text-gray-500"
    },
    unstyled: {
      true: "",
      false: ""
    }
  },
  defaultVariants: {
    variant: "default",
    unstyled: false
  }
}), ui = {
  /**
   * 进度变化时触发
   */
  "update:value": (e) => typeof e == "number"
}, di = (e) => {
  const a = computed(() => {
    if (e.indeterminate)
      return 0;
    const r = Math.max(0, Math.min(e.value || 0, e.max || 100)), o = Math.max(1, e.max || 100);
    return Math.round(r / o * 100);
  }), l = computed(() => `${a.value}%`), t = computed(() => {
    if (!e.indeterminate)
      return `width: ${a.value}%`;
  });
  return {
    percentage: a,
    formattedPercentage: l,
    progressWidth: t
  };
}, ci = ["aria-valuenow"], fi = /* @__PURE__ */ defineComponent({
  name: "ZProgress",
  __name: "index",
  props: {
    value: { default: 0 },
    max: { default: 100 },
    showText: { type: Boolean, default: false },
    variant: { default: "default" },
    size: { default: "md" },
    shape: { default: "rounded" },
    striped: { type: Boolean, default: false },
    animated: { type: Boolean, default: false },
    indeterminate: { type: Boolean, default: false },
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  emits: ui,
  setup(e) {
    const a = e, { percentage: l, formattedPercentage: t, progressWidth: r } = di(a), o = computed(() => {
      var u, v;
      return a.unstyled ? ((u = a.pt) == null ? void 0 : u.root) || "" : oi({
        unstyled: a.unstyled,
        class: (v = a.pt) == null ? void 0 : v.root
      });
    }), n = computed(() => {
      var u, v;
      return a.unstyled ? ((u = a.pt) == null ? void 0 : u.container) || "" : ni({
        size: a.size,
        shape: a.shape,
        unstyled: a.unstyled,
        class: (v = a.pt) == null ? void 0 : v.container
      });
    }), g = computed(() => {
      var u, v;
      return a.unstyled ? ((u = a.pt) == null ? void 0 : u.bar) || "" : si({
        variant: a.variant,
        striped: a.striped,
        animated: a.animated,
        indeterminate: a.indeterminate,
        unstyled: a.unstyled,
        class: (v = a.pt) == null ? void 0 : v.bar
      });
    }), s = computed(() => {
      var u, v;
      return a.unstyled ? ((u = a.pt) == null ? void 0 : u.text) || "" : ii({
        variant: a.variant,
        unstyled: a.unstyled,
        class: (v = a.pt) == null ? void 0 : v.text
      });
    });
    return (u, v) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(o.value)
    }, [
      createElementVNode("div", {
        class: normalizeClass(n.value)
      }, [
        createElementVNode("div", {
          class: normalizeClass(g.value),
          style: normalizeStyle(unref(r)),
          role: "progressbar",
          "aria-valuenow": e.indeterminate ? void 0 : unref(l),
          "aria-valuemin": "0",
          "aria-valuemax": "100"
        }, null, 14, ci)
      ], 2),
      e.showText ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(s.value)
      }, [
        renderSlot(u.$slots, "text", {}, () => [
          createTextVNode(toDisplayString(unref(t)), 1)
        ])
      ], 2)) : createCommentVNode("", true)
    ], 2));
  }
}), vi = le(fi), gi = R({
  base: "flex",
  variants: {},
  defaultVariants: {}
}), bi = R({
  base: "flex flex-wrap items-center space-x-1 md:space-x-2",
  variants: {},
  defaultVariants: {}
}), pi = R({
  base: "mx-1 text-gray-400",
  variants: {},
  defaultVariants: {}
}), mi = R({
  base: "inline-flex items-center text-sm font-medium",
  variants: {
    disabled: {
      true: "text-gray-400 pointer-events-none cursor-not-allowed",
      false: "cursor-pointer"
    },
    active: {
      true: "text-gray-800 font-semibold",
      false: "text-gray-500 hover:text-gray-700"
    }
  },
  defaultVariants: {
    disabled: false,
    active: false
  }
}), yi = R({
  base: "inline-flex items-center",
  variants: {},
  defaultVariants: {}
}), sl = Symbol("breadcrumb"), hi = (e) => {
  const a = ref(null);
  return provide(sl, {
    separator: e.separator || "/",
    separatorIcon: e.separatorIcon || ""
  }), {
    _ref: a
  };
}, wi = () => {
  const e = inject(
    sl,
    {
      separator: "/",
      separatorIcon: ""
    }
  );
  return {
    _ref: ref(null),
    breadcrumbContext: e
  };
}, xi = /* @__PURE__ */ defineComponent({
  name: "ZBreadcrumb",
  __name: "breadcrumb",
  props: {
    separator: { default: "/" },
    separatorIcon: { default: "" },
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  setup(e, { expose: a }) {
    const l = e, { _ref: t } = hi(l), r = computed(() => {
      var n, g;
      return l.unstyled ? ((n = l.pt) == null ? void 0 : n.root) || "" : gi({
        class: (g = l.pt) == null ? void 0 : g.root
      });
    }), o = computed(() => {
      var n, g;
      return l.unstyled ? ((n = l.pt) == null ? void 0 : n.list) || "" : bi({
        class: (g = l.pt) == null ? void 0 : g.list
      });
    });
    return a({
      _ref: t
    }), (n, g) => (openBlock(), createElementBlock("nav", {
      class: normalizeClass(r.value),
      ref_key: "_ref",
      ref: t
    }, [
      createElementVNode("ol", {
        class: normalizeClass(o.value)
      }, [
        renderSlot(n.$slots, "default")
      ], 2)
    ], 2));
  }
}), ki = {
  click: (e) => e instanceof MouseEvent
}, Ci = ["href"], Si = /* @__PURE__ */ defineComponent({
  name: "ZBreadcrumbItem",
  __name: "breadcrumb-item",
  props: {
    href: { default: "" },
    disabled: { type: Boolean, default: false },
    active: { type: Boolean, default: false },
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  emits: ki,
  setup(e, { expose: a, emit: l }) {
    const t = l, r = e, { _ref: o, breadcrumbContext: n } = wi(), g = ref(false), s = () => {
      if (o.value) {
        const w = o.value.parentElement;
        w && (g.value = w.firstElementChild === o.value);
      }
    };
    onMounted(() => {
      s();
    });
    const u = (w) => {
      if (r.disabled) {
        w.preventDefault();
        return;
      }
      t("click", w);
    }, v = computed(() => {
      var w, x;
      return r.unstyled ? ((w = r.pt) == null ? void 0 : w.root) || "" : mi({
        disabled: r.disabled,
        active: r.active,
        class: (x = r.pt) == null ? void 0 : x.root
      });
    }), h = computed(() => {
      var w;
      return r.unstyled ? ((w = r.pt) == null ? void 0 : w.separator) || "" : pi();
    }), S = computed(() => {
      var w, x;
      return r.unstyled ? ((w = r.pt) == null ? void 0 : w.link) || "" : yi({
        class: (x = r.pt) == null ? void 0 : x.link
      });
    }), c = computed(() => {
      var w;
      return r.unstyled && ((w = r.pt) == null ? void 0 : w.content) || "";
    });
    return a({
      _ref: o
    }), (w, x) => (openBlock(), createElementBlock("li", {
      class: normalizeClass(v.value),
      ref_key: "_ref",
      ref: o
    }, [
      w.$slots.separator ? renderSlot(w.$slots, "separator", {}, void 0, void 0, 0) : unref(n).separatorIcon ? (openBlock(), createElementBlock("span", {
        key: 1,
        class: normalizeClass(h.value)
      }, [
        (openBlock(), createBlock(resolveDynamicComponent(unref(n).separatorIcon)))
      ], 2)) : g.value ? createCommentVNode("", true) : (openBlock(), createElementBlock("span", {
        key: 2,
        class: normalizeClass(h.value)
      }, toDisplayString(unref(n).separator), 3)),
      e.href && !e.disabled && !e.active ? (openBlock(), createElementBlock("a", {
        key: 3,
        href: e.href,
        class: normalizeClass(S.value),
        onClick: u
      }, [
        renderSlot(w.$slots, "default")
      ], 10, Ci)) : (openBlock(), createElementBlock("span", {
        key: 4,
        class: normalizeClass(c.value)
      }, [
        renderSlot(w.$slots, "default")
      ], 2))
    ], 2));
  }
}), il = le(xi, {
  ZBreadcrumbItem: Si
}), zi = il.ZBreadcrumbItem, ul = R({
  slots: {
    root: "relative w-full h-full flex",
    wrapper: "flex flex-grow",
    panel: "flex flex-grow overflow-auto",
    gutter: [
      "flex items-center justify-center",
      "bg-gray-100 dark:bg-gray-700",
      "transition-colors duration-200",
      "hover:bg-gray-200 dark:hover:bg-gray-600",
      "focus:outline-none focus:ring-2 focus:ring-blue-500 focus-visible:z-10"
    ],
    gutterHandle: [
      "flex items-center justify-center",
      "w-full h-full",
      "cursor-col-resize"
    ],
    gutterIcon: ["flex-shrink-0", "text-gray-400 dark:text-gray-500"]
  },
  variants: {
    direction: {
      horizontal: {
        root: "flex-row",
        gutter: "w-1 cursor-col-resize"
      },
      vertical: {
        root: "flex-col",
        gutter: "h-1 cursor-row-resize"
      }
    },
    size: {
      sm: {
        gutter: "horizontal:w-0.5 vertical:h-0.5"
      },
      md: {
        gutter: "horizontal:w-1 vertical:h-1"
      },
      lg: {
        gutter: "horizontal:w-2 vertical:h-2"
      }
    },
    solid: {
      true: {
        gutter: "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
      }
    },
    dotted: {
      true: {
        gutter: "border-dotted border-gray-300 dark:border-gray-600 bg-transparent"
      }
    },
    dashed: {
      true: {
        gutter: "border-dashed border-gray-300 dark:border-gray-600 bg-transparent"
      }
    },
    disabled: {
      true: {
        gutter: "cursor-default opacity-50",
        gutterHandle: "cursor-default"
      }
    }
  },
  compoundVariants: [
    {
      direction: "horizontal",
      dotted: true,
      class: {
        gutter: "border-l border-r"
      }
    },
    {
      direction: "vertical",
      dotted: true,
      class: {
        gutter: "border-t border-b"
      }
    },
    {
      direction: "horizontal",
      dashed: true,
      class: {
        gutter: "border-l border-r"
      }
    },
    {
      direction: "vertical",
      dashed: true,
      class: {
        gutter: "border-t border-b"
      }
    }
  ],
  defaultVariants: {
    direction: "horizontal",
    size: "md",
    solid: false,
    dotted: false,
    dashed: false,
    disabled: false
  }
}), $i = {
  "update:panels": (e) => Array.isArray(e),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  "resize-start": (e) => true,
  resize: (e) => Array.isArray(e),
  "resize-end": (e) => Array.isArray(e),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  collapse: (e, a) => true,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  expand: (e, a) => true
}, Bi = {
  "update:size": (e) => typeof e == "string",
  "update:collapsed": (e) => typeof e == "boolean"
}, Vi = (e, a) => {
  const l = ref(null), t = ref([]), r = ref([]), o = ref(false), n = ref(0), g = ref(-1), s = reactive(e.panels || []), u = computed(() => e.direction !== "vertical"), v = (V, A) => {
    t.value[A] = V;
  }, h = (V, A) => {
    r.value[A] = V;
  }, S = () => {
    if (!l.value || t.value.length === 0) return;
    const V = u.value ? l.value.clientWidth : l.value.clientHeight;
    if (!e.panels || e.panels.length === 0) {
      const A = `${100 / t.value.length}%`;
      t.value.forEach((T, O) => {
        s[O] = s[O] || {}, s[O].size = A, s[O].resizable = s[O].resizable !== false;
      });
      return;
    }
    e.panels.forEach((A, T) => {
      if (T < t.value.length)
        if (s[T] = { ...A }, A.size && A.size.endsWith("%")) {
          const O = parseFloat(A.size) / 100, D = Math.floor(V * O);
          t.value[T].style[u.value ? "width" : "height"] = `${D}px`;
        } else A.size && (t.value[T].style[u.value ? "width" : "height"] = A.size);
    }), a("update:panels", [...s]);
  }, c = (V, A) => {
    var Z, W;
    if (!e.resizable) return;
    const T = A, O = A + 1, D = ((Z = s[T]) == null ? void 0 : Z.resizable) !== false, L = ((W = s[O]) == null ? void 0 : W.resizable) !== false;
    if (!(!D && !L)) {
      if (V.preventDefault(), o.value = true, g.value = A, V instanceof MouseEvent)
        n.value = u.value ? V.clientX : V.clientY;
      else {
        const B = V.touches[0];
        n.value = u.value ? B.clientX : B.clientY;
      }
      window.addEventListener("mousemove", w), window.addEventListener("mouseup", d), window.addEventListener("touchmove", x), window.addEventListener("touchend", k), a("resize-start", V);
    }
  }, w = (V) => {
    o.value && i(u.value ? V.clientX : V.clientY);
  }, x = (V) => {
    if (!o.value) return;
    const A = V.touches[0];
    i(u.value ? A.clientX : A.clientY);
  }, i = (V) => {
    var se, H, J, re;
    if (!o.value || !l.value) return;
    const A = g.value, T = A, O = A + 1;
    if (T < 0 || O >= t.value.length || !t.value[T] || !t.value[O])
      return;
    const D = t.value[T], L = t.value[O], Z = V - n.value;
    if (Z === 0) return;
    const W = u.value ? D.offsetWidth : D.offsetHeight, B = u.value ? L.offsetWidth : L.offsetHeight, E = (se = s[T]) != null && se.minSize ? I(
      s[T].minSize,
      l.value,
      u.value
    ) : 0, M = (H = s[O]) != null && H.minSize ? I(
      s[O].minSize,
      l.value,
      u.value
    ) : 0, N = (J = s[T]) != null && J.maxSize ? I(
      s[T].maxSize,
      l.value,
      u.value
    ) : 1 / 0, j = (re = s[O]) != null && re.maxSize ? I(
      s[O].maxSize,
      l.value,
      u.value
    ) : 1 / 0;
    let Y = W + Z, X = B - Z;
    Y < E ? (Y = E, X = W + B - E) : Y > N && (Y = N, X = W + B - N), X < M ? (X = M, Y = W + B - M) : X > j && (X = j, Y = W + B - j), u.value ? (D.style.width = `${Y}px`, L.style.width = `${X}px`) : (D.style.height = `${Y}px`, L.style.height = `${X}px`), s[T] = {
      ...s[T],
      size: `${Y}px`
    }, s[O] = {
      ...s[O],
      size: `${X}px`
    }, n.value = V, a("resize", [...s]);
  }, d = () => {
    y();
  }, k = () => {
    y();
  }, y = () => {
    o.value && (o.value = false, g.value = -1, window.removeEventListener("mousemove", w), window.removeEventListener("mouseup", d), window.removeEventListener("touchmove", x), window.removeEventListener("touchend", k), a("resize-end", [...s]), a("update:panels", [...s]));
  }, $ = (V) => {
    if (V < 0 || V >= t.value.length) return;
    const A = t.value[V], T = s[V];
    if (!T.collapsible) return;
    if (!T.collapsed)
      T._savedSize = T.size, u.value ? A.style.width = "0" : A.style.height = "0", T.size = "0", T.collapsed = true, a("collapse", V, true);
    else {
      const D = T._savedSize || "1fr";
      u.value ? A.style.width = D : A.style.height = D, T.size = D, T.collapsed = false, a("expand", V, false);
    }
    a("update:panels", [...s]);
  }, I = (V, A, T) => {
    if (V.endsWith("px"))
      return parseFloat(V);
    if (V.endsWith("%")) {
      const O = T ? A.clientWidth : A.clientHeight;
      return parseFloat(V) / 100 * O;
    } else if (V.endsWith("rem")) {
      const O = parseFloat(
        getComputedStyle(document.documentElement).fontSize
      );
      return parseFloat(V) * O;
    } else if (V.endsWith("em")) {
      const O = parseFloat(getComputedStyle(A).fontSize);
      return parseFloat(V) * O;
    } else {
      if (V.endsWith("vh"))
        return parseFloat(V) / 100 * window.innerHeight;
      if (V.endsWith("vw"))
        return parseFloat(V) / 100 * window.innerWidth;
    }
    return parseFloat(V) || 0;
  };
  return onMounted(() => {
    S(), window.addEventListener("resize", S);
  }), onBeforeUnmount(() => {
    window.removeEventListener("resize", S), window.removeEventListener("mousemove", w), window.removeEventListener("mouseup", d), window.removeEventListener("touchmove", x), window.removeEventListener("touchend", k);
  }), {
    rootRef: l,
    panelRefs: t,
    gutterRefs: r,
    isResizing: o,
    panelSizes: s,
    isHorizontal: u,
    registerPanel: v,
    registerGutter: h,
    onGutterMouseDown: c,
    toggleCollapse: $,
    initPanelSizes: S
  };
}, Ii = ["aria-orientation"], Mi = ["onMousedown", "onTouchstart", "aria-label", "aria-controls", "onKeydown"], Ti = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    direction: { default: "horizontal" },
    size: { default: "md" },
    panels: { default: () => [] },
    solid: { type: Boolean, default: false },
    resizable: { type: Boolean, default: true },
    dotted: { type: Boolean, default: false },
    dashed: { type: Boolean, default: false },
    showIndicator: { type: Boolean, default: true },
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  emits: $i,
  setup(e, { expose: a, emit: l }) {
    const t = e, r = l, {
      rootRef: o,
      panelSizes: n,
      isHorizontal: g,
      registerPanel: s,
      registerGutter: u,
      onGutterMouseDown: v,
      toggleCollapse: h,
      initPanelSizes: S
    } = Vi(t, r), c = computed(() => {
      var $;
      const d = useSlots(), k = Object.keys(d).filter((I) => I.startsWith("panel-")).length / 2, y = (($ = t.panels) == null ? void 0 : $.length) || 0;
      return Math.max(k, y, 2);
    }), w = (d) => {
      const k = n[d] || {}, y = g.value ? "width" : "height", $ = {};
      return k.size && ($[y] = k.size), k.collapsed && ($[y] = "0", $.overflow = "hidden"), $;
    }, x = (d, k, y) => {
      if (!t.resizable) return;
      d.preventDefault();
      const $ = d.shiftKey ? 10 : 1, I = n[k], V = n[k + 1];
      if (!I || !V) return;
      const A = parseFloat(I.size || "0"), T = parseFloat(V.size || "0"), O = $ * y;
      I.size = `${A + O}px`, V.size = `${T - O}px`, S();
    }, i = computed(() => {
      var A, T, O, D, L, Z;
      if (t.unstyled)
        return {
          root: ((A = t.pt) == null ? void 0 : A.root) || "",
          wrapper: ((T = t.pt) == null ? void 0 : T.wrapper) || "",
          panel: ((O = t.pt) == null ? void 0 : O.panel) || "",
          gutter: ((D = t.pt) == null ? void 0 : D.gutter) || "",
          gutterHandle: ((L = t.pt) == null ? void 0 : L.gutterHandle) || "",
          gutterIcon: ((Z = t.pt) == null ? void 0 : Z.gutterIcon) || ""
        };
      const { root: d, wrapper: k, panel: y, gutter: $, gutterHandle: I, gutterIcon: V } = ul({
        direction: t.direction,
        size: t.size,
        solid: t.solid,
        dotted: t.dotted,
        dashed: t.dashed,
        disabled: !t.resizable
      });
      return {
        root: d(),
        wrapper: k(),
        panel: y(),
        gutter: $(),
        gutterHandle: I(),
        gutterIcon: V()
      };
    });
    return a({
      toggleCollapse: h,
      initPanelSizes: S
    }), provide("splitter", {
      registerPanel: s,
      direction: t.direction
    }), (d, k) => (openBlock(), createElementBlock("div", {
      ref_key: "rootRef",
      ref: o,
      class: normalizeClass(i.value.root),
      role: "separator",
      "aria-orientation": t.direction === "vertical" ? "horizontal" : "vertical"
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(c.value, (y, $) => (openBlock(), createElementBlock(Fragment, { key: $ }, [
        $ < c.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          ref_for: true,
          ref: (I) => I && unref(s)(I, $),
          class: normalizeClass(i.value.wrapper),
          style: normalizeStyle(w($))
        }, [
          renderSlot(d.$slots, `panel-${$}`, {}, () => [
            createElementVNode("div", {
              class: normalizeClass(i.value.panel)
            }, [
              renderSlot(d.$slots, `panel-${$}-content`, {}, () => [
                createTextVNode("Panel " + toDisplayString($ + 1), 1)
              ])
            ], 2)
          ])
        ], 6)) : createCommentVNode("", true),
        $ < c.value - 1 ? (openBlock(), createElementBlock("div", {
          key: 1,
          ref_for: true,
          ref: (I) => I && unref(u)(I, $),
          class: normalizeClass(i.value.gutter),
          onMousedown: (I) => unref(v)(I, $),
          onTouchstart: (I) => unref(v)(I, $),
          tabindex: "0",
          "aria-label": `调整${unref(g) ? "宽度" : "高度"}`,
          "aria-controls": `panel-${$},panel-${$ + 1}`,
          onKeydown: [
            withKeys((I) => x(I, $, -1), ["left"]),
            withKeys((I) => x(I, $, 1), ["right"]),
            withKeys((I) => x(I, $, -1), ["up"]),
            withKeys((I) => x(I, $, 1), ["down"])
          ]
        }, [
          renderSlot(d.$slots, `gutter-${$}`, {}, () => [
            createElementVNode("div", {
              class: normalizeClass(i.value.gutterHandle)
            }, [
              renderSlot(d.$slots, `gutter-${$}-handle`, {}, () => [
                unref(g) ? (openBlock(), createElementBlock("svg", {
                  key: 0,
                  class: normalizeClass(i.value.gutterIcon),
                  viewBox: "0 0 24 24",
                  width: "24",
                  height: "24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round"
                }, [...k[0] || (k[0] = [
                  createElementVNode("line", {
                    x1: "12",
                    y1: "5",
                    x2: "12",
                    y2: "19"
                  }, null, -1),
                  createElementVNode("line", {
                    x1: "8",
                    y1: "9",
                    x2: "8",
                    y2: "15"
                  }, null, -1),
                  createElementVNode("line", {
                    x1: "16",
                    y1: "9",
                    x2: "16",
                    y2: "15"
                  }, null, -1)
                ])], 2)) : (openBlock(), createElementBlock("svg", {
                  key: 1,
                  class: normalizeClass(i.value.gutterIcon),
                  viewBox: "0 0 24 24",
                  width: "24",
                  height: "24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round"
                }, [...k[1] || (k[1] = [
                  createElementVNode("line", {
                    x1: "5",
                    y1: "12",
                    x2: "19",
                    y2: "12"
                  }, null, -1),
                  createElementVNode("line", {
                    x1: "9",
                    y1: "8",
                    x2: "15",
                    y2: "8"
                  }, null, -1),
                  createElementVNode("line", {
                    x1: "9",
                    y1: "16",
                    x2: "15",
                    y2: "16"
                  }, null, -1)
                ])], 2))
              ])
            ], 2)
          ])
        ], 42, Mi)) : createCommentVNode("", true)
      ], 64))), 128))
    ], 10, Ii));
  }
}), Di = /* @__PURE__ */ defineComponent({
  __name: "SplitterPanel",
  props: {
    size: { default: "1fr" },
    minSize: { default: "0" },
    maxSize: { default: "1fr" },
    resizable: { type: Boolean, default: true },
    collapsible: { type: Boolean, default: false },
    collapsed: { type: Boolean, default: false },
    unstyled: { type: Boolean },
    pt: {}
  },
  emits: Bi,
  setup(e, { emit: a }) {
    const l = e, t = a, r = ref(null), o = inject("splitter", {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      registerPanel: (s, u) => {
      },
      direction: "horizontal",
      index: -1
    });
    watch(
      () => l.size,
      (s) => {
        s !== void 0 && r.value && (o.direction === "horizontal" ? r.value.style.width = s : r.value.style.height = s);
      }
    ), watch(
      () => l.collapsed,
      (s) => {
        t("update:collapsed", s);
      }
    ), onMounted(() => {
      r.value && o.index >= 0 && o.registerPanel(r.value, o.index);
    });
    const n = computed(() => {
      var s;
      return l.unstyled ? ((s = l.pt) == null ? void 0 : s.root) || "" : ul().panel();
    }), g = computed(() => {
      var s;
      return l.unstyled ? ((s = l.pt) == null ? void 0 : s.content) || "" : "h-full w-full";
    });
    return (s, u) => (openBlock(), createElementBlock("div", {
      ref_key: "panelRef",
      ref: r,
      class: normalizeClass(n.value)
    }, [
      createElementVNode("div", {
        class: normalizeClass(g.value)
      }, [
        renderSlot(s.$slots, "default")
      ], 2)
    ], 2));
  }
}), Ri = le(Ti), Ei = le(Di), Li = (e, a) => {
  var w, x;
  const l = ref(((w = e.modelValue) == null ? void 0 : w[0]) || null), t = ref(((x = e.modelValue) == null ? void 0 : x[1]) || null), r = ref((l.value || /* @__PURE__ */ new Date()).getMonth()), o = ref((l.value || /* @__PURE__ */ new Date()).getFullYear()), n = ref("start"), g = computed(() => {
    const i = e.locale || "default", d = e.firstDayOfWeek || 0, k = [];
    for (let y = 0; y < 7; y++) {
      const $ = (y + d) % 7;
      k.push(
        new Intl.DateTimeFormat(i, { weekday: "short" }).format(
          new Date(2021, 0, $ + 3)
          // 2021-01-03 is a Sunday
        )
      );
    }
    return k;
  }), s = computed(() => {
    const i = o.value, d = r.value, k = new Date(i, d, 1).getDay(), y = new Date(i, d + 1, 0).getDate(), $ = e.firstDayOfWeek || 0, I = [], V = new Date(i, d, 0).getDate(), A = (k - $ + 7) % 7;
    for (let D = V - A + 1; D <= V; D++)
      I.push({
        date: new Date(i, d - 1, D),
        day: D,
        isCurrentMonth: false,
        isToday: false,
        isSelected: false,
        isRangeStart: false,
        isRangeEnd: false,
        isInRange: false,
        isDisabled: false
      });
    const T = /* @__PURE__ */ new Date();
    for (let D = 1; D <= y; D++) {
      const L = new Date(i, d, D), Z = T.getDate() === D && T.getMonth() === d && T.getFullYear() === i, W = l.value && L.getDate() === l.value.getDate() && L.getMonth() === l.value.getMonth() && L.getFullYear() === l.value.getFullYear(), B = t.value && L.getDate() === t.value.getDate() && L.getMonth() === t.value.getMonth() && L.getFullYear() === t.value.getFullYear(), E = l.value && t.value && L > l.value && L < t.value, M = W || B, N = e.disabled || e.min && L < e.min || e.max && L > e.max;
      I.push({
        date: L,
        day: D,
        isCurrentMonth: true,
        isToday: Z,
        isSelected: M,
        isRangeStart: W,
        isRangeEnd: B,
        isInRange: E,
        isDisabled: N
      });
    }
    const O = 42 - I.length;
    for (let D = 1; D <= O; D++) {
      const L = new Date(i, d + 1, D), Z = l.value && L.getDate() === l.value.getDate() && L.getMonth() === l.value.getMonth() && L.getFullYear() === l.value.getFullYear(), W = t.value && L.getDate() === t.value.getDate() && L.getMonth() === t.value.getMonth() && L.getFullYear() === t.value.getFullYear(), B = l.value && t.value && L > l.value && L < t.value, E = Z || W;
      I.push({
        date: L,
        day: D,
        isCurrentMonth: false,
        isToday: false,
        isSelected: E,
        isRangeStart: Z,
        isRangeEnd: W,
        isInRange: B,
        isDisabled: false
      });
    }
    return I;
  }), u = computed(() => {
    const i = e.locale || "default";
    return new Intl.DateTimeFormat(i, { month: "long" }).format(
      new Date(o.value, r.value)
    );
  }), v = () => {
    r.value === 0 ? (r.value = 11, o.value--) : r.value--;
  }, h = () => {
    r.value === 11 ? (r.value = 0, o.value++) : r.value++;
  }, S = (i) => {
    e.disabled || e.readonly || e.min && i < e.min || e.max && i > e.max || (n.value === "start" ? (l.value = i, t.value = null, n.value = "end") : (l.value && i < l.value ? (t.value = l.value, l.value = i) : t.value = i, n.value = "start"), a("update:modelValue", [l.value, t.value]), a("change", [l.value, t.value]));
  }, c = () => {
    l.value = null, t.value = null, n.value = "start", a("update:modelValue", [null, null]), a("change", [null, null]);
  };
  return watch(
    () => e.modelValue,
    (i) => {
      i && (l.value = i[0], t.value = i[1], l.value && (r.value = l.value.getMonth(), o.value = l.value.getFullYear()), n.value = t.value ? "start" : "end");
    }
  ), {
    startDate: l,
    endDate: t,
    currentMonth: r,
    currentYear: o,
    selectionMode: n,
    weekdays: g,
    daysInMonth: s,
    monthName: u,
    prevMonth: v,
    nextMonth: h,
    selectDate: S,
    resetSelection: c
  };
}, Ai = R({
  base: "w-full",
  variants: {
    unstyled: {
      false: ""
    }
  },
  defaultVariants: {
    unstyled: false
  }
}), Oi = R({
  base: "flex items-center justify-between mb-4"
}), Pi = R({
  base: "text-lg font-medium"
}), ji = R({
  base: "flex items-center space-x-1"
}), Zi = R({
  base: "p-1 rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
}), Wi = R({
  base: "grid grid-cols-7 mb-1"
}), Fi = R({
  base: "text-center text-sm font-medium text-gray-500 py-2"
}), Hi = R({
  base: "grid grid-cols-7 gap-1"
}), Ve = R({
  base: "flex items-center justify-center h-9 w-9 rounded-md text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
  variants: {
    isToday: {
      true: "border border-blue-500"
    },
    isSelected: {
      true: "bg-blue-500 text-white hover:bg-blue-600"
    },
    isRangeStart: {
      true: "bg-blue-500 text-white hover:bg-blue-600 rounded-r-none"
    },
    isRangeEnd: {
      true: "bg-blue-500 text-white hover:bg-blue-600 rounded-l-none"
    },
    isInRange: {
      true: "bg-blue-100 hover:bg-blue-200 rounded-none"
    },
    isDisabled: {
      true: "text-gray-300 cursor-not-allowed"
    },
    isAdjacent: {
      true: "text-gray-400"
    }
  },
  compoundVariants: [
    {
      isSelected: false,
      isRangeStart: false,
      isRangeEnd: false,
      isInRange: false,
      isDisabled: false,
      isAdjacent: false,
      class: "hover:bg-gray-100 cursor-pointer"
    }
  ]
}), Ni = {
  "update:modelValue": (e) => Array.isArray(e) && (e[0] === null || e[0] instanceof Date) && (e[1] === null || e[1] instanceof Date),
  change: (e) => Array.isArray(e) && (e[0] === null || e[0] instanceof Date) && (e[1] === null || e[1] instanceof Date)
}, Gi = {
  key: 0,
  class: "text-sm text-blue-500 ml-2"
}, Ki = ["disabled"], Yi = ["disabled"], Ui = ["onClick", "disabled"], Xi = {
  key: 0,
  class: "mt-4 flex justify-between"
}, qi = { class: "ml-1 font-medium" }, Ji = { class: "ml-1 font-medium" }, Qi = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    modelValue: {},
    min: {},
    max: {},
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    firstDayOfWeek: { default: 0 },
    locale: {},
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  emits: Ni,
  setup(e, { emit: a }) {
    const l = a, t = e, {
      startDate: r,
      endDate: o,
      currentYear: n,
      selectionMode: g,
      weekdays: s,
      daysInMonth: u,
      monthName: v,
      prevMonth: h,
      nextMonth: S,
      selectDate: c,
      resetSelection: w
    } = Li(t, l), x = (d) => {
      const k = t.locale || "default";
      return new Intl.DateTimeFormat(k).format(d);
    }, i = computed(() => {
      var d, k, y, $, I, V, A, T, O, D, L, Z, W, B, E, M, N, j, Y, X, se, H, J, re, ne, ve, fe, ye, ke, we, Ce, he;
      return {
        root: t.unstyled ? ((d = t.pt) == null ? void 0 : d.root) || "" : Ai({ unstyled: t.unstyled, class: (k = t.pt) == null ? void 0 : k.root }),
        header: t.unstyled ? ((y = t.pt) == null ? void 0 : y.header) || "" : Oi({ class: ($ = t.pt) == null ? void 0 : $.header }),
        title: t.unstyled ? ((I = t.pt) == null ? void 0 : I.title) || "" : Pi({ class: (V = t.pt) == null ? void 0 : V.title }),
        navigation: t.unstyled ? ((A = t.pt) == null ? void 0 : A.navigation) || "" : ji({ class: (T = t.pt) == null ? void 0 : T.navigation }),
        navButton: t.unstyled ? ((O = t.pt) == null ? void 0 : O.navButton) || "" : Zi({ class: (D = t.pt) == null ? void 0 : D.navButton }),
        weekdays: t.unstyled ? ((L = t.pt) == null ? void 0 : L.weekdays) || "" : Wi({ class: (Z = t.pt) == null ? void 0 : Z.weekdays }),
        weekday: t.unstyled ? ((W = t.pt) == null ? void 0 : W.weekday) || "" : Fi({ class: (B = t.pt) == null ? void 0 : B.weekday }),
        days: t.unstyled ? ((E = t.pt) == null ? void 0 : E.days) || "" : Hi({ class: (M = t.pt) == null ? void 0 : M.days }),
        day: t.unstyled ? ((N = t.pt) == null ? void 0 : N.day) || "" : Ve({ class: (j = t.pt) == null ? void 0 : j.day }),
        today: t.unstyled ? ((Y = t.pt) == null ? void 0 : Y.today) || "" : Ve({ isToday: true, class: (X = t.pt) == null ? void 0 : X.today }).split(" ").filter((be) => !Ve().includes(be)).join(" "),
        selected: t.unstyled ? ((se = t.pt) == null ? void 0 : se.selected) || "" : Ve({ isSelected: true, class: (H = t.pt) == null ? void 0 : H.selected }).split(" ").filter((be) => !Ve().includes(be)).join(" "),
        rangeStart: t.unstyled ? ((J = t.pt) == null ? void 0 : J.rangeStart) || "" : Ve({
          isRangeStart: true,
          class: (re = t.pt) == null ? void 0 : re.rangeStart
        }).split(" ").filter((be) => !Ve().includes(be)).join(" "),
        rangeEnd: t.unstyled ? ((ne = t.pt) == null ? void 0 : ne.rangeEnd) || "" : Ve({ isRangeEnd: true, class: (ve = t.pt) == null ? void 0 : ve.rangeEnd }).split(" ").filter((be) => !Ve().includes(be)).join(" "),
        inRange: t.unstyled ? ((fe = t.pt) == null ? void 0 : fe.inRange) || "" : Ve({ isInRange: true, class: (ye = t.pt) == null ? void 0 : ye.inRange }).split(" ").filter((be) => !Ve().includes(be)).join(" "),
        disabled: t.unstyled ? ((ke = t.pt) == null ? void 0 : ke.disabled) || "" : Ve({ isDisabled: true, class: (we = t.pt) == null ? void 0 : we.disabled }).split(" ").filter((be) => !Ve().includes(be)).join(" "),
        adjacent: t.unstyled ? ((Ce = t.pt) == null ? void 0 : Ce.adjacent) || "" : Ve({ isAdjacent: true, class: (he = t.pt) == null ? void 0 : he.adjacent }).split(" ").filter((be) => !Ve().includes(be)).join(" ")
      };
    });
    return (d, k) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(i.value.root)
    }, [
      createElementVNode("div", {
        class: normalizeClass(i.value.header)
      }, [
        createElementVNode("div", {
          class: normalizeClass(i.value.title)
        }, [
          createTextVNode(toDisplayString(unref(v)) + " " + toDisplayString(unref(n)) + " ", 1),
          unref(g) === "end" ? (openBlock(), createElementBlock("span", Gi, " (Select end date) ")) : createCommentVNode("", true)
        ], 2),
        createElementVNode("div", {
          class: normalizeClass(i.value.navigation)
        }, [
          createElementVNode("button", {
            class: normalizeClass(i.value.navButton),
            onClick: k[0] || (k[0] = //@ts-ignore
            (...y) => unref(h) && unref(h)(...y)),
            disabled: e.disabled || e.readonly
          }, [...k[3] || (k[3] = [
            createElementVNode("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, [
              createElementVNode("path", { d: "m15 18-6-6 6-6" })
            ], -1)
          ])], 10, Ki),
          createElementVNode("button", {
            class: normalizeClass(i.value.navButton),
            onClick: k[1] || (k[1] = //@ts-ignore
            (...y) => unref(S) && unref(S)(...y)),
            disabled: e.disabled || e.readonly
          }, [...k[4] || (k[4] = [
            createElementVNode("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, [
              createElementVNode("path", { d: "m9 18 6-6-6-6" })
            ], -1)
          ])], 10, Yi)
        ], 2)
      ], 2),
      createElementVNode("div", {
        class: normalizeClass(i.value.weekdays)
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(s), (y, $) => (openBlock(), createElementBlock("div", {
          key: $,
          class: normalizeClass(i.value.weekday)
        }, toDisplayString(y), 3))), 128))
      ], 2),
      createElementVNode("div", {
        class: normalizeClass(i.value.days)
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(u), (y, $) => (openBlock(), createElementBlock("button", {
          key: $,
          class: normalizeClass([
            i.value.day,
            y.isToday ? i.value.today : "",
            y.isSelected ? i.value.selected : "",
            y.isRangeStart ? i.value.rangeStart : "",
            y.isRangeEnd ? i.value.rangeEnd : "",
            y.isInRange ? i.value.inRange : "",
            y.isDisabled ? i.value.disabled : "",
            y.isCurrentMonth ? "" : i.value.adjacent
          ]),
          onClick: (I) => unref(c)(y.date),
          disabled: y.isDisabled || e.disabled || e.readonly
        }, toDisplayString(y.day), 11, Ui))), 128))
      ], 2),
      unref(r) || unref(o) ? (openBlock(), createElementBlock("div", Xi, [
        createElementVNode("div", null, [
          k[5] || (k[5] = createElementVNode("span", { class: "text-sm text-gray-500" }, "Start:", -1)),
          createElementVNode("span", qi, toDisplayString(unref(r) ? x(unref(r)) : "-"), 1)
        ]),
        createElementVNode("div", null, [
          k[6] || (k[6] = createElementVNode("span", { class: "text-sm text-gray-500" }, "End:", -1)),
          createElementVNode("span", Ji, toDisplayString(unref(o) ? x(unref(o)) : "-"), 1)
        ]),
        createElementVNode("button", {
          class: "text-sm text-red-500 hover:text-red-700",
          onClick: k[2] || (k[2] = //@ts-ignore
          (...y) => unref(w) && unref(w)(...y))
        }, " Reset ")
      ])) : createCommentVNode("", true)
    ], 2));
  }
}), _i = le(Qi), eu = R({
  base: "w-full",
  variants: {
    variant: {
      default: "",
      bordered: "border border-gray-200 divide-y divide-gray-200",
      elevated: "shadow-md divide-y divide-gray-200"
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-xl"
    },
    bordered: {
      true: "border border-gray-200",
      false: ""
    }
  },
  defaultVariants: {
    variant: "default",
    radius: "md",
    bordered: true
  }
}), tu = R({
  base: "w-full"
}), lu = R({
  base: ""
}), au = R({
  base: "flex w-full items-center justify-between py-4 px-5 text-left text-base font-medium focus:outline-none",
  variants: {
    disabled: {
      true: "cursor-not-allowed opacity-50",
      false: "cursor-pointer"
    }
  },
  defaultVariants: {
    disabled: false
  }
}), ru = R({
  base: "text-base font-medium"
}), ou = R({
  base: "text-gray-500 transition-transform duration-200",
  variants: {
    expanded: {
      true: "rotate-180",
      false: ""
    }
  },
  defaultVariants: {
    expanded: false
  }
}), nu = R({
  base: "overflow-hidden",
  variants: {
    animated: {
      true: "transition-all duration-300 ease-out",
      false: ""
    },
    expanded: {
      true: "",
      false: "h-0"
    }
  },
  defaultVariants: {
    animated: true,
    expanded: false
  }
}), su = R({
  base: "py-4 px-5"
}), iu = {
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  "update:modelValue": (e) => true,
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  change: (e) => true
}, uu = {
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  click: (e) => true,
  toggle: (e) => typeof e == "boolean"
}, du = /* @__PURE__ */ defineComponent({
  name: "ZAccordion",
  __name: "accordion",
  props: {
    multiple: { type: Boolean, default: false },
    modelValue: {},
    variant: { default: "default" },
    radius: { default: "md" },
    bordered: { type: Boolean, default: true },
    animated: { type: Boolean, default: true },
    disabled: { type: Boolean, default: false },
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  emits: iu,
  setup(e, { emit: a }) {
    const l = e, t = a, r = ref(
      Array.isArray(l.modelValue) ? l.modelValue : l.modelValue ? [l.modelValue] : []
    );
    watch(
      () => l.modelValue,
      (s) => {
        Array.isArray(s) ? r.value = s : s ? r.value = [s] : r.value = [];
      }
    );
    const o = computed(() => {
      var s, u;
      return l.unstyled ? ((s = l.pt) == null ? void 0 : s.root) || "" : eu({
        variant: l.variant,
        radius: l.radius,
        bordered: l.bordered,
        class: (u = l.pt) == null ? void 0 : u.root
      });
    }), n = (s, u) => {
      let v = [...r.value];
      if (u ? l.multiple ? v.includes(s) || v.push(s) : v = [s] : v = v.filter((h) => h !== s), r.value = v, l.multiple)
        t("update:modelValue", v), t("change", v);
      else {
        const h = v.length > 0 ? v[0] : void 0;
        t("update:modelValue", h), t("change", h);
      }
    }, g = (s) => r.value.includes(s);
    return provide("accordionContext", {
      disabled: computed(() => l.disabled),
      animated: computed(() => l.animated),
      toggleItem: n,
      isItemExpanded: g
    }), (s, u) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(o.value)
    }, [
      renderSlot(s.$slots, "default")
    ], 2));
  }
}), cu = ["aria-expanded", "aria-disabled"], fu = /* @__PURE__ */ defineComponent({
  name: "ZAccordionItem",
  __name: "accordion-item",
  props: {
    value: {},
    header: {},
    disabled: { type: Boolean, default: false },
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  emits: uu,
  setup(e, { emit: a }) {
    const l = e, t = a, r = inject("accordionContext", {
      disabled: computed(() => false),
      animated: computed(() => true),
      /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
      toggleItem: (i, d) => {
      },
      /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
      isItemExpanded: (i) => false
    }), o = computed(
      () => l.disabled || r.disabled.value
    ), n = computed(() => r.isItemExpanded(l.value)), g = ref(null);
    watch(
      () => n.value,
      (i) => {
        if (!(!r.animated.value || !g.value))
          if (i) {
            const d = g.value;
            d.style.height = "0", d.style.height = `${d.scrollHeight}px`;
            const k = () => {
              n.value && (d.style.height = ""), d.removeEventListener("transitionend", k);
            };
            d.addEventListener("transitionend", k);
          } else {
            const d = g.value, k = d.offsetHeight;
            d.style.height = `${k}px`, d.style.height = "0";
          }
      }
    );
    const s = (i) => {
      if (o.value) return;
      t("click", i);
      const d = !n.value;
      r.toggleItem(l.value, d), t("toggle", d);
    }, u = computed(() => {
      var i, d;
      return l.unstyled ? ((i = l.pt) == null ? void 0 : i.root) || "" : tu({
        class: (d = l.pt) == null ? void 0 : d.root
      });
    }), v = computed(() => {
      var i, d;
      return l.unstyled ? ((i = l.pt) == null ? void 0 : i.header) || "" : lu({
        class: (d = l.pt) == null ? void 0 : d.header
      });
    }), h = computed(() => {
      var i, d;
      return l.unstyled ? ((i = l.pt) == null ? void 0 : i.trigger) || "" : au({
        disabled: o.value,
        class: (d = l.pt) == null ? void 0 : d.trigger
      });
    }), S = computed(() => {
      var i, d;
      return l.unstyled ? ((i = l.pt) == null ? void 0 : i.title) || "" : ru({
        class: (d = l.pt) == null ? void 0 : d.title
      });
    }), c = computed(() => {
      var i, d;
      return l.unstyled ? ((i = l.pt) == null ? void 0 : i.icon) || "" : ou({
        expanded: n.value,
        class: (d = l.pt) == null ? void 0 : d.icon
      });
    }), w = computed(() => {
      var i, d;
      return l.unstyled ? ((i = l.pt) == null ? void 0 : i.content) || "" : nu({
        animated: r.animated.value,
        expanded: n.value,
        class: (d = l.pt) == null ? void 0 : d.content
      });
    }), x = computed(() => {
      var i, d;
      return l.unstyled ? ((i = l.pt) == null ? void 0 : i.contentInner) || "" : su({
        class: (d = l.pt) == null ? void 0 : d.contentInner
      });
    });
    return onMounted(() => {
      g.value && !n.value && (g.value.style.height = "0");
    }), (i, d) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(u.value)
    }, [
      createElementVNode("div", {
        class: normalizeClass(v.value)
      }, [
        createElementVNode("button", {
          type: "button",
          class: normalizeClass(h.value),
          "aria-expanded": n.value,
          "aria-disabled": o.value,
          onClick: s
        }, [
          createElementVNode("div", {
            class: normalizeClass(S.value)
          }, [
            renderSlot(i.$slots, "header", {}, () => [
              createTextVNode(toDisplayString(e.header), 1)
            ])
          ], 2),
          createElementVNode("div", {
            class: normalizeClass(c.value)
          }, [
            renderSlot(i.$slots, "icon", {}, () => [
              d[0] || (d[0] = createElementVNode("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }, [
                createElementVNode("polyline", { points: "6 9 12 15 18 9" })
              ], -1))
            ])
          ], 2)
        ], 10, cu)
      ], 2),
      createElementVNode("div", {
        class: normalizeClass(w.value),
        ref_key: "contentEl",
        ref: g
      }, [
        createElementVNode("div", {
          class: normalizeClass(x.value)
        }, [
          renderSlot(i.$slots, "default")
        ], 2)
      ], 2)
    ], 2));
  }
}), vu = le(du), gu = le(fu), bu = R({
  slots: {
    root: "relative inline-flex w-full",
    wrapper: "relative flex flex-wrap items-center gap-1 w-full rounded-md border border-gray-300 bg-white shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 dark:border-gray-600 dark:bg-gray-800",
    input: "flex-grow border-0 bg-transparent px-3 py-2 outline-none placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50 dark:text-white dark:placeholder:text-gray-400",
    prefix: "flex items-center pl-3 text-gray-500 dark:text-gray-400",
    suffix: "flex items-center pr-3 text-gray-500 dark:text-gray-400",
    tag: "inline-flex items-center gap-1 bg-gray-100 rounded py-1 px-2 m-1 text-sm dark:bg-gray-700",
    tagClose: "cursor-pointer hover:text-blue-500 dark:hover:text-blue-400",
    count: "absolute right-2 -bottom-5 text-xs text-gray-500 dark:text-gray-400"
  },
  variants: {
    size: {
      small: {
        wrapper: "min-h-8 py-1 text-sm",
        input: "text-sm py-1",
        tag: "py-0.5 px-1.5 text-xs",
        prefix: "text-sm",
        suffix: "text-sm"
      },
      default: {
        wrapper: "min-h-10",
        input: "text-base py-2",
        tag: "py-1 px-2 text-sm"
      },
      large: {
        wrapper: "min-h-12 py-2 text-lg",
        input: "text-lg py-2",
        tag: "py-1.5 px-2.5 text-base",
        prefix: "text-lg",
        suffix: "text-lg"
      }
    },
    status: {
      error: {
        wrapper: "!border-red-500 !ring-red-500/30 focus-within:!ring-red-500/30"
      },
      warning: {
        wrapper: "!border-yellow-500 !ring-yellow-500/30 focus-within:!ring-yellow-500/30"
      },
      success: {
        wrapper: "!border-green-500 !ring-green-500/30 focus-within:!ring-green-500/30"
      }
    },
    disabled: {
      true: {
        wrapper: "bg-gray-100 dark:bg-gray-700",
        input: "cursor-not-allowed"
      }
    }
  },
  defaultVariants: {
    size: "default"
  }
}), pu = { key: 0 }, mu = ["onClick"], yu = ["placeholder", "disabled", "readonly", "autofocus", "onKeydown"], hu = { key: 0 }, wu = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    modelValue: { default: () => [] },
    placeholder: { default: "" },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    size: { default: "default" },
    prefixIcon: {},
    suffixIcon: {},
    closable: { type: Boolean, default: true },
    maxCount: {},
    showCount: { type: Boolean, default: false },
    autofocus: { type: Boolean, default: false },
    status: {},
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  emits: [
    "update:modelValue",
    "change",
    "focus",
    "blur",
    "add",
    "remove"
  ],
  setup(e, { emit: a }) {
    const l = e, t = a, r = ref(null), o = ref(""), n = ref(false), g = computed(() => l.unstyled ? {
      root: () => {
        var c;
        return ((c = l.pt) == null ? void 0 : c.root) || "";
      },
      wrapper: () => {
        var c;
        return ((c = l.pt) == null ? void 0 : c.wrapper) || "";
      },
      input: () => {
        var c;
        return ((c = l.pt) == null ? void 0 : c.input) || "";
      },
      prefix: () => {
        var c;
        return ((c = l.pt) == null ? void 0 : c.prefix) || "";
      },
      suffix: () => {
        var c;
        return ((c = l.pt) == null ? void 0 : c.suffix) || "";
      },
      tag: () => {
        var c;
        return ((c = l.pt) == null ? void 0 : c.tag) || "";
      },
      tagClose: () => {
        var c;
        return ((c = l.pt) == null ? void 0 : c.tagClose) || "";
      },
      count: () => {
        var c;
        return ((c = l.pt) == null ? void 0 : c.count) || "";
      }
    } : bu({
      size: l.size,
      status: l.status,
      disabled: l.disabled
    })), s = () => {
      if (!o.value || l.disabled || l.readonly || l.maxCount && l.modelValue.length >= l.maxCount) return;
      const c = [...l.modelValue];
      c.includes(o.value) || (c.push(o.value), t("update:modelValue", c), t("change", c), t("add", o.value)), o.value = "";
    }, u = (c) => {
      if (l.disabled || l.readonly) return;
      const w = [...l.modelValue], x = w[c];
      w.splice(c, 1), t("update:modelValue", w), t("change", w), t("remove", x, c);
    }, v = () => {
      if (o.value === "" && l.modelValue.length > 0 && !l.disabled && !l.readonly) {
        const c = [...l.modelValue], w = c.length - 1, x = c[w];
        c.pop(), t("update:modelValue", c), t("change", c), t("remove", x, w);
      }
    }, h = (c) => {
      n.value = true, t("focus", c);
    }, S = (c) => {
      n.value = false, o.value && s(), t("blur", c);
    };
    return watch(
      () => l.autofocus,
      (c) => {
        c && r.value && r.value.focus();
      },
      { immediate: true }
    ), (c, w) => {
      var x, i;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(g.value.root())
      }, [
        createElementVNode("div", {
          class: normalizeClass(g.value.wrapper())
        }, [
          c.$slots.prefix || e.prefixIcon ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(g.value.prefix())
          }, [
            renderSlot(c.$slots, "prefix", {}, () => [
              e.prefixIcon ? (openBlock(), createElementBlock("span", pu, toDisplayString(e.prefixIcon), 1)) : createCommentVNode("", true)
            ])
          ], 2)) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(e.modelValue, (d, k) => (openBlock(), createElementBlock("div", {
            key: k,
            class: normalizeClass(g.value.tag())
          }, [
            createTextVNode(toDisplayString(d) + " ", 1),
            e.closable && !e.disabled && !e.readonly ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: normalizeClass(g.value.tagClose()),
              onClick: (y) => u(k)
            }, " × ", 10, mu)) : createCommentVNode("", true)
          ], 2))), 128)),
          withDirectives(createElementVNode("input", {
            ref_key: "inputRef",
            ref: r,
            class: normalizeClass(g.value.input()),
            type: "text",
            placeholder: (x = e.modelValue) != null && x.length ? "" : e.placeholder,
            disabled: e.disabled,
            readonly: e.readonly,
            autofocus: e.autofocus,
            "onUpdate:modelValue": w[0] || (w[0] = (d) => o.value = d),
            onKeydown: [
              withKeys(withModifiers(s, ["prevent"]), ["enter"]),
              withKeys(v, ["backspace"])
            ],
            onBlur: S,
            onFocus: h
          }, null, 42, yu), [
            [vModelDynamic, o.value]
          ]),
          c.$slots.suffix || e.suffixIcon ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(g.value.suffix())
          }, [
            renderSlot(c.$slots, "suffix", {}, () => [
              e.suffixIcon ? (openBlock(), createElementBlock("span", hu, toDisplayString(e.suffixIcon), 1)) : createCommentVNode("", true)
            ])
          ], 2)) : createCommentVNode("", true),
          e.showCount && e.maxCount ? (openBlock(), createElementBlock("span", {
            key: 2,
            class: normalizeClass(g.value.count())
          }, toDisplayString(((i = e.modelValue) == null ? void 0 : i.length) || 0) + "/" + toDisplayString(e.maxCount), 3)) : createCommentVNode("", true)
        ], 2)
      ], 2);
    };
  }
}), xu = le(wu), Ue = R({
  slots: {
    root: "relative inline-block",
    trigger: "inline-flex",
    content: [
      "absolute z-50",
      "bg-white dark:bg-gray-800",
      "border border-gray-200 dark:border-gray-700",
      "rounded-md shadow-lg",
      "min-w-[10rem]",
      "overflow-hidden",
      "animate-dropdown"
    ],
    arrow: [
      "absolute",
      "w-3 h-3",
      "bg-white dark:bg-gray-800",
      "border-t border-l border-gray-200 dark:border-gray-700",
      "transform rotate-45",
      "-z-10"
    ],
    menu: "py-1",
    menuItem: [
      "flex items-center gap-2 w-full",
      "px-4 py-2",
      "text-sm text-gray-700 dark:text-gray-200",
      "hover:bg-gray-100 dark:hover:bg-gray-700",
      "focus:bg-gray-100 dark:focus:bg-gray-700",
      "focus:outline-none",
      "cursor-pointer",
      "transition-colors duration-150"
    ],
    menuItemSelected: "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
    menuItemActive: "bg-gray-100 dark:bg-gray-700 font-medium",
    menuItemDisabled: "opacity-50 pointer-events-none cursor-not-allowed",
    menuItemIcon: "mr-2 flex-shrink-0",
    menuDivider: "h-px bg-gray-200 dark:bg-gray-700 my-1"
  },
  variants: {
    placement: {
      top: {
        content: "bottom-full mb-1",
        arrow: "bottom-[-6px] transform rotate-[-135deg]"
      },
      "top-start": {
        content: "bottom-full left-0 mb-1",
        arrow: "bottom-[-6px] left-4 transform rotate-[-135deg]"
      },
      "top-end": {
        content: "bottom-full right-0 mb-1",
        arrow: "bottom-[-6px] right-4 transform rotate-[-135deg]"
      },
      bottom: {
        content: "top-full mt-1",
        arrow: "top-[-6px]"
      },
      "bottom-start": {
        content: "top-full left-0 mt-1",
        arrow: "top-[-6px] left-4"
      },
      "bottom-end": {
        content: "top-full right-0 mt-1",
        arrow: "top-[-6px] right-4"
      },
      left: {
        content: "right-full top-1/2 -translate-y-1/2 mr-1",
        arrow: "right-[-6px] top-1/2 -translate-y-1/2 transform rotate-[135deg]"
      },
      "left-start": {
        content: "right-full top-0 mr-1",
        arrow: "right-[-6px] top-4 transform rotate-[135deg]"
      },
      "left-end": {
        content: "right-full bottom-0 mr-1",
        arrow: "right-[-6px] bottom-4 transform rotate-[135deg]"
      },
      right: {
        content: "left-full top-1/2 -translate-y-1/2 ml-1",
        arrow: "left-[-6px] top-1/2 -translate-y-1/2 transform rotate-[-45deg]"
      },
      "right-start": {
        content: "left-full top-0 ml-1",
        arrow: "left-[-6px] top-4 transform rotate-[-45deg]"
      },
      "right-end": {
        content: "left-full bottom-0 ml-1",
        arrow: "left-[-6px] bottom-4 transform rotate-[-45deg]"
      }
    },
    size: {
      sm: {
        content: "text-xs",
        menuItem: "py-1"
      },
      md: {
        content: "text-sm",
        menuItem: "py-2"
      },
      lg: {
        content: "text-base",
        menuItem: "py-2.5"
      }
    },
    disabled: {
      true: {
        trigger: "opacity-50 pointer-events-none cursor-not-allowed"
      }
    }
  },
  defaultVariants: {
    placement: "bottom",
    size: "md",
    disabled: false
  }
}), ku = {
  "update:visible": (e) => typeof e == "boolean",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  select: (e, a) => true,
  show: () => true,
  hide: () => true
}, Cu = {
  click: (e) => e instanceof MouseEvent
}, Su = (e, a) => {
  const l = ref(e.visible || false), t = ref(null), r = ref(null), o = `dropdown-${Math.random().toString(36).slice(2, 11)}`;
  let n = null, g = null;
  watch(
    () => e.visible,
    (w) => {
      w !== void 0 && (l.value = w);
    }
  ), watch(
    () => l.value,
    (w) => {
      a("update:visible", w), a(w ? "show" : "hide");
    }
  );
  const s = () => {
    e.disabled || ((e.trigger === "hover" || e.trigger === "focus") && e.showDelay ? (clearTimeout(g), n = window.setTimeout(() => {
      l.value = true;
    }, e.showDelay)) : l.value = true);
  }, u = () => {
    e.trigger !== "manual" && ((e.trigger === "hover" || e.trigger === "focus") && e.hideDelay ? (clearTimeout(n), g = window.setTimeout(() => {
      l.value = false;
    }, e.hideDelay)) : l.value = false);
  }, v = () => {
    e.disabled || e.trigger !== "manual" && (l.value = !l.value);
  }, h = (w) => {
    if (!e.closeOnClickOutside || !l.value || e.trigger === "manual") return;
    const x = w.target;
    r.value && !r.value.contains(x) && t.value && !t.value.contains(x) && u();
  }, S = (w, x) => {
    e.closeOnSelect && e.trigger !== "manual" && u(), a("select", w, x);
  }, c = (w, x) => {
    w.disabled || w.divider || w.value !== void 0 && S(w.value, x);
  };
  return onMounted(() => {
    e.closeOnClickOutside && document.addEventListener("click", h);
  }), onBeforeUnmount(() => {
    document.removeEventListener("click", h), n && clearTimeout(n), g && clearTimeout(g);
  }), {
    isVisible: l,
    triggerRef: t,
    contentRef: r,
    dropdownId: o,
    show: s,
    hide: u,
    toggle: v,
    handleItemClick: S,
    handleOptionClick: c
  };
}, zu = ["aria-expanded", "aria-controls"], $u = ["id"], Bu = ["onClick", "aria-disabled"], Vu = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    visible: { type: Boolean, default: false },
    options: { default: () => [] },
    trigger: { default: "click" },
    placement: { default: "bottom" },
    disabled: { type: Boolean, default: false },
    size: { default: "md" },
    arrow: { type: Boolean, default: false },
    showDelay: { default: 100 },
    hideDelay: { default: 100 },
    closeOnClickOutside: { type: Boolean, default: true },
    closeOnSelect: { type: Boolean, default: true },
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  emits: ku,
  setup(e, { expose: a, emit: l }) {
    const t = e, r = l, {
      isVisible: o,
      triggerRef: n,
      contentRef: g,
      dropdownId: s,
      show: u,
      hide: v,
      toggle: h,
      handleItemClick: S,
      handleOptionClick: c
    } = Su(t, r), w = computed(() => {
      var D, L, Z, W, B, E, M, N, j, Y;
      if (t.unstyled)
        return {
          root: ((D = t.pt) == null ? void 0 : D.root) || "",
          trigger: ((L = t.pt) == null ? void 0 : L.trigger) || "",
          content: ((Z = t.pt) == null ? void 0 : Z.content) || "",
          arrow: ((W = t.pt) == null ? void 0 : W.arrow) || "",
          menu: ((B = t.pt) == null ? void 0 : B.menu) || "",
          menuItem: ((E = t.pt) == null ? void 0 : E.menuItem) || "",
          menuItemSelected: ((M = t.pt) == null ? void 0 : M.menuItemSelected) || "",
          menuItemDisabled: ((N = t.pt) == null ? void 0 : N.menuItemDisabled) || "",
          menuItemIcon: ((j = t.pt) == null ? void 0 : j.menuItemIcon) || "",
          menuDivider: ((Y = t.pt) == null ? void 0 : Y.menuDivider) || ""
        };
      const {
        root: x,
        trigger: i,
        content: d,
        arrow: k,
        menu: y,
        menuItem: $,
        menuItemSelected: I,
        menuItemActive: V,
        menuItemDisabled: A,
        menuItemIcon: T,
        menuDivider: O
      } = Ue({
        placement: t.placement,
        size: t.size,
        disabled: t.disabled
      });
      return {
        root: x(),
        trigger: i(),
        content: d(),
        arrow: k(),
        menu: y(),
        menuItem: $(),
        menuItemSelected: I(),
        menuItemActive: V(),
        menuItemDisabled: A(),
        menuItemIcon: T(),
        menuDivider: O()
      };
    });
    return a({
      show: u,
      hide: v,
      toggle: h
    }), provide("dropdown", {
      handleItemClick: S,
      closeOnSelect: t.closeOnSelect
    }), (x, i) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(w.value.root)
    }, [
      createElementVNode("div", {
        ref_key: "triggerRef",
        ref: n,
        class: normalizeClass(w.value.trigger),
        onClick: i[0] || (i[0] = (d) => e.trigger === "click" && unref(h)()),
        onMouseenter: i[1] || (i[1] = (d) => e.trigger === "hover" && unref(u)()),
        onMouseleave: i[2] || (i[2] = (d) => e.trigger === "hover" && unref(v)()),
        onFocus: i[3] || (i[3] = (d) => e.trigger === "focus" && unref(u)()),
        onBlur: i[4] || (i[4] = (d) => e.trigger === "focus" && unref(v)()),
        onKeydown: [
          i[5] || (i[5] = withKeys(
            //@ts-ignore
            (...d) => unref(v) && unref(v)(...d),
            ["esc"]
          )),
          i[6] || (i[6] = withKeys(withModifiers((d) => e.trigger === "click" && unref(h)(), ["prevent"]), ["space"])),
          i[7] || (i[7] = withKeys((d) => e.trigger === "click" && unref(h)(), ["enter"]))
        ],
        tabindex: "0",
        role: "button",
        "aria-haspopup": true,
        "aria-expanded": unref(o),
        "aria-controls": unref(s)
      }, [
        renderSlot(x.$slots, "trigger")
      ], 42, zu),
      createVNode(Transition, { name: "dropdown" }, {
        default: withCtx(() => [
          unref(o) ? (openBlock(), createElementBlock("div", {
            key: 0,
            ref_key: "contentRef",
            ref: g,
            id: unref(s),
            class: normalizeClass(w.value.content),
            onMouseenter: i[8] || (i[8] = (d) => e.trigger === "hover" && unref(u)()),
            onMouseleave: i[9] || (i[9] = (d) => e.trigger === "hover" && unref(v)()),
            role: "menu"
          }, [
            e.arrow ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(w.value.arrow)
            }, null, 2)) : createCommentVNode("", true),
            createElementVNode("div", {
              class: normalizeClass(w.value.menu)
            }, [
              e.options && e.options.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(e.options, (d, k) => (openBlock(), createElementBlock(Fragment, { key: k }, [
                d.divider ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(w.value.menuDivider),
                  role: "separator"
                }, null, 2)) : (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: normalizeClass([
                    w.value.menuItem,
                    d.disabled && w.value.menuItemDisabled
                  ]),
                  onClick: (y) => !d.disabled && unref(c)(d, y),
                  role: "menuitem",
                  "aria-disabled": d.disabled
                }, [
                  d.icon ? (openBlock(), createElementBlock("span", {
                    key: 0,
                    class: normalizeClass(w.value.menuItemIcon)
                  }, toDisplayString(d.icon), 3)) : createCommentVNode("", true),
                  createElementVNode("span", null, toDisplayString(d.label), 1)
                ], 10, Bu))
              ], 64))), 128)) : renderSlot(x.$slots, "default", {}, void 0, void 0, 1)
            ], 2)
          ], 42, $u)) : createCommentVNode("", true)
        ]),
        _: 3
      })
    ], 2));
  }
}), Iu = ["aria-disabled"], Mu = /* @__PURE__ */ defineComponent({
  __name: "DropdownItem",
  props: {
    value: {},
    label: {},
    disabled: { type: Boolean, default: false },
    active: { type: Boolean, default: false },
    icon: {},
    divider: { type: Boolean, default: false },
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  emits: Cu,
  setup(e, { emit: a }) {
    const l = e, t = a, r = inject("dropdown", {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      handleItemClick: (v, h) => {
      },
      closeOnSelect: true
    }), o = (v) => {
      t("click", v), l.value !== void 0 && r.handleItemClick(l.value, v);
    }, n = (v) => {
      const h = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window
      });
      t("click", h), l.value !== void 0 && r.handleItemClick(l.value, h);
    }, g = computed(() => {
      var v, h;
      return l.unstyled ? ((v = l.pt) == null ? void 0 : v.root) || "" : [
        Ue().menuItem(),
        l.active && Ue().menuItemActive(),
        l.disabled && Ue().menuItemDisabled(),
        (h = l.pt) == null ? void 0 : h.root
      ].filter(Boolean).join(" ");
    }), s = computed(() => {
      var v;
      return l.unstyled ? ((v = l.pt) == null ? void 0 : v.icon) || "" : Ue().menuItemIcon();
    }), u = computed(() => {
      var v;
      return l.unstyled ? ((v = l.pt) == null ? void 0 : v.root) || "" : Ue().menuDivider();
    });
    return (v, h) => e.divider ? (openBlock(), createElementBlock("div", {
      key: 1,
      role: "separator",
      class: normalizeClass(u.value)
    }, null, 2)) : (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(g.value),
      role: "menuitem",
      tabindex: "0",
      "aria-disabled": e.disabled,
      onClick: h[0] || (h[0] = (S) => !e.disabled && o(S)),
      onKeydown: [
        h[1] || (h[1] = withKeys((S) => !e.disabled && n(), ["enter"])),
        h[2] || (h[2] = withKeys(withModifiers((S) => !e.disabled && n(), ["prevent"]), ["space"]))
      ]
    }, [
      renderSlot(v.$slots, "icon", {}, () => [
        e.icon ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass(s.value)
        }, toDisplayString(e.icon), 3)) : createCommentVNode("", true)
      ]),
      renderSlot(v.$slots, "default", {}, () => [
        createTextVNode(toDisplayString(e.label), 1)
      ])
    ], 42, Iu));
  }
}), Tu = /* @__PURE__ */ defineComponent({
  __name: "DropdownDivider",
  props: {
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  setup(e) {
    const a = e, l = computed(() => {
      var t, r;
      return a.unstyled ? ((t = a.pt) == null ? void 0 : t.root) || "" : [Ue().menuDivider(), (r = a.pt) == null ? void 0 : r.root].filter(Boolean).join(" ");
    });
    return (t, r) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(l.value),
      role: "separator"
    }, null, 2));
  }
}), Du = le(Vu), Ru = le(Mu), Eu = le(Tu), Lu = R({
  base: "inline-grid grid-cols-1 grid-rows-1 place-items-center",
  variants: {
    variant: {
      fade: "",
      flip: "",
      rotate: "",
      slide: ""
    },
    size: {
      sm: "w-8 h-8",
      md: "w-10 h-10",
      lg: "w-12 h-12"
    }
  },
  defaultVariants: {
    variant: "fade",
    size: "md"
  }
}), Au = R({
  base: "col-start-1 row-start-1 transition-all duration-300",
  variants: {
    active: {
      true: "opacity-100 transform-none",
      false: "opacity-0 pointer-events-none"
    },
    variant: {
      fade: "transition-opacity",
      flip: "backface-visibility-hidden",
      rotate: "transition-transform",
      slide: "transition-transform"
    },
    disabled: {
      true: "cursor-not-allowed opacity-50",
      false: ""
    }
  },
  compoundVariants: [
    {
      active: false,
      variant: "flip",
      class: "rotate-y-180"
    },
    {
      active: false,
      variant: "rotate",
      class: "rotate-180"
    },
    {
      active: false,
      variant: "slide",
      class: "-translate-y-full"
    }
  ]
}), Ou = R({
  base: "col-start-1 row-start-1 transition-all duration-300",
  variants: {
    active: {
      true: "opacity-0 pointer-events-none",
      false: "opacity-100 transform-none"
    },
    variant: {
      fade: "transition-opacity",
      flip: "backface-visibility-hidden",
      rotate: "transition-transform",
      slide: "transition-transform"
    },
    disabled: {
      true: "cursor-not-allowed opacity-50",
      false: ""
    }
  },
  compoundVariants: [
    {
      active: true,
      variant: "flip",
      class: "rotate-y-180"
    },
    {
      active: true,
      variant: "rotate",
      class: "rotate-180"
    },
    {
      active: true,
      variant: "slide",
      class: "translate-y-full"
    }
  ]
}), Pu = (e, a) => {
  const l = ref(e.active || false), t = computed({
    get: () => e.active !== void 0 ? e.active : l.value,
    set: (n) => {
      e.disabled || (e.active === void 0 && (l.value = n), a("update:active", n), a("change", n));
    }
  }), r = () => {
    t.value = !t.value;
  };
  return {
    isActive: t,
    toggle: r,
    handleTrigger: (n) => {
      e.disabled || e.trigger === "click" && r();
    }
  };
}, ju = ["tabindex", "aria-checked", "aria-disabled"], Zu = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    active: { type: Boolean, default: false },
    variant: { default: "fade" },
    size: { default: "md" },
    trigger: { default: "click" },
    disabled: { type: Boolean, default: false },
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  emits: ["change", "update:active"],
  setup(e, { emit: a }) {
    const l = e, t = a, { isActive: r, handleTrigger: o } = Pu(l, t), n = computed(() => {
      var u, v;
      return l.unstyled ? ((u = l.pt) == null ? void 0 : u.root) || "" : Lu({
        variant: l.variant,
        size: l.size,
        class: (v = l.pt) == null ? void 0 : v.root
      });
    }), g = computed(() => {
      var u, v;
      return l.unstyled ? ((u = l.pt) == null ? void 0 : u.on) || "" : Au({
        active: r.value,
        variant: l.variant,
        disabled: l.disabled,
        class: (v = l.pt) == null ? void 0 : v.on
      });
    }), s = computed(() => {
      var u, v;
      return l.unstyled ? ((u = l.pt) == null ? void 0 : u.off) || "" : Ou({
        active: r.value,
        variant: l.variant,
        disabled: l.disabled,
        class: (v = l.pt) == null ? void 0 : v.off
      });
    });
    return (u, v) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(n.value),
      onClick: v[0] || (v[0] = (h) => l.trigger === "click" ? unref(o)(h) : void 0),
      onMouseenter: v[1] || (v[1] = (h) => l.trigger === "hover" ? r.value = true : void 0),
      onMouseleave: v[2] || (v[2] = (h) => l.trigger === "hover" ? r.value = false : void 0),
      onFocus: v[3] || (v[3] = (h) => l.trigger === "focus" ? r.value = true : void 0),
      onBlur: v[4] || (v[4] = (h) => l.trigger === "focus" ? r.value = false : void 0),
      tabindex: l.trigger === "focus" ? 0 : void 0,
      "aria-checked": unref(r),
      "aria-disabled": l.disabled,
      role: "switch"
    }, [
      createElementVNode("div", {
        class: normalizeClass(g.value)
      }, [
        renderSlot(u.$slots, "on")
      ], 2),
      createElementVNode("div", {
        class: normalizeClass(s.value)
      }, [
        renderSlot(u.$slots, "off")
      ], 2)
    ], 42, ju));
  }
}), Wu = le(Zu), Fu = R({
  base: "relative overflow-hidden",
  variants: {
    fit: {
      fill: "object-fill",
      contain: "object-contain",
      cover: "object-cover",
      none: "object-none",
      "scale-down": "object-scale-down"
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full"
    },
    isZoomable: {
      true: "cursor-zoom-in",
      false: ""
    },
    isZoomed: {
      true: "cursor-zoom-out",
      false: ""
    }
  },
  defaultVariants: {
    fit: "cover",
    radius: "md",
    isZoomable: false,
    isZoomed: false
  }
}), Hu = R({
  base: "absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse"
}), Nu = R({
  base: "absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity",
  variants: {
    visible: {
      true: "opacity-100",
      false: "opacity-0 pointer-events-none"
    }
  },
  defaultVariants: {
    visible: false
  }
}), Gu = {
  load: (e) => e instanceof Event,
  error: (e) => e instanceof Event,
  zoom: (e) => typeof e == "boolean"
}, Ku = (e, a) => {
  const l = ref(null), t = ref(true), r = ref(false), o = ref(e.isZoomed || false), n = (u) => {
    t.value = false, a("load", u);
  }, g = (u) => {
    t.value = false, r.value = true, a("error", u);
  }, s = () => {
    e.isZoomable && (o.value = !o.value, a("zoom", o.value));
  };
  return watch(
    () => e.isZoomed,
    (u) => {
      u !== void 0 && (o.value = u);
    }
  ), watch(
    () => e.src,
    () => {
      t.value = true, r.value = false;
    }
  ), {
    imageRef: l,
    isLoading: t,
    isError: r,
    isZoomed: o,
    handleLoad: n,
    handleError: g,
    toggleZoom: s
  };
}, Yu = ["aria-label"], Uu = ["src", "alt", "loading"], Xu = ["src", "alt"], qu = {
  key: 3,
  class: "absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800"
}, Ju = { class: "text-gray-400 flex flex-col items-center" }, Qu = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    src: {},
    alt: { default: "" },
    width: { default: "auto" },
    height: { default: "auto" },
    fit: { default: "cover" },
    blurred: { type: Boolean, default: false },
    blurAmount: { default: 10 },
    loading: { default: "lazy" },
    isZoomable: { type: Boolean, default: false },
    isZoomed: { type: Boolean, default: false },
    zoomScale: { default: 1.5 },
    skeleton: { type: Boolean, default: true },
    skeletonColor: {},
    radius: { default: "md" },
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  emits: Gu,
  setup(e, { expose: a, emit: l }) {
    const t = e, r = l, {
      imageRef: o,
      isLoading: n,
      isError: g,
      isZoomed: s,
      handleLoad: u,
      handleError: v,
      toggleZoom: h
    } = Ku(t, r), S = () => {
      t.isZoomable && h();
    }, c = computed(() => {
      var $, I;
      return t.unstyled ? (($ = t.pt) == null ? void 0 : $.root) || "" : Fu({
        fit: t.fit,
        radius: t.radius,
        isZoomable: t.isZoomable,
        isZoomed: s.value,
        class: (I = t.pt) == null ? void 0 : I.root
      });
    }), w = computed(() => {
      var $, I;
      return t.unstyled ? (($ = t.pt) == null ? void 0 : $.img) || "" : `w-full h-full transition-transform ${s.value ? "scale-" + t.zoomScale : ""} ${((I = t.pt) == null ? void 0 : I.img) || ""}`;
    }), x = computed(() => {
      var $, I;
      return t.unstyled ? (($ = t.pt) == null ? void 0 : $.skeleton) || "" : Hu({ class: (I = t.pt) == null ? void 0 : I.skeleton });
    }), i = computed(() => {
      var $, I;
      return t.unstyled ? (($ = t.pt) == null ? void 0 : $.overlay) || "" : Nu({ visible: s.value, class: (I = t.pt) == null ? void 0 : I.overlay });
    }), d = computed(() => {
      const $ = {};
      return t.width !== "auto" && ($.width = typeof t.width == "number" ? `${t.width}px` : t.width), t.height !== "auto" && ($.height = typeof t.height == "number" ? `${t.height}px` : t.height), $;
    }), k = computed(() => ({
      objectFit: t.fit
    })), y = computed(() => t.skeletonColor ? { backgroundColor: t.skeletonColor } : {});
    return a({
      imageRef: o,
      isLoading: n,
      isError: g,
      isZoomed: s
    }), ($, I) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(c.value),
      style: normalizeStyle(d.value),
      onClick: S,
      role: "img",
      "aria-label": e.alt
    }, [
      e.skeleton && unref(n) ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(x.value),
        style: normalizeStyle(y.value)
      }, null, 6)) : createCommentVNode("", true),
      createElementVNode("img", {
        ref_key: "imageRef",
        ref: o,
        src: e.src,
        alt: e.alt,
        class: normalizeClass(w.value),
        style: normalizeStyle(k.value),
        loading: e.loading,
        onLoad: I[0] || (I[0] = //@ts-ignore
        (...V) => unref(u) && unref(u)(...V)),
        onError: I[1] || (I[1] = //@ts-ignore
        (...V) => unref(v) && unref(v)(...V))
      }, null, 46, Uu),
      e.blurred && unref(n) ? (openBlock(), createElementBlock("img", {
        key: 1,
        src: e.src,
        alt: e.alt,
        class: "absolute inset-0 w-full h-full",
        style: normalizeStyle({
          filter: `blur(${e.blurAmount}px)`,
          transform: "scale(1.1)",
          objectFit: e.fit
        })
      }, null, 12, Xu)) : createCommentVNode("", true),
      e.isZoomable && unref(s).valueOf() ? (openBlock(), createElementBlock("div", {
        key: 2,
        class: normalizeClass(i.value)
      }, [
        renderSlot($.$slots, "zoom-icon", {}, () => [
          I[2] || (I[2] = createStaticVNode('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>', 1))
        ])
      ], 2)) : createCommentVNode("", true),
      unref(g) ? (openBlock(), createElementBlock("div", qu, [
        renderSlot($.$slots, "error", {}, () => [
          createElementVNode("div", Ju, [
            I[3] || (I[3] = createElementVNode("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              class: "mb-2"
            }, [
              createElementVNode("rect", {
                x: "3",
                y: "3",
                width: "18",
                height: "18",
                rx: "2",
                ry: "2"
              }),
              createElementVNode("circle", {
                cx: "8.5",
                cy: "8.5",
                r: "1.5"
              }),
              createElementVNode("polyline", { points: "21 15 16 10 5 21" })
            ], -1)),
            createElementVNode("span", null, toDisplayString(e.alt || "图片加载失败"), 1)
          ])
        ])
      ])) : createCommentVNode("", true)
    ], 14, Yu));
  }
}), _u = le(Qu), ed = R({
  base: "inline-flex items-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",
  variants: {
    variant: {
      default: "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white",
      primary: "text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300",
      secondary: "text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300",
      success: "text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300",
      danger: "text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300",
      warning: "text-yellow-600 hover:text-yellow-700 dark:text-yellow-400 dark:hover:text-yellow-300",
      info: "text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300"
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg"
    },
    underline: {
      true: "underline underline-offset-4",
      false: "no-underline"
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed pointer-events-none",
      false: "cursor-pointer"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    underline: false,
    disabled: false
  }
}), td = R({
  base: "inline-flex",
  variants: {
    position: {
      left: "mr-2",
      right: "ml-2"
    },
    size: {
      sm: "w-3.5 h-3.5",
      md: "w-4 h-4",
      lg: "w-5 h-5"
    }
  },
  defaultVariants: {
    position: "left",
    size: "md"
  }
}), ld = {
  click: (e) => e instanceof MouseEvent
}, ad = (e, a) => {
  const l = (r) => {
    if (e.disabled) {
      r.preventDefault();
      return;
    }
    a("click", r);
  }, t = computed(() => {
    const r = {};
    return e.href && (r.href = e.href), e.external && (r.target = "_blank", r.rel = "noopener noreferrer"), r;
  });
  return {
    handleClick: l,
    linkAttributes: t
  };
}, rd = ["aria-disabled"], od = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    href: { default: void 0 },
    variant: { default: "default" },
    size: { default: "md" },
    external: { type: Boolean, default: false },
    underline: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    iconPosition: { default: void 0 },
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  emits: ld,
  setup(e, { emit: a }) {
    const l = e, t = a, { handleClick: r, linkAttributes: o } = ad(l, t), n = computed(() => {
      var s, u;
      return l.unstyled ? ((s = l.pt) == null ? void 0 : s.root) || "" : ed({
        variant: l.variant,
        size: l.size,
        underline: l.underline,
        disabled: l.disabled,
        class: (u = l.pt) == null ? void 0 : u.root
      });
    }), g = (s) => {
      var u, v;
      return l.unstyled ? ((u = l.pt) == null ? void 0 : u.icon) || "" : td({
        position: s,
        size: l.size,
        class: (v = l.pt) == null ? void 0 : v.icon
      });
    };
    return (s, u) => (openBlock(), createElementBlock("a", mergeProps({ class: n.value }, unref(o), {
      onClick: u[0] || (u[0] = //@ts-ignore
      (...v) => unref(r) && unref(r)(...v)),
      "aria-disabled": e.disabled
    }), [
      e.iconPosition === "left" ? renderSlot(s.$slots, "icon-left", {}, () => [
        s.$slots["icon-left"] ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass(g("left"))
        }, [
          renderSlot(s.$slots, "icon-left")
        ], 2)) : createCommentVNode("", true)
      ], void 0, 0) : createCommentVNode("", true),
      renderSlot(s.$slots, "default"),
      e.iconPosition === "right" ? renderSlot(s.$slots, "icon-right", {}, () => [
        s.$slots["icon-right"] ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass(g("right"))
        }, [
          renderSlot(s.$slots, "icon-right")
        ], 2)) : createCommentVNode("", true)
      ], void 0, 1) : createCommentVNode("", true),
      e.external && !s.$slots["icon-right"] && e.iconPosition !== "left" ? (openBlock(), createElementBlock("span", {
        key: 2,
        class: normalizeClass(g("right"))
      }, [...u[1] || (u[1] = [
        createElementVNode("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          class: "w-full h-full"
        }, [
          createElementVNode("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
          createElementVNode("polyline", { points: "15 3 21 3 21 9" }),
          createElementVNode("line", {
            x1: "10",
            y1: "14",
            x2: "21",
            y2: "3"
          })
        ], -1)
      ])], 2)) : createCommentVNode("", true)
    ], 16, rd));
  }
}), nd = le(od), sd = R({
  base: "relative w-full overflow-hidden",
  variants: {
    variant: {
      default: "",
      dots: "",
      thumbnails: ""
    },
    size: {
      sm: "",
      md: "",
      lg: ""
    }
  },
  defaultVariants: {
    variant: "default",
    size: "md"
  }
}), id = {
  change: (e, a) => typeof e == "number" && typeof a == "number",
  "update:active-index": (e) => typeof e == "number"
}, ud = ["tabindex"], dd = ["aria-hidden"], cd = ["tabindex", "disabled"], fd = ["tabindex", "disabled"], vd = ["onClick", "aria-label", "aria-current", "tabindex", "disabled"], gd = 50, bd = /* @__PURE__ */ defineComponent({
  name: "ZCarousel",
  __name: "index",
  props: {
    variant: { default: "default" },
    size: { default: "md" },
    autoplay: { type: Boolean, default: false },
    interval: { default: 3e3 },
    loop: { type: Boolean, default: true },
    indicators: { type: Boolean, default: true },
    navigation: { type: Boolean, default: true },
    keyboardNavigation: { type: Boolean, default: true },
    touchSwipe: { type: Boolean, default: true },
    disabled: { type: Boolean, default: false },
    initialIndex: { default: 0 },
    pauseOnHover: { type: Boolean, default: true },
    transitionDuration: { default: 500 },
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  emits: id,
  setup(e, { expose: a, emit: l }) {
    const t = e, r = l, o = useSlots(), n = ref(null), g = ref(null), s = ref(null), u = ref(t.initialIndex), v = ref(t.initialIndex), h = ref(false), S = ref(false), c = ref(null), w = ref(0), x = ref(0), i = ref(0), d = ref(0), k = computed(() => {
      if (!o) return 0;
      let K = 0;
      for (; o[`item-${K}`]; )
        K++;
      return K || 1;
    }), y = computed(() => t.loop && k.value > 1), $ = computed(() => {
      const K = Array.from({ length: k.value }, (oe, je) => je);
      return y.value ? [K.length - 1, ...K, 0] : K;
    }), I = computed(() => y.value ? 1 : 0), V = computed(() => ({
      transform: `translateX(${-(v.value + I.value) * 100}%)`,
      transition: h.value ? `transform ${t.transitionDuration}ms ease-in-out` : "none"
    })), A = computed(() => t.loop || u.value > 0), T = computed(
      () => t.loop || u.value < k.value - 1
    ), O = (K) => `slide-${K}`, D = (K) => {
      const oe = $.value[K];
      return oe >= 0 && oe < k.value ? oe : 0;
    }, L = (K) => `item-${D(K)}`, Z = computed(
      () => {
        var K, oe;
        return t.unstyled ? ((K = t.pt) == null ? void 0 : K.root) || "" : sd({
          variant: t.variant,
          size: t.size,
          class: (oe = t.pt) == null ? void 0 : oe.root
        });
      }
    ), W = computed(
      () => {
        var K, oe;
        return t.unstyled ? ((K = t.pt) == null ? void 0 : K.container) || "" : `relative w-full h-full overflow-hidden ${((oe = t.pt) == null ? void 0 : oe.container) || ""}`;
      }
    ), B = computed(
      () => {
        var K, oe;
        return t.unstyled ? ((K = t.pt) == null ? void 0 : K.track) || "" : `flex h-full w-full ${((oe = t.pt) == null ? void 0 : oe.track) || ""}`;
      }
    ), E = computed(
      () => {
        var K, oe;
        return t.unstyled ? ((K = t.pt) == null ? void 0 : K.item) || "" : `h-full w-full flex-shrink-0 flex-grow-0 basis-full ${((oe = t.pt) == null ? void 0 : oe.item) || ""}`;
      }
    ), M = computed(
      () => {
        var K, oe;
        return t.unstyled ? ((K = t.pt) == null ? void 0 : K.prevButton) || "" : `absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all dark:bg-black/60 dark:hover:bg-black/80 ${((oe = t.pt) == null ? void 0 : oe.prevButton) || ""}`;
      }
    ), N = computed(
      () => {
        var K, oe;
        return t.unstyled ? ((K = t.pt) == null ? void 0 : K.nextButton) || "" : `absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all dark:bg-black/60 dark:hover:bg-black/80 ${((oe = t.pt) == null ? void 0 : oe.nextButton) || ""}`;
      }
    ), j = computed(
      () => {
        var K, oe;
        return t.unstyled ? ((K = t.pt) == null ? void 0 : K.indicators) || "" : `absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2 ${((oe = t.pt) == null ? void 0 : oe.indicators) || ""}`;
      }
    ), Y = computed(
      () => {
        var K, oe;
        return t.unstyled ? ((K = t.pt) == null ? void 0 : K.indicator) || "" : `w-2 h-2 md:w-3 md:h-3 rounded-full bg-white/50 hover:bg-white/75 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 cursor-pointer ${((oe = t.pt) == null ? void 0 : oe.indicator) || ""}`;
      }
    ), X = computed(
      () => {
        var K, oe;
        return t.unstyled ? ((K = t.pt) == null ? void 0 : K.activeIndicator) || "" : `w-6 h-2 md:w-8 md:h-3 rounded-full bg-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 cursor-pointer ${((oe = t.pt) == null ? void 0 : oe.activeIndicator) || ""}`;
      }
    ), se = (K, oe) => {
      K !== oe && (r("change", K, oe), r("update:active-index", K));
    }, H = () => {
      if (t.disabled || h.value || k.value <= 1) return;
      const K = u.value;
      u.value < k.value - 1 ? (u.value++, v.value = u.value, h.value = true, se(u.value, K)) : y.value && (v.value = k.value, h.value = true, u.value = 0, se(0, K));
    }, J = () => {
      if (t.disabled || h.value || k.value <= 1) return;
      const K = u.value;
      u.value > 0 ? (u.value--, v.value = u.value, h.value = true, se(u.value, K)) : y.value && (v.value = -1, h.value = true, u.value = k.value - 1, se(u.value, K));
    }, re = (K) => {
      if (t.disabled || h.value || K < 0 || K >= k.value || K === u.value)
        return;
      const oe = u.value;
      u.value = K, v.value = K, h.value = true, se(u.value, oe);
    }, ne = (K) => {
      if (K.target === s.value) {
        if (!y.value) {
          h.value = false;
          return;
        }
        v.value === k.value ? (h.value = false, v.value = 0) : v.value === -1 ? (h.value = false, v.value = k.value - 1) : h.value = false;
      }
    }, ve = (K) => {
      !t.touchSwipe || t.disabled || (w.value = K.changedTouches[0].screenX, x.value = K.changedTouches[0].screenY, i.value = w.value, d.value = x.value);
    }, fe = (K) => {
      !t.touchSwipe || t.disabled || (i.value = K.changedTouches[0].screenX, d.value = K.changedTouches[0].screenY);
    }, ye = () => {
      if (!t.touchSwipe || t.disabled) return;
      const K = i.value - w.value, oe = d.value - x.value;
      Math.abs(K) > Math.abs(oe) && Math.abs(K) > gd && (K > 0 ? J() : H()), w.value = 0, x.value = 0, i.value = 0, d.value = 0;
    }, ke = () => {
      t.pauseOnHover && t.autoplay && (S.value = true);
    }, we = () => {
      t.pauseOnHover && t.autoplay && (S.value = false);
    }, Ce = () => {
      t.autoplay && !t.disabled && !c.value && (c.value = setInterval(() => {
        S.value || H();
      }, t.interval));
    }, he = () => {
      c.value && (clearInterval(c.value), c.value = null);
    }, be = () => {
      he(), t.autoplay && !t.disabled && Ce();
    }, De = (K) => {
      !t.keyboardNavigation || t.disabled || (K.key === "ArrowLeft" ? (K.preventDefault(), J()) : K.key === "ArrowRight" && (K.preventDefault(), H()));
    };
    return watch(
      () => t.autoplay,
      (K) => {
        K ? Ce() : he();
      }
    ), watch(
      () => t.disabled,
      (K) => {
        K ? he() : t.autoplay && Ce();
      }
    ), watch(() => t.interval, be), watch(u, () => {
      be();
    }), watch(
      () => t.initialIndex,
      (K) => {
        K >= 0 && K < k.value && (u.value = K, v.value = K, h.value = false);
      }
    ), watch(y, async () => {
      h.value = false, v.value = u.value, await nextTick();
    }), onMounted(() => {
      t.autoplay && Ce(), t.touchSwipe && n.value && (n.value.addEventListener("touchstart", ve, {
        passive: true
      }), n.value.addEventListener("touchmove", fe, {
        passive: true
      }), n.value.addEventListener("touchend", ye, {
        passive: true
      }));
    }), onUnmounted(() => {
      he(), n.value && (n.value.removeEventListener("touchstart", ve), n.value.removeEventListener("touchmove", fe), n.value.removeEventListener("touchend", ye));
    }), a({
      next: H,
      prev: J,
      goToSlide: re,
      startAutoplay: Ce,
      stopAutoplay: he
    }), (K, oe) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(Z.value),
      ref_key: "rootRef",
      ref: n,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": "Carousel",
      tabindex: e.disabled ? -1 : 0,
      onMouseenter: ke,
      onMouseleave: we,
      onKeydown: De
    }, [
      createElementVNode("div", {
        class: normalizeClass(W.value),
        ref_key: "containerRef",
        ref: g
      }, [
        createElementVNode("div", {
          class: normalizeClass(B.value),
          ref_key: "trackRef",
          ref: s,
          style: normalizeStyle(V.value),
          onTransitionend: ne
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($.value, (je, pe) => (openBlock(), createElementBlock("div", {
            key: O(pe),
            class: normalizeClass(E.value),
            role: "group",
            "aria-roledescription": "slide",
            "aria-hidden": D(pe) !== u.value
          }, [
            renderSlot(K.$slots, L(pe))
          ], 10, dd))), 128))
        ], 38)
      ], 2),
      e.navigation && !e.disabled ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        A.value ? (openBlock(), createElementBlock("button", {
          key: 0,
          class: normalizeClass(M.value),
          onClick: J,
          "aria-label": "Previous slide",
          tabindex: e.disabled ? -1 : 0,
          type: "button",
          disabled: h.value
        }, [
          renderSlot(K.$slots, "prev-icon", {}, () => [
            oe[0] || (oe[0] = createElementVNode("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "h-6 w-6",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [
              createElementVNode("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M15 19l-7-7 7-7"
              })
            ], -1))
          ])
        ], 10, cd)) : createCommentVNode("", true),
        T.value ? (openBlock(), createElementBlock("button", {
          key: 1,
          class: normalizeClass(N.value),
          onClick: H,
          "aria-label": "Next slide",
          tabindex: e.disabled ? -1 : 0,
          type: "button",
          disabled: h.value
        }, [
          renderSlot(K.$slots, "next-icon", {}, () => [
            oe[1] || (oe[1] = createElementVNode("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "h-6 w-6",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [
              createElementVNode("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M9 5l7 7-7 7"
              })
            ], -1))
          ])
        ], 10, fd)) : createCommentVNode("", true)
      ], 64)) : createCommentVNode("", true),
      e.indicators && !e.disabled ? (openBlock(), createElementBlock("div", {
        key: 1,
        class: normalizeClass(j.value)
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(k.value, (je, pe) => (openBlock(), createElementBlock("button", {
          key: pe,
          class: normalizeClass([
            pe === u.value ? X.value : Y.value
          ]),
          onClick: (ze) => re(pe),
          "aria-label": `Go to slide ${pe + 1}`,
          "aria-current": pe === u.value ? "true" : void 0,
          tabindex: e.disabled ? -1 : 0,
          type: "button",
          disabled: h.value
        }, null, 10, vd))), 128))
      ], 2)) : createCommentVNode("", true)
    ], 42, ud));
  }
}), pd = le(bd), md = R({
  slots: {
    root: "relative w-full overflow-hidden",
    viewport: "h-full w-full overflow-hidden",
    track: "flex h-full w-max flex-nowrap items-center whitespace-nowrap will-change-transform",
    group: "flex h-full shrink-0 items-center whitespace-nowrap",
    item: "inline-flex h-full shrink-0 items-center justify-center",
    image: "h-full max-h-full w-auto object-cover align-middle",
    card: "inline-flex min-w-48 flex-col gap-1 shadow-sm",
    cardTitle: "font-semibold leading-tight",
    cardDescription: "text-sm leading-snug opacity-75",
    text: "whitespace-nowrap leading-none"
  }
}), yd = (e) => e.type ? e.type : e.src ? "image" : e.title || e.description ? "card" : "text", dl = (e, a) => typeof e == "string" ? {
  id: `item-${a}`,
  type: "text",
  content: e
} : {
  id: `item-${a}`,
  type: yd(e),
  content: e.content ?? e.title ?? e.src ?? "",
  src: e.src,
  alt: e.alt,
  title: e.title,
  description: e.description,
  backgroundColor: e.backgroundColor,
  textColor: e.textColor,
  borderRadius: e.borderRadius
}, hd = (e, a) => {
  const l = typeof e == "string" ? Number(e) : e;
  return typeof l != "number" || Number.isNaN(l) || l <= 0 ? a : l;
}, Nt = (e, a) => e ? [dl(e, a)] : [];
function wd(e) {
  const a = computed(() => (e.items ?? []).map((c, w) => dl(c, w))), l = computed(() => Nt(e.prefix, "prefix")), t = computed(() => Nt(e.suffix, "suffix")), r = computed(() => {
    const c = a.value;
    if (!c.length) return [];
    const x = e.autofill && c.some((d) => d.type === "image") ? Math.max(4, c.length) : c.length, i = [];
    for (let d = 0; i.length < x; d += 1)
      for (const k of c)
        i.push({
          ...k,
          id: `${k.id}-copy-${d}-${i.length}`
        });
    return i;
  }), o = computed(() => [...l.value, ...r.value, ...t.value]), n = computed(() => ({
    height: e.height,
    backgroundColor: e.backgroundColor,
    color: e.textColor,
    borderRadius: e.borderRadius
  })), g = computed(() => ({})), s = computed(() => ({
    gap: e.gap,
    paddingInlineEnd: e.gap
  })), u = computed(() => ({
    minWidth: "max-content"
  })), v = (c) => ({
    backgroundColor: c.backgroundColor ?? "rgba(255, 255, 255, 0.86)",
    color: c.textColor ?? e.textColor,
    borderRadius: c.borderRadius ?? e.borderRadius,
    padding: "0.75rem 1rem"
  }), h = (c) => ({
    borderRadius: c.borderRadius ?? e.borderRadius
  }), S = computed(() => hd(e.duration, 20));
  return {
    displayItems: o,
    coreItems: r,
    prefixItems: l,
    suffixItems: t,
    rootStyles: n,
    trackStyles: g,
    groupStyles: s,
    itemStyles: u,
    cardStyle: v,
    imageStyle: h,
    duration: S
  };
}
const xd = ["src", "alt"], kd = ["aria-hidden"], Cd = ["src", "alt"], Sd = ["src", "alt"], zd = /* @__PURE__ */ defineComponent({
  name: "ZRunhorselight",
  __name: "index",
  props: {
    items: { default: () => [] },
    prefix: {},
    suffix: {},
    direction: { default: "left" },
    duration: { default: 20 },
    height: { default: "3rem" },
    backgroundColor: { default: "transparent" },
    textColor: { default: "#111827" },
    borderRadius: { default: "0.75rem" },
    gap: { default: "1rem" },
    pauseOnHover: { type: Boolean, default: true },
    loop: { type: Boolean, default: true },
    autofill: { type: Boolean, default: false },
    unstyled: { type: Boolean, default: false },
    onPrefixClick: {},
    onSuffixClick: {},
    pt: {}
  },
  setup(e) {
    const a = e, l = useSlots(), t = md(), r = ref(null), o = ref(null), n = ref(null), g = ref(null), s = ref(0), u = ref(0), v = ref(1), h = ref(false), S = ref(false);
    let c = null, w = 0, x = 0, i = null;
    const d = /* @__PURE__ */ new Set(), {
      coreItems: k,
      rootStyles: y,
      trackStyles: $,
      groupStyles: I,
      itemStyles: V,
      cardStyle: A,
      imageStyle: T,
      duration: O
    } = wd(a), D = computed(() => !!l.default), L = computed(() => a.loop && s.value > 0), Z = computed(() => L.value ? 2 : 1), W = computed(
      () => Array.from(
        { length: v.value },
        (q, te) => k.value.map((de) => ({
          ...de,
          id: `${de.id}-repeat-${te}`
        }))
      ).flat()
    ), B = computed(() => {
      var de;
      if (!D.value || !a.loop) return 1;
      if (u.value <= 0) return 4;
      const q = ((de = r.value) == null ? void 0 : de.getBoundingClientRect().width) ?? 0, te = Math.ceil(q * 2.2 / u.value) + 1;
      return Math.max(4, Math.min(12, te));
    }), E = computed(
      () => {
        var q, te;
        return a.unstyled ? ((q = a.pt) == null ? void 0 : q.root) || "" : t.root({ class: (te = a.pt) == null ? void 0 : te.root });
      }
    ), M = computed(
      () => {
        var q, te;
        return a.unstyled ? ((q = a.pt) == null ? void 0 : q.viewport) || "" : t.viewport({ class: (te = a.pt) == null ? void 0 : te.viewport });
      }
    ), N = computed(
      () => {
        var q, te;
        return a.unstyled ? ((q = a.pt) == null ? void 0 : q.track) || "" : t.track({ class: (te = a.pt) == null ? void 0 : te.track });
      }
    ), j = computed(
      () => {
        var q, te;
        return a.unstyled ? ((q = a.pt) == null ? void 0 : q.group) || "" : t.group({ class: (te = a.pt) == null ? void 0 : te.group });
      }
    ), Y = computed(
      () => {
        var q, te;
        return a.unstyled ? ((q = a.pt) == null ? void 0 : q.item) || "" : t.item({ class: (te = a.pt) == null ? void 0 : te.item });
      }
    ), X = computed(
      () => {
        var q, te;
        return a.unstyled ? ((q = a.pt) == null ? void 0 : q.image) || "" : t.image({ class: (te = a.pt) == null ? void 0 : te.image });
      }
    ), se = computed(
      () => {
        var q, te;
        return a.unstyled ? ((q = a.pt) == null ? void 0 : q.card) || "" : t.card({ class: (te = a.pt) == null ? void 0 : te.card });
      }
    ), H = computed(
      () => {
        var q, te;
        return a.unstyled ? ((q = a.pt) == null ? void 0 : q.cardTitle) || "" : t.cardTitle({ class: (te = a.pt) == null ? void 0 : te.cardTitle });
      }
    ), J = computed(
      () => {
        var q, te;
        return a.unstyled ? ((q = a.pt) == null ? void 0 : q.cardDescription) || "" : t.cardDescription({ class: (te = a.pt) == null ? void 0 : te.cardDescription });
      }
    ), re = computed(
      () => {
        var q, te;
        return a.unstyled ? ((q = a.pt) == null ? void 0 : q.text) || "" : t.text({ class: (te = a.pt) == null ? void 0 : te.text });
      }
    ), ne = computed(() => ({
      ...$.value,
      visibility: S.value ? "visible" : "hidden"
    })), ve = (q) => {
      if (!o.value) return;
      if (!s.value || !L.value) {
        o.value.style.transform = "translate3d(0, 0, 0)";
        return;
      }
      const te = (q % s.value + s.value) % s.value, de = a.direction === "right" ? -s.value + te : -te;
      o.value.style.transform = `translate3d(${de}px, 0, 0)`;
    }, fe = () => {
      var Lt, At, Ot;
      const q = ((Lt = n.value) == null ? void 0 : Lt.getBoundingClientRect().width) ?? 0, te = ((At = g.value) == null ? void 0 : At.getBoundingClientRect().width) ?? 0;
      if (!q) {
        s.value = 0, u.value = 0, S.value = false;
        return;
      }
      const de = ((Ot = r.value) == null ? void 0 : Ot.getBoundingClientRect().width) ?? 0, me = D.value ? te || q : q / Math.max(1, v.value), Ne = de * 2.2, rt = !a.loop || me <= 0 ? 1 : Math.min(6, Math.max(1, Math.ceil(Ne / me)));
      if (!D.value && rt !== v.value) {
        v.value = rt, nextTick(fe);
        return;
      }
      s.value = q, u.value = D.value ? te : 0, x = q ? x % q : 0, S.value = true, ve(x);
    }, ye = () => {
      c !== null && cancelAnimationFrame(c), c = null, w = 0;
    }, ke = (q) => {
      w || (w = q);
      const te = Math.min(q - w, 64);
      if (w = q, !h.value && L.value && s.value > 0) {
        for (x += s.value / (O.value * 1e3) * te; x >= s.value; ) x -= s.value;
        ve(x);
      }
      c = requestAnimationFrame(ke);
    }, we = () => {
      ye(), c = requestAnimationFrame(ke);
    }, Ce = () => nextTick(fe), he = () => {
      d.forEach((q) => {
        q.removeEventListener("load", Ce), q.removeEventListener("error", Ce);
      }), d.clear();
    }, be = () => {
      he(), o.value && o.value.querySelectorAll("img").forEach((q) => {
        q.addEventListener("load", Ce), q.addEventListener("error", Ce), d.add(q);
      });
    }, De = async () => {
      await nextTick(), be(), fe();
    }, K = () => {
      a.pauseOnHover && (h.value = true);
    }, oe = () => {
      a.pauseOnHover && (h.value = false);
    }, je = (q, te) => {
      if (!q) return null;
      const de = typeof q == "string" ? { type: "text", content: q } : q;
      return {
        id: `${te}-fixed`,
        type: de.type ?? (de.src ? "image" : "text"),
        content: de.content ?? de.title ?? de.src ?? "",
        src: de.src,
        alt: de.alt,
        title: de.title,
        description: de.description,
        backgroundColor: de.backgroundColor,
        textColor: de.textColor,
        borderRadius: de.borderRadius
      };
    }, pe = computed(() => je(a.prefix, "prefix")), ze = computed(() => je(a.suffix, "suffix")), at = (q, te) => {
      var me, Ne;
      const de = { target: q, item: te };
      q === "prefix" ? (me = a.onPrefixClick) == null || me.call(a, de) : (Ne = a.onSuffixClick) == null || Ne.call(a, de);
    }, Qe = (q) => q.alt || q.content || "Runhorselight image";
    return onMounted(() => {
      De(), typeof ResizeObserver < "u" ? (i = new ResizeObserver(() => fe()), r.value && i.observe(r.value), n.value && i.observe(n.value), g.value && i.observe(g.value)) : window.addEventListener("resize", fe), we();
    }), onBeforeUnmount(() => {
      ye(), he(), i == null || i.disconnect(), i = null, window.removeEventListener("resize", fe);
    }), watch(
      [
        () => a.items,
        () => a.gap,
        () => a.height,
        () => a.loop,
        () => a.direction,
        () => a.autofill,
        () => D.value,
        () => a.prefix,
        () => a.suffix
      ],
      () => {
        v.value = 1, x = 0, De();
      },
      { deep: true }
    ), watch(
      () => a.pauseOnHover,
      (q) => {
        q || (h.value = false);
      }
    ), (q, te) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([E.value, "flex items-center gap-4"]),
      style: normalizeStyle(unref(y)),
      onMouseenter: K,
      onMouseleave: oe
    }, [
      pe.value ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass([Y.value, "shrink-0 px-2"]),
        style: normalizeStyle(unref(V)),
        onClick: te[0] || (te[0] = (de) => at("prefix", pe.value))
      }, [
        renderSlot(q.$slots, "prefix", {
          item: pe.value,
          target: "prefix"
        }, () => [
          pe.value.type === "image" ? (openBlock(), createElementBlock("img", {
            key: 0,
            src: pe.value.src,
            alt: Qe(pe.value),
            class: normalizeClass(X.value),
            style: normalizeStyle(unref(T)(pe.value)),
            draggable: "false"
          }, null, 14, xd)) : pe.value.type === "card" ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(se.value),
            style: normalizeStyle(unref(A)(pe.value))
          }, [
            createElementVNode("div", {
              class: normalizeClass(H.value)
            }, toDisplayString(pe.value.title || pe.value.content), 3),
            pe.value.description ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(J.value)
            }, toDisplayString(pe.value.description), 3)) : createCommentVNode("", true)
          ], 6)) : (openBlock(), createElementBlock("span", {
            key: 2,
            class: normalizeClass(re.value),
            style: normalizeStyle({ color: pe.value.textColor || a.textColor })
          }, toDisplayString(pe.value.content), 7))
        ], true)
      ], 6)) : createCommentVNode("", true),
      createElementVNode("div", {
        ref_key: "viewportRef",
        ref: r,
        class: normalizeClass(M.value)
      }, [
        D.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          ref_key: "slotMeasureRef",
          ref: g,
          class: "pointer-events-none absolute -z-10 whitespace-nowrap opacity-0",
          style: normalizeStyle(unref(V)),
          "aria-hidden": "true"
        }, [
          renderSlot(q.$slots, "default", {}, void 0, true)
        ], 4)) : createCommentVNode("", true),
        createElementVNode("div", {
          ref_key: "trackRef",
          ref: o,
          class: normalizeClass(N.value),
          style: normalizeStyle(ne.value)
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(Z.value, (de) => (openBlock(), createElementBlock("div", {
            key: de,
            ref_for: true,
            ref: de === 1 ? (me) => n.value = me : void 0,
            class: normalizeClass(j.value),
            style: normalizeStyle(unref(I)),
            "aria-hidden": de > 1
          }, [
            D.value ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(B.value, (me) => (openBlock(), createElementBlock("div", {
              key: `slot-${de}-${me}`,
              class: normalizeClass(Y.value),
              style: normalizeStyle(unref(V))
            }, [
              renderSlot(q.$slots, "default", {}, void 0, true)
            ], 6))), 128)) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(W.value, (me) => (openBlock(), createElementBlock("div", {
              key: `${de}-${me.id}`,
              class: normalizeClass(Y.value),
              style: normalizeStyle(unref(V))
            }, [
              renderSlot(q.$slots, "item", { item: me }, () => [
                me.type === "image" ? (openBlock(), createElementBlock("img", {
                  key: 0,
                  src: me.src,
                  alt: Qe(me),
                  class: normalizeClass(X.value),
                  style: normalizeStyle(unref(T)(me)),
                  draggable: "false"
                }, null, 14, Cd)) : me.type === "card" ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: normalizeClass(se.value),
                  style: normalizeStyle(unref(A)(me))
                }, [
                  createElementVNode("div", {
                    class: normalizeClass(H.value)
                  }, toDisplayString(me.title || me.content), 3),
                  me.description ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: normalizeClass(J.value)
                  }, toDisplayString(me.description), 3)) : createCommentVNode("", true)
                ], 6)) : (openBlock(), createElementBlock("span", {
                  key: 2,
                  class: normalizeClass(re.value),
                  style: normalizeStyle({ color: me.textColor || a.textColor })
                }, toDisplayString(me.content), 7))
              ], true)
            ], 6))), 128))
          ], 14, kd))), 128))
        ], 6)
      ], 2),
      ze.value ? (openBlock(), createElementBlock("div", {
        key: 1,
        class: normalizeClass([Y.value, "shrink-0 px-2"]),
        style: normalizeStyle(unref(V)),
        onClick: te[1] || (te[1] = (de) => at("suffix", ze.value))
      }, [
        renderSlot(q.$slots, "suffix", {
          item: ze.value,
          target: "suffix"
        }, () => [
          ze.value.type === "image" ? (openBlock(), createElementBlock("img", {
            key: 0,
            src: ze.value.src,
            alt: Qe(ze.value),
            class: normalizeClass(X.value),
            style: normalizeStyle(unref(T)(ze.value)),
            draggable: "false"
          }, null, 14, Sd)) : ze.value.type === "card" ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(se.value),
            style: normalizeStyle(unref(A)(ze.value))
          }, [
            createElementVNode("div", {
              class: normalizeClass(H.value)
            }, toDisplayString(ze.value.title || ze.value.content), 3),
            ze.value.description ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(J.value)
            }, toDisplayString(ze.value.description), 3)) : createCommentVNode("", true)
          ], 6)) : (openBlock(), createElementBlock("span", {
            key: 2,
            class: normalizeClass(re.value),
            style: normalizeStyle({ color: ze.value.textColor || a.textColor })
          }, toDisplayString(ze.value.content), 7))
        ], true)
      ], 6)) : createCommentVNode("", true)
    ], 38));
  }
}), $d = /* @__PURE__ */ lt(zd, [["__scopeId", "data-v-3920515c"]]), Bd = le($d), Vd = R({
  base: "relative",
  variants: {
    orientation: {
      vertical: "flex flex-col",
      horizontal: "flex flex-row"
    },
    align: {
      left: "",
      right: "",
      alternate: ""
    }
  },
  defaultVariants: {
    orientation: "vertical",
    align: "left"
  }
}), Id = {}, Md = {}, Td = /* @__PURE__ */ defineComponent({
  name: "ZTimeline",
  __name: "timeline",
  props: {
    orientation: { default: "vertical" },
    align: { default: "left" },
    reverse: { type: Boolean, default: false },
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  emits: Id,
  setup(e) {
    const a = e;
    provide("timelineAlign", a.align), provide("timelineOrientation", a.orientation);
    const l = computed(() => {
      var r, o;
      return a.unstyled ? ((r = a.pt) == null ? void 0 : r.root) || "" : Vd({
        orientation: a.orientation,
        align: a.align,
        class: (o = a.pt) == null ? void 0 : o.root
      });
    }), t = computed(() => a.reverse ? { flexDirection: "column-reverse" } : {});
    return (r, o) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(l.value),
      style: normalizeStyle(t.value)
    }, [
      renderSlot(r.$slots, "default")
    ], 6));
  }
}), Dd = /* @__PURE__ */ defineComponent({
  name: "ZTimelineItem",
  __name: "timeline-item",
  props: {
    position: {},
    isLast: { type: Boolean },
    dotColor: {},
    lineColor: {},
    unstyled: { type: Boolean, default: false },
    pt: {}
  },
  emits: Md,
  setup(e) {
    const a = e, l = inject(
      "timelineAlign",
      "left"
    ), t = inject(
      "timelineOrientation",
      "vertical"
    ), r = computed(() => l === "alternate"), o = computed(() => {
      var w, x, i;
      if (a.unstyled)
        return ((w = a.pt) == null ? void 0 : w.root) || "";
      const c = "relative flex";
      return t === "vertical" ? `${c} ${l === "right" ? "flex-row-reverse" : "flex-row"} ${((x = a.pt) == null ? void 0 : x.root) || ""}` : `${c} min-w-0 flex-1 flex-col items-center ${((i = a.pt) == null ? void 0 : i.root) || ""}`;
    }), n = computed(() => {
      var w, x, i;
      if (a.unstyled)
        return ((w = a.pt) == null ? void 0 : w.dot) || "";
      const c = "relative z-10 mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center";
      return t === "vertical" ? `${c} ${l === "right" ? "ml-3" : "mr-3"} ${((x = a.pt) == null ? void 0 : x.dot) || ""}` : `${c} mt-0 ${((i = a.pt) == null ? void 0 : i.dot) || ""}`;
    }), g = computed(() => {
      var c, w, x;
      return a.unstyled ? ((c = a.pt) == null ? void 0 : c.connector) || "" : t === "vertical" ? `absolute top-5 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600 ${l === "right" ? "right-2.5" : "left-2.5"} ${((w = a.pt) == null ? void 0 : w.connector) || ""}` : `absolute left-1/2 right-0 top-2.5 h-0.5 bg-gray-300 dark:bg-gray-600 ${((x = a.pt) == null ? void 0 : x.connector) || ""}`;
    }), s = computed(() => {
      var c, w, x;
      return a.unstyled ? ((c = a.pt) == null ? void 0 : c.content) || "" : t === "horizontal" ? `mt-2 w-full text-center ${((w = a.pt) == null ? void 0 : w.content) || ""}` : `flex-1 ${((x = a.pt) == null ? void 0 : x.content) || ""}`;
    }), u = computed(() => {
      var c, w;
      return a.unstyled ? ((c = a.pt) == null ? void 0 : c.opposite) || "" : `flex-1 text-right ${((w = a.pt) == null ? void 0 : w.opposite) || ""}`;
    }), v = computed(() => a.dotColor ? { borderColor: a.dotColor, backgroundColor: a.dotColor } : {}), h = computed(() => a.lineColor ? { backgroundColor: a.lineColor } : {}), S = computed(() => {
      const c = {};
      return a.dotColor && !a.unstyled && (a.lineColor || (c["--line-color"] = a.dotColor)), c;
    });
    return (c, w) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["timeline-item", o.value]),
      style: normalizeStyle(S.value)
    }, [
      createElementVNode("div", {
        class: normalizeClass(["timeline-dot", n.value])
      }, [
        renderSlot(c.$slots, "dot", {}, () => {
          var x;
          return [
            createElementVNode("div", {
              class: normalizeClass([
                "h-3 w-3 rounded-full border-2 border-gray-300 bg-white dark:border-gray-500 dark:bg-gray-900",
                (x = a.pt) == null ? void 0 : x.dot
              ]),
              style: normalizeStyle(v.value)
            }, null, 6)
          ];
        })
      ], 2),
      a.isLast ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["timeline-connector", g.value]),
        style: normalizeStyle(h.value)
      }, null, 6)),
      createElementVNode("div", {
        class: normalizeClass(s.value)
      }, [
        renderSlot(c.$slots, "default")
      ], 2),
      r.value ? (openBlock(), createElementBlock("div", {
        key: 1,
        class: normalizeClass(u.value)
      }, [
        renderSlot(c.$slots, "opposite")
      ], 2)) : createCommentVNode("", true)
    ], 6));
  }
}), Rd = le(Td), Ed = le(Dd), vt = ref([]);
const cl = (e) => {
  const a = vt.value.findIndex((l) => l.id === e);
  a !== -1 && vt.value.splice(a, 1);
}, yt = R({
  slots: {
    base: "pointer-events-auto flex w-full max-w-md items-center gap-3 rounded-lg border p-4 shadow-lg transition-all duration-300 ease-in-out",
    title: "text-sm font-semibold",
    description: "text-sm opacity-90",
    icon: "h-5 w-5 shrink-0",
    closeButton: "ml-auto -mr-2 -mt-2 inline-flex h-6 w-6 items-center justify-center rounded-md p-1 opacity-50 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2"
  },
  variants: {
    type: {
      success: {
        base: "border-green-200 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-900/30 dark:text-green-300",
        icon: "text-green-500 dark:text-green-400",
        closeButton: "text-green-800 hover:bg-green-100 dark:text-green-300 dark:hover:bg-green-800"
      },
      error: {
        base: "border-red-200 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-900/30 dark:text-red-300",
        icon: "text-red-500 dark:text-red-400",
        closeButton: "text-red-800 hover:bg-red-100 dark:text-red-300 dark:hover:bg-red-800"
      },
      warning: {
        base: "border-yellow-200 bg-yellow-50 text-yellow-800 dark:border-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
        icon: "text-yellow-500 dark:text-yellow-400",
        closeButton: "text-yellow-800 hover:bg-yellow-100 dark:text-yellow-300 dark:hover:bg-yellow-800"
      },
      info: {
        base: "border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
        icon: "text-blue-500 dark:text-blue-400",
        closeButton: "text-blue-800 hover:bg-blue-100 dark:text-blue-300 dark:hover:bg-blue-800"
      }
    }
  },
  defaultVariants: {
    type: "info"
  }
}), Pd = ["innerHTML"], jd = { class: "flex-1" }, Zd = /* @__PURE__ */ defineComponent({
  __name: "ToastItem",
  props: {
    visible: { type: Boolean },
    id: {},
    message: {},
    type: {},
    duration: {},
    position: {},
    onClose: { type: Function }
  },
  emits: ["close"],
  setup(e, { emit: a }) {
    const l = e, t = a, { type: r = "info", duration: o = 3e3 } = l, n = computed(() => yt().base({ type: l.type })), g = computed(() => yt().icon({ type: l.type })), s = computed(
      () => yt().description({ type: l.type })
    ), u = computed(
      () => yt().closeButton({ type: l.type })
    ), v = {
      info: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" /></svg>',
      success: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" /></svg>',
      warning: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" /></svg>',
      error: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" /></svg>'
    };
    let h;
    const S = ref(o), c = ref(0), w = () => {
      o <= 0 || (c.value = Date.now(), h = setTimeout(() => {
        k();
      }, S.value));
    }, x = () => {
      o <= 0 || (clearTimeout(h), S.value -= Date.now() - c.value);
    }, i = () => {
      o <= 0 || w();
    }, d = () => {
      k();
    }, k = () => {
      t("close", l.id), l.onClose && l.onClose(l.id);
    };
    return onMounted(() => {
      w();
    }), onUnmounted(() => {
      clearTimeout(h);
    }), (y, $) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(n.value),
      role: "alert",
      onMouseenter: x,
      onMouseleave: i
    }, [
      createElementVNode("div", {
        class: normalizeClass(g.value)
      }, [
        renderSlot(y.$slots, "icon", {}, () => [
          createElementVNode("span", {
            innerHTML: v[unref(r) || "info"]
          }, null, 8, Pd)
        ])
      ], 2),
      createElementVNode("div", jd, [
        createElementVNode("div", {
          class: normalizeClass(s.value)
        }, toDisplayString(e.message), 3)
      ]),
      (openBlock(), createElementBlock("button", {
        key: 0,
        type: "button",
        class: normalizeClass(u.value),
        "aria-label": "Close",
        onClick: d
      }, [...$[0] || ($[0] = [
        createElementVNode("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }, [
          createElementVNode("line", {
            x1: "18",
            y1: "6",
            x2: "6",
            y2: "18"
          }),
          createElementVNode("line", {
            x1: "6",
            y1: "6",
            x2: "18",
            y2: "18"
          })
        ], -1)
      ])], 2))
    ], 34));
  }
}), Wd = { class: "pointer-events-none fixed inset-0 z-[9999] overflow-hidden" }, fl = /* @__PURE__ */ defineComponent({
  __name: "ToastContainer",
  setup(e) {
    const a = [
      "top-left",
      "top-right",
      "bottom-left",
      "bottom-right",
      "top-center",
      "bottom-center"
    ], l = (n) => vt.value.filter((g) => (g.position || "top-right") === n), t = (n) => {
      cl(n);
    }, r = (n) => {
      switch (n) {
        case "top-left":
          return "top-0 left-0 items-start";
        case "top-right":
          return "top-0 right-0 items-end";
        case "bottom-left":
          return "bottom-0 left-0 items-start justify-end";
        case "bottom-right":
          return "bottom-0 right-0 items-end justify-end";
        case "top-center":
          return "top-0 left-1/2 -translate-x-1/2 items-center";
        case "bottom-center":
          return "bottom-0 left-1/2 -translate-x-1/2 items-center justify-end";
        default:
          return "top-0 right-0 items-end";
      }
    }, o = (n) => {
      const g = n.includes("top"), s = n.includes("center"), u = n.includes("right");
      let v = "", h = "";
      return s ? (v = g ? "-translate-y-full opacity-0" : "translate-y-full opacity-0", h = g ? "-translate-y-full opacity-0" : "translate-y-full opacity-0") : g ? u ? (v = "translate-x-full opacity-0", h = "translate-x-full opacity-0") : (v = "-translate-x-full opacity-0", h = "-translate-x-full opacity-0") : (v = "translate-y-full opacity-0", h = "translate-y-full opacity-0"), {
        enter: "transition-all duration-300 ease-out",
        leave: "transition-all duration-200 ease-in absolute w-full",
        enterFrom: v,
        leaveTo: h
      };
    };
    return (n, g) => (openBlock(), createElementBlock("div", Wd, [
      (openBlock(), createElementBlock(Fragment, null, renderList(a, (s) => createElementVNode("div", {
        key: s,
        class: normalizeClass([
          "absolute flex w-full flex-col gap-4 p-4 md:max-w-[420px]",
          r(s)
        ])
      }, [
        createVNode(TransitionGroup, {
          tag: "div",
          "enter-active-class": o(s).enter,
          "leave-active-class": o(s).leave,
          "enter-from-class": o(s).enterFrom,
          "leave-to-class": o(s).leaveTo,
          "move-class": "transition-all duration-300 ease-in-out",
          class: "flex flex-col gap-4 w-full"
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(l(s), (u) => (openBlock(), createBlock(Zd, mergeProps({
              key: u.id
            }, { ref_for: true }, u, { onClose: t }), null, 16))), 128))
          ]),
          _: 2
        }, 1032, ["enter-active-class", "leave-active-class", "enter-from-class", "leave-to-class"])
      ], 2)), 64))
    ]));
  }
});
const Hd = /* @__PURE__ */ defineComponent({
  __name: "Steps",
  props: {
    current: { default: 0 },
    direction: { default: "horizontal" },
    status: { default: "process" }
  },
  emits: ["update:current", "change"],
  setup(e, { emit: a }) {
    const l = e, t = a, r = ref([]), o = (s) => {
      r.value.push(s);
    }, n = (s) => {
      const u = r.value.indexOf(s);
      u !== -1 && r.value.splice(u, 1);
    }, g = (s) => {
      s !== l.current && (t("update:current", s), t("change", s));
    };
    return provide("steps-context", {
      current: toRef(l, "current"),
      direction: toRef(l, "direction"),
      status: toRef(l, "status"),
      steps: r,
      registerStep: o,
      unregisterStep: n,
      onChange: g
    }), (s, u) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([
        "flex w-full gap-4",
        e.direction === "vertical" ? "flex-col" : "flex-row items-center"
      ])
    }, [
      renderSlot(s.$slots, "default")
    ], 2));
  }
}), Nd = { class: "relative z-10 flex flex-col items-center" }, Gd = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  class: "h-5 w-5"
}, Kd = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  class: "h-5 w-5"
}, Yd = { key: 2 }, Ud = {
  key: 0,
  class: "mt-1 text-xs text-gray-500 dark:text-gray-400"
}, Xd = /* @__PURE__ */ defineComponent({
  __name: "StepItem",
  props: {
    title: {},
    description: {},
    status: {},
    disabled: { type: Boolean, default: false }
  },
  setup(e) {
    const a = e, l = inject("steps-context"), t = Symbol("step-item");
    onMounted(() => {
      l == null || l.registerStep(t);
    }), onUnmounted(() => {
      l == null || l.unregisterStep(t);
    });
    const r = computed(() => (l == null ? void 0 : l.steps.value.indexOf(t)) ?? -1), o = computed(() => r.value === ((l == null ? void 0 : l.steps.value.length) ?? 0) - 1), n = computed(() => {
      if (a.status) return a.status;
      if (!l) return "wait";
      const S = l.current.value;
      return r.value < S ? "finish" : r.value === S ? l.status.value : "wait";
    }), g = computed(() => n.value === "finish"), s = computed(() => n.value === "process"), u = computed(() => !a.disabled && l), v = computed(() => {
      switch (n.value) {
        case "finish":
          return "border-blue-500 bg-white text-blue-500 dark:border-blue-500 dark:bg-gray-900";
        case "process":
          return "border-blue-500 bg-blue-500 text-white dark:border-blue-500 dark:bg-blue-500";
        case "error":
          return "border-red-500 bg-white text-red-500 dark:border-red-500 dark:bg-gray-900";
        default:
          return "border-gray-200 bg-white text-gray-400 dark:border-gray-700 dark:bg-gray-900";
      }
    }), h = () => {
      u.value && l && l.onChange(r.value);
    };
    return (S, c) => {
      var w, x, i;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "relative flex flex-1",
          ((w = unref(l)) == null ? void 0 : w.direction.value) === "vertical" ? "flex-col pb-8 last:pb-0" : "flex-row items-center last:flex-none",
          u.value ? "cursor-pointer" : "cursor-default"
        ]),
        onClick: h
      }, [
        o.value ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([
            "absolute transition-colors duration-300",
            ((x = unref(l)) == null ? void 0 : x.direction.value) === "vertical" ? "left-[15px] top-[30px] h-[calc(100%-10px)] w-[2px]" : "left-[50%] right-[-50%] top-[15px] h-[2px] w-full",
            g.value ? "bg-blue-500" : "bg-gray-200 dark:bg-gray-700"
          ])
        }, null, 2)),
        createElementVNode("div", Nd, [
          createElementVNode("div", {
            class: normalizeClass([
              "flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all duration-300",
              v.value
            ])
          }, [
            renderSlot(S.$slots, "icon", {}, () => [
              n.value === "finish" ? (openBlock(), createElementBlock("svg", Gd, [...c[0] || (c[0] = [
                createElementVNode("path", {
                  "fill-rule": "evenodd",
                  d: "M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z",
                  "clip-rule": "evenodd"
                }, null, -1)
              ])])) : n.value === "error" ? (openBlock(), createElementBlock("svg", Kd, [...c[1] || (c[1] = [
                createElementVNode("path", {
                  "fill-rule": "evenodd",
                  d: "M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",
                  "clip-rule": "evenodd"
                }, null, -1)
              ])])) : (openBlock(), createElementBlock("span", Yd, toDisplayString(r.value + 1), 1))
            ])
          ], 2)
        ]),
        createElementVNode("div", {
          class: normalizeClass([
            "flex flex-col",
            ((i = unref(l)) == null ? void 0 : i.direction.value) === "vertical" ? "ml-4 mt-0.5" : "absolute top-8 left-1/2 -translate-x-1/2 w-max max-w-[120px] text-center mt-2"
          ])
        }, [
          createElementVNode("div", {
            class: normalizeClass([
              "text-sm font-medium transition-colors duration-300",
              s.value || g.value ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400",
              n.value === "error" ? "text-red-500" : ""
            ])
          }, [
            renderSlot(S.$slots, "title", {}, () => [
              createTextVNode(toDisplayString(e.title), 1)
            ])
          ], 2),
          e.description || S.$slots.description ? (openBlock(), createElementBlock("div", Ud, [
            renderSlot(S.$slots, "description", {}, () => [
              createTextVNode(toDisplayString(e.description), 1)
            ])
          ])) : createCommentVNode("", true)
        ], 2)
      ], 2);
    };
  }
}), qd = ["value", "checked", "disabled"], Jd = /* @__PURE__ */ defineComponent({
  __name: "Radio",
  props: {
    modelValue: { type: [String, Number, Boolean] },
    label: { type: [String, Number, Boolean] },
    disabled: { type: Boolean, default: false },
    size: {}
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: a }) {
    const l = e, t = a, r = inject("radio-group", null), o = computed(() => r ? r.modelValue.value === l.label : l.modelValue === l.label), n = computed(() => (r == null ? void 0 : r.disabled.value) || false || l.disabled), g = computed(() => (r == null ? void 0 : r.size.value) || l.size || "md"), s = computed(() => {
      switch (g.value) {
        case "sm":
          return "h-4 w-4";
        case "lg":
          return "h-6 w-6";
        default:
          return "h-5 w-5";
      }
    }), u = computed(() => {
      switch (g.value) {
        case "sm":
          return "h-1.5 w-1.5";
        case "lg":
          return "h-2.5 w-2.5";
        default:
          return "h-2 w-2";
      }
    }), v = computed(() => {
      switch (g.value) {
        case "sm":
          return "text-sm";
        case "lg":
          return "text-lg";
        default:
          return "text-base";
      }
    }), h = () => {
      if (n.value) return;
      const S = l.label ?? "";
      r ? r.changeEvent(S) : (t("update:modelValue", S), t("change", S));
    };
    return (S, c) => (openBlock(), createElementBlock("label", {
      class: normalizeClass([
        "group relative inline-flex cursor-pointer items-center select-none",
        n.value ? "cursor-not-allowed opacity-50" : ""
      ])
    }, [
      createElementVNode("input", {
        type: "radio",
        class: "peer sr-only",
        value: e.label,
        checked: o.value,
        disabled: n.value,
        onChange: h
      }, null, 40, qd),
      createElementVNode("div", {
        class: normalizeClass([
          "relative flex items-center justify-center rounded-full border transition-all duration-200",
          s.value,
          o.value ? "border-blue-500 bg-blue-500" : "border-gray-300 bg-white group-hover:border-blue-500 dark:border-gray-600 dark:bg-gray-800"
        ])
      }, [
        createElementVNode("div", {
          class: normalizeClass([
            "rounded-full bg-white transition-transform duration-200",
            u.value,
            o.value ? "scale-100" : "scale-0"
          ])
        }, null, 2)
      ], 2),
      S.$slots.default || e.label ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(["ml-2 text-gray-700 dark:text-gray-300", v.value])
      }, [
        renderSlot(S.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(e.label), 1)
        ])
      ], 2)) : createCommentVNode("", true)
    ], 2));
  }
}), Qd = /* @__PURE__ */ defineComponent({
  __name: "RadioGroup",
  props: {
    modelValue: { type: [String, Number, Boolean] },
    disabled: { type: Boolean, default: false },
    size: { default: "md" },
    direction: { default: "horizontal" }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: a }) {
    const l = e, t = a, r = (o) => {
      t("update:modelValue", o), t("change", o);
    };
    return provide("radio-group", {
      modelValue: toRef(l, "modelValue"),
      disabled: toRef(l, "disabled"),
      size: toRef(l, "size"),
      changeEvent: r
    }), (o, n) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([
        "flex",
        e.direction === "vertical" ? "flex-col gap-2" : "flex-row gap-4"
      ]),
      role: "radiogroup",
      "aria-label": "radio-group"
    }, [
      renderSlot(o.$slots, "default")
    ], 2));
  }
}), _d = R({
  slots: {
    root: "w-full overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-900",
    table: "w-full text-left text-sm",
    thead: "bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-800 dark:text-gray-400",
    th: "px-6 py-3 font-medium",
    tbody: "divide-y divide-gray-200 dark:divide-gray-700",
    tr: "bg-white transition-colors hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800",
    td: "whitespace-nowrap px-6 py-4 text-gray-900 dark:text-gray-100",
    empty: "flex flex-col items-center justify-center py-12 text-gray-500 dark:text-gray-400"
  },
  variants: {
    stripe: {
      true: {
        tr: "even:bg-gray-50 dark:even:bg-gray-800"
      }
    },
    border: {
      true: {
        root: "border border-gray-200 dark:border-gray-700",
        th: "border-b border-gray-200 dark:border-gray-700",
        td: "border-b border-gray-200 dark:border-gray-700"
      }
    },
    dense: {
      true: {
        th: "px-4 py-2",
        td: "px-4 py-2"
      }
    }
  },
  defaultVariants: {
    stripe: false,
    border: false,
    dense: false
  }
}), ec = { class: "mb-4 flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-gray-50 dark:bg-gray-950" }, tc = { class: "min-w-0 flex-1" }, lc = {
  key: 0,
  class: "w-full"
}, ac = ["placeholder"], rc = { class: "flex items-center gap-2" }, oc = { class: "overflow-x-auto" }, nc = ["onClick", "aria-sort"], sc = { class: "flex items-center gap-2" }, ic = {
  key: 0,
  class: "inline-flex h-4 w-4 items-center justify-center text-gray-500 dark:text-gray-400"
}, uc = {
  key: 1,
  class: "text-xs text-gray-400"
}, dc = { class: "text-sm" }, cc = {
  key: 1,
  class: "mt-4 flex flex-wrap items-center justify-between gap-3 rounded-b-lg border-t border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-600 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-300"
}, fc = { class: "flex items-center gap-2" }, vc = ["disabled"], gc = ["disabled"], bc = /* @__PURE__ */ defineComponent({
  name: "ZTable",
  __name: "Table",
  props: {
    data: { default: () => [] },
    columns: { default: () => [] },
    stripe: { type: Boolean, default: false },
    border: { type: Boolean, default: false },
    dense: { type: Boolean, default: false },
    emptyText: { default: "No Data" },
    searchable: { type: Boolean, default: false },
    searchPlaceholder: { default: "Search" },
    pagination: { type: Boolean, default: false },
    pageSize: { default: 10 },
    initialPage: { default: 1 },
    exportable: { type: Boolean, default: false }
  },
  setup(e) {
    const a = e, l = ref(""), t = ref(""), r = ref("asc"), o = ref(a.initialPage), n = computed(() => {
      const i = a.data ?? [];
      return t.value ? [...i].sort((d, k) => {
        const y = d[t.value], $ = k[t.value];
        if (y == null && $ == null) return 0;
        if (y == null) return r.value === "asc" ? -1 : 1;
        if ($ == null) return r.value === "asc" ? 1 : -1;
        if (typeof y == "number" && typeof $ == "number")
          return r.value === "asc" ? y - $ : $ - y;
        const I = String(y).toLowerCase(), V = String($).toLowerCase();
        return I < V ? r.value === "asc" ? -1 : 1 : I > V ? r.value === "asc" ? 1 : -1 : 0;
      }) : i;
    }), g = computed(() => {
      const i = n.value, d = a.columns ?? [];
      if (!a.searchable || !l.value.trim())
        return i;
      const k = l.value.trim().toLowerCase();
      return i.filter(
        (y) => d.some(($) => {
          const I = y[$.key];
          return I == null ? false : String(I).toLowerCase().includes(k);
        })
      );
    }), s = computed(
      () => Math.max(1, Math.ceil(g.value.length / a.pageSize))
    ), u = computed(() => {
      if (!a.pagination)
        return g.value;
      const i = (o.value - 1) * a.pageSize;
      return g.value.slice(i, i + a.pageSize);
    });
    watch([() => g.value.length, () => a.pageSize], () => {
      o.value > s.value && (o.value = s.value);
    });
    const v = computed(() => {
      const { root: i, table: d, thead: k, th: y, tbody: $, tr: I, td: V, empty: A } = _d({
        stripe: a.stripe,
        border: a.border,
        dense: a.dense
      });
      return {
        root: i(),
        table: d(),
        thead: k(),
        th: y(),
        tbody: $(),
        tr: I(),
        td: V(),
        empty: A()
      };
    }), h = (i) => {
      switch (i) {
        case "center":
          return "text-center";
        case "right":
          return "text-right";
        default:
          return "text-left";
      }
    }, S = (i) => {
      t.value === i ? r.value = r.value === "asc" ? "desc" : "asc" : (t.value = i, r.value = "asc");
    }, c = (i) => t.value !== i ? "none" : r.value === "asc" ? "ascending" : "descending", w = () => {
      const i = a.columns ?? [], d = i.map(
        (y) => `"${String(y.title).replace(/"/g, '""')}"`
      ), k = g.value.map(
        (y) => i.map(($) => {
          const I = y[$.key];
          return `"${String(I ?? "").replace(/"/g, '""')}"`;
        }).join(",")
      );
      return [d.join(","), ...k].join(`\r
`);
    }, x = () => {
      const i = w(), d = new Blob([i], { type: "text/csv;charset=utf-8;" }), k = URL.createObjectURL(d), y = document.createElement("a");
      y.href = k, y.download = "table-export.csv", document.body.appendChild(y), y.click(), document.body.removeChild(y), URL.revokeObjectURL(k);
    };
    return (i, d) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(v.value.root)
    }, [
      createElementVNode("div", ec, [
        createElementVNode("div", tc, [
          a.searchable ? (openBlock(), createElementBlock("div", lc, [
            withDirectives(createElementVNode("input", {
              "onUpdate:modelValue": d[0] || (d[0] = (k) => l.value = k),
              type: "text",
              placeholder: a.searchPlaceholder,
              class: "w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:focus:border-blue-400 dark:focus:ring-blue-400"
            }, null, 8, ac), [
              [vModelText, l.value]
            ])
          ])) : createCommentVNode("", true)
        ]),
        createElementVNode("div", rc, [
          a.exportable ? (openBlock(), createElementBlock("button", {
            key: 0,
            type: "button",
            onClick: x,
            class: "rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-blue-500 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:text-blue-400"
          }, " 导出 CSV ")) : createCommentVNode("", true)
        ])
      ]),
      createElementVNode("div", oc, [
        createElementVNode("table", {
          class: normalizeClass(v.value.table)
        }, [
          createElementVNode("thead", {
            class: normalizeClass(v.value.thead)
          }, [
            createElementVNode("tr", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(e.columns, (k) => (openBlock(), createElementBlock("th", {
                key: k.key,
                class: normalizeClass([
                  v.value.th,
                  h(k.align),
                  k.sortable ? "cursor-pointer select-none text-gray-700 dark:text-gray-300" : ""
                ]),
                style: normalizeStyle({
                  width: k.width ? typeof k.width == "number" ? `${k.width}px` : k.width : void 0
                }),
                onClick: (y) => k.sortable && S(k.key),
                "aria-sort": k.sortable ? c(k.key) : void 0
              }, [
                createElementVNode("div", sc, [
                  k.icon ? (openBlock(), createElementBlock("span", ic, toDisplayString(k.icon), 1)) : createCommentVNode("", true),
                  createElementVNode("span", null, toDisplayString(k.title), 1),
                  k.sortable ? (openBlock(), createElementBlock("span", uc, toDisplayString(t.value === k.key ? r.value === "asc" ? "↑" : "↓" : "⇅"), 1)) : createCommentVNode("", true)
                ])
              ], 14, nc))), 128))
            ])
          ], 2),
          createElementVNode("tbody", {
            class: normalizeClass(v.value.tbody)
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(u.value, (k, y) => (openBlock(), createElementBlock("tr", {
              key: y,
              class: normalizeClass(v.value.tr)
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(e.columns, ($) => (openBlock(), createElementBlock("td", {
                key: $.key,
                class: normalizeClass([v.value.td, h($.align)])
              }, [
                renderSlot(i.$slots, $.key, {
                  row: k,
                  index: y
                }, () => [
                  createTextVNode(toDisplayString(k[$.key]), 1)
                ], true)
              ], 2))), 128))
            ], 2))), 128))
          ], 2)
        ], 2)
      ]),
      g.value.length ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(v.value.empty)
      }, [
        renderSlot(i.$slots, "empty", {}, () => [
          createElementVNode("span", dc, toDisplayString(e.emptyText), 1)
        ], true)
      ], 2)),
      a.pagination && g.value.length ? (openBlock(), createElementBlock("div", cc, [
        createElementVNode("div", null, " 第 " + toDisplayString(o.value) + " / " + toDisplayString(s.value) + " 页 · 共 " + toDisplayString(g.value.length) + " 条 ", 1),
        createElementVNode("div", fc, [
          createElementVNode("button", {
            type: "button",
            class: "rounded-lg border border-gray-200 bg-white px-3 py-1 text-sm text-gray-700 transition hover:border-blue-500 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:text-blue-400",
            disabled: o.value <= 1,
            onClick: d[1] || (d[1] = (k) => o.value = Math.max(1, o.value - 1))
          }, " 上一页 ", 8, vc),
          createElementVNode("button", {
            type: "button",
            class: "rounded-lg border border-gray-200 bg-white px-3 py-1 text-sm text-gray-700 transition hover:border-blue-500 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:text-blue-400",
            disabled: o.value >= s.value,
            onClick: d[2] || (d[2] = (k) => o.value = Math.min(s.value, o.value + 1))
          }, " 下一页 ", 8, gc)
        ])
      ])) : createCommentVNode("", true)
    ], 2));
  }
}), pc = /* @__PURE__ */ lt(bc, [["__scopeId", "data-v-781effc5"]]), mc = {
  ZInputOtp: ca,
  ZModal: ka,
  ZAvatar: Va,
  ZBadge: Da,
  ZSwitch: Pa,
  ZDrawer: qa,
  ZSegmented: lr,
  ZSlider: gr,
  ZPopover: kr,
  ZTooltip: Mr,
  ZChip: Ar,
  ZAlert: Gr,
  ZKbd: Ur,
  ZButton: lo,
  ZCard: oo,
  ZDivider: io,
  ZTextarea: vo,
  ZSelect: Fo,
  ZCheckbox: mo,
  ZCheckboxGroup: yo,
  ZInput: ko,
  ZRate: en,
  ZCalendar: Et,
  ZTimePicker: nl,
  ZDatePicker: jn,
  ZDateTimePicker: Jn,
  ZTimeSelect: us,
  ZSkeleton: ys,
  ZSkeletonText: hs,
  ZSkeletonAvatar: ws,
  ZTabs: Ts,
  ZTabItem: Ds,
  ZPanel: Zs,
  ZPaginator: ri,
  ZProgress: vi,
  ZBreadcrumb: il,
  ZBreadcrumbItem: zi,
  ZSplitter: Ri,
  ZSplitterPanel: Ei,
  ZRangeCalendar: _i,
  ZAccordion: vu,
  ZAccordionItem: gu,
  ZInputTag: xu,
  ZDropdown: Du,
  ZDropdownItem: Ru,
  ZDropdownDivider: Eu,
  ZSwap: Wu,
  ZImage: _u,
  ZLink: nd,
  ZCarousel: pd,
  ZRunhorselight: Bd,
  ZTimeline: Rd,
  ZTimelineItem: Ed,
  ZToastContainer: fl,
  ZSteps: Hd,
  ZStepItem: Xd,
  ZRadio: Jd,
  ZRadioGroup: Qd,
  ZTable: pc
}, wc = {
  install: (e) => {
    for (const [a, l] of Object.entries(mc))
      e.component(a, l);
  }
};
export {
  Ar as A,
  Bd as B,
  Ei as C,
  Da as D,
  Et as E,
  Fo as F,
  Gr as G,
  pc as H,
  Ds as I,
  Jn as J,
  vo as K,
  Rd as L,
  Ed as M,
  nl as N,
  us as O,
  Pa as P,
  Mr as Q,
  Ru as R,
  Ts as T,
  Ur as U,
  Va as V,
  Wu as W,
  Zs as Z,
  _u as _,
  io as a,
  Du as b,
  ca as c,
  ka as d,
  kr as e,
  _i as f,
  lr as g,
  hs as h,
  il as i,
  jn as j,
  ko as k,
  lo as l,
  mo as m,
  nd as n,
  oo as o,
  pd as p,
  qa as q,
  ri as r,
  ws as s,
  gr as t,
  Ri as u,
  vi as v,
  wc as w,
  xu as x,
  ys as y,
  zi as z
};
