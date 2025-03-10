import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ReactProtfolio/', // Change 'ReactProtfolio' to your repo name
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor';
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase limit if needed
  },
  optimizeDeps: {
    include: ['react', 'react-dom', '@mui/material'],
  },
});
