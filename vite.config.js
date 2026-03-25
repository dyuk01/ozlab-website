import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 로컬: `npm run dev` → `/`
// GitHub Pages: `https://<유저>.github.io/ozlab-website/` → `build:gh`의 `--base /ozlab-website/` (저장소 이름과 일치)
export default defineConfig({
  plugins: [react()],
  base: '/',
})
