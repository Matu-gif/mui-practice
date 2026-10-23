import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/mui-practice/',
  plugins: [react(), tailwindcss()],
  server: {
    fs: { strict: false },
  },
})
