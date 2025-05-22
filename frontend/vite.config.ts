import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// vite.config.ts
export default defineConfig({
  base: '/Portfolio/', // 注意必须是你的 GitHub 仓库名
  plugins: [react()],
});
