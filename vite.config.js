// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(),  tailwindcss()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          swiper: ['swiper'],
          icons: ['react-icons', 'lucide-react'],
          forms: ['react-flatpickr', 'flatpickr'],
          utils: ['axios', 'date-fns'],
          notifications: ['react-toastify'],
          autosuggest: ['react-autosuggest'],
        },
      },
    },
  },
});