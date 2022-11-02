import { createSSRApp } from 'vue';
import App from './App.vue';
import { setupStore } from '@/state';

import useVconsole from '@/utils/vconsole';
useVconsole;

import 'vant/es/toast/style';

export function createApp() {
  const app = createSSRApp(App);
  // 配置store
  setupStore(app);

  return {
    app,
  };
}
