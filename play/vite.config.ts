import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), vue()],
  resolve: {
    alias: {
      '@zxy-ui/vue/style': path.resolve(
        __dirname,
        '../packages/zxy-ui-vue/src/style/index.css',
      ),
      '@zxy-ui/vue': path.resolve(
        __dirname,
        '../packages/zxy-ui-vue/src/index.ts',
      ),
    },
  },
})
