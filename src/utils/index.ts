import { isObject } from '@/utils/is';
import pages from '@/pages.json';

/**
 * 深度合并
 * @param src
 * @param target
 */
export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  let key: string;
  for (key in target) {
    src[key] = isObject(src[key])
      ? deepMerge(src[key], target[key])
      : (src[key] = target[key]);
  }
  return src;
}

/**
 * * 返回当前页面在pages.json中定义的标题
 * @returns { string } 当前页面在pages.json中定义的标题
 */
export function getCurrPageTitle(): string | undefined {
  const currPath = location.pathname.substring(1);
  const page = pages.pages.find((item) => item.path == currPath);
  return page?.style.navigationBarTitleText;
}
