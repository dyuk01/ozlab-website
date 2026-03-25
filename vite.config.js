import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 루트 배포 `https://ozlab.github.io/` → GitHub 저장소 이름은 반드시 `ozlab.github.io` (로컬 폴더명 `ozlab-website`와 무관)
export default defineConfig({
  plugins: [react()],
  base: '/',
})
