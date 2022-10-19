export default [
  {
    text: '扫码登记',
    icon: require('../../../static/images/lvzhi/扫码logo.png'),
    badge: 0,
  },
  {
    text: '手动登记',
    icon: require('../../../static/images/lvzhi/手动登记logo.png'),
    url: '/pages/lvzhi/register/index',
    badge: 0,
  },
  {
    text: '我的登记',
    icon: require('../../../static/images/lvzhi/我的登记logo.png'),
    url: '',
    badge: 0,
  },
  {
    text: '待提交',
    icon: require('../../../static/images/lvzhi/待提交logo.png'),
    url: '',
    badge: 0,
  },
  {
    text: '收藏夹',
    icon: require('../../../static/images/lvzhi/收藏夹logo.png'),
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
