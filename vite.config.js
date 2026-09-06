import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://github.com/kaditya-hyd5/ak-portfolio.git
export default defineConfig({
  plugins: [react()],
  base: '/ak-portfolio/',
  build: {
    outDir: 'dist'
  }
})