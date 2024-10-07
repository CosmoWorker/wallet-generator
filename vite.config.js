import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills()],
  server: {
    hmr: true, // Explicitly enable HMR
    watch: {
      usePolling: true, // Use polling for file watching if HMR is not triggering changes
    }
  } 
})
