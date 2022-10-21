export default [
  {
    text: '留言',
    icon: require('../../../static/images/lvzhi/扫码logo.png'),
    badge: 0,
  },
  {
    text: '已回复',
    icon: require('../../../static/images/lvzhi/手动登记logo.png'),
    url: '/pages/lvzhi/register/index',
    badge: 10,
  },
  {
    text: '社情民意',
    icon: require('../../../static/images/lvzhi/我的登记logo.png'),
    url: '',
    badge: 0,
  },
];

export interface changzhu {
  text: string;
  icon: string;
  url: string;
  badge: number;
}
