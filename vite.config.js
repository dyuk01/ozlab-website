import { copyFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/** GitHub Pages 프로젝트 사이트: `https://<user>.github.io/<repo>/` → base는 `/<repo>/` */
function productionBase() {
  const fromEnv = process.env.VITE_PAGES_BASE?.trim()
  if (fromEnv) {
    const withSlash = fromEnv.endsWith('/') ? fromEnv : `${fromEnv}/`
    return withSlash.startsWith('/') ? withSlash : `/${withSlash}`
  }
  const repo = process.env.GITHUB_REPOSITORY?.split('/')?.[1]?.trim()
  if (repo) return `/${repo}/`
  return '/ozlab-website/'
}

/** GitHub Pages에서 클라이언트 라우트 직접 URL·리로드 시 SPA 셸을 쓰려면 dist에 404.html 필요 */
function githubPagesSpaSupport() {
  let base = '/'
  return {
    name: 'github-pages-spa',
    apply: 'build',
    configResolved(config) {
      base = config.base
    },
    transformIndexHtml(html, ctx) {
      if (ctx?.server) return html
      const normalized = base.endsWith('/') ? base : `${base}/`
      return html.replace(
        /href="\.\/assets\/logo\/oz_logo\.webp"/,
        `href="${normalized}assets/logo/oz_logo.webp"`
      )
    },
    writeBundle() {
      const root = resolve(process.cwd(), 'dist')
      copyFileSync(resolve(root, 'index.html'), resolve(root, '404.html'))
      writeFileSync(resolve(root, '.nojekyll'), '')
    },
  }
}

// `npm run dev` → `/` · `build` → 위 규칙 (CI에서는 저장소 이름 자동 반영)
export default defineConfig(({ command }) => ({
  plugins: [react(), command === 'build' && githubPagesSpaSupport()].filter(Boolean),
  base: command === 'build' ? productionBase() : '/',
}))
