<template>
  <view>
    <navbar></navbar>
    <view class="list" v-for="(item, index) in dataList" :key="index">
      <view class="list-title">
        <text>{{ item.title }}</text>
        <text class="more">更多 > </text>
      </view>
      <view class="data">
        <view v-for="(data, index) in item.datas" :key="index">
          <view class="data-head">
            <text class="data-title">{{ data.title }}</text>
            <view>
              <view>
                <van-icon name="clock-o" /><text class="data-time"
                  >时间：{{ data.date }}</text
                >
              </view>
              <text class="data-tag">{{ data.tag }}</text>
            </view>
          </view>
          <view class="data-userlist">
            <view v-for="(user, index) in data.userlist" :key="index">
              <img :src="user.avatar" />
              <text> {{ user.username }} </text>
            </view>
          </view>
          <view class="data-options">
            <view class="data-apply">
              <text>报名</text><view>申请旁听</view> <span>/</span>
              <view>报名参会</view>
            </view>
            <view>进入会议<van-icon name="arrow" /></view>
          </view>
          <view v-if="index != item.datas.length - 1" class="divider"> </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import navbar from '@/components/navbar';
import dataList from './dataList';
</script>

<style lang="scss">
page {
  background: white;
}
.list {
  margin-top: 10rpx;
  padding: 0 10rpx;
  .list-title {
    padding: 0 15rpx;
    display: flex;
    width: 100%;
    height: 60rpx;
    justify-content: space-between;
    align-items: center;
    color: white;
    background: linear-gradient(to right, #62CFEE, #43acf9);
    font-size: 35rpx;
    .more {
      text-decoration: underline;
      font-size: 30rpx;
    }
  }
  .data {
    margin-top: 20rpx;
    .data-head {
      margin-bottom: 45rpx;
      .data-title {
        font-size: 32rpx;
        // font-weight: 600;
      }
      > view {
        color: gray;
        margin-top: 5rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .data-tag {
          padding: 3rpx 10rpx;
          color: white;
          background: #47aafc;
          font-size: 26rpx;
        }
        .data-time {
          margin-left: 5rpx;
        }
      }
    }
    .data-userlist {
      display: flex;
      margin-bottom: 35rpx;
      > view {
        height: 100rpx;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          height: 100%;
          border-radius: 50%;
        }
        text {
          margin-top: 5rpx;
          font-size: 30rpx;
        }
      }
    }
    .data-options {
      display: flex;
      margin-top: 50rpx;
      margin-bottom: 20rpx;
      align-items: center;
      justify-content: space-between;
      .data-apply {
        color: #1876cf;
        display: flex;
        align-items: center;
        > * {
          margin-left: 10rpx;
        }
        > text {
          background: #1876cf;
          padding: 3rpx 13rpx;
          font-size: 26rpx;
          color: white;
        }
      }
    }
  }
}
.divider {
  height: 0.5px;
  background: rgba(209, 208, 208, 0.5);
  margin: 15rpx 0;
}
</style>
