import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: '@common', replacement: path.resolve(__dirname, 'src/common') },
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
    ]
  },
  build: {
    rollupOptions: {
      external: ["react", "react-router", "react-router-dom"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
})
