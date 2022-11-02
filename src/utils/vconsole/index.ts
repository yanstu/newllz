import VConsole from 'vconsole';
import { getCache, setCache } from '@/utils/catch';
import { VCONSOLE_VISIBLE_KEY } from '@/enums/cacheEnum';
import { isNullOrUnDef } from '@/utils/is';

class useVconsole {
  public vConsole: VConsole | null = null;
  public vconsoleControll = {
    timer: 0,
    waitTime: 500, // 该时间间隔内点击才算连续点击（单位：ms）
    lastTime: new Date().getTime(), // 上次点击时间
    count: 0, // 连续点击次数
  };

  constructor() {
    if (!(window as any).vConsole) {
      this.vConsole = new VConsole();
      (window as any).vConsole = this.vConsole;
    } else {
      this.vConsole = (window as any).vConsole;
    }
    if (!getCache(VCONSOLE_VISIBLE_KEY)) {
      this.hide();
    } else {
      this.show();
    }
  }

  hide() {
    setCache(VCONSOLE_VISIBLE_KEY, false);
    this.vConsole?.hideSwitch();
  }

  show() {
    setCache(VCONSOLE_VISIBLE_KEY, true);
    this.vConsole?.showSwitch();
  }

  clickSwitch() {
    var currentTime = new Date().getTime();
    // 计算两次相连的点击时间间隔
    this.vconsoleControll.count =
      currentTime - this.vconsoleControll.lastTime <
      this.vconsoleControll.waitTime
        ? this.vconsoleControll.count + 1
        : 1;
    this.vconsoleControll.lastTime = new Date().getTime();
    if (this.vconsoleControll.timer) clearTimeout(this.vconsoleControll.timer);
    this.vconsoleControll.timer = setTimeout(() => {
      clearTimeout(this.vconsoleControll.timer);
      // 连续点击五次或者五次以上的点击事件
      if (this.vconsoleControll.count > 4) {
        if (getCache(VCONSOLE_VISIBLE_KEY)) {
          this.hide();
        } else {
          this.show();
        }
        this.vconsoleControll.count = 0;
      }
    }, this.vconsoleControll.waitTime + 10);
  }
}

export default new useVconsole();
