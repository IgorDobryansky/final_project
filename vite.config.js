import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // main config object
  root: 'src', // change root path from 'project root' to 'project root/src'
  build: {
    // configure build options
    outDir: '../dist', // change build folder to 'docs
    minify: 'esbuild' // minify build with 'esbuild
  },
  server: {
    // configure dev server
    open: true, // open on start
    port: 8383 // port
  },
  plugins: [react()] // vite plugins
});
