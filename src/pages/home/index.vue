<template>
  <view>
    <!-- 头部 -->
    <view class="home-head">
      <view class="head-search">
        <view class="search-bar">
          <van-icon class="search-icon" name="search" />
          <input
            class="search-input"
            v-model="searchValue"
            type="text"
            placeholder="请输入关键字"
            placeholder-color="#ccc"
          />
          <view class="search-btn"> 搜索 </view>
        </view>
      </view>
      <view class="head-box">
        <view
          @click="changzhuClick(item)"
          :key="item"
          v-for="item in changzhuList"
        >
          <van-icon
            size="40"
            :color="item.color"
            class="func-icon"
            :name="item.icon"
          />
          {{ item.text }}
        </view>
      </view>
    </view>
    <!-- 功能区 -->
    <view class="home-body">
      <van-config-provider :theme-vars="themeVars">
        <van-grid
          class="body-grid"
          gutter="0"
          clickable
          :border="false"
          :column-num="5"
          icon-size="32"
        >
          <van-grid-item
            class="body-grid-item"
            style="background: transparent"
            :key="item"
            v-for="item in funcList"
            :icon="item.icon"
            :text="item.text"
            @click="funcClick(item)"
          />
        </van-grid>
      </van-config-provider>
    </view>
    <!-- 信息显示区 -->
    <view class="home-foot">
      <llz></llz>
      <dbfc></dbfc>
      <rddt></rddt>
      <sqmy></sqmy>
      <mfd></mfd>
    </view>
    <tabbar></tabbar>
  </view>
</template>
<script setup lang="ts">
import { router } from '@/utils/router';
import dbfc from './components/dbfc';
import mfd from './components/mfd';
import rddt from './components/rddt';
import sqmy from './components/sqmy';
import llz from './components/llz';
import funcList, { func } from './funcList';
import changzhuList, { changzhu } from './changzhuList';
import tabbar from '@/components/tabbar';
import { Toast } from 'Vant';
import mapChart from '@/components/charts/map-chart';

const searchValue = ref('');
const themeVars = ref({
  gridItemContentBackgroundColor: 'transparent',
  gridItemContentPadding: '10rpx',
  gridItemTextFontSize: '28rpx',
});

const funcClick = (item: func) => {
  item.url &&
    uni.navigateTo({
      url: item.url,
    });
};
const changzhuClick = (item: changzhu) => {
  console.log(typeof item.url);
  if (typeof item.url == 'string') {
    item.url &&
      uni.navigateTo({
        url: item.url,
      });
  } else if (typeof item.url == 'function') {
    item.url && item.url();
  }
};
</script>
<style lang="scss">
page {
  overflow: hidden;
}
.home-head {
  .head-search {
    width: 140%;
    height: 250rpx;
    background: linear-gradient(to bottom, #47aaff, #53d0fc);
    border-radius: 0 0 50% 50%;
    margin-left: -20%;
    position: relative;
    .search-bar {
      width: 92vw;
      height: 70rpx;
      margin-left: 17%;
      background: white;
      border-radius: 20rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 30rpx;
      .search-btn {
        border-left: 1px solid rgba(209, 208, 208, 0.5);
        color: #47aaff;
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
  }
  .head-box {
    height: 170rpx;
    position: absolute;
    top: 130rpx;
    width: 92%;
    margin-left: 4%;
    background: #ffffff;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.06);
    border-radius: 20rpx;
    display: flex;
    flex-direction: row;
    > view {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #47aaff;
      .func-icon {
        margin-bottom: 10rpx;
      }
    }
  }
}
.home-body {
  margin-top: 80rpx;
}
.home-foot {
  margin-top: 40rpx;
  padding: 0 15rpx;
}
</style>
