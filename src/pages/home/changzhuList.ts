export default [
  {
    text: '扫一扫',
    color: '#47aaff',
    icon: 'scan',
    needLogin: true,
    url: '',
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
    url: '',
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
    url: '',
  },
];

export interface changzhu {
  text: string;
  color: ColorGamut;
  icon: string;
  needLogin: boolean;
  url: string;
}
