import { defineConfig } from 'tsup';

export default defineConfig({
  target: 'esnext',
  clean: true,
  format: ['esm', 'cjs'],
  outDir: './dist/',
  dts: true,
});
