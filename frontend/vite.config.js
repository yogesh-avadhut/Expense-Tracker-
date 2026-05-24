import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Proxy all /api requests to your backend running on port 5000
// This avoids CORS issues during development
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
})
