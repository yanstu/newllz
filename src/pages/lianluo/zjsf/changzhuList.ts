export default [
  {
    text: '专家解答',
    icon: new URL(
      '../../../static/images/lianluo/解答logo.png',
      import.meta.url
    ).href,
    url: '',
  },
  {
    text: '添加专家',
    icon: new URL(
      '../../../static/images/lianluo/添加logo.png',
      import.meta.url
    ).href,
    url: '/pages/lvzhi/register/index',
  },
  {
    text: '编辑',
    icon: new URL(
      '../../../static/images/lianluo/编辑logo.png',
      import.meta.url
    ).href,
    url: '',
  },
  {
    text: '法典咨询',
    icon: new URL(
      '../../../static/images/lianluo/咨询logo.png',
      import.meta.url
    ).href,
    url: '',
  },
];

export interface changzhu {
  text: string;
  icon: string;
  url: string;
}
