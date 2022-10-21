declare interface LoginParams {
  email: string;
  password: string;
}
declare interface LoginModel {
  token: string;
}

declare interface GetWxOpenIdParams {
  appId: string;
  appSecret: string;
  code: string;
}

declare interface GetWxOpenIdModel {
  openid: string;
}

declare interface WxOpenIdLoginParams {
  WXID: string;
  LX: number;
  WXID_QYBH: string;
}

declare interface WxOpenIdLoginModel {
  [any: string]: any;
}

declare interface getAppIdAndAppSecretParams {
  WXID_QYBH: string;
}

declare interface getAppIdAndAppSecretModel {
  appId: string;
  appSecret: string;
}
