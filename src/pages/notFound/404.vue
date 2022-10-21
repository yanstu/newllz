<template>
  <view class="page">
    <img mode="widthFix" src="/static/svg/weep.svg" />
    <view class="mb-40rpx">
      <text>{{ go }} 页面找不到了~</text>
    </view>
    <van-button type="success" class="btn" @click="backHome"
      >返回首页</van-button
    >
  </view>
</template>

<script lang="ts" setup>
import { onLoad } from '@dcloudio/uni-app';
import { router } from '@/utils/router';

const go = ref<string>('');
const redirect = ref<string>('');

onLoad((query) => {
  go.value = query.go || '';
  redirect.value = query.redirect || '';
});

/**
 * 返回首页
 */
const backHome = () => {
  router.pushTab(redirect.value);
};
</script>

<style lang="scss">
.page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10%;
  .btn {
    width: 94%;
    border-radius: 20rpx;
    margin-top: 25rpx;
  }
}
</style>
