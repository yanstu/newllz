import wx from 'weixin-js-sdk-ts';

export class WXAPI {
  constructor() {}

  public signatured = false;
  public isIos = isIos();
  public isWx = iswx();
  private iosFirstSignatureLink = '';

  // 保存ios第一次进入系统的链接
  saveIosFirstLink() {
    if (this.isIos && !this.iosFirstSignatureLink) {
      this.iosFirstSignatureLink = location.href;
    }
  }
  /**
   * [wxRegister 微信Api初始化]
   */
  async signature(config: WxConfig) {
    const vm = this;
    const href = this.isIos ? this.iosFirstSignatureLink : location.href;
    if (this.isIos && this.signatured) {
      return Promise.resolve();
    }
    // const href = location.href
    console.log('signature~~');
    return new Promise((resolve, reject) => {
      wx.config({
        debug: false, // 开启调试模式
        appId: config.appId, // 必填，公众号的唯一标识
        timestamp: config.timeStamp, // 必填，生成签名的时间戳
        nonceStr: config.nonceStr, // 必填，生成签名的随机串
        signature: config.signature, // 必填，签名，见附录1
        jsApiList: [
          'onMenuShareTimeline',
          'onMenuShareAppMessage',
          'updateAppMessageShareData',
          'updateTimelineShareData',
          'chooseWXPay',
        ],
        openTagList: [],
      });
      wx.ready(function () {
        vm.signatured = true;
        resolve(1);
      });
      wx.error(function (err) {
        reject(err);
      });
    });
  }

  /**
   * 微信分享
   * @param {*}
   */
  async share(option: ShareOptionType) {
    if (!this.isWx) return false;
    await this.signature(null);

    ShareTimeline(option);
    ShareAppMessage(option);
  }

  async pay(data: any) {
    if (!this.isWx) return Promise.reject();
    await this.signature(null);
    return new Promise((resolve, reject) => {
      wx.chooseWXPay({
        timestamp: data.timeStamp,
        nonceStr: data.nonceStr,
        package: data.package,
        signType: data.signType,
        paySign: data.paySign,
        success: function () {
          resolve(1);
        },
        fail: function (err) {
          reject(err);
        },
        cancel: function (err) {
          reject(err);
        },
      });
    });
  }
}

export default new WXAPI();

export interface ShareOptionType {
  title: string;
  link: string;
  imgUrl: string;
  desc: string;
  success: () => void;
  cancel: () => void;
}

export interface WxConfig {
  appId: string; // 必填，公众号的唯一标识
  timeStamp: number; // 必填，生成签名的时间戳
  nonceStr: string; // 必填，生成签名的随机串
  signature: string; // 必填，签名，见附录1
  jsApiList: wx.jsApiList; // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
  openTagList?: wx.openTagList;
}

/**
 * [ShareTimeline 微信分享到朋友圈]
 */
function ShareTimeline(option: ShareOptionType) {
  wx.updateTimelineShareData({
    title: option.title,
    link: option.link,
    imgUrl: option.imgUrl,
    success: option.success,
    cancel: option.cancel,
  });
}

/**
 * [ShareAppMessage 微信分享给朋友]
 */
function ShareAppMessage(option: ShareOptionType) {
  wx.updateAppMessageShareData(option);
}

/**
 * [iswx 判断是否微信浏览器]
 */
export function iswx() {
  const ua = window.navigator.userAgent.toLowerCase();
  const wxUa = !!ua.match(/MicroMessenger/i);

  // 当前是否是用域名打开
  const doname =
    /^([\w-]+\.)+((com)|(net)|(org)|(gov\.cn)|(info)|(cc)|(com\.cn)|(net\.cn)|(org\.cn)|(name)|(biz)|(tv)|(cn)|(mobi)|(name)|(sh)|(ac)|(io)|(tw)|(com\.tw)|(hk)|(com\.hk)|(ws)|(travel)|(us)|(tm)|(la)|(me\.uk)|(org\.uk)|(ltd\.uk)|(plc\.uk)|(in)|(eu)|(it)|(jp))$/;
  const isDomain = doname.test(
    window.location.origin.replace(/^http:\/\/|https:\/\//, '')
  );

  return wxUa && isDomain;
}

// 判断ios
export function isIos() {
  return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}

/**
 * * 调用微信授权登录 h5调用
 */
export function wxOAuth2(appid: string) {
  const AuthBase = 'https://open.weixin.qq.com/connect/oauth2/authorize?';
  const redirect_uri = encodeURIComponent(getWxOAuth2Location(location.href));
  const result =
    AuthBase +
    `appid=${appid}&redirect_uri=${redirect_uri}&response_type=code&scope=snsapi_base&m=oauth2#wechat_redirect`;
  location.href = result;
}

export function getWxOAuth2Location(href: string) {
  const query = getQueryObject(href);
  delete query.code;
  const queryStr = Object.entries(query)
    .map(([k, v]) => `${k}=${v}`)
    .join('&');
  return href.split('?')[0] + (queryStr ? '?' + queryStr : '');
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function getQueryObject(url: string) {
  url = url == null ? window.location.href : url;
  const search = url.substring(url.lastIndexOf('?') + 1);
  const obj: any = {};
  const reg = /([^?&=]+)=([^?&=]*)/g;
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1);
    let val = decodeURIComponent($2);
    val = String(val);
    obj[name] = val;
    return rs;
  });
  return obj;
}
