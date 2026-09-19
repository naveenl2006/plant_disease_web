import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/hf': {
        target: 'https://naveen2916-plantdisease.hf.space',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/hf/, ''),
      },
    },
  },
})