import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  server: {
    allowedHosts: ['5173-pragadeeshn-personalize-ae8s9va59jg.ws-us117.gitpod.io']
  }
})
