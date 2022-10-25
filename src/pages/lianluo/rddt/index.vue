<template>
  <view>
    <navbar></navbar>
    <view class="body">
      <view class="tongjitu">
        <tubiao></tubiao>
      </view>
    </view>
    <view class="list" v-for="(item, index) in dataList" :key="index">
      <view class="list-title">
        <text>{{ item.title }}</text>
        <text class="more">更多 > </text>
      </view>
      <view class="data">
        <view v-for="(data, index) in item.datas" :key="index">
          <view class="data-title"
            >{{ data.title }}<img :src="data.img" />
          </view>
          <view class="data-info">
            <view>
              <van-icon name="location-o" />
              {{ data.location }}
            </view>
            <view>
              <van-icon name="clock-o" />
              {{ data.date }}
            </view>
            <view>
              <van-icon name="eye-o" />
              {{ data.views }}
            </view>
          </view>
          <view v-if="index != item.datas.length - 1" class="divider"> </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import navbar from '@/components/navbar';
import tubiao from './components/tubiao';
import dataList from './dataList';
</script>

<style lang="scss">
page {
  background: white;
}
.body {
  padding: 0 10rpx;
  margin-top: 20rpx;
}
.list {
  margin-top: 30rpx;
  padding: 0 10rpx;
  .list-title {
    padding: 0 15rpx;
    display: flex;
    width: 100%;
    height: 60rpx;
    justify-content: space-between;
    align-items: center;
    color: white;
    background: linear-gradient(to right, #1876cf, #a7daf9);
    font-size: 35rpx;
    .more {
      text-decoration: underline;
      font-size: 30rpx;
    }
  }
  .data {
    margin-top: 20rpx;
    > view {
      display: flex;
      flex-direction: column;
      .data-title {
        display: flex;
        height: 140rpx;
        justify-content: space-between;
        img {
          height: 100%;
          width: 200rpx;
        }
        text {
          word-break: break-all;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
        }
      }
      .data-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10rpx;
        > view {
          font-size: 25rpx;
          color: gray;
        }
      }
      .divider {
        height: 0.5px;
        background: rgba(209, 208, 208, 0.5);
        margin: 15rpx 0;
      }
    }
  }
}
</style>
