import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/jaborandi': {
        target: 'http://45.172.145.250:8079',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/jaborandi/, ''),
      },
      '/araminas': {
        target: 'https://araminasp.dcfiorilli.com.br:879',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/araminas/, ''),
      },
    },
  },
})