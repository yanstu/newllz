export default [
  {
    text: '履职平台',
    needLogin: true,
    icon: require('../../static/images/home/履职logo.png'),
    url: '',
  },
  {
    text: '代表公示',
    needLogin: true,
    icon: require('../../static/images/home/代表公示logo.png'),
    url: '/pages/lvzhi/dbgs/index',
  },
  {
    text: '社情民意',
    needLogin: true,
    icon: require('../../static/images/home/社情logo.png'),
    url: '/pages/lianluo/sqmy/index',
  },
  {
    text: '人大动态',
    needLogin: true,
    icon: require('../../static/images/home/动态logo.png'),
    url: '/pages/lianluo/rddt/index',
  },
  /*{
    text: '建议办理',
    needLogin: true,
    icon: require('../../static/images/home/办理logo.png'),
    url: '',
  },*/
  /**{
    text: '建议考评',
    needLogin: true,
    icon: require('../../static/images/home/考评logo.png'),
    url: '',
  },*/
  /*{
    text: '提交建议',
    needLogin: true,
    icon: require('../../static/images/home/提交logo.png'),
    url: '',
  },*/
  /*{
    text: '建议反馈',
    needLogin: true,
    icon: require('../../static/images/home/反馈logo.png'),
    url: '',
  },*/
  {
    text: '资料库',
    needLogin: true,
    icon: require('../../static/images/home/资料库logo.png'),
    url: '',
  },
  {
    text: '联络站点',
    needLogin: true,
    icon: require('@img/home/联络站点logo.png'),
    url: '/pages/lianluo/llzd/index',
  },
  {
    text: '代表风采',
    needLogin: true,
    icon: require('../../static/images/home/风采logo.png'),
    url: '',
  },
  {
    text: '工作报告',
    needLogin: true,
    icon: require('../../static/images/home/工作报告logo.png'),
    url: '',
  },
  {
    text: '民法典',
    needLogin: true,
    icon: require('../../static/images/home/民法典logo.png'),
    url: '/pages/lvzhi/mfd/index',
  },
  {
    text: '专家释法',
    needLogin: true,
    icon: require('../../static/images/home/专家释法logo.png'),
    url: '/pages/lianluo/zjsf/index',
  },
  {
    text: '履职活动',
    needLogin: true,
    icon: require('../../static/images/home/履职活动logo.png'),
    url: '',
  },
  {
    text: '通知公告',
    needLogin: true,
    icon: require('../../static/images/home/公告logo.png'),
    url: '',
  },
  {
    text: '群众留言',
    needLogin: true,
    icon: require('../../static/images/home/群众留言logo.png'),
    url: '/pages/lianluo/qzly/index',
  },
  {
    text: '短信通知',
    needLogin: true,
    icon: require('../../static/images/home/短信通知logo.png'),
    url: '',
  },
  {
    text: '更多',
    needLogin: true,
    icon: require('../../static/images/home/更多logo.png'),
    url: '',
  },
];

export interface func {
  text: string;
  icon: string;
  needLogin: boolean;
  url: string;
}
