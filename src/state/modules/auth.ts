import { defineStore } from 'pinia';
import { getCache, removeCache, setCache } from '@/utils/catch';
import { TOKEN_KEY } from '@/enums/cacheEnum';
import {
  login,
  getAppIdAndAppSecret,
  getWxOpenId,
  wxOpenIdLogin,
} from '@/services/api/auth';
import { logout, refreshToken } from '@/services/api/auth';

interface AuthState {
  token?: string;
}

export const useAuthStore = defineStore({
  id: 'auth',
  state: (): AuthState => ({
    token: undefined,
  }),
  getters: {
    getToken: (state) => {
      return state.token;
    },
    isLogin: (state): boolean => {
      return !!state.token;
    },
  },
  actions: {
    initToken() {
      this.token = getCache<string>(TOKEN_KEY) || undefined;
    },
    setToken(token: string | undefined) {
      setCache(TOKEN_KEY, token);
      this.token = token;
    },
    /**
     * @description 登录
     */
    async login(params: LoginParams): Promise<LoginModel> {
      try {
        const { data } = await login(params);
        this.setToken(data.token);
        return Promise.resolve(data);
      } catch (err: any) {
        return Promise.reject(err);
      }
    },
    /**
     * @description 微信登录
     * @param { string } code
     */
    async wxlogin(code: string): Promise<WxOpenIdLoginModel> {
      try {
        const appIdAndAppSecret = await getAppIdAndAppSecret({ WXID_QYBH: '' });
        if (appIdAndAppSecret.data.Code == 0) throw appIdAndAppSecret;
        if (appIdAndAppSecret.data.Code == 0) throw appIdAndAppSecret;
        const openid = await getWxOpenId({
          code,
          ...appIdAndAppSecret.data.Data,
        });
        if (openid.data.Code == 0) throw appIdAndAppSecret;
        const result = await wxOpenIdLogin({
          WXID: openid.data.Data.openid,
          LX: 0,
          WXID_QYBH: '',
        });
        if (result.data.Code == 0) throw result;
        return Promise.resolve(result);
      } catch (err: any) {
        return Promise.reject(err);
      }
    },
    /**
     * @description 登出
     */
    async loginOut(): Promise<any> {
      try {
        const res = await logout();
        removeCache(TOKEN_KEY);
        this.setToken(undefined);
        return Promise.resolve(res);
      } catch (err: any) {
        return Promise.reject(err);
      }
    },
    /**
     * @description 刷新token
     */
    async refreshToken(): Promise<LoginModel> {
      try {
        const { data } = await refreshToken();
        this.setToken(data.token);
        return Promise.resolve(data);
      } catch (err: any) {
        return Promise.reject(err);
      }
    },
  },
});
