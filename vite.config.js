import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    return {
      plugins: [react()],
      build: {
        outDir: 'dist',
        emptyOutDir: true,
      },
      define: {
        'process.env': {
          NODE_ENV: JSON.stringify(env.NODE_ENV),
        },
      }
    }
});
