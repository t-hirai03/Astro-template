import { defineConfig } from "astro/config";
import relativeLinks from 'astro-relative-links';

// https://astro.build/config
export default defineConfig({
  base: "",
  outDir: './dist',
  build: {
    format: 'file'
  },
  server: {
    // 開発サーバーが立ち上がったらブラウザを自動で開かせる
    open: true
  },
  integrations: [relativeLinks()],
  compressHTML: false,
  vite: {
    build: {
      minify: true,
      rollupOptions: {
        output: {
          assetFileNames: assetInfo => {
            let extType = assetInfo.name.split('.')[1];
            if (/ttf|otf|eot|woff|woff2/i.test(extType)) {
              extType = 'fonts';
            }
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
              extType = 'images';
            }
            if (extType === 'css') {
              return `assets/css/style.css`;
            }
            return `assets/${extType}/[name][extname]`;
          }
        },
        entryFileNames: 'assets/js/[name].js'
      },
    },
    css: {
      preprocessorOptions: {
        // scss: {
        //   additionalData: '$NODE_ENV: "${process.env.NODE_ENV}";@debug "NODE_ENV: #{$NODE_ENV}";',
        // },
      },
    },
  }
});