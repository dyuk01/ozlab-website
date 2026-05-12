import { copyFileSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function baseFromPackageHomepage() {
  try {
    const pkgPath = fileURLToPath(new URL('./package.json', import.meta.url))
    const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'))
    const h = pkg.homepage?.trim()
    if (!h) return '/ozlab-website/'
    const u = new URL(h)
    const p = u.pathname.replace(/\/$/, '')
    if (!p) return '/'
    return p.endsWith('/') ? p : `${p}/`
  } catch {
    return '/ozlab-website/'
  }
}

/** GitHub Pages 프로젝트 사이트: `https://<user>.github.io/<repo>/` → base `/<repo>/` */
function productionBase() {
  const fromEnv = process.env.VITE_PAGES_BASE?.trim()
  if (fromEnv) {
    const withSlash = fromEnv.endsWith('/') ? fromEnv : `${fromEnv}/`
    return withSlash.startsWith('/') ? withSlash : `/${withSlash}`
  }
  const repo = process.env.GITHUB_REPOSITORY?.split('/')?.[1]?.trim()
  if (repo) return `/${repo}/`
  return baseFromPackageHomepage()
}

/** 브랜치 배포(dist) 시 SPA 라우트 리로드용 404.html + Jekyll 비활성화 */
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

// `npm run dev` → `/` · `npm run build` / `npm run preview` → package.json homepage 기준 base
export default defineConfig(({ command }) => {
  const pagesBase = productionBase()
  const usePagesBase =
    command === 'build' ||
    (command === 'serve' && process.env.npm_lifecycle_event === 'preview')

  return {
    plugins: [react(), command === 'build' && githubPagesSpaSupport()].filter(Boolean),
    base: usePagesBase ? pagesBase : '/',
  }
})
