import { defineComponent, ref, shallowRef, onMounted, resolveComponent, unref, withCtx, createSlots, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
/* empty css               */
import { VitepressDemoPlaceholder, VitepressDemoBox } from "vitepress-demo-plugin/client";
const TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtY2hpcC1leGFtcGxlLWluZGV4 = `<template>\r
  <div class="max-w-7xl mx-auto px-4">\r
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">\r
      <!-- 基础用法 -->\r
      <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100">\r
        <h3 class="text-lg font-medium mb-4 border-b pb-2">基础用法</h3>\r
        <div class="flex flex-wrap gap-2">\r
          <ZChip>默认芯片</ZChip>\r
          <ZChip color="primary">主色芯片</ZChip>\r
          <ZChip color="secondary">次要色芯片</ZChip>\r
          <ZChip color="success">成功芯片</ZChip>\r
          <ZChip color="warning">警告芯片</ZChip>\r
          <ZChip color="danger">危险芯片</ZChip>\r
        </div>\r
      </div>\r
\r
      <!-- 禁用状态 -->\r
      <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100">\r
        <h3 class="text-lg font-medium mb-4 border-b pb-2">禁用状态</h3>\r
        <div class="flex flex-wrap gap-2">\r
          <ZChip disabled>禁用芯片</ZChip>\r
          <ZChip color="primary" disabled>禁用主色</ZChip>\r
          <ZChip color="danger" disabled>禁用危险</ZChip>\r
        </div>\r
      </div>\r
\r
      <!-- 尺寸 -->\r
      <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100">\r
        <h3 class="text-lg font-medium mb-4 border-b pb-2">尺寸</h3>\r
        <div class="flex items-center flex-wrap gap-3">\r
          <ZChip size="sm" color="primary">小号</ZChip>\r
          <ZChip size="md" color="primary">中号</ZChip>\r
          <ZChip size="lg" color="primary">大号</ZChip>\r
        </div>\r
      </div>\r
\r
      <!-- 圆角 -->\r
      <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100">\r
        <h3 class="text-lg font-medium mb-4 border-b pb-2">圆角</h3>\r
        <div class="flex flex-wrap gap-3">\r
          <ZChip radius="none" color="primary">无圆角</ZChip>\r
          <ZChip radius="sm" color="primary">小圆角</ZChip>\r
          <ZChip radius="md" color="primary">中圆角</ZChip>\r
          <ZChip radius="lg" color="primary">大圆角</ZChip>\r
          <ZChip radius="full" color="primary">全圆角</ZChip>\r
        </div>\r
      </div>\r
\r
      <!-- 颜色 -->\r
      <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100">\r
        <h3 class="text-lg font-medium mb-4 border-b pb-2">颜色</h3>\r
        <div class="flex flex-wrap gap-2">\r
          <ZChip color="default">默认</ZChip>\r
          <ZChip color="primary">主色</ZChip>\r
          <ZChip color="secondary">次要色</ZChip>\r
          <ZChip color="success">成功</ZChip>\r
          <ZChip color="warning">警告</ZChip>\r
          <ZChip color="danger">危险</ZChip>\r
        </div>\r
      </div>\r
\r
      <!-- 自定义内容 -->\r
      <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100">\r
        <h3 class="text-lg font-medium mb-4 border-b pb-2">自定义内容</h3>\r
        <div class="flex flex-wrap gap-3">\r
          <ZChip color="primary">\r
            <template #startContent>\r
              <span class="text-primary-600">🔥</span>\r
            </template>\r
            热门话题\r
          </ZChip>\r
\r
          <ZChip color="success">\r
            <template #startContent>\r
              <svg\r
                class="w-3.5 h-3.5 text-success-600"\r
                xmlns="http://www.w3.org/2000/svg"\r
                viewBox="0 0 20 20"\r
                fill="currentColor"\r
              >\r
                <path\r
                  fill-rule="evenodd"\r
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"\r
                  clip-rule="evenodd"\r
                />\r
              </svg>\r
            </template>\r
            已完成\r
          </ZChip>\r
\r
          <ZChip color="warning">\r
            需注意\r
            <template #endContent>\r
              <svg\r
                class="w-3.5 h-3.5 text-warning-600"\r
                xmlns="http://www.w3.org/2000/svg"\r
                viewBox="0 0 20 20"\r
                fill="currentColor"\r
              >\r
                <path\r
                  fill-rule="evenodd"\r
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"\r
                  clip-rule="evenodd"\r
                />\r
              </svg>\r
            </template>\r
          </ZChip>\r
        </div>\r
      </div>\r
\r
      <!-- 带头像 -->\r
      <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100">\r
        <h3 class="text-lg font-medium mb-4 border-b pb-2">带头像</h3>\r
        <div class="flex flex-wrap gap-3">\r
          <ZChip color="primary">\r
            <template #avatar>\r
              <div\r
                class="flex items-center justify-center w-5 h-5 rounded-full bg-primary-500 text-white text-xs font-medium"\r
              >\r
                U\r
              </div>\r
            </template>\r
            用户\r
          </ZChip>\r
\r
          <ZChip color="success">\r
            <template #avatar>\r
              <div\r
                class="flex items-center justify-center w-5 h-5 rounded-full bg-success-500 text-white text-xs font-medium"\r
              >\r
                A\r
              </div>\r
            </template>\r
            管理员\r
          </ZChip>\r
\r
          <ZChip color="secondary">\r
            <template #avatar>\r
              <div\r
                class="flex items-center justify-center w-5 h-5 rounded-full bg-purple-500 text-white text-xs font-medium overflow-hidden"\r
              >\r
                <svg\r
                  xmlns="http://www.w3.org/2000/svg"\r
                  viewBox="0 0 24 24"\r
                  fill="currentColor"\r
                  class="w-4 h-4"\r
                >\r
                  <path\r
                    fill-rule="evenodd"\r
                    d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"\r
                    clip-rule="evenodd"\r
                  />\r
                </svg>\r
              </div>\r
            </template>\r
            访客\r
          </ZChip>\r
        </div>\r
      </div>\r
\r
      <!-- 关闭按钮 -->\r
      <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100">\r
        <h3 class="text-lg font-medium mb-4 border-b pb-2">关闭按钮</h3>\r
        <div class="flex flex-wrap gap-3">\r
          <ZChip closable @close="handleClose">可关闭芯片</ZChip>\r
          <ZChip closable color="primary" @close="handleClose">主色</ZChip>\r
          <ZChip closable color="danger" @close="handleClose">危险</ZChip>\r
        </div>\r
      </div>\r
\r
      <!-- 可选择 -->\r
      <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100">\r
        <h3 class="text-lg font-medium mb-4 border-b pb-2">可选择</h3>\r
        <div class="flex flex-wrap gap-3">\r
          <ZChip v-model="selected1" selectable color="primary">选项1</ZChip>\r
          <ZChip v-model="selected2" selectable color="secondary">选项2</ZChip>\r
          <ZChip v-model="selected3" selectable color="success">选项3</ZChip>\r
        </div>\r
        <div class="mt-3 text-sm text-gray-500">\r
          已选择:\r
          {{\r
            [\r
              selected1 ? '选项1' : '',\r
              selected2 ? '选项2' : '',\r
              selected3 ? '选项3' : '',\r
            ]\r
              .filter(Boolean)\r
              .join(', ') || '无'\r
          }}\r
        </div>\r
      </div>\r
\r
      <!-- 芯片列表 -->\r
      <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100">\r
        <h3 class="text-lg font-medium mb-4 border-b pb-2">芯片列表</h3>\r
        <div class="flex flex-wrap gap-2">\r
          <ZChip\r
            v-for="(tag, index) in tags"\r
            :key="index"\r
            closable\r
            @close="removeTag(index)"\r
          >\r
            {{ tag }}\r
          </ZChip>\r
          <button\r
            @click="addTag"\r
            class="inline-flex items-center border border-dashed border-gray-300 rounded-full px-3 py-1 text-sm hover:bg-gray-50 transition-colors"\r
          >\r
            <span class="mr-1">+</span>\r
            添加标签\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- 变体 - 占据整行 -->\r
    <div class="mt-8 bg-white rounded-lg shadow-sm p-6 border border-gray-100">\r
      <h3 class="text-lg font-medium mb-4 border-b pb-2">变体</h3>\r
      <div\r
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"\r
      >\r
        <div>\r
          <p class="text-sm text-gray-500 mb-2 font-medium">solid 变体</p>\r
          <div class="flex flex-wrap gap-2">\r
            <ZChip variant="solid" color="default">默认</ZChip>\r
            <ZChip variant="solid" color="primary">主色</ZChip>\r
            <ZChip variant="solid" color="secondary">次要色</ZChip>\r
            <ZChip variant="solid" color="success">成功</ZChip>\r
            <ZChip variant="solid" color="warning">警告</ZChip>\r
            <ZChip variant="solid" color="danger">危险</ZChip>\r
          </div>\r
        </div>\r
        <div>\r
          <p class="text-sm text-gray-500 mb-2 font-medium">bordered 变体</p>\r
          <div class="flex flex-wrap gap-2">\r
            <ZChip variant="bordered" color="default">默认</ZChip>\r
            <ZChip variant="bordered" color="primary">主色</ZChip>\r
            <ZChip variant="bordered" color="secondary">次要色</ZChip>\r
            <ZChip variant="bordered" color="success">成功</ZChip>\r
            <ZChip variant="bordered" color="warning">警告</ZChip>\r
            <ZChip variant="bordered" color="danger">危险</ZChip>\r
          </div>\r
        </div>\r
        <div>\r
          <p class="text-sm text-gray-500 mb-2 font-medium">light 变体</p>\r
          <div class="flex flex-wrap gap-2">\r
            <ZChip variant="light" color="default">默认</ZChip>\r
            <ZChip variant="light" color="primary">主色</ZChip>\r
            <ZChip variant="light" color="secondary">次要色</ZChip>\r
            <ZChip variant="light" color="success">成功</ZChip>\r
            <ZChip variant="light" color="warning">警告</ZChip>\r
            <ZChip variant="light" color="danger">危险</ZChip>\r
          </div>\r
        </div>\r
        <div>\r
          <p class="text-sm text-gray-500 mb-2 font-medium">flat 变体</p>\r
          <div class="flex flex-wrap gap-2">\r
            <ZChip variant="flat" color="default">默认</ZChip>\r
            <ZChip variant="flat" color="primary">主色</ZChip>\r
            <ZChip variant="flat" color="secondary">次要色</ZChip>\r
            <ZChip variant="flat" color="success">成功</ZChip>\r
            <ZChip variant="flat" color="warning">警告</ZChip>\r
            <ZChip variant="flat" color="danger">危险</ZChip>\r
          </div>\r
        </div>\r
        <div>\r
          <p class="text-sm text-gray-500 mb-2 font-medium">faded 变体</p>\r
          <div class="flex flex-wrap gap-2">\r
            <ZChip variant="faded" color="default">默认</ZChip>\r
            <ZChip variant="faded" color="primary">主色</ZChip>\r
            <ZChip variant="faded" color="secondary">次要色</ZChip>\r
            <ZChip variant="faded" color="success">成功</ZChip>\r
            <ZChip variant="faded" color="warning">警告</ZChip>\r
            <ZChip variant="faded" color="danger">危险</ZChip>\r
          </div>\r
        </div>\r
        <div>\r
          <p class="text-sm text-gray-500 mb-2 font-medium">shadow 变体</p>\r
          <div class="flex flex-wrap gap-2">\r
            <ZChip variant="shadow" color="default">默认</ZChip>\r
            <ZChip variant="shadow" color="primary">主色</ZChip>\r
            <ZChip variant="shadow" color="secondary">次要色</ZChip>\r
            <ZChip variant="shadow" color="success">成功</ZChip>\r
            <ZChip variant="shadow" color="warning">警告</ZChip>\r
            <ZChip variant="shadow" color="danger">危险</ZChip>\r
          </div>\r
        </div>\r
        <div>\r
          <p class="text-sm text-gray-500 mb-2 font-medium">dot 变体</p>\r
          <div class="flex flex-wrap gap-2">\r
            <ZChip variant="dot" color="default">默认</ZChip>\r
            <ZChip variant="dot" color="primary">主色</ZChip>\r
            <ZChip variant="dot" color="secondary">次要色</ZChip>\r
            <ZChip variant="dot" color="success">成功</ZChip>\r
            <ZChip variant="dot" color="warning">警告</ZChip>\r
            <ZChip variant="dot" color="danger">危险</ZChip>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { ZChip } from '@zxy-ui/vue'\r
\r
const selected1 = ref(false)\r
const selected2 = ref(true)\r
const selected3 = ref(false)\r
\r
const tags = ref(['Vue', 'React', 'Angular', 'Svelte'])\r
\r
const handleClose = (event: Event) => {\r
  console.log('芯片被关闭', event)\r
}\r
\r
const removeTag = (index: number) => {\r
  tags.value.splice(index, 1)\r
}\r
\r
const addTag = () => {\r
  const frameworks = ['Next.js', 'Nuxt', 'Vite', 'Astro', 'SolidJS', 'Preact']\r
  const randomIndex = Math.floor(Math.random() * frameworks.length)\r
  if (!tags.value.includes(frameworks[randomIndex])) {\r
    tags.value.push(frameworks[randomIndex])\r
  }\r
}\r
<\/script>\r
`;
const __pageData = JSON.parse('{"title":"Chip","description":"","frontmatter":{},"headers":[],"relativePath":"components/chip/index.md","filePath":"components/chip/index.md"}');
const __default__ = { name: "components/chip/index.md" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __ssrInlineRender: true,
  setup(__props) {
    const __placeholder_visible_key__ = ref(true);
    const TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtY2hpcC1leGFtcGxlLWluZGV4 = shallowRef();
    onMounted(async () => {
      TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtY2hpcC1leGFtcGxlLWluZGV4.value = (await import("./index.9XLYQz1D.js")).default;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StorybookLink = resolveComponent("StorybookLink");
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="chip" tabindex="-1">Chip <a class="header-anchor" href="#chip" aria-label="Permalink to &quot;Chip&quot;">​</a></h1><p>Chip 是一种轻量化的标签组件，用于表示分类、标签、选择项或用户等信息。它通常以圆角矩形或胶囊形呈现，支持添加、删除或筛选操作，在有限空间内高效展示关键词或状态，常见于标签云、筛选条件、用户列表等场景。</p>`);
      _push(ssrRenderComponent(_component_StorybookLink, { link: "https://zxy-ui.github.io/zxy-ui/storybook/?path=/story/%E7%BB%84%E4%BB%B6-chip-%E6%A0%87%E7%AD%BE--basic" }, null, _parent));
      _push(`<h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> { ZChip } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;@zxy-ui/vue&#39;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2>`);
      _push(ssrRenderComponent(unref(VitepressDemoPlaceholder), {
        style: __placeholder_visible_key__.value ? null : { display: "none" }
      }, null, _parent));
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VitepressDemoBox), {
              title: "",
              description: "",
              locale: "",
              select: "vue",
              order: "vue,react,svelte,solid,preact,html",
              github: "",
              gitlab: "",
              theme: "",
              lightTheme: "",
              darkTheme: "",
              stackblitz: "%7B%22show%22%3Afalse%7D",
              codesandbox: "%7B%22show%22%3Afalse%7D",
              playground: "%7B%22show%22%3Afalse%7D",
              files: "%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22svelte%22%3A%7B%7D%2C%22solid%22%3A%7B%7D%2C%22preact%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",
              scope: "",
              htmlWriteWay: "write",
              background: "undefined",
              htmlPlayground: "",
              vuePlayground: "",
              reactPlayground: "",
              sveltePlayground: "",
              solidPlayground: "",
              preactPlayground: "",
              visible: true,
              onMount: () => {
                __placeholder_visible_key__.value = false;
              },
              vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtY2hpcC1leGFtcGxlLWluZGV4)
            }, createSlots({ _: 2 }, [
              TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtY2hpcC1leGFtcGxlLWluZGV4.value ? {
                name: "vue",
                fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtY2hpcC1leGFtcGxlLWluZGV4), null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtY2hpcC1leGFtcGxlLWluZGV4))
                    ];
                  }
                }),
                key: "0"
              } : void 0
            ]), _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VitepressDemoBox), {
                title: "",
                description: "",
                locale: "",
                select: "vue",
                order: "vue,react,svelte,solid,preact,html",
                github: "",
                gitlab: "",
                theme: "",
                lightTheme: "",
                darkTheme: "",
                stackblitz: "%7B%22show%22%3Afalse%7D",
                codesandbox: "%7B%22show%22%3Afalse%7D",
                playground: "%7B%22show%22%3Afalse%7D",
                files: "%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22svelte%22%3A%7B%7D%2C%22solid%22%3A%7B%7D%2C%22preact%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",
                scope: "",
                htmlWriteWay: "write",
                background: "undefined",
                htmlPlayground: "",
                vuePlayground: "",
                reactPlayground: "",
                sveltePlayground: "",
                solidPlayground: "",
                preactPlayground: "",
                visible: true,
                onMount: () => {
                  __placeholder_visible_key__.value = false;
                },
                vueCode: unref(TempCodeVueTempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtY2hpcC1leGFtcGxlLWluZGV4)
              }, createSlots({ _: 2 }, [
                TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtY2hpcC1leGFtcGxlLWluZGV4.value ? {
                  name: "vue",
                  fn: withCtx(() => [
                    createVNode(unref(TempVXNlcnMtQWRtaW5pc3RyYXRvci1Xb3JrQnVkZHktMjAyNi0wOS0yOS0xNS01OS0xNi1ub3ZhLXVpLXNyYy1kb2NzLWNvbXBvbmVudHMtY2hpcC1leGFtcGxlLWluZGV4))
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["onMount", "vueCode"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/chip/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
