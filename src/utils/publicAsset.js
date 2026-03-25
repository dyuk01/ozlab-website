/** Public folder URL with Vite `base` (e.g. GitHub Pages `/repo-name/`). */
export function publicAsset(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
}
