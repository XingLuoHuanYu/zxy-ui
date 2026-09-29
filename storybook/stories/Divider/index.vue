<script setup lang="ts">
import { ZDivider } from '@zxy-ui/vue'
</script>

<template>
  <div class="space-y-8 p-4">
    <section>
      <h2 class="text-xl font-bold mb-4">基础用法</h2>
      <div class="space-y-4">
        <p>上方内容</p>
        <ZDivider />
        <p>下方内容</p>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同方向</h2>
      <div class="mb-4">
        <p class="mb-2">水平方向（默认）</p>
        <div class="space-y-4">
          <p>上方内容</p>
          <ZDivider orientation="horizontal" />
          <p>下方内容</p>
        </div>
      </div>
      <div>
        <p class="mb-2">垂直方向</p>
        <div class="flex items-center h-20">
          <span>左侧内容</span>
          <ZDivider orientation="vertical" class="mx-4 h-full" />
          <span>右侧内容</span>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同样式</h2>
      <div class="space-y-6">
        <div>
          <p class="mb-2">实线（默认）</p>
          <ZDivider variant="solid" />
        </div>
        <div>
          <p class="mb-2">虚线</p>
          <ZDivider variant="dashed" />
        </div>
        <div>
          <p class="mb-2">点线</p>
          <ZDivider variant="dotted" />
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同粗细</h2>
      <div class="space-y-6">
        <div>
          <p class="mb-2">细</p>
          <ZDivider size="thin" />
        </div>
        <div>
          <p class="mb-2">中等（默认）</p>
          <ZDivider size="medium" />
        </div>
        <div>
          <p class="mb-2">粗</p>
          <ZDivider size="thick" />
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">自定义颜色</h2>
      <div class="space-y-6">
        <div>
          <p class="mb-2">红色</p>
          <ZDivider color="red" />
        </div>
        <div>
          <p class="mb-2">绿色</p>
          <ZDivider color="green" />
        </div>
        <div>
          <p class="mb-2">紫色</p>
          <ZDivider color="#8b5cf6" />
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">带文本</h2>
      <div class="space-y-4">
        <p>上方内容</p>
        <ZDivider label="分割线文本" />
        <p>下方内容</p>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">文本位置</h2>
      <div class="space-y-6">
        <div>
          <p class="mb-2">左侧</p>
          <ZDivider label="左侧文本" labelPosition="start" />
        </div>
        <div>
          <p class="mb-2">居中（默认）</p>
          <ZDivider label="居中文本" labelPosition="center" />
        </div>
        <div>
          <p class="mb-2">右侧</p>
          <ZDivider label="右侧文本" labelPosition="end" />
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">自定义样式 (PT)</h2>
      <div class="space-y-4">
        <p>上方内容</p>
        <ZDivider
          label="自定义样式"
          :pt="{
            root: 'border-t-2 border-purple-500',
            label: 'bg-purple-100 text-purple-700 px-2',
          }"
        />
        <p>下方内容</p>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">无样式模式</h2>
      <div class="space-y-8">
        <div class="space-y-4">
          <p>上方内容</p>
          <ZDivider
            label="渐变分割线"
            unstyled
            :pt="{
              root: 'relative border-t-2 border-dashed bg-gradient-to-r from-blue-500 to-purple-500 my-4',
              label:
                'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-white text-purple-700 font-bold',
            }"
          />
          <p>下方内容</p>
        </div>
        <div class="space-y-4">
          <p>上方内容</p>
          <ZDivider
            unstyled
            :pt="{
              root: 'flex items-center',
              label: 'flex-grow border-t border-gray-300',
            }"
          />
          <p>下方内容</p>
        </div>
        <div class="flex items-center h-20">
          <span>左侧内容</span>
          <ZDivider
            orientation="vertical"
            unstyled
            :pt="{
              root: 'mx-4 h-full w-px bg-gradient-to-b from-blue-500 to-purple-500',
            }"
          />
          <span>右侧内容</span>
        </div>
      </div>
    </section>
  </div>
</template>
