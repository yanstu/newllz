import { Toast } from 'vant';
import wx from 'weixin-js-sdk-ts';

export default [
  {
    text: '扫一扫',
    color: '#47aaff',
    icon: 'scan',
    needLogin: true,
    url: (): void => {
      wx.scanQRCode({
        needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
        scanType: ['qrCode', 'barCode'],
        success: (res: AnyObject) => {
          console.log(res);
        },
        fail: (error) => {
          console.log(error);
          error.errMsg && Toast.fail(error.errMsg);
        },
      });
    },
  },
  {
    text: '履职登记',
    color: '#47aaff',
    icon: 'records',
    needLogin: true,
    url: '/pages/lvzhi/register/index',
  },
  {
    text: '视频连线',
    color: '#47aaff',
    icon: 'play-circle-o',
    needLogin: true,
    url: '/pages/lianluo/splx/index',
  },
  /*{
    text: '代表建议',
    color: '#47aaff',
    icon: 'friends-o',
    needLogin: true,
    url: '',
  },*/
  {
    text: '热门站点',
    color: '#47aaff',
    icon: 'location-o',
    needLogin: true,
    url: '/pages/lianluo/llzd/index',
  },
];

export interface changzhu {
  text: string;
  color: ColorGamut;
  icon: string;
  needLogin: boolean;
  url: string | void;
}
