import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// `npm run dev` → `/` · `npm run build` / 배포 → `/ozlab-website/` (GitHub Pages 프로젝트 사이트)
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/ozlab-website/' : '/',
}))
