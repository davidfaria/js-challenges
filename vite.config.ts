import { defineConfig } from 'vitest/config';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsConfigPaths()],
  test: {
    exclude: ['node_modules/**', 'build/**'],
    dir: 'src',
    globals: true,
  },
});
