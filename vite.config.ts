import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { OUTPUT_DIR } from './build/constant'
function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}
// https://vitejs.dev/config/
export default defineConfig({
  base: OUTPUT_DIR,
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: /\/#\//,
        replacement: `${pathResolve('types')}/`,
      },
      {
        find: '@',
        replacement: `${pathResolve('src')}/`,
      },
    ],
    dedupe: ['vue'],
  },
  build: {
    target: 'es2015',
    outDir: OUTPUT_DIR,
  },
})
