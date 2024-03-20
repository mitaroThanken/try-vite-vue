/// <reference types="histoire" />

import { fileURLToPath, URL } from 'node:url';

import { type CorsOptions, defineConfig, type ServerOptions, type PreviewOptions } from 'vite';
import vue from '@vitejs/plugin-vue';

import { type SecureContextOptions } from 'tls';
import fs from 'fs';

import { HstVue } from '@histoire/plugin-vue';

const HOST = 'sample';
const PORT = 5173;
const VHOST_FQDN = process.env.VHOST_FQDN ?? 'test.test';
const HTTPS_OPTIONS: SecureContextOptions = {
  key: fs.readFileSync(`../certs/${VHOST_FQDN}/key.pem`),
  cert: fs.readFileSync(`../certs/${VHOST_FQDN}/cert.pem`),
};
const PROTOCOL = 'https://';
const ORIGIN = `${PROTOCOL}${VHOST_FQDN}`;
const CORS_OPTION: CorsOptions = {
  origin: ORIGIN,
};

const SERVER_OPTIONS = {
  host: HOST,
  origin: ORIGIN,
  https: HTTPS_OPTIONS,
  port: PORT,
  strictPort: true,
  cors: CORS_OPTION,
} satisfies ServerOptions | PreviewOptions;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: SERVER_OPTIONS,
  preview: SERVER_OPTIONS,
  histoire: {
    plugins: [HstVue()],
    vite: {
      server: SERVER_OPTIONS,
    },
    setupFile: './src/histoire.setup.ts',
  },
});
