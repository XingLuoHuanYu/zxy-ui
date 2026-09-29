import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  plugins: [vue(), vueJsx()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      include: ['packages/zxy-ui-vue/src/**/*.{ts,tsx,vue}'],
      exclude: [
        'packages/zxy-ui-vue/src/**/*.d.ts',
        'packages/zxy-ui-vue/src/**/index.ts',
        'packages/zxy-ui-vue/src/**/*.stories.ts',
        'packages/zxy-ui-vue/src/**/types.ts',
      ],
      thresholds: {
        lines: 75,
        functions: 34,
        branches: 55,
        statements: 75,
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(
        new URL('./packages/zxy-ui-vue/src', import.meta.url),
      ),
    },
  },
})
