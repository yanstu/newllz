<template>
  <view>
    <navbar></navbar>
    <view class="body">
      <view class="changzhu">
        <view
          @click="changzhuClick(item)"
          :key="item"
          v-for="item in changzhuList"
        >
          <van-badge :show-zero="false" :content="item.badge">
            <van-icon size="45" color="#49AFFE" :name="item.icon" />
          </van-badge>
          <text>{{ item.text }}</text>
        </view>
      </view>
      <view class="tongjitu">
        <tubiao></tubiao>
      </view>
    </view>
    <view class="list">
      <view class="list-title">
        <text>履职活动</text>
        <text class="more">更多 > </text>
      </view>
      <view class="data">
        <view v-for="(data, index) in dataList" :key="index">
          <view class="data-title">{{ data.title }}</view>
          <view class="imglist">
            <img v-for="img in data.imglist" :src="img" :key="img" />
          </view>
          <view class="data-info">
            <view>
              <van-icon name="location-o" />
              {{ data.location }}
            </view>
            <view>
              <van-icon name="user-o" />
              {{ data.zuozhe }}
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
          <view v-if="index != dataList.length - 1" class="divider"> </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import changzhuList, { changzhu } from './changzhuList';
import tubiao from './components/tubiao';
import navbar from '@/components/navbar';
import dataList from './dataList';
</script>

<style lang="scss">
page {
  background: white;
}
.body {
  padding: 0 10rpx;
  margin-top: 20rpx;
  .changzhu {
    display: flex;
    justify-content: center;
    align-items: center;
    > view {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      flex: 1;
      text {
        margin-top: 5rpx;
      }
    }
  }
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
      .imglist {
        margin-top: 10rpx;
        width: 100%;
        height: 200rpx;
        display: flex;
        > img {
          height: 100%;
          width: 33%;
          margin-right: 5rpx;
        }
        > image:last-child {
          margin-right: 0;
        }
      }
      .data-title {
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
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
