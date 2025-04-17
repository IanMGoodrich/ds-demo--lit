// vite.config.ts
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: '.',
  publicDir: 'public',

  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
    extensions: ['.ts', '.js', '.json'],
  },

  build: {
    target: 'esnext',
    outDir: 'dist',
    emptyOutDir: true,
  },

  server: {
    port: 5173,
    open: true,
  },

  css: {
    preprocessorOptions: {
      css: {
        charset: false,
      },
    },
  },
});
