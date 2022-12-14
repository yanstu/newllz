import uni from '@dcloudio/vite-plugin-uni';
import { ConfigEnv, UserConfig } from 'vite';
import AutoImport from 'unplugin-auto-import/vite';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import { resolve } from 'path';
import { loadEnv } from 'vite';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import requireTransform from 'vite-plugin-require-transform';
import commonjs from '@rollup/plugin-commonjs';

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  return {
    plugins: [
      uni(),
      VueSetupExtend(),
      AutoImport({
        imports: ['vue'], // 自动导入vue相关函数
        dts: 'src/auto-import.d.ts', // 生成 `auto-import.d.ts` 全局声明
      }),
      Components({
        resolvers: [VantResolver()],
      }),
      commonjs(),
      requireTransform({
        fileRegex: /.ts$|.vue$|.js$/,
      }),
    ],
    resolve: {
      // 配置别名
      alias: {
        '@': resolve('./src'),
        '@img': resolve('./src/static/images'),
      },
    },
    server: {
      host: true,
      proxy: {
        '/api': {
          target: env.VITE_PROXY_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
        '/upload': {
          target: env.VITE_PROXY_UPLOAD_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/upload/, ''),
        },
      },
      /*hmr: {
        protocol: '/^\//',
        host: '127.0.0.1',
        clientPort: 10102
      },*/
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/style/main.scss";',
        },
      },
    },
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          // 发布时删除 console
          // drop_console: true,
        },
      },
    },
  };
};
