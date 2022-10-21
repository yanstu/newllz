<template>
  <view class="page">
    <view class="navbar">
      <view @click="leftClick"
        ><view><van-icon size="28rpx" name="arrow-left" />返回</view></view
      >
      <view class="title">{{ title }}</view>
      <view></view>
    </view>
    <view class="search">
      <view class="search-bar">
        <van-icon class="search-icon" name="search" />
        <input
          class="search-input"
          type="text"
          placeholder="请输入关键字"
          placeholder-color="#ccc"
        />
        <view class="search-btn"> 搜索 </view>
      </view>
      <view class="search-gaoji"> 高级 ></view></view
    >
  </view>
</template>

<script setup lang="ts">
const leftClick = () => history.back();
import { getEnvValue } from '@/utils/env';
import { getTitle } from '@/utils';

const title = getTitle() || getEnvValue<string>('VITE_APP_TITLE');

/*const props = withDefaults(
  defineProps<{
    title: string;
  }>(),
  {
    title: getEnvValue<string>('VITE_APP_TITLE'),
  }
);*/
</script>

<style lang="scss">
.page {
  background: linear-gradient(to bottom, #47aaff, #53d0fc);
  width: 100%;
  padding: 15rpx;
  padding-bottom: 20rpx;
  .navbar {
    display: flex;
    justify-content: space-between;
    margin-top: 10rpx;
    margin-bottom: 20rpx;
    > * {
      flex: 1;
    }
    .title {
      text-align: center;
    }
  }
  .search {
    display: flex;
    width: 100%;
    .search-bar {
      width: 85%;
      height: 70rpx;
      background: white;
      border-radius: 20rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      .search-btn {
        border-left: 1px solid rgba(209, 208, 208, 0.9);
        color: #118dd9;
        padding: 0 10rpx;
        width: 15%;
        text-align: center;
        font-size: 30rpx;
      }
      .search-icon {
        text-align: center;
        width: 10%;
        font-size: 40rpx;
        padding-left: 8rpx;
      }
      .search-input {
        width: 75%;
      }
    }
    .search-gaoji {
      width: 15%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      margin-left: 15rpx;
      font-size: 32rpx;
    }
  }
}
</style>
