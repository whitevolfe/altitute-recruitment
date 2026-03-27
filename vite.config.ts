import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { componentTagger } from 'lovable-tagger';
import sitemap from 'vite-plugin-sitemap';

export default defineConfig(({ mode }) => ({
  server: {
    host: '::',
    port: 8080,
    hmr: {
      overlay: false,
    },
  },

  plugins: [
    react(),
    mode === 'development' && componentTagger(),

    sitemap({
      hostname: 'https://www.altitudegroup.io',
      dynamicRoutes: [
        '/about',
        '/about/altitude-group',
        '/about/leadership',
        '/global',
        '/wellness',
        '/packages/altitude-trinity',
        '/packages/movement-therapy',
        '/talent',
        '/contact',
        '/blogs',
      ],
    }),
  ].filter(Boolean),

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}));
