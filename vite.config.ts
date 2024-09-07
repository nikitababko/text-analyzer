import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts', // Используем корректный путь
      name: 'text-analyzer',
      fileName: () => 'index.js',
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
  },
});
