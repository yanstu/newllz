export default [
  {
    text: '履职平台',
    needLogin: true,
    icon: new URL('../../static/images/home/履职logo.png', import.meta.url)
      .href,
    url: '',
  },
  {
    text: '代表公示',
    needLogin: true,
    icon: new URL('../../static/images/home/代表公示logo.png', import.meta.url)
      .href,
    url: '',
  },
  {
    text: '视频连线',
    needLogin: true,
    icon: new URL('../../static/images/home/视频logo.png', import.meta.url)
      .href,
    url: '',
  },
  {
    text: '社情民意',
    needLogin: true,
    icon: new URL('../../static/images/home/社情logo.png', import.meta.url)
      .href,
    url: '',
  },
  {
    text: '人大动态',
    needLogin: true,
    icon: new URL('../../static/images/home/动态logo.png', import.meta.url)
      .href,
    url: '',
  },
  {
    text: '建议办理',
    needLogin: true,
    icon: new URL('../../static/images/home/办理logo.png', import.meta.url)
      .href,
    url: '',
  },
  {
    text: '建议考评',
    needLogin: true,
    icon: new URL('../../static/images/home/考评logo.png', import.meta.url)
      .href,
    url: '',
  },
  {
    text: '提交建议',
    needLogin: true,
    icon: new URL('../../static/images/home/提交logo.png', import.meta.url)
      .href,
    url: '',
  },
  {
    text: '建议反馈',
    needLogin: true,
    icon: new URL('../../static/images/home/反馈logo.png', import.meta.url)
      .href,
    url: '',
  },
  {
    text: '资料库',
    needLogin: true,
    icon: new URL('../../static/images/home/资料库logo.png', import.meta.url)
      .href,
    url: '',
  },
  {
    text: '联络站点',
    needLogin: true,
    icon: new URL('../../static/images/home/联络站点logo.png', import.meta.url)
      .href,
    url: '',
  },
  {
    text: '代表风采',
    needLogin: true,
    icon: new URL('../../static/images/home/风采logo.png', import.meta.url)
      .href,
    url: '',
  },
  {
    text: '工作报告',
    needLogin: true,
    icon: new URL('../../static/images/home/工作报告logo.png', import.meta.url)
      .href,
    url: '',
  },
  {
    text: '民法典',
    needLogin: true,
    icon: new URL('../../static/images/home/民法典logo.png', import.meta.url)
      .href,
    url: '',
  },
  {
    text: '专家释法',
    needLogin: true,
    icon: new URL('../../static/images/home/专家释法logo.png', import.meta.url)
      .href,
    url: '/pages/lianluo/zjsf/index',
  },
  {
    text: '履职活动',
    needLogin: true,
    icon: new URL('../../static/images/home/履职活动logo.png', import.meta.url)
      .href,
    url: '',
  },
  {
    text: '通知公告',
    needLogin: true,
    icon: new URL('../../static/images/home/公告logo.png', import.meta.url)
      .href,
    url: '',
  },
  {
    text: '群众留言',
    needLogin: true,
    icon: new URL('../../static/images/home/群众留言logo.png', import.meta.url)
      .href,
    url: '',
  },
  {
    text: '短信通知',
    needLogin: true,
    icon: new URL('../../static/images/home/短信通知logo.png', import.meta.url)
      .href,
    url: '',
  },
  {
    text: '更多',
    needLogin: true,
    icon: new URL('../../static/images/home/更多logo.png', import.meta.url)
      .href,
    url: '',
  },
];

export interface func {
  text: string;
  icon: string;
  needLogin: boolean;
  url: string;
}
