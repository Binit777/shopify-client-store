import { defineConfig } from 'vite';
import { reactRouter } from '@react-router/dev/vite';
import { hydrogen } from '@shopify/hydrogen/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    hydrogen(),
    reactRouter(),
    tsconfigPaths(),
  ],
});
