import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Minimal config for React + TS
export default defineConfig({
  plugins: [react()],
  // Using a relative base ensures the app works when served from GitHub Pages
  // where it is hosted from a sub-path instead of the domain root.
  base: './',
});
