import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import vercel from 'vite-plugin-vercel';

export default defineConfig({
  plugins: [reactRefresh()][ vercel()],
  server: {
    port: process.env.PORT,
  },
});