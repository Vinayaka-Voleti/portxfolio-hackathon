import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import tailwindScrollbar from 'tailwind-scrollbar'
import react from '@vitejs/plugin-react'
export default defineConfig({
  theme: {
    extends: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [
    tailwindcss(),
    react(),
    tailwindScrollbar
  ],
})



