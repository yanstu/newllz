import { getEnvValue, getPkgVersion, isDevMode } from '@/utils/env';

// 缓存有效时间，秒
export const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 7;

const PREFIX =
  getEnvValue<string>('VITE_APP_CACHE_PREFIX') ||
  getEnvValue<string>('VITE_APP_TITLE') ||
  '';
export const DEFAULT_PREFIX_KEY = `${PREFIX}${getPkgVersion()}`;

// aes密钥
export const cacheCipher = {
  key: 'aQ0{gD1@c_0@oH5:',
  iv: 'aF0#gC_$hE1$eA1!',
};

// 什么时候启用缓存加密
export const enableStorageEncryption = !isDevMode();
