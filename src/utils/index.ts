import { isObject } from '@/utils/is';
import pages from '@/pages.json';
import manifest from '@/manifest.json';

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
  const basePath = manifest.h5.router.base;
  let substringIndex = 1;
  if (manifest.h5.router.base) {
    substringIndex =
      location.pathname.indexOf(basePath + '/') + (basePath + '/').length;
  }
  const currPath = location.pathname.substring(substringIndex);
  const page = pages.pages.find((item) => item.path == currPath);
  return page?.style.navigationBarTitleText;
}
