<template>
  <view>
    <view class="banner">
      <img src="../../../../static/images/home/人大分布概况图.png" />
      联络站概述
    </view>
    <view class="tongji">
      <view>
        <view class="tongji-icon">
          <van-icon name="home-o" color="#419387" />
          联络站
        </view>
        <view class="tongji-num" style="color: #b8589d"> 1503 </view>
      </view>
      <view>
        <view class="tongji-icon">
          <van-icon name="eye-o" color="#708CA4" />
          点击率
        </view>
        <view class="tongji-num" style="color: #395651"> 195.5万 </view>
      </view>
      <view>
        <view class="tongji-icon">
          <van-icon name="manager-o" color="#4EA7EC" />
          驻站代表
        </view>
        <view class="tongji-num" style="color: #d74325"> 83332 </view>
      </view>
    </view>
    <view class="charts">
      <view>
        <view class="chart-title">联络站分布概况</view>
        <map-chart></map-chart>
      </view>
      <!-- <view>
        <view class="chart-title">工作数据</view>
        <img src="../../../../static/images/home/折线图.png" alt="" />
      </view> -->
    </view>
  </view>
</template>

<script setup lang="ts">
import mapChart from '@/components/charts/map-chart';
</script>

<style lang="scss">
.banner {
  border-radius: 15rpx;
  position: relative;
  background: url('../../../../static/images/home/分布概况背景.png') 55% 55%;
  height: 90rpx;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 30rpx;
  color: white;
  font-size: 35rpx;
  img {
    position: absolute;
    height: 90%;
    right: 0;
    bottom: 0;
  }
}
.tongji {
  display: flex;
  align-items: center;
  margin-top: 20rpx;
  > view {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-right: 1px solid rgba(222, 222, 222, 0.8);
    flex: 1;
    .tongji-num {
      font-size: 35rpx;
      margin-top: 3rpx;
    }
  }
  > view:last-child {
    border: none;
  }
}
.charts {
  height: 500rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20rpx;
  > view {
    height: 100%;
    border-radius: 15rpx;
    overflow: hidden;
    flex: 1;
    // margin-left: 2%;
    position: relative;
    background: white;
    .chart-title {
      position: absolute;
      border-radius: 0 0 15rpx 0;
      background: #c6e1c0;
      color: #186a08;
      padding: 3rpx 8rpx;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
