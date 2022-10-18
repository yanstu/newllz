export default [
  {
    text: '扫码登记',
    icon: new URL('../../../static/images/lvzhi/扫码logo.png', import.meta.url)
      .href,
    badge: 0,
  },
  {
    text: '手动登记',
    icon: new URL(
      '../../../static/images/lvzhi/手动登记logo.png',
      import.meta.url
    ).href,
    url: '/pages/lvzhi/register/index',
    badge: 0,
  },
  {
    text: '我的登记',
    icon: new URL(
      '../../../static/images/lvzhi/我的登记logo.png',
      import.meta.url
    ).href,
    url: '',
    badge: 0,
  },
  {
    text: '待提交',
    icon: new URL(
      '../../../static/images/lvzhi/待提交logo.png',
      import.meta.url
    ).href,
    url: '',
    badge: 0,
  },
  {
    text: '收藏夹',
    icon: new URL(
      '../../../static/images/lvzhi/收藏夹logo.png',
      import.meta.url
    ).href,
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
