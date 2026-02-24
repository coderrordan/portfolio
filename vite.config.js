import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: Set base to your GitHub repo name
// e.g. if your repo is github.com/daniele/portfolio → base: '/portfolio/'
// If you use a custom domain (e.g. danielenapolitano.com) → base: '/'
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // ← change to your repo name
})
