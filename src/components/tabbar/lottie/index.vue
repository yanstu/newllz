<template>
  <view>
    <view
      :id="lottieBox"
      :style="[{ width: size + 'px' }, { height: size + 'px' }]"
    ></view>
  </view>
</template>

<script setup lang="ts">
import lottie from 'lottie-web';
import { AnimationItem } from 'lottie-web/build/player/lottie';
let { ctx } = getCurrentInstance();
let animation: AnimationItem = null;

const lottieBox = ref<string>(
  ((): string => {
    // 生成一个随机的ID
    let result = [];
    for (let i = 0; i < 6; i++) {
      let ranNum = Math.ceil(Math.random() * 25);
      result.push(String.fromCharCode(65 + ranNum));
    }
    return result.join('');
  })()
);

const props = withDefaults(
  defineProps<{
    src: object;
    size: number;
    active: boolean;
  }>(),
  {
    size: 28,
    active: true,
  }
);

watch(
  () => props.active,
  (newVal: boolean, oldVal: boolean) => {
    // 当前选中和上一个被选中的都播放动画
    play();
  }
);

onMounted(() => {
  animation = lottie.loadAnimation({
    container: document.getElementById(lottieBox.value),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    animationData: props.src,
  });
  if (!props.active) {
    stop();
  }
  animation.addEventListener('enterFrame', (event) => {
    if (event.currentTime > event.totalTime - 2) {
      // 当lottie播放到小于最后两帧的时候停留到最后第三帧，如果不这样做lottie播放完后会隐藏
      stop();
    }
  });
});

const play = () => {
  animation.goToAndPlay(0, true);
};

const stop = () => {
  animation.goToAndStop(animation.getDuration(true) - 3, true);
};
</script>

<style lang="scss"></style>
