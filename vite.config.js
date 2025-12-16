import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: process.env.VIT_BASE_PATH || '/Mini-Event-Platform-Client',
  server: {
    port: 5173,
  },
});


