import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    server: {
      proxy: {
        '/hf': {
          target: 'https://naveen2916-plantdisease.hf.space',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/hf/, ''),
        },
        '/cf-ai': {
          target: 'https://api.cloudflare.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/cf-ai/, '/client/v4'),
          configure: (proxy) => {
            proxy.on('proxyReq', (proxyReq) => {
              proxyReq.setHeader(
                'Authorization',
                `Bearer ${env.VITE_CF_API_TOKEN}`
              );
            });
          },
        },
      },
    },
  };
})
