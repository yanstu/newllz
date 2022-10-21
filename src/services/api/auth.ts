import { request } from '@/utils/http';

const LOGIN = '/login';
const LOGIN_OUT = '/logout';
const REFRESH_TOKEN = '/refresh/token';
const GET_WX_OPENID = '/weixin/getweixinopenid';
const WX_OPENID_LOGIN = '/weixin/getweixinopenid';
const GET_APPID_AND_APPSECRET = '/getAppIdAndAppSecret';

/**
 * 登录
 * @param params
 */
export function login(params: LoginParams) {
  return request.post<API<LoginModel>>(LOGIN, params, {
    custom: {
      auth: false,
    },
  });
}

export function getAppIdAndAppSecret(params: getAppIdAndAppSecretParams) {
  return request.post<API<getAppIdAndAppSecretModel>>(
    GET_APPID_AND_APPSECRET,
    params,
    {
      custom: {
        auth: false,
      },
    }
  );
}

export function getWxOpenId(params: GetWxOpenIdParams) {
  return request.post<API<GetWxOpenIdModel>>(GET_WX_OPENID, params, {
    custom: {
      auth: false,
    },
  });
}

export function wxOpenIdLogin(params: WxOpenIdLoginParams) {
  return request.post<API<WxOpenIdLoginModel>>(WX_OPENID_LOGIN, params, {
    custom: {
      auth: false,
    },
  });
}

/**
 * 登出
 */
export function logout() {
  return request.post<API>(LOGIN_OUT, {});
}

/**
 * 刷新token
 */
export function refreshToken() {
  return request.post<API<LoginModel>>(REFRESH_TOKEN, {});
}
