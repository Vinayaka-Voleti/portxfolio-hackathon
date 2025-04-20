import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import tailwindScrollbar from 'tailwind-scrollbar'
import react from '@vitejs/plugin-react'
export default defineConfig({
  theme: {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    
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



